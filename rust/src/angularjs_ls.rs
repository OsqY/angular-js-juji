use std::fs;
use std::path::PathBuf;

use zed_extension_api::{self as zed, LanguageServerId, Result};

/// The bundled LSP server JS, embedded at compile time via `include_str!`.
/// Built by running `node scripts/build-bundle.js` in the repo root.
const SERVER_BUNDLE: &str = include_str!("../../server-bundle.js");

/// Manages the lifecycle of the Node-based AngularJS LSP server.
///
/// The LSP server is bundled into a single JS file at build time and embedded
/// directly into the Wasm extension. At first launch we write it to the
/// extension's working directory, then spawn Node to execute it.
///
/// This avoids any dependency on external files or npm at runtime.
pub struct AngularJsLs {
    did_install: bool,
}

impl AngularJsLs {
    pub const LANGUAGE_SERVER_ID: &'static str = "angularjs-lsp";

    pub fn new() -> Self {
        Self { did_install: false }
    }

    /// Returns the command to start the AngularJS LSP server.
    ///
    /// Priority:
    /// 1. User-configured binary path (via LSP settings) — overrides everything
    /// 2. `angularjs-lsp` on PATH — for development / manual install
    /// 3. Embedded bundle — `node <cwd>/server-bundle.js --stdio`
    pub fn language_server_command(
        &mut self,
        language_server_id: &LanguageServerId,
        worktree: &zed::Worktree,
    ) -> Result<zed::Command> {
        // 1. User-configured binary
        let binary_settings = zed::settings::LspSettings::for_worktree(
            Self::LANGUAGE_SERVER_ID,
            worktree,
        )
        .ok()
        .and_then(|s| s.binary);

        if let Some(path) = binary_settings.as_ref().and_then(|b| b.path.clone()) {
            let args = binary_settings
                .as_ref()
                .and_then(|b| b.arguments.clone())
                .unwrap_or_default();
            return Ok(zed::Command {
                command: path,
                args,
                env: vec![],
            });
        }

        // 2. On PATH (for dev)
        if let Some(path) = worktree.which("angularjs-lsp") {
            return Ok(zed::Command {
                command: path,
                args: vec!["--stdio".to_string()],
                env: vec![],
            });
        }

        // 3. Embedded bundle
        let node_path = zed::node_binary_path()?;

        // On first launch, write the bundled server to the work directory
        // and install npm deps.
        let ext_cwd = std::env::current_dir()
            .map_err(|e| format!("failed to get extension working directory: {e}"))?;

        if !self.did_install {
            self.install_bundle(language_server_id, &ext_cwd)?;
            self.did_install = true;
        }

        let bundle_path = ext_cwd.join("server-bundle.js");

        Ok(zed::Command {
            command: node_path,
            args: vec![
                bundle_path.to_string_lossy().to_string(),
                "--stdio".to_string(),
            ],
            env: vec![],
        })
    }

    /// Writes the embedded server bundle to the extension's working directory.
    ///
    /// The bundle is a self-contained single JS file (~765 KB) that includes
    /// all npm dependencies (vscode-languageserver, meriyah). No additional
    /// npm install at runtime is needed.
    fn install_bundle(
        &mut self,
        language_server_id: &LanguageServerId,
        ext_cwd: &PathBuf,
    ) -> Result<()> {
        zed::set_language_server_installation_status(
            language_server_id,
            &zed::LanguageServerInstallationStatus::Downloading,
        );

        let bundle_path = ext_cwd.join("server-bundle.js");

        // Skip write if the bundle already exists and is valid
        if bundle_path.exists() {
            if let Ok(content) = fs::read_to_string(&bundle_path) {
                if content.len() == SERVER_BUNDLE.len() {
                    return Ok(());
                }
            }
        }

        fs::write(&bundle_path, SERVER_BUNDLE).map_err(|e| {
            format!("failed to write server bundle to {:?}: {e}", bundle_path)
        })?;

        Ok(())
    }
}

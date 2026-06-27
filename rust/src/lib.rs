mod angularjs_ls;

use serde_json;
use zed_extension_api::{self as zed, LanguageServerId, Result};

use crate::angularjs_ls::AngularJsLs;

struct AngularJsJujiExtension {
    angularjs_ls: Option<AngularJsLs>,
}

impl zed::Extension for AngularJsJujiExtension {
    fn new() -> Self {
        Self { angularjs_ls: None }
    }

    /// Returns the command to start the AngularJS LSP server.
    fn language_server_command(
        &mut self,
        language_server_id: &LanguageServerId,
        worktree: &zed::Worktree,
    ) -> Result<zed::Command> {
        match language_server_id.as_ref() {
            AngularJsLs::LANGUAGE_SERVER_ID => {
                let ls = self
                    .angularjs_ls
                    .get_or_insert_with(AngularJsLs::new);
                ls.language_server_command(language_server_id, worktree)
            }
            id => Err(format!("unknown language server: {id}")),
        }
    }

    /// Passes through initialization options from LSP settings.
    fn language_server_initialization_options(
        &mut self,
        language_server_id: &LanguageServerId,
        worktree: &zed::Worktree,
    ) -> Result<Option<serde_json::Value>> {
        match language_server_id.as_ref() {
            AngularJsLs::LANGUAGE_SERVER_ID => {
                Ok(zed::settings::LspSettings::for_worktree(
                    language_server_id.as_ref(),
                    worktree,
                )
                .ok()
                .and_then(|s| s.initialization_options))
            }
            _ => Ok(None),
        }
    }

    /// Passes through workspace configuration from LSP settings.
    fn language_server_workspace_configuration(
        &mut self,
        language_server_id: &LanguageServerId,
        worktree: &zed::Worktree,
    ) -> Result<Option<serde_json::Value>> {
        match language_server_id.as_ref() {
            AngularJsLs::LANGUAGE_SERVER_ID => {
                Ok(zed::settings::LspSettings::for_worktree(
                    language_server_id.as_ref(),
                    worktree,
                )
                .ok()
                .and_then(|s| s.settings))
            }
            _ => Ok(None),
        }
    }

    /// Styles completion labels so AngularJS constructs are visually distinct.
    fn label_for_completion(
        &self,
        _language_server_id: &LanguageServerId,
        completion: zed::lsp::Completion,
    ) -> Option<zed::CodeLabel> {
        use zed::lsp::CompletionKind;

        let highlight_name = match completion.kind? {
            CompletionKind::Function | CompletionKind::Method => "function",
            CompletionKind::Variable | CompletionKind::Property | CompletionKind::Field => {
                "property"
            }
            CompletionKind::Class | CompletionKind::Constructor => "type",
            CompletionKind::Constant => "constant",
            _ => return None,
        };

        let len = completion.label.len();
        let name_span =
            zed::CodeLabelSpan::literal(completion.label, Some(highlight_name.to_string()));

        Some(zed::CodeLabel {
            code: Default::default(),
            spans: if let Some(detail) = completion.detail {
                vec![
                    name_span,
                    zed::CodeLabelSpan::literal(" ", None),
                    zed::CodeLabelSpan::literal(detail, None),
                ]
            } else {
                vec![name_span]
            },
            filter_range: (0..len).into(),
        })
    }
}

zed::register_extension!(AngularJsJujiExtension);

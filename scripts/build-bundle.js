/**
 * Bundles the LSP server into a single JS file using esbuild.
 * The bundle includes all npm dependencies (vscode-languageserver, meriyah)
 * and marks Node built-ins as external.
 */
const esbuild = require("esbuild");
const path = require("path");

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, "../server/dist/server.js")],
    bundle: true,
    platform: "node",
    target: "node22",
    outfile: path.resolve(__dirname, "../server-bundle.js"),
    external: ["node:*"],
    minify: false,
    sourcemap: false,
    format: "cjs",
    logLevel: "info",
  })
  .then(() => {
    console.log("✓ server-bundle.js built successfully");
  })
  .catch((err) => {
    console.error("✗ bundle failed:", err.message);
    process.exit(1);
  });

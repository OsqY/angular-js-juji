/**
 * AngularJS LSP Server — entry point.
 *
 * Implements `textDocument/definition` and `textDocument/references` for
 * AngularJS 1.x cross-file navigation between HTML templates and JS controllers.
 *
 * Architecture:
 * 1. On `initialized`, walk the workspace → scan JS + HTML files → build SymbolTable
 * 2. On file change (`didOpen`, `didSave`), re-scan the changed file → update table
 * 3. On `definition`/`references`, query the symbol table and return locations
 */

import {
  createConnection,
  TextDocuments,
  InitializeParams,
  InitializeResult,
  TextDocumentPositionParams,
  Location,
  Position,
  Range,
  TextDocumentSyncKind,
  ProposedFeatures,
  TextDocumentChangeEvent,
  Diagnostic,
  DiagnosticSeverity,
  CompletionItem,
  CompletionItemKind,
  MarkupKind,
} from "vscode-languageserver/node";

import { TextDocument } from "vscode-languageserver-textdocument";
import * as path from "path";
import * as fs from "fs";

import { scanWorkspace, scanJsFile, scanHtmlFile } from "./scanner.js";
import {
  buildSymbolTable,
  findDefinitions,
  findAllReferences,
  detectAngularJs,
} from "./analyzer.js";
import type { SymbolTable, TemplateFile } from "./types.js";
import type { JsScanResult } from "./scanner.js";

// --------------- Connection ---------------

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

// --------------- State ---------------

let workspaceRoot: string | null = null;
let symbolTable: SymbolTable | null = null;
let isAngularJsProject = false;
let scanInProgress = false;

/**
 * Persistent maps of per-file scan results. We keep these around so that
 * re-scanning one file (on didOpen / didSave) doesn't wipe out data from
 * the other files. The symbol table is always rebuilt from these maps.
 */
const jsResultsByUri: Map<string, JsScanResult> = new Map();
const htmlResultsByUri: Map<string, TemplateFile> = new Map();

// --------------- Helpers ---------------

/** Convert a file:// URI to an absolute filesystem path. */
function uriToPath(uri: string): string {
  return uri.startsWith("file://") ? uri.slice(7) : uri;
}

/** Extract the identifier name at the cursor position in a document. */
function getIdentifierAtPosition(
  doc: TextDocument,
  pos: Position,
): string | null {
  const text = doc.getText();
  const offset = doc.offsetAt(pos);

  // Walk backwards to find start of word
  let start = offset;
  while (start > 0 && /[\w$]/.test(text[start - 1])) start--;

  // Walk forwards to find end of word
  let end = offset;
  while (end < text.length && /[\w$]/.test(text[end])) end++;

  if (start >= end) return null;
  const word = text.slice(start, end);

  // If it's an AngularJS keyword, skip
  if (["$scope", "$rootScope", "$event", "this", "angular"].includes(word)) {
    return null;
  }

  // If we're on a $scope.xxx, extract the xxx part
  if (word === "$scope") {
    // Check for $scope.xxx pattern after the cursor
    const dotEnd = offset + 1;
    if (text[offset] === ".") {
      let propStart = offset + 1;
      let propEnd = propStart;
      while (propEnd < text.length && /[\w$]/.test(text[propEnd])) propEnd++;
      return text.slice(propStart, propEnd) || null;
    }
    return null;
  }

  return word;
}

/** Convert our DefinitionResult to an LSP Location. */
function toLocation(
  def: { uri: string; line: number; column: number },
): Location {
  return Location.create(
    def.uri,
    Range.create(
      Position.create(def.line, def.column),
      Position.create(def.line, def.column + 1),
    ),
  );
}

// --------------- Workspace scanning ---------------

function startWorkspaceScan() {
  if (scanInProgress || !workspaceRoot) return;
  scanInProgress = true;

  connection.console.info(
    `[AngularJS LSP] Scanning workspace: ${workspaceRoot}`,
  );

  // Run detection first
  isAngularJsProject = detectAngularJs(workspaceRoot);

  if (!isAngularJsProject) {
    connection.console.info(
      "[AngularJS LSP] Not an AngularJS project — no-op mode",
    );
    scanInProgress = false;
    return;
  }

  connection.sendNotification("window/workDoneProgress/create", {
    token: "angularjs-scan",
    title: "Indexing AngularJS project...",
    percentage: 0,
  });

  const { jsResults, htmlResults } = scanWorkspace({
    rootDir: workspaceRoot,
    progress: (file) => {
      connection.console.info(`[AngularJS LSP] Scanning: ${file}`);
    },
  });

  // Store results in persistent maps so single-file updates don't wipe them
  jsResultsByUri.clear();
  htmlResultsByUri.clear();
  for (const r of jsResults) jsResultsByUri.set(r.uri, r);
  for (const t of htmlResults) htmlResultsByUri.set(t.uri, t);

  symbolTable = buildSymbolTable(
    Array.from(jsResultsByUri.values()),
    Array.from(htmlResultsByUri.values()),
  );

  let memberCount = 0;
  let templateCount = symbolTable.templates.size;
  for (const [, comp] of symbolTable.components) {
    memberCount += comp.scopeMembers.length;
  }

  connection.console.info(
    `[AngularJS LSP] Scan complete: ${symbolTable.modules.size} modules, ` +
      `${symbolTable.components.size} components, ` +
      `${memberCount} scope members, ` +
      `${templateCount} templates, ` +
      `${symbolTable.referenceIndex.size} unique symbols referenced.`,
  );

  // Publish diagnostics for all known files now that the scan is done
  recomputeAndPublishDiagnostics();

  scanInProgress = false;
}

/**
 * Re-scan a single file and update the symbol table incrementally.
 *
 * Updates the persistent per-file map for this URI, then rebuilds the
 * full symbol table from ALL maps. This way, the data from other files
 * is preserved (no more wiping the table with only the new file's data).
 */
function updateFile(uri: string) {
  if (!symbolTable || !workspaceRoot) return;

  const absPath = uriToPath(uri);
  if (!fs.existsSync(absPath)) return;

  const ext = path.extname(absPath).toLowerCase();

  if (ext === ".js") {
    const result = scanJsFile(absPath);
    jsResultsByUri.set(uri, result);
  } else if (ext === ".html") {
    const result = scanHtmlFile(absPath);
    htmlResultsByUri.set(uri, result);
  } else {
    return;
  }

  // Rebuild the symbol table from ALL persisted scan results
  symbolTable = buildSymbolTable(
    Array.from(jsResultsByUri.values()),
    Array.from(htmlResultsByUri.values()),
  );

  connection.console.info(
    `[AngularJS LSP] Incremental update for ${path.basename(absPath)}: ` +
      `tables now contain ${jsResultsByUri.size} JS + ${htmlResultsByUri.size} HTML files.`,
  );

  // Re-publish diagnostics after every update
  recomputeAndPublishDiagnostics();
}

// --------------- LSP Handlers ---------------

connection.onInitialize((params: InitializeParams): InitializeResult => {
  // Use the first workspace folder as root
  workspaceRoot = params.workspaceFolders?.[0]
    ? uriToPath(params.workspaceFolders[0].uri)
    : params.rootUri
      ? uriToPath(params.rootUri)
      : process.cwd();

  connection.console.info(
    `[AngularJS LSP] Initializing — root: ${workspaceRoot}`,
  );

  return {
    capabilities: {
      textDocumentSync: {
        change: TextDocumentSyncKind.Full,
        openClose: true,
        save: true,
      },
      definitionProvider: true,
      referencesProvider: true,
      completionProvider: {
        resolveProvider: false,
        triggerCharacters: ["."],
      },
      hoverProvider: true,
    },
  };
});

connection.onInitialized(() => {
  // Start the workspace scan (non-blocking from the LSP perspective)
  startWorkspaceScan();
});

// File open — trigger incremental re-index if AngularJS project
documents.onDidOpen((e: TextDocumentChangeEvent<TextDocument>) => {
  if (!isAngularJsProject) return;
  updateFile(e.document.uri);
  // Diagnostics are already re-published by updateFile
});

// File save — re-index the saved file
documents.onDidSave((e: TextDocumentChangeEvent<TextDocument>) => {
  if (!isAngularJsProject) return;
  updateFile(e.document.uri);
});

// --------------- textDocument/definition ---------------

connection.onDefinition(
  (params: TextDocumentPositionParams): Location | Location[] | null => {
    if (!symbolTable || !isAngularJsProject) return null;

    const doc = documents.get(params.textDocument.uri);
    if (!doc) return null;

    const name = getIdentifierAtPosition(doc, params.position);
    if (!name) return null;

    connection.console.info(
      `[AngularJS LSP] Go to definition: "${name}" in ${params.textDocument.uri}`,
    );

    const results = findDefinitions(
      name,
      params.textDocument.uri,
      symbolTable,
    );

    connection.console.info(
      `[AngularJS LSP] Found ${results.length} candidate(s) for "${name}"`,
    );

    if (results.length === 0) return null;

    // Return locations — Zed handles single vs multiple display
    return results.map(toLocation);
  },
);

// --------------- textDocument/references ---------------

connection.onReferences(
  (params: TextDocumentPositionParams): Location[] | null => {
    if (!symbolTable || !isAngularJsProject) return null;

    const doc = documents.get(params.textDocument.uri);
    if (!doc) return null;

    const name = getIdentifierAtPosition(doc, params.position);
    if (!name) return null;

    connection.console.info(
      `[AngularJS LSP] Find references: "${name}" in ${params.textDocument.uri}`,
    );

    const results = findAllReferences(
      name,
      params.textDocument.uri,
      symbolTable,
    );

    connection.console.info(
      `[AngularJS LSP] Found ${results.length} reference(s) for "${name}"`,
    );

    if (results.length === 0) return null;

    return results.map(toLocation);
  },
);

// --------------- textDocument/hover ---------------

connection.onHover((params: TextDocumentPositionParams) => {
  if (!symbolTable || !isAngularJsProject) return null;

  const doc = documents.get(params.textDocument.uri);
  if (!doc) return null;

  const name = getIdentifierAtPosition(doc, params.position);
  if (!name) return null;

  const results = findDefinitions(name, params.textDocument.uri, symbolTable);
  if (results.length === 0) return null;

  // Build a markdown hover that includes the inferred type and return type
  // (for scope members) plus the location of each candidate.
  const memberInfo = symbolTable.memberIndex.get(name) || [];
  const typeLine =
    memberInfo.length > 0
      ? `\n**Inferred type:** \`${memberInfo[0].type}\`` +
        (memberInfo[0].returnType
          ? ` → returns \`${memberInfo[0].returnType}\``
          : "")
      : "";

  const lines = results.map(
    (r) => `- ${r.label} — \`${r.uri.split("/").pop()}:${r.line + 1}:${r.column + 1}\``,
  );

  return {
    contents: {
      kind: MarkupKind.Markdown,
      value: `**AngularJS** — \`${name}\`${typeLine}\n\n${lines.join("\n")}`,
    },
  };
});

// --------------- textDocument/diagnostics ---------------

const lastDiagnosticsByUri: Map<string, Diagnostic[]> = new Map();

function computeDiagnosticsForUri(uri: string): Diagnostic[] {
  if (!symbolTable) return [];
  const diags: Diagnostic[] = [];
  const isHtml = uri.endsWith(".html");
  const isJs = uri.endsWith(".js");
  if (!isHtml && !isJs) return [];

  if (isHtml) {
    const tmpl = symbolTable.templates.get(uri);
    if (!tmpl) return [];
    const declared = new Set(symbolTable.components.size > 0
      ? Array.from(symbolTable.components.keys())
          .filter((k) => k.startsWith("controller:"))
          .map((k) => k.slice("controller:".length))
      : []);

    for (const expr of tmpl.expressions) {
      for (const refName of expr.references) {
        // ng-controller value should match a registered controller
        if (
          expr.expression.trim() === refName &&
          !symbolTable.memberIndex.has(refName) &&
          declared.has(refName)
        ) {
          // this is the controller name itself — already handled
          continue;
        }
        // ng-controller with unregistered name
        if (
          declared.size > 0 &&
          expr.expression.trim() === refName &&
          !declared.has(refName) &&
          !symbolTable.memberIndex.has(refName)
        ) {
          // skip — we don't have a good way to know if this is a controller
        }
        // Reference to a non-existent scope member
        if (
          !symbolTable.memberIndex.has(refName) &&
          !["$scope", "$rootScope", "$event", "this", "undefined", "null", "true", "false"].includes(refName)
        ) {
          // Only emit for tokens that look like property access (not a string literal)
          // and that aren't filtered keywords
          if (!/^['"]/.test(expr.expression)) {
            diags.push({
              severity: DiagnosticSeverity.Warning,
              range: Range.create(
                Position.create(expr.location.line, expr.location.column),
                Position.create(expr.location.line, expr.location.column + expr.expression.length),
              ),
              message: `\`${refName}\` is not defined in the current controller's scope.`,
              source: "angularjs-lsp",
            });
          }
        }
      }
    }
  }

  if (isJs) {
    // Check injections of services that don't exist
    for (const [, comp] of symbolTable.components) {
      if (comp.kind !== "controller") continue;
      for (const inj of comp.injections) {
        if (inj.isBuiltIn) continue;
        const exists =
          symbolTable.components.has(`service:${inj.name}`) ||
          symbolTable.components.has(`factory:${inj.name}`) ||
          symbolTable.components.has(`component:${inj.name}`);
        if (!exists) {
          diags.push({
            severity: DiagnosticSeverity.Warning,
            range: Range.create(
              Position.create(inj.location.line, inj.location.column),
              Position.create(inj.location.line, inj.location.column + inj.name.length),
            ),
            message: `Injected service \`${inj.name}\` is not registered in any module.`,
            source: "angularjs-lsp",
          });
        }
      }
    }
  }

  return diags;
}

function recomputeAndPublishDiagnostics() {
  if (!symbolTable) return;
  // Re-publish diagnostics for every known HTML/JS file
  const allUris = new Set<string>();
  for (const uri of symbolTable.templates.keys()) allUris.add(uri);
  for (const result of jsResultsByUri.values()) allUris.add(result.uri);

  for (const uri of allUris) {
    const diags = computeDiagnosticsForUri(uri);
    lastDiagnosticsByUri.set(uri, diags);
    connection.sendDiagnostics({ uri, diagnostics: diags });
  }
}

documents.onDidChangeContent(() => {
  recomputeAndPublishDiagnostics();
});

// --------------- textDocument/completion ---------------

connection.onCompletion((params: TextDocumentPositionParams): CompletionItem[] => {
  if (!symbolTable || !isAngularJsProject) return [];

  const doc = documents.get(params.textDocument.uri);
  if (!doc) return [];

  // Only suggest in HTML files for now
  if (!params.textDocument.uri.endsWith(".html")) return [];

  const tmpl = symbolTable.templates.get(params.textDocument.uri);
  if (!tmpl || !tmpl.controllerName) return [];

  const ctrlKey = `controller:${tmpl.controllerName}`;
  const comp = symbolTable.components.get(ctrlKey);
  if (!comp) return [];

  // Collect scope members from this controller and (naively) any controller
  // with the same name in another module.
  const items: CompletionItem[] = [];
  const seen = new Set<string>();

  const addMember = (name: string, kind: "function" | "variable" | "object") => {
    if (seen.has(name)) return;
    seen.add(name);
    const itemKind =
      kind === "function"
        ? CompletionItemKind.Function
        : kind === "object"
          ? CompletionItemKind.Module
          : CompletionItemKind.Variable;
    const m = (symbolTable!.memberIndex.get(name) || [])[0];
    const typeTag = m ? `: ${m.type}` : "";
    items.push({
      label: name,
      kind: itemKind,
      detail: `${kind}${typeTag}`,
      documentation: `From ${tmpl!.controllerName}`,
    });
  };

  for (const m of comp.scopeMembers) addMember(m.name, m.kind);
  // Also include scope members from any other controller with the same name
  for (const [, other] of symbolTable.components) {
    if (other.kind === "controller" && other.name === tmpl.controllerName) {
      for (const m of other.scopeMembers) addMember(m.name, m.kind);
    }
  }

  return items;
});

// --------------- Start ---------------

documents.listen(connection);
connection.listen();

connection.console.info("[AngularJS LSP] Server started — waiting for initialization.");

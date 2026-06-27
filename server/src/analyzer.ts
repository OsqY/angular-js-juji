/**
 * Symbol table analyzer — merges raw scan results into an indexed `SymbolTable`
 * that powers Go to Definition and Find References queries.
 */

import * as fs from "fs";
import * as path from "path";

import type {
  SymbolTable,
  AngularModule,
  AngularComponent,
  ScopeMemberSymbol,
  SourceLocation,
  TemplateFile,
  InjectedService,
} from "./types.js";
import type { JsScanResult } from "./scanner.js";

/**
 * Build a `SymbolTable` from parallel JS and HTML scan results.
 */
export function buildSymbolTable(
  jsResults: JsScanResult[],
  htmlResults: TemplateFile[],
): SymbolTable {
  const modules = new Map<string, AngularModule>();
  const components = new Map<string, AngularComponent>();
  const templates = new Map<string, TemplateFile>();
  const memberIndex = new Map<string, ScopeMemberSymbol[]>();
  const referenceIndex = new Map<string, SourceLocation[]>();
  const injectionIndex = new Map<string, InjectedService[]>();

  // Index JS results
  for (const result of jsResults) {
    for (const mod of result.modules) {
      // Merge modules with the same name
      const existing = modules.get(mod.name);
      if (existing) {
        existing.components.push(...mod.components);
      } else {
        modules.set(mod.name, { ...mod, components: [...mod.components] });
      }

      for (const comp of mod.components) {
        const key = `${comp.kind}:${comp.name}`;
        components.set(key, comp);

        for (const member of comp.scopeMembers) {
          const existingMembers = memberIndex.get(member.name) || [];
          existingMembers.push(member);
          memberIndex.set(member.name, existingMembers);
        }

        for (const inj of comp.injections) {
          if (inj.isBuiltIn) continue;
          const existingInj = injectionIndex.get(inj.name) || [];
          existingInj.push(inj);
          injectionIndex.set(inj.name, existingInj);
        }
      }
    }
  }

  // Index HTML results
  for (const tmpl of htmlResults) {
    templates.set(tmpl.uri, tmpl);

    for (const expr of tmpl.expressions) {
      for (const refName of expr.references) {
        const existingRefs = referenceIndex.get(refName) || [];
        existingRefs.push(expr.location);
        referenceIndex.set(refName, existingRefs);
      }
    }
  }

  return {
    modules,
    components,
    templates,
    memberIndex,
    referenceIndex,
    injectionIndex,
  };
}

// --------------- Query helpers ---------------

export interface DefinitionResult {
  uri: string;
  line: number;
  column: number;
  label: string;
  kind: "definition" | "reference";
}

/**
 * Given a symbol name (e.g., "myFunc") and the URI + position of the requesting
 * file, return all possible definition locations.
 *
 * For HTML → JS: look up in `memberIndex` for the controller that owns this scope.
 * For JS → HTML: look up in `referenceIndex` for template usages.
 */
export function findDefinitions(
  symbolName: string,
  contextUri: string,
  table: SymbolTable,
): DefinitionResult[] {
  const results: DefinitionResult[] = [];
  const isHtml = contextUri.endsWith(".html");
  const isJs = contextUri.endsWith(".js");

  if (isHtml) {
    // HTML → JS: find defining $scope members
    const members = table.memberIndex.get(symbolName) || [];
    for (const m of members) {
      results.push({
        uri: m.location.uri,
        line: m.location.line,
        column: m.location.column,
        label: `${m.controllerName}.${m.name} (${m.moduleName})`,
        kind: "definition",
      });
    }

    // Also check component declarations (for ng-controller → controller file)
    const compKey = `controller:${symbolName}`;
    const comp = table.components.get(compKey);
    if (comp) {
      results.push({
        uri: comp.location.uri,
        line: comp.location.line,
        column: comp.location.column,
        label: `Controller: ${comp.name} (${comp.moduleName})`,
        kind: "definition",
      });
    }
  }

  if (isJs) {
    // JS → HTML: find template usages
    const refs = table.referenceIndex.get(symbolName) || [];
    for (const loc of refs) {
      results.push({
        uri: loc.uri,
        line: loc.line,
        column: loc.column,
        label: `Usage in ${loc.uri.split("/").pop()}`,
        kind: "reference",
      });
    }

    // Service injection navigation: if this name is a registered service/factory
    // (e.g. DataService), jump to its definition.
    for (const kind of ["service", "factory", "component"] as const) {
      const key = `${kind}:${symbolName}`;
      const comp = table.components.get(key);
      if (comp) {
        results.push({
          uri: comp.location.uri,
          line: comp.location.line,
          column: comp.location.column,
          label: `${kind}: ${comp.name} (${comp.moduleName})`,
          kind: "definition",
        });
      }
    }
  }

  return results;
}

/**
 * Same as `findDefinitions` but returns ALL locations including both
 * definitions and usages — for "Find All References".
 */
export function findAllReferences(
  symbolName: string,
  contextUri: string,
  table: SymbolTable,
): DefinitionResult[] {
  const results = findDefinitions(symbolName, contextUri, table);

  // Add the reverse direction: if HTML, also add JS defining locations
  // (already included in findDefinitions). If JS, also add template usages.
  // For "all references", also add other JS locations that reference this symbol.
  const isJs = contextUri.endsWith(".js");

  if (isJs) {
    // Also add scope member locations + template usages for a complete picture
    const members = table.memberIndex.get(symbolName) || [];
    for (const m of members) {
      // Add the member definition location (if not already present)
      if (!results.some(
        (r) => r.uri === m.location.uri && r.line === m.location.line,
      )) {
        results.push({
          uri: m.location.uri,
          line: m.location.line,
          column: m.location.column,
          label: `Defined in ${m.controllerName}`,
          kind: "definition",
        });
      }
    }
  }

  return results;
}

/**
 * Check whether a workspace contains AngularJS by scanning for the tell-tale
 * `angular.js` file or `angular.module(` pattern.
 */
export function detectAngularJs(rootDir: string): boolean {
  const SKIP = new Set([
    "node_modules", ".git", "bower_components", "dist", "build",
    ".angular", ".cache", "target", "coverage",
  ]);

  // Find angular.js marker file (up to 3 levels deep)
  let foundMarker = false;
  function walkMarker(dir: string, depth: number) {
    if (depth > 3 || foundMarker) return;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.isFile() && e.name === "angular.js") {
        foundMarker = true;
        return;
      }
      if (e.isDirectory() && !SKIP.has(e.name)) {
        walkMarker(path.join(dir, e.name), depth + 1);
      }
    }
  }
  walkMarker(rootDir, 0);
  if (foundMarker) return true;

  // Search for `angular.module(` in JS files (up to 20, 3 levels deep)
  let jsCount = 0;
  function walkJs(dir: string, depth: number): boolean {
    if (depth > 3 || jsCount >= 20) return false;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return false;
    }
    for (const e of entries) {
      if (e.isFile() && e.name.endsWith(".js")) {
        try {
          const content = fs.readFileSync(path.join(dir, e.name), "utf-8");
          if (content.includes("angular.module(")) return true;
          jsCount++;
        } catch {
          /* skip unreadable */
        }
      }
      if (e.isDirectory() && !SKIP.has(e.name)) {
        if (walkJs(path.join(dir, e.name), depth + 1)) return true;
      }
    }
    return false;
  }
  return walkJs(rootDir, 0);
}

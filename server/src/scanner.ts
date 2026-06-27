/**
 * Workspace scanner — walks JS files, parses them with meriyah, and extracts
 * AngularJS module/controller/directive/service declarations plus $scope
 * member definitions.
 *
 * Also scans HTML files for ng-directives and {{ expressions }}.
 */

import * as fs from "fs";
import * as path from "path";
import * as meriyah from "meriyah";
import type {
  AngularModule,
  AngularComponent,
  ScopeMemberSymbol,
  SourceLocation,
  TemplateExpression,
  TemplateFile,
  InjectedService,
} from "./types.js";

// --------------- helpres ---------------

/** Directories to skip when walking the workspace. */
const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  "bower_components",
  "dist",
  "build",
  ".angular",
  ".cache",
  "coverage",
  ".nyc_output",
]);

/** Convert a relative path or absolute file-system path to a `file://` URI. */
function toUri(absPath: string): string {
  return "file://" + absPath;
}

/** Convert a `file://` URI back to an absolute path. */
function fromUri(uri: string): string {
  return uri.startsWith("file://") ? uri.slice(7) : uri;
}

// --------------- JS scanner (meriyah-based) ---------------

/** Walk the ESTree AST recursively calling `visit` on each node. */
function walkAST(
  node: any,
  visit: (n: any, parent: any) => void,
  parent: any = null,
): void {
  if (!node || typeof node !== "object") return;
  visit(node, parent);
  for (const key of Object.keys(node)) {
    const child = node[key];
    if (Array.isArray(child)) {
      for (const el of child) walkAST(el, visit, node);
    } else if (child && typeof child.type === "string") {
      walkAST(child, visit, node);
    }
  }
}

export interface JsScanResult {
  modules: AngularModule[];
  uri: string;
}

/**
 * Parse a single JS file and extract AngularJS declarations.
 */
export function scanJsFile(absPath: string): JsScanResult {
  const uri = toUri(absPath);
  const source = fs.readFileSync(absPath, "utf-8");

  let ast: any;
  try {
    ast = meriyah.parse(source, {
      module: true,
      next: true,
      loc: true,
      ranges: false,
    });
  } catch {
    // Unparseable file — skip silently
    return { modules: [], uri };
  }

  const modules: AngularModule[] = [];

  // ── Pass 1: find all `angular.module('Name')` declarations ──
  const moduleDecls: Map<string, { name: string; loc: SourceLocation; node: any }> = new Map();
  // ── Variable resolution table: varName → moduleName ──
  const varToModule: Map<string, string> = new Map();

  walkAST(ast, (node, parent) => {
    // Detect `var app = angular.module('Name')` or `var app = angular.module('Name', [])`
    if (
      node.type === "VariableDeclarator" &&
      node.id?.type === "Identifier" &&
      node.init?.type === "CallExpression"
    ) {
      const modCall = resolveAngularModuleCall(node.init);
      if (modCall) {
        varToModule.set(node.id.name, modCall.moduleName);
        if (!moduleDecls.has(modCall.moduleName)) {
          moduleDecls.set(modCall.moduleName, {
            name: modCall.moduleName,
            loc: modCall.moduleLoc,
            node: node.init,
          });
        }
      }
    }

    // Detect direct `angular.module('Name')` call (not assigned to variable)
    if (node.type === "CallExpression") {
      const modCall = resolveAngularModuleCall(node);
      if (modCall && !moduleDecls.has(modCall.moduleName)) {
        moduleDecls.set(modCall.moduleName, {
          name: modCall.moduleName,
          loc: modCall.moduleLoc,
          node,
        });
      }
    }
  });

  // ── Pass 2: find method calls (.controller, .service, etc.) ──
  walkAST(ast, (node, _parent) => {
    if (node.type !== "CallExpression") return;
    const callee = node.callee;
    if (!callee || callee.type !== "MemberExpression") return;
    const methodName = callee.property?.name;
    if (typeof methodName !== "string" || methodName === "module") return;

    let moduleName: string | null = null;
    let moduleLoc: SourceLocation | null = null;

    // Case A: Chained pattern — angular.module('Name').controller(...)
    if (callee.object?.type === "CallExpression") {
      const modCall = resolveAngularModuleCall(callee.object);
      if (modCall) {
        moduleName = modCall.moduleName;
        moduleLoc = modCall.moduleLoc;
      }
    }

    // Case B: Variable reference pattern — app.controller(...) where app = angular.module('Name')
    if (!moduleName && callee.object?.type === "Identifier") {
      const resolved = varToModule.get(callee.object.name);
      if (resolved) {
        const decl = moduleDecls.get(resolved);
        if (decl) {
          moduleName = resolved;
          moduleLoc = decl.loc;
        }
      }
    }

    if (moduleName && moduleLoc) {
      pushParsedComponent(
        moduleName,
        moduleLoc,
        { method: methodName, node, args: node.arguments || [] },
        source,
        uri,
        modules,
      );
    }
  });

  return { modules, uri };
}

/**
 * Check if a CallExpression is `angular.module('Name')` and return module info.
 */
function resolveAngularModuleCall(
  node: any,
): { moduleName: string; moduleLoc: SourceLocation } | null {
  if (node.type !== "CallExpression") return null;
  const callee = node.callee;
  if (
    !callee ||
    callee.type !== "MemberExpression" ||
    callee.property?.name !== "module"
  )
    return null;

  // `angular.module`
  const obj = callee.object;
  if (obj?.type !== "Identifier" || obj.name !== "angular") return null;

  // First arg = module name
  const nameArg = node.arguments?.[0];
  if (!nameArg || nameArg.type !== "Literal" || typeof nameArg.value !== "string")
    return null;

  return {
    moduleName: nameArg.value,
    moduleLoc: pos(nameArg.loc?.start, node),
  };
}

/**
 * Parse a component and push it into the modules array.
 */
function pushParsedComponent(
  moduleName: string,
  moduleLoc: SourceLocation,
  call: { method: string; node: any; args: any[] },
  source: string,
  uri: string,
  modules: AngularModule[],
): void {
  let mod: AngularModule | null = null;
  switch (call.method) {
    case "controller":
      mod = parseController(moduleName, moduleLoc, call, source, uri);
      break;
    case "service":
      mod = parseService(moduleName, moduleLoc, call, source, uri);
      break;
    case "factory":
      mod = parseFactory(moduleName, moduleLoc, call, source, uri);
      break;
    case "directive":
      mod = parseDirective(moduleName, moduleLoc, call, source, uri);
      break;
    case "component":
      mod = parseComponent(moduleName, moduleLoc, call, source, uri);
      break;
  }
  if (mod) modules.push(mod);
}

/**
 * Position from meriyah AST location.
 */
function pos(start: any, fallback?: any): SourceLocation {
  if (start) {
    return {
      uri: "",
      line: start.line - 1, // meriyah uses 1-based; we use 0-based
      column: start.column,
    };
  }
  return { uri: "", line: 0, column: 0 };
}

/**
 * Infer a literal type from an AST expression node.
 *
 * Handles: string/number/boolean/null/undefined literals, arrays, objects,
 * function/arrow expressions. Anything else returns "unknown".
 */
function inferType(expr: any): string {
  if (!expr) return "unknown";
  switch (expr.type) {
    case "Literal":
      if (typeof expr.value === "string") return "string";
      if (typeof expr.value === "number") return "number";
      if (typeof expr.value === "boolean") return "boolean";
      if (expr.value === null) return "null";
      return "unknown";
    case "ArrayExpression":
      return "Array";
    case "ObjectExpression":
      return "Object";
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return "Function";
    case "TemplateLiteral":
      return "string";
    case "Identifier":
      if (expr.name === "undefined") return "undefined";
      if (expr.name === "Infinity" || expr.name === "NaN") return "number";
      return "unknown";
    case "UnaryExpression":
      if (expr.operator === "-" || expr.operator === "+") return "number";
      if (expr.operator === "!") return "boolean";
      if (expr.operator === "void") return "undefined";
      if (expr.operator === "typeof") return "string";
      return "unknown";
    case "NewExpression":
      // e.g. `new Date()` → "Date"
      if (expr.callee?.type === "Identifier") return expr.callee.name;
      return "unknown";
    default:
      return "unknown";
  }
}

/**
 * Infer the return type of a function expression by looking at the
 * first return statement that returns a literal-ish expression.
 */
function inferReturnType(fn: any): string | null {
  if (!fn?.body) return null;
  const body = fn.body;
  // Concise arrow: `() => expr`
  if (body.type !== "BlockStatement") {
    return inferType(body);
  }
  // Block body: find the first `return X;`
  for (const stmt of body.body || []) {
    if (stmt.type === "ReturnStatement" && stmt.argument) {
      return inferType(stmt.argument);
    }
  }
  return null;
}

/**
 * Extract $scope member assignments from a function body AST node.
 */
function extractScopeMembers(
  fnBody: any,
  controllerName: string,
  moduleName: string,
  srcUri: string,
): ScopeMemberSymbol[] {
  const members: ScopeMemberSymbol[] = [];

  // Walk statements in the function body
  const stmts = fnBody?.body || [];
  for (const stmt of stmts) {
    if (stmt.type !== "ExpressionStatement") continue;
    const expr = stmt.expression;
    if (!expr || expr.type !== "AssignmentExpression") continue;

    const lhs = expr.left;
    if (
      !lhs ||
      lhs.type !== "MemberExpression" ||
      lhs.object?.type !== "Identifier" ||
      lhs.object.name !== "$scope" ||
      lhs.property?.type !== "Identifier"
    )
      continue;

    const name = lhs.property.name;
    const loc = pos(expr.loc?.start, expr);

    const rhs = expr.right;
    let kind: "function" | "variable" | "object" = "variable";
    if (
      rhs?.type === "FunctionExpression" ||
      rhs?.type === "ArrowFunctionExpression"
    ) {
      kind = "function";
    } else if (rhs?.type === "ObjectExpression") {
      kind = "object";
    }

    const inferredType = inferType(rhs);
    const returnType =
      kind === "function" ? inferReturnType(rhs) : null;

    members.push({
      name,
      kind,
      controllerName,
      moduleName,
      location: { ...loc, uri: srcUri },
      type: inferredType,
      returnType,
    });
  }

  return members;
}

// ---- Parse individual component types ----

/** Built-in AngularJS services that we don't navigate to. */
const BUILT_IN_ANGULAR_SERVICES = new Set([
  "$scope", "$rootScope", "$http", "$q", "$timeout", "$interval",
  "$location", "$route", "$routeParams", "$state", "$stateParams",
  "$compile", "$parse", "$templateCache", "$document", "$window",
  "$injector", "$controller", "$provide", "$animate", "$filter",
  "$cacheFactory", "$cookies", "$resource", "$sce", "$sanitize",
  "$transclude", "$exceptionHandler", "$interpolate", "$log",
  "$aria", "$swipe", "$swipeDelegate",
  "this", "arguments",
]);

/**
 * Extract injected service names from a controller's inline-array annotation.
 *
 * Patterns supported:
 *   .controller('Name', ['$scope', 'DataService', function($scope, DataService) { ... }])
 *   .controller('Name', function($scope, DataService) { ... })   // also works
 */
function extractInjections(
  arg: any,
  srcUri: string,
): InjectedService[] {
  const out: InjectedService[] = [];
  if (!arg) return out;

  // Inline array form: ['svc1', 'svc2', function(...){...}]
  if (arg.type === "ArrayExpression") {
    const els = arg.elements || [];
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      // Last element is usually the function — skip it
      if (el?.type === "FunctionExpression" || el?.type === "ArrowFunctionExpression") {
        break;
      }
      // String literal service name
      if (el?.type === "Literal" && typeof el.value === "string") {
        out.push({
          name: el.value,
          isBuiltIn: BUILT_IN_ANGULAR_SERVICES.has(el.value),
          index: i,
          location: { ...pos(el.loc?.start, el), uri: srcUri },
        });
      }
    }
    return out;
  }

  // Direct function form: function(svc1, svc2) { ... }
  if (arg.type === "FunctionExpression" || arg.type === "ArrowFunctionExpression") {
    const params = arg.params || [];
    for (let i = 0; i < params.length; i++) {
      const p = params[i];
      if (p?.type === "Identifier") {
        out.push({
          name: p.name,
          isBuiltIn: BUILT_IN_ANGULAR_SERVICES.has(p.name),
          index: i,
          location: { ...pos(p.loc?.start, p), uri: srcUri },
        });
      }
    }
  }

  return out;
}

function parseController(
  moduleName: string,
  moduleLoc: SourceLocation,
  call: { args: any[] },
  source: string,
  uri: string,
): AngularModule {
  const nameArg = call.args[0];
  const name =
    nameArg?.type === "Literal"
      ? String(nameArg.value ?? "")
      : "unknown";

  const fn = extractControllerFn(call.args[1]);
  const scopeMembers: ScopeMemberSymbol[] = fn
    ? extractScopeMembers(fn.body, name, moduleName, uri)
    : [];
  const injections = extractInjections(call.args[1], uri);

  return {
    name: moduleName,
    location: { ...moduleLoc, uri },
    components: [
      {
        kind: "controller",
        name,
        moduleName,
        location: { ...pos(nameArg?.loc?.start), uri },
        scopeMembers,
        templateUri: null,
        injections,
      },
    ],
  };
}

/**
 * Extract the controller function from either inline-array or direct-function style.
 *
 * Inline array: `['$scope', ..., function($scope) { ... }]` → last element
 * Direct: `function($scope) { ... }` → the function itself
 */
function extractControllerFn(arg: any): any {
  if (!arg) return null;

  if (arg.type === "ArrayExpression") {
    const els = arg.elements;
    const last = els?.[els.length - 1];
    if (
      last?.type === "FunctionExpression" ||
      last?.type === "ArrowFunctionExpression"
    ) {
      return last;
    }
    return null;
  }

  if (
    arg.type === "FunctionExpression" ||
    arg.type === "ArrowFunctionExpression"
  ) {
    return arg;
  }

  return null;
}

function parseService(
  moduleName: string,
  moduleLoc: SourceLocation,
  call: { args: any[] },
  source: string,
  uri: string,
): AngularModule {
  const name = call.args[0]?.value ?? "unknown";
  return {
    name: moduleName,
    location: { ...moduleLoc, uri },
    components: [
      {
        kind: "service",
        name,
        moduleName,
        location: { ...pos(call.args[0]?.loc?.start), uri },
        scopeMembers: [],
        templateUri: null,
        injections: [],
      },
    ],
  };
}

function parseFactory(
  moduleName: string,
  moduleLoc: SourceLocation,
  call: { args: any[] },
  source: string,
  uri: string,
): AngularModule {
  const name = call.args[0]?.value ?? "unknown";
  return {
    name: moduleName,
    location: { ...moduleLoc, uri },
    components: [
      {
        kind: "factory",
        name,
        moduleName,
        location: { ...pos(call.args[0]?.loc?.start), uri },
        scopeMembers: [],
        templateUri: null,
        injections: [],
      },
    ],
  };
}

function parseDirective(
  moduleName: string,
  moduleLoc: SourceLocation,
  call: { args: any[] },
  source: string,
  uri: string,
): AngularModule {
  const name = call.args[0]?.value ?? "unknown";

  // The second argument is a factory function — look for `templateUrl` in the returned object
  let templateUrl: string | null = null;
  const fn = call.args[1];
  if (fn?.type === "FunctionExpression" || fn?.type === "ArrowFunctionExpression") {
    templateUrl = extractTemplateUrl(fn.body, source, uri);
  }

  return {
    name: moduleName,
    location: { ...moduleLoc, uri },
    components: [
      {
        kind: "directive",
        name,
        moduleName,
        location: { ...pos(call.args[0]?.loc?.start), uri },
        scopeMembers: [],
        templateUri: templateUrl,
        injections: [],
      },
    ],
  };
}

function parseComponent(
  moduleName: string,
  moduleLoc: SourceLocation,
  call: { args: any[] },
  source: string,
  uri: string,
): AngularModule {
  const name = call.args[0]?.value ?? "unknown";

  // The second argument is an options object — look for `templateUrl` and `controller` keys
  let templateUrl: string | null = null;
  const opts = call.args[1];
  if (opts?.type === "ObjectExpression") {
    templateUrl = extractTemplateUrl(opts, source, uri);
  }

  return {
    name: moduleName,
    location: { ...moduleLoc, uri },
    components: [
      {
        kind: "component",
        name,
        moduleName,
        location: { ...pos(call.args[0]?.loc?.start), uri },
        scopeMembers: [],
        templateUri: templateUrl,
        injections: [],
      },
    ],
  };
}

/**
 * Extract `templateUrl` from a directive return object or component options object.
 * Resolves relative paths against the JS file path.
 */
function extractTemplateUrl(
  bodyOrObj: any,
  source: string,
  jsPath: string,
): string | null {
  const props: any[] = bodyOrObj.properties || bodyOrObj.body?.[0]?.argument?.properties || [];
  // unwrap ReturnStatement → argument → properties
  const returnStmt = bodyOrObj.body?.[0];
  const objExpr =
    returnStmt?.type === "ReturnStatement"
      ? returnStmt.argument
      : bodyOrObj;
  const members: any[] = objExpr?.properties || [];

  for (const prop of members) {
    if (
      prop.key?.type === "Identifier" &&
      prop.key?.name === "templateUrl"
    ) {
      const val = prop.value;
      if (val?.type === "Literal" && typeof val.value === "string") {
        const resolved = path.resolve(path.dirname(fromUri(jsPath)), val.value);
        return toUri(resolved);
      }
    }
  }

  return null;
}

// --------------- HTML scanner ---------------

const ANGULAR_DIRECTIVES = new Set([
  "ng-controller",
  "ng-click",
  "ng-change",
  "ng-model",
  "ng-show",
  "ng-hide",
  "ng-if",
  "ng-repeat",
  "ng-options",
  "ng-class",
  "ng-style",
  "ng-blur",
  "ng-focus",
  "ng-submit",
  "ng-init",
  "ng-keydown",
  "ng-keyup",
  "ng-keypress",
  "ng-mousedown",
  "ng-mouseup",
  "ng-mouseenter",
  "ng-mouseleave",
  "ng-mousemove",
  "ng-mouseover",
  "ng-mouseout",
  "ng-dblclick",
  "ng-bind",
  "ng-bind-html",
  "ng-bind-template",
  "ng-cloak",
  "ng-include",
  "ng-switch",
  "ng-switch-when",
  "ng-switch-default",
  "ng-pluralize",
  "ng-transclude",
  "ng-src",
  "ng-href",
  "ng-attr-disabled",
  "ng-disabled",
  "ng-readonly",
  "ng-checked",
  "ng-selected",
  "ng-open",
  "ng-form",
  "ng-non-bindable",
  "ng-value",
  "ng-trim",
  "ng-paste",
  "ng-copy",
  "ng-cut",
]);

/** HTML void elements that don't contribute to tag depth. */
const VOID_ELEMENTS = new Set([
  "br", "hr", "input", "img", "meta", "link", "area", "base", "col",
  "embed", "param", "source", "track", "wbr",
]);

/**
 * Identifier-like tokens inside an Angular expression.
 */
const IDENTIFIER_RE = /\b([a-zA-Z_$][\w$]*)\s*(?:\(|\))?/g;

/**
 * Scan an HTML file for AngularJS expressions, directives, and controller
 * bindings. Uses a character-level scanner that properly handles multi-line
 * tags and nested `ng-controller` scope contexts.
 */
export function scanHtmlFile(absPath: string): TemplateFile {
  const uri = toUri(absPath);
  const source = fs.readFileSync(absPath, "utf-8");

  interface CtrlFrame {
    name: string;
    alias: string | null;
    depth: number;
  }
  const ctrlStack: CtrlFrame[] = [];
  let elementDepth = 0;
  const expressions: TemplateExpression[] = [];

  // Position tracking for character-level scan
  let line = 0;
  let col = 0;
  let i = 0;

  function advance() {
    if (source[i] === "\\n") {
      line++;
      col = 0;
    }
    i++;
    col++;
  }

  function peek(): string | null {
    return i < source.length ? source[i] : null;
  }

  function findActiveController(): string | null {
    for (let j = ctrlStack.length - 1; j >= 0; j--) {
      if (ctrlStack[j].depth <= elementDepth) {
        return ctrlStack[j].name;
      }
    }
    return null;
  }

  // Helper: read past the closing `>` of a tag (handles newlines, quoted attrs)
  function skipToTagEnd(start: number): number {
    let pos = start;
    let inString: string | null = null;
    while (pos < source.length) {
      const ch = source[pos];
      if (inString) {
        if (ch === inString && source[pos - 1] !== "\\") inString = null;
      } else {
        if (ch === '"' || ch === "'") inString = ch;
        if (ch === ">") return pos + 1;
      }
      pos++;
    }
    return pos;
  }

  // Helper: read ahead from current position to find a pattern match
  function findPatternInSource(re: RegExp, start: number): RegExpExecArray | null {
    re.lastIndex = start;
    return re.exec(source);
  }

  while (i < source.length) {
    const ch = source[i];

    // ── Open/self-closing tag detection ──
    if (ch === "<" && i + 1 < source.length && source[i + 1] !== "/" && /[a-zA-Z]/.test(source[i + 1])) {
      const tagStart = i;
      // Read tag name
      let tagName = "";
      let j = i + 1;
      while (j < source.length && /[a-zA-Z0-9_-]/.test(source[j])) {
        tagName += source[j];
        j++;
      }
      const lowerTag = tagName.toLowerCase();

      const tagEnd = skipToTagEnd(j);

      // Check for self-closing (\/> before the closing >)
      // Also check for void elements
      const isSelfClosing = lowerTag === "br" || lowerTag === "hr" || lowerTag === "input" ||
        lowerTag === "img" || lowerTag === "meta" || lowerTag === "link" || lowerTag === "area" ||
        lowerTag === "base" || lowerTag === "col" || lowerTag === "embed" ||
        lowerTag === "param" || lowerTag === "source" || lowerTag === "track" || lowerTag === "wbr";

      const tagContent = source.slice(tagStart, tagEnd);

      if (!isSelfClosing) {
        // Check for /> before the final >
        const bodyBeforeClose = tagContent.slice(j - tagStart);
        if (!bodyBeforeClose.includes("/") || !bodyBeforeClose.trim().endsWith("/")) {
          elementDepth++;
        }
      }

      // Check for ng-controller attribute within this tag
      const ctrlRe = /ng-controller\s*=\s*["']([^"']+)(?:\s+as\s+(\w+))?["']/;
      const ctrlMatch = ctrlRe.exec(tagContent);
      if (ctrlMatch) {
        ctrlStack.push({
          name: ctrlMatch[1],
          alias: ctrlMatch[2] || null,
          depth: elementDepth,  // depth AFTER increment (children's level)
        });
      }

      // Extract ng-directive attributes from this tag's substring
      const extractAttr = (re: RegExp) => {
        re.lastIndex = 0;
        let m: RegExpExecArray | null;
        while ((m = re.exec(tagContent)) !== null) {
          const dirName = m[1];
          const value = m[2];
          if (ANGULAR_DIRECTIVES.has(dirName)) {
            const refs = tokenizeExpression(value);
            if (refs.length > 0) {
              const absIndex = tagStart + m.index;
              const attrLine = source.slice(0, absIndex).split(/\r?\n/).length - 1;
              const lastNl = source.lastIndexOf("\n", absIndex);
              const attrCol = absIndex - (lastNl >= 0 ? lastNl + 1 : 0);
              expressions.push({
                expression: value,
                location: { uri, line: attrLine, column: attrCol },
                references: refs,
                resolvedController: findActiveController(),
              });
            }
          }
        }
      };
      extractAttr(/\b(ng-\w+)\s*=\s*"([^"]*)"/g);
      extractAttr(/\b(ng-\w+)\s*=\s*'([^']*)'/g);

      // Advance past the tag
      while (i < tagEnd) advance();
      continue;
    }

    // ── Closing tag detection ──
    if (ch === "<" && i + 1 < source.length && source[i + 1] === "/") {
      // Find the closing and advance
      let j = i + 2;
      while (j < source.length && /[a-zA-Z0-9_-]/.test(source[j])) j++;
      while (j < source.length && source[j] !== ">") j++;
      if (j < source.length) j++;

      elementDepth--;

      // Pop completed controller frames
      while (
        ctrlStack.length > 0 &&
        ctrlStack[ctrlStack.length - 1].depth > elementDepth
      ) {
        ctrlStack.pop();
      }

      while (i < j) advance();
      continue;
    }

    // ── {{ expression }} interpolation ──
    if (ch === "{" && i + 1 < source.length && source[i + 1] === "{") {
      const exprLine = line;
      const exprCol = col;
      advance(); advance(); // past {{

      // Find closing }}
      let expr = "";
      while (i + 1 < source.length && !(source[i] === "}" && source[i + 1] === "}")) {
        expr += source[i];
        advance();
      }
      if (i + 1 < source.length) {
        advance(); advance(); // past }}
      }

      const trimmedExpr = expr.trim();
      if (trimmedExpr) {
        const refs = tokenizeExpression(trimmedExpr);
        expressions.push({
          expression: trimmedExpr,
          location: { uri, line: exprLine, column: exprCol },
          references: refs,
          resolvedController: findActiveController(),
        });
      }
      continue;
    }

    // ── Next character ──
    advance();
  }

  // Top-level controller name (the innermost still-open one, if any)
  const top = ctrlStack.length > 0 ? ctrlStack[ctrlStack.length - 1] : null;

  return {
    uri,
    controllerName: top ? top.name : null,
    alias: top ? top.alias : null,
    expressions,
  };
}

/**
 * Tokenize an AngularJS expression into referenced identifier names.
 *
 * Drops AngularJS keywords (`$scope`, `$rootScope`, `$event`, `this`).
 */
function tokenizeExpression(expr: string): string[] {
  const tokens: string[] = [];
  const seen = new Set<string>();
  const SKIP_WORDS = new Set(["$scope", "$rootScope", "$event", "this", "null", "undefined", "true", "false"]);

  let m: RegExpExecArray | null;
  while ((m = IDENTIFIER_RE.exec(expr)) !== null) {
    const name = m[1];
    if (!SKIP_WORDS.has(name) && !seen.has(name)) {
      seen.add(name);
      tokens.push(name);
    }
  }

  return tokens;
}

// --------------- Workspace walker ---------------

export interface ScanOptions {
  rootDir: string;
  progress?: (file: string) => void;
}

/**
 * Walk the workspace directory recursively and scan all JS and HTML files.
 */
export function scanWorkspace(opts: ScanOptions): {
  jsResults: JsScanResult[];
  htmlResults: TemplateFile[];
} {
  const jsResults: JsScanResult[] = [];
  const htmlResults: TemplateFile[] = [];

  function walkDir(dir: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) {
          walkDir(full);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (ext === ".js") {
          opts.progress?.(full);
          jsResults.push(scanJsFile(full));
        } else if (ext === ".html") {
          opts.progress?.(full);
          htmlResults.push(scanHtmlFile(full));
        }
      }
    }
  }

  walkDir(opts.rootDir);
  return { jsResults, htmlResults };
}

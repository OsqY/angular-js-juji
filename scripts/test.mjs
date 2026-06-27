/**
 * Direct scanner + analyzer test against the test fixture.
 * This validates the core Phase 2 engine without LSP transport complexity.
 */

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import the compiled JS directly
import * as scanner from "../server/dist/scanner.js";
import * as analyzer from "../server/dist/analyzer.js";

const fixturePath = path.resolve(__dirname, "..", "test-fixture");

console.log("=".repeat(60));
console.log("AngularJS LSP — Scanner + Analyzer Smoke Test");
console.log("=".repeat(60));

// 1. Detection
console.log("\n[1] AngularJS detection...");
const detected = analyzer.detectAngularJs(fixturePath);
console.log(detected ? "  ✓ AngularJS project detected" : "  ✗ Not detected as AngularJS");

// 2. Scan JS files
console.log("\n[2] Scanning JS files...");
const jsFiles = [];
function walkJs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".git", "bower_components", "dist", "build"].includes(entry.name)) {
      walkJs(full);
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      jsFiles.push(full);
    }
  }
}
walkJs(fixturePath);

const jsResults = [];
for (const f of jsFiles) {
  const result = scanner.scanJsFile(f);
  jsResults.push(result);
  if (result.modules.length > 0) {
    for (const mod of result.modules) {
      console.log(`  Module: "${mod.name}" (${f})`);
      for (const comp of mod.components) {
        console.log(`    └ ${comp.kind}: "${comp.name}" (${comp.scopeMembers.length} scope members)`);
        for (const m of comp.scopeMembers) {
          console.log(`        ├ $scope.${m.name} (${m.kind}) — line ${m.location.line + 1}`);
        }
      }
    }
  }
}

// 3. Scan HTML files
console.log("\n[3] Scanning HTML files...");
const htmlFiles = [];
function walkHtml(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".git", "bower_components", "dist", "build"].includes(entry.name)) {
      walkHtml(full);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(full);
    }
  }
}
walkHtml(fixturePath);

const htmlResults = [];
for (const f of htmlFiles) {
  const result = scanner.scanHtmlFile(f);
  htmlResults.push(result);
  console.log(`  Template: ${f}`);
  console.log(`    Controller: ${result.controllerName || "(none)"}`);
  console.log(`    Expressions: ${result.expressions.length}`);
  for (const expr of result.expressions.slice(0, 8)) {
    console.log(`      line ${expr.location.line + 1}: {{ ${expr.expression.substring(0, 50)} }}`);
  }
  if (result.expressions.length > 8) {
    console.log(`      ... and ${result.expressions.length - 8} more`);
  }
}

// 4. Build symbol table
console.log("\n[4] Building symbol table...");
const table = analyzer.buildSymbolTable(jsResults, htmlResults);
console.log(`  Modules: ${table.modules.size}`);
console.log(`  Components: ${table.components.size}`);
console.log(`  Templates: ${table.templates.size}`);
console.log(`  Unique scope members: ${table.memberIndex.size}`);
console.log(`  Unique referenced symbols: ${table.referenceIndex.size}`);

console.log("\n  Scope members by name (with inferred type):");
for (const [name, members] of table.memberIndex) {
  const m = members[0];
  const retType = m.returnType ? ` → ${m.returnType}` : "";
  console.log(
    `    $scope.${name} : ${m.type}${retType} — ${members.length} definition(s)`
  );
}

console.log("\n  Injected services by name:");
for (const [name, injs] of table.injectionIndex) {
  const ctrlNames = [...new Set(injs.map((i) => i.location.uri.split("/").pop()))];
  console.log(
    `    ${name} — injected in ${injs.length} controller(s) [${ctrlNames.join(", ")}]`
  );
}

// 5. Test HTML → JS navigation
console.log("\n[5] Testing HTML → JS navigation...");
const testCases = [
  { name: "pageTitle", context: "file://" + fixturePath + "/app/views/main.html" },
  { name: "selectItem", context: "file://" + fixturePath + "/app/views/main.html" },
  { name: "getStatusClass", context: "file://" + fixturePath + "/app/views/main.html" },
  { name: "loadUsers", context: "file://" + fixturePath + "/app/views/users.html" },
  { name: "toggleUserStatus", context: "file://" + fixturePath + "/app/views/users.html" },
  { name: "generateReport", context: "file://" + fixturePath + "/app/views/users.html" },
];

let passCount = 0;
for (const tc of testCases) {
  const results = analyzer.findDefinitions(tc.name, tc.context, table);
  if (results.length > 0) {
    console.log(`  ✓ "${tc.name}" → ${results.length} location(s)`);
    for (const r of results) {
      const file = r.uri.split("/").pop();
      console.log(`       ${file}:${r.line + 1}:${r.column + 1} (${r.label})`);
    }
    passCount++;
  } else {
    console.log(`  ✗ "${tc.name}" → NO locations found`);
  }
}

// 6. Test JS → HTML navigation
console.log("\n[6] Testing JS → HTML navigation...");
const jsTestCases = [
  { name: "pageTitle", context: "file://" + fixturePath + "/app/app.js" },
  { name: "selectItem", context: "file://" + fixturePath + "/app/app.js" },
  { name: "deleteItem", context: "file://" + fixturePath + "/app/app.js" },
  { name: "loadUsers", context: "file://" + fixturePath + "/app/controllers/users.js" },
  { name: "filterUsers", context: "file://" + fixturePath + "/app/controllers/users.js" },
  { name: "toggleUserStatus", context: "file://" + fixturePath + "/app/controllers/users.js" },
];

for (const tc of jsTestCases) {
  const results = analyzer.findDefinitions(tc.name, tc.context, table);
  // For JS context, we expect template usage locations
  const templateHits = results.filter(r => r.uri.endsWith(".html"));
  if (templateHits.length > 0) {
    console.log(`  ✓ "${tc.name}" → ${templateHits.length} HTML usage(s)`);
    for (const r of templateHits) {
      console.log(`       ${r.uri.split("/").pop()}:${r.line + 1}:${r.column + 1}`);
    }
  } else if (results.length > 0) {
    console.log(`  ~ "${tc.name}" → ${results.length} non-HTML location(s)`);
  } else {
    console.log(`  ✗ "${tc.name}" → NO locations found`);
  }
}

// Summary
console.log("\n" + "=".repeat(60));
console.log(`Results: ${passCount}/${testCases.length} HTML→JS tests passed`);
console.log("=".repeat(60));

// 7. Test type inference
console.log("\n[7] Type inference validation...");
const typeTests = [
  { name: "pageTitle", expectedType: "string" },
  { name: "loading", expectedType: "boolean" },
  { name: "users", expectedType: "Array" },
  { name: "dateRange", expectedType: "Object" },
  { name: "selectItem", expectedType: "Function", expectedReturn: "unknown" },
];
let typePass = 0;
for (const t of typeTests) {
  const members = table.memberIndex.get(t.name);
  if (!members) {
    console.log(`  ✗ "${t.name}" — no member found`);
    continue;
  }
  const m = members[0];
  const ok = m.type === t.expectedType;
  if (ok) {
    typePass++;
    console.log(`  ✓ $scope.${t.name} : ${m.type} (expected ${t.expectedType})`);
  } else {
    console.log(
      `  ✗ $scope.${t.name} : ${m.type} (expected ${t.expectedType})`
    );
  }
}

// 8. Test service injection navigation
console.log("\n[8] Service injection navigation...");
const injTests = [
  { name: "DataService", expectedFile: "data.js" },
];
let injPass = 0;
for (const t of injTests) {
  const results = analyzer.findDefinitions(
    t.name,
    "file://" + fixturePath + "/app/app.js",
    table
  );
  const file = results.length > 0 ? results[0].uri.split("/").pop() : "(none)";
  if (file === t.expectedFile) {
    injPass++;
    console.log(
      `  ✓ "${t.name}" → ${file} (${results[0].label})`
    );
  } else {
    console.log(
      `  ✗ "${t.name}" → ${file} (expected ${t.expectedFile})`
    );
  }
}
console.log(`  Injection tests: ${injPass}/${injTests.length} passed`);

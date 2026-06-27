#!/usr/bin/env bash
# build.sh — Rebuild the AngularJS Juji Zed extension.
#
# 1. Compile TypeScript server  → server/dist/
# 2. Bundle server + deps        → server-bundle.js
# 3. Compile Rust Wasm adapter   → target/wasm32-wasip2/debug/
# 4. Copy Wasm to extension root → extension.wasm
#
# Usage: bash scripts/build.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "=== Step 1: Compile TypeScript server ==="
cd server
npx tsc
cd ..

echo "=== Step 2: Bundle server with esbuild ==="
node scripts/build-bundle.js

echo "=== Step 3: Compile Rust Wasm adapter ==="
cd rust
# Touch the bundle so cargo's incremental build picks up the new include_str! content
touch "$ROOT/server-bundle.js"
cargo build --target wasm32-wasip2 --target-dir "$ROOT/target"
cd ..

echo "=== Step 4: Copy Wasm to extension root ==="
cp target/wasm32-wasip2/debug/angular_js_juji.wasm extension.wasm

echo "=== Done ==="
ls -lh extension.wasm server-bundle.js

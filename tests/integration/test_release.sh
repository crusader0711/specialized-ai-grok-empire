#!/usr/bin/env bash
# Build + release in a temp copy and verify the integrity chain.
set -uo pipefail
ROOT=$(pwd); TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
git clone -q "$ROOT" "$TMP/r" && cd "$TMP/r" || exit 1
./scripts/release.sh >/dev/null || { echo "  FAIL: release"; exit 1; }
if sha256sum -c SHA256SUMS >/dev/null; then echo "  PASS: SHA256SUMS verifies"; else echo "  FAIL: sha"; exit 1; fi
if jq -e '.name=="specialized-ai-grok-empire" and (.artifacts|length==1)' RELEASE_MANIFEST.json >/dev/null; then
  echo "  PASS: manifest"; else echo "  FAIL: manifest"; exit 1; fi

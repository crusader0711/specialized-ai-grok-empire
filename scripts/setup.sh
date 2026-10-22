#!/usr/bin/env bash
# setup.sh: check tool deps and make hooks executable. Idempotent.
set -euo pipefail
for t in git jq shellcheck; do command -v "$t" >/dev/null || echo "WARN: $t not found (needed for make lint)"; done
chmod +x hooks/* scripts/*.sh
echo "setup complete"

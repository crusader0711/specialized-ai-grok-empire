#!/usr/bin/env bash
set -uo pipefail
FAIL=0
for t in tests/unit/*.sh tests/integration/*.sh; do [[ -f "$t" ]] || continue; echo "== $t"; bash "$t" || FAIL=1; done
exit $FAIL

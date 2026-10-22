#!/usr/bin/env bash
# lint.sh: static checks. Exit non-zero on any finding.
set -uo pipefail
FAIL=0
if command -v shellcheck >/dev/null; then shellcheck scripts/*.sh tests/unit/*.sh tests/integration/*.sh hooks/* || FAIL=1; fi
./scripts/verify-fleet.sh || FAIL=1
./scripts/sensitive-path-check.sh || FAIL=1
if grep -rEn '(api[_-]?key|secret|password|token)\s*[:=]\s*["'"'"'][A-Za-z0-9+/_-]{16,}' --exclude-dir=.git . ; then
  echo "FAIL: possible secret"; FAIL=1; fi
exit $FAIL

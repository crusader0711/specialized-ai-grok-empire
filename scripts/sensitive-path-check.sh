#!/usr/bin/env bash
# Fail if a tracked path belongs to a sensitive live-state class.
set -uo pipefail
PATTERN='(^|/)(health|school|receipts|_handoffs|ledger|bills|state)/|systems-register\.json$'
LIST=$(git ls-files --cached 2>/dev/null || true)
BAD=$(printf "%s\n" "$LIST" | grep -v "^bots/[a-z-]*/PROFILE.md$" | grep -E "$PATTERN" || true)
if [[ -n "$BAD" ]]; then echo "FAIL: sensitive path tracked:"; echo "$BAD"; exit 1; fi
echo "PASS: no sensitive paths tracked"

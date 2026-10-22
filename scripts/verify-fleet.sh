#!/usr/bin/env bash
# verify-fleet.sh: every charter and PROFILE has a BOUNDARY RULE; PROFILEs have frontmatter; missions have required sections.
set -uo pipefail
FAIL=0
check() { if eval "${2}"; then echo "PASS: ${1}"; else echo "FAIL: ${1}"; FAIL=1; fi; }
for f in charters/*.md bots/*/PROFILE.md; do check "boundary in $f" "grep -q 'BOUNDARY RULE' '$f'"; done
for f in bots/*/PROFILE.md; do check "frontmatter in $f" "head -1 '$f' | grep -q '^---$' && grep -q '^autonomy:' '$f' && grep -q '^role:' '$f'"; done
for f in missions/*.md; do check "mission fields in $f" "grep -q '## 5. Definition of Done' '$f' && grep -q '## 7. Approval Gates' '$f'"; done
exit $FAIL

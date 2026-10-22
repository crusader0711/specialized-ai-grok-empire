#!/usr/bin/env bash
# test_dashboard.sh: static dashboard file set and local asset references resolve.
set -uo pipefail
cd "$(dirname "$0")/../.." || exit 1
D=src/dashboard
FAIL=0
for f in index.html css/style.css js/data.js js/custom.js js/app.js README.md; do
  if [[ -f "$D/$f" ]]; then echo "ok   $D/$f"; else echo "FAIL missing $D/$f"; FAIL=1; fi
done
while read -r ref; do
  if [[ -f "$D/$ref" ]]; then echo "ok   ref $ref"; else echo "FAIL broken ref $ref"; FAIL=1; fi
done < <(grep -oE '(src|href)="[^"#:]+"' "$D/index.html" | sed -E 's/^(src|href)="//; s/"$//')
# logo + favicon wired to the repo logo
if grep -q 'rel="icon"[^>]*logo-web.jpg' "$D/index.html"; then echo "ok   favicon"; else echo "FAIL favicon"; FAIL=1; fi
if grep -q 'logo-web.jpg' "$D/js/custom.js"; then echo "ok   logo"; else echo "FAIL logo"; FAIL=1; fi
# no hard-coded active count or fixed quiet-hours window
if grep -qiE '[0-9]+ ACTIVE|quiet hours [0-9]' "$D/js/data.js"; then echo "FAIL hard-coded count/quiet window"; FAIL=1; else echo "ok   no hard-coded count/quiet window"; fi
exit $FAIL

#!/usr/bin/env bash
set -uo pipefail
FAIL=0
ok(){ if eval "${2}"; then echo "  PASS: ${1}"; else echo "  FAIL: ${1}"; FAIL=1; fi; }
for f in README.md LICENSE CONTRIBUTING.md CHANGELOG.md Makefile docs/HOW-TO.md docs/BOOTSTRAP-CHIEF-OF-STAFF.md docs/assets/logo.jpg docs/assets/logo-web.jpg docs/architecture.md; do ok "file $f" "[[ -f $f ]]"; done
for b in chief-of-staff weather kitchen academic-steward finance markets home-systems health; do ok "pack $b" "[[ -f bots/$b/PROFILE.md && -f charters/$b.md ]]"; done
for f in .gitattributes .gitignore AGENTS.md ATTRIBUTION.md CHANGELOG.md CLAUDE.md CODEOWNERS CONTRIBUTING.md GEMINI.md PRIVACY.md RELEASE_MANIFEST.json SECURITY.md SHA256SUMS WIKI.md config/default.yaml config/schema.json; do ok "root $f" "[[ -f $f ]]"; done
for d in config docs docs/decisions docs/runbooks examples hooks scripts skills src templates tests/unit tests/integration tests/fixtures .github/workflows; do ok "dir $d" "[[ -d $d ]]"; done
for v in help setup lint test build release clean; do ok "make $v" "grep -qE '^$v:' Makefile"; done
ok "CLAUDE.md points to AGENTS.md" "grep -q 'AGENTS.md' CLAUDE.md"
ok "GEMINI.md points to AGENTS.md" "grep -q 'AGENTS.md' GEMINI.md"
ok "manifest is valid JSON" "jq -e .name RELEASE_MANIFEST.json >/dev/null"
ok "no stale repo name" "! grep -rIl 'special-ai-grok-empire' --exclude-dir=.git --exclude-dir=tests . | grep -q ."
ok "CHANGELOG has [Unreleased]" "grep -q '\[Unreleased\]' CHANGELOG.md"
ok "PII guard files (template v1.1 s11)" "[[ -x scripts/pii-scan.sh && -f config/pii-allowlist.txt && -f tests/unit/test_pii_scan.sh ]]"
ok "make verb pii-scan" "grep -qE '^pii-scan:' Makefile"
ok "pre-commit runs PII scan" "grep -q 'pii-scan.sh --staged' hooks/pre-commit"
ok "lint runs PII scan" "grep -q 'pii-scan.sh' scripts/lint.sh"
ok "CI has PII scan step" "grep -rq 'make pii-scan' .github/workflows"
exit $FAIL

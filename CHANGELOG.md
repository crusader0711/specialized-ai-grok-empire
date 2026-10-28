# Changelog

## [Unreleased]
### Added
- Onboarding step: `docs/onboarding/personal-security-vetting.md` and `templates/personal-security-checklist-template.md` (Do Not Call Registry, data-broker opt-outs ordered by impact, carrier spam blocking; owner handles codes; no PII in files; verify at 3 days, re-check every 90 days). Linked from README, HOW-TO step 1a, and WIKI.
### Changed
- Genericized Project SAGE as the base model: dashboard uses neutral role archetypes (AGENT-01…10), generic rooms, configurable quiet hours, repo logo + favicon; `family-cfo` renamed `finance`.
### Added
- `tests/unit/test_no_specialized_terms.sh` banned-term guard.
### Changed
- Repo renamed to `specialized-ai-grok-empire`; brought into Canonical Repository Structure Template v1.0 (tier T2).
### Added
- Project logo (`docs/assets/`), AGENTS.md + CLAUDE.md/GEMINI.md pointers, governance files, `hooks/`, `skills/`, `src/`, `docs/architecture.md`, `docs/runbooks/`, config schema, full Makefile verbs, release integrity chain (RELEASE_MANIFEST.json, SHA256SUMS), integration tests.
### Removed
- `docs/brand/logo-PLACEHOLDER.md` (replaced by the real logo).
- Initial public template.

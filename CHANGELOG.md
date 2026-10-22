# Changelog

## [Unreleased]
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

# AGENTS.md: primary agent instructions

**Repo:** specialized-ai-grok-empire (Project SAGE) · **Tier:** T2 (private / internal product) · **Template:** Canonical Repository Structure v1.0

This is the single source of truth for AI agents. `CLAUDE.md` and `GEMINI.md` only point here.

## Commands
- `make setup`: install hooks · `make lint`: shellcheck, fleet check, sensitive-path check, secret pattern scan
- `make test`: `tests/unit/*.sh` · `make build`: `dist/` tarball · `make release`: regenerate `RELEASE_MANIFEST.json` + `SHA256SUMS`

## Conventions
- Conventional Commits; branches `feat/<slug>` / `fix/<slug>`; squash-merge into protected `main`.
- Agents open PRs only. Never merge, never force-push `main`.
- Accepted ADRs in `docs/decisions/` are immutable; supersede with a new ADR.
- Charter packs live in `bots/<id>/PROFILE.md` with an index in `charters/`; missions in `missions/`.

## Guardrails
- RED actions (send, pay, trade, order, publish, delete, permissions, device setpoints) need owner approval every time.
- Never commit secrets, live state, or sensitive classes (health, finance, school, network). CI enforces this.
- Missing or stale data produces a gap card, never a guess.

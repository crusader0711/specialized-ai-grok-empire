# ADR-0006: Sensitive data never enters git
**Status:** Accepted
**Context:** Household agents touch health, finance, school, and network data.
**Decision:** Sensitive path classes are blocked by scripts/sensitive-path-check.sh; real registers stay local; only templates are committed.
**Consequences:** Some operational state is not reproducible from the repo alone; that is intended.

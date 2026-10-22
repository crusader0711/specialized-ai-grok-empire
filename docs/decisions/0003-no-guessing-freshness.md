# ADR-0003: No guessing and data freshness
**Status:** Accepted
**Context:** The dominant agent failure is fluent output built on missing or stale data.
**Decision:** Explicit failure reports and gap cards; freshness thresholds in config; skills must have a Data Freshness section (CI).
**Consequences:** Dashboards show more explicit failures and fewer silent ones.

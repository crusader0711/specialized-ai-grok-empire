# Privacy

This repo holds doctrine, templates, and CI only. It contains **no** personal data.

- **Data touched:** none at rest. Live team state (health, finance, school, receipts, handoffs, ledgers) stays outside git; `scripts/sensitive-path-check.sh` fails CI if any such path is tracked.
- **Retention:** not applicable in-repo. Each deployment sets its own retention for live state.
- **Telemetry:** none. Scripts make no network calls except `git` operations you run.

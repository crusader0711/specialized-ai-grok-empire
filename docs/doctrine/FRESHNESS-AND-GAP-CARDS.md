# No-guessing, data freshness, and gap cards

- Data older than its threshold (`config/default.yaml` → `data_freshness`) is treated as **missing**.
- Missing data produces an explicit failure report: Source, Expected TS, Actual TS,
  Status (Current | Stale | Missing), Impact, Action Taken. Never proceed silently on old data.
- When a specialist, doctrine file, or data source is missing, the Chief of Staff ships a
  **gap card** (`templates/gap-card-template.md`) instead of faking the report.
- Every fact carries its source and the source's date. Inferences are labeled.
- Clean sentences are not evidence.

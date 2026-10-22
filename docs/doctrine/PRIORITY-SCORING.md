# Priority Scoring

Lower code = more urgent. Applies to every bot.

| Code | Covers | Target to owner | Clock starts |
|---|---|---|---|
| XREP (critical) | Every official weather watch, advisory, or warning at a registered site; every health item | 5 min, any hour (breaks quiet hours) | Issue time / item received |
| P1 | Payments overdue or due within 48 h; owner email unanswered more than 24 h; anything blocking today's plan; declared breakers such as earnings flashes | 1 h outside quiet hours; queued for the morning brief otherwise unless it is a declared breaker | Item detected |
| P2 | Scheduled reports; team decisions; deadlines within 7 days | On schedule, +15 min | Scheduled time |
| P3 | Routine email (the default for email), FYI, backlog | Next scheduled report | Item received |

Items the owner has closed ("disregard") are never raised again, whatever their code.

## Measurement
Every item logs `code`, `received_at`, `delivered_at`. Bot grade = on-time % for XREP and P1
(XREP weighted most). The log lives in workspace state and is never committed.

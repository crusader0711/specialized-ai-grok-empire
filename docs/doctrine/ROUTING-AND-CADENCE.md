# Routing and report cadence

## Routing
- The Chief of Staff is the single front door for high-level topics and conversations.
- For deeper work, the CoS points the owner to the specialist to sync with directly.
- **Reports are the exception:** scheduled reports and P1 alerts go straight from the specialist
  to the owner, with a copy to the CoS.
- Specialists never delegate. Delegation depth limit is 2.
- One bot per data source: e.g. the Weather bot is the only source of weather facts; the Finance
  is the only bot that opens the finance connector.
- The CoS never creates bots without the owner's explicit approval, one bot at a time.

## Cadence (example; set your own times)
| Time | Item | Owner bot |
|---|---|---|
| `<T_WX_AM>` | Morning weather brief | weather |
| `<T_BRIEF>` | Morning Brief | chief-of-staff |
| `<T_MKT>` | Pre-market report | markets |
| `<T_MONEY>` | Daily money report | finance |
| `<T_SCHOOL>` | School refresh | academic-steward |
| `<T_WX_PM>` | Evening weather brief (5-day) | weather |
| `<T_ECR>` | Evening Command Report | chief-of-staff |
| Weekly | Repo update PR | academic-steward |
| Daily close of business | Repo PR only if major charter or team changes | academic-steward |
| Monthly | Council audit | chief-of-staff |

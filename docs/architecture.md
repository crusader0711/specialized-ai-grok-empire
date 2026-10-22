# Architecture

## System boundary
Project SAGE is doctrine plus templates. Runtime bots live in the Grok Bot platform; this repo defines how they are chartered, routed, and checked. No live data is stored here.

## Block diagram
```
Owner ──► Chief of Staff ──► Specialists (weather, kitchen, academic-steward,
   ▲            │             finance, markets, home-systems, health)
   │            ▼                    │
   └──── reports / gap cards ◄── handoffs (templates/handoff-template.md)
```

## Data flow
1. Specialists pull from their own sources and write handoffs.
2. The Chief of Staff merges handoffs into the morning brief and evening report, and issues gap cards for stale or missing data.
3. RED actions go back to the owner for approval on the exact payload.

## Repo map
`bots/` + `charters/` (charter packs) · `docs/doctrine/` (rules) · `docs/decisions/` (ADRs) · `missions/` · `templates/` · `skills/` · `config/` · `scripts/` + `tests/` (CI).

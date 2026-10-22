# Skill: <Name>

**Version:** 0.1.0 · **Owner bot:** <Name> · **Schedule:** <cron / trigger / manual>
**Reversibility class:** R (autonomous) | I (requires approval) | G (default I)

## Purpose
<One sentence: what real-world/system outcome this skill produces.>

## Preconditions
- Dependencies: <pinned versions>  → self-healing header below
- Required session(s): <service> (authenticated via session handoff)
- Input(s): <<STATE_DIR>/... path + schema>

## Self-Healing Header
```bash
source /workspace/bin/bootstrap.sh   # idempotent dependency probe + pinned reinstall
```

## Workflow
1. <Step — deterministic, checkpointed>
2. <Step>
3. Write output to `*.tmp`, verify, atomic `mv` to final path.

## Data Freshness (mandatory)
- Sources checked this run: <name + timestamp field/location>
- Freshness threshold: <hours; default from config data_freshness>
- On Stale/Missing: emit failure report (Source, Expected TS, Actual TS,
  Status: Current|Stale|Missing, Impact, Action Taken) and STOP — never
  proceed on old data, never guess.

## Guardrails & Edge Cases
- IF rate-limit warning → pause 300 s, retry (max 3), then escalate to @Chief-of-Staff.
- IF unexpected modal/UI change → attempt dismiss once; on second occurrence,
  screenshot to state/_tasks/, escalate. NEVER improvise around a changed UI.
- ALWAYS verify output non-empty (and schema-valid if JSON/CSV) before notifying.
- Every claim in output links to its exact source with the source's date.
- Statuses use a closed vocabulary declared here: <e.g., COMPLETE|PARTIAL|BLOCKED>.
- If taught by demonstration: recording captures ≤10 min of visible interaction,
  no audio — after generation, ADD the decision rules the demo could not show
  (exclusion criteria, what counts as failure, approval boundaries).
- Checkpoint after each numbered step to <STATE_DIR>/_tasks/<task-id>.json.

## Verification Block (must pass before success is reported)
```bash
test -s "$OUTPUT" || { echo "FAIL: empty output"; exit 1; }
# add schema/row-count checks here
```

## Rollback
<How to undo, or "none — class I, human approval required before execution".>

# Routine Spec: <Name>

> A SKILL defines HOW (sequence, validation, output, approval rules).
> A ROUTINE defines WHEN — and is confirmed against this spec before any schedule
> or trigger goes live. A routine without a failure policy is a hope, not a routine.

| Field | Value |
|-------|-------|
| Owning bot | <exactly one bot> |
| Skill invoked | skills/<file>.md |
| Schedule OR trigger | <cron> OR <specific source + narrow match condition — never "any message/event"> |
| Input source | <exact file/plugin/URL — where the data comes from this run> |
| Expected output | <exact artifact path + closed status vocabulary> |
| Approval boundary | <what runs free; what stops for the human — RED actions always stop> |
| Failure policy | Explicit failure report on no-data/stale-data (threshold: <h>); include last successful timestamp; never use old data silently |
| Retest triggers | Source format change; target UI change; >50% output-size drop; any silent-failure suspicion |
| Earn-its-keep review | Reviewed at weekly retro; if it stops producing value, the routine is deleted — a clean exit beats a fluent mistake on a schedule |

**Scheduling gate:** Three-Run Proof passed (docs/HOW-TO.md step 6) · date: ___

# Handoff Record (structured — every bot-to-bot transfer uses this)

Written to `<STATE_DIR>/_handoffs/<task-id>-<seq>.json`:

```json
{
  "task_id": "T-YYYY-MMDD-NNN",
  "mission_id": "M-YYYY-NNN",
  "from": "<bot>", "to": "<bot>",
  "objective": "<what the receiving bot must accomplish>",
  "artifact": "<path to the work product being handed off>",
  "evidence": ["<source URL + date>", "<verification performed>"],
  "status": "COMPLETE | PARTIAL | BLOCKED",
  "blockers": ["<empty array if none — never omit the field>"],
  "next_action": "<the single next step for the receiver>",
  "handed_off_at": "<ISO-8601>"
}
```
Rules: PARTIAL and BLOCKED handoffs go to @Chief-of-Staff, never silently downstream.
Evidence array must be non-empty for any research artifact.

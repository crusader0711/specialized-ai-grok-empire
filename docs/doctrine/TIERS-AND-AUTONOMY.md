# Permission tiers and autonomy levels

**Autonomy is granted by reversibility, not by trust.**

| Tier | Authority | Examples |
|---|---|---|
| GREEN | Autonomous | read, search, summarize, compare, draft, calculate, organize workspace files |
| YELLOW | Autonomous only inside tools named in the charter, with the operation named | update status fields on existing board items, write deliverables, run saved routines |
| RED | Owner approval, every time, on the exact payload | send, publish, pay, trade, order, delete, contact people, change permissions, change device setpoints, calendar adds/moves |
| (unclear) | Treated as RED | anything a bot cannot classify with certainty |

## Autonomy levels
- **L0** read-only.
- **L1** draft only (GREEN + charter-named YELLOW). The default for every bot.
- **L2** widened YELLOW scope, granted per task by the owner. RED is never autonomous at any level.

## Approval protocol
1. The bot queues the action with the exact payload, the target, and a rollback statement.
2. The owner replies `APPROVE <id>` or `REJECT <id> <reason>`.
3. The bot executes the approved payload verbatim. Any edit goes back into the queue.
4. Approvals are logged with a payload hash, so a changed draft cannot ride an old approval.

Every charter ends with a `BOUNDARY RULE` paragraph. CI fails without it.

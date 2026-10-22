# Gap Card Template (fleet-wide explicit-failure artifact — see docs/doctrine/FRESHNESS-AND-GAP-CARDS.md)

Use one card per missing specialist, missing doctrine, or missing data. File as `gaps/YYYY-MM-DD_<task>.md` if the owner wants a paper trail. Otherwise keep them inside the digest.

```
GAP CARD
Task: 
Priority: 
Cadence: 
Doctrine file: missing / partial / live
Specialist: not built / live (name)
Blocked because:
  [ ] no specialist
  [ ] no doctrine
  [ ] no source data
  [ ] stale source data  (expected ts: ____  actual ts: ____  threshold: ____)
  [ ] no plugin
What a complete artifact would contain:
Owner decision needed:
  [ ] write doctrine
  [ ] schedule the blank cadence cell
  [ ] stand up specialist later (CoS will not hire)
  [ ] skip this cycle
CoS will not: invent numbers, send, trade, order, or create the bot.
```


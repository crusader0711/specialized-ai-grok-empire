# Mission Contract: Weather policy (example)

**Mission ID:** M-0001 · **Status:** DRAFT · **Owner:** <OWNER>

## 1. Outcome
The owner gets every official hazard alert for <HOME_REGION> within 5 minutes, and two daily briefs.
## 2. Inputs (allowed sources / accounts)
- The national weather service feed for zone <WX_ZONE>.
## 3. Output (exact artifact)
- Path: `<STATE_DIR>/weather/briefs/YYYY-MM-DD.md` · Format: md
## 4. Frequency
Twice daily plus alert-triggered.
## 5. Definition of Done
- [ ] Every alert in the feed for the zone appears in the brief with issue time
- [ ] Every claim carries source and date
## 6. Constraints
- No other bot pulls weather.
## 7. Approval Gates
- None (read and report only).

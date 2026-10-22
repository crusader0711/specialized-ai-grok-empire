# Mission Contract: <Name>

**Mission ID:** M-YYYY-NNN · **Status:** DRAFT | ACTIVE | RETIRED · **Owner:** Human operator
**Scheduling gate:** NOT SCHEDULED until Three-Run Proof passes (docs/HOW-TO.md step 6)

## 1. Outcome
<One sentence: the single recurring outcome this team owns.>

## 2. Inputs (allowed sources / accounts)
- <Enumerated. Anything not listed is out of bounds.>

## 3. Output (exact artifact)
- Path: `<STATE_DIR>/<...>` · Format: <md|json|csv> · Schema: <config/schemas/...>

## 4. Frequency
<Cron or trigger. Remains manual until the Three-Run Proof passes.>

## 5. Definition of Done (measurable — vague quality words are CI-rejected)
- [ ] <Check 1 — binary, machine- or reviewer-verifiable>
- [ ] Every factual claim carries source URL + publication date
- [ ] Facts and assumptions labeled in separate sections
- [ ] <Quantitative threshold, e.g., "covers all N targets in inputs; N listed">

## 6. Constraints (what must never happen)
- <e.g., No contact with any external party; no data outside allowed inputs>

## 7. Approval Gates (RED tier — human required)
- <Enumerate every send/publish/purchase/delete/contact/permission-change this mission could touch. "None" is a valid entry.>

---
**Assigned graph:** Chief-of-Staff → Scout → [Chief-of-Staff plan] → <Execution bot> → Reviewer → (human if RED)
**Review loop limit:** 2 (then human escalation)

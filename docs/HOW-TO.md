# How-to: set up a SAGE team in Grok Bot

1. **Fork or clone** this repo. Decide your owner placeholders (`<OWNER>`, `<OWNER_TZ>`,
   `<HOME_REGION>`, `<QUIET_START>`/`<QUIET_END>`). Keep real values in your bots' memory, not in git.
1a. **Do personal security vetting.** Before connecting anything, follow
   `docs/onboarding/personal-security-vetting.md` and copy `templates/personal-security-checklist-template.md`
   into your private working state (never into git). You enter every code; bots only draft and ask.
2. **Create the Chief of Staff first.** In Grok Bot, create a bot, open Edit Profile, and paste
   `bots/chief-of-staff/PROFILE.md`. Give it a name (themed or plain).
3. **Hand it the bootstrap.** Send your Chief of Staff `docs/BOOTSTRAP-CHIEF-OF-STAFF.md`. It will
   propose each specialist one at a time and wait for your approval before creating it.
4. **Connect only what each bot needs.** Weather: no connector. Finance: the finance connector
   (and only that bot). Academic: mail read access to the school label. Calendar: CoS, with
   per-change approval.
5. **Set the cadence.** Agree the times in `docs/doctrine/ROUTING-AND-CADENCE.md`, then let each bot
   create its own routines from `templates/routine-spec-template.md`.
6. **Run the Three-Run Proof.** Run each routine by hand three times and review the output before
   it is scheduled.
7. **Create a team group chat** so specialists can hand off to the CoS.
8. **Keep the repo honest.** Run `make lint test` before every PR. Add an ADR for every new rule.
9. **Review monthly.** Retire any bot or routine that stops earning its keep. Never reuse a retired name.

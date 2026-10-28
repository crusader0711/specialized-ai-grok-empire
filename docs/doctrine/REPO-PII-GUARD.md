# Repo PII Guard — Team Charter Section

**Status:** Live (owner standing order: always ensure no PII leaks to the repos) · **Owner:** the team owner · **Run by:** the Chief of Staff agent (draft-only until the owner raises autonomy)
Applies to every repo the team owns or forks (this repo and any other repo from the Canonical Repository Structure Template v1.1+). **RETROACTIVE:** existing repos backfill the guard.

## Rule
No personal data about the owner, the owner's family, or anyone else ever enters a repo: commits, PR titles/bodies/comments, issues, branch names, CHANGELOG entries, examples, test fixtures, screenshots, CI logs.

Prohibited classes (never in any repo):
- names of family members or other private individuals (use roles: "owner", "spouse", "child 1")
- phone numbers, home/mailing addresses, personal email addresses (a shared team mailbox may be allow-listed by the owner)
- account, policy, claim, member, student or routing numbers; card numbers; SSNs; government/other IDs; DOB
- verification codes, passwords, tokens, keys (the existing secret scan still applies)
- medical, school/IEP, financial-ledger or location-of-person details
- the **owner-specific deny-list itself** (see below)

Filled-in trackers, registers, checklists and handoffs stay in **private state** (private state outside the repo, password vault). The repo carries only blank templates and generic doctrine.

## Mechanism (mandatory, all repos)
| Layer | Where | What |
|---|---|---|
| Scanner | `scripts/pii-scan.sh` | Generic patterns: emails, US phones, street addresses, city/state/ZIP, SSN, Luhn-valid card numbers, account numbers, one-time codes. Masks matches in output. Modes: tree (default), `--staged`, `--diff RANGE`, `--show` (local only). |
| Pre-commit | `hooks/pre-commit` | Runs `pii-scan.sh --staged` first; blocks the commit. Install with `make setup`. |
| Pre-push | `hooks/pre-push` | Runs the full-tree scan before the tests. |
| Lint | `scripts/lint.sh` / `make lint` / `make pii-scan` | Full-tree scan; any hit fails lint. |
| CI | `.github/workflows/*.yml` | Dedicated "PII scan" step before lint/test; PR cannot merge red. |
| Allow-list | `config/pii-allowlist.txt` | Reviewed false positives only (`match:` regexes, `path:` globs); inline `pii-scan:allow` for single lines. Every entry needs a reviewer. |
| Owner deny-list | **outside the repo** | Exact private values (names, phone, address, emails, family first names). Path in env `PII_DENYLIST`; owner copy: a private path chosen by the owner, mode 600, never committed, never copied into a repo, never pasted into chat or PR text. If `PII_DENYLIST` is set but unreadable, the scan fails. Optional CI use: repo secret `PII_DENYLIST` (content of the file). |

The repo carries **generic patterns only**. The deny-list is built from the vault contact record plus owner-supplied names; update it whenever the vault changes (new address, new family member, new email).

## Procedure for any repo change (agents)
1. Before opening a PR: `PII_DENYLIST=<owner file> ./scripts/pii-scan.sh` (tree) and `... --diff origin/main...HEAD`. Both must be clean.
2. Scanner output is masked; never un-mask in a PR comment, commit message or chat that is committed.
3. A hit is either (a) real PII → remove it from the change and move the content to private state; or (b) a reviewed false positive → add the narrowest allow-list entry and say why in the PR.
4. **Real PII already in history** is never silently rewritten. Report to the owner (file, line, class, commit); the owner decides on a history rewrite and credential rotation. Merged-and-public means treat as disclosed.
5. Example data uses reserved/fictional values only: `example.com/.org/.net`, `555-01xx` phones, role names.
6. PR descriptions and CHANGELOG entries are scanned by the same rule: describe *what class* of data was involved, never the data.

## New repos / forks
Scaffold from template v1.1+ (section 11 of the template). `make setup` installs the hooks. Compliance checklist item: "pii-scan clean; hooks installed; CI step present". Teams built from this template create their own deny-list during onboarding (personal-security vetting step) and keep it outside the repo.

## Limits
Pattern scanning cannot catch everything (a bare first name, a nickname, a description of a person). Human review of every PR remains mandatory; when unsure, leave it out.

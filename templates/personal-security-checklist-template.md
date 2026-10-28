# Personal Security Vetting Checklist (TEMPLATE)

> **Do not commit a filled copy.** Copy this file into your team's private working state (for example `<PRIVATE_STATE>/security/phone-spam-removal.md`) and fill it there. Record only statuses, dates, and confirmation *types*. **No names, phone numbers, addresses, emails, birth dates, or codes.** Those stay in the vault.
>
> Process: `docs/onboarding/personal-security-vetting.md`

**Team / owner placeholder:** `<TEAM>` / `<OWNER>` · **Carrier:** `<CARRIER>` · **Started:** `<YYYY-MM-DD>` · **Autonomy:** L1
**Dedicated confirmation mailbox set up (yes/no):** `<>` · **Variants recorded in vault (name / phone / address):** `<yes/no>`

**Rules:** every submission needs owner approval · owner enters all codes · free paths only · ID-required brokers are optional · confirm links expire (often 24 h) · re-check every 90 days.

Status values: `not started` · `prepared` · `submitted (awaiting verify)` · `verified/removed` · `relisted` · `blocked` · `skipped (ID required)`.

## Layer 1 and Layer 3 (do early)

| ID | Item | Requires | Status | Date | Next re-check |
|---|---|---|---|---|---|
| PSEC.01 | National Do Not Call Registry: register or verify each number (`donotcall.gov`) | Email confirmation link (or call from the phone) | not started | | 90 d after done |
| PSEC.02 | Carrier spam blocking: `<AT&T ActiveArmor / T-Mobile Scam Shield / Verizon Call Filter / other>`, spam to block or voicemail, contacts allowed | Carrier login in app (free tier only) | not started | | On phone or carrier change |

## Layer 2: Data brokers (ordered by impact)

Add one row per broker and per shared family. Use the process doc for URLs and requirements. Add any extra site you find that lists you.

| ID | Broker (family) | Tier | Requires | Status | Date submitted | Date verified | Next re-check | Blocked note (for example "Cloudflare, owner on phone") |
|---|---|---|---|---|---|---|---|---|
| PSEC.03 | Whitepages (411.com / PeopleSearch.com family) | 1 | Listing URL; phone code | not started | | | 90 d | |
| PSEC.04 | USPhoneBook | 1 | Email link; captcha | not started | | | 90 d | |
| PSEC.05 | TruePeopleSearch | 1 | Listing URL; email link; captcha | not started | | | 90 d | |
| PSEC.06 | FastPeopleSearch | 1 | Email confirm; captcha | not started | | | 90 d | |
| PSEC.07 | Spokeo | 1 | Listing URL; email link | not started | | | 90 d | |
| PSEC.08 | BeenVerified (PeopleLooker / PeopleSmart family) | 2 | Search; email confirm | not started | | | 90 d | |
| PSEC.09 | ThatsThem | 2 | Minimum fields; captcha | not started | | | 90 d | |
| PSEC.10 | Intelius (PeopleConnect Suppression Center) | 2 | Email link; birth date; "Suppressed" | not started | | | 90 d | |
| PSEC.11 | Instant Checkmate (PeopleConnect) | 2 | As PSEC.10; verify separately | not started | | | 90 d | |
| PSEC.12 | TruthFinder (PeopleConnect) | 2 | As PSEC.10; verify separately | not started | | | 90 d | |
| PSEC.13 | MyLife | 3 | Email code; captcha | not started | | | 90 d | |
| PSEC.14 | PeopleFinders | 3 | Find record; email confirm | not started | | | 90 d | |
| PSEC.15 | Nuwber | 3 | Profile URL; email link; captcha | not started | | | 90 d | |
| PSEC.16 | CheckPeople | 3 | Email verification link | not started | | | 90 d | |
| PSEC.17 | SearchPeopleFree | 3 | Email link within about 30 min | not started | | | 90 d | |
| PSEC.18 | PeopleLooker (BeenVerified family) | 3 | Search; email confirm | not started | | | 90 d | |
| PSEC.19 | Acxiom (marketing data) | 4 | Email confirm | not started | | | 12 mo | |
| PSEC.20 | LexisNexis (ID required, optional) | 4 | Government ID details: owner only | skipped (ID required) | | | 12 mo | |
| PSEC.21 | `<extra site you found>` | | | not started | | | 90 d | |

## Verification log (dates and statuses only)

| Date | Check | Result (counts only) |
|---|---|---|
| `<YYYY-MM-DD>` | Day-3 re-search of all submitted brokers | `<n verified, n open, n blocked>` |
| `<YYYY-MM-DD>` | 90-day re-check | `<n verified, n relisted>` |

## Onboarding gate (sign when closed)

- [ ] Do Not Call Registry done (PSEC.01)
- [ ] Carrier blocking configured (PSEC.02)
- [ ] Tier 1 to 3 rows are `verified/removed`, `blocked` (owner to do on phone), or `skipped` with a reason
- [ ] Day-3 verification done
- [ ] 90-day re-check reminder set
- [ ] This file contains no PII and no codes

**Signed off by owner (initials / date):** `<>`

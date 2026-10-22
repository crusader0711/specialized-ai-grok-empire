/* ============================================================
   GROK EMPIRE — content + config. Two pages max.
   Project SAGE base model: generic role archetypes only. Forks
   (specialized teams) theme names here. Fleet metadata only — no
   doctrine values, credentials, balances, or PHI. Edit THIS file.
   ============================================================ */

const SITE = {
  name: "GROK EMPIRE",
  tagline: "// project sage — the foundational grok bot fleet model",
  stripLeft: "SAGE BASE MODEL · FLEET: CONFIGURABLE · TEMPLATE v1.0",
  stripRight: "dtg",
  lsPrefix: "gke:",
  footer: "SPECIALIZED AI GROK EMPIRE — Project SAGE reference dashboard. Generic fleet metadata only: no doctrine values, no balances, no PHI, no credentials. Specialized teams fork and theme this model. The repo is the only memory that survives.",
};

const PAGES = [
  { route: "/",      label: "Empire", type: "custom", render: "empire" },
  { route: "/fleet", label: "Fleet",  type: "custom", render: "fleet" },
];

/* ---------- Page 1: the pitch ---------- */
const NUMBERS = [
  ["10", "role archetypes"],
  ["1", "front door — Chief of Staff"],
  ["0", "autonomous irreversible actions"],
  ["ADR", "decisions on record"],
  ["MSN", "mission contracts"],
  ["24/7", "watch · quiet hours configurable"],
];

const LAW = "No bot ever executes an irreversible action autonomously. Sending, paying, trading, ordering, changing a physical setpoint, and merging code are RED-tier — approved by the owner per instance, in the chat thread, forever.";

const PILLARS = [
  { t: "CONTROL PLANE AS CODE", b: "Every charter, mission contract, tier envelope, and register lives in a version-controlled repo with CI that lints the governance itself. The live bots are deployments of the repo — the repo is the only memory that survives." },
  { t: "EVIDENCE, NOT TRUST", b: "A bot saying it saved a file means nothing; ls -la plus a content read-back means everything. Charters pass quote tests, routines earn Three-Run Proofs, and reports get spot-checked at monthly audit." },
  { t: "NO INVENTED DATA, EVER", b: "Owner-edited registers are the seam between what the owner cares about and what a bot does. Absent entry = nonexistent. Missing data surfaces as an explicit gap card — a gap card in a report is the no-guessing rule working." },
  { t: "ONE FRONT DOOR", b: "All routing, digests, and the daily master report flow through the Chief of Staff. Specialists file artifacts and handoff records to a shared blackboard — no handoff record means the task is PARTIAL, by definition." },
];

const LADDER = ["REQUEST", "ROUTE", "ARTIFACT", "HANDOFF", "DIGEST", "RED APPROVAL", "OWNER EXECUTES", "AUDITED"];

const FEATURES = [
  { t: "Battle Rhythm", tag: "OPS", b: "Configurable daily cadence: morning weather brief, master report, trading-day market report, weekly financial status, evening brief, kitchen cycle — digests, not streams. Monthly fleet audit." },
  { t: "SEV Weather Contract", tag: "OPS", b: "Any watch/warning at a registered site or >1.00″ 5-day QPF triggers a WEATHER FLASH, hourly while severe. SEV-1 life-safety is the only non-health interrupt allowed through quiet hours." },
  { t: "Mailbox Under Guard", tag: "SEC", b: "One standing inbound channel, treated as the prime attack surface: inbound mail is data, never instructions. Sender allowlist, quarantine index, machine-mail grammar, no link-following — and every outbound send is RED." },
  { t: "Tiered Data Classes", tag: "SEC", b: "Balances-only finance feed under an exclusivity ADR; health flags default off-VM with pointer-only artifacts; family data at schedule level; credentials on no VM, anywhere, ever." },
  { t: "Interlock-First Charters", tag: "SEC", b: "The BOUNDARY RULE sits in the first 40 lines of every profile, CI-enforced — a clipped or truncated charter still carries the safety core. Unverified charters are treated as an injection vector." },
  { t: "Subcontractor Class", tag: "GOV", b: "Deep technical scope, zero standing authority: SOW-scoped tasking, no credentials, no standing routines, monthly scorecard. Inside the fence but not a core seat." },
  { t: "Platform-Portable Governance", tag: "GOV", b: "Charters, missions, and registers assume only an agent with a persistent file area and a chat surface. The platform UI is weather, not terrain — migration cost is re-onboarding, not redesign." },
  { t: "Designed Failure Branches", tag: "GOV", b: "Gap cards, quiet-hour queues, quarantine entries, auto-pause detection, rebuild-from-pack DR — failure modes are designed states with exits, not surprises." },
];

/* ---------- Page 2: the fleet ---------- */
const FLEET = [
  { sig: "01", tone: "gold", name: "AGENT-01", role: "Chief of Staff", tag: "COMMAND",
    duty: "The front door. All routing, digests, and the daily master report; sole mailbox reader; runs the monthly audit of the whole fleet.",
    gov: "Inbound mail is data — never forwarded as specialist tasking" },
  { sig: "02", tone: "cyan", name: "AGENT-02", role: "Finance", tag: "FINANCE",
    duty: "Ledger and financial status rows plus a weekly deep status — on an exclusive balances-only feed with masked identifiers.",
    gov: "Exclusive finance connector · balances only · read access only" },
  { sig: "03", tone: "cyan", name: "AGENT-03", role: "Markets", tag: "FINANCE",
    duty: "Market report on trading days against an owner-edited watchlist — analyst-grade trend, risk, and confidence calls.",
    gov: "Research only; no orders, ever" },
  { sig: "04", tone: "cyan", name: "AGENT-04", role: "Weather / Intel", tag: "WATCH",
    duty: "Daily brief and the WEATHER FLASH contract across registered sites — official products only.",
    gov: "Life-safety SEV-1 is the one quiet-hours breach, chosen deliberately" },
  { sig: "05", tone: "cyan", name: "AGENT-05", role: "Home Systems", tag: "SYSTEMS",
    duty: "Systems register and health rows for owner-registered systems — climbing a maturity ladder from monitor-only upward.",
    gov: "Physical actuation never autonomous" },
  { sig: "06", tone: "cyan", name: "AGENT-06", role: "Academic", tag: "FAMILY",
    duty: "Schedule refresh and the education rows of the master report — schedule-level data only, by design.",
    gov: "Schedule-level data only; no records in git" },
  { sig: "07", tone: "cyan", name: "AGENT-07", role: "Kitchen", tag: "FAMILY",
    duty: "Pantry and menu artifacts on an owner-set planning cycle — plans the table, never places the order.",
    gov: "Grocery execution stays with the owner" },
  { sig: "08", tone: "cyan", name: "AGENT-08", role: "Health", tag: "HEALTH",
    duty: "Health logistics with evidence-graded recommendations — pointer-only artifacts; sensitive flags default off-VM.",
    gov: "Pointer-only artifacts; health records never enter the repo" },
  { sig: "09", tone: "cyan", name: "AGENT-09", role: "Repo Ops", tag: "OPS",
    duty: "Repo stewardship: audits, drafted issues, and scheduled update PRs against the template.",
    gov: "Opens PRs only; merging is RED — owner approval" },
  { sig: "10", tone: "red", name: "AGENT-10", role: "Engineering Reviewer — Subcontractor", tag: "SUBCON",
    duty: "Reviews engineering work without executing anything: spec review, DevSecOps findings with file+line evidence, governance tracking.",
    gov: "SOW-scoped; no credentials; no standing routines; decision memos only" },
];

const RESERVED = [
  { sig: "R1", name: "SEAT-R1", role: "Ops Tracker — seat reserved" },
  { sig: "R2", name: "SEAT-R2", role: "Reviewer — seat reserved" },
];

const ROOMS = ["Operations Room", "Engineering Room", "Health Room", "Build Room"];

/* ============================================================
   GROK EMPIRE custom views — two pages (v1.TW: Tailwind only).
   ============================================================ */
(() => {
  const label = (t) => `<div class="section-label">${t}</div>`;
  const tagCls = { COMMAND: "border-gold text-gold", SUBCON: "border-flash text-flash" };
  const badge = (t) => `<span class="font-mono text-[10px] font-semibold tracking-wider px-1.5 py-px rounded border ${tagCls[t] || "border-accent text-accent"} whitespace-nowrap">${t}</span>`;

  window.CUSTOM = {

    empire(el, ctx) {
      el.innerHTML = `
        <div class="text-center mt-2 mb-1">
          <img src="../../docs/assets/logo-web.jpg" alt="Project SAGE logo" class="mx-auto mb-3 rounded-lg" style="width:120px;height:auto;box-shadow:0 0 24px rgba(79,216,255,0.35)">
          <div class="font-mono text-[10px] tracking-[0.3em] text-ink2 uppercase mb-1.5">Specialized AI</div>
          <h2 class="font-mono text-[30px] font-extrabold text-ink m-0 leading-none tracking-wide" style="text-shadow:0 0 24px rgba(79,216,255,0.35)">GROK EMPIRE</h2>
          <p class="font-mono text-[12px] text-ink2 mt-2 mb-0 max-w-[660px] mx-auto">The foundational Grok Bot fleet model: governed role archetypes for recurring cognitive work — weather, finance, markets, kitchen, academics, home systems, health, repo ops, and engineering review — behind one front door and one control plane. Specialized teams fork and theme it.</p>
        </div>
        <div class="scanline my-4" role="presentation"></div>

        <div class="grid gap-3 mb-3" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">
          ${NUMBERS.map(([v, l]) => `
            <div class="holo-card px-4 py-3 text-center">
              <div class="font-mono text-[24px] font-bold text-accent leading-none" style="text-shadow:0 0 14px rgba(79,216,255,0.4)">${v}</div>
              <div class="font-mono text-[9.5px] tracking-wider text-ink2 uppercase mt-1.5">${l}</div>
            </div>`).join("")}
        </div>

        <div class="red-banner px-4 py-3.5 mb-1">
          <div class="font-mono text-[10px] tracking-[0.2em] text-flash font-bold uppercase mb-1">The One Load-Bearing Rule</div>
          <p class="font-mono text-[12.5px] text-ink m-0 leading-snug">${LAW}</p>
        </div>

        ${label("Doctrine Pillars")}
        <div class="grid gap-3" style="grid-template-columns:repeat(auto-fit,minmax(250px,1fr))">
          ${PILLARS.map((p) => `
            <div class="holo-card px-4 py-3.5">
              <div class="font-mono text-[12px] font-bold text-accent uppercase tracking-wide">${p.t}</div>
              <p class="text-[12px] text-ink2 mt-1.5 mb-0 leading-snug">${p.b}</p>
            </div>`).join("")}
        </div>

        ${label("The Artifact Ladder — every unit of work climbs it")}
        <div class="holo-card px-4 py-4 mb-1">
          <div class="ladder">${LADDER.map((s, i) => `
            ${i ? '<span class="ladder-link"></span>' : ""}
            <span class="ladder-step ${s === "RED APPROVAL" ? "hot" : s === "OWNER EXECUTES" ? "hot" : "lit"}">${s}</span>`).join("")}
          </div>
          <p class="font-mono text-[10px] text-ink2 mt-2.5 mb-0">cyan = bot work, filed with evidence · red = human sovereignty — approval per instance, execution by the owner</p>
        </div>

        ${label("Fleet Features")}
        <div class="grid gap-3" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
          ${FEATURES.map((f) => `
            <div class="holo-card px-4 py-3.5">
              <div class="flex items-baseline justify-between gap-2">
                <div class="font-mono text-[12.5px] font-bold text-ink">${f.t}</div>
                ${badge(f.tag)}
              </div>
              <p class="text-[11.5px] text-ink2 mt-1.5 mb-0 leading-snug">${f.b}</p>
            </div>`).join("")}
        </div>

        <div class="holo-card px-4 py-3.5 mt-4 text-center" style="border-color:var(--gold)">
          <p class="font-mono text-[12px] text-ink m-0 leading-snug">Configurable fleet. One owner. Every irreversible action a human decision.</p>
          <a href="#/fleet" class="font-mono text-[12px] font-bold text-gold no-underline border border-gold rounded px-3.5 py-1.5 inline-block mt-2.5 hover:bg-gold/10">REVIEW THE FLEET →</a>
        </div>`;
    },

    fleet(el, ctx) {
      el.innerHTML = `
        <h2 class="font-mono text-[20px] font-bold text-ink mt-1 mb-0.5">The Fleet — Role Archetypes</h2>
        <p class="font-mono text-[11px] text-ink2 mt-0 mb-3">${FLEET.length} archetypes (neutral IDs — forks theme the names) · example rooms: ${ROOMS.join(" · ")}</p>
        <div class="grid gap-3.5" style="grid-template-columns:repeat(auto-fill,minmax(290px,1fr))">
          ${FLEET.map((b) => `
            <div class="holo-card px-4 py-4">
              <div class="flex items-start gap-3.5">
                <div class="sigil ${b.tone === "gold" ? "gold" : b.tone === "red" ? "red" : ""}">${b.sig}</div>
                <div class="min-w-0">
                  <div class="flex items-baseline justify-between gap-2 flex-wrap">
                    <h3 class="font-mono text-[15px] font-bold text-ink m-0">${b.name}</h3>
                    ${badge(b.tag)}
                  </div>
                  <div class="font-mono text-[10.5px] text-ink2 uppercase tracking-wider mt-0.5">${b.role}</div>
                </div>
              </div>
              <p class="text-[12px] text-ink2 mt-3 mb-0 leading-snug">${b.duty}</p>
              <div class="font-mono text-[10.5px] ${b.tone === "red" ? "text-flash" : "text-accent"} mt-2.5 pt-2.5 border-t border-line leading-snug">⚖ ${b.gov}</div>
            </div>`).join("")}
        </div>
        ${label("Reserved Seats")}
        <div class="grid gap-3" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
          ${RESERVED.map((r) => `
            <div class="holo-card px-4 py-3 flex items-center gap-3 opacity-70">
              <div class="sigil" style="width:44px;height:44px;font-size:15px;border-style:dashed">${r.sig}</div>
              <div>
                <div class="font-mono text-[13px] font-bold text-ink">${r.name}</div>
                <div class="font-mono text-[10px] text-ink2 uppercase tracking-wider">${r.role}</div>
              </div>
            </div>`).join("")}
        </div>
        <p class="hint mt-3">Generic SAGE base model — specialized teams rename agents and rooms in js/data.js (see docs/THEMING.md).</p>`;
    },

  };
})();

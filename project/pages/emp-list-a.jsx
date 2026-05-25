/* global React */

// ─── Empreendimentos · Listagem · Variação A "Aço Grid Técnico" ─────
// Catálogo arquitetônico — cabeçalho com filtros densos, grid 12 col
// com cartões grandes/pequenos alternados, ficha técnica visível em
// cada card. Vermelho como acento de status. Scoped to .stl-la.

const EmpListACSS = `
.stl-la {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.55;
  width: 100%;
}
.stl-la .ff { font-family: 'DM Serif Display', serif; }

.la-top {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.la-top .l { display: flex; gap: 22px; }
.la-top .l .red { color: var(--steel-red-lt); }
.la-top .r { display: flex; gap: 20px; color: rgba(241,235,224,0.7); }

.la-nav {
  background: var(--steel-cream);
  padding: 22px 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 48px;
  align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.la-nav .logo { display: flex; align-items: center; gap: 14px; }
.la-mark { width: 44px; height: 44px; background: var(--steel-red); position: relative; }
.la-mark::before { content: ''; position: absolute; left: 14%; right: 14%; top: 46%; height: 7%; background: var(--steel-cream); transform: rotate(-45deg); }
.la-mark .ca { position: absolute; top: 16%; right: 16%; width: 28%; height: 28%; background: var(--steel-cream); }
.la-mark .cb { position: absolute; bottom: 14%; left: 14%; width: 22%; height: 22%; background: var(--steel-cream); }
.la-nav .lw { font-family: 'Anton', sans-serif; font-size: 28px; letter-spacing: 0.02em; color: var(--steel-black); line-height: 1; }
.la-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase; margin-top: 4px; }
.la-nav ul { display: flex; gap: 26px; justify-self: center; }
.la-nav ul a { font-size: 13px; font-weight: 500; color: var(--steel-ink); padding: 8px 4px; border-bottom: 2px solid transparent; }
.la-nav ul a.active { border-bottom-color: var(--steel-red); }
.la-nav .act { display: flex; gap: 12px; align-items: center; }
.la-btn-red {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 13px 22px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.la-btn-outline {
  background: transparent; color: var(--steel-ink);
  border: 1.5px solid var(--steel-ink);
  padding: 11.5px 20px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}

/* ── Header section ── */
.la-head {
  background: var(--steel-cream);
  padding: 56px 48px 0;
}
.la-head-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--steel-border);
  align-items: end;
}
.la-head-top .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 18px;
}
.la-head-top .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.la-head-top h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 124px;
  line-height: 0.92;
  letter-spacing: -0.028em;
  color: var(--steel-black);
}
.la-head-top h1 em { font-style: italic; color: var(--steel-red); }
.la-head-top p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--steel-graphite);
  max-width: 460px;
}
.la-head-top p strong { color: var(--steel-ink); font-weight: 600; }
.la-head-top .ctas { margin-top: 24px; display: flex; gap: 12px; }

/* Filter bar */
.la-filter {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 2px solid var(--steel-ink);
  align-items: center;
}
.la-filter .groups { display: flex; gap: 32px; align-items: center; flex-wrap: wrap; }
.la-filter .group { display: flex; gap: 8px; align-items: center; }
.la-filter .group .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  margin-right: 8px;
}
.la-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid var(--steel-ink);
  color: var(--steel-ink);
}
.la-chip.active { background: var(--steel-ink); color: var(--steel-cream); }
.la-chip.red.active { background: var(--steel-red); border-color: var(--steel-red); }
.la-filter .right {
  display: flex; gap: 16px; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.la-filter .right .red { color: var(--steel-red); font-weight: 700; }
.la-filter .right .sw {
  display: flex; gap: 4px; align-items: center;
  padding-left: 16px;
  border-left: 1px solid var(--steel-border);
}
.la-filter .right .sw button {
  width: 32px; height: 32px;
  border: 1px solid var(--steel-ink);
  display: flex; align-items: center; justify-content: center;
  background: transparent;
}
.la-filter .right .sw button.active { background: var(--steel-ink); color: var(--steel-cream); }

/* ── Featured strip · current build ── */
.la-feature {
  background: var(--steel-cream);
  padding: 48px 48px 0;
  border-bottom: 1px solid var(--steel-border);
}
.la-feature-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  padding-bottom: 56px;
  align-items: start;
}
.la-feature-inner > * { min-width: 0; }
.la-feature-ph {
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16/9.2;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  border: 1px solid var(--steel-ink);
  overflow: hidden;
}
.la-feature-ph::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px);
}
.la-feature-ph::after {
  content: 'IMAGEM · EDIFÍCIO AURORA · FACHADA SUL';
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.32em;
  color: rgba(241,235,224,0.2);
}
.la-feature-ph .stat {
  position: absolute; top: 22px; left: 22px;
  background: var(--steel-red); color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 8px 14px;
  display: flex; align-items: center; gap: 10px;
}
.la-feature-ph .stat .dot { width: 6px; height: 6px; background: var(--steel-cream); border-radius: 50%; }
.la-feature-ph .stamp {
  position: absolute; bottom: 22px; right: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.4);
  text-transform: uppercase;
}
.la-feature-ph .scale {
  position: absolute; bottom: 22px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.4);
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.la-feature-ph .scale::after {
  content: ''; width: 56px; height: 1px; background: rgba(241,235,224,0.4);
}

.la-feature-info {
  background: var(--steel-paper);
  border: 1px solid var(--steel-border);
  padding: 32px 30px;
  display: flex; flex-direction: column;
}
.la-feature-info .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.22em;
  color: var(--steel-red);
  text-transform: uppercase;
  margin-bottom: 14px;
}
.la-feature-info h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 56px;
  line-height: 0.98;
  letter-spacing: -0.022em;
  color: var(--steel-black);
  margin-bottom: 24px;
}
.la-feature-info h3 em { font-style: italic; color: var(--steel-red); }
.la-feature-info p {
  font-size: 14.5px;
  color: var(--steel-graphite);
  line-height: 1.7;
  margin-bottom: 24px;
}
.la-feature-info .table { margin-top: auto; }
.la-feature-info .table .row {
  display: grid; grid-template-columns: 1fr auto;
  padding: 12px 0;
  border-bottom: 1px solid var(--steel-border);
}
.la-feature-info .table .row:last-child { border-bottom: none; }
.la-feature-info .table .row .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  margin: 0;
}
.la-feature-info .table .row .v {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: var(--steel-ink);
}
.la-feature-info .table .row .v em { font-style: italic; color: var(--steel-red); }
.la-feature-info .cta {
  display: grid; grid-template-columns: 1fr auto;
  gap: 8px;
  margin-top: 24px;
}
.la-feature-info .cta a.la-btn-red { justify-content: center; }
.la-feature-info .cta a.la-btn-outline { justify-content: center; }

/* ── Grid · listagem completa ── */
.la-list {
  background: var(--steel-cream);
  padding: 64px 48px 96px;
}
.la-list-head {
  display: grid; grid-template-columns: 1fr auto;
  align-items: end;
  padding-bottom: 24px;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.la-list-head h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.la-list-head h2 em { font-style: italic; color: var(--steel-red); }
.la-list-head .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
}
.la-list-head .meta .red { color: var(--steel-red); font-weight: 700; }

.la-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}
.la-card {
  background: var(--steel-paper);
  border: 1px solid var(--steel-border);
  position: relative;
  display: flex; flex-direction: column;
}
.la-card.lg { grid-column: span 8; }
.la-card.md { grid-column: span 6; }
.la-card.sm { grid-column: span 4; }
.la-card .ph {
  position: relative;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  overflow: hidden;
}
.la-card.lg .ph { aspect-ratio: 16/9.4; }
.la-card.md .ph { aspect-ratio: 16/10; }
.la-card.sm .ph { aspect-ratio: 4/3.2; }
.la-card:nth-child(2) .ph { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.la-card:nth-child(3) .ph { background: linear-gradient(170deg, #4a4238, #14130f); }
.la-card:nth-child(4) .ph { background: linear-gradient(150deg, #6a5e50, #1a1612); }
.la-card:nth-child(5) .ph { background: linear-gradient(165deg, #38332c, #0f0e0d); }
.la-card:nth-child(6) .ph { background: linear-gradient(170deg, #58504a, #1a1612); }
.la-card:nth-child(7) .ph { background: linear-gradient(155deg, #4a3a30, #1a1612); }
.la-card .ph::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px);
}
.la-card .ph::after {
  content: attr(data-label);
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.18);
  text-align: center;
}
.la-card .stat {
  position: absolute; top: 0; left: 0;
  background: var(--steel-red); color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 7px 12px;
  display: flex; align-items: center; gap: 8px;
}
.la-card .stat.k { background: var(--steel-black); }
.la-card .stat.l { background: var(--steel-bone); color: var(--steel-ink); }
.la-card .stat .dot { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }
.la-card .num {
  position: absolute; top: 16px; right: 16px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 26px;
  color: rgba(241,235,224,0.45);
}
.la-card .info {
  padding: 20px 22px;
  background: var(--steel-paper);
  display: flex; flex-direction: column;
  gap: 6px;
  flex: 1;
}
.la-card .info .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  display: flex; gap: 10px; align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--steel-border);
  margin-bottom: 6px;
}
.la-card .info .meta .red { color: var(--steel-red); }
.la-card .info .ttl {
  display: grid; grid-template-columns: 1fr auto;
  gap: 14px; align-items: end;
}
.la-card .info h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.012em;
  color: var(--steel-black);
}
.la-card.lg .info h4 { font-size: 34px; }
.la-card .info h4 em { font-style: italic; color: var(--steel-red); }
.la-card .info .arr {
  width: 40px; height: 40px;
  background: var(--steel-black); color: var(--steel-cream);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.la-card .info .arr svg { width: 16px; height: 16px; }
.la-card .info .spec {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--steel-border);
}
.la-card .info .spec .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-stone);
}
.la-card .info .spec .v {
  font-family: 'DM Serif Display', serif;
  font-size: 16px;
  color: var(--steel-ink);
  letter-spacing: -0.005em;
}
.la-card .info .spec .v em { font-style: italic; color: var(--steel-red); font-size: 12px; }
.la-card .progress {
  height: 4px;
  background: var(--steel-bone);
  position: relative;
}
.la-card .progress .fill {
  position: absolute; left: 0; top: 0; bottom: 0;
  background: var(--steel-red);
}

/* Map row */
.la-map-row {
  background: var(--steel-bone);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
  align-items: center;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.la-map-row h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 54px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
  margin-bottom: 20px;
}
.la-map-row h3 em { font-style: italic; color: var(--steel-red); }
.la-map-row p {
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--steel-graphite);
  max-width: 420px;
  margin-bottom: 24px;
}
.la-map-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  border-top: 1px solid var(--steel-border);
}
.la-map-stats div {
  padding: 18px 12px 0 0;
  border-right: 1px solid var(--steel-border);
}
.la-map-stats div:last-child { border-right: none; padding-right: 0; }
.la-map-stats .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.la-map-stats .v {
  font-family: 'DM Serif Display', serif;
  font-size: 28px;
  color: var(--steel-black);
  letter-spacing: -0.015em;
}
.la-map-stats .v em { font-style: italic; color: var(--steel-red); font-size: 16px; }

.la-map-frame {
  position: relative;
  aspect-ratio: 16/10;
  background: var(--steel-cream);
  border: 1px solid var(--steel-ink);
  overflow: hidden;
}
.la-map-frame::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(rgba(15,14,13,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.05) 1px, transparent 1px),
    linear-gradient(rgba(15,14,13,0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.10) 1px, transparent 1px);
  background-size: 32px 32px, 32px 32px, 320px 320px, 320px 320px;
}
.la-map-frame .road { position: absolute; background: rgba(15,14,13,0.15); }
.la-map-frame .road.r1 { top: 35%; left: 0; right: 0; height: 10px; }
.la-map-frame .road.r2 { top: 0; bottom: 0; left: 38%; width: 8px; }
.la-map-frame .road.r3 { top: 70%; left: 12%; right: 0; height: 6px; transform: rotate(-5deg); transform-origin: left; }
.la-map-frame .pin {
  position: absolute; width: 16px; height: 16px; border-radius: 50%;
  background: var(--steel-red);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 6px rgba(142,27,34,0.15);
}
.la-map-frame .pin .lab {
  position: absolute; left: 24px; top: -4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-ink);
  white-space: nowrap;
}
.la-map-frame .pin.p1 { top: 35%; left: 38%; }
.la-map-frame .pin.p2 { top: 22%; left: 64%; }
.la-map-frame .pin.p3 { top: 56%; left: 54%; }
.la-map-frame .pin.p4 { top: 70%; left: 28%; }
.la-map-frame .pin.p5 { top: 16%; left: 28%; }
.la-map-frame .pin.p6 { top: 78%; left: 70%; }
.la-map-frame .compass {
  position: absolute; top: 18px; right: 22px;
  width: 36px; height: 36px;
  border: 1px solid var(--steel-ink);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 14px;
  color: var(--steel-red);
}
.la-map-frame .scale {
  position: absolute; bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.la-map-frame .scale::after {
  content: ''; width: 56px; height: 1px; background: var(--steel-ink);
}

/* CTA */
.la-cta {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 80px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: end;
  position: relative;
  overflow: hidden;
}
.la-cta::before {
  content: ''; position: absolute;
  top: 0; right: 0; width: 50%; height: 100%;
  background: var(--steel-red);
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 0 100%);
  opacity: 0.18;
}
.la-cta .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
  position: relative;
}
.la-cta .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.la-cta h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 60px;
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
  position: relative;
}
.la-cta h2 em { font-style: italic; color: var(--steel-red-lt); }
.la-cta-card {
  background: var(--steel-cream); color: var(--steel-ink);
  padding: 28px 30px;
  position: relative;
}
.la-cta-card .row {
  display: flex; flex-direction: column; gap: 4px;
  padding: 14px 0;
  border-bottom: 1px solid var(--steel-border);
}
.la-cta-card .row:last-child { border-bottom: none; }
.la-cta-card .row .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--steel-stone);
  text-transform: uppercase;
}
.la-cta-card .row .v {
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  color: var(--steel-ink);
}
.la-cta-card button {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 16px; text-align: center;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-top: 16px; width: 100%; display: block; border: none;
}

/* Footer (compact) */
.la-foot {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 56px 48px 24px;
}
.la-foot-top {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--steel-border-d);
}
.la-foot .bw { font-family: 'Anton', sans-serif; font-size: 52px; line-height: 0.95; color: var(--steel-cream); letter-spacing: 0.02em; }
.la-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.la-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 20px; color: rgba(241,235,224,0.7); max-width: 340px; line-height: 1.4; }
.la-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.la-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.la-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

const LIST_ITEMS = [
  { n:'01', stat:'red', label:'Em obras · 62%', name:'Edifício', em:'Aurora', meta:'Residencial · Pinheiros SP', specs:[['UN','128'],['M²','84-212'],['LANÇ','Out 25'],['ENTRG','Q3 27']], img:'IMAGEM · AURORA FACHADA SUL', prog:62 },
  { n:'02', stat:'k', label:'Lançamento', name:'Steel Pier', em:'Office Tower', meta:'Corporativo · Belo Horizonte', specs:[['LAJES','18'],['M²','12k'],['POS','Centro'],['ENTRG','Q1 28']], img:'IMAGEM · STEEL PIER · CORPORATIVO BH' },
  { n:'03', stat:'l', label:'Pronto pra morar', name:'Vivienda', em:'Margens', meta:'Casas em condomínio · Brasília', specs:[['CASAS','14'],['M²','240-360'],['ENTRG','2024'],['UN','3 disp']], img:'IMAGEM · VIVIENDA MARGENS' },
  { n:'04', stat:'red', label:'Pré-lançamento', name:'Fábrica', em:'Plaza', meta:'Lofts · Conversão · SP', specs:[['LOFTS','62'],['M²','48-140'],['LANÇ','Mar 26'],['ENTRG','Q4 28']], img:'IMAGEM · FÁBRICA PLAZA · LOFTS' },
  { n:'05', stat:'k', label:'Entregue · 2023', name:'Hospital', em:'Albano', meta:'Saúde · ampliação · MG', specs:[['LEITOS','+186'],['M²','24k'],['ANO','2023'],['CERT','LEED']], img:'IMAGEM · HOSPITAL ALBANO MG' },
  { n:'06', stat:'red', label:'Em obras · 38%', name:'CD Logística', em:'Sul', meta:'Industrial · Itupeva SP', specs:[['M²','18k'],['DOCAS','42'],['ENTRG','Q2 27'],['PROG','38%']], img:'IMAGEM · CD LOGÍSTICA SUL', prog:38 },
  { n:'07', stat:'l', label:'Entregue · 2022', name:'Sede', em:'Volare', meta:'Corporativo · Vinhedo SP', specs:[['LAJES','12'],['M²','9,4k'],['ANO','2022'],['CERT','AQUA']], img:'IMAGEM · SEDE VOLARE' },
];

function ListCard({ item, size }) {
  const cls = `la-card ${size}`;
  return (
    <article className={cls}>
      <div className="ph" data-label={item.img}>
        <span className={`stat ${item.stat==='red'?'':item.stat}`}>
          <span className="dot"></span>{item.label}
        </span>
        <span className="num">{item.n}</span>
      </div>
      {item.prog !== undefined && (
        <div className="progress"><div className="fill" style={{width: item.prog + '%'}}></div></div>
      )}
      <div className="info">
        <div className="meta">{item.meta}<span className="red">·</span>FICHA {item.n}/07</div>
        <div className="ttl">
          <h4>{item.name}{' '}<em>{item.em}</em></h4>
          <a className="arr">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="spec">
          {item.specs.map((s,i)=> (
            <div key={i}>
              <div className="k">{s[0]}</div>
              <div className="v">{s[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function EmpListA() {
  return (
    <div className="steel stl-la">
      <style>{EmpListACSS}</style>

      <div className="la-top">
        <div className="l">
          <span><span className="red">●</span> 7 em curso · 3 em obras</span>
          <span>SP · MG · DF · Atendimento nacional</span>
        </div>
        <div className="r">
          <span>+55 11 4002 8922</span>
          <span>contato@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      <nav className="la-nav">
        <div className="logo">
          <div className="la-mark"><span className="ca"></span><span className="cb"></span></div>
          <div>
            <div className="lw">STEEL</div>
            <div className="ls">Construções &amp; Empreendimentos</div>
          </div>
        </div>
        <ul>
          <li><a className="active">Empreendimentos</a></li>
          <li><a>Construções</a></li>
          <li><a>A Steel</a></li>
          <li><a>Processo</a></li>
          <li><a>Imprensa</a></li>
          <li><a>Contato</a></li>
        </ul>
        <div className="act">
          <a className="la-btn-outline">Brochura ↓</a>
          <a className="la-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      <section className="la-head">
        <div className="la-head-top">
          <div>
            <div className="ey">Cap. 01 · Portfólio em curso</div>
            <h1>Empreendimentos<br/>em <em>curso.</em></h1>
          </div>
          <div>
            <p>
              <strong>Sete empreendimentos</strong> em três estados, em fases distintas — do canteiro ativo ao pré-lançamento. Cada um conduzido pelo time integrado de incorporação, projeto e obra da Steel.
            </p>
            <div className="ctas">
              <a className="la-btn-outline">Brochura PDF ↓</a>
              <a className="la-btn-red">Falar com vendas →</a>
            </div>
          </div>
        </div>

        <div className="la-filter">
          <div className="groups">
            <div className="group">
              <span className="k">Categoria</span>
              <span className="la-chip red active">Tudo</span>
              <span className="la-chip">Residencial</span>
              <span className="la-chip">Corporativo</span>
              <span className="la-chip">Industrial</span>
              <span className="la-chip">Retrofit</span>
            </div>
            <div className="group">
              <span className="k">Status</span>
              <span className="la-chip active">Em obras</span>
              <span className="la-chip">Lançamento</span>
              <span className="la-chip">Pronto</span>
            </div>
            <div className="group">
              <span className="k">Praça</span>
              <span className="la-chip">SP</span>
              <span className="la-chip">MG</span>
              <span className="la-chip">DF</span>
            </div>
          </div>
          <div className="right">
            <span><span className="red">07</span> resultados · ordenar por: <strong>recência</strong></span>
            <div className="sw">
              <button className="active" title="Grid"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg></button>
              <button title="Lista"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="3"/><rect x="3" y="10" width="18" height="3"/><rect x="3" y="16" width="18" height="3"/></svg></button>
              <button title="Mapa"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/></svg></button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="la-feature">
        <div className="la-feature-inner">
          <div className="la-feature-ph">
            <div className="stat"><span className="dot"></span>Em obras · 62% · entrega Q3 2027</div>
            <div className="stamp">FICHA AUR-001 · STEEL 2026</div>
            <div className="scale">ESC 1:200</div>
          </div>
          <div className="la-feature-info">
            <div className="k">Destaque · N° 01 / 07</div>
            <h3>Edifício <em>Aurora.</em></h3>
            <p>
              128 apartamentos de 84 a 212 m² em torre única de 24 pavimentos, em Pinheiros. Arquitetura assinada por Dario Veloso, fachada ventilada em concreto pigmentado.
            </p>
            <div className="table">
              <div className="row"><span className="k">UNIDADES</span><span className="v">128 <em>aptos</em></span></div>
              <div className="row"><span className="k">TIPOLOGIA</span><span className="v">84—212 <em>m²</em></span></div>
              <div className="row"><span className="k">BAIRRO</span><span className="v">Pinheiros <em>· SP</em></span></div>
              <div className="row"><span className="k">ENTREGA</span><span className="v">Q3 · <em>2027</em></span></div>
              <div className="row"><span className="k">VENDIDO</span><span className="v">38 <em>%</em></span></div>
            </div>
            <div className="cta">
              <a className="la-btn-red">Ver ficha →</a>
              <a className="la-btn-outline">Caderno ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="la-list">
        <div className="la-list-head">
          <h2>Todos os <em>empreendimentos.</em></h2>
          <div className="meta">Exibindo <span className="red">07</span> de 07 · atualizado mai · 2026</div>
        </div>
        <div className="la-grid">
          <ListCard item={LIST_ITEMS[1]} size="lg" />
          <ListCard item={LIST_ITEMS[2]} size="sm" />

          <ListCard item={LIST_ITEMS[3]} size="md" />
          <ListCard item={LIST_ITEMS[4]} size="md" />

          <ListCard item={LIST_ITEMS[5]} size="sm" />
          <ListCard item={LIST_ITEMS[6]} size="lg" />
        </div>
      </section>

      {/* Map */}
      <section className="la-map-row">
        <div>
          <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.22em', color:'var(--steel-red)', textTransform:'uppercase', marginBottom:'14px', display:'flex', alignItems:'center', gap:'12px'}}>
            <span style={{width:'28px', height:'1px', background:'var(--steel-red)'}}></span>Cap. 02 · Mapa
          </div>
          <h3>Onde a <em>Steel</em><br/>está construindo.</h3>
          <p>
            Três praças com canteiros ativos. Atendimento nacional para construções corporativas, industriais e hospitalares.
          </p>
          <a className="la-btn-outline">Ver lista por praça →</a>
          <div className="la-map-stats">
            <div><div className="k">São Paulo</div><div className="v">4 <em>em curso</em></div></div>
            <div><div className="k">Minas Gerais</div><div className="v">2 <em>em curso</em></div></div>
            <div><div className="k">Distrito Federal</div><div className="v">1 <em>em curso</em></div></div>
          </div>
        </div>

        <div className="la-map-frame">
          <div className="compass">N</div>
          <div className="road r1"></div>
          <div className="road r2"></div>
          <div className="road r3"></div>
          <div className="pin p1"><span className="lab">01 · Aurora</span></div>
          <div className="pin p2"><span className="lab">02 · Steel Pier</span></div>
          <div className="pin p3"><span className="lab">03 · Vivienda</span></div>
          <div className="pin p4"><span className="lab">04 · Fábrica</span></div>
          <div className="pin p5"><span className="lab">05 · H. Albano</span></div>
          <div className="pin p6"><span className="lab">06 · CD Sul</span></div>
          <div className="scale">ESC 1:1.500.000</div>
        </div>
      </section>

      {/* CTA */}
      <section className="la-cta">
        <div>
          <div className="ey">Iniciar conversa</div>
          <h2>Tem um projeto<br/>ou um <em>terreno?</em></h2>
        </div>
        <div className="la-cta-card">
          <div className="row"><span className="k">Telefone direto</span><span className="v">+55 11 4002 8922</span></div>
          <div className="row"><span className="k">E-mail comercial</span><span className="v">contato@steelconstrucoes.com.br</span></div>
          <button>Falar com a Steel →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="la-foot">
        <div className="la-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col">
            <h4>Empreendimentos</h4>
            <ul>
              <li>Em obras (3)</li>
              <li>Lançamento (2)</li>
              <li>Pronto (2)</li>
              <li>Ver todos</li>
            </ul>
          </div>
          <div className="col">
            <h4>Steel</h4>
            <ul>
              <li>A Steel</li>
              <li>Processo</li>
              <li>Imprensa</li>
              <li>Investidores</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div className="col">
            <h4>Contato</h4>
            <ul>
              <li>+55 11 4002 8922</li>
              <li>contato@steelconstrucoes.com.br</li>
              <li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li>
            </ul>
          </div>
        </div>
        <div className="la-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.EmpListA = EmpListA;

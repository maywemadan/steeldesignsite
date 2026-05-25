/* global React */

// ─── Empreendimento · Detalhe · Variação A "Aço Estrutural" ─────────
// Pega o DNA de Aço (cream/red/grid/serif display) e empurra para uma
// página de produto editorial — fachada full bleed, ficha técnica forte,
// galeria curada, plantas, localização e venda.
// Width: 1440. Scoped to .stl-da.

const EmpDetailACSS = `
.stl-da {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.55;
  width: 100%;
}
.stl-da .ff-display { font-family: 'DM Serif Display', serif; font-weight: 400; }
.stl-da .ff-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

/* ── Top bar ── */
.da-top {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.da-top .left { display: flex; gap: 22px; }
.da-top .left .red { color: var(--steel-red-lt); }
.da-top .right { display: flex; gap: 20px; color: rgba(241,235,224,0.7); }

/* ── Nav ── */
.da-nav {
  background: var(--steel-cream);
  padding: 22px 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 48px;
  align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.da-nav .logo { display: flex; align-items: center; gap: 14px; }
.da-logo-mark {
  width: 44px; height: 44px;
  background: var(--steel-red);
  position: relative;
}
.da-logo-mark::before {
  content: ''; position: absolute;
  left: 14%; right: 14%; top: 46%; height: 7%;
  background: var(--steel-cream);
  transform: rotate(-45deg);
}
.da-logo-mark .ca {
  position: absolute; top: 16%; right: 16%; width: 28%; height: 28%;
  background: var(--steel-cream);
}
.da-logo-mark .cb {
  position: absolute; bottom: 14%; left: 14%; width: 22%; height: 22%;
  background: var(--steel-cream);
}
.da-nav .logo-word {
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  letter-spacing: 0.02em;
  color: var(--steel-black);
  line-height: 1;
}
.da-nav .logo-sub {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  margin-top: 4px;
}
.da-nav ul { display: flex; gap: 26px; justify-self: center; }
.da-nav ul a {
  font-size: 13px;
  font-weight: 500;
  color: var(--steel-ink);
  padding: 8px 4px;
  border-bottom: 2px solid transparent;
}
.da-nav ul a.active { border-bottom-color: var(--steel-red); }
.da-nav .actions { display: flex; gap: 12px; align-items: center; }
.da-btn-red {
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 13px 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.da-btn-outline {
  background: transparent;
  color: var(--steel-ink);
  border: 1.5px solid var(--steel-ink);
  padding: 11.5px 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.da-btn-black {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 14px 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}

/* ── Breadcrumb ── */
.da-crumb {
  background: var(--steel-cream);
  padding: 16px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  border-bottom: 1px solid var(--steel-border);
}
.da-crumb .path { display: flex; gap: 12px; align-items: center; }
.da-crumb .path .sep { color: var(--steel-red); }
.da-crumb .path .here { color: var(--steel-ink); font-weight: 600; }
.da-crumb .meta { display: flex; gap: 22px; }
.da-crumb .meta .red { color: var(--steel-red); }

/* ── Hero: header + image ── */
.da-hero {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--steel-cream);
  padding: 56px 48px 0;
}
.da-hero-head {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 48px;
  align-items: end;
  padding-bottom: 36px;
  border-bottom: 1px solid var(--steel-border);
}
.da-hero-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
}
.da-hero-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.da-hero-head .ey .num { color: var(--steel-graphite); margin-left: 12px; }
.da-hero-head h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 124px;
  line-height: 0.94;
  letter-spacing: -0.028em;
  color: var(--steel-black);
}
.da-hero-head h1 em { font-style: italic; color: var(--steel-red); }
.da-hero-head .sub {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--steel-graphite);
  margin-top: 18px;
}
.da-hero-head .right {
  display: flex; flex-direction: column; gap: 18px;
  align-items: flex-start;
}
.da-hero-head .right .lede {
  font-size: 16px;
  line-height: 1.7;
  color: var(--steel-graphite);
  max-width: 460px;
}
.da-hero-head .right .lede strong { color: var(--steel-ink); font-weight: 600; }
.da-hero-head .right .ctas { display: flex; gap: 12px; }

/* big image */
.da-hero-image {
  margin: 40px 0 0;
  position: relative;
  aspect-ratio: 16/9.2;
  background: linear-gradient(165deg, #4a423a 0%, #1a1815 100%);
  overflow: hidden;
  border: 1px solid var(--steel-ink);
}
.da-hero-image::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px);
}
.da-hero-image::after {
  content: 'IMAGEM · FACHADA SUL · EDIFÍCIO AURORA';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.32em;
  color: rgba(241,235,224,0.22);
}
.da-hero-image .corner {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
}
.da-hero-image .corner.tl { top: 22px; left: 22px; display: flex; align-items: center; gap: 10px; }
.da-hero-image .corner.tl .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; }
.da-hero-image .corner.tr { top: 22px; right: 22px; }
.da-hero-image .corner.bl { bottom: 22px; left: 22px; display: flex; align-items: center; gap: 10px; }
.da-hero-image .corner.bl::after {
  content: ''; width: 56px; height: 1px;
  background: rgba(241,235,224,0.5);
}
.da-hero-image .corner.br { bottom: 22px; right: 22px; display: flex; gap: 16px; }
.da-hero-image .corner.br span:nth-child(2) { color: rgba(241,235,224,0.3); }

/* ── Spec strip ── */
.da-spec {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 0 48px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.da-spec .cell {
  padding: 32px 24px;
  border-right: 1px solid rgba(241,235,224,0.12);
  display: flex; flex-direction: column; gap: 10px;
}
.da-spec .cell:last-child { border-right: none; }
.da-spec .cell .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
}
.da-spec .cell .v {
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.015em;
  color: var(--steel-cream);
}
.da-spec .cell .v em { font-style: italic; font-size: 18px; color: rgba(241,235,224,0.6); }
.da-spec .cell.acc { background: var(--steel-red); border-color: transparent; }
.da-spec .cell.acc .k { color: rgba(247,242,233,0.7); }

/* ── Concept (about the building) ── */
.da-concept {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 0.7fr 1.6fr 1fr;
  gap: 48px;
  align-items: start;
  border-bottom: 1px solid var(--steel-border);
}
.da-concept .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  position: sticky; top: 24px;
}
.da-concept .label::before {
  content: ''; display: block; width: 36px; height: 1px;
  background: var(--steel-red); margin-bottom: 14px;
}
.da-concept h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 54px;
  line-height: 1.02;
  letter-spacing: -0.022em;
  color: var(--steel-black);
  margin-bottom: 28px;
}
.da-concept h2 em { font-style: italic; color: var(--steel-red); }
.da-concept .body p {
  font-size: 16px;
  line-height: 1.75;
  color: var(--steel-graphite);
  margin-bottom: 16px;
  max-width: 580px;
}
.da-concept .body p strong { color: var(--steel-ink); font-weight: 600; }
.da-concept .side {
  background: var(--steel-paper);
  border: 1px solid var(--steel-border);
  padding: 28px 26px;
}
.da-concept .side h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red);
  text-transform: uppercase;
  margin-bottom: 18px;
}
.da-concept .side .row {
  display: grid; grid-template-columns: 1fr auto;
  padding: 12px 0;
  border-top: 1px solid var(--steel-border);
  font-size: 13px;
}
.da-concept .side .row:first-of-type { border-top: none; }
.da-concept .side .row .k { color: var(--steel-graphite); font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; }
.da-concept .side .row .v { color: var(--steel-ink); font-weight: 600; text-align: right; font-family: 'DM Serif Display', serif; font-size: 16px; }
.da-concept .side .row .v em { font-style: italic; color: var(--steel-red); }

/* ── Gallery row ── */
.da-gallery {
  background: var(--steel-cream);
  padding: 24px 48px 96px;
}
.da-gallery-head {
  display: grid; grid-template-columns: 1fr auto;
  align-items: end;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
  margin-bottom: 32px;
}
.da-gallery-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--steel-black);
}
.da-gallery-head h3 em { font-style: italic; color: var(--steel-red); }
.da-gallery-head .controls {
  display: flex; gap: 8px; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.da-gallery-head .controls .num { color: var(--steel-red); font-weight: 600; }
.da-gallery-head .controls .arrow {
  width: 36px; height: 36px;
  border: 1px solid var(--steel-ink);
  display: flex; align-items: center; justify-content: center;
  margin-left: 8px;
}
.da-gallery-head .controls .arrow.filled { background: var(--steel-ink); color: var(--steel-cream); }
.da-gallery-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 14px;
}
.da-gal {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--steel-border);
}
.da-gal .ph {
  position: relative;
  width: 100%;
  background: linear-gradient(160deg, #38332c 0%, #14130f 100%);
}
.da-gal.g1 { grid-column: 1 / 2; grid-row: 1 / 3; }
.da-gal.g1 .ph { aspect-ratio: 4/5.5; }
.da-gal.g2 .ph { aspect-ratio: 16/10; background: linear-gradient(155deg, #5a4d3e 0%, #2a2418 100%); }
.da-gal.g3 .ph { aspect-ratio: 16/10; background: linear-gradient(170deg, #4a4238 0%, #1a1612 100%); }
.da-gal.g4 .ph { aspect-ratio: 16/10; background: linear-gradient(150deg, #6a5e50 0%, #2a2418 100%); }
.da-gal.g5 .ph { aspect-ratio: 16/10; background: linear-gradient(170deg, #3e3830 0%, #18140f 100%); }
.da-gal .ph::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 60px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 60px);
}
.da-gal .ph::after {
  content: attr(data-label);
  position: absolute;
  bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
.da-gal .num {
  position: absolute; top: 18px; left: 22px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: rgba(241,235,224,0.5);
  z-index: 2;
}
.da-gal .cap {
  background: var(--steel-cream);
  padding: 14px 18px;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  border-top: 1px solid var(--steel-border);
}
.da-gal .cap .red { color: var(--steel-red); }

/* ── Plantas ── */
.da-plans {
  background: var(--steel-bone);
  padding: 96px 48px;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.da-plans-head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: end;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
  margin-bottom: 48px;
  gap: 32px;
}
.da-plans-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
}
.da-plans-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.da-plans-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.da-plans-head h3 em { font-style: italic; color: var(--steel-red); }
.da-plans-head .tabs { display: flex; gap: 6px; align-items: center; }
.da-plan-tab {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid var(--steel-ink);
  color: var(--steel-ink);
  background: transparent;
}
.da-plan-tab.active { background: var(--steel-red); color: var(--steel-cream); border-color: var(--steel-red); }

.da-plan-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: stretch;
}
.da-plan-canvas {
  background: var(--steel-cream);
  border: 1px solid var(--steel-ink);
  aspect-ratio: 16/11.5;
  position: relative;
  overflow: hidden;
}
.da-plan-canvas::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,14,13,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.08) 1px, transparent 1px);
  background-size: 48px 48px;
}
/* fake floor plan: walls */
.da-plan-canvas .wall {
  position: absolute;
  background: var(--steel-ink);
}
.da-plan-canvas .room {
  position: absolute;
  border: 1px solid rgba(15,14,13,0.4);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  display: flex; align-items: end;
  padding: 8px 10px;
}
.da-plan-canvas .room .area {
  margin-left: auto;
  font-family: 'DM Serif Display', serif;
  font-size: 12px;
  color: var(--steel-ink);
  text-transform: none;
  font-style: italic;
}
.da-plan-canvas .red-wall {
  position: absolute;
  background: var(--steel-red);
}
.da-plan-canvas .scale {
  position: absolute;
  bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  display: flex; align-items: center; gap: 10px;
}
.da-plan-canvas .scale::after {
  content: ''; width: 60px; height: 1px; background: var(--steel-ink);
}
.da-plan-canvas .compass {
  position: absolute;
  top: 22px; right: 22px;
  width: 40px; height: 40px;
  border: 1px solid var(--steel-ink);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 14px;
  color: var(--steel-red);
}
.da-plan-canvas .ph-stamp {
  position: absolute;
  bottom: 20px; right: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
}

.da-plan-info {
  display: flex; flex-direction: column;
  background: var(--steel-cream);
  border: 1px solid var(--steel-border);
}
.da-plan-title {
  padding: 24px 26px 18px;
  border-bottom: 1px solid var(--steel-border);
}
.da-plan-title .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 8px;
}
.da-plan-title h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--steel-black);
}
.da-plan-title h4 em { font-style: italic; color: var(--steel-red); }
.da-plan-rows { padding: 8px 26px 12px; }
.da-plan-row {
  display: grid; grid-template-columns: 1fr auto;
  padding: 14px 0;
  border-bottom: 1px solid var(--steel-border);
}
.da-plan-row:last-child { border-bottom: none; }
.da-plan-row .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.da-plan-row .v {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: var(--steel-ink);
  letter-spacing: -0.005em;
}
.da-plan-row .v em { font-style: italic; color: var(--steel-red); }
.da-plan-disp {
  padding: 22px 26px;
  background: var(--steel-paper);
  border-top: 1px solid var(--steel-border);
}
.da-plan-disp .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 12px;
}
.da-plan-disp .bar {
  height: 8px;
  background: var(--steel-bone);
  position: relative;
}
.da-plan-disp .bar .fill {
  position: absolute; left: 0; top: 0; bottom: 0;
  background: var(--steel-red);
  width: 38%;
}
.da-plan-disp .note {
  margin-top: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.06em;
  color: var(--steel-graphite);
}

/* ── Spec / acabamentos ── */
.da-specs {
  background: var(--steel-cream);
  padding: 96px 48px;
}
.da-specs-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 64px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
  margin-bottom: 0;
  align-items: end;
}
.da-specs-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 54px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.da-specs-head h3 em { font-style: italic; color: var(--steel-red); }
.da-specs-head p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--steel-graphite);
  max-width: 460px;
}
.da-specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.da-spec-card {
  padding: 36px 28px;
  border-right: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
  background: var(--steel-cream);
}
.da-spec-card:nth-child(3n) { border-right: none; }
.da-spec-card.acc { background: var(--steel-black); color: var(--steel-cream); border-color: transparent; }
.da-spec-card.acc .k { color: var(--steel-red-lt); }
.da-spec-card.acc h5 { color: var(--steel-cream); }
.da-spec-card.acc p { color: rgba(241,235,224,0.7); }
.da-spec-card.acc .swatch { border-color: rgba(241,235,224,0.2); }
.da-spec-card .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 14px;
}
.da-spec-card h5 {
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--steel-black);
  margin-bottom: 14px;
}
.da-spec-card h5 em { font-style: italic; color: var(--steel-red); }
.da-spec-card p {
  font-size: 13px;
  line-height: 1.65;
  color: var(--steel-graphite);
  margin-bottom: 18px;
}
.da-spec-card .swatch-row {
  display: flex; gap: 8px; margin-bottom: 14px;
}
.da-spec-card .swatch {
  width: 36px; height: 36px;
  border: 1px solid var(--steel-border);
}
.da-spec-card .swatch.s1 { background: #c9beb0; }
.da-spec-card .swatch.s2 { background: #6a5e50; }
.da-spec-card .swatch.s3 { background: #2a2622; }
.da-spec-card .swatch.s4 { background: #8e1b22; }
.da-spec-card .swatch.s5 { background: #f1ebe0; }
.da-spec-card .bullets {
  display: flex; flex-direction: column; gap: 6px;
}
.da-spec-card .bullets li {
  font-size: 12.5px;
  color: inherit;
  display: flex; gap: 10px;
  padding: 6px 0;
  border-top: 1px solid var(--steel-border);
}
.da-spec-card.acc .bullets li { border-color: rgba(241,235,224,0.12); }
.da-spec-card .bullets li::before { content: '+'; color: var(--steel-red); font-weight: 600; }

/* ── Localização ── */
.da-loc {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  border-top: 1px solid var(--steel-border);
}
.da-map {
  position: relative;
  aspect-ratio: 4/3;
  background: var(--steel-bone);
  border: 1px solid var(--steel-ink);
  overflow: hidden;
}
.da-map::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(rgba(15,14,13,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.06) 1px, transparent 1px),
    linear-gradient(rgba(15,14,13,0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.10) 1px, transparent 1px);
  background-size: 24px 24px, 24px 24px, 240px 240px, 240px 240px;
}
.da-map .road {
  position: absolute;
  background: rgba(15,14,13,0.18);
}
.da-map .road.r1 { top: 30%; left: 0; right: 0; height: 14px; }
.da-map .road.r2 { top: 0; bottom: 0; left: 42%; width: 10px; }
.da-map .road.r3 { top: 65%; left: 18%; right: 0; height: 8px; transform: rotate(-6deg); transform-origin: left; }
.da-map .pin {
  position: absolute;
  top: 30%; left: 42%;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: var(--steel-red);
  box-shadow: 0 0 0 8px rgba(142,27,34,0.18);
  transform: translate(-50%, -50%);
  z-index: 3;
}
.da-map .label {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-ink);
}
.da-map .label.lbl1 { top: 22%; left: 47%; }
.da-map .label.lbl2 { top: 68%; left: 30%; }
.da-map .label.lbl3 { top: 12%; right: 22%; }
.da-map .scale {
  position: absolute;
  bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.da-map .scale::after {
  content: ''; width: 56px; height: 1px; background: var(--steel-ink);
}

.da-loc-side h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 44px;
  line-height: 1.02;
  letter-spacing: -0.022em;
  color: var(--steel-black);
  margin-bottom: 20px;
}
.da-loc-side h3 em { font-style: italic; color: var(--steel-red); }
.da-loc-side .addr {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 20px;
  color: var(--steel-graphite);
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--steel-border);
}
.da-loc-side .nearby {
  display: flex; flex-direction: column;
}
.da-loc-side .nearby li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--steel-border);
  align-items: baseline;
  font-size: 13px;
}
.da-loc-side .nearby li:last-child { border-bottom: none; }
.da-loc-side .nearby .ix {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--steel-red);
}
.da-loc-side .nearby .name {
  font-family: 'DM Serif Display', serif;
  font-size: 16px;
  color: var(--steel-ink);
}
.da-loc-side .nearby .dist {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--steel-graphite);
  letter-spacing: 0.06em;
}

/* ── Comercial / agendar visita ── */
.da-sales {
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 80px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.da-sales::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.da-sales .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(247,242,233,0.7);
  margin-bottom: 22px;
  display: flex; align-items: center; gap: 12px;
  position: relative;
}
.da-sales .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-cream); }
.da-sales h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 72px;
  line-height: 0.98;
  letter-spacing: -0.024em;
  color: var(--steel-cream);
  position: relative;
}
.da-sales h2 em { font-style: italic; color: var(--steel-black); }
.da-sales .price {
  display: flex; align-items: baseline; gap: 12px;
  margin-top: 32px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(247,242,233,0.7);
  position: relative;
}
.da-sales .price .v {
  font-family: 'DM Serif Display', serif;
  font-size: 44px;
  color: var(--steel-cream);
  letter-spacing: -0.015em;
  text-transform: none;
}
.da-sales .price .v em { font-style: italic; color: var(--steel-black); font-size: 24px; }

.da-sales-card {
  background: var(--steel-cream);
  color: var(--steel-ink);
  padding: 32px 30px;
  position: relative;
  box-shadow: 0 32px 80px rgba(0,0,0,0.18);
}
.da-sales-card h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  line-height: 1.1;
  letter-spacing: -0.012em;
  color: var(--steel-black);
  margin-bottom: 6px;
}
.da-sales-card h4 em { font-style: italic; color: var(--steel-red); }
.da-sales-card p {
  font-size: 13px;
  color: var(--steel-graphite);
  margin-bottom: 22px;
  line-height: 1.6;
}
.da-sales-card .field {
  display: flex; flex-direction: column;
  gap: 6px;
  padding: 12px 0;
  border-bottom: 1px solid var(--steel-border);
}
.da-sales-card .field .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--steel-stone);
}
.da-sales-card .field .v {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: var(--steel-ink);
}
.da-sales-card .field .ph {
  font-size: 14px;
  color: var(--steel-graphite);
  font-style: italic;
}
.da-sales-card button {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 16px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 22px;
  width: 100%;
  display: block;
}

/* ── Outros empreendimentos ── */
.da-others {
  background: var(--steel-cream);
  padding: 96px 48px;
  border-top: 1px solid var(--steel-border);
}
.da-others-head {
  display: flex; justify-content: space-between; align-items: end;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.da-others-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.da-others-head h3 em { font-style: italic; color: var(--steel-red); }
.da-others-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.da-other {
  border: 1px solid var(--steel-border);
  background: var(--steel-paper);
  position: relative;
}
.da-other .ph {
  aspect-ratio: 16/10;
  background: linear-gradient(165deg, #4a423a 0%, #1a1815 100%);
  position: relative;
  overflow: hidden;
}
.da-other:nth-child(2) .ph { background: linear-gradient(155deg, #58504a, #1a1815); }
.da-other:nth-child(3) .ph { background: linear-gradient(170deg, #6a5e50, #2a2418); }
.da-other .ph::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 50px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 50px);
}
.da-other .stat {
  position: absolute; top: 0; left: 0;
  background: var(--steel-red); color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 7px 12px;
  display: flex; align-items: center; gap: 8px;
}
.da-other .stat.k { background: var(--steel-black); }
.da-other .stat.l { background: var(--steel-bone); color: var(--steel-ink); }
.da-other .stat .dot { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }
.da-other .info { padding: 18px 20px; }
.da-other .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.da-other .meta .red { color: var(--steel-red); }
.da-other h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  color: var(--steel-black);
  letter-spacing: -0.012em;
}
.da-other h4 em { font-style: italic; color: var(--steel-red); }

/* ── Footer (reused vocabulary) ── */
.da-foot {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 56px 48px 24px;
}
.da-foot-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--steel-border-d);
}
.da-foot .brand-word {
  font-family: 'Anton', sans-serif;
  font-size: 52px;
  line-height: 0.95;
  letter-spacing: 0.02em;
  color: var(--steel-cream);
}
.da-foot .brand-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 24px;
}
.da-foot .brand-q {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 20px;
  color: rgba(241,235,224,0.7);
  max-width: 340px;
  line-height: 1.4;
}
.da-foot-col h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 22px;
}
.da-foot-col li {
  font-size: 13.5px;
  color: rgba(241,235,224,0.7);
  margin-bottom: 10px;
}
.da-foot-bottom {
  padding-top: 24px;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
`;

function EmpDetailA() {
  return (
    <div className="steel stl-da">
      <style>{EmpDetailACSS}</style>

      {/* Top */}
      <div className="da-top">
        <div className="left">
          <span><span className="red">●</span> Em obras · 62% · entrega Q3 2027</span>
          <span>Pinheiros · São Paulo</span>
        </div>
        <div className="right">
          <span>+55 11 4002 8922</span>
          <span>aurora@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="da-nav">
        <div className="logo">
          <div className="da-logo-mark">
            <span className="ca"></span><span className="cb"></span>
          </div>
          <div>
            <div className="logo-word">STEEL</div>
            <div className="logo-sub">Construções &amp; Empreendimentos</div>
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
        <div className="actions">
          <a className="da-btn-outline">Baixar caderno ↓</a>
          <a className="da-btn-red">Agendar visita →</a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="da-crumb">
        <div className="path">
          <span>Empreendimentos</span>
          <span className="sep">/</span>
          <span>Residencial · SP</span>
          <span className="sep">/</span>
          <span className="here">Edifício Aurora · N° 01</span>
        </div>
        <div className="meta">
          <span><span className="red">●</span> Em obras · 62%</span>
          <span>FICHA · AUR-001 · 2026</span>
          <span>Compartilhar ↗</span>
        </div>
      </div>

      {/* Hero */}
      <section className="da-hero">
        <div className="da-hero-head">
          <div>
            <div className="ey">Cap. 01 · Em obras <span className="num">N° 01 / 04</span></div>
            <h1>Edifício<br/><em>Aurora.</em></h1>
            <div className="sub">Pinheiros · São Paulo · 2025—2027</div>
          </div>
          <div className="right">
            <p className="lede">
              <strong>128 apartamentos</strong> de 84 a 212 m², em torre única de 24 pavimentos. Arquitetura assinada pelo escritório <strong>Dario Veloso</strong>, fachada ventilada em concreto pigmentado e steel-framing. Entrega prevista para o terceiro trimestre de 2027.
            </p>
            <div className="ctas">
              <a className="da-btn-black">Agendar visita →</a>
              <a className="da-btn-outline">Caderno comercial ↓</a>
            </div>
          </div>
        </div>

        <div className="da-hero-image">
          <div className="corner tl"><span className="dot"></span>FACHADA SUL · 24 PAV.</div>
          <div className="corner tr">RENDER 003 / 008</div>
          <div className="corner bl">ESC 1:200 — APROVADO</div>
          <div className="corner br"><span>ARQUIVO AUR-001</span><span>· STEEL 2026</span></div>
        </div>
      </section>

      {/* Spec strip */}
      <div className="da-spec">
        <div className="cell">
          <div className="k">Tipologia</div>
          <div className="v">Residencial <em>· torre única</em></div>
        </div>
        <div className="cell">
          <div className="k">Unidades</div>
          <div className="v">128 <em>aptos</em></div>
        </div>
        <div className="cell">
          <div className="k">Área privativa</div>
          <div className="v">84—212 <em>m²</em></div>
        </div>
        <div className="cell">
          <div className="k">Pavimentos</div>
          <div className="v">24 <em>andares</em></div>
        </div>
        <div className="cell">
          <div className="k">Lançamento</div>
          <div className="v">Out · <em>2025</em></div>
        </div>
        <div className="cell">
          <div className="k">Entrega prevista</div>
          <div className="v">Q3 · <em>2027</em></div>
        </div>
        <div className="cell acc">
          <div className="k">Vendido</div>
          <div className="v">38<em>%</em></div>
        </div>
      </div>

      {/* Concept */}
      <section className="da-concept">
        <div className="label">Cap. 02<br/>Conceito</div>
        <div>
          <h2>Uma torre que envelhece<br/>com a <em>cidade.</em></h2>
          <div className="body">
            <p>
              Aurora é a quarta colaboração da Steel com o escritório Dario Veloso. A premissa, desde o estudo de massa, foi recusar a mineração de fachada — o uso do edifício como anúncio. O resultado é uma torre que se entrega à rua com discrição: pano cego ao sul, varandas profundas a leste, jardim suspenso no nono pavimento.
            </p>
            <p>
              A <strong>fachada ventilada</strong> usa placas de concreto pigmentado de 4 cm produzidas em três tons de oxidação controlada. A junta é honesta — desenhada para ficar à vista. O <strong>steel-framing</strong> interno reduz a carga estrutural em 18% e libera as plantas para reformas futuras dos moradores.
            </p>
            <p>
              É um edifício pensado para os próximos quarenta anos. Não os próximos quarenta meses de campanha.
            </p>
          </div>
        </div>
        <aside className="side">
          <h4>Ficha resumida</h4>
          <div className="row"><span className="k">Arquitetura</span><span className="v">Dario <em>Veloso</em></span></div>
          <div className="row"><span className="k">Paisagismo</span><span className="v">Tereza <em>Mello</em></span></div>
          <div className="row"><span className="k">Iluminação</span><span className="v">Luz <em>Lúcida</em></span></div>
          <div className="row"><span className="k">Estrutural</span><span className="v">EPS <em>Engenharia</em></span></div>
          <div className="row"><span className="k">BIM nível</span><span className="v">LOD <em>350</em></span></div>
          <div className="row"><span className="k">CRECI-J</span><span className="v">24.318</span></div>
          <div className="row"><span className="k">Memorial</span><span className="v">v.3.2</span></div>
        </aside>
      </section>

      {/* Gallery */}
      <section className="da-gallery">
        <div className="da-gallery-head">
          <h3>Galeria <em>· renders &amp; obras</em></h3>
          <div className="controls">
            <span className="num">01</span> <span>/ 24</span>
            <span className="arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg></span>
            <span className="arrow filled"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </div>
        </div>
        <div className="da-gallery-grid">
          <div className="da-gal g1">
            <div className="ph" data-label="01 · FACHADA SUL — VISTA NOTURNA">
              <span className="num">01</span>
            </div>
            <div className="cap"><span><span className="red">FACHADA</span> · noturna</span><span>RENDER · 2026</span></div>
          </div>
          <div className="da-gal g2">
            <div className="ph" data-label="02 · LIVING TIPO 02 — 124 m²">
              <span className="num">02</span>
            </div>
            <div className="cap"><span><span className="red">INTERIOR</span> · living tipo</span><span>124 m²</span></div>
          </div>
          <div className="da-gal g3">
            <div className="ph" data-label="03 · JARDIM SUSPENSO — 9° PAV.">
              <span className="num">03</span>
            </div>
            <div className="cap"><span><span className="red">ÁREA COMUM</span> · jardim</span><span>9° pav.</span></div>
          </div>
          <div className="da-gal g4">
            <div className="ph" data-label="04 · CANTEIRO 11/2025 — ESTRUTURA L. 14">
              <span className="num">04</span>
            </div>
            <div className="cap"><span><span className="red">CANTEIRO</span> · obra</span><span>11 · 2025</span></div>
          </div>
          <div className="da-gal g5">
            <div className="ph" data-label="05 · VISTA AÉREA — SETOR PINHEIROS">
              <span className="num">05</span>
            </div>
            <div className="cap"><span><span className="red">CONTEXTO</span> · aérea</span><span>Pinheiros</span></div>
          </div>
        </div>
      </section>

      {/* Plantas */}
      <section className="da-plans">
        <div className="da-plans-head">
          <div>
            <div className="ey">Cap. 03 · Plantas</div>
            <h3>Tipologias &amp; <em>plantas.</em></h3>
          </div>
          <div></div>
          <div className="tabs">
            <button className="da-plan-tab">84 m²</button>
            <button className="da-plan-tab active">124 m²</button>
            <button className="da-plan-tab">168 m²</button>
            <button className="da-plan-tab">212 m²</button>
          </div>
        </div>

        <div className="da-plan-grid">
          <div className="da-plan-canvas">
            <div className="compass">N</div>
            {/* outer walls */}
            <div className="wall" style={{top:'18%', left:'10%', right:'10%', height:'3px'}}></div>
            <div className="wall" style={{bottom:'18%', left:'10%', right:'10%', height:'3px'}}></div>
            <div className="wall" style={{left:'10%', top:'18%', bottom:'18%', width:'3px'}}></div>
            <div className="wall" style={{right:'10%', top:'18%', bottom:'18%', width:'3px'}}></div>
            {/* internal */}
            <div className="wall" style={{top:'18%', left:'40%', height:'34%', width:'2px'}}></div>
            <div className="wall" style={{top:'40%', left:'40%', right:'10%', height:'2px'}}></div>
            <div className="wall" style={{top:'40%', left:'66%', bottom:'18%', width:'2px'}}></div>
            <div className="wall" style={{top:'58%', left:'10%', right:'40%', height:'2px'}}></div>
            <div className="red-wall" style={{top:'18%', left:'25%', height:'34%', width:'4px'}}></div>
            <div className="red-wall" style={{top:'58%', left:'25%', right:'40%', height:'4px'}}></div>
            {/* rooms */}
            <div className="room" style={{top:'18%', left:'10%', width:'15%', height:'40%'}}>Sala est. <span className="area">14 m²</span></div>
            <div className="room" style={{top:'18%', left:'25%', width:'15%', height:'40%'}}>Cozinha <span className="area">11 m²</span></div>
            <div className="room" style={{top:'18%', left:'40%', width:'26%', height:'22%'}}>Living &amp; jantar <span className="area">42 m²</span></div>
            <div className="room" style={{top:'18%', left:'66%', width:'24%', height:'22%'}}>Varanda gourmet <span className="area">18 m²</span></div>
            <div className="room" style={{top:'40%', left:'40%', width:'26%', height:'42%'}}>Suíte master <span className="area">26 m²</span></div>
            <div className="room" style={{top:'40%', left:'66%', width:'24%', height:'42%'}}>Suíte 02 <span className="area">18 m²</span></div>
            <div className="room" style={{top:'58%', left:'10%', width:'15%', height:'24%'}}>Lavabo <span className="area">3 m²</span></div>
            <div className="room" style={{top:'58%', left:'25%', width:'15%', height:'24%'}}>Serv. <span className="area">5 m²</span></div>
            <div className="scale">ESC 1:75</div>
            <div className="ph-stamp">PLT-T02 · v.3.2 · STEEL-DV</div>
          </div>

          <div className="da-plan-info">
            <div className="da-plan-title">
              <div className="k">Tipo 02 · 3 suítes</div>
              <h4>Apartamento<br/><em>tipo 124</em> m².</h4>
            </div>
            <div className="da-plan-rows">
              <div className="da-plan-row"><span className="k">Área privativa</span><span className="v">124,3 <em>m²</em></span></div>
              <div className="da-plan-row"><span className="k">Área comum</span><span className="v">38 <em>m²</em></span></div>
              <div className="da-plan-row"><span className="k">Suítes</span><span className="v">3 <em>com closet</em></span></div>
              <div className="da-plan-row"><span className="k">Vagas</span><span className="v">2 <em>+ deck moto</em></span></div>
              <div className="da-plan-row"><span className="k">Posição</span><span className="v">N / NE / SE</span></div>
              <div className="da-plan-row"><span className="k">Unidades por andar</span><span className="v">4</span></div>
            </div>
            <div className="da-plan-disp">
              <div className="k">Disponibilidade · tipo 02</div>
              <div className="bar"><span className="fill"></span></div>
              <div className="note">22 unidades restantes · 58 reservadas · 8 entregues a corretagem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="da-specs">
        <div className="da-specs-head">
          <div>
            <div className="da-concept" style={{display:'none'}}></div>
            <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.22em', color:'var(--steel-red)', textTransform:'uppercase', marginBottom:'12px', display:'flex', alignItems:'center', gap:'12px'}}>
              <span style={{width:'28px', height:'1px', background:'var(--steel-red)'}}></span>Cap. 04 · Especificações
            </div>
            <h3>Acabamentos &amp;<br/><em>materiais.</em></h3>
          </div>
          <p>
            Pedra travertino, madeira freijó, metais Riobaldo e steel-framing. Sem composições genéricas: cada fornecedor é curado e auditado pelo time de obra. Material que envelhece — não que vende foto de stand.
          </p>
        </div>
        <div className="da-specs-grid">
          <div className="da-spec-card">
            <div className="k">01 · Fachada</div>
            <h5>Concreto <em>pigmentado.</em></h5>
            <div className="swatch-row">
              <div className="swatch s1"></div>
              <div className="swatch s2"></div>
              <div className="swatch s3"></div>
            </div>
            <p>Placas de 4 cm produzidas em três tons de oxidação controlada, fixação invisível, ventilada.</p>
            <ul className="bullets">
              <li>Junta seca aparente</li>
              <li>Pano cego ao sul</li>
              <li>Espessura 40 mm</li>
            </ul>
          </div>
          <div className="da-spec-card acc">
            <div className="k">02 · Living</div>
            <h5>Travertino <em>filetado.</em></h5>
            <div className="swatch-row">
              <div className="swatch s1"></div>
              <div className="swatch s5"></div>
            </div>
            <p>Piso 60×120 cm com veios na mesma orientação; rodapé invisível em alumínio anodizado.</p>
            <ul className="bullets">
              <li>Selagem hidro-óleo</li>
              <li>Junta milimétrica</li>
              <li>Laje radiante prevista</li>
            </ul>
          </div>
          <div className="da-spec-card">
            <div className="k">03 · Suítes</div>
            <h5>Madeira <em>freijó.</em></h5>
            <div className="swatch-row">
              <div className="swatch s2"></div>
              <div className="swatch s3"></div>
            </div>
            <p>Tábua corrida de 16 cm, encaixe macho-fêmea, acabamento óleo natural fosco.</p>
            <ul className="bullets">
              <li>Origem certificada</li>
              <li>Rodapé contínuo</li>
              <li>Forro acústico opcional</li>
            </ul>
          </div>
          <div className="da-spec-card">
            <div className="k">04 · Cozinha</div>
            <h5>Aço inox <em>escovado.</em></h5>
            <div className="swatch-row">
              <div className="swatch s5"></div>
              <div className="swatch s3"></div>
              <div className="swatch s4"></div>
            </div>
            <p>Bancada inteiriça de 5 cm em aço 304 escovado, com cuba zero-line e cooktop integrado.</p>
            <ul className="bullets">
              <li>Cuba sem emenda</li>
              <li>Acionamento de pé</li>
              <li>Coifa de teto integrada</li>
            </ul>
          </div>
          <div className="da-spec-card">
            <div className="k">05 · Banhos</div>
            <h5>Mármore <em>nero.</em></h5>
            <div className="swatch-row">
              <div className="swatch s3"></div>
              <div className="swatch s5"></div>
            </div>
            <p>Pedras nero marquina nas paredes molhadas. Pisos aquecidos em quatro pontos de cada apto.</p>
            <ul className="bullets">
              <li>Espelhos backlit</li>
              <li>Metais Riobaldo</li>
              <li>Ventilação dupla</li>
            </ul>
          </div>
          <div className="da-spec-card acc">
            <div className="k">06 · Áreas comuns</div>
            <h5>Concreto <em>aparente.</em></h5>
            <div className="swatch-row">
              <div className="swatch s2"></div>
              <div className="swatch s3"></div>
            </div>
            <p>Paredes em concreto aparente liso, com pintura mineral incolor. Mobiliário curado pela Carlos Motta.</p>
            <ul className="bullets">
              <li>Pé-direito 4,2 m</li>
              <li>Iluminação Lúcida</li>
              <li>Mobiliário entregue</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="da-loc">
        <div className="da-map">
          <div className="road r1"></div>
          <div className="road r2"></div>
          <div className="road r3"></div>
          <div className="pin"></div>
          <div className="label lbl1">Av. <strong>Pedroso de Moraes</strong></div>
          <div className="label lbl2">Rua dos <strong>Pinheiros</strong></div>
          <div className="label lbl3">Parque do Povo</div>
          <div className="scale">ESC 1:8000</div>
        </div>
        <div className="da-loc-side">
          <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.22em', color:'var(--steel-red)', textTransform:'uppercase', marginBottom:'14px', display:'flex', alignItems:'center', gap:'12px'}}>
            <span style={{width:'28px', height:'1px', background:'var(--steel-red)'}}></span>Cap. 05 · Localização
          </div>
          <h3>Pinheiros, <em>setor oeste</em><br/>de São Paulo.</h3>
          <div className="addr">Rua dos Pinheiros, 1.412<br/>Pinheiros · São Paulo · SP</div>
          <ul className="nearby">
            <li><span className="ix">01</span><span className="name">Metrô Faria Lima</span><span className="dist">240 m</span></li>
            <li><span className="ix">02</span><span className="name">Parque do Povo</span><span className="dist">680 m</span></li>
            <li><span className="ix">03</span><span className="name">CIESP Faria Lima</span><span className="dist">820 m</span></li>
            <li><span className="ix">04</span><span className="name">Hospital São Luiz</span><span className="dist">1,1 km</span></li>
            <li><span className="ix">05</span><span className="name">Av. Brig. Faria Lima</span><span className="dist">220 m</span></li>
            <li><span className="ix">06</span><span className="name">Shopping Iguatemi</span><span className="dist">1,8 km</span></li>
          </ul>
        </div>
      </section>

      {/* Sales */}
      <section className="da-sales">
        <div>
          <div className="ey">Cap. 06 · Comercial</div>
          <h2>Agende uma visita<br/>ao <em>stand de obra.</em></h2>
          <div className="price">
            <span>A partir de</span>
            <span className="v">R$ 4,8 <em>milhões</em></span>
          </div>
        </div>
        <div className="da-sales-card">
          <h4>Reservar <em>visita técnica.</em></h4>
          <p>Visitas guiadas pelo engenheiro responsável, todas as terças e quintas, das 10h às 16h.</p>
          <div className="field">
            <span className="k">Nome completo</span>
            <span className="ph">como devemos chamar você</span>
          </div>
          <div className="field">
            <span className="k">Telefone &amp; e-mail</span>
            <span className="ph">+55 11 0 0000 0000</span>
          </div>
          <div className="field">
            <span className="k">Data preferida</span>
            <span className="v">Próx. terça · 14h00</span>
          </div>
          <button>Agendar visita →</button>
        </div>
      </section>

      {/* Outros */}
      <section className="da-others">
        <div className="da-others-head">
          <h3>Outros <em>empreendimentos</em> Steel.</h3>
          <a className="da-btn-outline">Ver todos →</a>
        </div>
        <div className="da-others-grid">
          <div className="da-other">
            <div className="ph">
              <div className="stat k"><span className="dot"></span>Lançamento</div>
            </div>
            <div className="info">
              <div className="meta">N° 02 <span className="red">/</span> Corporativo <span className="red">/</span> BH</div>
              <h4>Steel Pier <em>Office</em></h4>
            </div>
          </div>
          <div className="da-other">
            <div className="ph">
              <div className="stat l"><span className="dot"></span>Pronto pra morar</div>
            </div>
            <div className="info">
              <div className="meta">N° 03 <span className="red">/</span> Casas <span className="red">/</span> Brasília</div>
              <h4>Vivienda <em>Margens</em></h4>
            </div>
          </div>
          <div className="da-other">
            <div className="ph">
              <div className="stat"><span className="dot"></span>Pré-lançamento</div>
            </div>
            <div className="info">
              <div className="meta">N° 04 <span className="red">/</span> Lofts <span className="red">/</span> SP</div>
              <h4>Fábrica <em>Plaza</em></h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="da-foot">
        <div className="da-foot-top">
          <div>
            <div className="brand-word">STEEL</div>
            <div className="brand-sub">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="brand-q">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="da-foot-col">
            <h4>Empreendimentos</h4>
            <ul>
              <li>Edifício Aurora</li>
              <li>Steel Pier Office</li>
              <li>Vivienda Margens</li>
              <li>Fábrica Plaza</li>
              <li>Ver todos</li>
            </ul>
          </div>
          <div className="da-foot-col">
            <h4>Steel</h4>
            <ul>
              <li>A Steel</li>
              <li>Processo</li>
              <li>Imprensa</li>
              <li>Investidores</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div className="da-foot-col">
            <h4>Contato Aurora</h4>
            <ul>
              <li>+55 11 4002 8922</li>
              <li>aurora@steelconstrucoes.com.br</li>
              <li>R. dos Pinheiros, 1.412<br/>Pinheiros · São Paulo</li>
            </ul>
          </div>
        </div>
        <div className="da-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.EmpDetailA = EmpDetailA;

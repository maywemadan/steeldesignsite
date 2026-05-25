/* global React */

// ─── Empreendimento · Detalhe · Variação B "Aço Editorial" ──────────
// Aço empurrado para o lado galeria/monografia: hero escuro full-bleed,
// fotografia maior, tipografia editorial em itálicos longos, vermelho
// como acento pontual. Mantém grid estrutural e fichas técnicas.
// Width: 1440. Scoped to .stl-db.

const EmpDetailBCSS = `
.stl-db {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.6;
  width: 100%;
}
.stl-db .ff { font-family: 'DM Serif Display', serif; }

/* ── Nav (dark) ── */
.db-nav {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 18px 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 48px;
  align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.db-nav .logo { display: flex; align-items: center; gap: 14px; }
.db-mark {
  width: 40px; height: 40px;
  background: var(--steel-red);
  position: relative;
}
.db-mark::before {
  content: ''; position: absolute;
  left: 14%; right: 14%; top: 46%; height: 7%;
  background: var(--steel-cream);
  transform: rotate(-45deg);
}
.db-mark .ca { position: absolute; top: 16%; right: 16%; width: 28%; height: 28%; background: var(--steel-cream); }
.db-mark .cb { position: absolute; bottom: 14%; left: 14%; width: 22%; height: 22%; background: var(--steel-cream); }
.db-nav .lw {
  font-family: 'Anton', sans-serif;
  font-size: 24px; letter-spacing: 0.02em; line-height: 1;
  color: var(--steel-cream);
}
.db-nav .ls {
  font-size: 9px; letter-spacing: 0.22em; color: var(--steel-red-lt);
  text-transform: uppercase; margin-top: 4px;
}
.db-nav ul { display: flex; gap: 26px; justify-self: center; }
.db-nav ul a {
  font-size: 13px; font-weight: 500;
  color: rgba(241,235,224,0.7);
  padding: 8px 4px;
  border-bottom: 2px solid transparent;
}
.db-nav ul a.active { color: var(--steel-cream); border-bottom-color: var(--steel-red); }
.db-nav .act { display: flex; gap: 12px; align-items: center; }
.db-nav .act .ph {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; color: rgba(241,235,224,0.7);
  letter-spacing: 0.04em;
}
.db-btn-red {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 12px 22px; font-size: 11.5px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.db-btn-ghost {
  background: transparent; color: var(--steel-cream);
  border: 1px solid rgba(241,235,224,0.3);
  padding: 11px 20px; font-size: 11.5px; font-weight: 600;
  letter-spacing: 0.16em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}

/* ── Hero · full bleed ── */
.db-hero {
  position: relative;
  height: 920px;
  background: linear-gradient(165deg, #2a2622 0%, #0f0e0d 100%);
  overflow: hidden;
  color: var(--steel-cream);
}
.db-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 70% 20%, rgba(142,27,34,0.20), transparent 50%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.db-hero::after {
  content: 'IMAGEM · FACHADA SUL · EDIFÍCIO AURORA · PINHEIROS SP · 2026';
  position: absolute; left: 50%; top: 38%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.32em;
  color: rgba(241,235,224,0.15);
}
.db-hero-inner {
  position: relative; z-index: 2;
  padding: 56px 48px 48px;
  height: 100%;
  display: flex; flex-direction: column;
  justify-content: space-between;
}
.db-hero-top {
  display: flex; justify-content: space-between; align-items: flex-start;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(241,235,224,0.55);
}
.db-hero-top .l { display: flex; gap: 28px; align-items: center; }
.db-hero-top .l .red { color: var(--steel-red-lt); display: flex; align-items: center; gap: 8px; }
.db-hero-top .l .red .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; box-shadow: 0 0 0 5px rgba(142,27,34,0.18); }
.db-hero-top .r { display: flex; gap: 28px; }

.db-hero-middle {
  text-align: left;
  flex: 1;
  display: flex; flex-direction: column; justify-content: center;
  margin: 24px 0;
}
.db-hero-middle .ey {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--steel-red-lt);
  margin-bottom: 8px;
}
.db-hero-middle h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 224px;
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: var(--steel-cream);
}
.db-hero-middle h1 em { font-style: italic; color: var(--steel-red-lt); }
.db-hero-middle .where {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 32px;
  color: rgba(241,235,224,0.7);
  margin-top: 32px;
  display: flex; align-items: center; gap: 24px;
}
.db-hero-middle .where::before {
  content: ''; width: 80px; height: 1px;
  background: var(--steel-red);
}

.db-hero-bottom {
  display: grid;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 56px;
  align-items: end;
}
.db-hero-bottom .lede {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.45;
  color: rgba(241,235,224,0.82);
  max-width: 560px;
}
.db-hero-bottom .lede em { color: var(--steel-red-lt); }
.db-hero-bottom .specs-mini {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 28px;
}
.db-hero-bottom .specs-mini .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
  margin-bottom: 6px;
}
.db-hero-bottom .specs-mini .v {
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  color: var(--steel-cream);
  letter-spacing: -0.012em;
}
.db-hero-bottom .specs-mini .v em { font-style: italic; color: var(--steel-red-lt); font-size: 17px; }
.db-hero-bottom .ctas { display: flex; flex-direction: column; gap: 12px; }

/* ── Index strip ── */
.db-index {
  background: var(--steel-coal);
  color: var(--steel-cream);
  padding: 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.db-index .here { color: var(--steel-red-lt); }
.db-index .sep { color: rgba(241,235,224,0.3); margin: 0 14px; }
.db-index .right { display: flex; gap: 22px; color: rgba(241,235,224,0.5); }
.db-index .right a { color: rgba(241,235,224,0.85); border-bottom: 1px solid rgba(241,235,224,0.3); padding-bottom: 1px; }

/* ── Editorial: pull quote + numbers ── */
.db-quote {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.db-quote .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 24px;
  display: flex; align-items: center; gap: 12px;
}
.db-quote .label::before { content: ''; width: 32px; height: 1px; background: var(--steel-red); }
.db-quote h2 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 62px;
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: var(--steel-black);
}
.db-quote h2 em { color: var(--steel-red); font-style: italic; }
.db-quote h2::before {
  content: '"';
  font-family: 'DM Serif Display', serif;
  font-size: 140px;
  font-style: normal;
  color: var(--steel-red);
  display: block;
  line-height: 0.4;
  margin-bottom: 18px;
}
.db-quote .attr {
  margin-top: 32px;
  display: flex; align-items: center; gap: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.db-quote .attr::before {
  content: ''; width: 32px; height: 1px; background: var(--steel-red);
}
.db-quote .right {
  border-left: 1px solid var(--steel-border);
  padding-left: 48px;
}
.db-quote .right .body p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--steel-graphite);
  margin-bottom: 16px;
  max-width: 480px;
}
.db-quote .right .body p strong { color: var(--steel-ink); font-weight: 600; }
.db-quote .right .body p em { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--steel-red); }

/* ── Photo essay: full-bleed image + side caption ── */
.db-essay {
  background: var(--steel-cream);
  padding: 96px 48px 0;
}
.db-essay-head {
  display: grid; grid-template-columns: auto 1fr auto;
  align-items: end; gap: 32px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.db-essay-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
}
.db-essay-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.db-essay-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 58px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.db-essay-head h3 em { font-style: italic; color: var(--steel-red); }
.db-essay-head .credit {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  text-align: right;
  max-width: 200px;
  line-height: 1.6;
}
.db-essay-head .credit .red { color: var(--steel-red); }
.db-essay-figure {
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(170deg, #4a3a30 0%, #0f0e0d 100%);
  overflow: hidden;
}
.db-essay-figure::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(142,27,34,0.10), transparent 55%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.db-essay-figure::after {
  content: 'IMAGEM · 02 · LIVING TIPO 124 — VARANDA INTEGRADA';
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.32em;
  color: rgba(241,235,224,0.18);
}
.db-essay-cap {
  display: grid; grid-template-columns: auto 1fr auto;
  align-items: baseline; gap: 32px;
  padding: 24px 0 0;
  border-bottom: 1px solid var(--steel-border);
  padding-bottom: 32px;
}
.db-essay-cap .num {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 64px;
  line-height: 0.8;
  color: var(--steel-red);
}
.db-essay-cap h4 {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 32px;
  color: var(--steel-black);
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}
.db-essay-cap p {
  font-size: 14px;
  color: var(--steel-graphite);
  line-height: 1.6;
  max-width: 460px;
}
.db-essay-cap .ref {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  text-align: right;
  line-height: 1.7;
}

/* ── Triptych grid ── */
.db-tri {
  background: var(--steel-cream);
  padding: 64px 48px 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
.db-tri .frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/5.4;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
}
.db-tri .frame:nth-child(2) { background: linear-gradient(170deg, #5a4a3a, #14130f); aspect-ratio: 4/5.4; transform: translateY(48px); }
.db-tri .frame:nth-child(3) { background: linear-gradient(160deg, #38332c, #0f0e0d); }
.db-tri .frame::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 70px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 70px);
}
.db-tri .frame .ph-stamp {
  position: absolute; bottom: 20px; left: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
.db-tri .frame .ph-no {
  position: absolute; top: 18px; left: 22px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 32px;
  color: rgba(241,235,224,0.55);
}
.db-tri .frame .ph-cap {
  position: absolute; bottom: 20px; right: 20px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 17px;
  color: var(--steel-cream);
  text-align: right;
  max-width: 200px;
  line-height: 1.2;
}

/* ── Plantas dark ── */
.db-plans {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 96px 48px;
}
.db-plans-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: end;
  padding-bottom: 36px; margin-bottom: 48px;
  border-bottom: 1px solid rgba(241,235,224,0.15);
}
.db-plans-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.db-plans-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.db-plans-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-cream);
}
.db-plans-head h3 em { font-style: italic; color: var(--steel-red-lt); }
.db-plans-head .tabs { display: flex; gap: 6px; align-items: flex-end; }
.db-plans-head .tabs button {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid rgba(241,235,224,0.3);
  color: rgba(241,235,224,0.7);
  background: transparent;
}
.db-plans-head .tabs button.active { background: var(--steel-red); color: var(--steel-cream); border-color: var(--steel-red); }

.db-plan-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
}
.db-plan-canvas-dark {
  background: var(--steel-coal);
  border: 1px solid rgba(241,235,224,0.18);
  aspect-ratio: 16/11.5;
  position: relative;
  overflow: hidden;
}
.db-plan-canvas-dark::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(rgba(241,235,224,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(241,235,224,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
.db-plan-canvas-dark .wall { position: absolute; background: rgba(241,235,224,0.55); }
.db-plan-canvas-dark .room {
  position: absolute;
  border: 1px solid rgba(241,235,224,0.18);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
  display: flex; align-items: end;
  padding: 8px 10px;
}
.db-plan-canvas-dark .room .area {
  margin-left: auto;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 12px;
  color: var(--steel-cream);
  text-transform: none;
}
.db-plan-canvas-dark .red-wall { position: absolute; background: var(--steel-red); }
.db-plan-canvas-dark .compass {
  position: absolute; top: 22px; right: 22px;
  width: 40px; height: 40px;
  border: 1px solid rgba(241,235,224,0.3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 16px;
  color: var(--steel-red-lt);
}
.db-plan-canvas-dark .scale {
  position: absolute; bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.45);
  display: flex; align-items: center; gap: 10px;
}
.db-plan-canvas-dark .scale::after {
  content: ''; width: 60px; height: 1px; background: rgba(241,235,224,0.45);
}
.db-plan-canvas-dark .stamp {
  position: absolute; bottom: 20px; right: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.35);
}

.db-plan-info-dark {
  background: var(--steel-coal);
  border: 1px solid rgba(241,235,224,0.18);
  display: flex; flex-direction: column;
}
.db-plan-info-dark .title {
  padding: 26px 28px;
  border-bottom: 1px solid rgba(241,235,224,0.15);
}
.db-plan-info-dark .title .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.db-plan-info-dark .title h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 36px;
  line-height: 1.05;
  letter-spacing: -0.018em;
  color: var(--steel-cream);
}
.db-plan-info-dark .title h4 em { font-style: italic; color: var(--steel-red-lt); }
.db-plan-info-dark .rows { padding: 8px 28px 16px; }
.db-plan-info-dark .row {
  display: grid; grid-template-columns: 1fr auto;
  padding: 14px 0;
  border-bottom: 1px solid rgba(241,235,224,0.1);
}
.db-plan-info-dark .row:last-child { border-bottom: none; }
.db-plan-info-dark .row .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
}
.db-plan-info-dark .row .v {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: var(--steel-cream);
}
.db-plan-info-dark .row .v em { font-style: italic; color: var(--steel-red-lt); }
.db-plan-info-dark .disp {
  padding: 22px 28px;
  background: rgba(241,235,224,0.04);
  border-top: 1px solid rgba(241,235,224,0.12);
  margin-top: auto;
}
.db-plan-info-dark .disp .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  margin-bottom: 12px;
}
.db-plan-info-dark .disp .bar {
  height: 8px; background: rgba(241,235,224,0.1);
}
.db-plan-info-dark .disp .bar .fill {
  height: 100%; width: 38%; background: var(--steel-red);
  display: block;
}
.db-plan-info-dark .disp .note {
  margin-top: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  color: rgba(241,235,224,0.55);
}

/* ── Materials editorial ── */
.db-mat {
  background: var(--steel-cream);
  padding: 96px 48px;
}
.db-mat-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 56px; align-items: end;
  padding-bottom: 32px; margin-bottom: 0;
  border-bottom: 2px solid var(--steel-ink);
}
.db-mat-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.db-mat-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.db-mat-head h3 {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.db-mat-head h3 em { color: var(--steel-red); }
.db-mat-head p {
  font-size: 15.5px;
  line-height: 1.75;
  color: var(--steel-graphite);
  max-width: 500px;
}
.db-mat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.db-mat-card {
  border-right: 1px solid var(--steel-border);
  background: var(--steel-cream);
  display: flex; flex-direction: column;
}
.db-mat-card:last-child { border-right: none; }
.db-mat-card .ph {
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
}
.db-mat-card.travertino .ph { background: linear-gradient(160deg, #d9ccae 0%, #a89878 100%); }
.db-mat-card.freijo .ph { background: linear-gradient(160deg, #6a4a30 0%, #2a1a10 100%); }
.db-mat-card.inox .ph { background: linear-gradient(160deg, #c0c0c0 0%, #707070 100%); }
.db-mat-card.nero .ph { background: linear-gradient(160deg, #2a2622 0%, #0a0908 100%); }
.db-mat-card .ph::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(60deg, transparent 0 8px, rgba(255,255,255,0.06) 8px 9px),
    repeating-linear-gradient(120deg, transparent 0 12px, rgba(0,0,0,0.04) 12px 13px);
}
.db-mat-card .ph .lb {
  position: absolute; top: 18px; left: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}
.db-mat-card.travertino .ph .lb { color: rgba(60,40,20,0.65); }
.db-mat-card.inox .ph .lb { color: rgba(60,60,60,0.7); }
.db-mat-card .ph .no {
  position: absolute; bottom: 18px; right: 22px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 26px;
  color: rgba(255,255,255,0.5);
}
.db-mat-card.travertino .ph .no { color: rgba(60,40,20,0.55); }
.db-mat-card.inox .ph .no { color: rgba(40,40,40,0.55); }
.db-mat-card .info { padding: 28px 26px; flex: 1; display: flex; flex-direction: column; }
.db-mat-card .info .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--steel-red);
  margin-bottom: 14px;
}
.db-mat-card .info h5 {
  font-family: 'DM Serif Display', serif;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.012em;
  color: var(--steel-black);
  margin-bottom: 14px;
}
.db-mat-card .info h5 em { font-style: italic; color: var(--steel-red); }
.db-mat-card .info p {
  font-size: 13px;
  line-height: 1.7;
  color: var(--steel-graphite);
  margin-bottom: auto;
}
.db-mat-card .info .src {
  margin-top: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-stone);
  padding-top: 14px;
  border-top: 1px solid var(--steel-border);
}
.db-mat-card .info .src .red { color: var(--steel-red); }

/* ── Localização editorial ── */
.db-loc {
  background: var(--steel-coal);
  color: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
}
.db-map-dark {
  position: relative;
  aspect-ratio: 4/3;
  background: var(--steel-black);
  border: 1px solid rgba(241,235,224,0.15);
  overflow: hidden;
}
.db-map-dark::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(rgba(241,235,224,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(241,235,224,0.04) 1px, transparent 1px),
    linear-gradient(rgba(241,235,224,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(241,235,224,0.08) 1px, transparent 1px);
  background-size: 24px 24px, 24px 24px, 240px 240px, 240px 240px;
}
.db-map-dark .road { position: absolute; background: rgba(241,235,224,0.12); }
.db-map-dark .road.r1 { top: 30%; left: 0; right: 0; height: 14px; }
.db-map-dark .road.r2 { top: 0; bottom: 0; left: 42%; width: 10px; }
.db-map-dark .road.r3 { top: 65%; left: 18%; right: 0; height: 8px; transform: rotate(-6deg); transform-origin: left; }
.db-map-dark .pin {
  position: absolute; top: 30%; left: 42%;
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--steel-red);
  box-shadow: 0 0 0 8px rgba(142,27,34,0.28);
  transform: translate(-50%, -50%); z-index: 3;
}
.db-map-dark .label {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.7);
}
.db-map-dark .label.lbl1 { top: 22%; left: 47%; }
.db-map-dark .label.lbl2 { top: 68%; left: 30%; }
.db-map-dark .label.lbl3 { top: 12%; right: 22%; }
.db-map-dark .scale {
  position: absolute; bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.5);
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.db-map-dark .scale::after {
  content: ''; width: 56px; height: 1px; background: rgba(241,235,224,0.5);
}

.db-loc-side .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.db-loc-side .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.db-loc-side h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  line-height: 1.02;
  letter-spacing: -0.022em;
  color: var(--steel-cream);
}
.db-loc-side h3 em { font-style: italic; color: var(--steel-red-lt); }
.db-loc-side .addr {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  color: rgba(241,235,224,0.7);
  margin: 24px 0 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(241,235,224,0.15);
}
.db-loc-side ul { display: flex; flex-direction: column; }
.db-loc-side ul li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(241,235,224,0.12);
  align-items: baseline;
}
.db-loc-side ul li:last-child { border-bottom: none; }
.db-loc-side .ix {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--steel-red-lt);
}
.db-loc-side .name {
  font-family: 'DM Serif Display', serif;
  font-size: 16px;
  color: var(--steel-cream);
}
.db-loc-side .dist {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(241,235,224,0.55);
  letter-spacing: 0.06em;
}

/* ── Sales · split editorial ── */
.db-sales {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
}
.db-sales-left {
  position: relative;
  aspect-ratio: 4/3.4;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  overflow: hidden;
}
.db-sales-left::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 80% 20%, rgba(142,27,34,0.18), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
}
.db-sales-left .ph-lb {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
.db-sales-left .ph-lb.tl { top: 22px; left: 22px; }
.db-sales-left .ph-lb.br { bottom: 22px; right: 22px; }
.db-sales-left h2 {
  position: absolute;
  bottom: 60px; left: 36px; right: 36px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 80px;
  line-height: 0.96;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
}
.db-sales-left h2 em { color: var(--steel-red-lt); }
.db-sales-left .ey {
  position: absolute;
  top: 22px; right: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  display: flex; align-items: center; gap: 12px;
}
.db-sales-left .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }

.db-sales-card {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 36px 32px;
  display: flex; flex-direction: column;
  gap: 20px;
}
.db-sales-card h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 30px;
  line-height: 1.08;
  letter-spacing: -0.012em;
}
.db-sales-card h4 em { font-style: italic; color: var(--steel-red-lt); }
.db-sales-card p {
  font-size: 13.5px;
  color: rgba(241,235,224,0.65);
  line-height: 1.65;
}
.db-sales-card .price {
  padding: 18px 0;
  border-top: 1px solid rgba(241,235,224,0.15);
  border-bottom: 1px solid rgba(241,235,224,0.15);
  display: flex; flex-direction: column; gap: 4px;
}
.db-sales-card .price .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
}
.db-sales-card .price .v {
  font-family: 'DM Serif Display', serif;
  font-size: 40px;
  letter-spacing: -0.015em;
}
.db-sales-card .price .v em { font-style: italic; color: var(--steel-red-lt); font-size: 22px; }
.db-sales-card .field {
  display: flex; flex-direction: column; gap: 6px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(241,235,224,0.12);
}
.db-sales-card .field .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(241,235,224,0.5);
  text-transform: uppercase;
}
.db-sales-card .field .ph {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 17px;
  color: rgba(241,235,224,0.45);
}
.db-sales-card button {
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 12px;
  width: 100%;
  display: block;
}

/* ── Outros: row editorial ── */
.db-others {
  background: var(--steel-cream);
  padding: 96px 48px;
  border-top: 1px solid var(--steel-border);
}
.db-others-head {
  display: flex; justify-content: space-between; align-items: end;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.db-others-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.db-others-head h3 em { font-style: italic; color: var(--steel-red); }
.db-others-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.db-other {
  position: relative; overflow: hidden;
}
.db-other .ph {
  aspect-ratio: 4/5;
  background: linear-gradient(165deg, #4a423a 0%, #1a1815 100%);
  position: relative;
  overflow: hidden;
}
.db-other:nth-child(2) .ph { background: linear-gradient(155deg, #58504a, #1a1815); }
.db-other:nth-child(3) .ph { background: linear-gradient(170deg, #6a5e50, #2a2418); }
.db-other .ph::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 60px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 60px);
}
.db-other .ph .stat {
  position: absolute; top: 20px; left: 20px;
  background: rgba(15,14,13,0.55);
  border: 1px solid rgba(241,235,224,0.18);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 7px 12px;
  color: rgba(241,235,224,0.85);
  display: flex; align-items: center; gap: 8px;
  border-radius: 100px;
}
.db-other .ph .stat .dot { width: 6px; height: 6px; background: var(--steel-red); border-radius: 50%; }
.db-other .ph .info {
  position: absolute; inset: auto 0 0 0;
  padding: 24px 22px;
  background: linear-gradient(to top, rgba(15,14,13,0.92), rgba(15,14,13,0.4) 60%, transparent);
}
.db-other .ph .info .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.65);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.db-other .ph .info .meta .red { color: var(--steel-red-lt); }
.db-other .ph .info h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  color: var(--steel-cream);
  letter-spacing: -0.015em;
  line-height: 1.05;
}
.db-other .ph .info h4 em { font-style: italic; color: var(--steel-red-lt); }

/* ── Footer dark ── */
.db-foot {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 64px 48px 24px;
}
.db-foot-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(241,235,224,0.12);
}
.db-foot .bw {
  font-family: 'Anton', sans-serif;
  font-size: 56px;
  line-height: 0.95;
  letter-spacing: 0.02em;
  color: var(--steel-cream);
}
.db-foot .bs {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 24px;
}
.db-foot .bq {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  color: rgba(241,235,224,0.7);
  max-width: 360px;
  line-height: 1.4;
}
.db-foot .col h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 22px;
}
.db-foot .col li {
  font-size: 13.5px;
  color: rgba(241,235,224,0.7);
  margin-bottom: 10px;
}
.db-foot-bottom {
  padding-top: 24px;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
`;

function EmpDetailB() {
  return (
    <div className="steel stl-db">
      <style>{EmpDetailBCSS}</style>

      {/* Nav */}
      <nav className="db-nav">
        <div className="logo">
          <div className="db-mark"><span className="ca"></span><span className="cb"></span></div>
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
          <span className="ph">+55 11 4002 8922</span>
          <a className="db-btn-ghost">Caderno ↓</a>
          <a className="db-btn-red">Agendar visita →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="db-hero">
        <div className="db-hero-inner">
          <div className="db-hero-top">
            <div className="l">
              <span className="red"><span className="dot"></span>Em obras · 62%</span>
              <span>Edição 26 · Portfólio em curso</span>
              <span>Ficha · AUR-001</span>
            </div>
            <div className="r">
              <span>Empreendimento N° 01 / 04</span>
              <span>SP · 2025—2027</span>
              <span>STEEL-DV · v.3.2</span>
            </div>
          </div>

          <div className="db-hero-middle">
            <div className="ey">"o silêncio é um material —"</div>
            <h1>Edifício<br/><em>Aurora.</em></h1>
            <div className="where">Pinheiros · São Paulo · 2027</div>
          </div>

          <div className="db-hero-bottom">
            <p className="lede">
              128 apartamentos de 84 a 212 m² em torre única de 24 pavimentos. Arquitetura assinada por <em>Dario Veloso</em>, fachada ventilada em concreto pigmentado, steel-framing interno. Uma torre pensada para os próximos quarenta anos.
            </p>
            <div className="specs-mini">
              <div><div className="k">Unidades</div><div className="v">128 <em>aptos</em></div></div>
              <div><div className="k">Tipologia</div><div className="v">84—212 <em>m²</em></div></div>
              <div><div className="k">Pavimentos</div><div className="v">24 <em>andares</em></div></div>
              <div><div className="k">Entrega</div><div className="v">Q3 <em>2027</em></div></div>
            </div>
            <div className="ctas">
              <a className="db-btn-red">Agendar visita →</a>
              <a className="db-btn-ghost">Caderno comercial ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* Index strip */}
      <div className="db-index">
        <div>
          <span>Empreendimentos</span><span className="sep">/</span>
          <span>Residencial · SP</span><span className="sep">/</span>
          <span className="here">Edifício Aurora · N° 01</span>
        </div>
        <div className="right">
          <a>Conceito</a>
          <a>Plantas</a>
          <a>Materiais</a>
          <a>Localização</a>
          <a>Comercial</a>
          <span>· Compartilhar ↗</span>
        </div>
      </div>

      {/* Quote / concept */}
      <section className="db-quote">
        <div>
          <div className="label">Cap. 02 · Conceito</div>
          <h2>
            uma torre que se entrega à rua com <em>discrição</em> — e às décadas, com <em>tranquilidade.</em>
          </h2>
          <div className="attr">Dario Veloso · Arquiteto responsável · 2024</div>
        </div>
        <div className="right">
          <div className="body">
            <p>
              Aurora é a quarta colaboração entre Steel e o escritório <em>Dario Veloso</em>. Desde o estudo de massa a premissa foi recusar a mineração de fachada — o uso do edifício como anúncio. O resultado é uma torre que se apresenta de forma sóbria: pano cego ao sul, varandas profundas a leste, jardim suspenso no nono pavimento.
            </p>
            <p>
              A <strong>fachada ventilada</strong> usa placas de concreto pigmentado de 4 cm produzidas em três tons de oxidação controlada. A junta é honesta — desenhada para ficar à vista. O <strong>steel-framing</strong> interno reduz em 18% a carga estrutural e libera as plantas para reformas futuras dos moradores.
            </p>
            <p>
              É um edifício pensado para os próximos <em>quarenta anos</em> — não para os quarenta meses de campanha.
            </p>
          </div>
        </div>
      </section>

      {/* Photo essay */}
      <section className="db-essay">
        <div className="db-essay-head">
          <div>
            <div className="ey">Cap. 03 · Ensaio fotográfico</div>
          </div>
          <h3>O <em>living</em> tipo<br/>de Aurora.</h3>
          <div className="credit">
            Foto · <span className="red">M. Belmonte</span><br/>
            Stylist · L. Suaid<br/>
            Render · STEEL-DV
          </div>
        </div>

        <div className="db-essay-figure"></div>

        <div className="db-essay-cap">
          <div className="num">02</div>
          <div>
            <h4>"a varanda devolve a sala<br/>para o quarteirão."</h4>
            <p>A área social do tipo 02 mede 42 m² e se abre para uma varanda de 18 m². As esquadrias de piso a teto recuam 240 cm — quando abertas, o limite entre dentro e fora desaparece.</p>
          </div>
          <div className="ref">
            FOTO 02 / 24<br/>
            LIVING TIPO 124<br/>
            <br/>
            EXP. 1/60 · f/2.8<br/>
            ISO 200 · 35 mm
          </div>
        </div>
      </section>

      <section className="db-tri">
        <div className="frame">
          <span className="ph-no">03</span>
          <span className="ph-stamp">FOTO 03 · COZINHA</span>
          <span className="ph-cap">cozinha integrada<br/>com bancada inox</span>
        </div>
        <div className="frame">
          <span className="ph-no">04</span>
          <span className="ph-stamp">FOTO 04 · SUÍTE</span>
          <span className="ph-cap">suíte master,<br/>tipo 124 m²</span>
        </div>
        <div className="frame">
          <span className="ph-no">05</span>
          <span className="ph-stamp">FOTO 05 · JARDIM 9°</span>
          <span className="ph-cap">jardim suspenso<br/>no 9° pavimento</span>
        </div>
      </section>

      {/* Plantas dark */}
      <section className="db-plans">
        <div className="db-plans-head">
          <div>
            <div className="ey">Cap. 04 · Plantas</div>
            <h3>Quatro <em>tipologias.</em><br/>Uma cadência.</h3>
          </div>
          <div className="tabs">
            <button>84 m²</button>
            <button className="active">124 m²</button>
            <button>168 m²</button>
            <button>212 m²</button>
          </div>
        </div>

        <div className="db-plan-grid">
          <div className="db-plan-canvas-dark">
            <div className="compass">N</div>
            <div className="wall" style={{top:'18%', left:'10%', right:'10%', height:'3px'}}></div>
            <div className="wall" style={{bottom:'18%', left:'10%', right:'10%', height:'3px'}}></div>
            <div className="wall" style={{left:'10%', top:'18%', bottom:'18%', width:'3px'}}></div>
            <div className="wall" style={{right:'10%', top:'18%', bottom:'18%', width:'3px'}}></div>
            <div className="wall" style={{top:'18%', left:'40%', height:'34%', width:'2px'}}></div>
            <div className="wall" style={{top:'40%', left:'40%', right:'10%', height:'2px'}}></div>
            <div className="wall" style={{top:'40%', left:'66%', bottom:'18%', width:'2px'}}></div>
            <div className="wall" style={{top:'58%', left:'10%', right:'40%', height:'2px'}}></div>
            <div className="red-wall" style={{top:'18%', left:'25%', height:'34%', width:'4px'}}></div>
            <div className="red-wall" style={{top:'58%', left:'25%', right:'40%', height:'4px'}}></div>
            <div className="room" style={{top:'18%', left:'10%', width:'15%', height:'40%'}}>Sala est. <span className="area">14 m²</span></div>
            <div className="room" style={{top:'18%', left:'25%', width:'15%', height:'40%'}}>Cozinha <span className="area">11 m²</span></div>
            <div className="room" style={{top:'18%', left:'40%', width:'26%', height:'22%'}}>Living &amp; jantar <span className="area">42 m²</span></div>
            <div className="room" style={{top:'18%', left:'66%', width:'24%', height:'22%'}}>Varanda gourmet <span className="area">18 m²</span></div>
            <div className="room" style={{top:'40%', left:'40%', width:'26%', height:'42%'}}>Suíte master <span className="area">26 m²</span></div>
            <div className="room" style={{top:'40%', left:'66%', width:'24%', height:'42%'}}>Suíte 02 <span className="area">18 m²</span></div>
            <div className="room" style={{top:'58%', left:'10%', width:'15%', height:'24%'}}>Lavabo <span className="area">3 m²</span></div>
            <div className="room" style={{top:'58%', left:'25%', width:'15%', height:'24%'}}>Serv. <span className="area">5 m²</span></div>
            <div className="scale">ESC 1:75</div>
            <div className="stamp">PLT-T02 · v.3.2</div>
          </div>

          <div className="db-plan-info-dark">
            <div className="title">
              <div className="k">Tipo 02 · 3 suítes</div>
              <h4>Apartamento<br/><em>tipo 124</em> m².</h4>
            </div>
            <div className="rows">
              <div className="row"><span className="k">Privativa</span><span className="v">124,3 <em>m²</em></span></div>
              <div className="row"><span className="k">Comum</span><span className="v">38 <em>m²</em></span></div>
              <div className="row"><span className="k">Suítes</span><span className="v">3 <em>c/ closet</em></span></div>
              <div className="row"><span className="k">Vagas</span><span className="v">2 <em>+ moto</em></span></div>
              <div className="row"><span className="k">Posição</span><span className="v">N / NE / SE</span></div>
              <div className="row"><span className="k">Aptos/andar</span><span className="v">4</span></div>
            </div>
            <div className="disp">
              <div className="k">Disponibilidade · tipo 02</div>
              <div className="bar"><span className="fill"></span></div>
              <div className="note">22 restantes · 58 reservadas · 8 corretagem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials editorial */}
      <section className="db-mat">
        <div className="db-mat-head">
          <div>
            <div className="ey">Cap. 05 · Materiais</div>
            <h3>Pedra, madeira,<br/>aço, <em>concreto.</em></h3>
          </div>
          <p>
            Sem composições genéricas: cada fornecedor é curado e auditado pelo time de obra. Material que envelhece — não que vende foto de stand. Origem rastreada, junta milimétrica, manutenção planejada.
          </p>
        </div>

        <div className="db-mat-grid">
          <div className="db-mat-card travertino">
            <div className="ph">
              <span className="lb">TRAVERTINO ROMANO</span>
              <span className="no">01</span>
            </div>
            <div className="info">
              <div className="k">Living · 60×120 cm</div>
              <h5>Travertino<br/><em>filetado.</em></h5>
              <p>Piso com veios na mesma orientação, rodapé invisível em alumínio anodizado, selagem hidro-óleo.</p>
              <div className="src">Origem: <span className="red">Tivoli, IT</span> · Lote 240</div>
            </div>
          </div>
          <div className="db-mat-card freijo">
            <div className="ph">
              <span className="lb">FREIJÓ AMAZÔNICO</span>
              <span className="no">02</span>
            </div>
            <div className="info">
              <div className="k">Suítes · tábua 16 cm</div>
              <h5>Madeira<br/><em>freijó.</em></h5>
              <p>Tábua corrida com encaixe macho-fêmea, acabamento óleo natural fosco. Origem certificada.</p>
              <div className="src">Origem: <span className="red">FSC Mato Grosso</span></div>
            </div>
          </div>
          <div className="db-mat-card inox">
            <div className="ph">
              <span className="lb">AISI 304 ESCOVADO</span>
              <span className="no">03</span>
            </div>
            <div className="info">
              <div className="k">Cozinha · bancada 5 cm</div>
              <h5>Aço inox<br/><em>escovado.</em></h5>
              <p>Bancada inteiriça, cuba zero-line, cooktop integrado, acionamento de pé.</p>
              <div className="src">Fornecedor: <span className="red">Riobaldo Metais</span></div>
            </div>
          </div>
          <div className="db-mat-card nero">
            <div className="ph">
              <span className="lb">NERO MARQUINA</span>
              <span className="no">04</span>
            </div>
            <div className="info">
              <div className="k">Banhos · paredes molhadas</div>
              <h5>Mármore<br/><em>nero marquina.</em></h5>
              <p>Veios brancos cruzados, espelhos backlit, pisos aquecidos, ventilação dupla.</p>
              <div className="src">Origem: <span className="red">País Basco, ES</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização dark */}
      <section className="db-loc">
        <div className="db-map-dark">
          <div className="road r1"></div>
          <div className="road r2"></div>
          <div className="road r3"></div>
          <div className="pin"></div>
          <div className="label lbl1">Av. Pedroso de Moraes</div>
          <div className="label lbl2">Rua dos Pinheiros</div>
          <div className="label lbl3">Parque do Povo</div>
          <div className="scale">ESC 1:8000</div>
        </div>
        <div className="db-loc-side">
          <div className="ey">Cap. 06 · Localização</div>
          <h3>Pinheiros, <em>setor oeste</em><br/>de São Paulo.</h3>
          <div className="addr">Rua dos Pinheiros, 1.412<br/>Pinheiros · São Paulo · SP</div>
          <ul>
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
      <section className="db-sales">
        <div className="db-sales-left">
          <span className="ey">Cap. 07 · Comercial</span>
          <span className="ph-lb tl">IMAGEM · STAND DE OBRA</span>
          <span className="ph-lb br">VISITA TÉCNICA · TER &amp; QUI</span>
          <h2>Agende uma<br/>visita ao<br/><em>stand.</em></h2>
        </div>

        <div className="db-sales-card">
          <h4>Reservar <em>visita técnica.</em></h4>
          <p>Visitas guiadas pelo engenheiro responsável, terças e quintas das 10h às 16h. Stand a 90 m da torre.</p>
          <div className="price">
            <div className="k">Tipo 02 · 124 m² · a partir de</div>
            <div className="v">R$ 4,8 <em>milhões</em></div>
          </div>
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
            <span className="ph">próx. terça · 14h00</span>
          </div>
          <button>Agendar visita →</button>
        </div>
      </section>

      {/* Outros */}
      <section className="db-others">
        <div className="db-others-head">
          <h3>Continue <em>navegando</em> pelo portfólio.</h3>
          <a className="db-btn-ghost" style={{color:'var(--steel-ink)', borderColor:'var(--steel-ink)'}}>Ver todos →</a>
        </div>
        <div className="db-others-row">
          <div className="db-other">
            <div className="ph">
              <div className="stat"><span className="dot"></span>Lançamento</div>
              <div className="info">
                <div className="meta">N° 02 <span className="red">/</span> Corporativo · BH</div>
                <h4>Steel Pier<br/><em>Office Tower</em></h4>
              </div>
            </div>
          </div>
          <div className="db-other">
            <div className="ph">
              <div className="stat"><span className="dot"></span>Pronto pra morar</div>
              <div className="info">
                <div className="meta">N° 03 <span className="red">/</span> Casas · Brasília</div>
                <h4>Vivienda<br/><em>Margens</em></h4>
              </div>
            </div>
          </div>
          <div className="db-other">
            <div className="ph">
              <div className="stat"><span className="dot"></span>Pré-lançamento</div>
              <div className="info">
                <div className="meta">N° 04 <span className="red">/</span> Lofts · SP</div>
                <h4>Fábrica<br/><em>Plaza</em></h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="db-foot">
        <div className="db-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col">
            <h4>Empreendimentos</h4>
            <ul>
              <li>Edifício Aurora</li>
              <li>Steel Pier Office</li>
              <li>Vivienda Margens</li>
              <li>Fábrica Plaza</li>
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
            <h4>Contato Aurora</h4>
            <ul>
              <li>+55 11 4002 8922</li>
              <li>aurora@steelconstrucoes.com.br</li>
              <li>R. dos Pinheiros, 1.412<br/>Pinheiros · São Paulo</li>
            </ul>
          </div>
        </div>
        <div className="db-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.EmpDetailB = EmpDetailB;

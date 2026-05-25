/* global React */

// ─── Direction C · "Aço" ─────────────────────────────────────────────
// Light, structured, grid-heavy. Cream dominant; red used assertively in
// large planes. Architectural-drawing energy. Width: 1440. Scoped to .steel-c.

const AcoCSS = `
.steel-c {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.55;
  width: 100%;
}
.steel-c .ff-display { font-family: 'DM Serif Display', serif; font-weight: 400; }
.steel-c .ff-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

/* ── Top bar ── */
.c-top {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.c-top .left { display: flex; gap: 28px; }
.c-top .left .red { color: var(--steel-red-lt); }
.c-top .right { display: flex; gap: 22px; color: rgba(241,235,224,0.7); }

/* ── Nav ── */
.c-nav {
  background: var(--steel-cream);
  padding: 22px 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 48px;
  align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.c-nav .logo { display: flex; align-items: center; gap: 14px; }
.c-nav .logo-mark {
  width: 48px; height: 48px;
  background: var(--steel-red);
  position: relative;
}
.c-nav .logo-mark::before {
  content: ''; position: absolute;
  left: 18%; right: 18%; top: 46%; height: 8%;
  background: var(--steel-cream);
  transform: rotate(-45deg); transform-origin: center;
}
.c-nav .logo-mark .corner-a {
  position: absolute; top: 18%; right: 18%; width: 28%; height: 28%;
  background: var(--steel-cream);
}
.c-nav .logo-mark .corner-b {
  position: absolute; bottom: 18%; left: 18%; width: 24%; height: 24%;
  background: var(--steel-cream);
}
.c-nav .logo-word {
  font-family: 'Anton', sans-serif;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: var(--steel-black);
  line-height: 1;
}
.c-nav .logo-sub {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  margin-top: 4px;
}
.c-nav ul { display: flex; gap: 28px; justify-self: center; }
.c-nav ul a {
  font-size: 13px;
  font-weight: 500;
  color: var(--steel-ink);
  padding: 8px 4px;
  border-bottom: 2px solid transparent;
}
.c-nav ul a.active { border-bottom-color: var(--steel-red); }
.c-nav .actions { display: flex; gap: 14px; align-items: center; }
.c-nav .actions .phone {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  color: var(--steel-ink);
  font-weight: 500;
}
.c-btn-red {
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 14px 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.c-btn-red:hover { background: var(--steel-red-dk); }
.c-btn-black {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 14px 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.c-btn-outline {
  background: transparent;
  color: var(--steel-ink);
  border: 1.5px solid var(--steel-ink);
  padding: 12.5px 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}

/* ── Hero — split grid ── */
.c-hero {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  border-bottom: 1px solid var(--steel-border);
}
.c-hero-left {
  padding: 44px 48px 40px;
  background: var(--steel-cream);
  display: flex; flex-direction: column;
  position: relative;
}
.c-hero-meta {
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  margin-bottom: 36px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--steel-border);
}
.c-hero-meta .red { color: var(--steel-red); }
.c-hero h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 92px;
  line-height: 0.96;
  letter-spacing: -0.025em;
  color: var(--steel-black);
  margin-bottom: 36px;
}
.c-hero h1 .red {
  display: inline-block;
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 0 16px;
  margin-left: -8px;
}
.c-hero h1 em { font-style: italic; }
.c-hero-bottom {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 36px;
  align-items: end;
  padding-top: 24px;
  border-top: 1px solid var(--steel-border);
  margin-top: auto;
}
.c-hero-bottom p {
  font-size: 17px;
  line-height: 1.65;
  color: var(--steel-graphite);
  max-width: 460px;
}
.c-hero-bottom p strong { color: var(--steel-ink); font-weight: 600; }
.c-hero-bottom .ctas { display: flex; flex-direction: column; gap: 12px; }

.c-hero-right {
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 40px 36px;
  position: relative;
  display: flex; flex-direction: column;
  overflow: hidden;
}
.c-hero-right::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-image: linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.c-hero-right-h {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(247,242,233,0.7);
  margin-bottom: 24px;
  display: flex; align-items: center; gap: 12px;
}
.c-hero-right-h::before { content: ''; width: 28px; height: 1px; background: var(--steel-cream); }
.c-hero-right h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 40px;
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--steel-cream);
  margin-bottom: 24px;
  position: relative;
}
.c-hero-right h2 em { font-style: italic; }
.c-hero-feat {
  background: var(--steel-cream);
  color: var(--steel-ink);
  padding: 24px;
  margin-top: auto;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
}
.c-hero-feat .img {
  width: 100px; height: 100px;
  background: linear-gradient(160deg, #2a2622, #5a524b);
  position: relative;
  flex-shrink: 0;
}
.c-hero-feat .img::after {
  content: 'AURORA';
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(241,235,224,0.4);
}
.c-hero-feat .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 6px;
}
.c-hero-feat h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 22px;
  color: var(--steel-black);
  margin-bottom: 4px;
}
.c-hero-feat p {
  font-size: 12px;
  color: var(--steel-graphite);
  line-height: 1.5;
}

/* ── Stats strip ── */
.c-stats {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 40px 48px;
  display: grid;
  grid-template-columns: auto repeat(4, 1fr);
  gap: 32px;
  align-items: center;
  border-bottom: 1px solid var(--steel-black);
}
.c-stats-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  max-width: 140px;
  line-height: 1.5;
}
.c-stat {
  border-left: 1px solid rgba(241,235,224,0.12);
  padding-left: 28px;
}
.c-stat .n {
  font-family: 'DM Serif Display', serif;
  font-size: 46px;
  line-height: 1;
  color: var(--steel-cream);
  letter-spacing: -0.02em;
}
.c-stat .n em { font-style: italic; color: var(--steel-red-lt); font-size: 24px; }
.c-stat .l {
  font-size: 12px;
  color: rgba(241,235,224,0.6);
  margin-top: 8px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.06em;
}

/* ── Section frame ── */
.c-section { padding: 64px 48px; }
.c-sec-head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: end;
  gap: 36px;
  padding-bottom: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid var(--steel-ink);
}
.c-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 14px;
}
.c-eyebrow::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.c-sec-head h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--steel-black);
}
.c-sec-head h2 em { font-style: italic; color: var(--steel-red); }
.c-sec-head .filters { display: flex; gap: 8px; align-items: center; }
.c-filter {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid var(--steel-ink);
  color: var(--steel-ink);
}
.c-filter.active { background: var(--steel-ink); color: var(--steel-cream); }

/* ── Empreendimentos grid ── */
.c-emp-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}
.c-emp-card {
  position: relative;
  border: 1px solid var(--steel-border);
  background: var(--steel-paper);
}
.c-emp-card.lead { grid-column: span 8; grid-row: span 2; }
.c-emp-card.tall { grid-column: span 4; grid-row: span 2; }
.c-emp-card.small { grid-column: span 6; }
.c-emp-img {
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, #58504a 0%, #2a2622 100%);
}
.c-emp-card.lead .c-emp-img { aspect-ratio: 16/8.4; }
.c-emp-card.tall .c-emp-img { aspect-ratio: 4/4.2; }
.c-emp-card.small .c-emp-img { aspect-ratio: 16/7.6; }
.c-emp-img::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px);
}
.c-emp-img .ph-tag {
  position: absolute; bottom: 22px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
.c-emp-img .scale {
  position: absolute; bottom: 22px; right: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: rgba(241,235,224,0.4);
  display: flex; align-items: center; gap: 8px;
}
.c-emp-img .scale::after {
  content: ''; width: 48px; height: 1px; background: rgba(241,235,224,0.4);
}
.c-emp-status {
  position: absolute;
  top: 0; left: 0;
  background: var(--steel-red);
  color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 8px 14px;
  display: flex; align-items: center; gap: 8px;
}
.c-emp-status.b { background: var(--steel-black); }
.c-emp-status.l { background: var(--steel-bone); color: var(--steel-ink); }
.c-emp-status .dot { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }
.c-emp-info {
  padding: 20px 22px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 14px;
  align-items: end;
  background: var(--steel-paper);
}
.c-emp-info .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  grid-column: 1 / -1;
  display: flex; gap: 12px; align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--steel-border);
  margin-bottom: 4px;
}
.c-emp-info .meta .red { color: var(--steel-red); }
.c-emp-info h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--steel-black);
}
.c-emp-card.lead .c-emp-info h3 { font-size: 34px; }
.c-emp-info h3 em { font-style: italic; color: var(--steel-red); }
.c-emp-arr {
  width: 44px; height: 44px;
  background: var(--steel-black);
  color: var(--steel-cream);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.c-emp-arr svg { width: 16px; height: 16px; }
.c-emp-spec {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--steel-border);
  margin-top: 4px;
}
.c-emp-spec div { display: flex; flex-direction: column; gap: 4px; }
.c-emp-spec .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-stone);
}
.c-emp-spec .v {
  font-family: 'DM Serif Display', serif;
  font-size: 22px;
  color: var(--steel-black);
  letter-spacing: -0.005em;
}

/* ── Sobre / manifesto ── */
.c-about {
  background: var(--steel-bone);
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.c-about-inner {
  padding: 64px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
}
.c-about h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-black);
  margin-bottom: 24px;
}
.c-about h2 em { font-style: italic; color: var(--steel-red); }
.c-about .body p {
  font-size: 16px;
  color: var(--steel-graphite);
  line-height: 1.75;
  margin-bottom: 16px;
  max-width: 580px;
}
.c-about .right {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 36px 32px;
  position: relative;
}
.c-about .right::before {
  content: '"';
  position: absolute;
  top: 24px; left: 32px;
  font-family: 'DM Serif Display', serif;
  font-size: 120px;
  color: var(--steel-red);
  line-height: 0.6;
}
.c-about .right .q {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 24px;
  line-height: 1.3;
  color: var(--steel-cream);
  margin-top: 56px;
  margin-bottom: 28px;
}
.c-about .right .q em { color: var(--steel-red-lt); font-style: italic; }
.c-about .right .attr {
  display: flex; align-items: center; gap: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.6);
}
.c-about .right .attr::before {
  content: ''; width: 32px; height: 1px; background: var(--steel-red-lt);
}

/* ── Serviços/Áreas ── */
.c-areas {
  background: var(--steel-cream);
}
.c-areas-grid {
  padding: 0 48px 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--steel-border);
}
.c-area {
  padding: 32px 28px;
  border-right: 1px solid var(--steel-border);
  background: var(--steel-cream);
  position: relative;
  transition: background .2s;
}
.c-area:last-child { border-right: none; }
.c-area:nth-child(2) { background: var(--steel-red); color: var(--steel-cream); }
.c-area:nth-child(2) .c-area-num,
.c-area:nth-child(2) .c-area-meta,
.c-area:nth-child(2) p { color: rgba(247,242,233,0.7); }
.c-area:nth-child(2) h3 { color: var(--steel-cream); }
.c-area:nth-child(2) .c-area-icon { background: rgba(247,242,233,0.15); color: var(--steel-cream); }
.c-area:nth-child(2) ul li { border-color: rgba(247,242,233,0.15); color: var(--steel-cream); }
.c-area:nth-child(2) ul li::before { color: var(--steel-cream); }

.c-area-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-graphite);
  margin-bottom: 20px;
}
.c-area-icon {
  width: 48px; height: 48px;
  background: var(--steel-bone);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 22px;
  color: var(--steel-red);
}
.c-area-icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.5; }
.c-area h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  line-height: 1.08;
  letter-spacing: -0.01em;
  color: var(--steel-black);
  margin-bottom: 12px;
}
.c-area h3 em { font-style: italic; color: var(--steel-red); }
.c-area p {
  font-size: 14px;
  color: var(--steel-graphite);
  line-height: 1.65;
  margin-bottom: 20px;
}
.c-area ul {
  display: flex; flex-direction: column;
}
.c-area ul li {
  font-size: 13px;
  font-weight: 500;
  color: var(--steel-ink);
  display: flex; align-items: center; gap: 10px;
  padding: 10px 0;
  border-top: 1px solid var(--steel-border);
}
.c-area ul li::before {
  content: '→';
  color: var(--steel-red);
  font-weight: 600;
}
.c-area-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  margin-top: 22px;
  padding-top: 14px;
  border-top: 1px solid var(--steel-border);
}

/* ── Processo timeline ── */
.c-proc {
  background: var(--steel-paper);
  padding: 64px 48px;
  border-top: 1px solid var(--steel-border);
}
.c-proc-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
  border-top: 1px solid var(--steel-ink);
}
.c-proc-step {
  padding: 20px 18px 20px 0;
  border-right: 1px solid var(--steel-border);
  position: relative;
}
.c-proc-step:last-child { border-right: none; }
.c-proc-step:nth-child(n+2) { padding-left: 18px; }
.c-proc-step::before {
  content: '';
  position: absolute;
  top: -7px; left: 0;
  width: 12px; height: 12px;
  background: var(--steel-cream);
  border: 2px solid var(--steel-ink);
}
.c-proc-step:nth-child(3)::before { background: var(--steel-red); border-color: var(--steel-red); }
.c-proc-step .ph {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--steel-red);
  margin-bottom: 14px;
}
.c-proc-step h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  line-height: 1.1;
  color: var(--steel-black);
  letter-spacing: -0.005em;
  margin-bottom: 8px;
}
.c-proc-step p {
  font-size: 13px;
  color: var(--steel-graphite);
  line-height: 1.6;
  margin-bottom: 12px;
}
.c-proc-step .dur {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--steel-stone);
}

/* ── Clientes ── */
.c-clients {
  background: var(--steel-cream);
  padding: 36px 48px;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.c-clients-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 56px;
  align-items: center;
}
.c-clients-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-graphite);
  max-width: 140px;
  text-transform: uppercase;
  line-height: 1.5;
}
.c-clients-label .red { color: var(--steel-red); }
.c-clients-row {
  display: flex; justify-content: space-between; align-items: center; gap: 32px;
}
.c-clients-row .log {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 24px;
  color: var(--steel-graphite);
  opacity: 0.7;
}
.c-clients-row .log.bold {
  font-family: 'Anton', sans-serif;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 0.08em;
}

/* ── CTA ── */
.c-cta {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 72px 48px;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: end;
  position: relative;
  overflow: hidden;
}
.c-cta::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 100%;
  background: var(--steel-red);
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 0 100%);
  opacity: 0.15;
}
.c-cta-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  margin-bottom: 24px;
  display: flex; gap: 14px; align-items: center;
}
.c-cta-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--steel-red); }
.c-cta h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 68px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
}
.c-cta h2 em { font-style: italic; color: var(--steel-red-lt); }
.c-cta-right {
  position: relative;
  z-index: 1;
}
.c-cta-card {
  background: var(--steel-cream);
  color: var(--steel-ink);
  padding: 32px;
}
.c-cta-card .info-row {
  display: flex; flex-direction: column; gap: 4px;
  padding: 16px 0;
  border-bottom: 1px solid var(--steel-border);
}
.c-cta-card .info-row:last-child { border-bottom: none; }
.c-cta-card .info-row .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--steel-stone);
}
.c-cta-card .info-row .v {
  font-family: 'DM Serif Display', serif;
  font-size: 22px;
  color: var(--steel-black);
  letter-spacing: -0.005em;
}
.c-cta-btn {
  display: block;
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 16px;
}

/* ── Footer ── */
.c-foot {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 56px 48px 24px;
}
.c-foot-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--steel-border-d);
}
.c-foot .brand-word {
  font-family: 'Anton', sans-serif;
  font-size: 52px;
  line-height: 0.95;
  letter-spacing: 0.02em;
  color: var(--steel-cream);
}
.c-foot .brand-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 24px;
}
.c-foot .brand-q {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 20px;
  color: rgba(241,235,224,0.7);
  max-width: 340px;
  line-height: 1.4;
}
.c-foot-col h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 24px;
}
.c-foot-col li {
  font-size: 13.5px;
  color: rgba(241,235,224,0.7);
  margin-bottom: 10px;
}
.c-foot-bottom {
  padding-top: 28px;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
`;

function AcoDirection() {
  return (
    <div className="steel steel-c">
      <style>{AcoCSS}</style>

      {/* Top bar */}
      <div className="c-top">
        <div className="left">
          <span><span className="red">●</span> Em obras agora · 7 canteiros ativos</span>
          <span>SP · MG · DF · Atendimento nacional</span>
        </div>
        <div className="right">
          <span>+55 11 4002 8922</span>
          <span>contato@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="c-nav">
        <div className="logo">
          <div className="logo-mark">
            <span className="corner-a"></span>
            <span className="corner-b"></span>
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
          <a className="c-btn-outline">Brochura ↓</a>
          <a className="c-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="c-hero">
        <div className="c-hero-left">
          <div className="c-hero-meta">
            <span><span className="red">●</span> 2026 · Portfólio em curso</span>
            <span>Edição 04 · Vol. 01</span>
            <span>Fundada em 1994 · CREA-J 24.318</span>
          </div>
          <h1>
            Construir<br/>
            <span className="red">com intenção,</span><br/>
            <em>entregar com</em><br/>
            assinatura.
          </h1>
          <div className="c-hero-bottom">
            <p>
              Steel é construtora <strong>e</strong> incorporadora de alto padrão. <strong>32 anos</strong> projetando edifícios que envelhecem bem — e canteiros que respeitam o ofício.
            </p>
            <div className="ctas">
              <a className="c-btn-black">Ver empreendimentos →</a>
              <a className="c-btn-outline">Falar com a Steel</a>
            </div>
          </div>
        </div>

        <div className="c-hero-right">
          <div className="c-hero-right-h">Em destaque · Edição 26</div>
          <h2>
            <em>Aurora</em><br/>
            é o nosso<br/>
            novo lançamento.
          </h2>

          <div style={{
            position: 'relative',
            flex: 1,
            background: 'linear-gradient(160deg, #8a1418, #4a0c0e)',
            border: '1px solid rgba(247,242,233,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 0 24px',
            minHeight: '180px',
          }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'rgba(247,242,233,0.4)',
            }}>IMAGEM · FACHADA AURORA</span>
            <span style={{
              position: 'absolute',
              top: '14px', right: '14px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.18em',
              color: 'rgba(247,242,233,0.5)',
            }}>N° 01</span>
          </div>

          <div className="c-hero-feat">
            <div className="img"></div>
            <div>
              <div className="meta">Residencial · Pinheiros SP</div>
              <h4>Edifício Aurora</h4>
              <p>128 apartamentos · 84 a 212 m² · Entrega Q3 · 2027</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="c-stats">
        <div className="c-stats-label">Steel<br/>em<br/>números</div>
        <div className="c-stat">
          <div className="n">32<em>anos</em></div>
          <div className="l">de história contínua</div>
        </div>
        <div className="c-stat">
          <div className="n">87<em>+</em></div>
          <div className="l">empreendimentos entregues</div>
        </div>
        <div className="c-stat">
          <div className="n">1,2<em>M m²</em></div>
          <div className="l">de área construída</div>
        </div>
        <div className="c-stat">
          <div className="n">4,1<em>k</em></div>
          <div className="l">famílias em endereço Steel</div>
        </div>
      </section>

      {/* Empreendimentos */}
      <section className="c-section">
        <div className="c-sec-head">
          <div>
            <div className="c-eyebrow">Cap. 01 · Portfólio</div>
            <h2>Empreendimentos<br/>em <em>curso.</em></h2>
          </div>
          <div></div>
          <div className="filters">
            <span className="c-filter active">Tudo</span>
            <span className="c-filter">Residencial</span>
            <span className="c-filter">Corporativo</span>
            <span className="c-filter">Retrofit</span>
          </div>
        </div>

        <div className="c-emp-grid">
          <div className="c-emp-card lead">
            <div className="c-emp-img">
              <div className="c-emp-status"><span className="dot"></span>Em obras · 62%</div>
              <span className="ph-tag">IMAGEM · TORRE AURORA · FACHADA SUL</span>
              <span className="scale">ESC 1:200</span>
            </div>
            <div className="c-emp-info">
              <div className="meta">N° 01 <span className="red">/</span> Residencial <span className="red">/</span> 24 andares <span className="red">/</span> Pinheiros · SP</div>
              <h3>Edifício <em>Aurora</em></h3>
              <a className="c-emp-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <div className="c-emp-spec">
                <div><span className="k">Unidades</span><span className="v">128</span></div>
                <div><span className="k">Tipologia</span><span className="v">84–212 m²</span></div>
                <div><span className="k">Lançamento</span><span className="v">Out · 2025</span></div>
                <div><span className="k">Entrega</span><span className="v">Q3 · 2027</span></div>
              </div>
            </div>
          </div>

          <div className="c-emp-card tall">
            <div className="c-emp-img">
              <div className="c-emp-status b"><span className="dot"></span>Lançamento</div>
              <span className="ph-tag">IMAGEM · STEEL PIER</span>
            </div>
            <div className="c-emp-info">
              <div className="meta">N° 02 <span className="red">/</span> Corporativo <span className="red">/</span> BH</div>
              <h3>Steel Pier <em>Office Tower</em></h3>
              <a className="c-emp-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <div className="c-emp-spec">
                <div><span className="k">Lajes</span><span className="v">18</span></div>
                <div><span className="k">M² locáveis</span><span className="v">12k</span></div>
              </div>
            </div>
          </div>

          <div className="c-emp-card small">
            <div className="c-emp-img">
              <div className="c-emp-status l"><span className="dot"></span>Pronto pra morar</div>
              <span className="ph-tag">IMAGEM · VIVIENDA MARGENS</span>
            </div>
            <div className="c-emp-info">
              <div className="meta">N° 03 <span className="red">/</span> Casas em condomínio <span className="red">/</span> Brasília</div>
              <h3>Vivienda <em>Margens</em></h3>
              <a className="c-emp-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="c-emp-card small">
            <div className="c-emp-img">
              <div className="c-emp-status"><span className="dot"></span>Pré-lançamento</div>
              <span className="ph-tag">IMAGEM · FÁBRICA PLAZA</span>
            </div>
            <div className="c-emp-info">
              <div className="meta">N° 04 <span className="red">/</span> Lofts conversão industrial</div>
              <h3>Fábrica <em>Plaza</em></h3>
              <a className="c-emp-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / quote */}
      <section className="c-about">
        <div className="c-about-inner">
          <div>
            <div className="c-eyebrow">Cap. 02 · A Steel</div>
            <h2>Engenharia <em>presente.</em><br/>Cadeia <em>verticalizada.</em></h2>
            <div className="body">
              <p>
                A Steel é a engenharia familiar que, em 1994, decidiu nunca terceirizar compromisso. Três décadas depois, ainda assinamos cada obra como quem assina uma carta.
              </p>
              <p>
                Da viabilidade do terreno até a entrega das chaves, é o mesmo CNPJ no contrato e o mesmo engenheiro no telefone. É raro, e é por isso que escolhemos continuar assim.
              </p>
            </div>
            <a className="c-btn-black" style={{marginTop:'24px'}}>Conhecer a Steel →</a>
          </div>
          <div className="right">
            <div className="q">
              Trinta e dois meses depois, a obra ficou exatamente como o caderno comercial mostrou — e o <em>engenheiro que assinou o contrato foi o mesmo que entregou as chaves.</em>
            </div>
            <div className="attr">
              Renata Alvim · Grupo Maia
            </div>
          </div>
        </div>
      </section>

      {/* Áreas / serviços */}
      <section className="c-areas">
        <div className="c-sec-head" style={{padding: '96px 48px 0', borderBottom: 'none'}}>
          <div>
            <div className="c-eyebrow">Cap. 03 · Atuação</div>
            <h2>Três frentes,<br/>um mesmo <em>rigor.</em></h2>
          </div>
          <div></div>
          <a className="c-btn-outline" style={{marginBottom:'8px'}}>Todos os serviços →</a>
        </div>
        <div className="c-areas-grid">
          <div className="c-area">
            <div className="c-area-num">01 / 03 — Incorporação</div>
            <div className="c-area-icon">
              <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>
            </div>
            <h3>Incorporação<br/><em>residencial.</em></h3>
            <p>Da identificação do terreno ao habite-se. Empreendimentos residenciais de alto padrão concebidos com arquitetos parceiros e entregues integralmente pela Steel.</p>
            <ul>
              <li>Aquisição e viabilidade de terrenos</li>
              <li>Projeto arquitetônico autoral</li>
              <li>Comercialização &amp; relacionamento</li>
              <li>Pós-chaves assistido</li>
            </ul>
            <div className="c-area-meta">Em curso · 4 empreendimentos</div>
          </div>

          <div className="c-area">
            <div className="c-area-num">02 / 03 — Construção</div>
            <div className="c-area-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="12"/><path d="M3 9l9-6 9 6M9 21v-6h6v6"/></svg>
            </div>
            <h3>Construção<br/><em>pesada.</em></h3>
            <p>Obras corporativas, industriais, hospitalares e institucionais. Coordenação completa de canteiro com BIM, ISO 45001 e cronograma transparente.</p>
            <ul>
              <li>Edifícios corporativos &amp; sedes</li>
              <li>Centros logísticos &amp; industriais</li>
              <li>Edifícios hospitalares</li>
              <li>Construções institucionais</li>
            </ul>
            <div className="c-area-meta">Em curso · 3 canteiros ativos</div>
          </div>

          <div className="c-area">
            <div className="c-area-num">03 / 03 — Retrofit</div>
            <div className="c-area-icon">
              <svg viewBox="0 0 24 24"><path d="M3 12l4-4 4 4-4 4z M13 6l8 8M17 2v4M21 2h-4"/></svg>
            </div>
            <h3>Retrofit &amp; <em>conversão.</em></h3>
            <p>Conversão de edifícios históricos, retrofit técnico de fachadas e reformas executivas — respeitando memória patrimonial e desempenho atual.</p>
            <ul>
              <li>Retrofit de fachadas &amp; empenas</li>
              <li>Conversão de uso</li>
              <li>Restauro com aprovação patrimonial</li>
              <li>Reformas executivas</li>
            </ul>
            <div className="c-area-meta">Em curso · 2 conversões</div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="c-proc">
        <div className="c-sec-head" style={{borderBottom: '2px solid var(--steel-ink)'}}>
          <div>
            <div className="c-eyebrow">Cap. 04 · Processo</div>
            <h2>Do papel<br/>à <em>chave.</em></h2>
          </div>
          <div></div>
          <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.18em', color:'var(--steel-graphite)', textTransform:'uppercase'}}>05 etapas · 24–48 meses</div>
        </div>

        <div className="c-proc-timeline">
          <div className="c-proc-step">
            <div className="ph">01 · Estudo</div>
            <h4>Viabilidade<br/>técnica</h4>
            <p>Análise de terreno, estudo de massa, regulatório e financeiro.</p>
            <div className="dur">2–4 semanas</div>
          </div>
          <div className="c-proc-step">
            <div className="ph">02 · Projeto</div>
            <h4>Projeto<br/>integrado BIM</h4>
            <p>Arquitetura, estrutural, elétrico e hidráulico coordenados em BIM.</p>
            <div className="dur">4–7 meses</div>
          </div>
          <div className="c-proc-step">
            <div className="ph">03 · Obra</div>
            <h4>Canteiro<br/>&amp; execução</h4>
            <p>Engenheiro residente, ISO 45001 e relatório mensal ao cliente.</p>
            <div className="dur">18–36 meses</div>
          </div>
          <div className="c-proc-step">
            <div className="ph">04 · Acabamento</div>
            <h4>Acabamento<br/>curado</h4>
            <p>Pedra, madeira, metal — fornecedores curados, supervisão própria.</p>
            <div className="dur">3–6 meses</div>
          </div>
          <div className="c-proc-step">
            <div className="ph">05 · Entrega</div>
            <h4>Entrega<br/>&amp; assistência</h4>
            <p>Habite-se, vistoria assistida e 5 anos de cobertura técnica.</p>
            <div className="dur">contínuo</div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="c-clients">
        <div className="c-clients-inner">
          <div className="c-clients-label"><span className="red">●</span> Construímos para</div>
          <div className="c-clients-row">
            <span className="log bold">VOLARE</span>
            <span className="log">Banco Áureo</span>
            <span className="log bold">USINA·SP</span>
            <span className="log">Hospital Albano</span>
            <span className="log bold">LATERAL</span>
            <span className="log">Embaixada NL</span>
            <span className="log bold">GRUPO MAIA</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="c-cta">
        <div>
          <div className="c-cta-eyebrow">Cap. 05 · Iniciar conversa</div>
          <h2>Conversemos<br/>sobre o seu<br/><em>próximo edifício.</em></h2>
        </div>
        <div className="c-cta-right">
          <div className="c-cta-card">
            <div className="info-row">
              <span className="k">Telefone direto</span>
              <span className="v">+55 11 4002 8922</span>
            </div>
            <div className="info-row">
              <span className="k">E-mail comercial</span>
              <span className="v">contato@steelconstrucoes.com.br</span>
            </div>
            <div className="info-row">
              <span className="k">Endereço</span>
              <span className="v">Av. Brigadeiro Faria Lima, 1234<br/>Itaim Bibi · São Paulo</span>
            </div>
            <a className="c-cta-btn">Iniciar conversa →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="c-foot">
        <div className="c-foot-top">
          <div>
            <div className="brand-word">STEEL</div>
            <div className="brand-sub">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="brand-q">
              "Construir com intenção, entregar com assinatura."
            </div>
          </div>
          <div className="c-foot-col">
            <h4>Navegue</h4>
            <ul>
              <li>Empreendimentos</li>
              <li>Construções</li>
              <li>A Steel</li>
              <li>Processo</li>
              <li>Imprensa</li>
            </ul>
          </div>
          <div className="c-foot-col">
            <h4>Relação</h4>
            <ul>
              <li>Investidores</li>
              <li>Imprensa &amp; press kit</li>
              <li>Trabalhe conosco</li>
              <li>Pós-obra</li>
            </ul>
          </div>
          <div className="c-foot-col">
            <h4>Contato</h4>
            <ul>
              <li>+55 11 4002 8922</li>
              <li>contato@steelconstrucoes.com.br</li>
              <li>Av. Brigadeiro Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li>
              <li>@steel.construcoes</li>
            </ul>
          </div>
        </div>
        <div className="c-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.AcoDirection = AcoDirection;

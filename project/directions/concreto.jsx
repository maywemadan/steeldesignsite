/* global React */

// ─── Direction A · "Concreto" ───────────────────────────────────────
// Editorial premium. Serif display, generous whitespace, restrained
// red as accent. Tone: a quiet, confident architect's monograph.
// Width: 1440. Self-contained — all styles scoped under .steel-a.

const ConcretoCSS = `
.steel-a {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-paper);
  font-size: 15px;
  line-height: 1.55;
  width: 100%;
}
.steel-a .ff-display { font-family: 'Cormorant Garamond', serif; font-weight: 300; letter-spacing: -0.01em; }
.steel-a .ff-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

/* ── Top utility bar ── */
.a-util {
  background: var(--steel-black);
  color: rgba(247,242,233,0.7);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 10px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.a-util .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--steel-red); display: inline-block; margin-right: 8px; vertical-align: middle; }
.a-util .links { display: flex; gap: 28px; }
.a-util .links a:hover { color: var(--steel-white); }

/* ── Nav ── */
.a-nav {
  background: var(--steel-paper);
  padding: 22px 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  border-bottom: 1px solid var(--steel-border);
  position: sticky; top: 0;
}
.a-nav .logo {
  display: flex; align-items: center; gap: 12px;
}
.a-nav .logo-mark {
  width: 44px; height: 44px;
  background: var(--steel-red);
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.a-nav .logo-mark svg { width: 70%; height: 70%; }
.a-nav .logo-word {
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  letter-spacing: 0.02em;
  color: var(--steel-black);
  line-height: 1;
}
.a-nav .logo-sub {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  margin-top: 3px;
}
.a-nav ul {
  display: flex; gap: 36px;
  justify-self: center;
}
.a-nav ul a {
  font-size: 13px;
  font-weight: 500;
  color: var(--steel-ink);
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 4px;
}
.a-nav ul a.active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: -2px;
  height: 2px; background: var(--steel-red);
}
.a-nav .nav-actions { justify-self: end; display: flex; gap: 14px; align-items: center; }
.a-nav .nav-actions .phone {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--steel-graphite);
}
.a-btn-primary {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 13px 22px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
  transition: background .15s;
}
.a-btn-primary:hover { background: var(--steel-red); }
.a-btn-primary .arrow { width: 14px; height: 1px; background: currentColor; position: relative; }
.a-btn-primary .arrow::after { content: ''; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-right: 1px solid currentColor; border-top: 1px solid currentColor; transform: rotate(45deg); }

/* ── Hero ── */
.a-hero {
  padding: 64px 56px 0;
  position: relative;
}
.a-hero .meta-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--steel-border);
  margin-bottom: 56px;
}
.a-hero .meta-left {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.a-hero .meta-left .red { color: var(--steel-red); }
.a-hero .meta-right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  display: flex; gap: 32px;
}
.a-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: end;
}
.a-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 108px;
  line-height: 0.92;
  letter-spacing: -0.025em;
  color: var(--steel-black);
}
.a-hero h1 em {
  font-style: italic;
  color: var(--steel-red);
  font-weight: 400;
}
.a-hero h1 .rule {
  display: inline-block;
  width: 96px; height: 4px;
  background: var(--steel-red);
  vertical-align: middle;
  margin: 0 16px 18px 0;
}
.a-hero .lede {
  font-size: 17px;
  line-height: 1.65;
  color: var(--steel-graphite);
  max-width: 460px;
  margin-bottom: 36px;
}
.a-hero .lede strong { color: var(--steel-ink); font-weight: 600; }
.a-hero .hero-ctas { display: flex; gap: 14px; align-items: center; }
.a-link-ghost {
  font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
  color: var(--steel-ink);
  border-bottom: 1px solid var(--steel-ink);
  padding-bottom: 4px;
}

.a-hero-figure {
  margin-top: 80px;
  display: grid;
  grid-template-columns: 0.8fr 1.6fr 0.8fr;
  gap: 20px;
  align-items: end;
}
.a-figure-card {
  position: relative;
  overflow: hidden;
}
.a-figure-card .ph {
  width: 100%;
  background: linear-gradient(135deg, #3a342c 0%, #1c1a17 100%);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  overflow: hidden;
}
.a-figure-card .ph::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(255,255,255,0.025) 14px, rgba(255,255,255,0.025) 15px);
}
.a-figure-card .ph::after {
  content: 'IMAGEM · OBRA EM DESTAQUE';
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(241,235,224,0.32);
}
.a-figure-card.tall .ph { aspect-ratio: 3/4.5; }
.a-figure-card.wide .ph { aspect-ratio: 16/11; }
.a-figure-card .cap {
  margin-top: 14px;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.a-figure-card .cap .num { color: var(--steel-red); }

/* ── Marquee / strip ── */
.a-strip {
  margin-top: 96px;
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 42px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  overflow: hidden;
}
.a-strip-word {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 38px;
  white-space: nowrap;
  display: flex; align-items: center; gap: 36px;
}
.a-strip-word .sep { width: 6px; height: 6px; border-radius: 50%; background: var(--steel-red); }

/* ── Empreendimentos ── */
.a-section {
  padding: 120px 56px;
}
.a-sec-head {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
  padding-bottom: 56px;
  margin-bottom: 56px;
  border-bottom: 1px solid var(--steel-border);
  align-items: end;
}
.a-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 18px;
}
.a-eyebrow::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.a-sec-head h2 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 64px;
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--steel-black);
}
.a-sec-head h2 em { font-style: italic; color: var(--steel-red); font-weight: 400; }
.a-sec-head .head-meta {
  font-size: 15px;
  color: var(--steel-graphite);
  line-height: 1.7;
  max-width: 460px;
}

.a-emp-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 28px;
}
.a-emp-grid-right { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.a-emp-card {
  display: flex; flex-direction: column;
}
.a-emp-img {
  position: relative;
  overflow: hidden;
  background: var(--steel-bone);
}
.a-emp-card.lead .a-emp-img {
  aspect-ratio: 4/4.5;
  background: linear-gradient(160deg, #4a443c, #1c1a17);
}
.a-emp-card.small .a-emp-img {
  aspect-ratio: 4/3.6;
  background: linear-gradient(165deg, #585045, #2a2622);
}
.a-emp-card.small.alt .a-emp-img {
  background: linear-gradient(160deg, #7a7268, #3e372f);
}
.a-emp-img::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 36px 36px;
}
.a-emp-img .status {
  position: absolute; top: 22px; left: 22px;
  background: var(--steel-cream);
  color: var(--steel-black);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 6px 12px;
}
.a-emp-img .status.red { background: var(--steel-red); color: var(--steel-cream); }
.a-emp-img .ph-label {
  position: absolute;
  bottom: 22px; left: 22px;
  color: rgba(241,235,224,0.4);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.a-emp-info {
  padding: 24px 4px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px 16px;
}
.a-emp-card.lead .a-emp-info { padding-top: 28px; }
.a-emp-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.2em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  grid-column: 1 / -1;
  margin-bottom: 6px;
}
.a-emp-num .sep { color: var(--steel-red); margin: 0 8px; }
.a-emp-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.05;
  color: var(--steel-black);
  letter-spacing: -0.01em;
}
.a-emp-card.lead .a-emp-name { font-size: 42px; }
.a-emp-card.lead .a-emp-name em { font-style: italic; color: var(--steel-red); }
.a-emp-arrow {
  width: 36px; height: 36px;
  border: 1px solid var(--steel-ink);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  align-self: end;
  flex-shrink: 0;
}
.a-emp-arrow svg { width: 14px; height: 14px; }
.a-emp-meta {
  grid-column: 1 / -1;
  display: flex; gap: 28px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--steel-border);
  font-size: 12px;
  color: var(--steel-graphite);
}
.a-emp-meta div { display: flex; flex-direction: column; gap: 2px; }
.a-emp-meta .k { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.18em; color: var(--steel-stone); text-transform: uppercase; }
.a-emp-meta .v { color: var(--steel-ink); font-weight: 500; }

/* ── Manifesto ── */
.a-manifesto {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 140px 56px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: start;
}
.a-manifesto .left {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  position: sticky; top: 100px;
}
.a-manifesto .left::before {
  content: ''; display: block; width: 56px; height: 1px;
  background: var(--steel-red);
  margin-bottom: 18px;
}
.a-manifesto h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 60px;
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: -0.015em;
  color: var(--steel-cream);
  margin-bottom: 36px;
}
.a-manifesto h2 em { font-style: italic; color: var(--steel-red-lt); font-weight: 400; }
.a-manifesto p {
  font-size: 17px;
  line-height: 1.75;
  color: rgba(241,235,224,0.72);
  margin-bottom: 22px;
  max-width: 640px;
}
.a-manifesto p:last-of-type { color: rgba(241,235,224,0.5); }
.a-manifesto .sig {
  margin-top: 56px;
  display: flex; align-items: center; gap: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
}
.a-manifesto .sig-name {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--steel-cream);
  letter-spacing: 0;
  text-transform: none;
}

/* ── Stats ── */
.a-stats {
  background: var(--steel-paper);
  padding: 0 56px;
}
.a-stats-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.a-stat {
  padding: 56px 32px 56px 0;
  border-right: 1px solid var(--steel-border);
  position: relative;
}
.a-stat:first-child { padding-left: 0; }
.a-stat:last-child { border-right: none; padding-right: 0; }
.a-stat:nth-child(n+2) { padding-left: 32px; }
.a-stat-num {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 88px;
  line-height: 1;
  color: var(--steel-black);
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}
.a-stat-num sup {
  font-size: 32px;
  color: var(--steel-red);
  vertical-align: top;
  margin-top: 14px;
  display: inline-block;
  font-style: italic;
  font-weight: 400;
}
.a-stat-num small {
  font-size: 28px;
  color: var(--steel-graphite);
  font-style: italic;
}
.a-stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  line-height: 1.6;
}

/* ── Serviços ── */
.a-serv {
  padding: 120px 56px;
  background: var(--steel-paper);
}
.a-serv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--steel-border);
}
.a-serv-card {
  padding: 56px 36px 56px 0;
  border-right: 1px solid var(--steel-border);
  position: relative;
}
.a-serv-card:nth-child(n+2) { padding-left: 36px; }
.a-serv-card:last-child { border-right: none; padding-right: 0; }
.a-serv-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-graphite);
  margin-bottom: 24px;
}
.a-serv-num .red { color: var(--steel-red); }
.a-serv-icon {
  width: 56px; height: 56px;
  border: 1px solid var(--steel-ink);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 28px;
}
.a-serv-icon svg { width: 26px; height: 26px; stroke: var(--steel-ink); fill: none; stroke-width: 1.4; }
.a-serv-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.1;
  color: var(--steel-black);
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}
.a-serv-card h3 em { font-style: italic; color: var(--steel-red); }
.a-serv-card p {
  font-size: 14.5px;
  color: var(--steel-graphite);
  line-height: 1.7;
  margin-bottom: 28px;
}
.a-serv-card ul { display: flex; flex-direction: column; gap: 8px; }
.a-serv-card ul li {
  font-size: 13px;
  color: var(--steel-ink);
  font-weight: 500;
  display: flex; align-items: center; gap: 10px;
  padding: 8px 0;
  border-top: 1px solid var(--steel-border);
}
.a-serv-card ul li::before { content: '+'; color: var(--steel-red); font-weight: 400; font-size: 14px; }

/* ── Processo ── */
.a-proc {
  background: var(--steel-bone);
  padding: 120px 56px;
}
.a-proc-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  position: relative;
}
.a-proc-grid::before {
  content: ''; position: absolute;
  top: 18px; left: 4%; right: 4%;
  height: 1px;
  background: var(--steel-graphite);
  opacity: 0.3;
}
.a-step {
  text-align: left;
}
.a-step-dot {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--steel-bone);
  border: 1px solid var(--steel-ink);
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--steel-ink);
  margin-bottom: 28px;
  position: relative; z-index: 1;
}
.a-step:nth-child(3) .a-step-dot { background: var(--steel-red); border-color: var(--steel-red); color: var(--steel-cream); }
.a-step h4 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 26px;
  color: var(--steel-black);
  letter-spacing: -0.005em;
  margin-bottom: 10px;
}
.a-step p {
  font-size: 13px;
  color: var(--steel-graphite);
  line-height: 1.65;
}

/* ── Clientes ── */
.a-clients {
  background: var(--steel-paper);
  padding: 80px 56px;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.a-clients-label {
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  margin-bottom: 36px;
}
.a-clients-label .red { color: var(--steel-red); }
.a-clients-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}
.a-client-logo {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 26px;
  color: var(--steel-graphite);
  letter-spacing: 0.02em;
  opacity: 0.8;
}
.a-client-logo.bold { font-family: 'Anton', sans-serif; font-style: normal; font-size: 22px; letter-spacing: 0.08em; }

/* ── CTA ── */
.a-cta {
  background: var(--steel-red);
  color: var(--steel-cream);
  padding: 120px 56px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px;
  align-items: center;
}
.a-cta h2 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 78px;
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
}
.a-cta h2 em { font-style: italic; color: var(--steel-black); }
.a-cta p {
  font-size: 16px;
  color: rgba(247,242,233,0.8);
  max-width: 460px;
  margin-top: 24px;
  line-height: 1.65;
}
.a-cta .right { text-align: right; display: flex; flex-direction: column; gap: 20px; align-items: flex-end; }
.a-btn-cta {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 22px 36px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 14px;
}
.a-btn-cta .arrow-circle {
  width: 28px; height: 28px;
  border: 1px solid var(--steel-cream);
  border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
}
.a-cta .right .phone {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 24px;
  color: var(--steel-cream);
}
.a-cta .right .email {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: rgba(247,242,233,0.7);
  letter-spacing: 0.06em;
}

/* ── Footer ── */
.a-foot {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 80px 56px 32px;
}
.a-foot-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 56px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--steel-border-d);
}
.a-foot .brand-word {
  font-family: 'Anton', sans-serif;
  font-size: 56px;
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--steel-cream);
  margin-bottom: 8px;
}
.a-foot .brand-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 24px;
}
.a-foot .brand-tag {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 19px;
  color: rgba(241,235,224,0.6);
  max-width: 340px;
  line-height: 1.45;
}
.a-foot-col h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.a-foot-col li {
  font-size: 13.5px;
  color: rgba(241,235,224,0.7);
  margin-bottom: 8px;
}
.a-foot-bottom {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
`;

function ConcretoLogo({ red = 'var(--steel-red)', white = 'var(--steel-cream)', size = 44 }) {
  // Recreated from logo brief: red square with white diagonal stroke + letter form
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" fill={red}/>
      <path d="M22 12 L88 78 L88 88 L78 88 L12 22 L12 12 Z" fill={white}/>
      <path d="M22 88 L88 22 L88 12 L78 12 L12 78 L12 88 Z" fill={white} opacity="0.0"/>
      <path d="M20 80 L80 20 L80 12 L74 12 L12 74 L12 80 Z" fill={white}/>
      <path d="M30 22 L62 22 L62 30 L30 30 Z" fill={red}/>
      <path d="M70 38 L78 38 L78 78 L38 78 L38 70 L70 70 Z" fill={red}/>
    </svg>
  );
}

function ConcretoDirection() {
  return (
    <div className="steel steel-a">
      <style>{ConcretoCSS}</style>

      {/* Top utility */}
      <div className="a-util">
        <span><span className="dot"></span>SP · MG · DF · ATENDIMENTO NACIONAL</span>
        <div className="links">
          <a>Investidores</a>
          <a>Trabalhe conosco</a>
          <a>Imprensa</a>
          <a>PT · EN</a>
        </div>
      </div>

      {/* Nav */}
      <nav className="a-nav">
        <div className="logo">
          <ConcretoLogo />
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
        <div className="nav-actions">
          <span className="phone">+55 11 4002 8922</span>
          <a className="a-btn-primary">Iniciar conversa<span className="arrow"></span></a>
        </div>
      </nav>

      {/* Hero */}
      <section className="a-hero">
        <div className="meta-row">
          <div className="meta-left">
            <span className="red">●</span> Edição 2026 · Portfólio em curso
          </div>
          <div className="meta-right">
            <span>Fundada em 1994</span>
            <span>CRECI-J 24.318</span>
            <span>Ed. 04 / VOL. 01</span>
          </div>
        </div>

        <div className="a-hero-grid">
          <h1>
            Construir<br/>
            <span className="rule"></span>com<br/>
            <em>intenção.</em>
          </h1>
          <div>
            <p className="lede">
              Construtora e incorporadora de <strong>alto padrão</strong> — do projeto à entrega das chaves. Há três décadas projetando edifícios que envelhecem bem e canteiros que respeitam o ofício.
            </p>
            <div className="hero-ctas">
              <a className="a-btn-primary">Ver empreendimentos<span className="arrow"></span></a>
              <a className="a-link-ghost">Falar com a Steel →</a>
            </div>
          </div>
        </div>

        <div className="a-hero-figure">
          <div className="a-figure-card tall">
            <div className="ph"></div>
            <div className="cap">
              <span><span className="num">01</span> · Edifício Aurora</span>
              <span>São Paulo</span>
            </div>
          </div>
          <div className="a-figure-card wide">
            <div className="ph"></div>
            <div className="cap">
              <span><span className="num">02</span> · Steel Pier Office Tower</span>
              <span>Belo Horizonte</span>
            </div>
          </div>
          <div className="a-figure-card tall">
            <div className="ph"></div>
            <div className="cap">
              <span><span className="num">03</span> · Vivienda Margens</span>
              <span>Brasília</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strip */}
      <div className="a-strip">
        <div className="a-strip-word">
          <span>incorporação</span><span className="sep"></span>
          <span><em style={{fontStyle:'italic'}}>construção pesada</em></span><span className="sep"></span>
          <span>retrofit</span><span className="sep"></span>
          <span><em style={{fontStyle:'italic'}}>obras corporativas</em></span><span className="sep"></span>
          <span>engenharia</span>
        </div>
      </div>

      {/* Empreendimentos */}
      <section className="a-section">
        <div className="a-sec-head">
          <div>
            <div className="a-eyebrow">Cap. 01 · Empreendimentos</div>
            <h2>Em <em>obra</em><br/>e à venda.</h2>
          </div>
          <div className="head-meta">
            Quatro empreendimentos em fases distintas — do canteiro ativo ao pré-lançamento. Cada um conduzido pelo time integrado de incorporação, projeto e obra da Steel.
          </div>
        </div>

        <div className="a-emp-grid">
          <div className="a-emp-card lead">
            <div className="a-emp-img">
              <div className="status red">Em obras · 62%</div>
              <div className="ph-label">IMAGEM · TORRE RESIDENCIAL</div>
            </div>
            <div className="a-emp-info">
              <div className="a-emp-num">N° 01 <span className="sep">/</span> Residencial</div>
              <div className="a-emp-name">Edifício <em>Aurora</em></div>
              <div className="a-emp-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="a-emp-meta">
                <div><span className="k">Unidades</span><span className="v">128 aptos</span></div>
                <div><span className="k">Tipologia</span><span className="v">84–212 m²</span></div>
                <div><span className="k">Bairro</span><span className="v">Pinheiros · SP</span></div>
                <div><span className="k">Entrega</span><span className="v">Q3 · 2027</span></div>
              </div>
            </div>
          </div>

          <div className="a-emp-grid-right">
            <div className="a-emp-card small" style={{gridColumn:'1 / -1'}}>
              <div className="a-emp-img">
                <div className="status">Lançamento</div>
                <div className="ph-label">IMAGEM · TOWER COMERCIAL</div>
              </div>
              <div className="a-emp-info">
                <div className="a-emp-num">N° 02 <span className="sep">/</span> Corporativo</div>
                <div className="a-emp-name">Steel Pier Office</div>
                <div className="a-emp-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>

            <div className="a-emp-card small alt">
              <div className="a-emp-img">
                <div className="status">Pronto</div>
                <div className="ph-label">IMAGEM · CONDOMÍNIO</div>
              </div>
              <div className="a-emp-info">
                <div className="a-emp-num">N° 03</div>
                <div className="a-emp-name">Vivienda<br/>Margens</div>
                <div className="a-emp-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>

            <div className="a-emp-card small">
              <div className="a-emp-img">
                <div className="status">Pré-lançamento</div>
                <div className="ph-label">IMAGEM · LOFTS</div>
              </div>
              <div className="a-emp-info">
                <div className="a-emp-num">N° 04</div>
                <div className="a-emp-name">Fábrica<br/>Plaza</div>
                <div className="a-emp-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="a-manifesto">
        <div className="left">Cap. 02<br/>Manifesto</div>
        <div>
          <h2>
            Há um ofício na engenharia.<br/>
            E há uma <em>poética</em> no concreto<br/>
            quando ele é bem servido.
          </h2>
          <p>
            Steel não constrói imóveis. Steel constrói edifícios — coisas que vão durar quarenta, sessenta, cem anos. Que vão receber gerações. Que vão envelhecer, e envelhecer bem.
          </p>
          <p>
            Por isso, cada projeto começa com o arquiteto certo, segue com o engenheiro presente em obra e termina com a chave entregue ao morador. Sem terceirizações invisíveis. Sem promessas que a planta não sustenta.
          </p>
          <p>
            Trinta e dois anos depois, é a mesma intenção: construir como quem assina.
          </p>
          <div className="sig">
            <div>
              <div className="sig-name">João Steel</div>
              <div>Fundador · Eng. Civil CREA 105.331</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="a-stats">
        <div className="a-stats-inner">
          <div className="a-stat">
            <div className="a-stat-num">32<sup>anos</sup></div>
            <div className="a-stat-label">de história<br/>contínua</div>
          </div>
          <div className="a-stat">
            <div className="a-stat-num">87<sup>+</sup></div>
            <div className="a-stat-label">empreendimentos<br/>entregues</div>
          </div>
          <div className="a-stat">
            <div className="a-stat-num">1.2<small>M</small></div>
            <div className="a-stat-label">m² construídos<br/>e entregues</div>
          </div>
          <div className="a-stat">
            <div className="a-stat-num">4.1<small>k</small></div>
            <div className="a-stat-label">famílias morando<br/>em obra Steel</div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="a-serv">
        <div className="a-sec-head">
          <div>
            <div className="a-eyebrow">Cap. 03 · Atuação</div>
            <h2>Três frentes,<br/>um mesmo <em>rigor.</em></h2>
          </div>
          <div className="head-meta">
            A Steel opera nas três pontas do ciclo construtivo. O mesmo time que incorpora projeta e constrói — o que garante uma cadeia de responsabilidade do papel à laje.
          </div>
        </div>

        <div className="a-serv-grid">
          <div className="a-serv-card">
            <div className="a-serv-num"><span className="red">▲</span> &nbsp; 01 / 03</div>
            <div className="a-serv-icon">
              <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>
            </div>
            <h3>Incorporação<br/><em>residencial.</em></h3>
            <p>
              Da identificação do terreno ao habite-se. Empreendimentos residenciais de alto padrão concebidos com arquitetos parceiros e entregues integralmente pela Steel.
            </p>
            <ul>
              <li>Aquisição e viabilidade de terrenos</li>
              <li>Projeto arquitetônico autoral</li>
              <li>Comercialização e relacionamento</li>
              <li>Entrega assistida pós-chaves</li>
            </ul>
          </div>

          <div className="a-serv-card">
            <div className="a-serv-num"><span className="red">▲</span> &nbsp; 02 / 03</div>
            <div className="a-serv-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="12"/><path d="M3 9l9-6 9 6M9 21v-6h6v6"/></svg>
            </div>
            <h3>Construção<br/><em>pesada.</em></h3>
            <p>
              Obras corporativas, industriais, hospitalares e institucionais. Coordenação completa de canteiro, com BIM, controle de cronograma e segurança em padrão internacional.
            </p>
            <ul>
              <li>Edifícios corporativos &amp; sedes</li>
              <li>Centros de distribuição</li>
              <li>Hospitais e edifícios de saúde</li>
              <li>Edifícios institucionais</li>
            </ul>
          </div>

          <div className="a-serv-card">
            <div className="a-serv-num"><span className="red">▲</span> &nbsp; 03 / 03</div>
            <div className="a-serv-icon">
              <svg viewBox="0 0 24 24"><path d="M3 12l4-4 4 4-4 4z M13 6l8 8M17 2v4M21 2h-4"/></svg>
            </div>
            <h3>Retrofit &amp; <em>reforma</em> de alto padrão.</h3>
            <p>
              Conversão de edifícios históricos, retrofit de empenas e fachadas, e reforma de imóveis de assinatura — respeitando memória e desempenho técnico.
            </p>
            <ul>
              <li>Retrofit técnico de fachadas</li>
              <li>Conversão de uso (industrial → residencial)</li>
              <li>Restauro com aprovação patrimonial</li>
              <li>Reformas executivas e residenciais</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="a-proc">
        <div className="a-sec-head" style={{borderBottomColor:'rgba(28,26,23,0.12)'}}>
          <div>
            <div className="a-eyebrow">Cap. 04 · Processo</div>
            <h2>Do papel à<br/><em>chave.</em></h2>
          </div>
          <div className="head-meta">
            Cinco etapas, conduzidas pelo mesmo time da concepção à entrega. O cliente acompanha cada uma — relatórios mensais, visita técnica trimestral e canal direto com o engenheiro responsável.
          </div>
        </div>

        <div className="a-proc-grid">
          <div className="a-step">
            <div className="a-step-dot">01</div>
            <h4>Estudo &amp; viabilidade</h4>
            <p>Análise de terreno, estudo de massa, viabilidade técnica e financeira.</p>
          </div>
          <div className="a-step">
            <div className="a-step-dot">02</div>
            <h4>Projeto integrado</h4>
            <p>Arquitetura, estrutural, hidráulica e elétrico em BIM coordenado.</p>
          </div>
          <div className="a-step">
            <div className="a-step-dot">03</div>
            <h4>Canteiro &amp; obra</h4>
            <p>Engenheiro residente, segurança nível ISO e cronograma com transparência total.</p>
          </div>
          <div className="a-step">
            <div className="a-step-dot">04</div>
            <h4>Acabamento</h4>
            <p>Acabamentos com fornecedores curados — pedra, madeira, metal — e supervisão própria.</p>
          </div>
          <div className="a-step">
            <div className="a-step-dot">05</div>
            <h4>Entrega &amp; pós</h4>
            <p>Habite-se, assistência técnica de 5 anos e acompanhamento de manutenção.</p>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="a-clients">
        <div className="a-clients-label"><span className="red">●</span> &nbsp; Construímos para</div>
        <div className="a-clients-row">
          <div className="a-client-logo bold">VOLARE</div>
          <div className="a-client-logo">Banco Áureo</div>
          <div className="a-client-logo bold">USINA·SP</div>
          <div className="a-client-logo">Hospital Albano</div>
          <div className="a-client-logo bold">LATERAL</div>
          <div className="a-client-logo">Embaixada NL</div>
          <div className="a-client-logo bold">GRUPO MAIA</div>
        </div>
      </section>

      {/* CTA */}
      <section className="a-cta">
        <div>
          <div className="a-eyebrow" style={{color:'rgba(247,242,233,0.6)'}}>
            <span style={{background:'var(--steel-cream)'}}></span>
            Iniciar conversa
          </div>
          <h2>Tem um<br/>terreno, um <em>projeto,</em><br/>uma ideia?</h2>
          <p>Conte para a Steel. Em até 72 horas, o time de incorporação retorna com um estudo preliminar — sem custo, sem compromisso.</p>
        </div>
        <div className="right">
          <a className="a-btn-cta">
            Falar com a Steel
            <span className="arrow-circle">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </a>
          <div className="phone">+55 11 4002 8922</div>
          <div className="email">contato@steelconstrucoes.com.br</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="a-foot">
        <div className="a-foot-grid">
          <div>
            <div className="brand-word">STEEL</div>
            <div className="brand-sub">Construções &amp; Empreendimentos · desde 1994</div>
            <div className="brand-tag">
              "Construir como quem assina." — uma frase que organiza tudo o que fazemos há trinta e dois anos.
            </div>
          </div>
          <div className="a-foot-col">
            <h4>Navegue</h4>
            <ul>
              <li>Empreendimentos</li>
              <li>Construções</li>
              <li>A Steel</li>
              <li>Processo</li>
              <li>Imprensa</li>
            </ul>
          </div>
          <div className="a-foot-col">
            <h4>Para você</h4>
            <ul>
              <li>Investidores</li>
              <li>Imprensa</li>
              <li>Trabalhe conosco</li>
              <li>Pós-obra</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
          <div className="a-foot-col">
            <h4>Contato</h4>
            <ul>
              <li>+55 11 4002 8922</li>
              <li>contato@steelconstrucoes.com.br</li>
              <li>Av. Brigadeiro Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li>
              <li>@steel.construcoes</li>
            </ul>
          </div>
        </div>
        <div className="a-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"Construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.ConcretoDirection = ConcretoDirection;

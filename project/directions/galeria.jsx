/* global React */

// ─── Direction B · "Galeria" ─────────────────────────────────────────
// Cinematic premium. Dark dominant, photography-forward, red as a single
// sustained note. Tone: a contemporary architecture monograph at dusk.
// Width: 1440. Scoped to .steel-b.

const GaleriaCSS = `
.steel-b {
  font-family: 'Manrope', system-ui, sans-serif;
  color: var(--steel-cream);
  background: var(--steel-black);
  font-size: 14.5px;
  line-height: 1.6;
  width: 100%;
}
.steel-b .ff-serif { font-family: 'Instrument Serif', serif; font-weight: 400; }

/* ── Nav ── */
.b-nav {
  background: transparent;
  padding: 28px 56px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 10;
}
.b-nav .logo {
  display: flex; align-items: center; gap: 14px;
}
.b-nav .logo-mark {
  width: 36px; height: 36px;
  background: var(--steel-red);
  position: relative;
}
.b-nav .logo-mark::before, .b-nav .logo-mark::after {
  content: ''; position: absolute;
  background: var(--steel-cream);
}
.b-nav .logo-mark::before { left: 18%; right: 18%; top: 46%; height: 8%; transform: rotate(-45deg); transform-origin: center; }
.b-nav .logo-mark::after  { left: 18%; right: 18%; top: 46%; height: 8%; transform: rotate(45deg); transform-origin: center; }
.b-nav .logo-text { display: flex; flex-direction: column; gap: 1px; }
.b-nav .logo-word {
  font-family: 'Anton', sans-serif;
  font-size: 22px;
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--steel-cream);
}
.b-nav .logo-sub {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: rgba(241,235,224,0.5);
  text-transform: uppercase;
}
.b-nav ul {
  display: flex; gap: 32px;
  justify-self: center;
}
.b-nav ul a {
  font-size: 13px;
  font-weight: 500;
  color: rgba(241,235,224,0.7);
  transition: color .15s;
}
.b-nav ul a.active, .b-nav ul a:hover { color: var(--steel-cream); }
.b-nav .nav-r { display: flex; gap: 14px; align-items: center; }
.b-nav .nav-r .lang {
  font-size: 11px; letter-spacing: 0.18em;
  color: rgba(241,235,224,0.5);
}
.b-btn {
  background: var(--steel-cream);
  color: var(--steel-black);
  padding: 12px 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
  border-radius: 100px;
  transition: background .15s;
}
.b-btn:hover { background: var(--steel-red); color: var(--steel-cream); }
.b-btn-outline {
  background: transparent;
  color: var(--steel-cream);
  border: 1px solid rgba(241,235,224,0.35);
  padding: 12px 22px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
  border-radius: 100px;
}

/* ── Hero ── */
.b-hero {
  position: relative;
  height: 880px;
  background: linear-gradient(160deg, #25201a 0%, #0f0e0d 70%);
  overflow: hidden;
}
.b-hero::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 70% 30%, rgba(214,32,39,0.18) 0%, transparent 50%),
    repeating-linear-gradient(125deg, transparent 0 60px, rgba(255,255,255,0.012) 60px 61px);
}
.b-hero::after {
  /* dark gradient to anchor text */
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(15,14,13,0.7) 0%, transparent 35%, transparent 60%, rgba(15,14,13,0.5) 100%);
}
.b-hero-skyline {
  position: absolute;
  inset: auto 0 0 0;
  height: 70%;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 0;
  pointer-events: none;
}
.b-tower {
  background: linear-gradient(to top, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border-left: 1px solid rgba(255,255,255,0.02);
  border-right: 1px solid rgba(255,255,255,0.02);
  position: relative;
}
.b-tower::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(90deg, transparent 0 6px, rgba(255,235,180,0.04) 6px 14px, transparent 14px 22px, rgba(255,235,180,0.06) 22px 30px, transparent 30px 40px);
  background-size: 40px 16px;
}
.b-hero-content {
  position: relative;
  z-index: 5;
  padding: 200px 56px 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.b-hero-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.b-hero-eyebrow {
  display: inline-flex; align-items: center; gap: 14px;
  font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase;
  color: rgba(241,235,224,0.7);
}
.b-hero-eyebrow .line { width: 36px; height: 1px; background: var(--steel-red); }
.b-hero-eyebrow .red { color: var(--steel-red-lt); }
.b-hero h1 {
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 168px;
  line-height: 0.92;
  letter-spacing: -0.035em;
  color: var(--steel-cream);
  margin-top: 24px;
}
.b-hero h1 em { font-style: italic; color: var(--steel-red-lt); font-weight: 400; }
.b-hero-toolbar {
  display: flex; gap: 56px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.55);
}
.b-hero-toolbar .k { color: rgba(241,235,224,0.4); display: block; margin-bottom: 4px; }
.b-hero-toolbar .v { color: var(--steel-cream); font-family: 'Manrope', sans-serif; font-size: 14px; letter-spacing: 0; text-transform: none; font-weight: 500; }
.b-hero-bottom {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: end;
  gap: 64px;
}
.b-hero-bottom .lede {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 26px;
  line-height: 1.4;
  color: rgba(241,235,224,0.85);
  max-width: 600px;
}
.b-hero-cta-row {
  display: flex; gap: 12px;
  justify-self: end;
}
.b-hero-bullet {
  position: absolute;
  bottom: 80px; right: 56px;
  width: 18px; height: 18px;
  background: var(--steel-red);
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(214,32,39,0.2);
}

/* ── Scroll/marquee strip ── */
.b-strip {
  background: var(--steel-coal);
  padding: 22px 56px;
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid var(--steel-border-d);
  border-bottom: 1px solid var(--steel-border-d);
}
.b-strip-row { display: flex; gap: 56px; align-items: center; }
.b-strip-row .item {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 22px;
  color: var(--steel-cream);
}
.b-strip-row .sep { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--steel-red); }
.b-strip-mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
}

/* ── Featured project (full bleed) ── */
.b-featured {
  position: relative;
  height: 720px;
  background: linear-gradient(180deg, #2a2622 0%, #0f0e0d 100%);
  overflow: hidden;
  border-bottom: 1px solid var(--steel-border-d);
}
.b-featured::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(214,32,39,0.12) 0%, transparent 55%);
}
.b-featured::after {
  content: 'IMAGEM · OBRA EM DESTAQUE · EDIFÍCIO AURORA';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.32em;
  color: rgba(241,235,224,0.18);
}
.b-featured-inner {
  position: relative; z-index: 2;
  padding: 64px 56px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.b-featured-tag {
  display: inline-flex;
  background: rgba(214,32,39,0.15);
  border: 1px solid rgba(214,32,39,0.3);
  color: var(--steel-red-lt);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 100px;
  width: fit-content;
  align-items: center; gap: 10px;
}
.b-featured-tag .dot { width: 6px; height: 6px; background: var(--steel-red); border-radius: 50%; }
.b-featured-h {
  font-family: 'Instrument Serif', serif;
  font-size: 120px;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
  margin-top: 24px;
}
.b-featured-h em { font-style: italic; color: var(--steel-red-lt); }
.b-featured-foot {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 64px;
  align-items: end;
}
.b-featured-foot p {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(241,235,224,0.78);
  max-width: 540px;
}
.b-featured-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 36px;
}
.b-featured-data .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
  margin-bottom: 4px;
}
.b-featured-data .v {
  font-family: 'Instrument Serif', serif;
  font-size: 26px;
  color: var(--steel-cream);
  letter-spacing: -0.005em;
}
.b-featured-data .v em { font-style: italic; color: var(--steel-red-lt); font-size: 18px; }

/* ── Portfolio grid ── */
.b-section {
  padding: 120px 56px;
  background: var(--steel-black);
}
.b-sec-head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 64px;
  align-items: end;
  padding-bottom: 72px;
}
.b-sec-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  display: flex; align-items: center; gap: 12px;
}
.b-sec-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--steel-red); }
.b-sec-head h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 82px;
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: var(--steel-cream);
}
.b-sec-head h2 em { font-style: italic; color: var(--steel-red-lt); }
.b-sec-head .filters {
  display: flex; gap: 8px;
  align-items: center;
  justify-self: end;
}
.b-filter {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 8px 16px;
  border: 1px solid var(--steel-border-d);
  border-radius: 100px;
  color: rgba(241,235,224,0.6);
}
.b-filter.active { background: var(--steel-cream); color: var(--steel-black); border-color: var(--steel-cream); }

.b-port-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 20px;
}
.b-port-card {
  position: relative;
  overflow: hidden;
}
.b-port-card .ph {
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, #3e372f 0%, #1a1816 100%);
}
.b-port-card.lead .ph { aspect-ratio: 4/5.4; }
.b-port-card.tall .ph { aspect-ratio: 4/5.4; }
.b-port-card.wide .ph { aspect-ratio: 4/5.4; }
.b-port-card .ph::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%),
    repeating-linear-gradient(60deg, transparent 0 80px, rgba(255,255,255,0.02) 80px 81px);
}
.b-port-card .ph::after {
  content: attr(data-label);
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.16);
  white-space: nowrap;
}
.b-port-card.b-bg-1 .ph { background: linear-gradient(155deg, #4a423a 0%, #1a1815 100%); }
.b-port-card.b-bg-2 .ph { background: linear-gradient(170deg, #5a4438 0%, #2a1f18 100%); }
.b-port-card.b-bg-3 .ph { background: linear-gradient(160deg, #38332c 0%, #14130f 100%); }
.b-port-card .badge {
  position: absolute;
  top: 22px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.7);
  background: rgba(15,14,13,0.55);
  border: 1px solid rgba(241,235,224,0.15);
  padding: 7px 12px;
  border-radius: 100px;
  backdrop-filter: blur(8px);
}
.b-port-card .badge .dot { display: inline-block; width: 6px; height: 6px; background: var(--steel-red); border-radius: 50%; margin-right: 8px; vertical-align: middle; }
.b-port-card .num {
  position: absolute;
  top: 22px; right: 22px;
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 30px;
  color: rgba(241,235,224,0.4);
}
.b-port-card .info {
  position: absolute;
  inset: auto 0 0 0;
  padding: 28px;
  background: linear-gradient(to top, rgba(15,14,13,0.92) 0%, rgba(15,14,13,0.5) 70%, transparent 100%);
}
.b-port-card .info h3 {
  font-family: 'Instrument Serif', serif;
  font-size: 32px;
  line-height: 1.05;
  color: var(--steel-cream);
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}
.b-port-card.lead .info h3 { font-size: 44px; }
.b-port-card .info h3 em { font-style: italic; color: var(--steel-red-lt); }
.b-port-card .info .meta {
  display: flex; gap: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.6);
  align-items: center;
}
.b-port-card .info .meta .sep { color: var(--steel-red); }

.b-port-arrow {
  position: absolute;
  top: 22px; right: 22px;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--steel-red);
  display: flex; align-items: center; justify-content: center;
  z-index: 2;
}
.b-port-arrow svg { width: 16px; height: 16px; stroke: var(--steel-cream); }
.b-port-row2 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px; }

/* ── Manifesto / sobre ── */
.b-manifesto {
  background: var(--steel-coal);
  padding: 140px 56px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: start;
  border-top: 1px solid var(--steel-border-d);
}
.b-manifesto .left .a-eyebrow,
.b-manifesto .left .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  margin-bottom: 24px;
}
.b-manifesto .left .seal {
  width: 180px; height: 180px;
  border: 1px solid rgba(241,235,224,0.2);
  border-radius: 50%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 20px;
  color: var(--steel-cream);
  margin-top: 32px;
  text-align: center;
  line-height: 1.2;
  position: relative;
}
.b-manifesto .left .seal::before {
  content: ''; position: absolute; inset: 8px;
  border: 1px solid rgba(241,235,224,0.1);
  border-radius: 50%;
}
.b-manifesto .left .seal span {
  font-family: 'JetBrains Mono', monospace;
  font-style: normal;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--steel-red-lt);
  margin-top: 6px;
}
.b-manifesto h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 64px;
  line-height: 1.05;
  color: var(--steel-cream);
  margin-bottom: 32px;
  letter-spacing: -0.015em;
}
.b-manifesto h2 em { font-style: italic; color: var(--steel-red-lt); }
.b-manifesto .body p {
  font-size: 16.5px;
  color: rgba(241,235,224,0.72);
  line-height: 1.8;
  margin-bottom: 20px;
  max-width: 640px;
}
.b-pillars {
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.b-pillar {
  padding: 28px 0;
  border-top: 1px solid var(--steel-border-d);
}
.b-pillar .n {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--steel-red-lt);
  margin-bottom: 12px;
}
.b-pillar h4 {
  font-family: 'Instrument Serif', serif;
  font-size: 24px;
  color: var(--steel-cream);
  margin-bottom: 10px;
  letter-spacing: -0.005em;
}
.b-pillar p {
  font-size: 13.5px;
  color: rgba(241,235,224,0.6);
  line-height: 1.65;
}

/* ── Stats ── */
.b-stats {
  background: var(--steel-black);
  padding: 100px 56px;
  border-top: 1px solid var(--steel-border-d);
}
.b-stats-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  margin-bottom: 32px;
  display: flex; gap: 12px; align-items: center;
}
.b-stats-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--steel-red); }
.b-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--steel-border-d);
}
.b-stat {
  background: var(--steel-black);
  padding: 36px 32px;
}
.b-stat .n {
  font-family: 'Instrument Serif', serif;
  font-size: 96px;
  line-height: 1;
  color: var(--steel-cream);
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}
.b-stat .n em { font-style: italic; color: var(--steel-red-lt); font-size: 38px; }
.b-stat .l {
  font-size: 13px;
  color: rgba(241,235,224,0.58);
  line-height: 1.55;
  max-width: 200px;
}

/* ── Processo  ── */
.b-proc {
  background: var(--steel-coal);
  padding: 120px 56px;
  border-top: 1px solid var(--steel-border-d);
}
.b-proc-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;
  align-items: end;
}
.b-proc-head h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 64px;
  line-height: 1.02;
  color: var(--steel-cream);
}
.b-proc-head h2 em { font-style: italic; color: var(--steel-red-lt); }
.b-proc-head p {
  font-size: 15px;
  color: rgba(241,235,224,0.68);
  line-height: 1.75;
  max-width: 460px;
}
.b-proc-list {
  display: flex; flex-direction: column;
}
.b-proc-item {
  display: grid;
  grid-template-columns: 80px 1fr 1.4fr auto;
  gap: 48px;
  padding: 32px 0;
  border-top: 1px solid var(--steel-border-d);
  align-items: center;
  transition: background .15s;
}
.b-proc-item:last-child { border-bottom: 1px solid var(--steel-border-d); }
.b-proc-item:hover { background: rgba(214,32,39,0.05); }
.b-proc-item .n {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 56px;
  color: var(--steel-red-lt);
  letter-spacing: -0.02em;
}
.b-proc-item h4 {
  font-family: 'Instrument Serif', serif;
  font-size: 32px;
  color: var(--steel-cream);
  letter-spacing: -0.01em;
}
.b-proc-item p { font-size: 14px; color: rgba(241,235,224,0.62); line-height: 1.65; max-width: 480px; }
.b-proc-item .dur {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
  text-align: right;
}

/* ── Cliente / testimonial ── */
.b-test {
  background: var(--steel-black);
  padding: 120px 56px;
  border-top: 1px solid var(--steel-border-d);
}
.b-test-quote {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 56px;
  line-height: 1.15;
  color: var(--steel-cream);
  letter-spacing: -0.015em;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}
.b-test-quote::before {
  content: '"';
  font-size: 140px;
  color: var(--steel-red);
  display: block;
  line-height: 0.6;
  margin-bottom: 16px;
}
.b-test-quote em { color: var(--steel-red-lt); }
.b-test-attr {
  max-width: 1100px;
  margin: 56px auto 0;
  display: flex; align-items: center; gap: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.55);
}
.b-test-attr::before {
  content: ''; width: 40px; height: 1px; background: var(--steel-red);
}

/* ── CTA ── */
.b-cta {
  background: linear-gradient(140deg, #d62027 0%, #8a1418 60%, #0f0e0d 100%);
  padding: 140px 56px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--steel-border-d);
}
.b-cta::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(45deg, transparent 0 40px, rgba(0,0,0,0.04) 40px 41px);
}
.b-cta-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
  align-items: center;
}
.b-cta-h {
  font-family: 'Instrument Serif', serif;
  font-size: 120px;
  line-height: 0.95;
  color: var(--steel-cream);
  letter-spacing: -0.025em;
}
.b-cta-h em { font-style: italic; color: var(--steel-black); }
.b-cta-card {
  background: var(--steel-cream);
  color: var(--steel-black);
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.4);
}
.b-cta-card .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red);
  margin-bottom: 18px;
}
.b-cta-card h3 {
  font-family: 'Instrument Serif', serif;
  font-size: 36px;
  line-height: 1.1;
  margin-bottom: 16px;
  color: var(--steel-black);
}
.b-cta-card h3 em { font-style: italic; color: var(--steel-red); }
.b-cta-card p { font-size: 14px; color: var(--steel-graphite); line-height: 1.65; margin-bottom: 28px; }
.b-cta-row { display: flex; flex-direction: column; gap: 8px; padding: 24px 0; border-top: 1px solid rgba(15,14,13,0.1); }
.b-cta-row .k { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase; }
.b-cta-row .v { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 24px; color: var(--steel-black); }
.b-cta-btn {
  display: block;
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 24px;
  border-radius: 100px;
}

/* ── Footer ── */
.b-foot {
  background: var(--steel-black);
  padding: 80px 56px 32px;
  border-top: 1px solid var(--steel-border-d);
}
.b-foot-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 56px;
  padding-bottom: 56px;
}
.b-foot .brand-word {
  font-family: 'Anton', sans-serif;
  font-size: 88px;
  line-height: 0.95;
  color: var(--steel-cream);
  letter-spacing: 0.02em;
}
.b-foot .brand-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 28px;
}
.b-foot .brand-q {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 22px;
  color: rgba(241,235,224,0.65);
  max-width: 360px;
  line-height: 1.4;
}
.b-foot-col h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 24px;
}
.b-foot-col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.b-foot-bottom {
  padding-top: 32px;
  border-top: 1px solid var(--steel-border-d);
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
`;

function Skyline() {
  // Procedural-looking faint skyline of towers behind the hero
  const towers = [
    { h: 32, w: 60 }, { h: 48, w: 80 }, { h: 65, w: 70 }, { h: 38, w: 50 },
    { h: 78, w: 90 }, { h: 92, w: 110, accent: true }, { h: 68, w: 84 },
    { h: 50, w: 64 }, { h: 88, w: 96 }, { h: 42, w: 56 }, { h: 70, w: 78 },
    { h: 36, w: 48 },
  ];
  return (
    <div className="b-hero-skyline">
      {towers.map((t, i) => (
        <div key={i}
          className="b-tower"
          style={{
            width: `${t.w}px`,
            height: `${t.h}%`,
            background: t.accent
              ? 'linear-gradient(to top, rgba(214,32,39,0.18), rgba(214,32,39,0.04) 60%, transparent)'
              : undefined,
          }}
        />
      ))}
    </div>
  );
}

function GaleriaDirection() {
  return (
    <div className="steel steel-b">
      <style>{GaleriaCSS}</style>

      {/* Hero */}
      <section className="b-hero">
        <Skyline />
        <nav className="b-nav">
          <a className="logo">
            <div className="logo-mark"></div>
            <div className="logo-text">
              <span className="logo-word">STEEL</span>
              <span className="logo-sub">Construções &amp; Empreendimentos</span>
            </div>
          </a>
          <ul>
            <li><a className="active">Empreendimentos</a></li>
            <li><a>Construções</a></li>
            <li><a>Sobre</a></li>
            <li><a>Processo</a></li>
            <li><a>Contato</a></li>
          </ul>
          <div className="nav-r">
            <span className="lang">PT · EN</span>
            <a className="b-btn">Iniciar conversa →</a>
          </div>
        </nav>

        <div className="b-hero-content">
          <div className="b-hero-top">
            <div className="b-hero-eyebrow"><span className="line"></span><span><span className="red">●</span> Edição 26 · Portfólio em curso</span></div>
            <div className="b-hero-toolbar">
              <div><span className="k">Desde</span><span className="v">1994</span></div>
              <div><span className="k">Em obra</span><span className="v">7 empreendimentos</span></div>
              <div><span className="k">Praças</span><span className="v">SP · MG · DF</span></div>
            </div>
          </div>

          <div>
            <h1>
              Steel<em> ·</em><br/>
              edifícios que<br/>
              <em>permanecem.</em>
            </h1>
            <div className="b-hero-bottom" style={{marginTop: '48px'}}>
              <p className="lede">
                Construtora e incorporadora de alto padrão. Há três décadas projetando, construindo e entregando obras que envelhecem bem — porque foram pensadas para durar mais do que o ciclo de uma campanha.
              </p>
              <div className="b-hero-cta-row">
                <a className="b-btn-outline">Ver portfólio</a>
                <a className="b-btn">Falar com a Steel →</a>
              </div>
            </div>
          </div>
        </div>
        <div className="b-hero-bullet"></div>
      </section>

      {/* Strip */}
      <div className="b-strip">
        <div className="b-strip-row">
          <span className="item">incorporação</span>
          <span className="sep">×</span>
          <span className="item" style={{fontStyle:'italic'}}>construção pesada</span>
          <span className="sep">×</span>
          <span className="item">retrofit</span>
          <span className="sep">×</span>
          <span className="item" style={{fontStyle:'italic'}}>obras corporativas</span>
        </div>
        <div className="b-strip-mono">SCR-2026 / E.04 / VOL.01</div>
      </div>

      {/* Featured project full bleed */}
      <section className="b-featured">
        <div className="b-featured-inner">
          <div className="b-featured-tag"><span className="dot"></span>Em obras · entrega Q3 2027</div>
          <h2 className="b-featured-h">
            Edifício <em>Aurora.</em><br/>
            Pinheiros, SP.
          </h2>
          <div className="b-featured-foot">
            <p>
              128 apartamentos de 84 a 212m² em torre única de 24 pavimentos. Arquitetura assinada pelo escritório Dario Veloso, projeto BIM coordenado em LOD 350, fachada ventilada em concreto pigmentado e steel-framing.
            </p>
            <div className="b-featured-data">
              <div><div className="k">Unidades</div><div className="v">128 <em>aptos</em></div></div>
              <div><div className="k">Tipologia</div><div className="v">84–212 <em>m²</em></div></div>
              <div><div className="k">Pavimentos</div><div className="v">24 <em>andares</em></div></div>
              <div><div className="k">Lançamento</div><div className="v">Out · <em>2025</em></div></div>
            </div>
            <a className="b-btn">Conhecer Aurora →</a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="b-section">
        <div className="b-sec-head">
          <div className="b-sec-eyebrow">Portfólio · 2026</div>
          <h2>
            Empreendimentos<br/>
            em <em>curso.</em>
          </h2>
          <div className="filters">
            <span className="b-filter active">Tudo</span>
            <span className="b-filter">Residencial</span>
            <span className="b-filter">Corporativo</span>
            <span className="b-filter">Retrofit</span>
          </div>
        </div>

        <div className="b-port-grid">
          <div className="b-port-card lead b-bg-1">
            <div className="ph" data-label="IMAGEM · STEEL PIER OFFICE">
              <span className="badge"><span className="dot"></span>Lançamento</span>
              <div className="b-port-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="info">
                <h3>Steel Pier<br/><em>Office Tower</em></h3>
                <div className="meta">
                  <span>N° 02</span><span className="sep">/</span>
                  <span>Corporativo · 18 andares</span><span className="sep">/</span>
                  <span>Belo Horizonte</span>
                </div>
              </div>
            </div>
          </div>

          <div className="b-port-card tall b-bg-2">
            <div className="ph" data-label="IMAGEM · VIVIENDA MARGENS">
              <span className="badge">Pronto</span>
              <div className="info">
                <h3>Vivienda <em>Margens</em></h3>
                <div className="meta"><span>N° 03</span><span className="sep">/</span><span>Casas · 14 un.</span></div>
              </div>
            </div>
          </div>

          <div className="b-port-card wide b-bg-3">
            <div className="ph" data-label="IMAGEM · FÁBRICA PLAZA">
              <span className="badge"><span className="dot"></span>Pré-lançamento</span>
              <div className="info">
                <h3>Fábrica <em>Plaza</em></h3>
                <div className="meta"><span>N° 04</span><span className="sep">/</span><span>Lofts · 62 un.</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="b-port-row2">
          <div className="b-port-card b-bg-2">
            <div className="ph" data-label="IMAGEM · CD LOGÍSTICA">
              <span className="badge">Entregue</span>
              <div className="info">
                <h3>CD <em>Logística Sul</em></h3>
                <div className="meta"><span>N° 05</span><span className="sep">/</span><span>Industrial · 18.000m²</span></div>
              </div>
            </div>
          </div>
          <div className="b-port-card b-bg-3">
            <div className="ph" data-label="IMAGEM · HOSPITAL ALBANO">
              <span className="badge">Em obras</span>
              <div className="info">
                <h3>Hospital <em>Albano</em></h3>
                <div className="meta"><span>N° 06</span><span className="sep">/</span><span>Saúde · ampliação</span></div>
              </div>
            </div>
          </div>
          <div className="b-port-card b-bg-1">
            <div className="ph" data-label="IMAGEM · SEDE VOLARE">
              <span className="badge">Entregue</span>
              <div className="info">
                <h3>Sede <em>Volare</em></h3>
                <div className="meta"><span>N° 07</span><span className="sep">/</span><span>Corporativo · 12 andares</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="b-manifesto">
        <div className="left">
          <div className="label">Cap. 02 · Sobre</div>
          <div className="seal">
            Construir<br/>como quem<br/>assina<br/>
            <span>— Steel desde 1994</span>
          </div>
        </div>
        <div>
          <h2>
            Há um ofício na engenharia.<br/>
            E uma <em>poética</em><br/>
            no concreto bem servido.
          </h2>
          <div className="body">
            <p>
              A Steel é o que sobrou da geração que construía com a mão na argamassa. Trinta e dois anos depois, ainda somos uma engenharia familiar — verticalizada, presente em obra, com o engenheiro responsável atendendo o telefone do cliente final.
            </p>
            <p>
              Não terceirizamos compromisso. Não economizamos em fundação. Não vendemos planta que a obra não entrega. O que assinamos é o que construímos — e isso, há três décadas, tem se mostrado uma boa forma de envelhecer.
            </p>
          </div>
          <div className="b-pillars">
            <div className="b-pillar">
              <div className="n">01</div>
              <h4>Engenharia presente</h4>
              <p>Engenheiro residente em cada canteiro. Visita técnica trimestral do diretor de obra. Sem terceirizações invisíveis.</p>
            </div>
            <div className="b-pillar">
              <div className="n">02</div>
              <h4>Projeto verticalizado</h4>
              <p>Da viabilidade ao habite-se, sob o mesmo CNPJ. Cadeia de responsabilidade do papel à laje, sem repasse.</p>
            </div>
            <div className="b-pillar">
              <div className="n">03</div>
              <h4>Materialidade honesta</h4>
              <p>Concreto aparente, aço, pedra, madeira. Acabamento que envelhece — não que vende foto de lançamento.</p>
            </div>
            <div className="b-pillar">
              <div className="n">04</div>
              <h4>Garantia estendida</h4>
              <p>5 anos de assistência técnica integral pós-chaves. Manutenção planejada nos 25 anos seguintes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="b-stats">
        <div className="b-stats-eyebrow">Números · 1994—2026</div>
        <div className="b-stats-row">
          <div className="b-stat">
            <div className="n">32<em> anos</em></div>
            <div className="l">de história contínua, sob a mesma direção fundadora</div>
          </div>
          <div className="b-stat">
            <div className="n">87<em>+</em></div>
            <div className="l">empreendimentos entregues, do residencial ao industrial</div>
          </div>
          <div className="b-stat">
            <div className="n">1,2<em> M m²</em></div>
            <div className="l">de área construída e entregue em três décadas de operação</div>
          </div>
          <div className="b-stat">
            <div className="n">4,1<em>k</em></div>
            <div className="l">famílias morando hoje em um endereço Steel</div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="b-proc">
        <div className="b-proc-head">
          <div>
            <div className="b-sec-eyebrow" style={{marginBottom:'24px'}}>Cap. 04 · Processo</div>
            <h2>Do <em>papel</em><br/>à chave.</h2>
          </div>
          <p>
            Conduzimos cada empreendimento com a mesma equipe da concepção à entrega — sem repassar etapas. O cliente acompanha tudo por relatório mensal, visita trimestral e canal direto com o engenheiro responsável.
          </p>
        </div>

        <div className="b-proc-list">
          <div className="b-proc-item">
            <div className="n">01</div>
            <h4>Viabilidade</h4>
            <p>Análise de terreno, estudo de massa, viabilidade técnica, financeira e regulatória.</p>
            <div className="dur">2–4 semanas</div>
          </div>
          <div className="b-proc-item">
            <div className="n">02</div>
            <h4>Projeto integrado</h4>
            <p>Arquitetura assinada, projeto estrutural, hidráulica e elétrica em BIM coordenado.</p>
            <div className="dur">4–7 meses</div>
          </div>
          <div className="b-proc-item">
            <div className="n">03</div>
            <h4>Canteiro &amp; obra</h4>
            <p>Engenheiro residente, segurança ISO 45001, relatório mensal e cronograma transparente.</p>
            <div className="dur">18–36 meses</div>
          </div>
          <div className="b-proc-item">
            <div className="n">04</div>
            <h4>Acabamentos</h4>
            <p>Pedra, madeira, metal — fornecedores curados, supervisão própria, inspeção em três níveis.</p>
            <div className="dur">3–6 meses</div>
          </div>
          <div className="b-proc-item">
            <div className="n">05</div>
            <h4>Entrega &amp; assistência</h4>
            <p>Habite-se, vistoria assistida, 5 anos de cobertura técnica e plano de manutenção decenal.</p>
            <div className="dur">contínuo</div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="b-test">
        <div className="b-test-quote">
          A Steel entrega como prometeu. <em>Trinta e dois meses depois</em> a obra ficou exatamente como o caderno comercial mostrou — e o engenheiro que assinou o contrato <em>foi o mesmo que entregou as chaves.</em>
        </div>
        <div className="b-test-attr">
          Renata Alvim · Diretora Imobiliária · Grupo Maia
        </div>
      </section>

      {/* CTA */}
      <section className="b-cta">
        <div className="b-cta-grid">
          <h2 className="b-cta-h">
            Conversemos<br/>
            sobre o seu<br/>
            <em>próximo edifício.</em>
          </h2>
          <div className="b-cta-card">
            <div className="label">● Iniciar conversa</div>
            <h3>Um <em>estudo preliminar,</em> em até 72 horas.</h3>
            <p>
              Conte para a Steel o que existe — um terreno, um projeto, uma ideia. O time de incorporação retorna com um estudo de viabilidade sem custo e sem compromisso.
            </p>
            <div className="b-cta-row">
              <div className="k">Telefone</div>
              <div className="v">+55 11 4002 8922</div>
            </div>
            <div className="b-cta-row">
              <div className="k">E-mail</div>
              <div className="v">contato@steelconstrucoes.com.br</div>
            </div>
            <a className="b-cta-btn">Iniciar conversa →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="b-foot">
        <div className="b-foot-top">
          <div>
            <div className="brand-word">STEEL</div>
            <div className="brand-sub">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="brand-q">
              "Edifícios que permanecem — porque foram pensados para durar mais do que o ciclo de uma campanha."
            </div>
          </div>
          <div className="b-foot-col">
            <h4>Navegue</h4>
            <ul>
              <li>Empreendimentos</li>
              <li>Construções</li>
              <li>A Steel</li>
              <li>Processo</li>
              <li>Imprensa</li>
            </ul>
          </div>
          <div className="b-foot-col">
            <h4>Relação</h4>
            <ul>
              <li>Investidores</li>
              <li>Imprensa &amp; press kit</li>
              <li>Trabalhe conosco</li>
              <li>Pós-obra</li>
            </ul>
          </div>
          <div className="b-foot-col">
            <h4>Contato</h4>
            <ul>
              <li>+55 11 4002 8922</li>
              <li>contato@steelconstrucoes.com.br</li>
              <li>Av. Brigadeiro Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li>
            </ul>
          </div>
        </div>
        <div className="b-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.GaleriaDirection = GaleriaDirection;

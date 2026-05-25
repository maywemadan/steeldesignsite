/* global React */

// ─── A Steel · Sobre · Variação A "Aço Manifesto" ────────────────────
// Manifesto estruturado: hero com frase grande, valores em grid, timeline
// 1994→2026, equipe-chave em grid técnico, números, depoimento, CTA.
// Width: 1440. Scoped to .stl-ata.

const AboutACSS = `
.stl-ata {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.6;
  width: 100%;
}

.ata-top {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.ata-top .l { display: flex; gap: 22px; }
.ata-top .l .red { color: var(--steel-red-lt); }
.ata-top .r { display: flex; gap: 20px; color: rgba(241,235,224,0.7); }

.ata-nav {
  background: var(--steel-cream);
  padding: 22px 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 48px;
  align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.ata-nav .logo { display: flex; align-items: center; gap: 14px; }
.ata-mark { width: 44px; height: 44px; background: var(--steel-red); position: relative; }
.ata-mark::before { content: ''; position: absolute; left: 14%; right: 14%; top: 46%; height: 7%; background: var(--steel-cream); transform: rotate(-45deg); }
.ata-mark .ca { position: absolute; top: 16%; right: 16%; width: 28%; height: 28%; background: var(--steel-cream); }
.ata-mark .cb { position: absolute; bottom: 14%; left: 14%; width: 22%; height: 22%; background: var(--steel-cream); }
.ata-nav .lw { font-family: 'Anton', sans-serif; font-size: 28px; letter-spacing: 0.02em; color: var(--steel-black); line-height: 1; }
.ata-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase; margin-top: 4px; }
.ata-nav ul { display: flex; gap: 26px; justify-self: center; }
.ata-nav ul a { font-size: 13px; font-weight: 500; color: var(--steel-ink); padding: 8px 4px; border-bottom: 2px solid transparent; }
.ata-nav ul a.active { border-bottom-color: var(--steel-red); }
.ata-nav .act { display: flex; gap: 12px; align-items: center; }
.ata-btn-red {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 13px 22px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
}
.ata-btn-outline {
  background: transparent; color: var(--steel-ink);
  border: 1.5px solid var(--steel-ink);
  padding: 11.5px 20px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
}
.ata-btn-black {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 14px 24px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}

/* Hero */
.ata-hero {
  background: var(--steel-cream);
  padding: 64px 48px 80px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: end;
  border-bottom: 1px solid var(--steel-border);
}
.ata-hero .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
}
.ata-hero .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.ata-hero h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 108px;
  line-height: 0.94;
  letter-spacing: -0.028em;
  color: var(--steel-black);
}
.ata-hero h1 em { font-style: italic; color: var(--steel-red); }
.ata-hero .lede {
  font-size: 17.5px;
  line-height: 1.7;
  color: var(--steel-graphite);
  max-width: 460px;
  margin-bottom: 24px;
}
.ata-hero .lede strong { color: var(--steel-ink); font-weight: 600; }
.ata-hero .meta-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 18px 22px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--steel-border);
}
.ata-hero .meta-grid .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--steel-stone);
  text-transform: uppercase;
  margin-bottom: 4px;
}
.ata-hero .meta-grid .v {
  font-family: 'DM Serif Display', serif;
  font-size: 22px;
  color: var(--steel-ink);
  letter-spacing: -0.012em;
}
.ata-hero .meta-grid .v em { font-style: italic; color: var(--steel-red); font-size: 14px; }

/* Big image strip */
.ata-img {
  background: var(--steel-cream);
}
.ata-img-frame {
  margin: 0 48px;
  position: relative;
  aspect-ratio: 16/7;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  border: 1px solid var(--steel-ink);
  border-top: none;
  overflow: hidden;
}
.ata-img-frame::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 60% 30%, rgba(142,27,34,0.12), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.ata-img-frame::after {
  content: 'IMAGEM · CANTEIRO · ENGENHEIRO RESIDENTE · STEEL 2025';
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.32em;
  color: rgba(241,235,224,0.18);
}
.ata-img-frame .corner {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
}
.ata-img-frame .corner.tl { top: 22px; left: 22px; display: flex; align-items: center; gap: 10px; }
.ata-img-frame .corner.tl .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; }
.ata-img-frame .corner.tr { top: 22px; right: 22px; }
.ata-img-frame .corner.bl { bottom: 22px; left: 22px; display: flex; align-items: center; gap: 10px; }
.ata-img-frame .corner.bl::after { content: ''; width: 56px; height: 1px; background: rgba(241,235,224,0.5); }
.ata-img-frame .corner.br { bottom: 22px; right: 22px; }

/* Manifesto */
.ata-manif {
  background: var(--steel-cream);
  padding: 120px 48px;
  display: grid;
  grid-template-columns: auto 1.5fr 1fr;
  gap: 64px;
  align-items: start;
}
.ata-manif .ch {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 96px;
  color: var(--steel-red);
  letter-spacing: -0.035em;
  line-height: 0.85;
  position: sticky; top: 24px;
}
.ata-manif h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 60px;
  line-height: 1.02;
  letter-spacing: -0.022em;
  color: var(--steel-black);
  margin-bottom: 32px;
}
.ata-manif h2 em { font-style: italic; color: var(--steel-red); }
.ata-manif .body p {
  font-size: 16.5px;
  line-height: 1.8;
  color: var(--steel-graphite);
  margin-bottom: 18px;
  max-width: 600px;
}
.ata-manif .body p strong { color: var(--steel-ink); font-weight: 600; }
.ata-manif .body p em { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--steel-red); }
.ata-manif .body .sig {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--steel-border);
  display: flex; align-items: center; gap: 18px;
}
.ata-manif .body .sig-name {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 26px;
  color: var(--steel-black);
}
.ata-manif .body .sig-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
}
.ata-manif .side {
  border: 1px solid var(--steel-ink);
  background: var(--steel-paper);
  padding: 28px 26px;
}
.ata-manif .side .h {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--steel-red);
  text-transform: uppercase;
  margin-bottom: 22px;
}
.ata-manif .side .h::before { content: '"'; font-family: 'DM Serif Display', serif; font-size: 80px; line-height: 0.4; color: var(--steel-red); display: block; margin-bottom: 10px; }
.ata-manif .side blockquote {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.35;
  color: var(--steel-ink);
  margin-bottom: 22px;
}
.ata-manif .side blockquote em { color: var(--steel-red); }
.ata-manif .side .attr {
  display: flex; align-items: center; gap: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.ata-manif .side .attr::before { content: ''; width: 32px; height: 1px; background: var(--steel-red); }

/* Pillars */
.ata-pillars {
  background: var(--steel-bone);
  padding: 96px 48px;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.ata-sec-head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 56px;
  align-items: end;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
  margin-bottom: 48px;
}
.ata-sec-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
}
.ata-sec-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.ata-sec-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
}
.ata-sec-head h3 em { font-style: italic; color: var(--steel-red); }
.ata-sec-head .right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
  text-align: right;
  max-width: 200px;
  line-height: 1.7;
}
.ata-pillars-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--steel-ink);
}
.ata-pillar {
  padding: 32px 24px 32px 0;
  border-right: 1px solid var(--steel-border);
}
.ata-pillar:nth-child(n+2) { padding-left: 24px; }
.ata-pillar:last-child { border-right: none; padding-right: 0; }
.ata-pillar .n {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--steel-red);
  margin-bottom: 18px;
}
.ata-pillar h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--steel-black);
  margin-bottom: 14px;
}
.ata-pillar h4 em { font-style: italic; color: var(--steel-red); }
.ata-pillar p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--steel-graphite);
}

/* Numbers strip */
.ata-numbers {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 0 48px;
  display: grid;
  grid-template-columns: auto repeat(4, 1fr);
  align-items: stretch;
}
.ata-numbers .lab {
  padding: 56px 36px 56px 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  border-right: 1px solid rgba(241,235,224,0.12);
  max-width: 160px;
  line-height: 1.6;
  display: flex; align-items: center;
}
.ata-numbers .cell {
  padding: 56px 28px;
  border-right: 1px solid rgba(241,235,224,0.12);
}
.ata-numbers .cell:last-child { border-right: none; }
.ata-numbers .cell .v {
  font-family: 'DM Serif Display', serif;
  font-size: 80px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
  margin-bottom: 10px;
}
.ata-numbers .cell .v em { font-style: italic; color: var(--steel-red-lt); font-size: 36px; }
.ata-numbers .cell .v small { font-size: 30px; color: rgba(241,235,224,0.6); font-style: italic; }
.ata-numbers .cell .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.55);
  line-height: 1.55;
}

/* Timeline */
.ata-timeline {
  background: var(--steel-cream);
  padding: 120px 48px;
}
.ata-tl-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  border-top: 1px solid var(--steel-ink);
  position: relative;
}
.ata-tl-item {
  padding: 28px 18px 32px 0;
  border-right: 1px solid var(--steel-border);
  position: relative;
}
.ata-tl-item:nth-child(n+2) { padding-left: 18px; }
.ata-tl-item:last-child { border-right: none; }
.ata-tl-item::before {
  content: '';
  position: absolute;
  top: -7px; left: 0;
  width: 12px; height: 12px;
  background: var(--steel-cream);
  border: 2px solid var(--steel-ink);
}
.ata-tl-item.acc::before { background: var(--steel-red); border-color: var(--steel-red); }
.ata-tl-item .yr {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--steel-black);
  margin-bottom: 14px;
}
.ata-tl-item .yr em { font-style: italic; color: var(--steel-red); font-size: 22px; }
.ata-tl-item .tit {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 10px;
}
.ata-tl-item p {
  font-size: 12.5px;
  line-height: 1.65;
  color: var(--steel-graphite);
}

/* Team */
.ata-team {
  background: var(--steel-paper);
  padding: 120px 48px;
  border-top: 1px solid var(--steel-border);
}
.ata-team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.ata-team-card {
  background: var(--steel-cream);
  border: 1px solid var(--steel-border);
  position: relative;
}
.ata-team-card .ph {
  aspect-ratio: 4/4.6;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  position: relative;
  overflow: hidden;
}
.ata-team-card:nth-child(2) .ph { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.ata-team-card:nth-child(3) .ph { background: linear-gradient(170deg, #38332c, #14130f); }
.ata-team-card:nth-child(4) .ph { background: linear-gradient(160deg, #6a5e50, #1a1612); }
.ata-team-card .ph::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px);
}
.ata-team-card .ph::after {
  content: attr(data-label);
  position: absolute; bottom: 18px; left: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
.ata-team-card .num {
  position: absolute; top: 16px; left: 18px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  color: rgba(241,235,224,0.5);
}
.ata-team-card .info {
  padding: 22px 22px 24px;
}
.ata-team-card .info .role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 10px;
}
.ata-team-card .info h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: -0.012em;
  color: var(--steel-black);
  margin-bottom: 4px;
}
.ata-team-card .info h4 em { font-style: italic; color: var(--steel-red); }
.ata-team-card .info .crea {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  color: var(--steel-graphite);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--steel-border);
}

/* Quote split */
.ata-quote {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  border-top: 1px solid var(--steel-border);
}
.ata-quote .q {
  position: relative;
}
.ata-quote .q::before {
  content: '"';
  font-family: 'DM Serif Display', serif;
  font-size: 220px;
  color: var(--steel-red);
  line-height: 0.4;
  display: block;
  margin-bottom: 18px;
}
.ata-quote .q blockquote {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 44px;
  line-height: 1.18;
  letter-spacing: -0.015em;
  color: var(--steel-black);
}
.ata-quote .q blockquote em { color: var(--steel-red); }
.ata-quote .q .attr {
  margin-top: 32px;
  display: flex; align-items: center; gap: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.ata-quote .q .attr::before { content: ''; width: 36px; height: 1px; background: var(--steel-red); }
.ata-quote .right {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 32px;
  display: flex; flex-direction: column;
  gap: 14px;
}
.ata-quote .right h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.22em;
  color: var(--steel-red-lt);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.ata-quote .right ul li {
  display: grid; grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(241,235,224,0.1);
  align-items: baseline;
}
.ata-quote .right ul li:last-child { border-bottom: none; }
.ata-quote .right .yr {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 20px;
  color: var(--steel-red-lt);
  letter-spacing: -0.01em;
}
.ata-quote .right .txt {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: var(--steel-cream);
  line-height: 1.3;
}

/* CTA */
.ata-cta {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 96px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.ata-cta::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  pointer-events: none;
}
.ata-cta .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(247,242,233,0.7);
  margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
  position: relative;
}
.ata-cta .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-cream); }
.ata-cta h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 72px;
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
  position: relative;
}
.ata-cta h2 em { font-style: italic; color: var(--steel-black); }
.ata-cta .right .card {
  background: var(--steel-cream); color: var(--steel-ink);
  padding: 32px;
}
.ata-cta .right .row {
  display: flex; flex-direction: column; gap: 4px;
  padding: 14px 0; border-bottom: 1px solid var(--steel-border);
}
.ata-cta .right .row:last-child { border-bottom: none; }
.ata-cta .right .row .k { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--steel-stone); }
.ata-cta .right .row .v { font-family: 'DM Serif Display', serif; font-size: 20px; color: var(--steel-ink); }
.ata-cta .right button {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px; text-align: center;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-top: 16px; width: 100%; display: block; border: none;
}

/* Footer */
.ata-foot {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 56px 48px 24px;
}
.ata-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.ata-foot .bw { font-family: 'Anton', sans-serif; font-size: 52px; line-height: 0.95; color: var(--steel-cream); letter-spacing: 0.02em; }
.ata-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.ata-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 20px; color: rgba(241,235,224,0.7); max-width: 340px; line-height: 1.4; }
.ata-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.ata-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.ata-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function AboutA() {
  return (
    <div className="steel stl-ata">
      <style>{AboutACSS}</style>

      <div className="ata-top">
        <div className="l">
          <span><span className="red">●</span> Fundada em 1994 · 32 anos sob mesma direção</span>
          <span>SP · MG · DF</span>
        </div>
        <div className="r">
          <span>+55 11 4002 8922</span>
          <span>contato@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      <nav className="ata-nav">
        <div className="logo">
          <div className="ata-mark"><span className="ca"></span><span className="cb"></span></div>
          <div>
            <div className="lw">STEEL</div>
            <div className="ls">Construções &amp; Empreendimentos</div>
          </div>
        </div>
        <ul>
          <li><a>Empreendimentos</a></li>
          <li><a>Construções</a></li>
          <li><a className="active">A Steel</a></li>
          <li><a>Processo</a></li>
          <li><a>Imprensa</a></li>
          <li><a>Contato</a></li>
        </ul>
        <div className="act">
          <a className="ata-btn-outline">Press kit ↓</a>
          <a className="ata-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="ata-hero">
        <div>
          <div className="ey">Cap. 01 · A Steel</div>
          <h1>A engenharia<br/>familiar que se<br/>recusou a <em>crescer</em><br/>de qualquer jeito.</h1>
        </div>
        <div>
          <p className="lede">
            Steel é uma <strong>construtora e incorporadora</strong> de alto padrão fundada em <strong>1994</strong>, em São Paulo. Trinta e dois anos depois, ainda somos uma engenharia <strong>verticalizada</strong> e <strong>presente em obra</strong>, sob a mesma direção fundadora.
          </p>
          <a className="ata-btn-black">Falar com a direção →</a>
          <div className="meta-grid">
            <div><div className="k">Fundação</div><div className="v">1994 <em>· SP</em></div></div>
            <div><div className="k">CREA-J</div><div className="v">24.318</div></div>
            <div><div className="k">Time direto</div><div className="v">214 <em>colaboradores</em></div></div>
            <div><div className="k">Canteiros ativos</div><div className="v">7 <em>em 3 estados</em></div></div>
          </div>
        </div>
      </section>

      {/* Big image */}
      <section className="ata-img">
        <div className="ata-img-frame">
          <div className="corner tl"><span className="dot"></span>CANTEIRO AURORA · 11/2025</div>
          <div className="corner tr">FOTO · M. BELMONTE</div>
          <div className="corner bl">ESC 1:1 · TEMPO REAL</div>
          <div className="corner br">SCR-26 / IMG-001</div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="ata-manif">
        <div className="ch">I</div>
        <div>
          <h2>
            Há um ofício na engenharia.<br/>
            E uma <em>poética</em> no concreto<br/>
            quando ele é bem servido.
          </h2>
          <div className="body">
            <p>
              A Steel nasceu em 1994 — pequena, familiar, com um escritório de duas mesas na Vila Madalena e <strong>uma única obra</strong> em andamento. Trinta e dois anos depois, ainda somos o que sobrou daquela geração que construía com a mão na argamassa.
            </p>
            <p>
              Em três décadas, recusamos uma forma de crescer: a terceirização de compromisso. Não repassamos canteiro. Não vendemos planta que a obra não entrega. Não economizamos em fundação. O que <em>assinamos</em> é o que construímos — e isso, ano após ano, tem se mostrado uma boa forma de envelhecer.
            </p>
            <p>
              Somos hoje 214 pessoas, em escritório e obra, sob o mesmo CNPJ que fundamos no início. <strong>Quatro engenheiros</strong> da geração original ainda estão no time. <strong>Sete canteiros</strong> em três estados. <strong>Uma intenção</strong> que organiza tudo o que fazemos.
            </p>
            <div className="sig">
              <div>
                <div className="sig-name">João Steel</div>
                <div className="sig-role">Fundador · Eng. Civil CREA 105.331</div>
              </div>
            </div>
          </div>
        </div>
        <aside className="side">
          <div className="h">Da matriarca</div>
          <blockquote>
            Trinta e dois anos depois, ainda somos a engenharia que <em>atende o telefone</em> do morador final. É raro. E é por isso que escolhemos continuar assim.
          </blockquote>
          <div className="attr">Maria Steel · Diretora · 2026</div>
        </aside>
      </section>

      {/* Pillars */}
      <section className="ata-pillars">
        <div className="ata-sec-head">
          <div>
            <div className="ey">Cap. 02 · Princípios</div>
            <h3>Quatro princípios,<br/>desde <em>1994.</em></h3>
          </div>
          <div></div>
          <div className="right">os mesmos<br/>quatro princípios<br/>desde a primeira obra</div>
        </div>
        <div className="ata-pillars-grid">
          <div className="ata-pillar">
            <div className="n">01 / 04</div>
            <h4>Engenharia <em>presente.</em></h4>
            <p>Engenheiro residente em cada canteiro. Visita técnica trimestral do diretor de obra. Sem terceirizações invisíveis.</p>
          </div>
          <div className="ata-pillar">
            <div className="n">02 / 04</div>
            <h4>Cadeia <em>verticalizada.</em></h4>
            <p>Da viabilidade ao habite-se, sob o mesmo CNPJ. Responsabilidade do papel à laje, sem repasse de etapas.</p>
          </div>
          <div className="ata-pillar">
            <div className="n">03 / 04</div>
            <h4>Materialidade <em>honesta.</em></h4>
            <p>Concreto aparente, aço, pedra, madeira. Acabamento que envelhece — não que vende foto de lançamento.</p>
          </div>
          <div className="ata-pillar">
            <div className="n">04 / 04</div>
            <h4>Garantia <em>estendida.</em></h4>
            <p>5 anos de assistência técnica integral pós-chaves. Manutenção planejada nos 25 anos seguintes.</p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="ata-numbers">
        <div className="lab">Steel<br/>em números<br/>· 1994 — 2026</div>
        <div className="cell">
          <div className="v">32<em>anos</em></div>
          <div className="k">de história contínua<br/>sob a mesma direção</div>
        </div>
        <div className="cell">
          <div className="v">87<em>+</em></div>
          <div className="k">empreendimentos<br/>entregues</div>
        </div>
        <div className="cell">
          <div className="v">1,2<small>M m²</small></div>
          <div className="k">de área construída<br/>e entregue</div>
        </div>
        <div className="cell">
          <div className="v">4,1<small>k</small></div>
          <div className="k">famílias morando em<br/>um endereço Steel</div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ata-timeline">
        <div className="ata-sec-head" style={{borderBottom:'2px solid var(--steel-ink)'}}>
          <div>
            <div className="ey">Cap. 03 · Linha do tempo</div>
            <h3>Trinta e dois anos,<br/>marca por <em>marca.</em></h3>
          </div>
          <div></div>
          <div className="right">cap. III<br/>06 marcos<br/>1994 — 2026</div>
        </div>
        <div className="ata-tl-grid">
          <div className="ata-tl-item">
            <div className="yr">1994</div>
            <div className="tit">Marco 01</div>
            <p>Fundação. Escritório de duas mesas na Vila Madalena. Primeira obra: residência unifamiliar em Pinheiros.</p>
          </div>
          <div className="ata-tl-item">
            <div className="yr">2001</div>
            <div className="tit">Marco 02</div>
            <p>Primeira incorporação. Edifício Maranhão, com 24 apartamentos — 100% vendido em 8 meses.</p>
          </div>
          <div className="ata-tl-item">
            <div className="yr">2009</div>
            <div className="tit">Marco 03</div>
            <p>Entrada em construção pesada. Sede Volare em Vinhedo — 9,4k m² industriais.</p>
          </div>
          <div className="ata-tl-item acc">
            <div className="yr">2017</div>
            <div className="tit">Marco 04 · Crescimento</div>
            <p>Abertura da praça MG e DF. Primeira obra hospitalar — Hospital Albano, em Belo Horizonte.</p>
          </div>
          <div className="ata-tl-item">
            <div className="yr">2022</div>
            <div className="tit">Marco 05</div>
            <p>50° empreendimento entregue. Sucessão na direção: João Steel assume Conselho; Maria Steel assume direção executiva.</p>
          </div>
          <div className="ata-tl-item">
            <div className="yr">2026<em>·</em></div>
            <div className="tit">Marco 06 · Hoje</div>
            <p>87+ entregues, 7 em curso, 214 colaboradores. Lançamento do Edifício Aurora.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ata-team">
        <div className="ata-sec-head" style={{borderBottom:'2px solid var(--steel-ink)'}}>
          <div>
            <div className="ey">Cap. 04 · Direção</div>
            <h3>O time que<br/>responde pelo <em>nome.</em></h3>
          </div>
          <div></div>
          <div className="right">cap. IV<br/>04 nomes<br/>direção 2026</div>
        </div>

        <div className="ata-team-grid">
          <div className="ata-team-card">
            <div className="ph" data-label="RETRATO · M. STEEL">
              <span className="num">01</span>
            </div>
            <div className="info">
              <div className="role">Diretora executiva</div>
              <h4>Maria <em>Steel</em></h4>
              <div style={{fontSize:'13.5px', color:'var(--steel-graphite)', marginTop:'4px'}}>Eng. Civil · POLI-USP · MBA Wharton</div>
              <div className="crea">CREA-SP 230.114 · 2002 → presente</div>
            </div>
          </div>
          <div className="ata-team-card">
            <div className="ph" data-label="RETRATO · J. STEEL">
              <span className="num">02</span>
            </div>
            <div className="info">
              <div className="role">Conselho · Fundador</div>
              <h4>João <em>Steel</em></h4>
              <div style={{fontSize:'13.5px', color:'var(--steel-graphite)', marginTop:'4px'}}>Eng. Civil · POLI-USP · 1972</div>
              <div className="crea">CREA-SP 105.331 · 1994 → presente</div>
            </div>
          </div>
          <div className="ata-team-card">
            <div className="ph" data-label="RETRATO · F. CAMARGO">
              <span className="num">03</span>
            </div>
            <div className="info">
              <div className="role">Diretor de obras</div>
              <h4>Fábio <em>Camargo</em></h4>
              <div style={{fontSize:'13.5px', color:'var(--steel-graphite)', marginTop:'4px'}}>Eng. Civil · MACK · 2003</div>
              <div className="crea">CREA-SP 188.402 · 2008 → presente</div>
            </div>
          </div>
          <div className="ata-team-card">
            <div className="ph" data-label="RETRATO · A. PRADO">
              <span className="num">04</span>
            </div>
            <div className="info">
              <div className="role">Diretor de incorporação</div>
              <h4>Andrea <em>Prado</em></h4>
              <div style={{fontSize:'13.5px', color:'var(--steel-graphite)', marginTop:'4px'}}>Arq. e Urb. · FAU-USP · 1998</div>
              <div className="crea">CAU A47.220-3 · 2014 → presente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / certificates */}
      <section className="ata-quote">
        <div className="q">
          <blockquote>
            Trinta e dois meses depois, a obra ficou exatamente como o caderno comercial mostrou — e o <em>engenheiro que assinou o contrato</em> foi o mesmo que entregou as chaves.
          </blockquote>
          <div className="attr">Renata Alvim · Diretora Imobiliária · Grupo Maia</div>
        </div>
        <div className="right">
          <h4>Certificações &amp; reconhecimentos</h4>
          <ul>
            <li><span className="yr">2024</span><span className="txt">Top 30 — Premier Awards de Construção</span></li>
            <li><span className="yr">2023</span><span className="txt">Certificação ISO 45001 — segurança em obra</span></li>
            <li><span className="yr">2022</span><span className="txt">AQUA-HQE — Sede Volare · primeira do setor</span></li>
            <li><span className="yr">2021</span><span className="txt">Selo Pró-Equidade · Governo Federal</span></li>
            <li><span className="yr">2019</span><span className="txt">LEED Gold — Edifício Larissa, SP</span></li>
            <li><span className="yr">2017</span><span className="txt">Prêmio Master Imobiliário · Secovi</span></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="ata-cta">
        <div>
          <div className="ey">Conversar com a direção</div>
          <h2>Tem um terreno,<br/>um projeto, uma <em>ideia?</em></h2>
        </div>
        <div className="right">
          <div className="card">
            <div className="row"><span className="k">Direção comercial</span><span className="v">andrea.prado@steelconstrucoes.com.br</span></div>
            <div className="row"><span className="k">Imprensa &amp; ESG</span><span className="v">imprensa@steelconstrucoes.com.br</span></div>
            <div className="row"><span className="k">Telefone direto</span><span className="v">+55 11 4002 8922</span></div>
            <button>Iniciar conversa →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ata-foot">
        <div className="ata-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col">
            <h4>A Steel</h4>
            <ul>
              <li>Manifesto</li>
              <li>Princípios</li>
              <li>Linha do tempo</li>
              <li>Direção &amp; time</li>
              <li>Certificações</li>
            </ul>
          </div>
          <div className="col">
            <h4>Relação</h4>
            <ul>
              <li>Investidores</li>
              <li>Imprensa &amp; press kit</li>
              <li>Trabalhe conosco</li>
              <li>Pós-obra</li>
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
        <div className="ata-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.AboutA = AboutA;

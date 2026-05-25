/* global React */

// ─── A Steel · Sobre · Variação B "Aço Editorial" ────────────────────
// Sobre como monografia: hero escuro com retrato grande, ensaio
// fotográfico de canteiro, manifesto em duas colunas tipo livro,
// timeline vertical com fotos, time em galeria preta, depoimento
// pull quote enorme. Vermelho como pontuação fina. Scoped to .stl-atb.

const AboutBCSS = `
.stl-atb {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.65;
  width: 100%;
}

.atb-nav {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.atb-nav .logo { display: flex; align-items: center; gap: 14px; }
.atb-mark { width: 40px; height: 40px; background: var(--steel-red); position: relative; }
.atb-mark::before { content: ''; position: absolute; left: 14%; right: 14%; top: 46%; height: 7%; background: var(--steel-cream); transform: rotate(-45deg); }
.atb-mark .ca { position: absolute; top: 16%; right: 16%; width: 28%; height: 28%; background: var(--steel-cream); }
.atb-mark .cb { position: absolute; bottom: 14%; left: 14%; width: 22%; height: 22%; background: var(--steel-cream); }
.atb-nav .lw { font-family: 'Anton', sans-serif; font-size: 24px; letter-spacing: 0.02em; color: var(--steel-cream); }
.atb-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-top: 4px; }
.atb-nav ul { display: flex; gap: 26px; justify-self: center; }
.atb-nav ul a { font-size: 13px; font-weight: 500; color: rgba(241,235,224,0.7); padding: 8px 4px; border-bottom: 2px solid transparent; }
.atb-nav ul a.active { color: var(--steel-cream); border-bottom-color: var(--steel-red); }
.atb-nav .act { display: flex; gap: 12px; align-items: center; }
.atb-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 12px 22px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.atb-btn-ghost { background: transparent; color: var(--steel-cream); border: 1px solid rgba(241,235,224,0.3); padding: 11px 20px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }

/* Hero — dark with big portrait */
.atb-hero {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 64px 48px 0;
  position: relative;
  overflow: hidden;
}
.atb-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 80% 10%, rgba(142,27,34,0.18), transparent 60%);
  pointer-events: none;
}
.atb-hero-top {
  display: flex; justify-content: space-between; align-items: flex-start;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.5);
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}
.atb-hero-top .red { color: var(--steel-red-lt); display: flex; align-items: center; gap: 8px; }
.atb-hero-top .red .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; box-shadow: 0 0 0 5px rgba(142,27,34,0.18); }
.atb-hero-top .r { display: flex; gap: 28px; }

.atb-hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 64px;
  align-items: end;
  padding-bottom: 56px;
  position: relative; z-index: 2;
}
.atb-hero-left .ey {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--steel-red-lt);
  margin-bottom: 14px;
}
.atb-hero-left h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 152px;
  line-height: 0.9;
  letter-spacing: -0.03em;
  color: var(--steel-cream);
  margin-bottom: 32px;
}
.atb-hero-left h1 em { font-style: italic; color: var(--steel-red-lt); }
.atb-hero-left .lede {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 24px;
  line-height: 1.45;
  color: rgba(241,235,224,0.82);
  max-width: 600px;
}
.atb-hero-left .lede em { color: var(--steel-red-lt); }
.atb-hero-left .actions {
  margin-top: 36px;
  display: flex; gap: 12px;
}

.atb-hero-right {
  position: relative;
  aspect-ratio: 4/5.4;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  overflow: hidden;
}
.atb-hero-right::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.atb-hero-right::after {
  content: 'RETRATO · MARIA STEEL · DIRETORA EXECUTIVA · 2026';
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.3em;
  color: rgba(241,235,224,0.18);
  text-align: center; max-width: 240px; line-height: 1.6;
}
.atb-hero-right .corner {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(241,235,224,0.45);
}
.atb-hero-right .corner.tl { top: 22px; left: 22px; display: flex; align-items: center; gap: 10px; }
.atb-hero-right .corner.tl .dot { width: 6px; height: 6px; background: var(--steel-red); border-radius: 50%; }
.atb-hero-right .corner.br { bottom: 22px; right: 22px; display: flex; align-items: center; gap: 10px; }
.atb-hero-right .corner.br::before { content: ''; width: 56px; height: 1px; background: rgba(241,235,224,0.4); }

.atb-hero-meta {
  border-top: 1px solid rgba(241,235,224,0.15);
  padding: 32px 0 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  position: relative; z-index: 2;
}
.atb-hero-meta div .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: rgba(241,235,224,0.45);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.atb-hero-meta div .v {
  font-family: 'DM Serif Display', serif;
  font-size: 36px;
  letter-spacing: -0.018em;
  color: var(--steel-cream);
}
.atb-hero-meta div .v em { font-style: italic; color: var(--steel-red-lt); font-size: 20px; }
.atb-hero-meta div .l {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  color: rgba(241,235,224,0.5);
  margin-top: 4px;
}

/* Manifesto: two-column book */
.atb-manif {
  background: var(--steel-cream);
  padding: 120px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}
.atb-manif .left {
  position: sticky; top: 24px;
  align-self: start;
}
.atb-manif .left .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  margin-bottom: 24px;
  display: flex; align-items: center; gap: 12px;
}
.atb-manif .left .label::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.atb-manif .left h2 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 80px;
  line-height: 0.96;
  letter-spacing: -0.025em;
  color: var(--steel-black);
  margin-bottom: 32px;
}
.atb-manif .left h2 em { font-style: italic; color: var(--steel-red); }
.atb-manif .left .sub {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  color: var(--steel-graphite);
  line-height: 1.4;
}
.atb-manif .right .body { columns: 1; }
.atb-manif .right .body p {
  font-size: 16.5px;
  line-height: 1.8;
  color: var(--steel-graphite);
  margin-bottom: 18px;
}
.atb-manif .right .body p strong { color: var(--steel-ink); font-weight: 600; }
.atb-manif .right .body p em { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--steel-red); }
.atb-manif .right .body p:first-of-type::first-letter {
  font-family: 'DM Serif Display', serif;
  font-size: 84px;
  float: left;
  line-height: 0.85;
  padding-right: 14px;
  padding-top: 6px;
  color: var(--steel-red);
}
.atb-manif .right .sig {
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid var(--steel-border);
  display: flex; flex-direction: column; gap: 4px;
}
.atb-manif .right .sig .nm {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--steel-black);
}
.atb-manif .right .sig .rl {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: var(--steel-graphite);
  text-transform: uppercase;
}

/* Pull quote */
.atb-pull {
  background: var(--steel-bone);
  padding: 96px 48px;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
  text-align: center;
}
.atb-pull blockquote {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 72px;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--steel-black);
  max-width: 1080px;
  margin: 0 auto;
}
.atb-pull blockquote em { color: var(--steel-red); }
.atb-pull blockquote::before {
  content: '"';
  font-family: 'DM Serif Display', serif;
  font-size: 160px;
  color: var(--steel-red);
  display: block;
  line-height: 0.5;
  margin-bottom: 12px;
}
.atb-pull .attr {
  margin-top: 36px;
  display: inline-flex; align-items: center; gap: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-graphite);
}
.atb-pull .attr::before { content: ''; width: 40px; height: 1px; background: var(--steel-red); }

/* Photo essay strip */
.atb-essay {
  background: var(--steel-cream);
  padding: 96px 48px;
}
.atb-essay-head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 48px;
  align-items: end;
  padding-bottom: 28px;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.atb-essay-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
}
.atb-essay-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.atb-essay-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-black);
}
.atb-essay-head h3 em { font-style: italic; color: var(--steel-red); }
.atb-essay-head .credit {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  text-align: right;
  max-width: 220px;
  line-height: 1.65;
}
.atb-essay-head .credit .red { color: var(--steel-red); }

.atb-essay-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 16px;
}
.atb-essay-grid .ph {
  position: relative;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  overflow: hidden;
}
.atb-essay-grid .ph.large { grid-column: 1 / 2; grid-row: 1 / 3; aspect-ratio: 4/5; }
.atb-essay-grid .ph.med { aspect-ratio: 4/3.2; }
.atb-essay-grid .ph.med.b1 { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.atb-essay-grid .ph.med.b2 { background: linear-gradient(170deg, #38332c, #14130f); }
.atb-essay-grid .ph.med.b3 { background: linear-gradient(160deg, #6a5e50, #1a1612); }
.atb-essay-grid .ph.med.b4 { background: linear-gradient(165deg, #4a3a30, #1a1612); }
.atb-essay-grid .ph::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 70px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 70px);
}
.atb-essay-grid .ph .lb {
  position: absolute; bottom: 20px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
  max-width: 240px;
  line-height: 1.5;
}
.atb-essay-grid .ph .no {
  position: absolute; top: 18px; left: 22px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: rgba(241,235,224,0.55);
}
.atb-essay-grid .ph.large .no { font-size: 38px; }

/* Timeline vertical */
.atb-tl {
  background: var(--steel-black);
  color: var(--steel-cream);
  padding: 120px 48px;
}
.atb-tl-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: end;
  padding-bottom: 32px;
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(241,235,224,0.15);
}
.atb-tl-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.atb-tl-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.atb-tl-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 68px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-cream);
}
.atb-tl-head h3 em { font-style: italic; color: var(--steel-red-lt); }
.atb-tl-head p {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.4;
  color: rgba(241,235,224,0.75);
  max-width: 500px;
}

.atb-tl-list { display: flex; flex-direction: column; }
.atb-tl-row {
  display: grid;
  grid-template-columns: 120px 1.2fr 1.6fr auto;
  gap: 48px;
  padding: 36px 0;
  border-top: 1px solid rgba(241,235,224,0.12);
  align-items: center;
}
.atb-tl-row:last-child { border-bottom: 1px solid rgba(241,235,224,0.12); }
.atb-tl-row .yr {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 60px;
  line-height: 1;
  color: var(--steel-red-lt);
  letter-spacing: -0.022em;
}
.atb-tl-row h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--steel-cream);
}
.atb-tl-row h4 em { font-style: italic; color: var(--steel-red-lt); }
.atb-tl-row p {
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(241,235,224,0.65);
  max-width: 480px;
}
.atb-tl-row .pic {
  width: 140px; height: 90px;
  background: linear-gradient(165deg, #4a423a, #14130f);
  position: relative;
  overflow: hidden;
}
.atb-tl-row .pic::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 30px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 30px);
}
.atb-tl-row .pic::after {
  content: attr(data-label);
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.22em;
  color: rgba(241,235,224,0.3);
}

/* Team gallery */
.atb-team {
  background: var(--steel-cream);
  padding: 120px 48px;
}
.atb-team-head { display: grid; grid-template-columns: auto 1fr auto; gap: 56px; align-items: end; padding-bottom: 32px; margin-bottom: 48px; border-bottom: 2px solid var(--steel-ink); }
.atb-team-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
}
.atb-team-head .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-red); }
.atb-team-head h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-black);
}
.atb-team-head h3 em { font-style: italic; color: var(--steel-red); }
.atb-team-head .credit {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  text-align: right;
  max-width: 200px;
  line-height: 1.6;
}

.atb-team-grid {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 16px;
}
.atb-team-grid .person {
  position: relative;
  background: linear-gradient(165deg, #4a423a, #14130f);
  aspect-ratio: 3/4.2;
  overflow: hidden;
}
.atb-team-grid .person.lead { aspect-ratio: 3/4.5; }
.atb-team-grid .person:nth-child(2) { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.atb-team-grid .person:nth-child(3) { background: linear-gradient(170deg, #38332c, #14130f); }
.atb-team-grid .person:nth-child(4) { background: linear-gradient(160deg, #6a5e50, #1a1612); }
.atb-team-grid .person::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(to top, rgba(15,14,13,0.85), transparent 50%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 70px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 70px);
}
.atb-team-grid .person .lb {
  position: absolute; top: 22px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
}
.atb-team-grid .person .no {
  position: absolute; top: 22px; right: 22px;
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 24px;
  color: rgba(241,235,224,0.5);
}
.atb-team-grid .person .info {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 24px 22px;
}
.atb-team-grid .person .info .role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-red-lt);
  margin-bottom: 8px;
}
.atb-team-grid .person .info h4 {
  font-family: 'DM Serif Display', serif;
  font-size: 30px;
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--steel-cream);
}
.atb-team-grid .person.lead .info h4 { font-size: 38px; }
.atb-team-grid .person .info h4 em { font-style: italic; color: var(--steel-red-lt); }
.atb-team-grid .person .info .crea {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(241,235,224,0.18);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  color: rgba(241,235,224,0.6);
}

/* CTA */
.atb-cta {
  background: linear-gradient(140deg, var(--steel-red) 0%, #5C0F14 60%, var(--steel-black) 100%);
  color: var(--steel-cream);
  padding: 140px 48px;
  position: relative;
  overflow: hidden;
}
.atb-cta::before {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(45deg, transparent 0 40px, rgba(0,0,0,0.04) 40px 41px);
}
.atb-cta-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
  align-items: center;
}
.atb-cta .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(247,242,233,0.7);
  margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
}
.atb-cta .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-cream); }
.atb-cta h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 110px;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--steel-cream);
}
.atb-cta h2 em { font-style: italic; color: var(--steel-black); }
.atb-cta-card {
  background: var(--steel-cream); color: var(--steel-ink);
  padding: 36px 32px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.3);
}
.atb-cta-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin-bottom: 6px;
}
.atb-cta-card h3 em { font-style: italic; color: var(--steel-red); }
.atb-cta-card p {
  font-size: 13.5px;
  color: var(--steel-graphite);
  line-height: 1.65;
  margin-bottom: 22px;
}
.atb-cta-card .field {
  display: flex; flex-direction: column; gap: 4px;
  padding: 14px 0;
  border-bottom: 1px solid var(--steel-border);
}
.atb-cta-card .field:last-of-type { border-bottom: none; }
.atb-cta-card .field .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--steel-stone);
  text-transform: uppercase;
}
.atb-cta-card .field .v {
  font-family: 'DM Serif Display', serif;
  font-size: 19px;
  color: var(--steel-ink);
}
.atb-cta-card button {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px; text-align: center;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-top: 16px; width: 100%; display: block; border: none;
}

/* Footer */
.atb-foot {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 64px 48px 24px;
}
.atb-foot-top {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(241,235,224,0.12);
}
.atb-foot .bw { font-family: 'Anton', sans-serif; font-size: 56px; line-height: 0.95; letter-spacing: 0.02em; color: var(--steel-cream); }
.atb-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.atb-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; color: rgba(241,235,224,0.7); max-width: 360px; line-height: 1.4; }
.atb-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.atb-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.atb-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function AboutB() {
  return (
    <div className="steel stl-atb">
      <style>{AboutBCSS}</style>

      <nav className="atb-nav">
        <div className="logo">
          <div className="atb-mark"><span className="ca"></span><span className="cb"></span></div>
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
          <a className="atb-btn-ghost">Press kit ↓</a>
          <a className="atb-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="atb-hero">
        <div className="atb-hero-top">
          <span className="red"><span className="dot"></span>est. 1994 · sob mesma direção</span>
          <div className="r">
            <span>Cap. 01 · A Steel</span>
            <span>Edição 26 · Monografia</span>
            <span>SCR / VOL.01 / E.04</span>
          </div>
        </div>

        <div className="atb-hero-grid">
          <div className="atb-hero-left">
            <div className="ey">"trinta e dois anos depois,"</div>
            <h1>a engenharia<br/>familiar que se<br/>recusou a <em>crescer</em><br/>de qualquer jeito.</h1>
            <p className="lede">
              Steel é uma construtora e incorporadora fundada em 1994, em São Paulo. Há três décadas, sob a <em>mesma direção</em>, com a mesma intenção: construir como quem assina.
            </p>
            <div className="actions">
              <a className="atb-btn-red">Conhecer a direção →</a>
              <a className="atb-btn-ghost">Press kit ↓</a>
            </div>
          </div>
          <div className="atb-hero-right">
            <div className="corner tl"><span className="dot"></span>RETRATO 01 / 04</div>
            <div className="corner br">M. STEEL · 2026</div>
          </div>
        </div>

        <div className="atb-hero-meta">
          <div><div className="k">Fundação</div><div className="v">1994 <em>· SP</em></div><div className="l">sob mesma direção fundadora</div></div>
          <div><div className="k">Time direto</div><div className="v">214 <em>pessoas</em></div><div className="l">escritório &amp; obra · sob mesmo CNPJ</div></div>
          <div><div className="k">Canteiros ativos</div><div className="v">07 <em>em 3 estados</em></div><div className="l">SP · MG · DF</div></div>
          <div><div className="k">CREA-J</div><div className="v">24.318</div><div className="l">desde a fundação · sem interrupção</div></div>
        </div>
      </section>

      {/* Manifesto book */}
      <section className="atb-manif">
        <div className="left">
          <div className="label">Cap. 02 · Manifesto</div>
          <h2>Há um ofício na engenharia.<br/>E uma <em>poética</em> no concreto bem servido.</h2>
          <div className="sub">— assinado pela direção, 1994/2026</div>
        </div>
        <div className="right">
          <div className="body">
            <p>
              A Steel nasceu em 1994 — pequena, familiar, com um escritório de duas mesas na Vila Madalena e <strong>uma única obra</strong> em andamento. Trinta e dois anos depois, ainda somos o que sobrou daquela geração que construía com a mão na argamassa.
            </p>
            <p>
              Em três décadas, <strong>recusamos uma forma de crescer</strong>: a terceirização de compromisso. Não repassamos canteiro. Não vendemos planta que a obra não entrega. Não economizamos em fundação. O que <em>assinamos</em> é o que construímos — e isso, ano após ano, tem se mostrado uma boa forma de envelhecer.
            </p>
            <p>
              Crescemos no ritmo certo. Lentos quando precisou. Em três estados, hoje. Sob o mesmo CNPJ que fundamos no início. <strong>Quatro engenheiros</strong> da geração original ainda estão no time. <strong>Sete canteiros</strong> em curso. <strong>Uma intenção</strong> que organiza tudo o que fazemos.
            </p>
            <p>
              Isso é o que entendemos por <em>engenharia familiar</em> — não uma figura de estilo, e sim uma decisão de não-escala. A escala da casa onde ainda atende o telefone quem assina o contrato.
            </p>
          </div>
          <div className="sig">
            <div className="nm">Maria Steel</div>
            <div className="rl">Diretora executiva · 2026</div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="atb-pull">
        <blockquote>
          a engenharia que ainda <em>atende o telefone</em><br/>
          do morador final.
        </blockquote>
        <div className="attr">M. Steel · Diretora · 2026</div>
      </section>

      {/* Photo essay */}
      <section className="atb-essay">
        <div className="atb-essay-head">
          <div>
            <div className="ey">Cap. 03 · Ensaio</div>
          </div>
          <h3>Um dia<br/>no <em>canteiro.</em></h3>
          <div className="credit">
            Foto · <span className="red">M. Belmonte</span><br/>
            Stylist · L. Suaid<br/>
            Aurora · Pinheiros<br/>
            Novembro · 2025
          </div>
        </div>
        <div className="atb-essay-grid">
          <div className="ph large">
            <span className="no">01</span>
            <span className="lb">FOTO 01 · CANTEIRO AURORA — ENGENHEIRO RESIDENTE · 06H50</span>
          </div>
          <div className="ph med b1">
            <span className="no">02</span>
            <span className="lb">FOTO 02 · ESTRUTURA L. 14</span>
          </div>
          <div className="ph med b2">
            <span className="no">03</span>
            <span className="lb">FOTO 03 · BIM COORDENADO</span>
          </div>
          <div className="ph med b3">
            <span className="no">04</span>
            <span className="lb">FOTO 04 · OBRA FECHANDO O DIA · 17H30</span>
          </div>
          <div className="ph med b4">
            <span className="no">05</span>
            <span className="lb">FOTO 05 · CADERNO DE BOAS PRÁTICAS</span>
          </div>
        </div>
      </section>

      {/* Timeline vertical */}
      <section className="atb-tl">
        <div className="atb-tl-head">
          <div>
            <div className="ey">Cap. 04 · Linha do tempo</div>
            <h3>Trinta e dois anos,<br/>marca por <em>marca.</em></h3>
          </div>
          <p>Seis marcos que organizam a história da Steel — da primeira residência em Pinheiros, em 1994, ao lançamento do Edifício Aurora, em 2025.</p>
        </div>
        <div className="atb-tl-list">
          <div className="atb-tl-row">
            <div className="yr">1994</div>
            <h4>Fundação em <em>Vila Madalena.</em></h4>
            <p>Escritório de duas mesas. Primeira obra: residência unifamiliar em Pinheiros. Equipe inicial: três engenheiros e um mestre.</p>
            <div className="pic" data-label="FOTO · 1994"></div>
          </div>
          <div className="atb-tl-row">
            <div className="yr">2001</div>
            <h4>Primeira <em>incorporação.</em></h4>
            <p>Edifício Maranhão · 24 apartamentos · 100% vendido em oito meses. Início da operação de incorporação verticalizada.</p>
            <div className="pic" data-label="FOTO · 2001"></div>
          </div>
          <div className="atb-tl-row">
            <div className="yr">2009</div>
            <h4>Construção <em>pesada.</em></h4>
            <p>Sede Volare em Vinhedo — 9.400 m² industriais. Início da operação de construção corporativa e industrial.</p>
            <div className="pic" data-label="FOTO · 2009"></div>
          </div>
          <div className="atb-tl-row">
            <div className="yr">2017</div>
            <h4>Expansão <em>para MG e DF.</em></h4>
            <p>Abertura de escritórios regionais. Primeira obra hospitalar: Hospital Albano, em Belo Horizonte — 186 leitos.</p>
            <div className="pic" data-label="FOTO · 2017"></div>
          </div>
          <div className="atb-tl-row">
            <div className="yr">2022</div>
            <h4>Sucessão na <em>direção.</em></h4>
            <p>50° empreendimento entregue. João Steel assume Conselho; Maria Steel assume direção executiva. Time atinge 200 pessoas.</p>
            <div className="pic" data-label="FOTO · 2022"></div>
          </div>
          <div className="atb-tl-row">
            <div className="yr">2026</div>
            <h4>Lançamento <em>Aurora.</em></h4>
            <p>87 empreendimentos entregues. 7 em curso, em três estados. Lançamento do Edifício Aurora, em Pinheiros.</p>
            <div className="pic" data-label="FOTO · 2026"></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="atb-team">
        <div className="atb-team-head">
          <div>
            <div className="ey">Cap. 05 · Direção</div>
          </div>
          <h3>O time que<br/>responde pelo <em>nome.</em></h3>
          <div className="credit">
            quatro nomes<br/>
            direção 2026<br/>
            <span style={{color:'var(--steel-red)'}}>·</span> Foto M. Belmonte
          </div>
        </div>

        <div className="atb-team-grid">
          <div className="person lead">
            <span className="lb">RETRATO 01</span>
            <span className="no">01</span>
            <div className="info">
              <div className="role">Diretora executiva</div>
              <h4>Maria<br/><em>Steel</em></h4>
              <div className="crea">Eng. Civil POLI-USP · MBA Wharton<br/>CREA-SP 230.114 · 2002 → presente</div>
            </div>
          </div>
          <div className="person">
            <span className="lb">RETRATO 02</span>
            <span className="no">02</span>
            <div className="info">
              <div className="role">Conselho · Fundador</div>
              <h4>João <em>Steel</em></h4>
              <div className="crea">POLI-USP · 1972 · CREA 105.331</div>
            </div>
          </div>
          <div className="person">
            <span className="lb">RETRATO 03</span>
            <span className="no">03</span>
            <div className="info">
              <div className="role">Diretor de obras</div>
              <h4>Fábio <em>Camargo</em></h4>
              <div className="crea">MACK · 2003 · CREA 188.402</div>
            </div>
          </div>
          <div className="person">
            <span className="lb">RETRATO 04</span>
            <span className="no">04</span>
            <div className="info">
              <div className="role">Direção · incorporação</div>
              <h4>Andrea <em>Prado</em></h4>
              <div className="crea">FAU-USP · 1998 · CAU A47.220-3</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="atb-cta">
        <div className="atb-cta-grid">
          <div>
            <div className="ey">Iniciar conversa</div>
            <h2>Converse<br/>com a <em>direção.</em></h2>
          </div>
          <div className="atb-cta-card">
            <h3>Conversas <em>diretas.</em></h3>
            <p>Direção comercial, imprensa e ESG atendem diretamente. Sem secretaria, sem repasse, sem formulário automático.</p>
            <div className="field">
              <div className="k">Direção comercial</div>
              <div className="v">andrea.prado@steelconstrucoes.com.br</div>
            </div>
            <div className="field">
              <div className="k">Imprensa &amp; ESG</div>
              <div className="v">imprensa@steelconstrucoes.com.br</div>
            </div>
            <div className="field">
              <div className="k">Telefone direto</div>
              <div className="v">+55 11 4002 8922</div>
            </div>
            <button>Iniciar conversa →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="atb-foot">
        <div className="atb-foot-top">
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
        <div className="atb-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.AboutB = AboutB;

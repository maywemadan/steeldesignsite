/* global React */

// ─── Construções B2B · Variação A "Aço Setores" ──────────────────────
// Página dedicada ao braço B2B da Steel: hero objetivo, grid de setores
// (corporativo, industrial, hospitalar, retrofit), cases featured com
// resultados duros, capabilities table, CTA novo negócio. .stl-cna

const ConstructA_CSS = `
.stl-cna {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px; line-height: 1.6; width: 100%;
}

.cna-top {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
}
.cna-top .l { display: flex; gap: 22px; }
.cna-top .l .red { color: var(--steel-red-lt); }
.cna-top .r { display: flex; gap: 20px; color: rgba(241,235,224,0.7); }

.cna-nav {
  background: var(--steel-cream); padding: 22px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.cna-nav .logo { display: flex; align-items: center; gap: 14px; }
.cna-mark { width: 44px; height: 44px; background: var(--steel-red); position: relative; }
.cna-mark::before { content:''; position:absolute; left:14%; right:14%; top:46%; height:7%; background: var(--steel-cream); transform: rotate(-45deg); }
.cna-mark .ca { position:absolute; top:16%; right:16%; width:28%; height:28%; background: var(--steel-cream); }
.cna-mark .cb { position:absolute; bottom:14%; left:14%; width:22%; height:22%; background: var(--steel-cream); }
.cna-nav .lw { font-family: 'Anton', sans-serif; font-size: 28px; letter-spacing: 0.02em; color: var(--steel-black); line-height: 1; }
.cna-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase; margin-top: 4px; }
.cna-nav ul { display: flex; gap: 26px; justify-self: center; }
.cna-nav ul a { font-size: 13px; font-weight: 500; color: var(--steel-ink); padding: 8px 4px; border-bottom: 2px solid transparent; }
.cna-nav ul a.active { border-bottom-color: var(--steel-red); }
.cna-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 13px 22px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.cna-btn-out { background: transparent; color: var(--steel-ink); border: 1.5px solid var(--steel-ink); padding: 11.5px 20px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }

/* Hero */
.cna-hero {
  padding: 64px 48px 56px;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 56px; align-items: end;
  border-bottom: 2px solid var(--steel-ink);
}
.cna-hero .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--steel-red);
  display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
}
.cna-hero .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cna-hero h1 {
  font-family: 'DM Serif Display', serif; font-weight: 400;
  font-size: 108px; line-height: 0.94;
  letter-spacing: -0.028em; color: var(--steel-black);
}
.cna-hero h1 em { font-style: italic; color: var(--steel-red); }
.cna-hero .lede {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; line-height: 1.45; color: var(--steel-graphite); max-width: 460px;
}
.cna-hero .lede em { color: var(--steel-red); }
.cna-hero .actions { margin-top: 22px; display: flex; gap: 12px; }
.cna-hero .meta {
  margin-top: 32px; padding-top: 24px;
  border-top: 1px solid var(--steel-border);
  display: grid; grid-template-columns: 1fr 1fr; gap: 22px;
}
.cna-hero .meta .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: var(--steel-stone); text-transform: uppercase; margin-bottom: 4px;
}
.cna-hero .meta .v {
  font-family: 'DM Serif Display', serif; font-size: 22px;
  color: var(--steel-ink); letter-spacing: -0.012em;
}
.cna-hero .meta .v em { font-style: italic; color: var(--steel-red); font-size: 14px; }

/* Sectors strip */
.cna-sectors { padding: 96px 48px; background: var(--steel-cream); }
.cna-sec-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 56px; align-items: end;
  padding-bottom: 28px; margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.cna-sec-head .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase; margin-bottom: 14px; display: flex; align-items: center; gap: 12px; }
.cna-sec-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cna-sec-head h3 { font-family: 'DM Serif Display', serif; font-size: 52px; line-height: 1; letter-spacing: -0.022em; color: var(--steel-black); }
.cna-sec-head h3 em { font-style: italic; color: var(--steel-red); }
.cna-sec-head p { font-size: 15px; line-height: 1.7; color: var(--steel-graphite); max-width: 460px; }

.cna-sec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.cna-sec-card {
  position: relative;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  color: var(--steel-cream);
  aspect-ratio: 4/5.4;
  overflow: hidden;
  padding: 28px 24px;
  display: flex; flex-direction: column;
}
.cna-sec-card:nth-child(2) { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.cna-sec-card:nth-child(3) { background: linear-gradient(170deg, #38332c, #14130f); }
.cna-sec-card:nth-child(4) { background: linear-gradient(160deg, #6a5e50, #1a1612); }
.cna-sec-card::before {
  content:''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 70px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 70px);
  pointer-events: none;
}
.cna-sec-card > * { position: relative; }
.cna-sec-card .n {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 32px; color: rgba(241,235,224,0.5); margin-bottom: auto;
}
.cna-sec-card .lab {
  font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
  letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase;
  margin-bottom: 12px;
}
.cna-sec-card h4 {
  font-family: 'DM Serif Display', serif; font-size: 32px;
  line-height: 1.05; letter-spacing: -0.015em; color: var(--steel-cream);
  margin-bottom: 14px;
}
.cna-sec-card h4 em { font-style: italic; color: var(--steel-red-lt); }
.cna-sec-card p { font-size: 13px; line-height: 1.65; color: rgba(241,235,224,0.7); margin-bottom: 18px; }
.cna-sec-card .pill {
  display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 18px;
}
.cna-sec-card .pill span {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.12em; padding: 5px 10px;
  border: 1px solid rgba(241,235,224,0.25);
  color: rgba(241,235,224,0.8); text-transform: uppercase;
  border-radius: 100px;
}
.cna-sec-card .stat {
  padding-top: 14px; border-top: 1px solid rgba(241,235,224,0.15);
  display: flex; justify-content: space-between; align-items: baseline;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: rgba(241,235,224,0.55); text-transform: uppercase;
}
.cna-sec-card .stat .red { color: var(--steel-red-lt); }
.cna-sec-card .stat .v { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; color: var(--steel-cream); letter-spacing: -0.01em; text-transform: none; }

/* Featured case */
.cna-case {
  padding: 96px 48px; background: var(--steel-bone);
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
  display: grid; grid-template-columns: 1.4fr 1fr; gap: 32px;
}
.cna-case-img {
  position: relative; aspect-ratio: 16/10;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  border: 1px solid var(--steel-ink);
  overflow: hidden;
}
.cna-case-img::before {
  content:''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 70% 30%, rgba(142,27,34,0.12), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.cna-case-img::after {
  content: 'IMAGEM · HOSPITAL ALBANO · BELO HORIZONTE · ENTREGA 2023';
  position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  letter-spacing: 0.32em; color: rgba(241,235,224,0.18);
}
.cna-case-img .stat {
  position: absolute; top: 22px; left: 22px;
  background: var(--steel-red); color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase; padding: 8px 14px;
  display: flex; align-items: center; gap: 10px;
}
.cna-case-img .stat .dot { width: 6px; height: 6px; background: var(--steel-cream); border-radius: 50%; }
.cna-case-img .stamp {
  position: absolute; bottom: 20px; right: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: rgba(241,235,224,0.45); text-transform: uppercase;
}

.cna-case-info {
  background: var(--steel-cream); border: 1px solid var(--steel-border);
  padding: 32px 30px; display: flex; flex-direction: column;
}
.cna-case-info .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 14px;
}
.cna-case-info h3 {
  font-family: 'DM Serif Display', serif; font-size: 48px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-black);
  margin-bottom: 20px;
}
.cna-case-info h3 em { font-style: italic; color: var(--steel-red); }
.cna-case-info p { font-size: 14.5px; line-height: 1.7; color: var(--steel-graphite); margin-bottom: 22px; }
.cna-case-info .quote {
  background: var(--steel-paper); border-left: 3px solid var(--steel-red);
  padding: 18px 20px; margin-bottom: 22px;
}
.cna-case-info .quote p {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 18px; color: var(--steel-ink); margin-bottom: 12px;
}
.cna-case-info .quote .attr {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}
.cna-case-info .rows { margin-top: auto; }
.cna-case-info .rows .row {
  display: grid; grid-template-columns: 1fr auto; padding: 12px 0;
  border-bottom: 1px solid var(--steel-border);
}
.cna-case-info .rows .row:last-child { border-bottom: none; }
.cna-case-info .rows .rk {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}
.cna-case-info .rows .rv {
  font-family: 'DM Serif Display', serif; font-size: 18px;
  color: var(--steel-ink); letter-spacing: -0.005em;
}
.cna-case-info .rows .rv em { font-style: italic; color: var(--steel-red); }

/* Capabilities table */
.cna-cap {
  background: var(--steel-cream); padding: 96px 48px;
}
.cna-cap-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 64px; align-items: end;
  padding-bottom: 24px; margin-bottom: 0;
  border-bottom: 2px solid var(--steel-ink);
}
.cna-cap-head .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase; margin-bottom: 14px; display: flex; align-items: center; gap: 12px; }
.cna-cap-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cna-cap-head h3 { font-family: 'DM Serif Display', serif; font-size: 52px; line-height: 1; letter-spacing: -0.022em; color: var(--steel-black); }
.cna-cap-head h3 em { font-style: italic; color: var(--steel-red); }
.cna-cap-head p { font-size: 15px; line-height: 1.7; color: var(--steel-graphite); max-width: 460px; }

.cna-cap-tbl {
  display: grid; grid-template-columns: 1.4fr repeat(4, 1fr);
  margin-top: 24px;
}
.cna-cap-tbl .hd {
  padding: 18px 14px;
  background: var(--steel-black); color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
  letter-spacing: 0.18em; text-transform: uppercase;
}
.cna-cap-tbl .hd.acc { background: var(--steel-red); }
.cna-cap-tbl .hd:first-child {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 20px; letter-spacing: 0;
  color: var(--steel-cream); text-transform: none;
}
.cna-cap-tbl .row-label {
  padding: 16px 14px 16px 0; border-bottom: 1px solid var(--steel-border);
  font-family: 'DM Serif Display', serif; font-size: 19px;
  color: var(--steel-ink); letter-spacing: -0.01em;
}
.cna-cap-tbl .row-label em { font-style: italic; color: var(--steel-red); }
.cna-cap-tbl .row-label .sub {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite);
  margin-top: 4px; text-transform: uppercase;
}
.cna-cap-tbl .cell {
  padding: 16px 14px; border-bottom: 1px solid var(--steel-border);
  border-left: 1px solid var(--steel-border);
  font-family: 'DM Serif Display', serif; font-size: 18px;
  color: var(--steel-ink); letter-spacing: -0.005em;
  display: flex; align-items: center; gap: 8px;
}
.cna-cap-tbl .cell.yes::before { content: '●'; color: var(--steel-red); font-size: 11px; }
.cna-cap-tbl .cell.no { color: var(--steel-stone); }
.cna-cap-tbl .cell.no::before { content: '—'; color: var(--steel-stone); }

/* Numbers */
.cna-nums {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 0 48px;
  display: grid; grid-template-columns: auto repeat(4, 1fr);
}
.cna-nums .lab {
  padding: 48px 28px 48px 0;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase;
  border-right: 1px solid rgba(241,235,224,0.12);
  display: flex; align-items: center;
  max-width: 200px; line-height: 1.6;
}
.cna-nums .cell {
  padding: 48px 24px; border-right: 1px solid rgba(241,235,224,0.12);
}
.cna-nums .cell:last-child { border-right: none; }
.cna-nums .cell .v {
  font-family: 'DM Serif Display', serif; font-size: 64px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-cream); margin-bottom: 8px;
}
.cna-nums .cell .v em { font-style: italic; color: var(--steel-red-lt); font-size: 30px; }
.cna-nums .cell .v small { font-size: 26px; color: rgba(241,235,224,0.6); font-style: italic; }
.cna-nums .cell .k {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.18em; color: rgba(241,235,224,0.55); text-transform: uppercase; line-height: 1.55;
}

/* Clients */
.cna-clients {
  background: var(--steel-cream);
  padding: 80px 48px;
}
.cna-clients-head {
  display: grid; grid-template-columns: auto 1fr;
  gap: 56px; align-items: end;
  padding-bottom: 22px; margin-bottom: 30px;
  border-bottom: 2px solid var(--steel-ink);
}
.cna-clients-head .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase; display: flex; align-items: center; gap: 12px; }
.cna-clients-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cna-clients-head h3 { font-family: 'DM Serif Display', serif; font-size: 44px; line-height: 1; letter-spacing: -0.022em; color: var(--steel-black); }
.cna-clients-head h3 em { font-style: italic; color: var(--steel-red); }
.cna-clients-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid var(--steel-border);
  border-left: 1px solid var(--steel-border);
}
.cna-client {
  padding: 32px 24px; aspect-ratio: 4/2.4;
  border-right: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
  display: flex; flex-direction: column; justify-content: space-between;
  background: var(--steel-paper);
}
.cna-client .nm {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: var(--steel-black); letter-spacing: -0.005em; line-height: 1;
}
.cna-client .nm em { color: var(--steel-red); }
.cna-client .seg {
  font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}

/* CTA */
.cna-cta {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 96px 48px;
  display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: center;
  position: relative; overflow: hidden;
}
.cna-cta::before { content:''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent 0 40px, rgba(0,0,0,0.04) 40px 41px); }
.cna-cta .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: rgba(247,242,233,0.7); text-transform: uppercase;
  margin-bottom: 18px; display: flex; align-items: center; gap: 12px; position: relative;
}
.cna-cta .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-cream); }
.cna-cta h2 {
  font-family: 'DM Serif Display', serif; font-size: 72px;
  line-height: 0.98; letter-spacing: -0.025em; color: var(--steel-cream); position: relative;
}
.cna-cta h2 em { font-style: italic; color: var(--steel-black); }
.cna-cta-card {
  background: var(--steel-cream); color: var(--steel-ink); padding: 36px 32px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.18);
}
.cna-cta-card h3 { font-family: 'DM Serif Display', serif; font-size: 30px; letter-spacing: -0.012em; margin-bottom: 6px; }
.cna-cta-card h3 em { font-style: italic; color: var(--steel-red); }
.cna-cta-card p { font-size: 13.5px; color: var(--steel-graphite); margin-bottom: 22px; }
.cna-cta-card .field { display: flex; flex-direction: column; gap: 4px; padding: 14px 0; border-bottom: 1px solid var(--steel-border); }
.cna-cta-card .field:last-of-type { border-bottom: none; }
.cna-cta-card .field .k { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; color: var(--steel-stone); text-transform: uppercase; }
.cna-cta-card .field .v { font-family: 'DM Serif Display', serif; font-size: 19px; color: var(--steel-ink); }
.cna-cta-card button { background: var(--steel-black); color: var(--steel-cream); padding: 18px; text-align: center; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-top: 14px; width: 100%; display: block; border: none; }

/* Footer */
.cna-foot { background: var(--steel-black); color: var(--steel-cream); padding: 56px 48px 24px; }
.cna-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.cna-foot .bw { font-family: 'Anton', sans-serif; font-size: 52px; line-height: 0.95; color: var(--steel-cream); letter-spacing: 0.02em; }
.cna-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.cna-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 20px; color: rgba(241,235,224,0.7); max-width: 340px; line-height: 1.4; }
.cna-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.cna-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.cna-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function ConstructA() {
  return (
    <div className="steel stl-cna">
      <style>{ConstructA_CSS}</style>

      <div className="cna-top">
        <div className="l">
          <span><span className="red">●</span> Construções B2B · 1,2M m² entregues</span>
          <span>Atendimento nacional</span>
        </div>
        <div className="r">
          <span>+55 11 4002 8922</span>
          <span>novos@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      <nav className="cna-nav">
        <div className="logo">
          <div className="cna-mark"><span className="ca"></span><span className="cb"></span></div>
          <div>
            <div className="lw">STEEL</div>
            <div className="ls">Construções &amp; Empreendimentos</div>
          </div>
        </div>
        <ul>
          <li><a>Empreendimentos</a></li>
          <li><a className="active">Construções</a></li>
          <li><a>A Steel</a></li>
          <li><a>Processo</a></li>
          <li><a>Imprensa</a></li>
          <li><a>Contato</a></li>
        </ul>
        <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <a className="cna-btn-out">Portfólio B2B ↓</a>
          <a className="cna-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="cna-hero">
        <div>
          <div className="ey">Cap. 01 · Construções B2B</div>
          <h1>Construímos<br/>para quem<br/><em>opera.</em></h1>
        </div>
        <div>
          <p className="lede">A Steel é também a construtora — sob contrato a preço fechado, BIM compartilhado e SLA por marco. Para <em>corporativo, industrial, saúde</em> e <em>retrofit.</em></p>
          <div className="actions">
            <a className="cna-btn-red">Solicitar proposta →</a>
            <a className="cna-btn-out">Portfólio ↓</a>
          </div>
          <div className="meta">
            <div><div className="k">Entregue desde 1994</div><div className="v">1,2 <em>M m²</em></div></div>
            <div><div className="k">Atendimento</div><div className="v">Nacional</div></div>
            <div><div className="k">Ticket mínimo</div><div className="v">R$ 6 <em>milhões</em></div></div>
            <div><div className="k">Modelo</div><div className="v">Preço <em>fechado</em> / IPD</div></div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="cna-sectors">
        <div className="cna-sec-head">
          <div>
            <div className="ey">Cap. 02 · Setores</div>
            <h3>Quatro setores<br/><em>maduros.</em></h3>
          </div>
          <p>Quatro setores em que a Steel construiu volume suficiente para ter time dedicado, padrão técnico próprio e curva de aprendizado consolidada.</p>
        </div>
        <div className="cna-sec-grid">
          <div className="cna-sec-card">
            <div className="n">01</div>
            <div className="lab">Corporativo</div>
            <h4>Lajes e <em>sedes.</em></h4>
            <p>Edifícios corporativos novos e build-to-suit, lajes de 1.500 a 18.000 m², sede única, retrofit.</p>
            <div className="pill">
              <span>BIM LOD 350</span><span>LEED v4</span><span>AQUA</span>
            </div>
            <div className="stat"><span className="red">28 entregues</span><span className="v">SP · MG · DF</span></div>
          </div>
          <div className="cna-sec-card">
            <div className="n">02</div>
            <div className="lab">Industrial</div>
            <h4>Galpões e <em>CDs.</em></h4>
            <p>Centros de distribuição, galpões logísticos, plantas industriais leves. Estrutura pré-fabricada própria.</p>
            <div className="pill">
              <span>Pré-fab</span><span>ISO 45001</span><span>Tilt-up</span>
            </div>
            <div className="stat"><span className="red">19 entregues</span><span className="v">+ 420k m²</span></div>
          </div>
          <div className="cna-sec-card">
            <div className="n">03</div>
            <div className="lab">Saúde</div>
            <h4>Hospitais &amp;<br/><em>clínicas.</em></h4>
            <p>Hospitais novos, ampliações com obra ao lado do operacional, centros clínicos especializados.</p>
            <div className="pill">
              <span>ANVISA RDC 50</span><span>JCI</span><span>HEPA</span>
            </div>
            <div className="stat"><span className="red">8 entregues</span><span className="v">+ 1.420 leitos</span></div>
          </div>
          <div className="cna-sec-card">
            <div className="n">04</div>
            <div className="lab">Retrofit</div>
            <h4>Reuso e <em>conversão.</em></h4>
            <p>Reuso adaptativo de patrimônio industrial e tombado. Galpões em lofts, sedes em galerias, casarões em hotéis.</p>
            <div className="pill">
              <span>IPHAN</span><span>Patrimônio</span><span>Reuso</span>
            </div>
            <div className="stat"><span className="red">12 entregues</span><span className="v">SP · MG</span></div>
          </div>
        </div>
      </section>

      {/* Featured case */}
      <section className="cna-case">
        <div className="cna-case-img">
          <div className="stat"><span className="dot"></span>Caso · saúde · entregue 2023</div>
          <div className="stamp">FICHA CASE-ALB-001 · STEEL B2B</div>
        </div>
        <div className="cna-case-info">
          <div className="k">Cap. 03 · Caso em destaque</div>
          <h3>Hospital<br/><em>Albano.</em></h3>
          <p>Ampliação de 186 leitos em hospital geral em operação 24/7. Obra ao lado do hospital ativo, com cronograma negociado por bloco. Entregue em 22 meses, dois meses antes do contrato.</p>
          <div className="quote">
            <p>"Trabalhamos com a Steel num cronograma cirúrgico, literalmente — a UTI continuou operando do outro lado da parede."</p>
            <div className="attr">Dr. Renato Albano · Diretor geral · Hospital Albano</div>
          </div>
          <div className="rows">
            <div className="row"><span className="rk">Setor</span><span className="rv">Saúde · <em>ampliação</em></span></div>
            <div className="row"><span className="rk">Área construída</span><span className="rv">24.000 <em>m²</em></span></div>
            <div className="row"><span className="rk">Leitos adicionados</span><span className="rv">+186 <em>leitos</em></span></div>
            <div className="row"><span className="rk">Duração</span><span className="rv">22 <em>meses</em></span></div>
            <div className="row"><span className="rk">Modelo contratual</span><span className="rv">EPC <em>· preço fechado</em></span></div>
            <div className="row"><span className="rk">Atraso</span><span className="rv">−60 <em>dias (adiantado)</em></span></div>
          </div>
        </div>
      </section>

      {/* Capabilities table */}
      <section className="cna-cap">
        <div className="cna-cap-head">
          <div>
            <div className="ey">Cap. 04 · Capacidades por setor</div>
            <h3>O que a Steel<br/><em>faz, por setor.</em></h3>
          </div>
          <p>Resumo de capacidades por setor. Em todos, a Steel atua como construtora sob contrato ou em modelo integrado (IPD), sem terceirização do canteiro.</p>
        </div>

        <div className="cna-cap-tbl">
          <div className="hd">Capacidades / setor</div>
          <div className="hd">Corporativo</div>
          <div className="hd">Industrial</div>
          <div className="hd acc">Saúde</div>
          <div className="hd">Retrofit</div>

          <div className="row-label">Estrutura própria <em>de canteiro</em><div className="sub">Sem terceiros</div></div>
          <div className="cell yes">Integral</div>
          <div className="cell yes">Integral</div>
          <div className="cell yes">Integral</div>
          <div className="cell yes">Integral</div>

          <div className="row-label">Pré-fabricados <em>na obra</em><div className="sub">Pátio Steel</div></div>
          <div className="cell yes">Disponível</div>
          <div className="cell yes">Padrão</div>
          <div className="cell no">Sob projeto</div>
          <div className="cell no">Caso a caso</div>

          <div className="row-label">Coordenação <em>BIM</em><div className="sub">LOD nível</div></div>
          <div className="cell yes">LOD 350</div>
          <div className="cell yes">LOD 300</div>
          <div className="cell yes">LOD 400</div>
          <div className="cell yes">LOD 350</div>

          <div className="row-label">Modelo <em>contratual</em><div className="sub">Padrão</div></div>
          <div className="cell yes">EPC / IPD</div>
          <div className="cell yes">EPC</div>
          <div className="cell yes">EPC / IPD</div>
          <div className="cell yes">EPC / Cost+</div>

          <div className="row-label">Operação <em>simultânea</em><div className="sub">Obra com prédio em uso</div></div>
          <div className="cell yes">Sim</div>
          <div className="cell no">Não</div>
          <div className="cell yes">Especialidade</div>
          <div className="cell yes">Sim</div>

          <div className="row-label">Padrão <em>regulatório</em></div>
          <div className="cell yes">NBR 16280</div>
          <div className="cell yes">ABNT NBR 13.531</div>
          <div className="cell yes">RDC 50 / JCI</div>
          <div className="cell yes">IPHAN / CONDEPHAAT</div>
        </div>
      </section>

      {/* Numbers */}
      <section className="cna-nums">
        <div className="lab">Steel<br/>Construções<br/>B2B · 1994 — 2026</div>
        <div className="cell"><div className="v">67<em>obras</em></div><div className="k">B2B entregues<br/>em 32 anos</div></div>
        <div className="cell"><div className="v">1,2<small>M m²</small></div><div className="k">de área construída<br/>e entregue</div></div>
        <div className="cell"><div className="v">94<em>%</em></div><div className="k">no prazo contratual<br/>ou adiantado</div></div>
        <div className="cell"><div className="v">0<em>·</em></div><div className="k">incidentes fatais<br/>desde 2015</div></div>
      </section>

      {/* Clients */}
      <section className="cna-clients">
        <div className="cna-clients-head">
          <div>
            <div className="ey">Cap. 05 · Clientes B2B</div>
          </div>
          <h3>Algumas empresas que <em>construíram</em> com a Steel.</h3>
        </div>
        <div className="cna-clients-grid">
          <div className="cna-client"><div className="nm">Grupo <em>Volare</em></div><div className="seg">Sede corporativa · Vinhedo · 2022</div></div>
          <div className="cna-client"><div className="nm">Hospital <em>Albano</em></div><div className="seg">Ampliação · BH · 2023</div></div>
          <div className="cna-client"><div className="nm">Grupo <em>Maia</em></div><div className="seg">CD logístico · Itupeva · 2025</div></div>
          <div className="cna-client"><div className="nm">Editora <em>Larissa</em></div><div className="seg">Sede + reuso · SP · 2019</div></div>
          <div className="cna-client"><div className="nm">Banco <em>Pinheiros</em></div><div className="seg">Retrofit · SP · 2020</div></div>
          <div className="cna-client"><div className="nm">Universidade <em>Maranhão</em></div><div className="seg">Campus · BH · 2018</div></div>
          <div className="cna-client"><div className="nm">Hotel <em>Saint Marche</em></div><div className="seg">Conversão · SP · 2021</div></div>
          <div className="cna-client"><div className="nm">Grupo <em>Florença</em></div><div className="seg">Sede · DF · 2024</div></div>
          <div className="cna-client"><div className="nm">Indústria <em>Caçapava</em></div><div className="seg">Planta nova · SP · 2017</div></div>
          <div className="cna-client"><div className="nm">Clínica <em>Lúcida</em></div><div className="seg">Oncologia · SP · 2022</div></div>
          <div className="cna-client"><div className="nm">Câmara <em>Setorial</em></div><div className="seg">Auditório · DF · 2020</div></div>
          <div className="cna-client"><div className="nm">Polo <em>Sul</em></div><div className="seg">CD em curso · Itupeva · 2027</div></div>
        </div>
      </section>

      {/* CTA */}
      <section className="cna-cta">
        <div>
          <div className="ey">Iniciar conversa B2B</div>
          <h2>Tem um projeto<br/>para <em>construir?</em></h2>
        </div>
        <div className="cna-cta-card">
          <h3>Proposta em <em>2 semanas.</em></h3>
          <p>Compartilhe escopo, briefing ou anteprojeto. A direção de obras retorna com leitura técnica e proposta de modelo contratual em 14 dias.</p>
          <div className="field"><div className="k">Direção · B2B / obras</div><div className="v">fabio.camargo@steelconstrucoes.com.br</div></div>
          <div className="field"><div className="k">Telefone direto</div><div className="v">+55 11 4002 8922</div></div>
          <button>Solicitar proposta →</button>
        </div>
      </section>

      <footer className="cna-foot">
        <div className="cna-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col"><h4>Construções B2B</h4><ul><li>Corporativo</li><li>Industrial</li><li>Saúde</li><li>Retrofit</li><li>Portfólio completo</li></ul></div>
          <div className="col"><h4>Steel</h4><ul><li>A Steel</li><li>Processo</li><li>Empreendimentos</li><li>Investidores</li></ul></div>
          <div className="col"><h4>Contato</h4><ul><li>+55 11 4002 8922</li><li>novos@steelconstrucoes.com.br</li><li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li></ul></div>
        </div>
        <div className="cna-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.ConstructA = ConstructA;

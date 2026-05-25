/* global React */

// ─── Construções B2B · Variação B "Aço Cinematográfico" ─────────────
// B2B com pegada galeria/foto: hero escuro full-bleed, casos como
// fichas grandes com foto editorial, depoimento de cliente em pull-quote,
// timeline horizontal de obras entregues, contato com retrato. .stl-cnb

const ConstructB_CSS = `
.stl-cnb {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px; line-height: 1.65; width: 100%;
}

.cnb-nav {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.cnb-nav .logo { display: flex; align-items: center; gap: 14px; }
.cnb-mark { width: 40px; height: 40px; background: var(--steel-red); position: relative; }
.cnb-mark::before { content:''; position:absolute; left:14%; right:14%; top:46%; height:7%; background: var(--steel-cream); transform: rotate(-45deg); }
.cnb-mark .ca { position:absolute; top:16%; right:16%; width:28%; height:28%; background: var(--steel-cream); }
.cnb-mark .cb { position:absolute; bottom:14%; left:14%; width:22%; height:22%; background: var(--steel-cream); }
.cnb-nav .lw { font-family: 'Anton', sans-serif; font-size: 24px; letter-spacing: 0.02em; color: var(--steel-cream); }
.cnb-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-top: 4px; }
.cnb-nav ul { display: flex; gap: 26px; justify-self: center; }
.cnb-nav ul a { font-size: 13px; font-weight: 500; color: rgba(241,235,224,0.7); padding: 8px 4px; border-bottom: 2px solid transparent; }
.cnb-nav ul a.active { color: var(--steel-cream); border-bottom-color: var(--steel-red); }
.cnb-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 12px 22px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.cnb-btn-ghost { background: transparent; color: var(--steel-cream); border: 1px solid rgba(241,235,224,0.3); padding: 11px 20px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }

/* Hero full bleed */
.cnb-hero {
  position: relative;
  height: 880px;
  background: linear-gradient(165deg, #2a2622 0%, #0f0e0d 100%);
  color: var(--steel-cream); overflow: hidden;
}
.cnb-hero::before {
  content:''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 70% 30%, rgba(142,27,34,0.22), transparent 55%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.cnb-hero::after {
  content: 'IMAGEM · CANTEIRO INDUSTRIAL · CD LOGÍSTICA SUL · STEEL 2025';
  position: absolute; left: 50%; top: 36%; transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  letter-spacing: 0.32em; color: rgba(241,235,224,0.15);
}
.cnb-hero-inner {
  position: relative; z-index: 2;
  padding: 56px 48px 48px; height: 100%;
  display: flex; flex-direction: column; justify-content: space-between;
}
.cnb-hero-top {
  display: flex; justify-content: space-between; align-items: flex-start;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase; color: rgba(241,235,224,0.55);
}
.cnb-hero-top .red { color: var(--steel-red-lt); display: flex; align-items: center; gap: 8px; }
.cnb-hero-top .red .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; box-shadow: 0 0 0 5px rgba(142,27,34,0.18); }
.cnb-hero-top .r { display: flex; gap: 26px; }

.cnb-hero-mid {
  flex: 1; display: flex; flex-direction: column; justify-content: center;
}
.cnb-hero-mid .ey {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 30px; color: var(--steel-red-lt); margin-bottom: 14px;
}
.cnb-hero-mid h1 {
  font-family: 'DM Serif Display', serif; font-weight: 400;
  font-size: 208px; line-height: 0.88;
  letter-spacing: -0.04em; color: var(--steel-cream);
}
.cnb-hero-mid h1 em { font-style: italic; color: var(--steel-red-lt); }

.cnb-hero-bot {
  display: grid; grid-template-columns: 1.5fr 1fr auto;
  gap: 56px; align-items: end;
}
.cnb-hero-bot .lede {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 24px; line-height: 1.45;
  color: rgba(241,235,224,0.85); max-width: 560px;
}
.cnb-hero-bot .lede em { color: var(--steel-red-lt); }
.cnb-hero-bot .mini { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 28px; }
.cnb-hero-bot .mini .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: rgba(241,235,224,0.45); text-transform: uppercase; margin-bottom: 6px;
}
.cnb-hero-bot .mini .v {
  font-family: 'DM Serif Display', serif; font-size: 26px;
  color: var(--steel-cream); letter-spacing: -0.012em;
}
.cnb-hero-bot .mini .v em { font-style: italic; color: var(--steel-red-lt); font-size: 16px; }
.cnb-hero-bot .ctas { display: flex; flex-direction: column; gap: 10px; }

/* Sector strip */
.cnb-sec {
  background: var(--steel-cream); padding: 96px 48px;
  border-bottom: 1px solid var(--steel-border);
}
.cnb-sec-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 56px; align-items: end;
  padding-bottom: 32px; margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.cnb-sec-head .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase; margin-bottom: 14px; display: flex; align-items: center; gap: 12px; }
.cnb-sec-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cnb-sec-head h2 { font-family: 'DM Serif Display', serif; font-size: 64px; line-height: 1; letter-spacing: -0.025em; color: var(--steel-black); }
.cnb-sec-head h2 em { font-style: italic; color: var(--steel-red); }
.cnb-sec-head p { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; line-height: 1.4; color: var(--steel-graphite); max-width: 500px; }

.cnb-sec-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--steel-ink);
}
.cnb-sec-item {
  padding: 32px 24px 32px 0;
  border-right: 1px solid var(--steel-border);
  position: relative;
}
.cnb-sec-item:nth-child(n+2) { padding-left: 24px; }
.cnb-sec-item:last-child { border-right: none; }
.cnb-sec-item .n {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 64px; line-height: 0.85; color: var(--steel-red); margin-bottom: 18px;
}
.cnb-sec-item .lab {
  font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase; margin-bottom: 14px;
}
.cnb-sec-item h4 {
  font-family: 'DM Serif Display', serif; font-size: 32px;
  line-height: 1.05; letter-spacing: -0.015em; color: var(--steel-black); margin-bottom: 16px;
}
.cnb-sec-item h4 em { font-style: italic; color: var(--steel-red); }
.cnb-sec-item p { font-size: 14px; line-height: 1.7; color: var(--steel-graphite); margin-bottom: 18px; }
.cnb-sec-item .stat {
  padding-top: 14px; border-top: 1px solid var(--steel-border);
  display: flex; justify-content: space-between; align-items: baseline;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}
.cnb-sec-item .stat .v { font-family: 'DM Serif Display', serif; font-size: 20px; letter-spacing: -0.005em; color: var(--steel-ink); text-transform: none; }
.cnb-sec-item .stat .v em { font-style: italic; color: var(--steel-red); }

/* Case row */
.cnb-case {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: 56px; align-items: stretch;
  border-bottom: 1px solid var(--steel-border);
}
.cnb-case.flip { grid-template-columns: 1.4fr 1fr; }
.cnb-case.flip .pic { order: 2; }
.cnb-case.dark { background: var(--steel-coal); color: var(--steel-cream); }
.cnb-case.dark h3 { color: var(--steel-cream); }
.cnb-case.dark .body { color: rgba(241,235,224,0.7); }
.cnb-case.dark .body strong { color: var(--steel-cream); }
.cnb-case.dark .stats .k { color: rgba(241,235,224,0.5); }
.cnb-case.dark .stats .v { color: var(--steel-cream); }
.cnb-case.dark .stats { border-color: rgba(241,235,224,0.15); }
.cnb-case.dark .stats > div { border-color: rgba(241,235,224,0.12); }
.cnb-case.dark .quote { background: rgba(241,235,224,0.05); }
.cnb-case.dark .quote p { color: var(--steel-cream); }
.cnb-case.dark .quote .attr { color: rgba(241,235,224,0.55); }

.cnb-case .pic {
  position: relative;
  aspect-ratio: 4/4.4;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  overflow: hidden;
}
.cnb-case:nth-of-type(2) .pic { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.cnb-case:nth-of-type(3) .pic { background: linear-gradient(170deg, #38332c, #14130f); }
.cnb-case .pic::before {
  content:''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 80px);
}
.cnb-case .pic::after {
  content: attr(data-label);
  position: absolute; bottom: 22px; left: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(241,235,224,0.4);
  max-width: 280px; line-height: 1.6;
}
.cnb-case .pic .no {
  position: absolute; top: 22px; left: 22px;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 56px; line-height: 0.85; color: rgba(241,235,224,0.5);
}
.cnb-case .pic .lab {
  position: absolute; top: 24px; right: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(241,235,224,0.45);
  text-align: right;
}

.cnb-case .content { display: flex; flex-direction: column; justify-content: center; }
.cnb-case .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
}
.cnb-case .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cnb-case.dark .ey { color: var(--steel-red-lt); }
.cnb-case h3 {
  font-family: 'DM Serif Display', serif; font-size: 72px;
  line-height: 0.95; letter-spacing: -0.025em; color: var(--steel-black);
  margin-bottom: 22px;
}
.cnb-case h3 em { font-style: italic; color: var(--steel-red); }
.cnb-case.dark h3 em { color: var(--steel-red-lt); }
.cnb-case .body { font-size: 15px; line-height: 1.75; color: var(--steel-graphite); margin-bottom: 24px; max-width: 540px; }
.cnb-case .body strong { color: var(--steel-ink); font-weight: 600; }
.cnb-case .body em { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--steel-red); }
.cnb-case.dark .body em { color: var(--steel-red-lt); }
.cnb-case .stats {
  display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--steel-border);
  margin-bottom: 24px;
}
.cnb-case .stats > div {
  padding: 16px 14px 16px 0;
  border-right: 1px solid var(--steel-border);
}
.cnb-case .stats > div:nth-child(n+2) { padding-left: 14px; }
.cnb-case .stats > div:last-child { border-right: none; }
.cnb-case .stats .k {
  font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
  letter-spacing: 0.16em; color: var(--steel-stone); text-transform: uppercase; margin-bottom: 6px;
}
.cnb-case .stats .v {
  font-family: 'DM Serif Display', serif; font-size: 24px;
  letter-spacing: -0.012em; color: var(--steel-ink);
}
.cnb-case .stats .v em { font-style: italic; color: var(--steel-red); font-size: 14px; }
.cnb-case.dark .stats .v em { color: var(--steel-red-lt); }
.cnb-case .quote {
  background: var(--steel-paper); padding: 18px 22px;
  border-left: 3px solid var(--steel-red);
}
.cnb-case .quote p { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 18px; color: var(--steel-ink); margin-bottom: 10px; }
.cnb-case .quote .attr { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--steel-graphite); }

/* Timeline */
.cnb-tl {
  background: var(--steel-cream); padding: 96px 48px;
}
.cnb-tl-head {
  display: grid; grid-template-columns: auto 1fr;
  gap: 48px; align-items: end;
  padding-bottom: 32px; margin-bottom: 0;
  border-bottom: 2px solid var(--steel-ink);
}
.cnb-tl-head .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase; display: flex; align-items: center; gap: 12px; }
.cnb-tl-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cnb-tl-head h3 { font-family: 'DM Serif Display', serif; font-size: 52px; line-height: 1; letter-spacing: -0.022em; color: var(--steel-black); }
.cnb-tl-head h3 em { font-style: italic; color: var(--steel-red); }

.cnb-tl-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid var(--steel-ink);
  position: relative; margin-top: 32px;
}
.cnb-tl-cell {
  padding: 30px 18px 32px 0;
  border-right: 1px solid var(--steel-border);
  position: relative;
}
.cnb-tl-cell:nth-child(n+2) { padding-left: 18px; }
.cnb-tl-cell:last-child { border-right: none; }
.cnb-tl-cell::before {
  content:''; position: absolute; top: -7px; left: 0;
  width: 12px; height: 12px; background: var(--steel-cream);
  border: 2px solid var(--steel-ink);
}
.cnb-tl-cell.acc::before { background: var(--steel-red); border-color: var(--steel-red); }
.cnb-tl-cell .yr {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 44px; line-height: 1; color: var(--steel-red);
  letter-spacing: -0.018em; margin-bottom: 14px;
}
.cnb-tl-cell .tit {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--steel-graphite); margin-bottom: 8px;
}
.cnb-tl-cell h5 {
  font-family: 'DM Serif Display', serif; font-size: 20px;
  letter-spacing: -0.012em; color: var(--steel-black); line-height: 1.1;
  margin-bottom: 8px;
}
.cnb-tl-cell h5 em { font-style: italic; color: var(--steel-red); }
.cnb-tl-cell p { font-size: 12.5px; line-height: 1.6; color: var(--steel-graphite); }

/* Pull quote */
.cnb-pull {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 120px 48px; text-align: center;
}
.cnb-pull blockquote {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 72px; line-height: 1.05;
  letter-spacing: -0.025em; color: var(--steel-cream);
  max-width: 1100px; margin: 0 auto;
}
.cnb-pull blockquote em { color: var(--steel-red-lt); }
.cnb-pull blockquote::before {
  content:'"'; font-family: 'DM Serif Display', serif;
  font-size: 170px; color: var(--steel-red);
  line-height: 0.5; display: block; margin-bottom: 16px;
}
.cnb-pull .attr {
  margin-top: 32px;
  display: inline-flex; align-items: center; gap: 18px;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(241,235,224,0.55);
}
.cnb-pull .attr::before { content:''; width: 36px; height: 1px; background: var(--steel-red); }

/* CTA */
.cnb-cta {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 120px 48px;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 80px; align-items: center;
  position: relative; overflow: hidden;
}
.cnb-cta::before { content:''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent 0 40px, rgba(0,0,0,0.05) 40px 41px); }
.cnb-cta .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: rgba(247,242,233,0.7); text-transform: uppercase; margin-bottom: 18px; display: flex; align-items: center; gap: 12px; position: relative; }
.cnb-cta .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-cream); }
.cnb-cta h2 { font-family: 'DM Serif Display', serif; font-size: 100px; line-height: 0.95; letter-spacing: -0.03em; color: var(--steel-cream); position: relative; }
.cnb-cta h2 em { font-style: italic; color: var(--steel-black); }
.cnb-cta-card { background: var(--steel-cream); color: var(--steel-ink); padding: 36px 32px; box-shadow: 0 32px 80px rgba(0,0,0,0.25); }
.cnb-cta-card h3 { font-family: 'DM Serif Display', serif; font-size: 30px; letter-spacing: -0.012em; margin-bottom: 8px; }
.cnb-cta-card h3 em { font-style: italic; color: var(--steel-red); }
.cnb-cta-card p { font-size: 13.5px; color: var(--steel-graphite); line-height: 1.65; margin-bottom: 22px; }
.cnb-cta-card .field { display: flex; flex-direction: column; gap: 4px; padding: 14px 0; border-bottom: 1px solid var(--steel-border); }
.cnb-cta-card .field:last-of-type { border-bottom: none; }
.cnb-cta-card .field .k { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; color: var(--steel-stone); text-transform: uppercase; }
.cnb-cta-card .field .v { font-family: 'DM Serif Display', serif; font-size: 19px; color: var(--steel-ink); }
.cnb-cta-card button { background: var(--steel-black); color: var(--steel-cream); padding: 18px; text-align: center; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-top: 14px; width: 100%; display: block; border: none; }

/* Footer */
.cnb-foot { background: var(--steel-black); color: var(--steel-cream); padding: 64px 48px 24px; }
.cnb-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.cnb-foot .bw { font-family: 'Anton', sans-serif; font-size: 56px; line-height: 0.95; letter-spacing: 0.02em; color: var(--steel-cream); }
.cnb-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.cnb-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; color: rgba(241,235,224,0.7); max-width: 360px; line-height: 1.4; }
.cnb-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.cnb-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.cnb-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function ConstructB() {
  return (
    <div className="steel stl-cnb">
      <style>{ConstructB_CSS}</style>

      <nav className="cnb-nav">
        <div className="logo">
          <div className="cnb-mark"><span className="ca"></span><span className="cb"></span></div>
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
          <a className="cnb-btn-ghost">Portfólio B2B ↓</a>
          <a className="cnb-btn-red">Solicitar proposta →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="cnb-hero">
        <div className="cnb-hero-inner">
          <div className="cnb-hero-top">
            <span className="red"><span className="dot"></span>1,2M m² entregues · 67 obras B2B · 1994—2026</span>
            <div className="r">
              <span>Edição 26 · Construções B2B</span>
              <span>Atendimento nacional</span>
              <span>SCR / CON / 26</span>
            </div>
          </div>

          <div className="cnb-hero-mid">
            <div className="ey">— para quem opera no dia seguinte —</div>
            <h1>Construímos<br/>para quem<br/><em>opera.</em></h1>
          </div>

          <div className="cnb-hero-bot">
            <p className="lede">
              A Steel é a construtora de quem entrega um edifício e <em>continua dentro dele</em>. Corporativo, industrial, saúde e retrofit — sob contrato a preço fechado, BIM compartilhado e SLA por marco.
            </p>
            <div className="mini">
              <div><div className="k">Obras entregues</div><div className="v">67 <em>obras</em></div></div>
              <div><div className="k">Área construída</div><div className="v">1,2 <em>M m²</em></div></div>
              <div><div className="k">No prazo</div><div className="v">94 <em>%</em></div></div>
              <div><div className="k">Ticket mínimo</div><div className="v">R$ 6 <em>mi</em></div></div>
            </div>
            <div className="ctas">
              <a className="cnb-btn-red">Solicitar proposta →</a>
              <a className="cnb-btn-ghost">Portfólio ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="cnb-sec">
        <div className="cnb-sec-head">
          <div>
            <div className="ey">Cap. 02 · Setores</div>
            <h2>Quatro setores<br/><em>maduros.</em></h2>
          </div>
          <p>Quatro setores em que a Steel construiu volume suficiente para ter time dedicado, padrão técnico próprio e curva de aprendizado consolidada.</p>
        </div>
        <div className="cnb-sec-grid">
          <div className="cnb-sec-item">
            <div className="n">01</div>
            <div className="lab">Corporativo</div>
            <h4>Lajes &amp;<br/><em>sedes.</em></h4>
            <p>Edifícios corporativos novos e build-to-suit, lajes de 1.500 a 18.000 m², sede única, retrofit corporativo.</p>
            <div className="stat"><span>BIM LOD 350 · LEED v4</span><span className="v">28 <em>entregues</em></span></div>
          </div>
          <div className="cnb-sec-item">
            <div className="n">02</div>
            <div className="lab">Industrial</div>
            <h4>Galpões e<br/><em>CDs.</em></h4>
            <p>Centros de distribuição, galpões logísticos e plantas industriais leves. Estrutura pré-fabricada produzida na obra.</p>
            <div className="stat"><span>Pré-fab · Tilt-up · ISO 45001</span><span className="v">19 <em>entregues</em></span></div>
          </div>
          <div className="cnb-sec-item">
            <div className="n">03</div>
            <div className="lab">Saúde</div>
            <h4>Hospitais &amp;<br/><em>clínicas.</em></h4>
            <p>Hospitais novos, ampliações com obra ao lado do operacional 24/7, centros clínicos especializados.</p>
            <div className="stat"><span>RDC 50 · JCI · HEPA</span><span className="v">8 <em>entregues</em></span></div>
          </div>
          <div className="cnb-sec-item">
            <div className="n">04</div>
            <div className="lab">Retrofit</div>
            <h4>Reuso &amp;<br/><em>conversão.</em></h4>
            <p>Reuso adaptativo de patrimônio industrial e tombado: galpões em lofts, sedes em galerias, casarões em hotéis.</p>
            <div className="stat"><span>IPHAN · CONDEPHAAT</span><span className="v">12 <em>entregues</em></span></div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="cnb-case">
        <div className="pic" data-label="FOTO · HOSPITAL ALBANO · BLOCO C — OBRA AO LADO DA UTI ATIVA">
          <span className="no">01</span>
          <span className="lab">CASE 01<br/>SAÚDE · MG</span>
        </div>
        <div className="content">
          <div className="ey">Cap. 03 · Caso · saúde · 2023</div>
          <h3>Hospital<br/><em>Albano.</em></h3>
          <div className="body">
            Ampliação de <strong>186 leitos</strong> em hospital geral em operação 24/7. Obra ao lado do hospital ativo, com cronograma negociado <em>por bloco</em> de UTI. Entregue em 22 meses, <strong>dois meses antes</strong> do contrato.
          </div>
          <div className="stats">
            <div><div className="k">Setor</div><div className="v">Saúde</div></div>
            <div><div className="k">Área</div><div className="v">24 <em>k m²</em></div></div>
            <div><div className="k">Leitos +</div><div className="v">186</div></div>
            <div><div className="k">Modelo</div><div className="v">EPC</div></div>
          </div>
          <div className="quote">
            <p>"Trabalhamos com a Steel num cronograma cirúrgico, literalmente — a UTI continuou operando do outro lado da parede."</p>
            <div className="attr">Dr. Renato Albano · Diretor geral · Hospital Albano</div>
          </div>
        </div>
      </section>

      <section className="cnb-case flip dark">
        <div className="pic" data-label="FOTO · SEDE VOLARE · VINHEDO — PRIMEIRA SEDE AQUA DO SETOR AUTOMOTIVO">
          <span className="no">02</span>
          <span className="lab">CASE 02<br/>CORPORATIVO · SP</span>
        </div>
        <div className="content">
          <div className="ey">Cap. 04 · Caso · corporativo · 2022</div>
          <h3>Sede<br/><em>Volare.</em></h3>
          <div className="body">
            <strong>9,4 mil m²</strong> em sede única corporativa, com 12 lajes, em Vinhedo. <em>Primeira sede AQUA-HQE</em> da indústria automotiva brasileira. Modelo IPD com BIM compartilhado entre Steel, escritório de arquitetura e cliente.
          </div>
          <div className="stats">
            <div><div className="k">Setor</div><div className="v">Corporativo</div></div>
            <div><div className="k">Área</div><div className="v">9,4 <em>k m²</em></div></div>
            <div><div className="k">Lajes</div><div className="v">12</div></div>
            <div><div className="k">Certificação</div><div className="v">AQUA</div></div>
          </div>
          <div className="quote">
            <p>"Era um cliente exigente, com BIM rodando dentro de casa. A Steel se encaixou no nosso modelo em uma semana."</p>
            <div className="attr">Laura Ribas · CFO · Grupo Volare</div>
          </div>
        </div>
      </section>

      <section className="cnb-case">
        <div className="pic" data-label="FOTO · CD LOGÍSTICA SUL · ITUPEVA — PÁTIO DE PRÉ-FABRICADOS NA OBRA">
          <span className="no">03</span>
          <span className="lab">CASE 03<br/>INDUSTRIAL · SP</span>
        </div>
        <div className="content">
          <div className="ey">Cap. 05 · Caso · industrial · em curso</div>
          <h3>CD Logística<br/><em>Sul.</em></h3>
          <div className="body">
            <strong>18 mil m²</strong>, 42 docas e estrutura tilt-up produzida no próprio canteiro. Obra em curso, <em>38% concluída</em>, com entrega prevista para Q2 2027. Cliente: Grupo Maia.
          </div>
          <div className="stats">
            <div><div className="k">Setor</div><div className="v">Industrial</div></div>
            <div><div className="k">Área</div><div className="v">18 <em>k m²</em></div></div>
            <div><div className="k">Docas</div><div className="v">42</div></div>
            <div><div className="k">Status</div><div className="v">38<em>%</em></div></div>
          </div>
          <div className="quote">
            <p>"O pátio de pré-fabricados está dentro da obra. Sem caminhão atravessando bairro residencial. Vizinhança agradece."</p>
            <div className="attr">Renata Alvim · Diretora · Grupo Maia</div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="cnb-pull">
        <blockquote>
          construímos <em>edifícios</em><br/>
          que continuam funcionando depois<br/>
          que viramos a chave.
        </blockquote>
        <div className="attr">Fábio Camargo · Direção de obras · Steel · 2026</div>
      </section>

      {/* Timeline */}
      <section className="cnb-tl">
        <div className="cnb-tl-head">
          <div>
            <div className="ey">Cap. 06 · Marcos B2B · 2009 → 2026</div>
          </div>
          <h3>Obras que <em>organizam</em> a história B2B.</h3>
        </div>
        <div className="cnb-tl-grid">
          <div className="cnb-tl-cell">
            <div className="yr">2009</div>
            <div className="tit">Marco 01 · Industrial</div>
            <h5>Sede <em>Volare</em> · I</h5>
            <p>Primeira obra B2B fora do residencial. Industrial em Vinhedo, 5,2k m².</p>
          </div>
          <div className="cnb-tl-cell">
            <div className="yr">2014</div>
            <div className="tit">Marco 02 · Corporativo</div>
            <h5>Banco <em>Pinheiros</em></h5>
            <p>Primeiro retrofit corporativo em casarão tombado, em SP.</p>
          </div>
          <div className="cnb-tl-cell acc">
            <div className="yr">2017</div>
            <div className="tit">Marco 03 · Saúde</div>
            <h5>Hospital <em>Albano</em> I</h5>
            <p>Primeira obra hospitalar. 86 leitos novos, em BH.</p>
          </div>
          <div className="cnb-tl-cell">
            <div className="yr">2021</div>
            <div className="tit">Marco 04 · Conversão</div>
            <h5>Hotel <em>Saint Marche</em></h5>
            <p>Conversão de galeria comercial dos anos 60 em hotel boutique. SP.</p>
          </div>
          <div className="cnb-tl-cell">
            <div className="yr">2023</div>
            <div className="tit">Marco 05 · Marco</div>
            <h5>Hospital <em>Albano</em> II</h5>
            <p>Ampliação de 186 leitos com a UTI operando. Entregue −60 dias.</p>
          </div>
          <div className="cnb-tl-cell">
            <div className="yr">2026<em>·</em></div>
            <div className="tit">Marco 06 · Hoje</div>
            <h5>67 obras <em>B2B</em></h5>
            <p>1,2M m². Time dedicado em 4 setores. 19 em curso, 5 em curso B2B.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cnb-cta">
        <div>
          <div className="ey">Iniciar conversa B2B</div>
          <h2>Tem um projeto<br/>para <em>construir?</em></h2>
        </div>
        <div className="cnb-cta-card">
          <h3>Proposta em <em>14 dias.</em></h3>
          <p>Compartilhe escopo, briefing ou anteprojeto. A direção de obras retorna com leitura técnica e proposta de modelo contratual em duas semanas.</p>
          <div className="field"><div className="k">Direção · obras &amp; B2B</div><div className="v">fabio.camargo@steelconstrucoes.com.br</div></div>
          <div className="field"><div className="k">Telefone direto</div><div className="v">+55 11 4002 8922</div></div>
          <button>Solicitar proposta →</button>
        </div>
      </section>

      <footer className="cnb-foot">
        <div className="cnb-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col"><h4>Construções B2B</h4><ul><li>Corporativo</li><li>Industrial</li><li>Saúde</li><li>Retrofit</li><li>Portfólio completo</li></ul></div>
          <div className="col"><h4>Steel</h4><ul><li>A Steel</li><li>Processo</li><li>Empreendimentos</li><li>Investidores</li></ul></div>
          <div className="col"><h4>Contato</h4><ul><li>+55 11 4002 8922</li><li>novos@steelconstrucoes.com.br</li><li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li></ul></div>
        </div>
        <div className="cnb-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.ConstructB = ConstructB;

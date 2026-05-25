/* global React */

// ─── Empreendimentos · Listagem · Variação B "Aço Editorial" ────────
// Catálogo como monografia: hero escuro com nº romanos, lista em linhas
// largas com imagem grande à esquerda + ficha à direita, separadores
// duros, vermelho como serifa de status. Scoped to .stl-lb.

const EmpListBCSS = `
.stl-lb {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.6;
  width: 100%;
}
.stl-lb .ff { font-family: 'DM Serif Display', serif; }

.lb-nav {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.lb-nav .logo { display: flex; align-items: center; gap: 14px; }
.lb-mark { width: 40px; height: 40px; background: var(--steel-red); position: relative; }
.lb-mark::before { content: ''; position: absolute; left: 14%; right: 14%; top: 46%; height: 7%; background: var(--steel-cream); transform: rotate(-45deg); }
.lb-mark .ca { position: absolute; top: 16%; right: 16%; width: 28%; height: 28%; background: var(--steel-cream); }
.lb-mark .cb { position: absolute; bottom: 14%; left: 14%; width: 22%; height: 22%; background: var(--steel-cream); }
.lb-nav .lw { font-family: 'Anton', sans-serif; font-size: 24px; letter-spacing: 0.02em; color: var(--steel-cream); }
.lb-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-top: 4px; }
.lb-nav ul { display: flex; gap: 26px; justify-self: center; }
.lb-nav ul a { font-size: 13px; font-weight: 500; color: rgba(241,235,224,0.7); padding: 8px 4px; border-bottom: 2px solid transparent; }
.lb-nav ul a.active { color: var(--steel-cream); border-bottom-color: var(--steel-red); }
.lb-nav .act { display: flex; gap: 12px; align-items: center; }
.lb-btn-red {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 12px 22px; font-size: 11.5px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
}
.lb-btn-ghost {
  background: transparent; color: var(--steel-cream);
  border: 1px solid rgba(241,235,224,0.3);
  padding: 11px 20px; font-size: 11.5px; font-weight: 600;
  letter-spacing: 0.16em; text-transform: uppercase;
}

/* Hero */
.lb-hero {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 80px 48px 56px;
  position: relative;
  overflow: hidden;
}
.lb-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 90% 20%, rgba(142,27,34,0.18), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
  pointer-events: none;
}
.lb-hero-inner { position: relative; z-index: 2; }
.lb-hero .top {
  display: flex; justify-content: space-between; align-items: flex-start;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.55);
  margin-bottom: 56px;
}
.lb-hero .top .red { color: var(--steel-red-lt); display: flex; align-items: center; gap: 8px; }
.lb-hero .top .red .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; box-shadow: 0 0 0 5px rgba(142,27,34,0.18); }
.lb-hero .top .r { display: flex; gap: 28px; }
.lb-hero .ey {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--steel-red-lt);
  margin-bottom: 14px;
}
.lb-hero h1 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 180px;
  line-height: 0.9;
  letter-spacing: -0.035em;
  color: var(--steel-cream);
}
.lb-hero h1 em { font-style: italic; color: var(--steel-red-lt); }
.lb-hero .bot {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 56px;
  align-items: end;
  margin-top: 56px;
  padding-top: 32px;
  border-top: 1px solid rgba(241,235,224,0.18);
}
.lb-hero .lede {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.45;
  color: rgba(241,235,224,0.82);
  max-width: 540px;
}
.lb-hero .lede em { color: var(--steel-red-lt); }
.lb-hero .stat-mini {
  display: flex; flex-direction: column; gap: 8px;
}
.lb-hero .stat-mini .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.45);
}
.lb-hero .stat-mini .v {
  font-family: 'DM Serif Display', serif;
  font-size: 36px;
  line-height: 1;
  color: var(--steel-cream);
  letter-spacing: -0.018em;
}
.lb-hero .stat-mini .v em { font-style: italic; color: var(--steel-red-lt); font-size: 22px; }
.lb-hero .stat-mini .lbl {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  color: rgba(241,235,224,0.5);
  margin-top: 4px;
}

/* Filter bar — slim */
.lb-filter {
  background: var(--steel-coal);
  color: var(--steel-cream);
  padding: 22px 48px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.1);
}
.lb-filter .groups { display: flex; gap: 32px; align-items: center; flex-wrap: wrap; }
.lb-filter .group { display: flex; gap: 8px; align-items: center; }
.lb-filter .group .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: rgba(241,235,224,0.45);
  text-transform: uppercase;
  margin-right: 8px;
}
.lb-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid rgba(241,235,224,0.3);
  color: rgba(241,235,224,0.7);
  border-radius: 100px;
}
.lb-chip.active { background: var(--steel-cream); color: var(--steel-black); border-color: var(--steel-cream); }
.lb-chip.red.active { background: var(--steel-red); border-color: var(--steel-red); color: var(--steel-cream); }
.lb-filter .right {
  display: flex; gap: 18px; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.55);
}
.lb-filter .right .red { color: var(--steel-red-lt); font-weight: 700; }

/* Editorial list */
.lb-list {
  background: var(--steel-cream);
  padding: 0 48px;
}
.lb-row {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
  align-items: stretch;
  padding: 64px 0;
  border-bottom: 1px solid var(--steel-border);
  position: relative;
}
.lb-row:last-child { border-bottom: none; }
.lb-row.flip { grid-template-columns: 1.6fr 1fr; }
.lb-row .lb-left {
  position: relative;
  aspect-ratio: 16/10;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  overflow: hidden;
}
.lb-row.flip .lb-left { order: 2; }
.lb-row:nth-of-type(2n) .lb-left { background: linear-gradient(155deg, #5a4d3e 0%, #2a2418 100%); }
.lb-row:nth-of-type(3n) .lb-left { background: linear-gradient(170deg, #38332c 0%, #14130f 100%); }
.lb-row:nth-of-type(4n) .lb-left { background: linear-gradient(160deg, #6a5e50 0%, #1a1612 100%); }
.lb-row .lb-left::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px);
}
.lb-row .lb-left::after {
  content: attr(data-label);
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.18);
  text-align: center;
}
.lb-row .lb-left .stat {
  position: absolute; top: 22px; left: 22px;
  background: rgba(15,14,13,0.55);
  border: 1px solid rgba(241,235,224,0.18);
  padding: 8px 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.85);
  display: flex; align-items: center; gap: 10px;
  border-radius: 100px;
  backdrop-filter: blur(6px);
}
.lb-row .lb-left .stat .dot { width: 6px; height: 6px; background: var(--steel-red); border-radius: 50%; }
.lb-row .lb-left .corner {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241,235,224,0.4);
}
.lb-row .lb-left .corner.br { bottom: 22px; right: 22px; }
.lb-row .lb-left .corner.bl { bottom: 22px; left: 22px; display: flex; align-items: center; gap: 10px; }
.lb-row .lb-left .corner.bl::after { content: ''; width: 56px; height: 1px; background: rgba(241,235,224,0.4); }
.lb-row .lb-left .progress {
  position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
  background: rgba(241,235,224,0.15);
}
.lb-row .lb-left .progress .fill { height: 100%; background: var(--steel-red); }

.lb-row .lb-right { display: flex; flex-direction: column; justify-content: center; }
.lb-row.flip .lb-right { order: 1; }
.lb-row .num {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 96px;
  line-height: 0.85;
  color: var(--steel-red);
  letter-spacing: -0.035em;
  margin-bottom: 22px;
}
.lb-row .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  margin-bottom: 14px;
  display: flex; gap: 12px; align-items: center;
}
.lb-row .meta .red { color: var(--steel-red); }
.lb-row h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 76px;
  line-height: 0.96;
  letter-spacing: -0.025em;
  color: var(--steel-black);
  margin-bottom: 18px;
}
.lb-row h3 em { font-style: italic; color: var(--steel-red); }
.lb-row p {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 21px;
  line-height: 1.45;
  color: var(--steel-graphite);
  margin-bottom: 28px;
  max-width: 480px;
}
.lb-row .specs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 28px;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.lb-row .specs div {
  padding: 16px 16px 16px 0;
  border-right: 1px solid var(--steel-border);
}
.lb-row .specs div:nth-child(n+2) { padding-left: 16px; }
.lb-row .specs div:last-child { border-right: none; }
.lb-row .specs .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-stone);
  margin-bottom: 6px;
}
.lb-row .specs .v {
  font-family: 'DM Serif Display', serif;
  font-size: 22px;
  color: var(--steel-ink);
  letter-spacing: -0.012em;
}
.lb-row .specs .v em { font-style: italic; color: var(--steel-red); font-size: 14px; }
.lb-row .actions { display: flex; gap: 12px; align-items: center; }
.lb-row .actions .btn-red {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 14px 22px;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.lb-row .actions .btn-out {
  background: transparent; color: var(--steel-ink);
  border: 1.5px solid var(--steel-ink);
  padding: 12.5px 20px;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}

/* Section break (red marker) */
.lb-sectionbreak {
  background: var(--steel-cream);
  padding: 80px 48px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 56px;
  align-items: center;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.lb-sectionbreak .ch {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 88px;
  color: var(--steel-red);
  letter-spacing: -0.03em;
  line-height: 0.85;
}
.lb-sectionbreak h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--steel-black);
}
.lb-sectionbreak h2 em { font-style: italic; color: var(--steel-red); }
.lb-sectionbreak .right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-graphite);
  text-align: right;
  max-width: 200px;
  line-height: 1.7;
}

/* CTA dark */
.lb-cta {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 120px 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.lb-cta::before {
  content: ''; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(45deg, transparent 0 40px, rgba(0,0,0,0.04) 40px 41px),
    radial-gradient(ellipse at 20% 80%, rgba(0,0,0,0.18), transparent 60%);
  pointer-events: none;
}
.lb-cta .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(247,242,233,0.7);
  margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
  position: relative;
}
.lb-cta .ey::before { content: ''; width: 28px; height: 1px; background: var(--steel-cream); }
.lb-cta h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 100px;
  line-height: 0.94;
  letter-spacing: -0.03em;
  color: var(--steel-cream);
  position: relative;
}
.lb-cta h2 em { font-style: italic; color: var(--steel-black); }
.lb-cta-card {
  background: var(--steel-cream); color: var(--steel-ink);
  padding: 36px 32px;
  position: relative;
  box-shadow: 0 32px 80px rgba(0,0,0,0.25);
}
.lb-cta-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.012em;
  margin-bottom: 6px;
}
.lb-cta-card h3 em { font-style: italic; color: var(--steel-red); }
.lb-cta-card p {
  font-size: 13px;
  color: var(--steel-graphite);
  line-height: 1.65;
  margin-bottom: 22px;
}
.lb-cta-card .field {
  display: flex; flex-direction: column; gap: 4px;
  padding: 14px 0;
  border-bottom: 1px solid var(--steel-border);
}
.lb-cta-card .field:last-of-type { border-bottom: none; }
.lb-cta-card .field .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--steel-stone);
  text-transform: uppercase;
}
.lb-cta-card .field .v {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 18px;
  color: var(--steel-graphite);
}
.lb-cta-card button {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px; text-align: center;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-top: 16px; width: 100%; display: block; border: none;
}

/* Footer */
.lb-foot {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 64px 48px 24px;
}
.lb-foot-top {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(241,235,224,0.12);
}
.lb-foot .bw { font-family: 'Anton', sans-serif; font-size: 56px; line-height: 0.95; letter-spacing: 0.02em; color: var(--steel-cream); }
.lb-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.lb-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; color: rgba(241,235,224,0.7); max-width: 360px; line-height: 1.4; }
.lb-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.lb-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.lb-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function Row({ n, roman, status, statusLabel, meta, name, em, quote, specs, label, prog, flip }) {
  return (
    <article className={`lb-row ${flip?'flip':''}`}>
      <div className="lb-left" data-label={label}>
        <span className="stat"><span className="dot"></span>{statusLabel}</span>
        <span className="corner bl">ESC 1:200</span>
        <span className="corner br">{n} / 07</span>
        {prog !== undefined && (
          <div className="progress"><div className="fill" style={{width: prog + '%'}}></div></div>
        )}
      </div>
      <div className="lb-right">
        <div className="num">{roman}</div>
        <div className="meta"><span>N° {n}</span><span className="red">/</span><span>{meta}</span></div>
        <h3>{name}<br/><em>{em}</em></h3>
        <p>"{quote}"</p>
        <div className="specs">
          {specs.map((s, i) => (
            <div key={i}>
              <div className="k">{s[0]}</div>
              <div className="v">{s[1]}</div>
            </div>
          ))}
        </div>
        <div className="actions">
          <a className="btn-red">Ver ficha completa →</a>
          <a className="btn-out">Caderno ↓</a>
        </div>
      </div>
    </article>
  );
}

function EmpListB() {
  return (
    <div className="steel stl-lb">
      <style>{EmpListBCSS}</style>

      <nav className="lb-nav">
        <div className="logo">
          <div className="lb-mark"><span className="ca"></span><span className="cb"></span></div>
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
          <a className="lb-btn-ghost">Caderno ↓</a>
          <a className="lb-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="lb-hero">
        <div className="lb-hero-inner">
          <div className="top">
            <div className="l">
              <span className="red"><span className="dot"></span>7 em curso · 3 em obras</span>
            </div>
            <div className="r">
              <span>Edição 26 · Portfólio</span>
              <span>SP · MG · DF</span>
              <span>STEEL · est. 1994</span>
            </div>
          </div>

          <div className="ey">— sete projetos, três décadas —</div>
          <h1>Empreendimentos<br/>em <em>curso.</em></h1>

          <div className="bot">
            <p className="lede">
              Sete projetos em três estados, em fases distintas — do canteiro ativo ao pré-lançamento. <em>Cada um</em> conduzido pelo time integrado da Steel, do papel à laje.
            </p>
            <div className="stat-mini">
              <div className="k">Em curso</div>
              <div className="v">07 <em>projetos</em></div>
              <div className="lbl">3 em obras · 2 lanç. · 2 prontos</div>
            </div>
            <div className="stat-mini">
              <div className="k">Área em construção</div>
              <div className="v">186 <em>mil m²</em></div>
              <div className="lbl">+ 1,2 M m² entregues desde 1994</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="lb-filter">
        <div className="groups">
          <div className="group">
            <span className="k">Categoria</span>
            <span className="lb-chip red active">Tudo</span>
            <span className="lb-chip">Residencial</span>
            <span className="lb-chip">Corporativo</span>
            <span className="lb-chip">Industrial</span>
            <span className="lb-chip">Saúde</span>
            <span className="lb-chip">Retrofit</span>
          </div>
          <div className="group">
            <span className="k">Status</span>
            <span className="lb-chip active">Em obras</span>
            <span className="lb-chip">Lançamento</span>
            <span className="lb-chip">Pronto</span>
          </div>
        </div>
        <div className="right">
          <span><span className="red">07</span> resultados · ordem cronológica</span>
        </div>
      </div>

      {/* Editorial list */}
      <section className="lb-list">
        <Row
          n="01" roman="I"
          statusLabel="Em obras · 62%"
          meta="Residencial · Pinheiros SP"
          name="Edifício" em="Aurora"
          quote="o silêncio é um material — Dario Veloso"
          specs={[['UNIDADES','128'],['M²','84–212'],['ANDARES','24'],['ENTREGA','Q3 27']]}
          label="IMAGEM · AURORA · FACHADA SUL"
          prog={62}
        />
        <Row
          n="02" roman="II"
          statusLabel="Lançamento · out 25"
          meta="Corporativo · Belo Horizonte"
          name="Steel Pier" em="Office Tower"
          quote="o escritório como um lugar de retorno, não de passagem"
          specs={[['LAJES','18'],['M² LOC.','12 mil'],['CERT.','LEED v4'],['ENTREGA','Q1 28']]}
          label="IMAGEM · STEEL PIER · CORPORATIVO BH"
          flip
        />
        <Row
          n="03" roman="III"
          statusLabel="Pronto pra morar · 2024"
          meta="Casas em condomínio · Brasília"
          name="Vivienda" em="Margens"
          quote="catorze casas, todas com um pé no rio"
          specs={[['CASAS','14'],['M²','240–360'],['ANO','2024'],['DISP.','3 un.']]}
          label="IMAGEM · VIVIENDA MARGENS · DF"
        />
        <Row
          n="04" roman="IV"
          statusLabel="Pré-lançamento · mar 26"
          meta="Lofts · conversão · São Paulo"
          name="Fábrica" em="Plaza"
          quote="62 lofts num galpão fundado em 1927"
          specs={[['LOFTS','62'],['M²','48–140'],['LANÇ.','Mar 26'],['ENTREGA','Q4 28']]}
          label="IMAGEM · FÁBRICA PLAZA · LOFTS"
          flip
        />
      </section>

      <section className="lb-sectionbreak">
        <div className="ch">II</div>
        <h2>Edifícios <em>entregues</em><br/>e em pós-obra.</h2>
        <div className="right">
          Cap. II · três obras<br/>
          em assistência<br/>
          técnica ativa
        </div>
      </section>

      <section className="lb-list">
        <Row
          n="05" roman="V"
          statusLabel="Entregue · 2023"
          meta="Saúde · ampliação · MG"
          name="Hospital" em="Albano"
          quote="ampliação de 186 leitos sem fechar a porta"
          specs={[['LEITOS','+186'],['M²','24 mil'],['ANO','2023'],['CERT.','LEED']]}
          label="IMAGEM · HOSPITAL ALBANO · MG"
        />
        <Row
          n="06" roman="VI"
          statusLabel="Em obras · 38%"
          meta="Industrial · Itupeva SP"
          name="CD Logística" em="Sul"
          quote="42 docas, 18 mil m², zero terceirização de canteiro"
          specs={[['M²','18 mil'],['DOCAS','42'],['ENTREGA','Q2 27'],['PROG.','38%']]}
          label="IMAGEM · CD LOGÍSTICA SUL"
          prog={38}
          flip
        />
        <Row
          n="07" roman="VII"
          statusLabel="Entregue · 2022"
          meta="Corporativo · Vinhedo SP"
          name="Sede" em="Volare"
          quote="a primeira sede AQUA da indústria automotiva nacional"
          specs={[['LAJES','12'],['M²','9,4 mil'],['ANO','2022'],['CERT.','AQUA']]}
          label="IMAGEM · SEDE VOLARE"
        />
      </section>

      {/* CTA */}
      <section className="lb-cta">
        <div>
          <div className="ey">Próximo edifício</div>
          <h2>O próximo<br/>edifício é<br/><em>o seu?</em></h2>
        </div>
        <div className="lb-cta-card">
          <h3>Estudo preliminar em <em>72 horas.</em></h3>
          <p>Conte para a Steel o que existe — um terreno, um projeto, uma ideia. Em até três dias retornamos com viabilidade técnica e comercial.</p>
          <div className="field">
            <div className="k">Telefone direto</div>
            <div className="v">+55 11 4002 8922</div>
          </div>
          <div className="field">
            <div className="k">E-mail novos negócios</div>
            <div className="v">novos@steelconstrucoes.com.br</div>
          </div>
          <button>Iniciar conversa →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="lb-foot">
        <div className="lb-foot-top">
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
        <div className="lb-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.EmpListB = EmpListB;

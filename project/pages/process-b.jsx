/* global React */

// ─── Processo · Variação B "Aço Editorial / Diário" ──────────────────
// O método como diário de obra: hero escuro, cada fase é uma página
// editorial com foto grande + texto + ficha. Vertical, narrativo.
// Vermelho como pontuação. Scoped to .stl-prb.

const ProcessBCSS = `
.stl-prb {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.65;
  width: 100%;
}

.prb-nav {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.prb-nav .logo { display: flex; align-items: center; gap: 14px; }
.prb-mark { width: 40px; height: 40px; background: var(--steel-red); position: relative; }
.prb-mark::before { content:''; position:absolute; left:14%; right:14%; top:46%; height:7%; background: var(--steel-cream); transform: rotate(-45deg); }
.prb-mark .ca { position:absolute; top:16%; right:16%; width:28%; height:28%; background: var(--steel-cream); }
.prb-mark .cb { position:absolute; bottom:14%; left:14%; width:22%; height:22%; background: var(--steel-cream); }
.prb-nav .lw { font-family: 'Anton', sans-serif; font-size: 24px; letter-spacing: 0.02em; color: var(--steel-cream); }
.prb-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-top: 4px; }
.prb-nav ul { display: flex; gap: 26px; justify-self: center; }
.prb-nav ul a { font-size: 13px; font-weight: 500; color: rgba(241,235,224,0.7); padding: 8px 4px; border-bottom: 2px solid transparent; }
.prb-nav ul a.active { color: var(--steel-cream); border-bottom-color: var(--steel-red); }
.prb-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 12px 22px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.prb-btn-ghost { background: transparent; color: var(--steel-cream); border: 1px solid rgba(241,235,224,0.3); padding: 11px 20px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }

/* Hero */
.prb-hero {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 96px 48px 64px;
  position: relative; overflow: hidden;
}
.prb-hero::before {
  content:''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 90% 30%, rgba(142,27,34,0.20), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.prb-hero .top {
  display: flex; justify-content: space-between; align-items: flex-start;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(241,235,224,0.5);
  position: relative; z-index: 2;
  margin-bottom: 72px;
}
.prb-hero .top .red { color: var(--steel-red-lt); display: flex; align-items: center; gap: 8px; }
.prb-hero .top .red .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; box-shadow: 0 0 0 5px rgba(142,27,34,0.18); }
.prb-hero .top .r { display: flex; gap: 28px; }
.prb-hero .ey { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 30px; color: var(--steel-red-lt); position: relative; z-index: 2; margin-bottom: 14px; }
.prb-hero h1 {
  font-family: 'DM Serif Display', serif; font-weight: 400;
  font-size: 168px; line-height: 0.88;
  letter-spacing: -0.035em; color: var(--steel-cream);
  position: relative; z-index: 2;
}
.prb-hero h1 em { font-style: italic; color: var(--steel-red-lt); }

.prb-hero .index {
  margin-top: 64px; padding-top: 32px;
  border-top: 1px solid rgba(241,235,224,0.18);
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px;
  position: relative; z-index: 2;
}
.prb-hero .index .item .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: rgba(241,235,224,0.45); text-transform: uppercase;
  margin-bottom: 8px;
}
.prb-hero .index .item .v {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: var(--steel-cream); line-height: 1.1;
}
.prb-hero .index .item .v em { color: var(--steel-red-lt); }

/* Diary section */
.prb-phase {
  background: var(--steel-cream);
  padding: 96px 48px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 64px; align-items: stretch;
  border-bottom: 1px solid var(--steel-border);
}
.prb-phase.alt { background: var(--steel-bone); }
.prb-phase.dark { background: var(--steel-coal); color: var(--steel-cream); }
.prb-phase.dark .ey { color: var(--steel-red-lt); }
.prb-phase.dark h2 { color: var(--steel-cream); }
.prb-phase.dark p { color: rgba(241,235,224,0.7); }
.prb-phase.dark .fact .k { color: rgba(241,235,224,0.5); }
.prb-phase.dark .fact .v { color: var(--steel-cream); }
.prb-phase.dark .fact { border-color: rgba(241,235,224,0.15); }
.prb-phase.dark .ph { border-color: rgba(241,235,224,0.15); }

.prb-phase.flip .ph-side { order: 2; }
.prb-phase .ph-side {
  position: relative;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  aspect-ratio: 4/4.6;
  overflow: hidden;
}
.prb-phase:nth-of-type(2n) .ph-side { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.prb-phase:nth-of-type(3n) .ph-side { background: linear-gradient(170deg, #38332c, #14130f); }
.prb-phase:nth-of-type(4n) .ph-side { background: linear-gradient(160deg, #6a5e50, #1a1612); }
.prb-phase:nth-of-type(5n) .ph-side { background: linear-gradient(165deg, #4a3a30, #1a1612); }
.prb-phase .ph-side::before {
  content:''; position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px);
}
.prb-phase .ph-side::after {
  content: attr(data-label);
  position: absolute; left: 22px; bottom: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(241,235,224,0.4);
  max-width: 240px; line-height: 1.65;
}
.prb-phase .ph-side .num {
  position: absolute; top: 22px; left: 22px;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 64px; line-height: 0.85;
  color: rgba(241,235,224,0.5);
}
.prb-phase .ph-side .lab {
  position: absolute; top: 22px; right: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(241,235,224,0.45);
  text-align: right;
}

.prb-phase .text {
  display: flex; flex-direction: column; justify-content: center;
}
.prb-phase .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px;
}
.prb-phase .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.prb-phase h2 {
  font-family: 'DM Serif Display', serif; font-size: 80px;
  line-height: 0.94; letter-spacing: -0.028em; color: var(--steel-black);
  margin-bottom: 22px;
}
.prb-phase h2 em { font-style: italic; color: var(--steel-red); }
.prb-phase p {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; line-height: 1.45;
  color: var(--steel-graphite); margin-bottom: 24px;
  max-width: 540px;
}
.prb-phase .body {
  font-size: 14.5px; line-height: 1.75;
  color: var(--steel-graphite); max-width: 540px; margin-bottom: 28px;
}
.prb-phase.dark .body { color: rgba(241,235,224,0.7); }
.prb-phase .body strong { color: var(--steel-ink); font-weight: 600; }
.prb-phase.dark .body strong { color: var(--steel-cream); }
.prb-phase .body em { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--steel-red); }
.prb-phase .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: auto; }
.prb-phase .fact {
  padding: 18px 18px 18px 0;
  border-top: 1px solid var(--steel-border);
  border-right: 1px solid var(--steel-border);
}
.prb-phase .fact:nth-child(2n) { padding-right: 0; padding-left: 18px; border-right: none; }
.prb-phase .fact .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: var(--steel-stone); text-transform: uppercase;
  margin-bottom: 6px;
}
.prb-phase .fact .v {
  font-family: 'DM Serif Display', serif; font-size: 22px;
  color: var(--steel-ink); letter-spacing: -0.012em;
}
.prb-phase .fact .v em { font-style: italic; color: var(--steel-red); font-size: 14px; }

/* Section divider */
.prb-divider {
  background: var(--steel-cream);
  padding: 64px 48px;
  text-align: center;
  border-bottom: 1px solid var(--steel-border);
}
.prb-divider .ch {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 120px; line-height: 0.85;
  color: var(--steel-red); letter-spacing: -0.035em;
  margin-bottom: 12px;
}
.prb-divider h3 {
  font-family: 'DM Serif Display', serif; font-size: 40px;
  letter-spacing: -0.018em; color: var(--steel-black);
}
.prb-divider h3 em { font-style: italic; color: var(--steel-red); }
.prb-divider .sub {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase;
  margin-top: 14px;
}

/* Pull quote */
.prb-pull {
  background: var(--steel-paper);
  padding: 120px 48px;
  border-bottom: 1px solid var(--steel-border);
  text-align: center;
}
.prb-pull blockquote {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 68px; line-height: 1.06; letter-spacing: -0.022em;
  color: var(--steel-black); max-width: 1080px; margin: 0 auto;
}
.prb-pull blockquote::before {
  content:'"'; font-family: 'DM Serif Display', serif;
  font-size: 160px; color: var(--steel-red);
  display: block; line-height: 0.5; margin-bottom: 14px;
}
.prb-pull blockquote em { color: var(--steel-red); }
.prb-pull .attr {
  margin-top: 32px; display: inline-flex; align-items: center; gap: 18px;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase;
}
.prb-pull .attr::before { content:''; width: 36px; height: 1px; background: var(--steel-red); }

/* CTA */
.prb-cta {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 120px 48px;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 80px; align-items: center;
  position: relative; overflow: hidden;
}
.prb-cta::before { content:''; position: absolute; inset: 0; background:
  radial-gradient(ellipse at 80% 20%, rgba(142,27,34,0.2), transparent 60%); pointer-events: none; }
.prb-cta .ey { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 18px; display: flex; align-items: center; gap: 12px; position: relative; }
.prb-cta .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.prb-cta h2 { font-family: 'DM Serif Display', serif; font-size: 96px; line-height: 0.95; letter-spacing: -0.03em; color: var(--steel-cream); position: relative; }
.prb-cta h2 em { font-style: italic; color: var(--steel-red-lt); }
.prb-cta .card { background: var(--steel-cream); color: var(--steel-ink); padding: 36px 32px; }
.prb-cta .card h3 { font-family: 'DM Serif Display', serif; font-size: 30px; letter-spacing: -0.012em; margin-bottom: 8px; }
.prb-cta .card h3 em { font-style: italic; color: var(--steel-red); }
.prb-cta .card p { font-size: 13.5px; color: var(--steel-graphite); margin-bottom: 22px; line-height: 1.65; }
.prb-cta .card button { background: var(--steel-black); color: var(--steel-cream); padding: 18px; text-align: center; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-top: 8px; width: 100%; display: block; border: none; }

/* Footer */
.prb-foot { background: var(--steel-black); color: var(--steel-cream); padding: 64px 48px 24px; border-top: 1px solid rgba(241,235,224,0.18); }
.prb-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.prb-foot .bw { font-family: 'Anton', sans-serif; font-size: 56px; line-height: 0.95; letter-spacing: 0.02em; color: var(--steel-cream); }
.prb-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.prb-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; color: rgba(241,235,224,0.7); max-width: 360px; line-height: 1.4; }
.prb-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.prb-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.prb-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function Phase({ n, lab, ey, title, em, lede, body, facts, label, flip, alt, dark }) {
  const cls = `prb-phase ${alt?'alt':''} ${dark?'dark':''} ${flip?'flip':''}`;
  return (
    <section className={cls}>
      <div className="ph-side" data-label={label}>
        <span className="num">{n}</span>
        <span className="lab">FASE {n}<br/>{ey}</span>
      </div>
      <div className="text">
        <div className="ey">{lab}</div>
        <h2>{title} <em>{em}</em></h2>
        <p>"{lede}"</p>
        <div className="body" dangerouslySetInnerHTML={{__html: body}} />
        <div className="facts">
          {facts.map((f,i)=> (
            <div key={i} className="fact">
              <div className="k">{f[0]}</div>
              <div className="v" dangerouslySetInnerHTML={{__html: f[1]}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessB() {
  return (
    <div className="steel stl-prb">
      <style>{ProcessBCSS}</style>

      <nav className="prb-nav">
        <div className="logo">
          <div className="prb-mark"><span className="ca"></span><span className="cb"></span></div>
          <div>
            <div className="lw">STEEL</div>
            <div className="ls">Construções &amp; Empreendimentos</div>
          </div>
        </div>
        <ul>
          <li><a>Empreendimentos</a></li>
          <li><a>Construções</a></li>
          <li><a>A Steel</a></li>
          <li><a className="active">Processo</a></li>
          <li><a>Imprensa</a></li>
          <li><a>Contato</a></li>
        </ul>
        <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <a className="prb-btn-ghost">Método PDF ↓</a>
          <a className="prb-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="prb-hero">
        <div className="top">
          <span className="red"><span className="dot"></span>método publicado · v.3.2 · 2026</span>
          <div className="r">
            <span>Cap. 01 · Processo Steel</span>
            <span>ISO 9001 · ISO 45001</span>
            <span>BIM LOD 350</span>
          </div>
        </div>

        <div className="ey">— da viabilidade ao habite-se —</div>
        <h1>seis fases,<br/>um <em>diário</em><br/>público.</h1>

        <div className="index">
          <div className="item"><div className="k">01 · viab.</div><div className="v">Diagnóstico <em>preliminar</em></div></div>
          <div className="item"><div className="k">02 · projeto</div><div className="v">Anteprojeto <em>integrado</em></div></div>
          <div className="item"><div className="k">03 · pré-obra</div><div className="v">Lançamento <em>comercial</em></div></div>
          <div className="item"><div className="k">04 · obra</div><div className="v">Execução <em>em canteiro</em></div></div>
          <div className="item"><div className="k">05 · entrega</div><div className="v">Habite-se <em>&amp; vistoria</em></div></div>
          <div className="item"><div className="k">06 · pós</div><div className="v">Assistência <em>estendida</em></div></div>
        </div>
      </section>

      <Phase
        n="01"
        ey="VIABILIDADE"
        lab="Cap. 02 · Fase 01 · 2 semanas"
        title="Diagnóstico"
        em="preliminar."
        lede="duas semanas para dizer se vale a pena — ou não."
        body="Análise jurídica do terreno, leitura urbanística e mercadológica, estudo de massa preliminar. <strong>A direção de incorporação atende diretamente.</strong> Em duas semanas, retornamos com um documento de viabilidade — incluindo um <em>'não fazemos esse projeto'</em> quando for o caso."
        facts={[
          ['Duração', '2 <em>semanas</em>'],
          ['Responsável', 'A. <em>Prado</em>'],
          ['Entregáveis', '3 <em>docs</em>'],
          ['Custo', 'Cortesia'],
        ]}
        label="FOTO 01 · ESTUDO DE MASSA NO ATELIÊ — ANDREA PRADO"
      />

      <Phase
        n="02"
        ey="PROJETO"
        lab="Cap. 03 · Fase 02 · 4 meses"
        title="Anteprojeto"
        em="integrado."
        lede="arquitetura, estrutura e instalações no mesmo modelo BIM."
        body="Coordenação <em>BIM LOD 350</em> entre arquitetura, estrutura, MEP e fachada. Decisão de materialidade. Caderno comercial v.0. Aprovação na Prefeitura. <strong>O projeto não sai do escritório sem visita ao terreno feita pela direção de obras.</strong>"
        facts={[
          ['Duração', '4 <em>meses</em>'],
          ['Responsável', 'D. <em>Veloso</em>'],
          ['Modelo', 'BIM <em>LOD 350</em>'],
          ['Coord. semanal', 'Em <em>canteiro</em>'],
        ]}
        label="FOTO 02 · COORDENAÇÃO BIM SEMANAL — DARIO VELOSO + STEEL"
        flip alt
      />

      <Phase
        n="03"
        ey="PRÉ-OBRA"
        lab="Cap. 04 · Fase 03 · 2 meses"
        title="Lançamento"
        em="comercial."
        lede="o caderno é fechado antes do stand abrir."
        body="Caderno final, stand de venda na obra (não em endereço alheio), hotsite, contratação de equipe de canteiro. <strong>O caderno comercial é versionado.</strong> A versão 3.2 do Aurora está disponível no portal do comprador — todas as versões anteriores permanecem auditáveis, com motivo da alteração."
        facts={[
          ['Duração', '2 <em>meses</em>'],
          ['Stand', 'Na <em>obra</em>'],
          ['Caderno', 'v.3.2 <em>versionado</em>'],
          ['SPE', 'Constituída'],
        ]}
        label="FOTO 03 · STAND DE VENDA AURORA — INSTALADO NO LOTE"
      />

      <Phase
        n="04"
        ey="OBRA"
        lab="Cap. 05 · Fase 04 · 22 meses · em curso"
        title="Execução"
        em="em canteiro."
        lede="engenheiro residente, em tempo integral, todos os dias."
        body="Canteiro com <em>engenheiro residente</em>, fiscalização <em>trimestral</em> da direção, auditoria ISO 45001. O comprador recebe um <strong>boletim mensal</strong> no dia 5 — foto, cronograma físico, cronograma financeiro. A vizinhança recebe carta antes de cada etapa ruidosa."
        facts={[
          ['Duração', '22 <em>meses</em>'],
          ['Responsável', 'F. <em>Camargo</em>'],
          ['Boletim', 'Todo dia <em>5</em>'],
          ['Auditoria', 'Trimestral'],
        ]}
        label="FOTO 04 · CANTEIRO AURORA · NÍVEL 14 · 11/2025"
        flip dark
      />

      <Phase
        n="05"
        ey="ENTREGA"
        lab="Cap. 06 · Fase 05 · 1 mês"
        title="Habite-se"
        em="& vistoria."
        lede="a chave passa de mão depois de uma volta inteira no apartamento."
        body="Vistoria <em>por unidade</em> com o morador. Memorial de entrega ilustrado. Treinamento técnico de uso (laje radiante, automação, hidráulica). <strong>A chave só é entregue depois de aceito tudo o que foi vistoriado.</strong> Tempo médio: 90 minutos por unidade."
        facts={[
          ['Duração', '1 <em>mês</em>'],
          ['Vistoria por un.', '90 <em>min</em>'],
          ['Aceite', 'Por <em>checklist</em>'],
          ['Manual', '+96 <em>páginas</em>'],
        ]}
        label="FOTO 05 · VISTORIA POR UNIDADE — CHECKLIST + ENG. RESIDENTE"
        alt
      />

      <Phase
        n="06"
        ey="PÓS-OBRA"
        lab="Cap. 07 · Fase 06 · 5 a 25 anos"
        title="Assistência"
        em="estendida."
        lede="o engenheiro responsável continua respondendo durante cinco anos."
        body="<strong>5 anos de assistência integral pós-chaves</strong> — sem terceirização, sem repasse, sem central. Plano de manutenção planejado por 25 anos, entregue ao síndico. Relatório anual da Steel sobre estado do empreendimento, com recomendações."
        facts={[
          ['Assistência integral', '5 <em>anos</em>'],
          ['Plano de manutenção', '25 <em>anos</em>'],
          ['Atendimento', 'Eng. <em>responsável</em>'],
          ['Relatório anual', 'Síndico + <em>compradores</em>'],
        ]}
        label="FOTO 06 · RELATÓRIO ANUAL ENTREGUE AO SÍNDICO — EDIFÍCIO LARISSA, 2024"
        flip
      />

      <section className="prb-pull">
        <blockquote>
          o método não está num <em>powerpoint</em> — está num diário que o<br/>
          comprador pode <em>ler todo mês</em> até a entrega das chaves.
        </blockquote>
        <div className="attr">Fábio Camargo · Diretor de obras · 2026</div>
      </section>

      <section className="prb-cta">
        <div>
          <div className="ey">Iniciar conversa</div>
          <h2>Quer ver o método<br/>aplicado ao <em>seu projeto?</em></h2>
        </div>
        <div className="card">
          <h3>Estudo preliminar em <em>72 horas.</em></h3>
          <p>Compartilhe contexto, terreno ou briefing. A direção retorna com leitura de viabilidade dentro do método Steel — em duas semanas, no caso de B2B.</p>
          <button>Iniciar conversa →</button>
        </div>
      </section>

      <footer className="prb-foot">
        <div className="prb-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col"><h4>Processo</h4><ul><li>Método v.3.2</li><li>Certificações</li><li>Boletins de obra</li><li>Relatórios anuais</li></ul></div>
          <div className="col"><h4>Steel</h4><ul><li>A Steel</li><li>Empreendimentos</li><li>Construções</li><li>Investidores</li></ul></div>
          <div className="col"><h4>Contato</h4><ul><li>+55 11 4002 8922</li><li>contato@steelconstrucoes.com.br</li><li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li></ul></div>
        </div>
        <div className="prb-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.ProcessB = ProcessB;

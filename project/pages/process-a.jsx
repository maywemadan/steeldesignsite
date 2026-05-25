/* global React */

// ─── Processo · Variação A "Aço Diagrama" ────────────────────────────
// Página dedicada ao método Steel. Timeline horizontal massiva com
// 6 fases, cada fase com entregáveis + responsável + ferramentas (BIM
// LOD, ISO, etc). Diagrama do canteiro integrado. Scoped to .stl-pra.

const ProcessACSS = `
.stl-pra {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.6;
  width: 100%;
}

.pra-top {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
}
.pra-top .l { display: flex; gap: 22px; }
.pra-top .l .red { color: var(--steel-red-lt); }
.pra-top .r { display: flex; gap: 20px; color: rgba(241,235,224,0.7); }

.pra-nav {
  background: var(--steel-cream);
  padding: 22px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.pra-nav .logo { display: flex; align-items: center; gap: 14px; }
.pra-mark { width: 44px; height: 44px; background: var(--steel-red); position: relative; }
.pra-mark::before { content:''; position:absolute; left:14%; right:14%; top:46%; height:7%; background: var(--steel-cream); transform: rotate(-45deg); }
.pra-mark .ca { position:absolute; top:16%; right:16%; width:28%; height:28%; background: var(--steel-cream); }
.pra-mark .cb { position:absolute; bottom:14%; left:14%; width:22%; height:22%; background: var(--steel-cream); }
.pra-nav .lw { font-family: 'Anton', sans-serif; font-size: 28px; letter-spacing: 0.02em; color: var(--steel-black); line-height: 1; }
.pra-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase; margin-top: 4px; }
.pra-nav ul { display: flex; gap: 26px; justify-self: center; }
.pra-nav ul a { font-size: 13px; font-weight: 500; color: var(--steel-ink); padding: 8px 4px; border-bottom: 2px solid transparent; }
.pra-nav ul a.active { border-bottom-color: var(--steel-red); }
.pra-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 13px 22px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.pra-btn-out { background: transparent; color: var(--steel-ink); border: 1.5px solid var(--steel-ink); padding: 11.5px 20px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }

/* Hero */
.pra-hero {
  padding: 64px 48px 56px;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 56px; align-items: end;
  border-bottom: 2px solid var(--steel-ink);
}
.pra-hero .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--steel-red);
  display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
}
.pra-hero .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.pra-hero h1 {
  font-family: 'DM Serif Display', serif; font-weight: 400;
  font-size: 108px; line-height: 0.94;
  letter-spacing: -0.028em; color: var(--steel-black);
}
.pra-hero h1 em { font-style: italic; color: var(--steel-red); }
.pra-hero .lede {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; line-height: 1.45; color: var(--steel-graphite); max-width: 460px;
}
.pra-hero .lede em { color: var(--steel-red); }
.pra-hero .meta-grid {
  margin-top: 32px; padding-top: 24px;
  border-top: 1px solid var(--steel-border);
  display: grid; grid-template-columns: 1fr 1fr; gap: 18px 22px;
}
.pra-hero .meta-grid .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: var(--steel-stone); text-transform: uppercase;
  margin-bottom: 4px;
}
.pra-hero .meta-grid .v {
  font-family: 'DM Serif Display', serif; font-size: 22px;
  color: var(--steel-ink); letter-spacing: -0.012em;
}
.pra-hero .meta-grid .v em { font-style: italic; color: var(--steel-red); font-size: 14px; }

/* Six-phase strip — long horizontal */
.pra-flow {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 0 48px;
  overflow: hidden;
}
.pra-flow-head {
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: end;
  padding: 64px 0 32px;
  border-bottom: 1px solid rgba(241,235,224,0.18);
}
.pra-flow-head .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 12px;
}
.pra-flow-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.pra-flow-head h2 {
  font-family: 'DM Serif Display', serif; font-size: 64px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-cream);
}
.pra-flow-head h2 em { font-style: italic; color: var(--steel-red-lt); }
.pra-flow-head .legend {
  font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
  letter-spacing: 0.18em; color: rgba(241,235,224,0.5); text-transform: uppercase;
  text-align: right; max-width: 220px; line-height: 1.7;
}

.pra-flow-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid rgba(241,235,224,0.18);
}
.pra-phase {
  padding: 36px 22px 36px 0;
  border-right: 1px solid rgba(241,235,224,0.12);
  position: relative;
}
.pra-phase:nth-child(n+2) { padding-left: 22px; }
.pra-phase:last-child { border-right: none; }
.pra-phase::before {
  content:''; position: absolute;
  top: 0; left: 0;
  width: 14px; height: 14px;
  background: var(--steel-red);
  transform: translateY(-50%);
}
.pra-phase.acc::before { background: var(--steel-cream); }
.pra-phase .num {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 76px; line-height: 0.85; color: var(--steel-red-lt);
  letter-spacing: -0.025em; margin-bottom: 18px;
}
.pra-phase .lab {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.2em; color: rgba(241,235,224,0.55); text-transform: uppercase;
  margin-bottom: 12px;
}
.pra-phase h4 {
  font-family: 'DM Serif Display', serif; font-size: 28px;
  line-height: 1.05; letter-spacing: -0.015em; color: var(--steel-cream);
  margin-bottom: 14px;
}
.pra-phase h4 em { font-style: italic; color: var(--steel-red-lt); }
.pra-phase p {
  font-size: 13px; line-height: 1.7;
  color: rgba(241,235,224,0.7); margin-bottom: 18px;
}
.pra-phase .deliv {
  border-top: 1px solid rgba(241,235,224,0.12); padding-top: 14px;
}
.pra-phase .deliv .dk {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.2em; color: rgba(241,235,224,0.45);
  text-transform: uppercase; margin-bottom: 10px;
}
.pra-phase .deliv li {
  font-size: 12.5px; color: rgba(241,235,224,0.78);
  padding: 6px 0; display: flex; gap: 10px;
  border-top: 1px dashed rgba(241,235,224,0.12);
}
.pra-phase .deliv li:first-child { border-top: none; }
.pra-phase .deliv li::before { content:'+'; color: var(--steel-red-lt); }

/* Phase responsible */
.pra-flow-resp {
  padding: 32px 0 64px;
  display: grid; grid-template-columns: repeat(6, 1fr);
}
.pra-flow-resp .cell {
  padding: 8px 22px 0 0;
  border-right: 1px solid rgba(241,235,224,0.08);
}
.pra-flow-resp .cell:nth-child(n+2) { padding-left: 22px; }
.pra-flow-resp .cell:last-child { border-right: none; }
.pra-flow-resp .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: rgba(241,235,224,0.5);
  text-transform: uppercase; margin-bottom: 8px;
}
.pra-flow-resp .v {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 18px; color: var(--steel-cream); line-height: 1.2;
}
.pra-flow-resp .v em { color: var(--steel-red-lt); }
.pra-flow-resp .role {
  font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
  letter-spacing: 0.12em; color: rgba(241,235,224,0.55); margin-top: 4px;
}

/* Duration strip */
.pra-duration {
  background: var(--steel-bone);
  padding: 32px 48px;
  display: grid; grid-template-columns: auto 1fr;
  gap: 56px; align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.pra-duration .lab {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  max-width: 140px; line-height: 1.6;
}
.pra-duration .bar { display: grid; grid-template-columns: 12% 18% 8% 16% 32% 14%; gap: 6px; }
.pra-duration .seg {
  background: var(--steel-cream);
  border: 1px solid var(--steel-ink);
  padding: 14px 16px;
  display: flex; flex-direction: column; gap: 4px;
}
.pra-duration .seg.acc { background: var(--steel-red); border-color: var(--steel-red); color: var(--steel-cream); }
.pra-duration .seg .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}
.pra-duration .seg.acc .k { color: rgba(247,242,233,0.7); }
.pra-duration .seg .v {
  font-family: 'DM Serif Display', serif; font-size: 22px;
  letter-spacing: -0.012em; color: var(--steel-ink);
}
.pra-duration .seg.acc .v { color: var(--steel-cream); }
.pra-duration .seg .v em { font-style: italic; color: var(--steel-red); font-size: 13px; }
.pra-duration .seg.acc .v em { color: rgba(247,242,233,0.8); }

/* Canteiro diagrama */
.pra-canteiro {
  padding: 120px 48px;
  display: grid; grid-template-columns: 1.6fr 1fr;
  gap: 64px; align-items: stretch;
}
.pra-can-frame {
  position: relative;
  background: var(--steel-paper);
  border: 1px solid var(--steel-ink);
  aspect-ratio: 16/11;
  overflow: hidden;
}
.pra-can-frame::before {
  content:''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,14,13,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}
.pra-can-frame .block {
  position: absolute;
  border: 1.5px solid var(--steel-ink);
  background: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.16em; text-transform: uppercase; color: var(--steel-ink);
  padding: 8px 12px;
  display: flex; align-items: end; justify-content: space-between;
}
.pra-can-frame .block.red { background: var(--steel-red); color: var(--steel-cream); border-color: var(--steel-red); }
.pra-can-frame .block.dark { background: var(--steel-black); color: var(--steel-cream); border-color: var(--steel-black); }
.pra-can-frame .block .area {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 13px; text-transform: none; letter-spacing: 0;
}
.pra-can-frame .arrow {
  position: absolute;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-red); text-transform: uppercase;
  display: flex; align-items: center; gap: 6px;
}
.pra-can-frame .compass {
  position: absolute; top: 20px; right: 22px;
  width: 40px; height: 40px; border-radius: 50%;
  border: 1px solid var(--steel-ink);
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 14px; color: var(--steel-red);
}
.pra-can-frame .scale {
  position: absolute; bottom: 20px; left: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.pra-can-frame .scale::after { content:''; width: 56px; height: 1px; background: var(--steel-ink); }
.pra-can-frame .stamp {
  position: absolute; bottom: 20px; right: 22px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}

.pra-can-info .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.pra-can-info .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.pra-can-info h3 {
  font-family: 'DM Serif Display', serif; font-size: 52px;
  line-height: 1.02; letter-spacing: -0.022em; color: var(--steel-black);
}
.pra-can-info h3 em { font-style: italic; color: var(--steel-red); }
.pra-can-info p {
  margin: 22px 0;
  font-size: 15.5px; line-height: 1.7; color: var(--steel-graphite); max-width: 460px;
}
.pra-can-info ul {
  margin-top: 24px;
  border-top: 1px solid var(--steel-ink);
}
.pra-can-info ul li {
  display: grid; grid-template-columns: 32px 1fr;
  gap: 18px; padding: 16px 0;
  border-bottom: 1px solid var(--steel-border);
}
.pra-can-info ul .ix {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.18em; color: var(--steel-red);
}
.pra-can-info ul .txt {
  font-family: 'DM Serif Display', serif; font-size: 18px;
  color: var(--steel-ink); letter-spacing: -0.005em;
}
.pra-can-info ul .txt em { font-style: italic; color: var(--steel-red); }

/* Tools / standards */
.pra-tools {
  background: var(--steel-cream);
  padding: 96px 48px;
  border-top: 1px solid var(--steel-border);
}
.pra-tools-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 64px; align-items: end;
  padding-bottom: 28px; margin-bottom: 32px;
  border-bottom: 2px solid var(--steel-ink);
}
.pra-tools-head .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 12px;
}
.pra-tools-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.pra-tools-head h3 {
  font-family: 'DM Serif Display', serif; font-size: 52px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-black);
}
.pra-tools-head h3 em { font-style: italic; color: var(--steel-red); }
.pra-tools-head p { font-size: 15px; line-height: 1.7; color: var(--steel-graphite); max-width: 460px; }

.pra-tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--steel-ink); }
.pra-tool {
  padding: 28px 22px 28px 0;
  border-right: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.pra-tool:nth-child(n+2) { padding-left: 22px; }
.pra-tool:nth-child(4n) { border-right: none; }
.pra-tool .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 14px;
}
.pra-tool h5 {
  font-family: 'DM Serif Display', serif; font-size: 26px;
  letter-spacing: -0.012em; color: var(--steel-black); margin-bottom: 8px;
}
.pra-tool h5 em { font-style: italic; color: var(--steel-red); }
.pra-tool p { font-size: 13.5px; line-height: 1.65; color: var(--steel-graphite); }

/* CTA */
.pra-cta {
  background: var(--steel-red); color: var(--steel-cream);
  padding: 96px 48px;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 56px; align-items: center;
  position: relative; overflow: hidden;
}
.pra-cta::before { content:''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent 0 40px, rgba(0,0,0,0.04) 40px 41px); }
.pra-cta .ey {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.22em; color: rgba(247,242,233,0.7);
  text-transform: uppercase; margin-bottom: 18px;
  display: flex; align-items: center; gap: 12px; position: relative;
}
.pra-cta .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-cream); }
.pra-cta h2 {
  font-family: 'DM Serif Display', serif; font-size: 72px;
  line-height: 0.98; letter-spacing: -0.025em; color: var(--steel-cream); position: relative;
}
.pra-cta h2 em { font-style: italic; color: var(--steel-black); }
.pra-cta .card {
  background: var(--steel-cream); color: var(--steel-ink); padding: 36px 32px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.2);
}
.pra-cta .card h3 {
  font-family: 'DM Serif Display', serif; font-size: 30px;
  line-height: 1.1; letter-spacing: -0.012em; margin-bottom: 6px;
}
.pra-cta .card h3 em { font-style: italic; color: var(--steel-red); }
.pra-cta .card p { font-size: 13.5px; color: var(--steel-graphite); margin-bottom: 22px; }
.pra-cta .card button {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px; text-align: center;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-top: 12px; width: 100%; display: block; border: none;
}

/* Footer */
.pra-foot {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 56px 48px 24px;
}
.pra-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.pra-foot .bw { font-family: 'Anton', sans-serif; font-size: 52px; line-height: 0.95; color: var(--steel-cream); letter-spacing: 0.02em; }
.pra-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.pra-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 20px; color: rgba(241,235,224,0.7); max-width: 340px; line-height: 1.4; }
.pra-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.pra-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.pra-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

const PHASES = [
  { n:'01', lab:'Estudo de viabilidade', title:'Diagnóstico', em:'preliminar.', desc:'Análise jurídica, urbanística e mercadológica. Estudo de massa preliminar.', deliv:['Memorial 0','Estudo de massa','Pré-financeiro'], resp:'Andrea', role:'Prado · Incorp.', dur:'2 sem' },
  { n:'02', lab:'Projeto', title:'Anteprojeto', em:'integrado.', desc:'Arquitetura, estrutura, instalações em BIM coordenado. Decisão de fachada.', deliv:['Anteprojeto BIM','Caderno comercial v.0','Aprovação Prefeitura'], resp:'Dario', role:'Veloso · Arquit.', dur:'4 m' },
  { n:'03', lab:'Pré-obra', title:'Lançamento', em:'comercial.', desc:'Caderno final, stand de venda, hotsite, contratação de equipe de canteiro.', deliv:['Caderno final','Stand de venda','Contratos de venda'], resp:'Andrea', role:'Prado · Incorp.', dur:'2 m', acc:true },
  { n:'04', lab:'Obra', title:'Execução', em:'em canteiro.', desc:'Canteiro com engenheiro residente. Fiscalização trimestral da direção. ISO 45001.', deliv:['Cronograma físico','Boletim mensal','Auditoria trimestral'], resp:'Fábio', role:'Camargo · Obras', dur:'22 m' },
  { n:'05', lab:'Entrega', title:'Habite-se', em:'& vistoria.', desc:'Vistoria por unidade com o morador. Memorial de entrega ilustrado. Treinamento.', deliv:['Habite-se','Termo de entrega','Manual ilustrado'], resp:'Fábio', role:'Camargo · Obras', dur:'1 m' },
  { n:'06', lab:'Pós-obra', title:'Assistência', em:'estendida.', desc:'5 anos de assistência integral pós-chaves. Plano de manutenção 25 anos.', deliv:['Assistência 5y','Plano 25y','Relatório anual'], resp:'Equipe', role:'Pós-Obra · interna', dur:'5 a 25 anos' },
];

function ProcessA() {
  return (
    <div className="steel stl-pra">
      <style>{ProcessACSS}</style>

      <div className="pra-top">
        <div className="l">
          <span><span className="red">●</span> ISO 9001 · ISO 45001 · BIM LOD 350</span>
          <span>Método publicado · v.3.2 · 2026</span>
        </div>
        <div className="r">
          <span>+55 11 4002 8922</span>
          <span>contato@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      <nav className="pra-nav">
        <div className="logo">
          <div className="pra-mark"><span className="ca"></span><span className="cb"></span></div>
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
          <a className="pra-btn-out">Método PDF ↓</a>
          <a className="pra-btn-red">Iniciar conversa →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pra-hero">
        <div>
          <div className="ey">Cap. 01 · Método Steel</div>
          <h1>Seis fases.<br/>Um <em>responsável</em><br/>para cada uma.</h1>
        </div>
        <div>
          <p className="lede">O método Steel é <em>publicado</em>, auditado e versionado. Você sabe quem responde por quê, quando — e em quanto tempo.</p>
          <div className="meta-grid">
            <div><div className="k">Versão atual</div><div className="v">v.3.2 <em>· 2026</em></div></div>
            <div><div className="k">Auditoria</div><div className="v">ISO 9001 <em>· 2024</em></div></div>
            <div><div className="k">Segurança</div><div className="v">ISO 45001 <em>· 2023</em></div></div>
            <div><div className="k">Coordenação</div><div className="v">BIM LOD 350</div></div>
          </div>
        </div>
      </section>

      {/* 6 phases */}
      <section className="pra-flow">
        <div className="pra-flow-head">
          <div>
            <div className="ey">Cap. 02 · Fluxo completo</div>
            <h2>Seis fases <em>contínuas.</em></h2>
          </div>
          <div></div>
          <div className="legend">leitura<br/>esquerda → direita<br/>· vermelho indica<br/>fase em curso</div>
        </div>

        <div className="pra-flow-grid">
          {PHASES.map(p => (
            <div key={p.n} className={`pra-phase ${p.acc?'acc':''}`}>
              <div className="num">{p.n}</div>
              <div className="lab">{p.lab}</div>
              <h4>{p.title} <em>{p.em}</em></h4>
              <p>{p.desc}</p>
              <div className="deliv">
                <div className="dk">Entregáveis</div>
                <ul>
                  {p.deliv.map((d,i)=> <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="pra-flow-resp">
          {PHASES.map(p => (
            <div key={p.n} className="cell">
              <div className="k">Responsável · {p.n}</div>
              <div className="v">{p.resp}</div>
              <div className="role">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Duration timeline */}
      <section className="pra-duration">
        <div className="lab">Duração<br/>média · 2,5 anos<br/>+ 5–25 anos<br/>pós-obra</div>
        <div className="bar">
          <div className="seg"><div className="k">01 · viab.</div><div className="v">2 <em>sem</em></div></div>
          <div className="seg"><div className="k">02 · projeto</div><div className="v">4 <em>meses</em></div></div>
          <div className="seg"><div className="k">03 · pré-obra</div><div className="v">2 <em>m</em></div></div>
          <div className="seg"><div className="k">04 · obra</div><div className="v">22 <em>m</em></div></div>
          <div className="seg acc"><div className="k">05 · entrega</div><div className="v">1 <em>m</em></div></div>
          <div className="seg"><div className="k">06 · pós-obra</div><div className="v">5 + 25 <em>a</em></div></div>
        </div>
      </section>

      {/* Canteiro layout */}
      <section className="pra-canteiro">
        <div className="pra-can-frame">
          <div className="compass">N</div>
          <div className="block dark" style={{top:'18%', left:'10%', width:'34%', height:'40%'}}>
            <span>Torre · Aurora</span><span className="area">24 pav.</span>
          </div>
          <div className="block red" style={{top:'18%', left:'48%', width:'22%', height:'18%'}}>
            <span>Escritório obra</span><span className="area">62 m²</span>
          </div>
          <div className="block" style={{top:'18%', right:'10%', width:'18%', height:'18%'}}>
            <span>Refeitório</span><span className="area">42 m²</span>
          </div>
          <div className="block" style={{top:'40%', left:'48%', width:'22%', height:'18%'}}>
            <span>Almoxarifado</span><span className="area">88 m²</span>
          </div>
          <div className="block" style={{top:'40%', right:'10%', width:'18%', height:'18%'}}>
            <span>Vestiário</span><span className="area">36 m²</span>
          </div>
          <div className="block" style={{top:'62%', left:'10%', width:'24%', height:'22%'}}>
            <span>Stand de venda</span><span className="area">120 m²</span>
          </div>
          <div className="block" style={{top:'62%', left:'38%', width:'32%', height:'22%'}}>
            <span>Pátio de armadura · pré-fabricados</span><span className="area">280 m²</span>
          </div>
          <div className="block" style={{top:'62%', right:'10%', width:'18%', height:'22%'}}>
            <span>Guarita · acesso</span><span className="area">14 m²</span>
          </div>
          {/* arrows */}
          <div className="arrow" style={{top:'34%', left:'42%'}}>→ fluxo</div>
          <div className="arrow" style={{top:'58%', left:'30%'}}>↓ acesso</div>
          <div className="scale">ESC 1:300</div>
          <div className="stamp">CT-AUR-001 · v.3.2</div>
        </div>

        <div className="pra-can-info">
          <div className="ey">Cap. 03 · Canteiro</div>
          <h3>O canteiro<br/>como um <em>edifício</em><br/>provisório.</h3>
          <p>
            A direção de obra trata o canteiro como um projeto à parte — com layout, fluxos, vizinhança e cronograma próprios. O que está fora da torre importa tanto quanto o que está dentro.
          </p>
          <ul>
            <li><span className="ix">01</span><span className="txt"><em>Eng. residente</em> em cada obra, em tempo integral</span></li>
            <li><span className="ix">02</span><span className="txt">Visita técnica <em>trimestral</em> da direção</span></li>
            <li><span className="ix">03</span><span className="txt">Pátio de pré-fabricados <em>na obra</em>, sem terceirizar</span></li>
            <li><span className="ix">04</span><span className="txt">Vestiário, refeitório e dormitório <em>auditados ISO 45001</em></span></li>
            <li><span className="ix">05</span><span className="txt">Vizinhança avisada <em>por escrito</em> antes de cada etapa</span></li>
          </ul>
        </div>
      </section>

      {/* Standards */}
      <section className="pra-tools">
        <div className="pra-tools-head">
          <div>
            <div className="ey">Cap. 04 · Padrões &amp; ferramentas</div>
            <h3>Auditáveis,<br/><em>publicáveis.</em></h3>
          </div>
          <p>Toda fase é auditável. Toda decisão crítica fica documentada. Toda obra publica boletins mensais que ficam disponíveis para o comprador, para o investidor e para o vizinho.</p>
        </div>
        <div className="pra-tools-grid">
          <div className="pra-tool">
            <div className="k">01 · Qualidade</div>
            <h5>ISO <em>9001</em></h5>
            <p>Certificada desde 2018. Auditoria externa anual. Não-conformidades públicas no portal.</p>
          </div>
          <div className="pra-tool">
            <div className="k">02 · Segurança</div>
            <h5>ISO <em>45001</em></h5>
            <p>Certificada em 2023. Plano de prevenção por canteiro. CIPA com participação obrigatória da direção.</p>
          </div>
          <div className="pra-tool">
            <div className="k">03 · Coordenação</div>
            <h5>BIM <em>LOD 350</em></h5>
            <p>Modelo único compartilhado entre arquit., estrut., MEP. Coordenadas semanalmente em canteiro.</p>
          </div>
          <div className="pra-tool">
            <div className="k">04 · Sustentabilidade</div>
            <h5>LEED <em>v4 / AQUA</em></h5>
            <p>Pré-selo obrigatório em projetos corporativos. Reuso de água &gt; 40% em todos os canteiros.</p>
          </div>
          <div className="pra-tool">
            <div className="k">05 · Transparência</div>
            <h5>Boletim <em>mensal.</em></h5>
            <p>Foto, cronograma e financeiro publicados ao comprador todo dia 5 do mês.</p>
          </div>
          <div className="pra-tool">
            <div className="k">06 · Pós-obra</div>
            <h5>Plano <em>25 anos.</em></h5>
            <p>Manutenção preventiva planejada por 25 anos. 5 anos cobertos integralmente pela Steel.</p>
          </div>
          <div className="pra-tool">
            <div className="k">07 · Auditoria</div>
            <h5>Big <em>Four.</em></h5>
            <p>Demonstrações auditadas anualmente. SPE por empreendimento. Patrimônio do comprador segregado.</p>
          </div>
          <div className="pra-tool">
            <div className="k">08 · Compliance</div>
            <h5>Programa <em>integral.</em></h5>
            <p>Canal de denúncia externo. Treinamento anual obrigatório. Política antissuborno desde 2019.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pra-cta">
        <div>
          <div className="ey">Aplicar o método ao seu projeto</div>
          <h2>Quer ver isso<br/>aplicado ao <em>seu projeto?</em></h2>
        </div>
        <div className="card">
          <h3>Estudo preliminar em <em>72 horas.</em></h3>
          <p>Compartilhe contexto, terreno ou briefing. A direção retorna com leitura de viabilidade dentro do método Steel.</p>
          <button>Iniciar conversa →</button>
        </div>
      </section>

      <footer className="pra-foot">
        <div className="pra-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col"><h4>Processo</h4><ul><li>Método v.3.2</li><li>Certificações</li><li>Auditorias</li><li>Boletins de obra</li></ul></div>
          <div className="col"><h4>Steel</h4><ul><li>A Steel</li><li>Empreendimentos</li><li>Construções</li><li>Investidores</li></ul></div>
          <div className="col"><h4>Contato</h4><ul><li>+55 11 4002 8922</li><li>contato@steelconstrucoes.com.br</li><li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li></ul></div>
        </div>
        <div className="pra-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.ProcessA = ProcessA;

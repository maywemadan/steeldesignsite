/* global React */

// ─── Contato · Variação A "Aço Estrutural" ──────────────────────────
// Cream/red, dividido em colunas: formulário denso à esquerda + canais
// diretos à direita (direção comercial, imprensa, novos negócios, RH).
// Mapa do escritório, horário, FAQ rápida. Scoped to .stl-cta.

const ContactACSS = `
.stl-cta {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.6;
  width: 100%;
}

/* ── Top + Nav ── */
.cta-top {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 10px 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
}
.cta-top .l { display: flex; gap: 22px; }
.cta-top .l .red { color: var(--steel-red-lt); }
.cta-top .r { display: flex; gap: 20px; color: rgba(241,235,224,0.7); }

.cta-nav {
  background: var(--steel-cream);
  padding: 22px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid var(--steel-border);
}
.cta-nav .logo { display: flex; align-items: center; gap: 14px; }
.cta-mark { width: 44px; height: 44px; background: var(--steel-red); position: relative; }
.cta-mark::before { content:''; position:absolute; left:14%; right:14%; top:46%; height:7%; background: var(--steel-cream); transform: rotate(-45deg); }
.cta-mark .ca { position:absolute; top:16%; right:16%; width:28%; height:28%; background: var(--steel-cream); }
.cta-mark .cb { position:absolute; bottom:14%; left:14%; width:22%; height:22%; background: var(--steel-cream); }
.cta-nav .lw { font-family: 'Anton', sans-serif; font-size: 28px; letter-spacing: 0.02em; color: var(--steel-black); line-height: 1; }
.cta-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-graphite); text-transform: uppercase; margin-top: 4px; }
.cta-nav ul { display: flex; gap: 26px; justify-self: center; }
.cta-nav ul a { font-size: 13px; font-weight: 500; color: var(--steel-ink); padding: 8px 4px; border-bottom: 2px solid transparent; }
.cta-nav ul a.active { border-bottom-color: var(--steel-red); }
.cta-nav .act { display: flex; gap: 12px; align-items: center; }
.cta-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 13px 22px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 10px; }
.cta-btn-out { background: transparent; color: var(--steel-ink); border: 1.5px solid var(--steel-ink); padding: 11.5px 20px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }

/* ── Hero ── */
.cta-hero {
  padding: 64px 48px 56px;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 56px; align-items: end;
  border-bottom: 2px solid var(--steel-ink);
}
.cta-hero .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--steel-red);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
}
.cta-hero .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cta-hero h1 {
  font-family: 'DM Serif Display', serif; font-weight: 400;
  font-size: 116px; line-height: 0.94;
  letter-spacing: -0.028em; color: var(--steel-black);
}
.cta-hero h1 em { font-style: italic; color: var(--steel-red); }
.cta-hero .lede {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 24px; line-height: 1.4;
  color: var(--steel-graphite); max-width: 460px;
}
.cta-hero .lede em { color: var(--steel-red); }
.cta-hero .lede + .meta {
  margin-top: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.2em; color: var(--steel-graphite);
  text-transform: uppercase;
  padding-top: 18px; border-top: 1px solid var(--steel-border);
}

/* ── Body grid ── */
.cta-body {
  display: grid; grid-template-columns: 1fr;
  gap: 0;
}
.cta-form {
  padding: 64px 48px;
}
.cta-form-head { margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid var(--steel-border); }
.cta-form-head .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red);
  text-transform: uppercase; margin-bottom: 14px;
}
.cta-form-head h2 {
  font-family: 'DM Serif Display', serif; font-size: 44px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-black);
  margin-bottom: 14px;
}
.cta-form-head h2 em { font-style: italic; color: var(--steel-red); }
.cta-form-head p { font-size: 14.5px; line-height: 1.65; color: var(--steel-graphite); max-width: 540px; }

.cta-purpose { margin-bottom: 28px; }
.cta-purpose .lab {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.2em;
  color: var(--steel-graphite); text-transform: uppercase;
  margin-bottom: 10px;
}
.cta-purpose .opts { display: flex; gap: 8px; flex-wrap: wrap; }
.cta-chip {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 10px 16px; border: 1px solid var(--steel-ink);
  color: var(--steel-ink); display: inline-flex; align-items: center; gap: 8px;
}
.cta-chip.active { background: var(--steel-red); border-color: var(--steel-red); color: var(--steel-cream); }
.cta-chip .dot { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }

.cta-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid var(--steel-ink); }
.cta-field {
  padding: 22px 24px 18px 0;
  border-right: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.cta-field:nth-child(2n) { padding-left: 24px; padding-right: 0; border-right: none; }
.cta-field.full { grid-column: span 2; border-right: none; padding-right: 0; padding-left: 0; }
.cta-field.full:nth-of-type(2n) { padding-left: 0; }
.cta-field .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em;
  color: var(--steel-stone); text-transform: uppercase;
  margin-bottom: 12px;
  display: flex; justify-content: space-between;
}
.cta-field .k .req { color: var(--steel-red); }
.cta-field .v {
  font-family: 'DM Serif Display', serif; font-size: 22px;
  color: var(--steel-ink); letter-spacing: -0.012em;
}
.cta-field .v.ph {
  font-style: italic; color: var(--steel-stone);
}
.cta-field.area .v { min-height: 90px; padding-top: 6px; font-style: italic; color: var(--steel-stone); }

.cta-form .legal {
  margin-top: 18px; padding-top: 18px; border-top: 1px solid var(--steel-border);
  font-size: 12.5px; color: var(--steel-graphite); line-height: 1.6;
  display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: start;
}
.cta-form .check {
  width: 18px; height: 18px; border: 1.5px solid var(--steel-ink);
  display: flex; align-items: center; justify-content: center; margin-top: 2px;
  background: var(--steel-red); color: var(--steel-cream);
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
}

.cta-submit-row {
  display: grid; grid-template-columns: 1fr auto;
  gap: 16px; margin-top: 24px; align-items: center;
}
.cta-submit-row .note {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.18em; color: var(--steel-graphite); text-transform: uppercase;
}
.cta-submit-row .note .red { color: var(--steel-red); font-weight: 700; }
.cta-submit-row .btn {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 28px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 12px; border: none;
}

/* ── Channels (right rail) ── */
.cta-chan { padding: 64px 48px; background: var(--steel-paper); }
.cta-chan .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red);
  text-transform: uppercase; margin-bottom: 22px;
}
.cta-chan h2 {
  font-family: 'DM Serif Display', serif; font-size: 38px;
  line-height: 1.02; letter-spacing: -0.022em; color: var(--steel-black);
  margin-bottom: 32px;
}
.cta-chan h2 em { font-style: italic; color: var(--steel-red); }

.cta-chan-item {
  padding: 22px 0;
  border-top: 1px solid var(--steel-border);
}
.cta-chan-item:last-child { border-bottom: 1px solid var(--steel-border); }
.cta-chan-item .role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--steel-graphite); margin-bottom: 10px;
  display: flex; justify-content: space-between;
}
.cta-chan-item .role .red { color: var(--steel-red); }
.cta-chan-item .name {
  font-family: 'DM Serif Display', serif; font-size: 24px;
  color: var(--steel-black); margin-bottom: 6px;
}
.cta-chan-item .name em { font-style: italic; color: var(--steel-red); }
.cta-chan-item .mail {
  font-size: 13.5px; color: var(--steel-graphite); font-family: 'JetBrains Mono', monospace;
}
.cta-chan-item .mail .arr { color: var(--steel-red); margin-left: 8px; }

.cta-chan .direct {
  margin-top: 28px;
  background: var(--steel-black); color: var(--steel-cream);
  padding: 28px 24px;
}
.cta-chan .direct .lab {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.22em;
  color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 10px;
}
.cta-chan .direct .ph {
  font-family: 'DM Serif Display', serif; font-size: 32px; letter-spacing: -0.012em;
}
.cta-chan .direct .hrs {
  margin-top: 16px; padding-top: 16px;
  border-top: 1px solid rgba(241,235,224,0.18);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.14em; color: rgba(241,235,224,0.7);
}
.cta-chan .direct .hrs .red { color: var(--steel-red-lt); }

/* ── Office + map ── */
.cta-office {
  background: var(--steel-bone);
  padding: 96px 48px;
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: 56px; align-items: center;
  border-top: 1px solid var(--steel-border);
  border-bottom: 1px solid var(--steel-border);
}
.cta-office .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red);
  text-transform: uppercase; margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.cta-office .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.cta-office h3 {
  font-family: 'DM Serif Display', serif; font-size: 56px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-black);
  margin-bottom: 22px;
}
.cta-office h3 em { font-style: italic; color: var(--steel-red); }
.cta-office .addr {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: var(--steel-graphite);
  margin-bottom: 28px; padding-bottom: 22px;
  border-bottom: 1px solid var(--steel-border);
}
.cta-office .rows li {
  display: grid; grid-template-columns: 1fr auto; gap: 18px;
  padding: 12px 0; border-bottom: 1px solid var(--steel-border);
  align-items: baseline;
}
.cta-office .rows li:last-child { border-bottom: none; }
.cta-office .rows .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.18em;
  color: var(--steel-graphite); text-transform: uppercase;
}
.cta-office .rows .v {
  font-family: 'DM Serif Display', serif; font-size: 18px; color: var(--steel-ink);
}
.cta-office .rows .v em { font-style: italic; color: var(--steel-red); }

.cta-map {
  position: relative;
  aspect-ratio: 16/10;
  background: var(--steel-cream);
  border: 1px solid var(--steel-ink);
  overflow: hidden;
}
.cta-map::before {
  content:''; position: absolute; inset: 0;
  background:
    linear-gradient(rgba(15,14,13,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.06) 1px, transparent 1px),
    linear-gradient(rgba(15,14,13,0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,14,13,0.10) 1px, transparent 1px);
  background-size: 28px 28px, 28px 28px, 280px 280px, 280px 280px;
}
.cta-map .road { position: absolute; background: rgba(15,14,13,0.18); }
.cta-map .road.r1 { top: 38%; left: 0; right: 0; height: 12px; }
.cta-map .road.r2 { top: 0; bottom: 0; left: 52%; width: 10px; }
.cta-map .road.r3 { top: 12%; left: 14%; right: 0; height: 6px; transform: rotate(8deg); transform-origin: left; }
.cta-map .pin {
  position: absolute; top: 38%; left: 52%;
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--steel-red);
  box-shadow: 0 0 0 8px rgba(142,27,34,0.18);
  transform: translate(-50%, -50%);
}
.cta-map .pin-lab {
  position: absolute; top: 38%; left: 52%;
  margin-left: 18px; margin-top: -4px;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: var(--steel-black);
  display: flex; align-items: center; gap: 8px;
}
.cta-map .pin-lab em { color: var(--steel-red); font-style: italic; }
.cta-map .lbl {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--steel-ink);
}
.cta-map .lbl.l1 { top: 50%; left: 8%; }
.cta-map .lbl.l2 { top: 18%; right: 12%; }
.cta-map .lbl.l3 { bottom: 14%; left: 22%; }
.cta-map .compass {
  position: absolute; top: 18px; right: 22px;
  width: 36px; height: 36px;
  border: 1px solid var(--steel-ink);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 14px; color: var(--steel-red);
}
.cta-map .scale {
  position: absolute; bottom: 18px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.18em;
  color: var(--steel-graphite); text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.cta-map .scale::after { content:''; width: 56px; height: 1px; background: var(--steel-ink); }

/* ── FAQ rápida ── */
.cta-faq {
  padding: 96px 48px;
  display: grid; grid-template-columns: auto 1.4fr 1fr;
  gap: 56px; align-items: start;
}
.cta-faq .ch {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 96px; line-height: 0.85;
  color: var(--steel-red); letter-spacing: -0.035em;
  position: sticky; top: 24px;
}
.cta-faq h3 {
  font-family: 'DM Serif Display', serif; font-size: 56px;
  line-height: 1; letter-spacing: -0.022em; color: var(--steel-black);
}
.cta-faq h3 em { font-style: italic; color: var(--steel-red); }
.cta-faq p {
  font-size: 15.5px; line-height: 1.7; color: var(--steel-graphite);
  margin-top: 18px; max-width: 460px;
}
.cta-faq .items { border-top: 1px solid var(--steel-ink); }
.cta-faq .item {
  padding: 20px 0; border-bottom: 1px solid var(--steel-border);
}
.cta-faq .item .q {
  font-family: 'DM Serif Display', serif; font-size: 22px;
  letter-spacing: -0.012em; color: var(--steel-black);
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 6px;
}
.cta-faq .item .q em { font-style: italic; color: var(--steel-red); }
.cta-faq .item .q .arr {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--steel-red); letter-spacing: 0.2em;
}
.cta-faq .item.open .a {
  display: block; font-size: 14px; color: var(--steel-graphite);
  line-height: 1.7; margin-top: 8px;
}
.cta-faq .item .a { display: none; }

/* Footer compact */
.cta-foot {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 56px 48px 24px;
}
.cta-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.cta-foot .bw { font-family: 'Anton', sans-serif; font-size: 52px; line-height: 0.95; color: var(--steel-cream); letter-spacing: 0.02em; }
.cta-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.cta-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 20px; color: rgba(241,235,224,0.7); max-width: 340px; line-height: 1.4; }
.cta-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.cta-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.cta-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function ContactA() {
  return (
    <div className="steel stl-cta">
      <style>{ContactACSS}</style>

      <div className="cta-top">
        <div className="l">
          <span><span className="red">●</span> Respondendo conversas em 4h úteis</span>
          <span>SP · MG · DF</span>
        </div>
        <div className="r">
          <span>+55 11 4002 8922</span>
          <span>contato@steelconstrucoes.com.br</span>
          <span>PT · EN</span>
        </div>
      </div>

      <nav className="cta-nav">
        <div className="logo">
          <div className="cta-mark"><span className="ca"></span><span className="cb"></span></div>
          <div>
            <div className="lw">STEEL</div>
            <div className="ls">Construções &amp; Empreendimentos</div>
          </div>
        </div>
        <ul>
          <li><a>Empreendimentos</a></li>
          <li><a>Construções</a></li>
          <li><a>A Steel</a></li>
          <li><a>Processo</a></li>
          <li><a>Imprensa</a></li>
          <li><a className="active">Contato</a></li>
        </ul>
        <div className="act">
          <a className="cta-btn-out">Brochura ↓</a>
          <a className="cta-btn-red">Agendar visita →</a>
        </div>
      </nav>

      <section className="cta-hero">
        <div>
          <div className="ey">Cap. 01 · Iniciar conversa</div>
          <h1>Tem um<br/>projeto, terreno<br/>ou <em>ideia?</em></h1>
        </div>
        <div>
          <p className="lede">A direção atende diretamente — <em>sem secretaria</em>, sem repasse, sem formulário automático. Retornamos com viabilidade preliminar em até <em>72 horas</em>.</p>
          <div className="meta">SLA · 4h úteis · primeira resposta · estudo em 72h</div>
        </div>
      </section>

      <section className="cta-body">
        {/* Form */}
        <div className="cta-form">
          <div className="cta-form-head">
            <div className="k">Formulário · 01</div>
            <h2>Conte para<br/>a <em>Steel.</em></h2>
            <p>Os campos abaixo nos ajudam a entender desde o início se faz sentido falarmos — e a direcionar internamente para quem responde melhor.</p>
          </div>

          <div className="cta-purpose">
            <div className="lab">Qual o assunto?</div>
            <div className="opts">
              <span className="cta-chip"><span className="dot"></span>Comprar um imóvel</span>
              <span className="cta-chip active"><span className="dot"></span>Construir com a Steel</span>
              <span className="cta-chip"><span className="dot"></span>Aporte de terreno</span>
              <span className="cta-chip"><span className="dot"></span>Imprensa</span>
              <span className="cta-chip"><span className="dot"></span>Trabalhar conosco</span>
              <span className="cta-chip"><span className="dot"></span>Pós-obra</span>
            </div>
          </div>

          <div className="cta-fields">
            <div className="cta-field">
              <div className="k"><span>Nome completo</span><span className="req">*</span></div>
              <div className="v ph">como devemos chamar você</div>
            </div>
            <div className="cta-field">
              <div className="k"><span>Empresa &amp; cargo</span><span>opcional</span></div>
              <div className="v ph">Grupo Maia · Diretora imobiliária</div>
            </div>
            <div className="cta-field">
              <div className="k"><span>E-mail corporativo</span><span className="req">*</span></div>
              <div className="v ph">voce@empresa.com.br</div>
            </div>
            <div className="cta-field">
              <div className="k"><span>Telefone &amp; WhatsApp</span><span className="req">*</span></div>
              <div className="v ph">+55 11 0 0000 0000</div>
            </div>
            <div className="cta-field">
              <div className="k"><span>Praça do projeto</span><span>opcional</span></div>
              <div className="v">São Paulo <em>· capital</em></div>
            </div>
            <div className="cta-field">
              <div className="k"><span>Faixa de investimento</span><span>opcional</span></div>
              <div className="v">R$ 8M <em>—</em> R$ 40M</div>
            </div>
            <div className="cta-field full area">
              <div className="k"><span>Contexto</span><span>até 600 caracteres</span></div>
              <div className="v ph">temos um terreno de 1.800m² em pinheiros e gostaríamos de avaliar viabilidade de empreendimento residencial...</div>
            </div>
            <div className="cta-field full">
              <div className="k"><span>Anexos</span><span>opcional · pdf, jpg, dwg</span></div>
              <div className="v" style={{color:'var(--steel-graphite)', fontStyle:'italic'}}>arraste arquivos aqui ou clique para selecionar</div>
            </div>
          </div>

          <div className="legal">
            <div className="check">✓</div>
            <div>Li e concordo com a <strong style={{color:'var(--steel-ink)'}}>Política de Privacidade</strong> da Steel. Os dados serão usados exclusivamente para responder esta conversa — sem mailings, sem repasse, sem retargeting.</div>
          </div>

          <div className="cta-submit-row">
            <div className="note">Resposta em <span className="red">4h úteis</span> · estudo preliminar em <span className="red">72h</span></div>
            <button className="btn">Enviar conversa <span>→</span></button>
          </div>
        </div>

      </section>

      {/* Office */}
      <section className="cta-office">
        <div>
          <div className="ey">Cap. 02 · Visite o escritório</div>
          <h3>Itaim Bibi,<br/>São <em>Paulo.</em></h3>
          <div className="addr">Av. Brig. Faria Lima, 1.234 · 12º andar<br/>Itaim Bibi · São Paulo · SP · 04538-100</div>
          <ul className="rows">
            <li><span className="k">Horário</span><span className="v">seg–sex · <em>9h às 18h</em></span></li>
            <li><span className="k">Visita</span><span className="v">com <em>agendamento</em></span></li>
            <li><span className="k">Estacionamento</span><span className="v">12 vagas <em>cortesia</em></span></li>
            <li><span className="k">Metrô mais próx.</span><span className="v">Faria Lima · 320 m</span></li>
          </ul>
        </div>
        <div className="cta-map">
          <div className="compass">N</div>
          <div className="road r1"></div>
          <div className="road r2"></div>
          <div className="road r3"></div>
          <div className="pin"></div>
          <div className="pin-lab"><em>· Steel</em></div>
          <div className="lbl l1">Av. Faria Lima</div>
          <div className="lbl l2">Itaim Bibi</div>
          <div className="lbl l3">R. Joaquim Floriano</div>
          <div className="scale">ESC 1:8000</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cta-faq">
        <div className="ch">III</div>
        <div>
          <h3>Perguntas <em>frequentes.</em></h3>
          <p>Quatro perguntas que mais ouvimos. Se a sua não está aqui, escreva — respondemos em até 4h úteis.</p>
        </div>
        <div className="items">
          <div className="item open">
            <div className="q"><span>A Steel atende <em>fora</em> de SP, MG e DF?</span><span className="arr">−</span></div>
            <div className="a">Atendemos projetos pontuais em outras praças quando o cliente é nacional — Hospital Albano em BH, por exemplo, foi servido pela equipe SP. Para empreendimentos próprios, hoje operamos só nessas três praças.</div>
          </div>
          <div className="item">
            <div className="q"><span>Qual <em>ticket mínimo</em> para projetos B2B?</span><span className="arr">+</span></div>
          </div>
          <div className="item">
            <div className="q"><span>Tem <em>visita</em> guiada em canteiro?</span><span className="arr">+</span></div>
          </div>
          <div className="item">
            <div className="q"><span>Como funciona o <em>pós-obra</em>?</span><span className="arr">+</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cta-foot">
        <div className="cta-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col"><h4>Empreendimentos</h4><ul><li>Em obras (3)</li><li>Lançamento (2)</li><li>Pronto (2)</li><li>Ver todos</li></ul></div>
          <div className="col"><h4>Steel</h4><ul><li>A Steel</li><li>Processo</li><li>Imprensa</li><li>Investidores</li><li>Trabalhe conosco</li></ul></div>
          <div className="col"><h4>Contato</h4><ul><li>+55 11 4002 8922</li><li>contato@steelconstrucoes.com.br</li><li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li></ul></div>
        </div>
        <div className="cta-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"construir com intenção"</div>
        </div>
      </footer>
    </div>
  );
}

window.ContactA = ContactA;

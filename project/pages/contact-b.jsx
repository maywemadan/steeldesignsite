/* global React */

// ─── Contato · Variação B "Aço Editorial / Conciérge" ───────────────
// Hero escuro grande com frase editorial, conversa em uma única coluna
// estilo "carta", canais como retratos da direção (foto+nome+e-mail),
// agenda de visitas em formato de calendário. Scoped to .stl-ctb.

const ContactBCSS = `
.stl-ctb {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: var(--steel-ink);
  background: var(--steel-cream);
  font-size: 14.5px;
  line-height: 1.65;
  width: 100%;
}

/* Nav dark */
.ctb-nav {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 48px;
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 48px; align-items: center;
  border-bottom: 1px solid rgba(241,235,224,0.08);
}
.ctb-nav .logo { display: flex; align-items: center; gap: 14px; }
.ctb-mark { width: 40px; height: 40px; background: var(--steel-red); position: relative; }
.ctb-mark::before { content:''; position:absolute; left:14%; right:14%; top:46%; height:7%; background: var(--steel-cream); transform: rotate(-45deg); }
.ctb-mark .ca { position:absolute; top:16%; right:16%; width:28%; height:28%; background: var(--steel-cream); }
.ctb-mark .cb { position:absolute; bottom:14%; left:14%; width:22%; height:22%; background: var(--steel-cream); }
.ctb-nav .lw { font-family: 'Anton', sans-serif; font-size: 24px; letter-spacing: 0.02em; color: var(--steel-cream); }
.ctb-nav .ls { font-size: 9px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-top: 4px; }
.ctb-nav ul { display: flex; gap: 26px; justify-self: center; }
.ctb-nav ul a { font-size: 13px; font-weight: 500; color: rgba(241,235,224,0.7); padding: 8px 4px; border-bottom: 2px solid transparent; }
.ctb-nav ul a.active { color: var(--steel-cream); border-bottom-color: var(--steel-red); }
.ctb-btn-red { background: var(--steel-red); color: var(--steel-cream); padding: 12px 22px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.ctb-btn-ghost { background: transparent; color: var(--steel-cream); border: 1px solid rgba(241,235,224,0.3); padding: 11px 20px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }

/* Hero */
.ctb-hero {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 96px 48px 80px;
  position: relative; overflow: hidden;
}
.ctb-hero::before {
  content:''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 85% 30%, rgba(142,27,34,0.22), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px);
}
.ctb-hero .top {
  display: flex; justify-content: space-between; align-items: flex-start;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(241,235,224,0.55);
  margin-bottom: 80px; position: relative; z-index: 2;
}
.ctb-hero .top .red { color: var(--steel-red-lt); display: flex; align-items: center; gap: 8px; }
.ctb-hero .top .red .dot { width: 8px; height: 8px; background: var(--steel-red); border-radius: 50%; box-shadow: 0 0 0 5px rgba(142,27,34,0.18); }
.ctb-hero .top .r { display: flex; gap: 28px; }
.ctb-hero .ey {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 30px; color: var(--steel-red-lt);
  margin-bottom: 14px; position: relative; z-index: 2;
}
.ctb-hero h1 {
  font-family: 'DM Serif Display', serif; font-weight: 400;
  font-size: 168px; line-height: 0.88;
  letter-spacing: -0.035em; color: var(--steel-cream);
  position: relative; z-index: 2;
}
.ctb-hero h1 em { font-style: italic; color: var(--steel-red-lt); }
.ctb-hero .lede {
  margin-top: 48px;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 26px; line-height: 1.45;
  color: rgba(241,235,224,0.82); max-width: 760px;
  position: relative; z-index: 2;
}
.ctb-hero .lede em { color: var(--steel-red-lt); }
.ctb-hero .sla {
  margin-top: 56px; padding-top: 32px;
  border-top: 1px solid rgba(241,235,224,0.18);
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
  position: relative; z-index: 2;
}
.ctb-hero .sla .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em;
  color: rgba(241,235,224,0.45); text-transform: uppercase;
  margin-bottom: 8px;
}
.ctb-hero .sla .v {
  font-family: 'DM Serif Display', serif; font-size: 32px;
  letter-spacing: -0.018em; color: var(--steel-cream);
}
.ctb-hero .sla .v em { font-style: italic; color: var(--steel-red-lt); font-size: 20px; }

/* Carta — single column letter */
.ctb-letter {
  background: var(--steel-cream);
  padding: 120px 48px;
  display: grid; grid-template-columns: 320px 1fr;
  gap: 80px; align-items: start;
}
.ctb-letter .left {
  position: sticky; top: 24px;
}
.ctb-letter .left .lab {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em;
  color: var(--steel-red); text-transform: uppercase;
  margin-bottom: 24px;
  display: flex; align-items: center; gap: 12px;
}
.ctb-letter .left .lab::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.ctb-letter .left h2 {
  font-family: 'DM Serif Display', serif; font-size: 60px;
  line-height: 1; letter-spacing: -0.025em;
  color: var(--steel-black);
}
.ctb-letter .left h2 em { font-style: italic; color: var(--steel-red); }
.ctb-letter .left p {
  margin-top: 22px;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 19px; color: var(--steel-graphite);
  line-height: 1.5; max-width: 280px;
}

.ctb-letter .right .card {
  background: var(--steel-paper);
  border: 1px solid var(--steel-border);
  padding: 56px 56px;
}
.ctb-letter .right .card .salut {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 28px; color: var(--steel-black); margin-bottom: 32px;
  padding-bottom: 24px; border-bottom: 1px solid var(--steel-border);
}
.ctb-letter .right .field {
  display: flex; flex-direction: column; gap: 10px;
  padding: 18px 0; border-bottom: 1px solid var(--steel-border);
}
.ctb-letter .right .field:last-of-type { border-bottom: none; }
.ctb-letter .right .field .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em;
  color: var(--steel-stone); text-transform: uppercase;
  display: flex; justify-content: space-between;
}
.ctb-letter .right .field .k .req { color: var(--steel-red); }
.ctb-letter .right .field .v {
  font-family: 'DM Serif Display', serif; font-size: 26px;
  color: var(--steel-ink); letter-spacing: -0.012em;
}
.ctb-letter .right .field .v.ph { font-style: italic; color: var(--steel-stone); }
.ctb-letter .right .field .opts { display: flex; flex-wrap: wrap; gap: 8px; }
.ctb-letter .right .field .opts .chip {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 10px 16px; border: 1px solid var(--steel-ink);
  color: var(--steel-ink); border-radius: 100px;
}
.ctb-letter .right .field .opts .chip.active { background: var(--steel-red); border-color: var(--steel-red); color: var(--steel-cream); }
.ctb-letter .right .signoff {
  margin-top: 36px; padding-top: 28px;
  border-top: 1px solid var(--steel-border);
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: var(--steel-graphite);
  display: flex; justify-content: space-between; align-items: end;
  gap: 24px;
}
.ctb-letter .right .signoff button {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 32px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 12px;
}

/* Concierge — direção em retratos */
.ctb-conc {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 120px 48px;
}
.ctb-conc-head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 56px; align-items: end;
  padding-bottom: 36px; margin-bottom: 56px;
  border-bottom: 1px solid rgba(241,235,224,0.18);
}
.ctb-conc-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em;
  color: var(--steel-red-lt); text-transform: uppercase;
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.ctb-conc-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.ctb-conc-head h3 {
  font-family: 'DM Serif Display', serif; font-size: 72px;
  line-height: 1; letter-spacing: -0.025em; color: var(--steel-cream);
}
.ctb-conc-head h3 em { font-style: italic; color: var(--steel-red-lt); }
.ctb-conc-head p {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; line-height: 1.4;
  color: rgba(241,235,224,0.75); max-width: 540px;
}

.ctb-conc-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
}
.ctb-conc-card {
  position: relative;
  background: linear-gradient(165deg, #4a423a 0%, #14130f 100%);
  aspect-ratio: 3/4.2;
  overflow: hidden;
}
.ctb-conc-card:nth-child(2) { background: linear-gradient(155deg, #5a4d3e, #2a2418); }
.ctb-conc-card:nth-child(3) { background: linear-gradient(170deg, #38332c, #14130f); }
.ctb-conc-card:nth-child(4) { background: linear-gradient(160deg, #6a5e50, #1a1612); }
.ctb-conc-card::before {
  content:''; position: absolute; inset: 0;
  background:
    linear-gradient(to top, rgba(15,14,13,0.92), transparent 50%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 70px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 70px);
}
.ctb-conc-card .lb {
  position: absolute; top: 20px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(241,235,224,0.4);
}
.ctb-conc-card .no {
  position: absolute; top: 20px; right: 22px;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 24px; color: rgba(241,235,224,0.5);
}
.ctb-conc-card .info {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 26px 22px;
}
.ctb-conc-card .role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--steel-red-lt);
  margin-bottom: 10px;
}
.ctb-conc-card h4 {
  font-family: 'DM Serif Display', serif; font-size: 30px;
  line-height: 1.05; letter-spacing: -0.015em; color: var(--steel-cream);
}
.ctb-conc-card h4 em { font-style: italic; color: var(--steel-red-lt); }
.ctb-conc-card .mail {
  margin-top: 14px; padding-top: 14px;
  border-top: 1px solid rgba(241,235,224,0.18);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; color: rgba(241,235,224,0.75);
  display: flex; justify-content: space-between; align-items: baseline;
}
.ctb-conc-card .mail .red { color: var(--steel-red-lt); }

/* Agenda / próximas visitas */
.ctb-agenda {
  background: var(--steel-cream);
  padding: 120px 48px;
}
.ctb-agenda-head {
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 56px; align-items: end;
  padding-bottom: 32px; margin-bottom: 48px;
  border-bottom: 2px solid var(--steel-ink);
}
.ctb-agenda-head .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red);
  text-transform: uppercase; margin-bottom: 14px;
  display: flex; align-items: center; gap: 12px;
}
.ctb-agenda-head .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.ctb-agenda-head h3 {
  font-family: 'DM Serif Display', serif; font-size: 60px;
  line-height: 1; letter-spacing: -0.025em; color: var(--steel-black);
}
.ctb-agenda-head h3 em { font-style: italic; color: var(--steel-red); }
.ctb-agenda-head .right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--steel-graphite);
  text-align: right; max-width: 240px; line-height: 1.7;
}

.ctb-cal {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
.ctb-cal .slot {
  background: var(--steel-paper);
  border: 1px solid var(--steel-border);
  padding: 24px 22px;
  display: flex; flex-direction: column;
  gap: 12px;
  min-height: 220px;
}
.ctb-cal .slot.busy { background: var(--steel-bone); opacity: 0.55; }
.ctb-cal .slot.acc { background: var(--steel-red); color: var(--steel-cream); border-color: var(--steel-red); }
.ctb-cal .slot .day {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.22em;
  color: var(--steel-graphite); text-transform: uppercase;
  display: flex; justify-content: space-between;
  padding-bottom: 10px; border-bottom: 1px solid var(--steel-border);
}
.ctb-cal .slot.acc .day { color: rgba(247,242,233,0.7); border-color: rgba(247,242,233,0.2); }
.ctb-cal .slot .num {
  font-family: 'DM Serif Display', serif; font-size: 56px;
  line-height: 0.9; letter-spacing: -0.022em;
  color: var(--steel-black);
}
.ctb-cal .slot.acc .num { color: var(--steel-cream); }
.ctb-cal .slot .num em { font-style: italic; color: var(--steel-red); font-size: 26px; }
.ctb-cal .slot.acc .num em { color: rgba(247,242,233,0.85); }
.ctb-cal .slot .times {
  display: flex; flex-direction: column; gap: 6px;
  margin-top: auto;
}
.ctb-cal .slot .time {
  display: flex; justify-content: space-between;
  padding: 8px 0;
  border-top: 1px solid var(--steel-border);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.1em; color: var(--steel-ink);
}
.ctb-cal .slot.acc .time { border-color: rgba(247,242,233,0.2); color: var(--steel-cream); }
.ctb-cal .slot .time.taken { color: var(--steel-stone); text-decoration: line-through; }
.ctb-cal .slot .time .red { color: var(--steel-red); font-weight: 700; }
.ctb-cal .slot.acc .time .red { color: var(--steel-cream); }
.ctb-cal .slot.busy .time { color: var(--steel-stone); }

.ctb-cta-row {
  margin-top: 36px;
  display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 24px;
}
.ctb-cta-row p {
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: var(--steel-graphite); max-width: 720px;
}
.ctb-cta-row p em { color: var(--steel-red); }
.ctb-cta-row .btn {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 18px 32px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
}

/* Office strip */
.ctb-office {
  background: var(--steel-coal); color: var(--steel-cream);
  padding: 96px 48px;
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: 56px; align-items: center;
}
.ctb-office .ey {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.22em;
  color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 14px;
  display: flex; align-items: center; gap: 12px;
}
.ctb-office .ey::before { content:''; width: 28px; height: 1px; background: var(--steel-red); }
.ctb-office h3 {
  font-family: 'DM Serif Display', serif; font-size: 52px;
  line-height: 1.02; letter-spacing: -0.022em; color: var(--steel-cream);
}
.ctb-office h3 em { font-style: italic; color: var(--steel-red-lt); }
.ctb-office .addr {
  margin: 22px 0;
  font-family: 'DM Serif Display', serif; font-style: italic;
  font-size: 22px; color: rgba(241,235,224,0.7);
  padding-bottom: 22px; border-bottom: 1px solid rgba(241,235,224,0.15);
}
.ctb-office ul { display: flex; flex-direction: column; }
.ctb-office ul li {
  display: grid; grid-template-columns: 1fr auto; gap: 18px;
  padding: 12px 0; border-bottom: 1px solid rgba(241,235,224,0.12);
  align-items: baseline;
}
.ctb-office ul li:last-child { border-bottom: none; }
.ctb-office .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px; letter-spacing: 0.18em;
  color: rgba(241,235,224,0.55); text-transform: uppercase;
}
.ctb-office .v {
  font-family: 'DM Serif Display', serif; font-size: 18px;
  color: var(--steel-cream);
}
.ctb-office .v em { font-style: italic; color: var(--steel-red-lt); }

.ctb-office-pic {
  position: relative;
  aspect-ratio: 16/9.5;
  background: linear-gradient(165deg, #4a423a, #14130f);
  overflow: hidden;
  border: 1px solid rgba(241,235,224,0.15);
}
.ctb-office-pic::before {
  content:''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 30% 60%, rgba(142,27,34,0.15), transparent 60%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 70px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 70px);
}
.ctb-office-pic::after {
  content: 'IMAGEM · ESCRITÓRIO STEEL · ITAIM BIBI · 12° ANDAR';
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.32em;
  color: rgba(241,235,224,0.2);
}
.ctb-office-pic .stamp {
  position: absolute; bottom: 22px; left: 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(241,235,224,0.45);
}

/* Footer */
.ctb-foot {
  background: var(--steel-black); color: var(--steel-cream);
  padding: 64px 48px 24px;
}
.ctb-foot-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(241,235,224,0.12); }
.ctb-foot .bw { font-family: 'Anton', sans-serif; font-size: 56px; line-height: 0.95; letter-spacing: 0.02em; color: var(--steel-cream); }
.ctb-foot .bs { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin: 8px 0 24px; }
.ctb-foot .bq { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 22px; color: rgba(241,235,224,0.7); max-width: 360px; line-height: 1.4; }
.ctb-foot .col h4 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: var(--steel-red-lt); text-transform: uppercase; margin-bottom: 22px; }
.ctb-foot .col li { font-size: 13.5px; color: rgba(241,235,224,0.7); margin-bottom: 10px; }
.ctb-foot-bottom { padding-top: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(241,235,224,0.4); }
`;

function ContactB() {
  return (
    <div className="steel stl-ctb">
      <style>{ContactBCSS}</style>

      <nav className="ctb-nav">
        <div className="logo">
          <div className="ctb-mark"><span className="ca"></span><span className="cb"></span></div>
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
        <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <a className="ctb-btn-ghost">Press kit ↓</a>
          <a className="ctb-btn-red">Falar com a direção →</a>
        </div>
      </nav>

      <section className="ctb-hero">
        <div className="top">
          <span className="red"><span className="dot"></span>conversas com primeira resposta em 4h úteis</span>
          <div className="r">
            <span>Cap. 01 · Iniciar conversa</span>
            <span>SP · MG · DF</span>
            <span>SCR / CTA / 26</span>
          </div>
        </div>

        <div className="ey">— a direção responde diretamente —</div>
        <h1>uma <em>conversa,</em><br/>sem repasse.</h1>

        <p className="lede">
          Não há central, não há atendimento automático, não há formulário que vai para uma fila. A <em>direção comercial atende</em> — e retorna com viabilidade preliminar em até <em>72 horas</em>.
        </p>

        <div className="sla">
          <div><div className="k">Primeira resposta</div><div className="v">4h <em>· úteis</em></div></div>
          <div><div className="k">Estudo preliminar</div><div className="v">72 <em>horas</em></div></div>
          <div><div className="k">Atendimento</div><div className="v">seg–sex <em>· 9h–18h</em></div></div>
          <div><div className="k">Idiomas</div><div className="v">PT <em>·</em> EN <em>·</em> ES</div></div>
        </div>
      </section>

      {/* Letter form */}
      <section className="ctb-letter">
        <div className="left">
          <div className="lab">Cap. 02 · Conversa</div>
          <h2>Conte para<br/>a <em>Steel.</em></h2>
          <p>Quanto mais contexto, melhor a primeira resposta. Anexos são bem-vindos — PDF, JPG, DWG, BIM.</p>
        </div>
        <div className="right">
          <div className="card">
            <div className="salut">À direção da Steel,</div>

            <div className="field">
              <div className="k"><span>Qual o assunto?</span></div>
              <div className="opts">
                <span className="chip">Comprar um imóvel</span>
                <span className="chip active">Construir com a Steel</span>
                <span className="chip">Aporte de terreno</span>
                <span className="chip">Imprensa</span>
                <span className="chip">Pós-obra</span>
              </div>
            </div>
            <div className="field">
              <div className="k"><span>Sou</span><span className="req">*</span></div>
              <div className="v ph">Renata Alvim — Grupo Maia, Diretora Imobiliária</div>
            </div>
            <div className="field">
              <div className="k"><span>Meu contato é</span><span className="req">*</span></div>
              <div className="v ph">renata.alvim@grupomaia.com.br · +55 11 0 0000 0000</div>
            </div>
            <div className="field">
              <div className="k"><span>Praça do projeto</span></div>
              <div className="v">São Paulo <em>·</em> capital</div>
            </div>
            <div className="field">
              <div className="k"><span>E gostaria de conversar sobre</span><span className="req">*</span></div>
              <div className="v ph">temos um terreno em pinheiros de 1.800 m² e gostaríamos de avaliar viabilidade de um residencial de alto padrão. orçamento previsto em torno de r$ 22 mi de obra...</div>
            </div>
            <div className="field">
              <div className="k"><span>Anexo</span><span>opcional · pdf, jpg, dwg, bim</span></div>
              <div className="v ph">— arraste arquivos ou clique para selecionar —</div>
            </div>

            <div className="signoff">
              <div>Atenciosamente, <em>R. Alvim</em></div>
              <button>Enviar conversa →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge */}
      <section className="ctb-conc">
        <div className="ctb-conc-head">
          <div>
            <div className="ey">Cap. 03 · Direção que atende</div>
            <h3>Cada assunto<br/>tem um <em>nome</em><br/>na direção.</h3>
          </div>
          <p>
            A direção comercial, de obras, de imprensa e de gente atendem diretamente. Sem secretaria, sem repasse interno, sem formulário automático.
          </p>
        </div>

        <div className="ctb-conc-grid">
          <div className="ctb-conc-card">
            <span className="lb">RETRATO 01</span>
            <span className="no">01</span>
            <div className="info">
              <div className="role">Direção · incorporação</div>
              <h4>Andrea<br/><em>Prado</em></h4>
              <div className="mail"><span>andrea.prado@steel...</span><span className="red">↗</span></div>
            </div>
          </div>
          <div className="ctb-conc-card">
            <span className="lb">RETRATO 02</span>
            <span className="no">02</span>
            <div className="info">
              <div className="role">Direção · obras &amp; B2B</div>
              <h4>Fábio<br/><em>Camargo</em></h4>
              <div className="mail"><span>fabio.camargo@steel...</span><span className="red">↗</span></div>
            </div>
          </div>
          <div className="ctb-conc-card">
            <span className="lb">RETRATO 03</span>
            <span className="no">03</span>
            <div className="info">
              <div className="role">Imprensa &amp; ESG</div>
              <h4>Laura<br/><em>Vidal</em></h4>
              <div className="mail"><span>imprensa@steel...</span><span className="red">↗</span></div>
            </div>
          </div>
          <div className="ctb-conc-card">
            <span className="lb">RETRATO 04</span>
            <span className="no">04</span>
            <div className="info">
              <div className="role">Gente · trabalhe aqui</div>
              <h4>Equipe<br/><em>Gente</em></h4>
              <div className="mail"><span>gente@steel...</span><span className="red">↗</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="ctb-agenda">
        <div className="ctb-agenda-head">
          <div>
            <div className="ey">Cap. 04 · Agenda · 22 a 26 mai · 2026</div>
            <h3>Próximas visitas<br/>ao <em>stand Aurora.</em></h3>
          </div>
          <div></div>
          <div className="right">visitas guiadas<br/>pelo engenheiro<br/>responsável<br/>· ter / qui · 10h–16h</div>
        </div>

        <div className="ctb-cal">
          <div className="ctb-cal slot busy">
            <div className="day"><span>Segunda</span><span>22 mai</span></div>
            <div className="num">22<em>/05</em></div>
            <div className="times">
              <div className="time taken">10h00</div>
              <div className="time taken">14h00</div>
              <div className="time taken">16h00</div>
            </div>
          </div>
          <div className="ctb-cal slot">
            <div className="day"><span>Terça</span><span>23 mai</span></div>
            <div className="num">23<em>/05</em></div>
            <div className="times">
              <div className="time"><span>10h00</span><span className="red">livre</span></div>
              <div className="time taken">14h00</div>
              <div className="time"><span>16h00</span><span className="red">livre</span></div>
            </div>
          </div>
          <div className="ctb-cal slot busy">
            <div className="day"><span>Quarta</span><span>24 mai</span></div>
            <div className="num">24<em>/05</em></div>
            <div className="times">
              <div className="time taken">10h00</div>
              <div className="time taken">14h00</div>
              <div className="time taken">16h00</div>
            </div>
          </div>
          <div className="ctb-cal slot acc">
            <div className="day"><span>Quinta · sugestão</span><span>25 mai</span></div>
            <div className="num">25<em>/05</em></div>
            <div className="times">
              <div className="time"><span>10h00</span><span className="red">livre</span></div>
              <div className="time"><span>14h00</span><span className="red">livre</span></div>
              <div className="time"><span>16h00</span><span className="red">livre</span></div>
            </div>
          </div>
          <div className="ctb-cal slot">
            <div className="day"><span>Sexta</span><span>26 mai</span></div>
            <div className="num">26<em>/05</em></div>
            <div className="times">
              <div className="time taken">10h00</div>
              <div className="time"><span>14h00</span><span className="red">livre</span></div>
              <div className="time taken">16h00</div>
            </div>
          </div>
        </div>

        <div className="ctb-cta-row">
          <p>"Visitas guiadas <em>pelo engenheiro responsável</em> da obra, com acesso ao apartamento decorado modelo e à estrutura do nono pavimento."</p>
          <a className="btn">Agendar visita →</a>
        </div>
      </section>

      {/* Office */}
      <section className="ctb-office">
        <div>
          <div className="ey">Cap. 05 · Escritório</div>
          <h3>Itaim Bibi,<br/>São <em>Paulo.</em></h3>
          <div className="addr">Av. Brig. Faria Lima, 1.234 · 12º andar<br/>Itaim Bibi · São Paulo · SP · 04538-100</div>
          <ul>
            <li><span className="k">Horário</span><span className="v">seg–sex · <em>9h às 18h</em></span></li>
            <li><span className="k">Visita</span><span className="v">com <em>agendamento</em></span></li>
            <li><span className="k">Estacionamento</span><span className="v">12 vagas <em>cortesia</em></span></li>
            <li><span className="k">Metrô mais próx.</span><span className="v">Faria Lima <em>· 320 m</em></span></li>
            <li><span className="k">Telefone direto</span><span className="v">+55 11 4002 <em>8922</em></span></li>
          </ul>
        </div>
        <div className="ctb-office-pic">
          <div className="stamp">FOTO · M. BELMONTE · 2026 · ARQUIVO STEEL</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ctb-foot">
        <div className="ctb-foot-top">
          <div>
            <div className="bw">STEEL</div>
            <div className="bs">Construções &amp; Empreendimentos · est. 1994</div>
            <div className="bq">"Construir com intenção, entregar com assinatura."</div>
          </div>
          <div className="col"><h4>Empreendimentos</h4><ul><li>Em obras (3)</li><li>Lançamento (2)</li><li>Pronto (2)</li><li>Ver todos</li></ul></div>
          <div className="col"><h4>Steel</h4><ul><li>A Steel</li><li>Processo</li><li>Imprensa</li><li>Investidores</li><li>Trabalhe conosco</li></ul></div>
          <div className="col"><h4>Contato</h4><ul><li>+55 11 4002 8922</li><li>contato@steelconstrucoes.com.br</li><li>Av. Brig. Faria Lima, 1234<br/>Itaim Bibi · São Paulo</li></ul></div>
        </div>
        <div className="ctb-foot-bottom">
          <div>© 2026 Steel Construções e Empreendimentos Ltda · CREA-J 24.318</div>
          <div>"edifícios que permanecem"</div>
        </div>
      </footer>
    </div>
  );
}

window.ContactB = ContactB;

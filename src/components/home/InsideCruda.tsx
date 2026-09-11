import './inside-cruda.css'

/* Home · inside-cruda — brief 11-sep.

   Cuarta sección. Fondo blanco (--color-surface). Estructura:
   eyebrow + H2 + tres filas etiqueta-cuerpo. La grilla es la misma
   1fr / 1.4fr de why-now — reusada, no reinventada.

   Copy verbatim del brief §2. Reglas duras (§3 y §9):
     · Sin números de headcount, sin colaboradores, sin partners.
     · Un solo nombre propio en la sección: Fran Herrera.
     · Sin fotos de equipo, sin slots de imagen.
     · Marcas y frases prohibidas del CV (L8) — ver brief §9.
     · Sin agency en primera persona.

   Movimiento (§6): cada .ic-row lleva data-reveal="text" y
   data-stagger="0|1|2" — HomeChrome los observa junto a las figures. */

export default function InsideCruda() {
  return (
    <section id="inside-cruda" className="inside-cruda">
      <div className="in">
        <p className="inside-cruda__eyebrow">Inside CRUDA</p>

        <h2>CRUDA is a narrative practice for founder-led companies.</h2>

        <div className="ic-row">
          <div className="ic-row__label">The work</div>
          <div className="ic-row__body">
            <p>
              The work covers naming and brand strategy, verbal and
              visual identity, founder narrative, and the writing that
              carries all of it — essays, long-form pieces, interviews,
              the argument a company makes in public.
            </p>
          </div>
        </div>

        <div className="ic-row">
          <div className="ic-row__label">The structure</div>
          <div className="ic-row__body">
            <p>
              Most firms sell you a senior and staff the work to someone
              else. Here the person in the first call is the person who
              writes the last line. Nothing is briefed down, because
              there is no one to brief it down to.
            </p>
            <p>
              That is only possible because the execution layer is
              machine-assisted and the judgment layer is not. The system
              handles volume. The decisions — what the argument is, what
              gets cut, what a company should not say — stay with a
              brand builder who has made them before.
            </p>
          </div>
        </div>

        <div className="ic-row">
          <div className="ic-row__label">Who runs it</div>
          <div className="ic-row__body">
            <p className="ic-name">Fran Herrera</p>
            <p className="ic-role">Founder</p>
            <p>
              Ten years building brands across three continents,
              in-house and on the agency side, on accounts for
              TikTok, Oreo, Brahma, PedidosYa, Purina and the
              United Nations.
            </p>
            <p>
              CRUDA is what that experience looks like pointed at one
              kind of client.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

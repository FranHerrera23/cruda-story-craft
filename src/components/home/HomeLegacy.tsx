import './home-legacy.css'

/* Home · OUR FOUNDER · plano negro · F11.0 (21-sep · autónomo).

   AnchorAdvance retirado. Rename .home-legacy__ → .home-founder__
   (D2 firmado). Estructura: retrato a sangre a la izquierda + body
   con eyebrow · headline · rule · celdas EXPERIENCE / LEGACY · crédito.

   El retrato existe en /public/fran-herrera.webp — se conserva.
   Regla §2: si el asset no existe, el bloque va sin imagen. Acá
   existe, así que se renderiza. Trampa 7 preventiva: la columna
   del retrato usa align-self:stretch + object-fit:cover para que
   el <img> no estire la fila. */

/* F41 · TRACK RECORD (antes LEGACY) · sale el organismo
   internacional que estaba al final (F37 §6 · no linkear a cuentas
   no confirmadas · la campaña puntual del track record no refleja
   la relación agencial actual). Quedan las cinco cuentas con
   relación agencial verificada. */
const TRACK_RECORD_HOLDINGS = [
  'Mondelez',
  'AB InBev',
  'Delivery Hero',
  'Nestlé',
  'TikTok',
]

const CREDIT = 'Fran Herrera · Founder · born in Salta, Argentina'

/* Titular · FIRMADO por Fran (H0 · 21-sep). Textual. */
const HEADLINE =
  'You work with the founder — and with a team small enough to move.'

/* F41 · EXPERIENCE copy actualizada · describe la mezcla real
   (Fortune 500s + SMEs + B2B) en vez de "brands" a secas. */
const EXPERIENCE_COPY =
  'Ten years across Fortune 500s, SMEs and B2B companies, on three continents, in-house and agency side.'

export default function HomeLegacy() {
  return (
    <section
      className="plane plane--black home-founder"
      id="our-founder"
      data-plane
    >
      <div className="plane__in home-founder__in">
        <div className="home-founder__grid">
          <div className="home-founder__portrait">
            <img
              src="/fran-herrera.webp"
              alt="Fran Herrera, founder of CRUDA"
              className="home-founder__img"
              loading="lazy"
            />
          </div>
          <div className="home-founder__body">
            <p className="eyebrow">Our founder</p>
            <h2 className="name name--sm home-founder__headline">
              {HEADLINE}
            </h2>
            <div className="rule" />
            <div className="data data--2 marks">
              <div className="cell mark">
                <p className="cell__l">Experience</p>
                <p className="cell__v">{EXPERIENCE_COPY}</p>
              </div>
              <div className="cell mark">
                <p className="cell__l">Track record</p>
                <p className="cell__v">
                  {TRACK_RECORD_HOLDINGS.join(' · ')}
                </p>
              </div>
            </div>
            <p className="cell__n home-founder__credit">{CREDIT}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

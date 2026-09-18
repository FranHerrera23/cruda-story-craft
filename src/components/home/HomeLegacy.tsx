import './home-legacy.css'

/* Home · OUR FOUNDER
   Wireframe LOCK · home §10 + F9 §2.7.4 · Commit 5 F9.3 (19-sep).

   Rediseño completo respecto de fase E1:

     · Ground · negro (`--ink-deep`, era `--paper`)
     · Rótulo · "OUR FOUNDER" (era "FOUNDER · BETWEEN UAE AND RUSSIA")
     · Retrato · a sangre por el borde izquierdo, top-to-bottom
                 de la sección (era 4:5 escala de firma)
     · Titular · afirmación sobre cómo está organizada la
                 empresa · slot [PENDIENTE · FRAN] · NO es el nombre
     · Nombre · baja al pie en escala label, no como titular

   Referencia (Fran, 19-sep) · "You work with the founder — and
   with a team small enough to move." · propuesta de Stone & Us.
   Cuando llegue el copy firmado, entra al slot.

   Regla del sistema · el nombre del founder acredita el trabajo,
   no lo titula. Molde Pentagram (Fran, 19-sep).

   Mobile · el retrato a sangre por el borde izquierdo se come
   media pantalla en 390. Este componente lo rota a banner-top
   en < 720px · reportado a Fran en Commit 5. */

const LEGACY_HOLDINGS = [
  'Mondelez',
  'AB InBev',
  'Delivery Hero',
  'Nestlé',
  'TikTok',
  'United Nations',
]

const CREDIT = 'Fran Herrera · Founder · between UAE and Russia'

export default function HomeLegacy() {
  return (
    <section id="our-founder" className="home-legacy home-legacy--dark">
      <div className="home-legacy__inner">
        <div className="home-legacy__portrait" aria-hidden="true">
          <img
            src="/fran-herrera.webp"
            alt=""
            className="home-legacy__img"
          />
        </div>

        <div className="home-legacy__body">
          <p className="home-legacy__label">OUR FOUNDER</p>

          <h2 className="home-legacy__headline">
            [ PENDIENTE · FRAN ]
          </h2>

          <dl className="home-legacy__table">
            <div className="home-legacy__row">
              <dt className="home-legacy__row-label">EXPERIENCE</dt>
              <dd className="home-legacy__row-body">
                Ten years building brands across three continents,
                in-house and agency side.
              </dd>
            </div>

            <div className="home-legacy__row">
              <dt className="home-legacy__row-label">LEGACY</dt>
              <dd className="home-legacy__row-body">
                {LEGACY_HOLDINGS.join(' · ')}
              </dd>
            </div>

            <div className="home-legacy__row">
              <dt className="home-legacy__row-label">PRACTICE</dt>
              <dd className="home-legacy__row-body home-legacy__row-body--slot">
                [ PENDIENTE · FRAN ]
              </dd>
            </div>

            <div className="home-legacy__row">
              <dt className="home-legacy__row-label">THE TEAM</dt>
              <dd className="home-legacy__row-body home-legacy__row-body--slot">
                [ PENDIENTE · FRAN ]
              </dd>
            </div>
          </dl>

          <p className="home-legacy__credit">{CREDIT}</p>
        </div>
      </div>
    </section>
  )
}

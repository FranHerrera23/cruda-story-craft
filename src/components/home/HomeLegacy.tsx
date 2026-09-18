import './home-legacy.css'

/* Home · LEGACY
   Wireframe LOCK · home §10 (17-sep) · fase E1 · E2 · Commit 3 (19-sep).

   Molde tabla Pentagram. Cuatro filas fijas:

     EXPERIENCE      copy firmado
     LEGACY          seis holdings separados por ·
     PRACTICE        slot [PENDIENTE · FRAN]
     THE TEAM        slot [PENDIENTE · FRAN]

   Fase E2 · retirado (Commit 3 · 19-sep). El párrafo viejo con
   la capacidad hardcoded y la formulación del posicionamiento
   Ogilvy-era salió · era copy sin firma (regla 25 · capacidad
   no derivable) + posicionamiento viejo (F8 §4). No se
   reemplaza · el rework de OUR FOUNDER en F9 §2.7.4 introduce
   un titular nuevo firmado por Fran.

   Retrato en /fran-herrera.webp · b/n, 4:5, escala de firma.
   F9 §2.7.4 (post-Commit-3) redisea esta sección · negro,
   retrato a sangre, rótulo OUR FOUNDER, nombre baja al pie. */

const LEGACY_HOLDINGS = [
  'Mondelez',
  'AB InBev',
  'Delivery Hero',
  'Nestlé',
  'TikTok',
  'United Nations',
]

export default function HomeLegacy() {
  return (
    <section id="legacy" className="home-legacy">
      <div className="home-legacy__inner">
        <div className="home-legacy__portrait">
          <img
            src="/fran-herrera.webp"
            alt="Fran Herrera"
            className="home-legacy__img"
          />
        </div>

        <div className="home-legacy__body">
          <h2 className="home-legacy__name">Fran Herrera</h2>
          <p className="home-legacy__role">
            FOUNDER · BETWEEN UAE AND RUSSIA
          </p>

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
        </div>
      </div>
    </section>
  )
}

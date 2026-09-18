import './home-legacy.css'

/* Home · LEGACY
   Wireframe LOCK · home §10 (17-sep) · fase E1 (18-sep).

   Molde nuevo · tabla Pentagram. Rótulo izquierda, dato derecha,
   regla entre filas. Cuatro filas fijas:

     EXPERIENCE      copy firmado (era el primer párrafo)
     LEGACY          seis holdings separados por · (sin DirecTV
                     ni Natura hasta que Fran confirme)
     PRACTICE        slot [PENDIENTE · FRAN]
     THE TEAM        slot [PENDIENTE · FRAN]

   Retiro en dos pasos (regla 23 aplicada con criterio, mismo
   patrón que WHO IT HOLDS FOR fase C):

     E1 · construye la tabla con las cuatro filas. La frase
          vieja "the person on your first call writes your last
          line" QUEDA como párrafo debajo de la tabla, intacta.
          La home no pierde lo que decía.

     E2 · cuando Fran firme THE TEAM (y decida sobre
          "ten to twelve founders a year"), la frase vieja sale
          en su propio commit · va junto con C2.

   El retrato entra desde `/fran-herrera.webp` como estaba · b/n,
   4:5, escala de firma (~180-240px). Sin cambios. */

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

          {/* Fase E1 · el párrafo viejo queda hasta que Fran firme
              THE TEAM (fase E2). Sin él, la home dice menos de lo
              que decía · directiva 18-sep. Contiene además "ten to
              twelve founders a year" que hoy es hardcode (regla 25)
              · reportado por separado para decisión de Fran. */}
          <p className="home-legacy__legacy-line">
            Now ten to twelve founders a year, and the person on your
            first call writes your last line.
          </p>
        </div>
      </div>
    </section>
  )
}

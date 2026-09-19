import './home-services.css'

/* Home · LOS SERVICIOS (F9 §2.5 · posición 09 · Commit 7 F9.4)

   COPY PROPUESTO · 19-sep · marcado provisorio · toda la sección
   entra al bundle en italic-gris (patrón slot) para señalar que
   nada de esto está firmado. Cuando Fran firme, se retira el
   modificador `--slot` de las filas y la sección pasa a plena.

   Las cuatro puertas viven acá como plano cero del sistema. En
   /services (F9.5 / F9.6) cada una se expande a su plano propio.

   Molde · tabla igual que OUR FOUNDER (§10) pero con puertas
   como rótulo · cada puerta abre a un plano. Ground papel.

   Regla del sistema · cero copy nuevo sin firma. Este bloque
   respeta la regla por marcado visual, no por retiro. */

const DOORS: ReadonlyArray<{ key: string; label: string; body: string }> = [
  {
    key: 'translated',
    label: 'TRANSLATED',
    body:
      'The founder’s story rebuilt for a market that never sat across from them.',
  },
  {
    key: 'transmission',
    label: 'TRANSMISSION',
    body:
      'The company’s own people hearing the same version the market hears.',
  },
  {
    key: 'interpreted',
    label: 'INTERPRETED',
    body:
      'Capital and culture crossing a border without losing what made them worth crossing.',
  },
  {
    key: 'the-read',
    label: 'THE READ',
    body:
      'A diagnostic before the work · what the market thinks you are, versus what you built.',
  },
]

export default function HomeServices() {
  return (
    <section
      id="services"
      className="home-services"
      data-reveal-seq
    >
      <div className="home-services__inner">
        <p
          className="home-services__label"
          data-reveal="text"
          data-seq="eyebrow"
        >
          THE SERVICES
        </p>

        {/* Titular · corregido por Fran (19-sep, F9.4 firma con
            corrección): "The same skill, at four distances." conecta
            con las tres distancias del bloque QUÉ ES CRUDA arriba,
            y evita reintroducir "practice" · palabra que estamos
            sacando de /about. */}
        <h2
          className="home-services__headline"
          data-reveal="lines"
          data-seq="title"
        >
          Four doors. The same skill, at four distances.
        </h2>

        <p
          className="home-services__provisorio"
          data-reveal="text"
          data-seq="eyebrow"
        >
          [ COPY PROPUESTO · PENDIENTE FIRMA ]
        </p>

        <dl className="home-services__table" data-seq="body">
          {DOORS.map(door => (
            <div key={door.key} className="home-services__row" data-reveal="text">
              <dt className="home-services__row-label">{door.label}</dt>
              <dd className="home-services__row-body home-services__row-body--slot">
                {door.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

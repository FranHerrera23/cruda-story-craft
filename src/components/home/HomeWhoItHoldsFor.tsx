import './home-who-it-holds.css'

/* Home · WHO IT HOLDS FOR
   Wireframe LOCK · home §5 (17-sep) · fase C1.

   Molde nuevo. Criterio explícito ARRIBA de las cuatro
   situaciones (h-section, no pie). Grilla 2×2 numerada.
   Cada situación es "número + una línea", nada más.

   La regla de Fran (18-sep) · "las cuatro descripciones actuales
   no se cortan para que entren: entran completas como están o
   quedan afuera del slot y esperan tu reescritura". Los cinco
   slots quedan como [PENDIENTE · FRAN] hasta que llegue el
   copy firmado (fase C2).

   Coexistencia con el bloque viejo · fase C1 arranca esta
   grilla arriba de HomeFit para que la home no pierda el
   registro de observación mientras el copy nuevo aparece. Al
   entrar el copy en C2, HomeFit se retira.

   Cero copy nuevo. Sólo el corte final vive como texto real:
   "If none of this is you, this is not for you." es copy ya
   firmado del bloque anterior, se cita textual (regla 23). */

const CRITERION_SLOT = '[ EL CRITERIO EXPLÍCITO · PENDIENTE · FRAN ]'
const SITUATION_SLOTS = [
  '[ situación 01 · PENDIENTE · FRAN ]',
  '[ situación 02 · PENDIENTE · FRAN ]',
  '[ situación 03 · PENDIENTE · FRAN ]',
  '[ situación 04 · PENDIENTE · FRAN ]',
]
const CUT = 'If none of this is you, this is not for you.'

export default function HomeWhoItHoldsFor() {
  return (
    <section
      id="who-it-holds-for"
      className="home-whi"
      data-reveal-seq
    >
      <div className="home-whi__inner">
        <p
          className="home-whi__label"
          data-reveal="text"
          data-seq="eyebrow"
        >
          WHO IT HOLDS FOR
        </p>

        <h2
          className="home-whi__criterion"
          data-reveal="lines"
          data-seq="title"
        >
          {CRITERION_SLOT}
        </h2>

        <hr className="home-whi__rule" aria-hidden="true" />

        <ol className="home-whi__grid" data-seq="body">
          {SITUATION_SLOTS.map((text, i) => (
            <li
              key={i}
              className="home-whi__cell"
              data-reveal="text"
              data-stagger={String(i % 2)}
            >
              <span className="home-whi__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="home-whi__line">{text}</span>
            </li>
          ))}
        </ol>

        <hr className="home-whi__rule" aria-hidden="true" />

        <p
          className="home-whi__cut"
          data-reveal="text"
          data-seq="body"
        >
          {CUT}
        </p>
      </div>
    </section>
  )
}

import './home-what-others.css'

/* Home · WHAT OTHER PEOPLE STARTED SAYING · plano paper · F11.0
   (21-sep · autónomo).

   Refactor a plano del apilado. AnchorAdvance retirado.

   DECISIÓN F11.0 · el retiro de Drapers, planificado para F11.6,
   se adelanta acá: el marcador visible "[ Confidential ]" hace
   fallar el grep §4 de F11.0 (patrón "[ "). El prototipo home-v3
   §11 muestra sólo dos items — Karen · Forbes y Mike · triple
   network — así que la fase F11.6 queda absorbida acá y se
   confirmará en su turno con una entrada de verificación.

   Copy · prototipo home-v3, textual:
     eyebrow "What other people started saying"
     name    "No pitch. No placement."

   Los assets reales de prensa no existen todavía en /public. Regla
   §2: si el asset no existe, el bloque se renderiza SIN la imagen.
   Los <a> apuntan a "#" hasta que Fran entregue los links. */

export default function HomeWhatOthers() {
  return (
    <section
      className="plane plane--paper home-what-others"
      id="what-others"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What other people started saying</p>
          <h2 className="name name--sm">No pitch. No placement.</h2>
          <div className="rule" />
        </div>
        <div className="press">
          <a className="pitem" href="#" aria-label="Karen · Forbes Perú">
            <p className="pitem__src">Forbes Perú</p>
            <p className="pitem__h">
              Karen Mannheim, named to “Las 50 mujeres más poderosas de
              Perú en 2026.”
            </p>
            <p className="pitem__m">June 2026 · also in Architectural Digest</p>
          </a>
          <a className="pitem" href="#" aria-label="Mike · triple network">
            <p className="pitem__src">ABC · Fox News · CBS</p>
            <p className="pitem__h">
              Mike Kaeding, from a builder nobody outside Minnesota had
              heard of to a source three networks call.
            </p>
            <p className="pitem__m">
              56,000 followers · 2M impressions a year · Jul 2023 — Oct
              2024
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

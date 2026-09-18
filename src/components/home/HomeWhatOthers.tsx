import './home-what-others.css'

/* Home · WHAT OTHER PEOPLE STARTED SAYING
   Wireframe LOCK · home §9 (17-sep) · fase D.

   Cobertura ganada · Forbes Perú (Karen), ABC/Fox/CBS (Mike),
   Drapers (Confidential).

   Corrección estructural (18-sep):

     · Salen las cajas con border 1px conteniendo texto (§2.3
       prohibido). Los medios pasan a TEXTO EN ESCALA LABEL
       separados por punto medio · un elemento por unidad de
       cobertura, no una caja por medio.
     · La unidad de cobertura se separa de la siguiente por
       regla horizontal de 1px al ancho de columna.
     · Sin excepción para DRAPERS (Fran, 18-sep). Si queda
       raro visualmente, se reporta antes de improvisar.

   §9.3 · si Fran sube las cuatro imágenes de prensa, el
   bloque pasa a carrusel · esa mecánica se escribe cuando las
   imágenes existan, no ahora. */

export default function HomeWhatOthers() {
  return (
    <section id="what-others" className="home-what-others">
      <div className="home-what-others__inner">
        <p className="home-what-others__eyebrow">
          WHAT OTHER PEOPLE STARTED SAYING
        </p>

        <hr className="home-what-others__rule" aria-hidden="true" />

        {/* Karen · Forbes */}
        <div className="home-what-others__item">
          <p className="home-what-others__prose">
            Karen Mannheim was named to Forbes Perú&rsquo;s &ldquo;Las 50
            mujeres m&aacute;s poderosas de Per&uacute; en 2026.&rdquo; No
            pitch, no placement.
          </p>
          <p className="home-what-others__media-label">
            FORBES · ARCHITECTURAL DIGEST
          </p>
        </div>

        <hr className="home-what-others__rule" aria-hidden="true" />

        {/* Mike · triple network */}
        <div className="home-what-others__item">
          <p className="home-what-others__prose">
            Mike Kaeding went from a builder nobody outside Minnesota
            had heard of to a source three networks call.
          </p>
          <p className="home-what-others__media-label">
            ABC · FOX NEWS · CBS
          </p>
          <p className="home-what-others__meta">
            56,000 followers · 2M impressions generated per year
          </p>
          <p className="home-what-others__attribution">
            Mike Kaeding · Norhart · July 2023 — October 2024
          </p>
        </div>

        <hr className="home-what-others__rule" aria-hidden="true" />

        {/* Confidential · Drapers · el bloque sin prose. El slot
            [ Confidential ] preserva la unidad como estructura,
            sin caja. */}
        <div className="home-what-others__item">
          <p className="home-what-others__slot">[ Confidential ]</p>
          <p className="home-what-others__media-label">DRAPERS</p>
          <p className="home-what-others__attribution">
            Confidential · Dubai, UAE · 2026
          </p>
        </div>
      </div>
    </section>
  )
}

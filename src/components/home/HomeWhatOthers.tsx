import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-what-others.css'

/* Home · WHAT OTHER PEOPLE STARTED SAYING (F10 §9 · Commit 11 F10.3)

   Dispositivo A (AnchorAdvance):
     · ANCLA · rótulo WHAT OTHER PEOPLE STARTED SAYING
     · ITEMS · 3 unidades de cobertura
              - Karen · Forbes Perú
              - Mike · triple network
              - Confidential · Drapers

   Copy heredado del molde F9.4 · verbatim. Los medios van como
   TEXTO EN ESCALA LABEL (no cajas · brief §9.2 · las cajas con
   border conteniendo texto quedan retiradas desde fase D).

   §9.3 · si Fran sube las cuatro imágenes de prensa, el bloque
   pasa a carrusel · esa mecánica se escribe cuando las imágenes
   existan, no ahora. */

export default function HomeWhatOthers() {
  return (
    <AnchorAdvance
      id="what-others"
      className="home-what-others"
      threshold={220}
      readingZone={0.6}
    >
      <Anchor className="home-what-others__anchor">
        <p className="home-what-others__eyebrow">
          WHAT OTHER PEOPLE STARTED SAYING
        </p>
      </Anchor>

      <div className="home-what-others__items">
        {/* Karen · Forbes */}
        <Item className="home-what-others__item">
          <p className="home-what-others__prose">
            Karen Mannheim was named to Forbes Per&uacute;&rsquo;s
            &ldquo;Las 50 mujeres m&aacute;s poderosas de Per&uacute; en
            2026.&rdquo; No pitch, no placement.
          </p>
          <p className="home-what-others__media-label">
            FORBES · ARCHITECTURAL DIGEST
          </p>
        </Item>

        {/* Mike · triple network */}
        <Item className="home-what-others__item">
          <p className="home-what-others__prose">
            Mike Kaeding went from a builder nobody outside Minnesota
            had heard of to a source three networks call.
          </p>
          <div className="home-what-others__media-row">
            <p className="home-what-others__media-label">
              ABC · FOX NEWS · CBS
            </p>
            <p className="home-what-others__meta">
              56,000 followers · 2M impressions generated per year
            </p>
          </div>
          <p className="home-what-others__attribution">
            Mike Kaeding · Norhart · July 2023 — October 2024
          </p>
        </Item>

        {/* Confidential · Drapers */}
        <Item className="home-what-others__item">
          <p className="home-what-others__confidential">[ Confidential ]</p>
          <p className="home-what-others__media-label">DRAPERS</p>
          <p className="home-what-others__attribution">
            Confidential · Dubai, UAE · 2026
          </p>
        </Item>
      </div>
    </AnchorAdvance>
  )
}

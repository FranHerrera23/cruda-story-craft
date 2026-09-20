import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-what-cruda-is.css'

/* Home · QUÉ ES CRUDA (F10 §5 · posición 02 · Commit 9 · F10.2)

   Copy FIRMADO · 19-sep · se usa TEXTUAL.
   Se escribe una vez y aparece en TRES lugares:
     1  home · posición 02       ← este componente
     2  /services · plano 00     ← reusa este componente
     3  /about · §01 (h1 + lede)

   F10.2 (20-sep) · reemplaza el molde estático de F9.4 por el
   DISPOSITIVO A (AnchorAdvance):
     · ANCLA · label + h-sub + h-display · sticky mientras dura
       la sección.
     · ITEMS · las tres distancias · avanzan debajo · la que
       está en la zona viva pasa a opacidad 1, las otras 0.35.
     · Sin desplazamiento vertical, sin escala, sin color · sólo
       opacidad · brief F10 §2.1.

   Wrapping · el h-display ("We translate cultures into
   business.") va en UNA línea en 1440/1024/768 y DOS líneas en
   390. El corte de mobile se fuerza envolviendo "into business."
   en un <span> con white-space: nowrap. */

export default function HomeWhatCrudaIs() {
  return (
    <AnchorAdvance
      id="what-cruda-is"
      className="home-wci"
      threshold={220}
      readingZone={0.62}
    >
      <Anchor className="home-wci__anchor">
        <div className="home-wci__anchor-inner">
          <p className="home-wci__label">WHAT CRUDA IS</p>
          <p className="home-wci__sub">
            CRUDA is a communications company.
          </p>
          <h2 className="home-wci__display">
            We translate cultures{' '}
            <span className="home-wci__nobreak">into business.</span>
          </h2>
        </div>
      </Anchor>

      <div className="home-wci__items">
        <Item className="home-wci__row">
          <p className="home-wci__row-body">
            Between a founder and a market that never heard of them.
          </p>
        </Item>
        <Item className="home-wci__row">
          <p className="home-wci__row-body">
            Between a company and its own people.
          </p>
        </Item>
        <Item className="home-wci__row">
          <p className="home-wci__row-body">
            Between capital from one part of the world and the
            country it just landed in.
          </p>
        </Item>
      </div>
    </AnchorAdvance>
  )
}

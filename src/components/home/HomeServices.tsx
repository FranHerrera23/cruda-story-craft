import Link from 'next/link'
import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-services.css'

/* Home · LOS SERVICIOS (F10 §11 · posición 08 · Commit 11 F10.3)

   Dispositivo A (AnchorAdvance):
     · ANCLA · label WHAT WE DO + h-sub "Four doors. The same
       skill, at four distances." (headline firmado F9.4 con
       corrección · sigue en producción)
     · ITEMS · las 4 puertas · rótulo + body
     · CTA al fondo · link a /services

   COPY PROPUESTO · brief F10 §11 · marcado provisorio. Las
   cuatro líneas de las puertas son propuesta · CC construye
   marcado, Fran firma o rompe. Hasta que llegue firma, cada
   body va en italic-gris (patrón --slot). */

const DOORS: ReadonlyArray<{ key: string; label: string; body: string }> = [
  {
    key: 'translated',
    label: 'TRANSLATED',
    body:
      'Twelve weeks to build the system a company uses to say what it is.',
  },
  {
    key: 'transmission',
    label: 'TRANSMISSION',
    body:
      'The system, run every week, so it stops depending on the founder.',
  },
  {
    key: 'interpreted',
    label: 'INTERPRETED',
    body:
      'Two sides with capital and capability, made legible to each other.',
  },
  {
    key: 'the-read',
    label: 'THE READ',
    body:
      'One session. What an outsider sees, said plainly.',
  },
]

export default function HomeServices() {
  return (
    <AnchorAdvance
      id="services"
      className="home-services"
      threshold={200}
      readingZone={0.6}
    >
      <Anchor className="home-services__anchor">
        <div className="home-services__anchor-inner">
          <p className="home-services__label">WHAT WE DO</p>
          <h2 className="home-services__headline">
            Four doors. The same skill, at four distances.
          </h2>
          <p className="home-services__provisorio">
            [ COPY PROPUESTO · PENDIENTE FIRMA ]
          </p>
        </div>
      </Anchor>

      <div className="home-services__items">
        {DOORS.map(door => (
          <Item key={door.key} className="home-services__row">
            <p className="home-services__row-label">{door.label}</p>
            <p className="home-services__row-body">
              {door.body}
            </p>
          </Item>
        ))}
        <div className="home-services__cta-row">
          <Link href="/services" className="home-services__cta">
            See how each one works &nbsp;→
          </Link>
        </div>
      </div>
    </AnchorAdvance>
  )
}

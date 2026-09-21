import Link from 'next/link'
import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-services.css'

/* Home · LOS SERVICIOS (F10 §11 · posición 08 · H0 · 21-sep)

   H0 hotfix (21-sep · Fran F1):
     · Sale la banda roja "COPY PROPUESTO · PENDIENTE FIRMA"
     · Sale el modifier --slot / italic + opacity de las puertas
     · El copy de las 4 puertas es el del prototipo home-v3
       (F5 firmado) · las líneas quedan planas y en producción
     · Estructura NO se toca acá · eso es F11.0

   Dispositivo A (AnchorAdvance) · vigente hasta F11.0:
     · ANCLA · label WHAT WE DO + h-sub "Four doors. The same
       skill, at four distances."
     · ITEMS · 4 puertas
     · CTA al fondo · link a /services */

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

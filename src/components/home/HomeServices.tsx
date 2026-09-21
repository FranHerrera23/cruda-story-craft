import Link from 'next/link'
import './home-services.css'

/* Home · WHAT WE DO · plano paper · F11.0 (21-sep · autónomo).

   AnchorAdvance retirado. Estructura del prototipo home-v3 §12:
   eyebrow · lede · rule · index (cuatro filas · link a /services).

   DECISIÓN F11.0 · el CTA final del prototipo dice "See how each
   one works →" y apunta a /process (§2). Como /process ya existe
   en producción, se conserva el destino /process. Tabla precios
   §2 en /services (F12). */

const DOORS: ReadonlyArray<{
  key: string
  n: string
  label: string
  body: string
}> = [
  {
    key: 'translated',
    n: '01',
    label: 'Translated',
    body:
      'Twelve weeks to build the system a company uses to say what it is.',
  },
  {
    key: 'transmission',
    n: '02',
    label: 'Transmission',
    body:
      'The system, run every week, so it stops depending on the founder.',
  },
  {
    key: 'interpreted',
    n: '03',
    label: 'Interpreted',
    body:
      'Two sides with capital and capability, made legible to each other.',
  },
  {
    key: 'the-read',
    n: '04',
    label: 'The Read',
    body: 'One session. What an outsider sees, said plainly.',
  },
]

export default function HomeServices() {
  return (
    <section
      className="plane plane--paper home-services"
      id="services"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What we do</p>
          <p className="lede home-services__lede">
            Four doors. The same skill, at four distances.
          </p>
          <div className="rule" />
        </div>
        <div className="index marks">
          {DOORS.map(door => (
            <Link
              key={door.key}
              href="/services"
              className="irow mark"
            >
              <span className="irow__o">{door.n}</span>
              <span className="irow__n">{door.label}</span>
              <span className="irow__d">{door.body}</span>
            </Link>
          ))}
        </div>
        <Link href="/process" className="go">
          See how each one works →
        </Link>
      </div>
    </section>
  )
}

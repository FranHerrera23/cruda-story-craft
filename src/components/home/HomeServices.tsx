import Link from 'next/link'
import { DOORS } from '@/content/services/doors'
import './home-services.css'

/* Home · WHAT WE DO · F18.9 · 21-sep · autónomo.
   Consume la fuente única de precios (src/content/services/doors.ts).
   Cada fila lleva ordinal · nombre · descriptor · precio (mismo
   formato que el índice de /services · cifra en naranja).

   CTA "See how each one works →" mantiene destino /process (§2). */

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
        <div className="index marks home-services__index">
          {DOORS.map(door => (
            <Link
              key={door.key}
              href={door.href}
              className="irow mark"
            >
              <span className="irow__o">{door.n}</span>
              <span className="irow__n">{door.label}</span>
              <span className="irow__d">{door.descriptor}</span>
              <span className="irow__p">{formatPrice(door.price)}</span>
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

/* La cifra del precio va en naranja; el resto del literal en ink.
   Regex captura el primer bloque monetario ($NNNN, NNN o "On request").
   Cifra + moneda pasan a <em>; el prefijo/sufijo queda en text.
   Ejemplos:
     "12 weeks · $19,500"          → "12 weeks · [$19,500]"
     "from $2,200 / month"         → "from [$2,200] / month"
     "12 weeks · from $55,000"     → "12 weeks · from [$55,000]"
     "per session · On request"    → "per session · [On request]" */
function formatPrice(price: string) {
  const match = price.match(/(\$[\d,]+|On request)/)
  if (!match) return price
  const [full] = match
  const idx = price.indexOf(full)
  const before = price.slice(0, idx)
  const after = price.slice(idx + full.length)
  return (
    <>
      {before}
      <em>{full}</em>
      {after}
    </>
  )
}

import Link from 'next/link'
import { DOORS } from '@/content/services/doors'
import './home-services.css'

/* Home · WHAT WE DO · F19-B.3 · precios fuera.
   Los precios viven en /services, no en la home. Fila = ordinal ·
   nombre · descriptor. Se conserva el destino /process del CTA. */

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

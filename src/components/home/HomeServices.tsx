import Link from 'next/link'
import { DOORS } from '@/content/services/doors'
import './home-services.css'

/* Home · WHAT WE DO · F23-2 · 22-sep.
   Consume la fuente única de descriptors (src/content/services/doors.ts).
   Cada fila lleva ordinal · nombre · descriptor. La columna de precio
   se saca en la home (queda en /services). CTA a /services. */

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
            Work with us for one session, for twelve weeks, or every
            week after that.
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
        <Link href="/services" className="go">
          See how each one works →
        </Link>
      </div>
    </section>
  )
}

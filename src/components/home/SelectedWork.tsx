import Link from 'next/link'
import './selected-work.css'

/* Home · SELECTED WORK · F21 · 21-sep · diseño nuevo.

   Toca SOLO la sección #selected-work de la home. Nada más de la
   home cambia.

   Layout · brief F21 §2:
     h2 "Selected work." · regla naranja 2px
     Fila 1 · 4 cards con foto (Karen · Mike · Girish · José)
       repeat(4, 1fr) · col-gap 16 · foto 4:5 · a color siempre
     Fila 2 (gap 96) · índice de 4 filas con hairline
       Germán Noel · Confidential · Jack · Arman · Bauhome

   Cards con foto: sin ordinal, sin flecha, sin descripción, sin
   prueba. Toda la card es un solo <a>.

   Filas sin foto: nombre · sector · ciudad · servicio a la derecha.
   Con página → <a>. Sin página → <div>, sin hover. */

type Door = 'TRANSLATED' | 'TRANSMISSION' | 'INTERPRETED' | 'THE READ'

type PhotoCard = {
  name: string
  meta: string
  service: Door[]
  href: string
  imageSrc: string
  /* Puntualiza `object-position` de la foto en el crop 3:2.
     Default `center 25%` (regla F21 · rostro en tercio superior). */
  objectPosition?: string
}

type IndexRow = {
  name: string
  meta: string
  service?: Door[]
  href?: string
}

/* Datos F21 · Regla de fotos + decisión Fran (21-sep).
   Cards con foto real: Karen · Mike · Girish · José · Confidential.
   object-position por foto para dejar la cara / centro visual en el
   tercio superior del crop 3:2. */
const PHOTO_CARDS: PhotoCard[] = [
  {
    name: 'Karen Mannheim',
    meta: 'Lighting · Miami',
    service: ['TRANSLATED', 'TRANSMISSION'],
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    objectPosition: 'center 25%',
  },
  {
    name: 'Mike Kaeding',
    meta: 'Multifamily · Minneapolis',
    service: ['TRANSMISSION'],
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
    objectPosition: 'center 30%',
  },
  {
    name: 'Girish Sehgal',
    meta: 'Hospitality · Abu Dhabi',
    service: ['TRANSLATED'],
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    objectPosition: 'center 20%',
  },
  {
    name: 'José Mannheim',
    meta: 'Trading · Panamá City',
    service: ['TRANSLATED'],
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
    /* F21 · ajuste Fran: pelo entero con aire arriba. */
    objectPosition: 'center 12%',
  },
  {
    name: 'Confidential',
    meta: 'Fashion · Dubai',
    service: ['INTERPRETED'],
    href: '/work/confidential-fashion-founder',
    imageSrc: '/confidential-hero.jpg',
    objectPosition: 'center 40%',
  },
]

const INDEX_ROWS: IndexRow[] = [
  {
    name: 'Germán Noel',
    meta: 'Architecture · Salta',
    service: ['TRANSLATED'],
    href: '/work/inout',
  },
  {
    name: 'Jack Yeager',
    meta: 'Lighting · Midtown Miami',
    service: ['TRANSLATED', 'TRANSMISSION'],
  },
  {
    name: 'Arman · BAUHOME',
    meta: 'Residential · Jacksonville',
  },
]

function ServiceLine({ service }: { service?: Door[] }) {
  if (!service || service.length === 0) return null
  return (
    <span className="sw-service">{service.join(' · ')}</span>
  )
}

function PhotoCardEl({ card }: { card: PhotoCard }) {
  return (
    <Link className="sw-card" href={card.href} aria-label={card.name}>
      <div className="sw-card__m">
        <img
          className="sw-card__img"
          src={card.imageSrc}
          alt=""
          loading="lazy"
          style={
            card.objectPosition
              ? { objectPosition: card.objectPosition }
              : undefined
          }
        />
      </div>
      <h3 className="sw-card__n">{card.name}</h3>
      <p className="sw-card__d">{card.meta}</p>
      <ServiceLine service={card.service} />
    </Link>
  )
}

function IndexRowEl({ row }: { row: IndexRow }) {
  const inner = (
    <>
      <span className="sw-irow__n">{row.name}</span>
      <span className="sw-irow__d">{row.meta}</span>
      <ServiceLine service={row.service} />
    </>
  )
  if (row.href) {
    return (
      <Link className="sw-irow sw-irow--link" href={row.href}>
        {inner}
      </Link>
    )
  }
  return <div className="sw-irow sw-irow--flat">{inner}</div>
}

export default function SelectedWork() {
  return (
    <section id="selected-work" className="sw">
      <div className="sw-inner">
        <h2 className="sw-title">Selected work.</h2>
        <div className="sw-title-rule" aria-hidden="true" />

        <div className="sw-grid">
          {PHOTO_CARDS.map(c => (
            <PhotoCardEl key={c.href} card={c} />
          ))}
        </div>

        <div className="sw-index">
          {INDEX_ROWS.map(r => (
            <IndexRowEl key={r.name} row={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* Backwards-compat · el tipo se conserva mientras exista dead code
   que lo importe (stats.ts, HomeTranslated legacy). */
export type WorkCardData = {
  name: string
  company?: string
  location?: string
  line?: string
  href?: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  draft?: boolean
  placeholder?: boolean
  scope?: string[]
}

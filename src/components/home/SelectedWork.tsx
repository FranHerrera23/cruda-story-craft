import Link from 'next/link'
import './selected-work.css'

/* Home · SELECTED WORK · F58 · 27-oct.

   F58 §A.4: campo nuevo opcional `few?: string`. Si existe, se
   renderiza bajo la descripción con rótulo `THEIR FEW` (naranja
   #FF5A00, 13 px, .14em) + texto 17 px.

   F58 §A.4: nuevo orden (Karen · José · Ryan · Marty · Mike ·
   Girish · Jack · INOUT · BAUHOME · Confidential · JP Romero), con
   dos tarjetas nuevas sin link ni servicio (Ryan Altman, Marty Lowe)
   presentadas con portada tipográfica.

   F58 §A.4: cierre de la grilla con celda cuadrada "All work →" que
   lleva a /work (link de texto 22 px, borde 1 px ink, padding 32 px). */

type Door = 'TRANSLATED' | 'TRANSMISSION' | 'INTERPRETED' | 'SECOND LOOK' | 'SPARRING SESSION'

type Card = {
  name: string
  meta: string
  description: string
  few?: string
  service?: Door[]
  href?: string
  imageSrc?: string
  objectPosition?: string
  coverText?: string
}

const CARDS: Card[] = [
  {
    name: 'Karen Mannheim',
    meta: 'TRAZZO Lighting · Miami',
    description:
      "Lights homes worth $10 million to $200 million; one of Forbes Perú's 50 most powerful women, 2026.",
    few: 'Architects, interior designers and developers of homes worth up to $200 million.',
    service: ['TRANSLATED', 'TRANSMISSION'],
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    objectPosition: 'center 20%',
  },
  {
    name: 'José Mannheim',
    meta: 'MTC · Panama City',
    description:
      'Co-founder of AGP, supplier to the Pentagon, Tesla, Audi, the Saudi Navy and the popemobile.',
    few: 'About 800 buyers of certified safety glass. In the whole world.',
    service: ['TRANSLATED'],
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
    objectPosition: 'center 20%',
  },
  {
    /* F58 · tarjeta nueva · sin href, sin service · portada
       tipográfica M2Develop · permiso pendiente de Fran. */
    name: 'Ryan Altman',
    meta: 'M2Develop · Yacht interiors',
    description:
      "Eight years as Ferretti's designer in the US, now founder of M2Develop.",
    few: 'Yacht owners, brokers and the shipyards that build for them.',
    coverText: 'M2Develop',
  },
  {
    /* F58 · tarjeta nueva · sin href, sin service · portada
       tipográfica Marty Lowe · permiso pendiente de Fran. */
    name: 'Marty Lowe',
    meta: 'Yacht interiors · United States',
    description:
      'One of the most recognized yacht interior designers in the US, turning forty years of work into a legacy of stories.',
    few: 'Her industry, and the women who see themselves in her story.',
    coverText: 'Marty Lowe',
  },
  {
    name: 'Mike Kaeding',
    meta: 'Norhart · Minneapolis',
    description:
      'CEO of Norhart, $230M in assets created, on a mission to halve the cost of housing.',
    service: ['TRANSMISSION'],
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
    objectPosition: 'center 30%',
  },
  {
    name: 'Girish Sehgal',
    meta: 'Sheikh Shakhbout Medical City · Abu Dhabi',
    description:
      "Former Four Seasons GM, bringing hospitality into the UAE's biggest medical city.",
    service: ['TRANSLATED'],
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    objectPosition: 'center 15%',
  },
  {
    name: 'Jack Yeager',
    meta: 'Mistiva · Midtown Miami',
    description:
      'Sold his first company for seven figures, sailed the world, and came back to build a lighting business in Miami.',
    service: ['TRANSLATED', 'TRANSMISSION'],
    href: '/work/jack-yeager',
    imageSrc: '/jack-yeager.jpeg',
    objectPosition: 'center 20%',
  },
  {
    name: 'INOUT',
    meta: 'Frameless Sliding Doors · Argentina',
    description:
      'A frameless sliding door line, branded from zero, with a trade program the client still runs on its own.',
    service: ['TRANSLATED'],
    href: '/work/inout',
    imageSrc: '/inout-sliding-wall.jpg',
    objectPosition: 'center 50%',
  },
  {
    name: 'BAUHOME',
    meta: 'Luxury kitchen cabinets · Los Angeles',
    description:
      "Luxury kitchen cabinets, founded by the former Director of Operations at Santa Monica's biggest hospital.",
    service: ['TRANSLATED'],
    imageSrc: '/bauhome-kitchen.webp',
    objectPosition: 'center 50%',
  },
  {
    name: 'Confidential',
    meta: 'Dubai',
    description:
      'Built a $300M on-demand fashion group, lost it, and built it again.',
    service: ['INTERPRETED'],
    href: '/work/confidential-fashion-founder',
    imageSrc: '/confidential-hero.jpg',
    objectPosition: 'center 50%',
  },
  {
    name: 'JP Romero',
    meta: 'JURA · CTD · Miami',
    description:
      'Takes Latin American architecture and design brands into the US market.',
    service: ['TRANSLATED', 'TRANSMISSION'],
    href: '/work/juan-pablo-romero',
    imageSrc: '/juan-pablo-romero.webp',
    objectPosition: 'center 20%',
  },
]

/* ServiceLine · slot con altura reservada de 1 línea (10px · 1.35).
   El texto entra desde abajo en hover; el slot NO cambia altura, por
   lo que el layout de la card queda fijo. */
function ServiceLine({ service }: { service?: Door[] }) {
  if (!service || service.length === 0) return null
  return (
    <span className="sw-service-slot">
      <span className="sw-service">{service.join(' · ')}</span>
    </span>
  )
}

function FewBlock({ few }: { few?: string }) {
  if (!few) return null
  return (
    <div className="sw-card__few">
      <div className="sw-card__few-rule" aria-hidden="true" />
      <p className="sw-card__few-label">Their few</p>
      <p className="sw-card__few-text">{few}</p>
    </div>
  )
}

function CardMedia({ card }: { card: Card }) {
  if (card.imageSrc) {
    return (
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
    )
  }
  return (
    <div className="sw-card__cover">
      <span className="sw-card__cover-t">{card.coverText}</span>
    </div>
  )
}

function CardBody({ card }: { card: Card }) {
  return (
    <>
      <div className="sw-card__m">
        <CardMedia card={card} />
      </div>
      <h3 className="sw-card__n">{card.name}</h3>
      <p className="sw-card__meta">{card.meta}</p>
      <p className="sw-card__desc">{card.description}</p>
      <FewBlock few={card.few} />
      <ServiceLine service={card.service} />
    </>
  )
}

function CardEl({ card }: { card: Card }) {
  if (card.href) {
    return (
      <Link
        className="sw-card sw-card--link"
        href={card.href}
        aria-label={card.name}
      >
        <CardBody card={card} />
      </Link>
    )
  }
  return (
    <div className="sw-card sw-card--flat">
      <CardBody card={card} />
    </div>
  )
}

/* F58 fix (Fran 27-oct) · celda "All work →" retirada · hoy
   lleva a /#selected-work (misma sección) por la redirección
   /work → /#selected-work que no se toca. Si en el futuro existe
   un listado real, revive la celda. */

export default function SelectedWork() {
  return (
    <section id="selected-work" className="sw">
      <div className="sw-inner">
        <h2 className="sw-title">Selected work.</h2>
        <div className="sw-title-rule" aria-hidden="true" />

        <div className="sw-grid">
          {CARDS.map(c => (
            <CardEl key={c.name} card={c} />
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

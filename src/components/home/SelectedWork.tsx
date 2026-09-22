import Link from 'next/link'
import './selected-work.css'

/* Home · SELECTED WORK · F21 FINAL v2 · 21-sep.

   Toca SOLO la sección #selected-work de la home.
   9 cards en la grilla, sin lista debajo.

   Grilla · 3 columnas · 3 filas · col-gap 12 · row-gap 72.
   Orden:
     Karen · Mike · Girish
     José · Confidential · JP Romero
     Germán Noel · Jack Yeager · Arman

   Imagen: foto real 3:2 o portada tipográfica (fondo black, nombre
   de la empresa en blanco, Archivo 600 · clamp 28-44 · -.01em).
   JP Romero: hasta que Fran apruebe un retrato → portada 'JURA · CTD'.

   Text bloque: Nombre · Empresa·ciudad · Descripción · Servicio.
   Servicio en desktop aparece SOLO en hover (slot con altura
   reservada, translateY 100% → 0 · 400ms). En mobile/touch se
   ve siempre.

   Link: toda la card es un solo <a>. Jack y Arman: <div>, sin link,
   sin scale · Jack sí revela servicio en hover, Arman no tiene. */

type Door = 'TRANSLATED' | 'TRANSMISSION' | 'INTERPRETED' | 'THE READ'

type Card = {
  name: string
  meta: string
  description: string
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
      "Lights ten to two hundred million dollar homes; one of Forbes Perú's 50 most powerful women, 2026.",
    service: ['TRANSLATED', 'TRANSMISSION'],
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    objectPosition: 'center 20%',
  },
  {
    name: 'Mike Kaeding',
    meta: 'Norhart · Minneapolis',
    description:
      'CEO of Norhart, a $230M construction company on a mission to halve the cost of housing.',
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
    name: 'José Mannheim',
    meta: 'MTC · Panamá City',
    description:
      'Founder of AGP, maker of armored glass for the Pentagon, Tesla and Audi.',
    service: ['TRANSLATED'],
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
    objectPosition: 'center 20%',
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
      'Takes European architecture and design brands into the US market.',
    service: ['TRANSLATED', 'TRANSMISSION'],
    href: '/work/juan-pablo-romero',
    imageSrc: '/juan-pablo-romero.webp',
    /* F21 · foto aprobada por Fran (22-sep). Cara en tercio superior. */
    objectPosition: 'center 20%',
  },
  {
    name: 'Germán Noel',
    meta: 'INOUT · Salta',
    description:
      "Founder of northern Argentina's leading glass manufacturer, now launching a frameless door line.",
    service: ['TRANSLATED'],
    href: '/work/inout',
    /* F21 · foto de producto aprobada por Fran (22-sep) · muro
       corredizo INOUT. Fuente 1170x1170; el crop 1:1 no descarta
       nada, así que center 50% muestra la composición completa. */
    imageSrc: '/inout-sliding-wall.jpg',
    objectPosition: 'center 50%',
  },
  {
    name: 'Jack Yeager',
    meta: 'Mistiva · Midtown Miami',
    description:
      'Sold his first company for seven figures, sailed the world, and came back to build a lighting business in Miami.',
    service: ['TRANSLATED', 'TRANSMISSION'],
    coverText: 'Mistiva',
  },
  {
    name: 'Arman',
    meta: 'BAUHOME · Jacksonville',
    description:
      "Former Director of Operations at Santa Monica's biggest hospital, now building a luxury kitchen cabinet company.",
    /* F21 · foto de producto aprobada por Fran (22-sep). Cocina
       centrada horizontalmente; center 50% para dejar el bloque
       principal en el crop 1:1. */
    imageSrc: '/bauhome-kitchen.webp',
    objectPosition: 'center 50%',
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

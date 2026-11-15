import Link from 'next/link'
import { findWork } from '@/content/work'
import { industries } from '@/content/work/industries'
import { workScope } from '@/components/ProjectFacts'
import './selected-work.css'

/* Home · SELECTED WORK · F58 · 27-oct · F59 revisado 27-oct.

   F58 §A.4 (vigente): nuevo orden (Karen · José · Ryan · Marty ·
   Mike · Girish · Jack · INOUT · BAUHOME · Confidential · JP Romero),
   con dos tarjetas nuevas sin link ni servicio (Ryan Altman,
   Marty Lowe) presentadas con portada tipográfica.

   F59 §D (correcciones de copy):
     · Ryan Altman description → "50+ boats for leading European
       yacht brands, now founder of M2Develop." (sin nombrar marcas).
     · Marty Lowe description → "...forty-six years..." (antes 40).

   F58 §A.4 obsoleto (campo `few` + celda All work):
     · El campo `few?: string` queda en el tipo (dead field) pero
       NINGUNA tarjeta lo setea en producción. Los textos de "Their
       few" ahora viven en `HomeHowWeHelp.tsx` (F59 §B).
     · `FewBlock` queda como dead component (igual que `AllWorkCell`
       en F58 fixes).
     · Grilla vuelve a 3 columnas (F59 §D.1 descarta la grilla de 4). */

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
    service: ['TRANSLATED'],
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
    objectPosition: 'center 20%',
  },
  {
    /* F58 · tarjeta nueva · sin href, sin service · portada
       tipográfica M2Develop · permiso pendiente de Fran.
       F59 · description corregida por acuerdo con el cliente
       (no nombrar marcas ni astilleros). */
    name: 'Ryan Altman',
    meta: 'M2Develop · Yacht interiors',
    description:
      '50+ boats for leading European yacht brands, now founder of M2Develop.',
    coverText: 'M2Develop',
  },
  {
    /* F58 · tarjeta nueva · sin href, sin service · portada
       tipográfica Marty Lowe · permiso pendiente de Fran.
       F59 · description corregida · "forty-six years". */
    name: 'Marty Lowe',
    meta: 'Yacht interiors · United States',
    description:
      'One of the most recognized yacht interior designers in the US, turning forty-six years of work into a legacy of stories.',
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
  const slug = card.href?.split('/').pop() || ''
  const work = findWork(slug)
  const fallback = card.meta.split(' · ')
  const industry = industries[slug] || (card.name === 'BAUHOME' ? 'Luxury kitchen cabinets' : 'Yacht interiors')
  const company = work?.client.company || (card.name === 'Ryan Altman' ? 'M2Develop' : card.name === 'Marty Lowe' ? 'Marty Lowe' : card.name)
  const location = work ? work.place.city : card.name === 'Ryan Altman' ? undefined : fallback.at(-1)
  const scope = work ? workScope(work) : []
  return (
    <>
      <div className="sw-card__m">
        <CardMedia card={card} />
      </div>
      <div className="sw-card__identity"><h3 className="sw-card__n">{card.name}{card.href && <span aria-hidden="true">↗</span>}</h3>
      <p className="sw-card__meta">{[company !== card.name ? company : undefined, location].filter(Boolean).join(' · ')}</p></div>
      <ul className="sw-card__tags" aria-label="Industry and scope">
        <li className="sw-card__industry">{industry}</li>
        {scope.slice(0, 2).map(item => <li key={item}>{item}</li>)}
        {scope.length > 2 && <li className="sw-card__more" aria-label={`Also: ${scope.slice(2).join(', ')}`} title={scope.slice(2).join(' · ')}>+{scope.length - 2}</li>}
      </ul>
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

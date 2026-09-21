import Link from 'next/link'
import './selected-work.css'

/* Backwards-compat · el tipo `WorkCardData` sigue exportado
   porque `@/content/home/stats.ts` lo importa. Nueva estructura
   inline usa `Card` (privado); `WorkCardData` sirve al dead
   code que sigue en el repo. */
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

/* Home · SELECTED WORK · F11.3 · 21-sep · autónomo.

   Server Component estático · 9 wcards fijas en el HTML servido,
   nunca inyectadas por JS · grep innerHTML sobre el bundle de la
   home devuelve 0 (chequeo §4).

   Estructura del prototipo home-v3 §selected-work:
     eyebrow "Selected work"
     name    "Nine founders. Six cities. Four countries."  (dek §2)
     rule
     wgrid   6 <a class="wcard"> + 3 <div class="wcard">
     go      "See all work →" → /#selected-work

   Copy TEXTUAL del prototipo. Los 9 casos con su slug en
   producción (verificado F16.0):

     01 Karen Mannheim   · Lighting · Miami            → /work/karen-mannheim
     02 Mike Kaeding     · Multifamily · Minneapolis   → /work/mike-kaeding
     03 Girish Sehgal    · Hospitality · Dubai         → /work/girish-sehgal
     04 Jack Yeager      · Lighting · Midtown Miami    (sin página)
     05 José Mannheim    · Trading · Panamá City       → /work/mannheim-trading
     06 Germán Noel      · Architecture · Buenos Aires (sin página)
     07 Confidential     · Fashion · Dubai             → /work/confidential-fashion-founder
     08 INOUT            · Retail systems · Panamá City → /work/inout
     09 Arman · BAUHOME  · Residential · Jacksonville  (sin página)

   Regla §2 · asset existe → se renderiza `<img>`; no existe → el
   bloque va sin `.wcard__m`. Nunca `<span>retrato</span>` visible.
   Imágenes que existen en /public/ · karen · mike · girish · jose.
   Confidential, jack, saracco, inout, arman no tienen retrato:
   sus cards salen sin bloque de imagen.

   El hover · marcado en el CSS (.wgrid:hover, wcard:hover). El
   `.wcard__s` con "Narrative & brand strategy · Web · Demand"
   entra desde abajo en 400ms. */

type Card = {
  n: string
  name: string
  meta: string
  scope: string
  href?: string
  img?: string
}

const CARDS: readonly Card[] = [
  {
    n: '01', name: 'Karen Mannheim', meta: 'Lighting · Miami',
    scope: 'Narrative & brand strategy · Web · Demand',
    href: '/work/karen-mannheim', img: '/karen-mannheim.webp',
  },
  {
    n: '02', name: 'Mike Kaeding', meta: 'Multifamily · Minneapolis',
    scope: 'Narrative & brand strategy · Web · Demand',
    href: '/work/mike-kaeding', img: '/mike-kaeding.webp',
  },
  {
    n: '03', name: 'Girish Sehgal', meta: 'Hospitality · Dubai',
    scope: 'Narrative & brand strategy · Web · Demand',
    href: '/work/girish-sehgal', img: '/girish-sehgal.webp',
  },
  {
    n: '04', name: 'Jack Yeager', meta: 'Lighting · Midtown Miami',
    scope: 'Narrative & brand strategy · Web · Demand',
  },
  {
    n: '05', name: 'José Mannheim', meta: 'Trading · Panamá City',
    scope: 'Narrative & brand strategy · Web · Demand',
    href: '/work/mannheim-trading', img: '/jose-mannheim.webp',
  },
  {
    n: '06', name: 'Germán Noel', meta: 'Architecture · Buenos Aires',
    scope: 'Narrative & brand strategy · Web · Demand',
  },
  {
    n: '07', name: 'Confidential', meta: 'Fashion · Dubai',
    scope: 'Narrative & brand strategy · Web · Demand',
    href: '/work/confidential-fashion-founder',
  },
  {
    n: '08', name: 'INOUT', meta: 'Retail systems · Panamá City',
    scope: 'Narrative & brand strategy · Web · Demand',
    href: '/work/inout',
  },
  {
    n: '09', name: 'Arman · BAUHOME', meta: 'Residential · Jacksonville',
    scope: 'Narrative & brand strategy · Web · Demand',
  },
]

function Wcard({ card }: { card: Card }) {
  const inner = (
    <>
      <div className="wcard__hd">
        <span className="wcard__o">{card.n}</span>
        {card.href && (
          <span className="wcard__go" aria-hidden="true">↗</span>
        )}
      </div>
      {card.img && (
        <div className="wcard__m">
          <img src={card.img} alt="" loading="lazy" />
        </div>
      )}
      <h3 className="wcard__n">{card.name}</h3>
      <p className="wcard__d">{card.meta}</p>
      <span className="wcard__reveal">
        <span className="wcard__s">{card.scope}</span>
      </span>
    </>
  )
  if (card.href) {
    return (
      <Link className="wcard" href={card.href} aria-label={card.name}>
        {inner}
      </Link>
    )
  }
  return <div className="wcard">{inner}</div>
}

export default function SelectedWork() {
  return (
    <section id="selected-work" className="work">
      <p className="eyebrow">Selected work</p>
      <h2 className="name name--sm" style={{ marginTop: 14 }}>
        Nine founders. Six cities. Four countries.
      </h2>
      <div className="rule" style={{ width: '100%', maxWidth: 560 }} />
      <div className="wgrid" id="wgrid">
        {CARDS.map(card => (
          <Wcard key={card.n} card={card} />
        ))}
      </div>
      <Link className="go" href="/#selected-work">
        See all work →
      </Link>
    </section>
  )
}

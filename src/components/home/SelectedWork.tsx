import Link from 'next/link'
import { selectedWork } from '@/content/work'
import { doorSpec } from '@/content/services/doors'
import type { Work, Proof } from '@/content/work/types'
import './selected-work.css'

/* Home · SELECTED WORK · F18.3 · 21-sep · autónomo · wireframe W5.

   Cards estilo Pentagram + prueba atada · datos desde `content/work`
   (F18.0). Cero strings duplicados: `client.name`, `dek` y `proof`
   son la misma data que renderiza el caso.

   Grilla · casos CON imagen real:
     ≥1200 → 3 col · 700–1199 → 2 · <700 → 1
     column-gap 10 · row-gap 72
     casos "span 2" para llenar filas · nunca celda vacía al final.
   Distribución por número de cards con imagen (`imaged`):
     3  → [3]
     4  → [Karen ×2][Mike] / [Girish][José ×2]
     5  → [Karen ×2][Mike] / [3]
     6  → [3] / [3]

   Índice · casos SIN imagen real, bajo la grilla, .irow existente.
   Sin ordinales renderizados dentro del `.wcard` (Pentagram no los
   usa); el ordinal queda sólo en el índice inferior. */

const PLANE_TOKEN = '#selected-work'

export type WorkTitle = {
  founders: string
  cities: number
  countries: number
}

function foundersWord(n: number): string {
  const words = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
  ]
  return words[n] ?? String(n)
}
function citiesWord(n: number): string {
  const words = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten',
  ]
  return words[n] ?? String(n)
}
function countriesWord(n: number): string {
  return citiesWord(n)
}

/* Titular calculado. */
function selectedTitle(cases: Work[]): string {
  const cities = new Set<string>()
  const countries = new Set<string>()
  for (const w of cases) {
    if (w.place.city) cities.add(w.place.city)
    if (w.place.country) countries.add(w.place.country)
  }
  return `${foundersWord(cases.length)} founders. ${citiesWord(cities.size)} cities. ${countriesWord(countries.size)} countries.`
}

function ProofLine({ proof }: { proof: Proof | undefined }) {
  if (!proof) return null
  if (proof.type === 'metric') {
    return (
      <p className="wcard__proof">
        <span className="wcard__proof__v">{proof.value}</span>{' '}
        <span className="wcard__proof__l">{proof.label}</span>
        {proof.period && (
          <>
            {' · '}
            <span className="wcard__proof__p">{proof.period}</span>
          </>
        )}
      </p>
    )
  }
  return <p className="wcard__proof wcard__proof--change">{proof.text}</p>
}

function Chips({ w }: { w: Work }) {
  const primary = doorSpec(w.door.primary)
  const secondary = w.door.secondary ? doorSpec(w.door.secondary) : null
  return (
    <div className="wcard-chips">
      <Link className="chip" href={primary.href}>
        {primary.label}
      </Link>
      {secondary && (
        <Link className="chip" href={secondary.href}>
          {secondary.label}
        </Link>
      )}
    </div>
  )
}

function CardArticle({
  w,
  spanTwo,
}: {
  w: Work
  spanTwo?: boolean
}) {
  return (
    <article className={`wcell${spanTwo ? ' wcell--x2' : ''}`}>
      <Link className="wcard" href={`/work/${w.slug}`} aria-label={w.client.name}>
        <div className="wcard__m">
          {w.image ? (
            <img src={w.image} alt="" loading="lazy" />
          ) : null}
        </div>
        <h3 className="wcard__n">{w.client.name}</h3>
        <p className="wcard__d">{w.dek}</p>
        <ProofLine proof={w.proof} />
      </Link>
      <Chips w={w} />
    </article>
  )
}

function IndexRow({ w, i }: { w: Work; i: number }) {
  const n = String(i + 1).padStart(2, '0')
  const primary = w.door ? doorSpec(w.door.primary) : null
  const hasPage = w.capsule.length > 0
  const proof = w.proof

  if (!hasPage) {
    return (
      <div className="irow" role="listitem">
        <span className="irow__o">{n}</span>
        <span className="irow__n">{w.client.name}</span>
        <span className="irow__d">{w.dek}</span>
      </div>
    )
  }
  return (
    <div className="irow-wrap" role="listitem">
      <Link className="irow" href={`/work/${w.slug}`}>
        <span className="irow__o">{n}</span>
        <span className="irow__n">{w.client.name}</span>
        <span className="irow__d">
          {proof
            ? proof.type === 'metric'
              ? `${proof.value} ${proof.label}${proof.period ? ` · ${proof.period}` : ''}`
              : proof.text
            : w.dek}
        </span>
      </Link>
      {primary && (
        <div className="irow-chips">
          <Link className="chip" href={primary.href}>
            {primary.label}
          </Link>
        </div>
      )}
    </div>
  )
}

/* Distribución de cards con imagen · devuelve un array de "cells"
   marcados con spanTwo. Reglas W5. */
function layoutImaged(items: Work[]): Array<{ w: Work; spanTwo: boolean }> {
  const out: Array<{ w: Work; spanTwo: boolean }> = []
  switch (items.length) {
    case 3:
      return items.map(w => ({ w, spanTwo: false }))
    case 4:
      return [
        { w: items[0], spanTwo: true },
        { w: items[1], spanTwo: false },
        { w: items[2], spanTwo: false },
        { w: items[3], spanTwo: true },
      ]
    case 5:
      return [
        { w: items[0], spanTwo: true },
        { w: items[1], spanTwo: false },
        { w: items[2], spanTwo: false },
        { w: items[3], spanTwo: false },
        { w: items[4], spanTwo: false },
      ]
    case 6:
      return items.map(w => ({ w, spanTwo: false }))
    default:
      return items.map(w => ({ w, spanTwo: false }))
  }
}

export default function SelectedWork() {
  const cases = selectedWork
  const title = selectedTitle(cases)
  const imaged = cases.filter(w => !!w.image)
  const unimaged = cases.filter(w => !w.image)
  const grid = layoutImaged(imaged)

  return (
    <section id="selected-work" className="work">
      <p className="eyebrow">Selected work</p>
      <h2 className="name name--sm" style={{ marginTop: 14 }}>
        {title}
      </h2>
      <div className="rule" style={{ width: '100%', maxWidth: 560 }} />

      {grid.length > 0 && (
        <div className="wgrid" id="wgrid" role="list">
          {grid.map(({ w, spanTwo }) => (
            <CardArticle key={w.slug} w={w} spanTwo={spanTwo} />
          ))}
        </div>
      )}

      {unimaged.length > 0 && (
        <div className="windex" role="list">
          {cases.map((w, i) =>
            !w.image ? <IndexRow key={w.slug} w={w} i={i} /> : null,
          )}
        </div>
      )}

      <Link className="go" href={PLANE_TOKEN}>
        See all work →
      </Link>
    </section>
  )
}

/* Backwards-compat · seguía siendo importado por
   `@/content/home/stats.ts` (dead code post-F11.3). Se conserva la
   forma del tipo para no romper el import. */
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

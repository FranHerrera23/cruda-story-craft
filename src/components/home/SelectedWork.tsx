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

/* Enmienda 3 · F18.3 §G · sin conteo. El titular es "Selected work."
   invariable · no se deriva de data. Los conteos y helpers salieron.
   `place.city` / `place.country` siguen en la data (cards + schema),
   pero acá no se usan. */

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
  if (w.hideChip) return null
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
  const label = w.confidential ? w.dek : w.client.name
  return (
    <article className={`wcell${spanTwo ? ' wcell--x2' : ''}`}>
      <Link className="wcard" href={`/work/${w.slug}`} aria-label={label}>
        <div
          className={`wcard__m${w.cardTile ? ' wcard__m--tile' : ''}`}
        >
          {w.image ? (
            <img src={w.image} alt="" loading="lazy" />
          ) : w.cardTile ? (
            <div className="wcard__tile">
              <span className="wcard__tile__primary">
                {w.cardTile.primary}
              </span>
              <span className="wcard__tile__secondary">
                {w.cardTile.secondary}
              </span>
            </div>
          ) : null}
        </div>
        <h3 className="wcard__n">
          {w.confidential ? 'Confidential' : w.client.name}
        </h3>
        <p className="wcard__d">{w.dek}</p>
        <ProofLine proof={w.proof} />
      </Link>
      <Chips w={w} />
    </article>
  )
}

function IndexRow({ w, i }: { w: Work; i: number }) {
  const n = String(i + 1).padStart(2, '0')
  const primary = w.door && !w.hideChip ? doorSpec(w.door.primary) : null
  const secondary =
    w.door.secondary && !w.hideChip ? doorSpec(w.door.secondary) : null
  const hasPage = w.capsule.length > 0
  const proof = w.proof

  const chipEls = primary ? (
    <div className="irow-chips">
      <Link className="chip" href={primary.href}>
        {primary.label}
      </Link>
      {secondary && (
        <Link className="chip" href={secondary.href}>
          {secondary.label}
        </Link>
      )}
    </div>
  ) : null

  if (!hasPage) {
    return (
      <div className="irow-wrap" role="listitem">
        <div className="irow irow--flat">
          <span className="irow__o">{n}</span>
          <span className="irow__n">{w.client.name}</span>
          <span className="irow__d">{w.dek}</span>
        </div>
        {chipEls}
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
      {chipEls}
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
  /* Enmienda 6-B · a la grilla van las cards con `image` o
     `cardTile` (Confidential entra por tile tipográfico). El
     resto queda en el índice inferior. */
  const imaged = cases.filter(w => !!(w.image || w.cardTile))
  const unimaged = cases.filter(w => !w.image && !w.cardTile)
  const grid = layoutImaged(imaged)

  return (
    <section id="selected-work" className="work">
      {/* Enmienda 3 · sin rótulo "SELECTED WORK" · h2 fijo. */}
      <h2 className="name" style={{ marginTop: 0 }}>Selected work.</h2>
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
            !w.image && !w.cardTile ? (
              <IndexRow key={w.slug} w={w} i={i} />
            ) : null,
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

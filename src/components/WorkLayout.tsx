import Link from 'next/link'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type {
  Work,
  WorkBlock,
  WorkMetric,
  WorkBuiltRow,
  WorkMetricGroups,
} from '@/content/work/types'
import { doorSpec } from '@/content/services/doors'
import StartHere, { CASE_START_HERE } from '@/components/StartHere'
import { selectedWork } from '@/content/work'
import './case-study-layout-v2.css'
import './work-layout.css'

/* F26 · type guards. `built` acepta string[] (legacy) o
   WorkBuiltRow[] (molde nuevo). */
function isBuiltRows(
  b: string[] | WorkBuiltRow[] | undefined,
): b is WorkBuiltRow[] {
  return !!b && b.length > 0 && typeof b[0] === 'object'
}
function isBuiltStrings(
  b: string[] | WorkBuiltRow[] | undefined,
): b is string[] {
  return !!b && b.length > 0 && typeof b[0] === 'string'
}

/* F26 §E.6 · nunca publicar un <img> roto. Recibe una `src` (path
   relativo al servidor, tipo "/foo.png", o una data URL). Devuelve
   true si:
   · empieza con "/_next/..." (asset importado por webpack ya
     resuelto);
   · o el archivo existe en `public/`.
   Se ejecuta en el server component (SSG/SSR); en el cliente
   siempre devuelve true (no bloquea). */
function publicFileExists(src: string): boolean {
  if (!src) return false
  if (src.startsWith('data:')) return true
  if (src.startsWith('/_next/')) return true
  if (!src.startsWith('/')) return true
  if (typeof process === 'undefined' || !process.cwd) return true
  try {
    return existsSync(join(process.cwd(), 'public', src.slice(1)))
  } catch {
    return true
  }
}

/* WorkLayout · F18.1 · 21-sep · autónomo · wireframe W6.
   Recibe `Work` de content/work y renderiza el molde extendido.
   Reutiliza case-study-layout-v2.css (cs-*) y agrega work-layout.css. */

const PROOF_LIMIT = 4

function schema(w: Work) {
  const base = 'https://www.thecruda.com'
  const article: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${base}/work/${w.slug}#article`,
    headline: w.title,
    description: w.dek,
    datePublished: w.period.end
      ? `${w.period.end}-01-01`
      : undefined,
    author: {
      '@type': 'Person',
      name: 'Fran Herrera',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'CRUDA' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'CRUDA',
      url: base,
      logo: { '@type': 'ImageObject', url: `${base}/logo.png` },
    },
    about: w.confidential
      ? undefined
      : {
          '@type': 'Person',
          name: w.client.name,
          jobTitle: w.client.role,
          worksFor: {
            '@type': 'Organization',
            name: w.client.company,
          },
        },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${base}/work/${w.slug}`,
    },
  }
  if (w.image) article.image = w.image
  const graph: unknown[] = [
    article,
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Work',
          item: `${base}/#selected-work`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: w.client.name,
          item: `${base}/work/${w.slug}`,
        },
      ],
    },
  ]
  if (w.faq && w.faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${base}/work/${w.slug}#faq`,
      mainEntity: w.faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

function EvidenceBlock({ block }: { block: WorkBlock }) {
  if (block.kind === 'image') {
    const cls =
      block.aspect === 'l' ? 'cs-ev__m--l' :
      block.aspect === 's' ? 'cs-ev__m--s' : 'cs-ev__m--p'
    return (
      <figure>
        <div className={`cs-ev__m ${cls}`}>
          <img src={block.src} alt={block.caption ?? ''} loading="lazy" />
        </div>
        {block.caption && <figcaption className="cs-cap">{block.caption}</figcaption>}
      </figure>
    )
  }
  if (block.kind === 'testimonial') {
    return (
      <blockquote className="wl-mini-quote">
        <q>{block.quote}</q>
        <cite>{block.cite}</cite>
      </blockquote>
    )
  }
  if (block.kind === 'published') {
    return (
      <div className="wl-published">
        <p className="wl-published__outlet">{block.outlet}</p>
        <p className="wl-published__h">{block.headline}</p>
        {block.when && <p className="wl-published__when">{block.when}</p>}
      </div>
    )
  }
  if (block.kind === 'list') {
    return (
      <div className="wl-list">
        {block.label && <p className="wl-list__l">{block.label}</p>}
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}

/* F23-3 §4.4 · Next case · F26 §E.7: usa el h1 y la imagen de hero
   del caso siguiente (no dek escrito a mano). */
function NextCaseCard({ slug }: { slug: string }) {
  const next = selectedWork.find(w => w.slug === slug)
  if (!next) return null
  const meta = `${next.client.company} · ${next.place.city}`
  return (
    <section className="wl-next cs-wrap">
      <p className="cs-eyebrow">Next case</p>
      <Link
        href={`/work/${next.slug}`}
        className="wl-next-card"
        aria-label={next.client.name}
      >
        {next.image && (
          <div className="wl-next-card__m">
            <img
              src={next.image}
              alt=""
              loading="lazy"
              style={
                next.heroObjectPosition
                  ? { objectPosition: next.heroObjectPosition }
                  : undefined
              }
            />
          </div>
        )}
        <h3 className="wl-next-card__n">{next.client.name}</h3>
        <p className="wl-next-card__meta">{meta}</p>
        <p className="wl-next-card__desc">{next.title}</p>
      </Link>
    </section>
  )
}

export default function WorkLayout({ w }: { w: Work }) {
  const proof = w.metrics.slice(0, PROOF_LIMIT)
  const context = w.metrics.slice(PROOF_LIMIT)
  const primary = doorSpec(w.door.primary)
  const secondary = w.door.secondary ? doorSpec(w.door.secondary) : null
  const isPortrait = w.heroFormat === 'portrait'

  /* F25 §4 · dl meta compartido entre hero (retrato) e intro (paisaje).
     En retrato vive al lado del hero, en cols 7–12; en paisaje sigue
     en la columna derecha de la intro como venía. */
  const metaDl = (
    <dl className={`cs-meta ${isPortrait ? 'wl-hero-meta' : 'wl-meta'}`}>
      <div>
        <dt>Client</dt>
        <dd>
          {w.client.name}
          <br />
          {w.client.role}, {w.client.company}
        </dd>
      </div>
      <div>
        <dt>Where</dt>
        <dd>
          {w.place.from ? `${w.place.from} → ${w.place.to}` : w.place.to}
        </dd>
      </div>
      <div>
        <dt>Period</dt>
        <dd>
          {w.period.start === w.period.end
            ? w.period.end
            : `${w.period.start} — ${w.period.end}`}
        </dd>
      </div>
      <div>
        <dt>Service</dt>
        <dd className="wl-meta__service">
          <Link href={primary.href}>{primary.label}</Link>
          {secondary && (
            <>
              {' · '}
              <Link href={secondary.href}>{secondary.label}</Link>
            </>
          )}
        </dd>
      </div>
    </dl>
  )

  return (
    <article className="cs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(w)) }}
      />

      {/* 01 · Back link · el h1 se dibuja adentro del hero
          para retratos (F27 §4.3 split) o inline con el back
          para paisajes. */}
      {isPortrait ? (
        <header className="cs-top cs-wrap cs-top--split">
          <Link className="cs-back" href="/#selected-work">
            ← Work
          </Link>
        </header>
      ) : (
        <header className="cs-top cs-wrap">
          <Link className="cs-back" href="/#selected-work">
            ← Work
          </Link>
          <h1 className="cs-h1">{w.title}</h1>
        </header>
      )}

      {/* 02 · Hero · F27 §4.3 · retrato: SPLIT · h1 y meta en cols
          1–6 (h1 arriba, meta bottom-aligned) + imagen 4:5 cols
          7–12. Paisaje = 16:8 a full-width como venía. */}
      {w.image && isPortrait && (
        <div className="cs-wrap cs-hero-portrait">
          <div className="cs-hero-portrait__left">
            <h1 className="cs-h1">{w.title}</h1>
            {metaDl}
          </div>
          <div className="cs-hero cs-hero--portrait cs-hero-portrait__right">
            <img
              src={w.image}
              alt=""
              style={
                w.heroObjectPosition
                  ? { objectPosition: w.heroObjectPosition }
                  : undefined
              }
            />
          </div>
        </div>
      )}
      {w.image && !isPortrait && (
        <figure className="cs-wrap">
          <div className="cs-hero cs-hero--landscape">
            <img
              src={w.image}
              alt=""
              style={
                w.heroObjectPosition
                  ? { objectPosition: w.heroObjectPosition }
                  : undefined
              }
            />
          </div>
        </figure>
      )}

      {/* F26 §A.2 · SUMMARY + byline. Solo cuando el caso trae
          `summary`. Reemplaza al bloque cs-intro / cs-capsule del
          molde previo. La meta ya está al lado del hero (retrato)
          o se renderiza aquí a la derecha (paisaje). */}
      {w.summary && (
        <section className={`cs-intro cs-wrap ${isPortrait ? 'cs-intro--full' : ''}`}>
          <div>
            <div className="cs-capsule wl-summary-text">
              <p>{w.summary}</p>
            </div>
            {w.byline && <p className="wl-byline">{w.byline}</p>}
          </div>
          {!isPortrait && metaDl}
        </section>
      )}

      {/* Legacy · Capsule + takeaways + META. Solo cuando el caso
          NO trae `summary` (molde F18). */}
      {!w.summary && (
        <section className={`cs-intro cs-wrap ${isPortrait ? 'cs-intro--full' : ''}`}>
          <div>
            <div className="cs-capsule">
              {w.capsule.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {w.takeaways.length > 0 && (
              <div
                className="cs-take-block"
                aria-label="What this means for your company"
              >
                <p className="cs-take-block__l">
                  What this means for your company
                </p>
                <ul className="cs-take">
                  {w.takeaways.map((t, i) => (
                    <li key={i}>
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {!isPortrait && metaDl}
        </section>
      )}

      {/* Legacy · CIFRAS · sólo cuando NO hay `metricGroups`. */}
      {!w.metricGroups && w.metrics.length > 0 && (
        <section className="cs-wrap wl-metrics" aria-label="Results">
          {proof.length > 0 && (
            <>
              <p className="wl-metrics__l">Results</p>
              <div className="wl-metrics__row wl-metrics__row--proof">
                {proof.map((m, i) => (
                  <Metric key={i} m={m} n={i + 1} kind="proof" />
                ))}
              </div>
            </>
          )}
          {context.length > 0 && (
            <>
              <p className="wl-metrics__l">Context</p>
              <div className="wl-metrics__row wl-metrics__row--context">
                {context.map((m, i) => (
                  <Metric
                    key={i}
                    m={m}
                    n={i + proof.length + 1}
                    kind="context"
                  />
                ))}
              </div>
            </>
          )}
          <ol className="wl-metrics__foot">
            {w.metrics.map((m, i) => (
              <li key={i}>
                <sup>{i + 1}</sup> {m.source} · {m.period}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 05 · Secciones — F26: la sección con h2 que menciona
          "built" recibe las `built` rows entre el body y los
          blocks. Detección por posición: es la sección cuyo body
          está vacío o cuyo h2 contiene "built" (case-insensitive)
          si el caso está en molde F26. */}
      {w.sections.map((sec, i) => {
        const hostsBuilt =
          isBuiltRows(w.built) &&
          /\bbuilt\b|\brun|\brunning\b/i.test(sec.h2) === false &&
          sec.body.length === 0
        // Simplificado: si es F26 y la sección tiene body vacío,
        // asumimos que es el host de las builtRows.
        const isBuiltHost =
          isBuiltRows(w.built) && sec.body.length === 0
        return (
          <section key={i} className="cs-sec cs-wrap">
            <div className="cs-sec__grid">
              <h2>{sec.h2}</h2>
              <div className="cs-sec__body">
                {sec.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {isBuiltHost && (
                  <BuiltRows rows={w.built as WorkBuiltRow[]} />
                )}
              </div>
            </div>
            {sec.blocks && sec.blocks.length > 0 && (() => {
              /* F26 §E.6 · descartar imágenes sin archivo antes de
                 medir cuántas quedan (para decidir --3 / --2). */
              const blocks = sec.blocks.filter(b => {
                if (b.kind === 'image') return publicFileExists(b.src)
                return true
              })
              if (blocks.length === 0) return null
              const imgCount = blocks.filter(b => b.kind === 'image').length
              return (
                <div
                  className={`cs-ev ${imgCount >= 3 ? 'cs-ev--3' : 'cs-ev--2'}`}
                >
                  {blocks.map((b, j) => (
                    <EvidenceBlock key={j} block={b} />
                  ))}
                </div>
              )
            })()}
            {sec.pull && <p className="cs-pull">{sec.pull}</p>}
          </section>
        )
      })}

      {/* F26 §A.7 · WHAT CHANGED · sólo cuando el caso trae
          `metricGroups`. */}
      {w.metricGroups && (
        <ChangeBlock
          h2={w.changeH2 ?? 'Five years, measured.'}
          preamble={w.changePreamble}
          groups={w.metricGroups}
          sources={w.sources ?? []}
          testimonial={w.testimonial}
        />
      )}

      {/* F26 §A.8 · ROOMS IT OPENED */}
      {w.rooms && w.rooms.length > 0 && (
        <section className="cs-wrap wl-rooms" aria-label="Rooms it opened">
          <div className="cs-sec__grid">
            <h2>{w.roomsH2 ?? 'Rooms the work opened.'}</h2>
            <div className="cs-sec__body">
              <div className="wl-rooms__list">
                {w.rooms.map((r, i) => (
                  <div key={i} className="wl-rooms__row">
                    <div className="wl-rooms__meta">
                      {r.year && <span className="wl-rooms__y">{r.year}</span>}
                      <span className="wl-rooms__n">{r.name}</span>
                    </div>
                    <p className="wl-rooms__d">{r.description}</p>
                    {r.links && r.links.length > 0 && (
                      <p className="wl-rooms__links">
                        {r.links.map((l, j) => (
                          <a
                            key={j}
                            href={l.href}
                            target="_blank"
                            rel="noopener"
                            className="wl-rooms__link"
                          >
                            {l.label} →
                          </a>
                        ))}
                      </p>
                    )}
                    {r.image && publicFileExists(r.image) && (
                      <div className="wl-rooms__img">
                        <img src={r.image} alt="" loading="lazy" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* F26 §A.9 · WHAT THIS MEANS FOR YOUR COMPANY · sólo cuando
          el caso trae `summary` (molde F26 mueve el bloque afuera
          del cs-intro). */}
      {w.summary && w.takeaways.length > 0 && (
        <section
          className="cs-wrap wl-forcompany"
          aria-label="What this means for your company"
        >
          <div className="cs-sec__grid">
            <h2>What this means for your company</h2>
            <div className="cs-sec__body">
              <ul className="cs-take">
                {w.takeaways.map((t, i) => (
                  <li key={i}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Legacy · WHAT WE BUILT + OBSERVABLE CHANGE + credit. Sólo
          cuando el caso NO está en F26 (no summary) y tiene datos
          legacy. */}
      {!w.summary && (w.built?.length || w.change?.length || w.credit) && (
        <section className="wl-summary cs-wrap">
          <div className="wl-summary__grid">
            {isBuiltStrings(w.built) && (
              <div className="wl-summary__col">
                <p className="wl-summary__l">What we built</p>
                <ul>
                  {w.built.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {w.change && w.change.length > 0 && (
              <div className="wl-summary__col">
                <p className="wl-summary__l">Observable change</p>
                <ul>
                  {w.change.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {w.credit && <p className="wl-summary__credit">{w.credit}</p>}
        </section>
      )}

      {/* 06 · Testimonio · F26 lo renderiza dentro de ChangeBlock;
          los casos legacy siguen mostrándolo acá. */}
      {!w.metricGroups && w.testimonial && (
        <blockquote className="cs-quote">
          <q>{w.testimonial.quote}</q>
          <cite>{w.testimonial.cite}</cite>
        </blockquote>
      )}

      {/* 07 · FAQ */}
      {w.faq && w.faq.length > 0 && (
        <section className="cs-faq cs-wrap">
          <h2>Questions</h2>
          <div className="cs-faq__list">
            {w.faq.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* 08 · F23-3 §4.5 · "More from this engagement" oculto en Karen
          hasta que PEZET/Saadiyat se rehagan. Las rutas /projects/*
          siguen vivas y en noindex, pero la grilla no se renderiza. */}

      {/* 09 · Cierre de PUERTA · estilo Primary, sin escasez */}
      <section className="wl-door-close cs-wrap">
        <DoorRow spec={primary} />
        {secondary && <DoorRow spec={secondary} />}
      </section>

      {/* 10 · Next case */}
      {w.next && <NextCaseCard slug={w.next} />}

      {/* 11 · START HERE · F23-5 · copy por caso. */}
      {CASE_START_HERE[w.slug] && (
        <StartHere {...CASE_START_HERE[w.slug]} />
      )}
    </article>
  )
}

function Metric({
  m,
  n,
  kind,
}: {
  m: WorkMetric
  n: number
  kind: 'proof' | 'context'
}) {
  return (
    <div className={`wl-metric wl-metric--${kind}`}>
      <p className="wl-metric__v">
        {m.value}
        <sup className="wl-metric__n">{n}</sup>
      </p>
      <p className="wl-metric__l">{m.label}</p>
    </div>
  )
}

function DoorRow({ spec }: { spec: ReturnType<typeof doorSpec> }) {
  return (
    <Link className="wl-door-row" href={spec.href}>
      <span className="wl-door-row__label">{spec.label}</span>
      <span className="wl-door-row__desc">{spec.descriptor}</span>
      <span className="wl-door-row__price">{spec.price} →</span>
    </Link>
  )
}

/* F26 §A.5 · WHAT WE BUILT · filas nombre + descripción. Vive
   dentro de la sección "What we built" (cuando el body está
   vacío). */
function BuiltRows({ rows }: { rows: WorkBuiltRow[] }) {
  return (
    <ul className="wl-built-rows">
      {rows.map((r, i) => (
        <li key={i}>
          <p className="wl-built-rows__n">{r.name}</p>
          <p className="wl-built-rows__d">{r.description}</p>
        </li>
      ))}
    </ul>
  )
}

/* F26 §A.7 · WHAT CHANGED · rótulos de grupo + cifras.
   Estructura F26 §E.5: h2 y preámbulo en cs-sec__grid (h2 cols
   1–5, preámbulo cols 7–12). Los grupos, fuentes y cita salen
   directamente al grid como cols 1 / -1 para ocupar ancho
   completo. La regla ink 2px del top del bloque no se ve
   interrumpida por padding lateral porque cs-wrap ya lo maneja. */
function ChangeBlock({
  h2,
  preamble,
  groups,
  sources,
  testimonial,
}: {
  h2: string
  preamble?: string
  groups: WorkMetricGroups
  sources: string[]
  testimonial?: { quote: string; cite: string }
}) {
  const GROUPS: Array<{
    key: keyof WorkMetricGroups
    label: string
    kind: 'proof' | 'context'
  }> = [
    { key: 'business', label: 'The business', kind: 'proof' },
    { key: 'reach', label: 'Reach', kind: 'proof' },
    { key: 'mediaValue', label: 'Media value', kind: 'proof' },
    { key: 'context', label: 'Context', kind: 'context' },
  ]
  return (
    <section className="cs-wrap wl-change" aria-label="What changed">
      <div className="cs-sec__grid">
        <h2>{h2}</h2>
        <div className="cs-sec__body">
          {preamble && <p className="wl-change__preamble">{preamble}</p>}
        </div>
        <div className="wl-change__groups">
          {GROUPS.map(g => {
            const items = groups[g.key]
            if (!items || items.length === 0) return null
            return (
              <div key={g.key} className="wl-change__group">
                <p className="wl-change__gl">{g.label}</p>
                <div className="wl-change__row">
                  {items.map((m, i) => (
                    <div
                      key={i}
                      className={`wl-metric wl-metric--${g.kind}`}
                    >
                      <p className="wl-metric__v">
                        {m.value}
                        {m.n !== undefined && (
                          <sup className="wl-metric__n">{m.n}</sup>
                        )}
                      </p>
                      <p className="wl-metric__l">{m.label}</p>
                      {m.period && (
                        <p className="wl-metric__meta">{m.period}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {sources.length > 0 && (
          <ol className="wl-change__sources">
            {sources.map((s, i) => (
              <li key={i}>
                <sup>{i + 1}</sup> {s}
              </li>
            ))}
          </ol>
        )}
        {testimonial && (
          <blockquote className="wl-change__quote">
            <q>{testimonial.quote}</q>
            <cite>{testimonial.cite}</cite>
          </blockquote>
        )}
      </div>
    </section>
  )
}

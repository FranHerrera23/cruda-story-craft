import Link from 'next/link'
import type { Work, WorkBlock, WorkMetric } from '@/content/work/types'
import { doorSpec } from '@/content/services/doors'
import StartHere, { CASE_START_HERE } from '@/components/StartHere'
import { selectedWork } from '@/content/work'
import './case-study-layout-v2.css'
import './work-layout.css'

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

/* F23-3 §4.4 · Next case usa el componente de card de Selected Work
   (imagen 1:1, título, segunda línea, descripción). */
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
        <p className="wl-next-card__desc">{next.dek}</p>
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

      {/* 01 · Título + back */}
      <header className="cs-top cs-wrap">
        <Link className="cs-back" href="/#selected-work">
          ← Work
        </Link>
        <h1 className="cs-h1">{w.title}</h1>
      </header>

      {/* 02 · Hero · F25 §4 · retrato = 4:5 en cols 1–5 con la meta
          al lado en cols 7–12. Paisaje = 16:8 a full-width como
          venía (F23-3 §4.1). */}
      {w.image && isPortrait && (
        <div className="cs-wrap cs-hero-portrait">
          <div className="cs-hero cs-hero--portrait">
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
          {metaDl}
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

      {/* 03 · Capsule + takeaways + META (META solo si no es retrato,
          porque en retrato ya está al lado del hero). */}
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

      {/* 04 · CIFRAS · PRUEBA (≤4, naranja) + CONTEXTO (resto, ink) */}
      {w.metrics.length > 0 && (
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

      {/* 05 · Secciones */}
      {w.sections.map((sec, i) => (
        <section key={i} className="cs-sec cs-wrap">
          <div className="cs-sec__grid">
            <h2>{sec.h2}</h2>
            <div className="cs-sec__body">
              {sec.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
          {sec.blocks && sec.blocks.length > 0 && (
            <div
              className={`cs-ev ${
                sec.blocks.filter(b => b.kind === 'image').length >= 3
                  ? 'cs-ev--3'
                  : 'cs-ev--2'
              }`}
            >
              {sec.blocks.map((b, j) => (
                <EvidenceBlock key={j} block={b} />
              ))}
            </div>
          )}
          {sec.pull && <p className="cs-pull">{sec.pull}</p>}
        </section>
      ))}

      {/* WHAT WE BUILT + OBSERVABLE CHANGE + credit */}
      {(w.built?.length || w.change?.length || w.credit) && (
        <section className="wl-summary cs-wrap">
          <div className="wl-summary__grid">
            {w.built && w.built.length > 0 && (
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

      {/* 06 · Testimonio */}
      {w.testimonial && (
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

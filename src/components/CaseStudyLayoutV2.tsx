import Link from 'next/link'
import StartHere, { CASE_START_HERE } from '@/components/StartHere'
import './case-study-layout-v2.css'

/* <CaseStudyLayout> · F17.0 · 21-sep · autónomo · case-molde-v1.

   Molde firmado del case study nuevo. Recibe todo el contenido
   como data · el componente no inventa nada.

   Anatomía:
     01  h1 · back
     02  hero (imagen antes que cualquier texto)
     03  capsule + takeaways + meta (columna Pentagram)
     04  stats · 4 cifras · cada una con fuente y período
     05  secciones · h2 → 2 párrafos → evidencia (2 o 3 imágenes)
     06  testimonio · serif · sobre negro (único lugar con serif)
     07  FAQ · <details> nativo, respuestas en el HTML
     08  sub-casos · molde wcard
     09  cierre · plano 10 de la home

   Regla §2 · si un asset no existe, el bloque de imagen no se
   renderiza. Si un item de una lista no tiene dato real, no
   entra. Nunca marcadores visibles. */

export type CaseStat = {
  value: string
  label: string
  source: string
}

export type CaseSectionEvidence = {
  img?: string
  caption?: string
  aspect?: 'p' | 'l' | 's'
}

export type CaseSection = {
  h2: string
  body: string[]
  evidence?: CaseSectionEvidence[]
  pull?: string
}

export type CaseFaq = { q: string; a: string }

export type CaseSubItem = {
  slug: string
  name: string
  meta: string
  img?: string
}

export type CaseStudyData = {
  slug: string
  h1: string
  hero?: { img: string; alt?: string; caption?: string }
  capsule: string[]
  takeaways: string[]
  meta: {
    client: string
    clientRole?: string
    where: string
    scope: string
    period: string
    author: string
    date: string
    dateISO: string
  }
  stats: CaseStat[]
  sections: CaseSection[]
  testimonial?: { quote: string; cite: string }
  faqs?: CaseFaq[]
  moreFrom?: CaseSubItem[]
}

function Evidence({ e }: { e: CaseSectionEvidence }) {
  if (!e.img) return null
  const cls =
    e.aspect === 'l' ? 'cs-ev__m--l' :
    e.aspect === 's' ? 'cs-ev__m--s' : 'cs-ev__m--p'
  return (
    <figure>
      <div className={`cs-ev__m ${cls}`}>
        <img src={e.img} alt={e.caption ?? ''} loading="lazy" />
      </div>
      {e.caption && <figcaption className="cs-cap">{e.caption}</figcaption>}
    </figure>
  )
}

function schema(data: CaseStudyData) {
  const base = 'https://www.thecruda.com'
  const article: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${base}/work/${data.slug}#article`,
    headline: data.h1,
    description: data.capsule[0] ?? '',
    datePublished: data.meta.dateISO,
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
    about: {
      '@type': 'Organization',
      name: data.meta.client + (data.meta.clientRole ? ` — ${data.meta.clientRole}` : ''),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${base}/work/${data.slug}`,
    },
  }
  if (data.hero?.img) article.image = `${base}${data.hero.img}`
  const graph: unknown[] = [article]
  if (data.faqs && data.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${base}/work/${data.slug}#faq`,
      mainEntity: data.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  const evidenceCount = (s: CaseSection) =>
    (s.evidence || []).filter(e => !!e.img).length
  return (
    <article className="cs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(data)) }}
      />
      {/* 01 · TÍTULO */}
      <header className="cs-top cs-wrap">
        <Link className="cs-back" href="/#selected-work">
          ← Work
        </Link>
        <h1 className="cs-h1">{data.h1}</h1>
      </header>

      {/* 02 · HERO */}
      {data.hero?.img && (
        <figure className="cs-wrap">
          <div className="cs-hero">
            <img src={data.hero.img} alt={data.hero.alt ?? ''} />
          </div>
          {data.hero.caption && (
            <figcaption className="cs-cap">{data.hero.caption}</figcaption>
          )}
        </figure>
      )}

      {/* 03 · CAPSULE + TAKEAWAYS │ META */}
      <section className="cs-intro cs-wrap">
        <div>
          <div className="cs-capsule">
            {data.capsule.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {data.takeaways.length > 0 && (
            <ul className="cs-take" aria-label="Key takeaways">
              {data.takeaways.map((t, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <dl className="cs-meta">
          <div>
            <dt>Client</dt>
            <dd>
              {data.meta.client}
              {data.meta.clientRole && (
                <>
                  <br />
                  {data.meta.clientRole}
                </>
              )}
            </dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>{data.meta.where}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{data.meta.scope}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{data.meta.period}</dd>
          </div>
          <div>
            <dt>Written by</dt>
            <dd>
              {data.meta.author}
              <br />
              <time dateTime={data.meta.dateISO}>{data.meta.date}</time>
            </dd>
          </div>
        </dl>
      </section>

      {/* 04 · CIFRAS */}
      {data.stats.length > 0 && (
        <section className="cs-wrap" aria-label="Results">
          <div className="cs-stats">
            {data.stats.map((s, i) => (
              <div key={i} className="cs-stat">
                <p className="cs-stat__v">{s.value}</p>
                <p className="cs-stat__l">{s.label}</p>
                <p className="cs-stat__s">{s.source}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 05 · SECCIONES */}
      {data.sections.map((sec, i) => {
        const count = evidenceCount(sec)
        return (
          <section key={i} className="cs-sec cs-wrap">
            <div className="cs-sec__grid">
              <h2>{sec.h2}</h2>
              <div className="cs-sec__body">
                {sec.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
            {count > 0 && (
              <div className={`cs-ev ${count >= 3 ? 'cs-ev--3' : 'cs-ev--2'}`}>
                {(sec.evidence || [])
                  .filter(e => !!e.img)
                  .map((e, j) => (
                    <Evidence key={j} e={e} />
                  ))}
              </div>
            )}
            {sec.pull && <p className="cs-pull">{sec.pull}</p>}
          </section>
        )
      })}

      {/* 06 · TESTIMONIO */}
      {data.testimonial && (
        <blockquote className="cs-quote">
          <q>{data.testimonial.quote}</q>
          <cite>{data.testimonial.cite}</cite>
        </blockquote>
      )}

      {/* 07 · FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="cs-faq cs-wrap">
          <h2>Questions</h2>
          <div className="cs-faq__list">
            {data.faqs.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* 08 · SUB-CASOS */}
      {data.moreFrom && data.moreFrom.length > 0 && (
        <section className="cs-more cs-wrap">
          <p className="cs-eyebrow">More from this engagement</p>
          <div className="cs-more__g">
            {data.moreFrom.map(m => (
              <Link key={m.slug} className="cs-wcard" href={m.slug}>
                {m.img && (
                  <div className="cs-wcard__m">
                    <img src={m.img} alt="" loading="lazy" />
                  </div>
                )}
                <h3 className="cs-wcard__n">{m.name}</h3>
                <p className="cs-wcard__d">{m.meta}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 09 · START HERE · F23-5 · copy por caso. */}
      {CASE_START_HERE[data.slug] && (
        <StartHere {...CASE_START_HERE[data.slug]} />
      )}
    </article>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import './case-study.css'
import ClosingBlock from './ClosingBlock'
import RelatedResources from './RelatedResources'

/* ------------------------------------------------------------------
   CRUDA — CaseStudyLayout
   Molde AEO. Cada case study hereda esta estructura y su schema.

   Data-gap rule: any field without a verified value gets left empty.
   The layout skips render + the JSON-LD skips emit. No invention.
------------------------------------------------------------------- */

export type Stat = {
  value: string
  label: string
  source?: string
}

export type Section = {
  heading: string
  /* Brief v13 T2.2 — answer opcional. Renderea inmediatamente después
     del heading, autocontenido (40-80 palabras), para que un motor de
     respuesta pueda levantarlo solo sin el resto de la página.
     Cuando Alan entregue las secciones-pregunta, este es el slot. */
  answer?: string
  body: string[]
  pullQuote?: string
}

export type Faq = { q: string; a: string }

export type CaseStudy = {
  slug: string
  /* title = H1 visible (para el humano).
     seoTitle = <title> del head + og:title + twitter:title (keyword
     literal para el buscador y para AI). Si no existe, cae a title.
     Brief v13 T2.1. */
  title: string
  seoTitle?: string
  subtitle?: string
  client: {
    name: string
    role: string
    company: string
    location: string
    photo: string
    photoAlt: string
  }
  publishedAt?: string
  updatedAt?: string
  answerCapsule: string
  takeaways?: string[]
  stats?: Stat[]
  sections: Section[]
  testimonial?: { quote: string; attribution: string }
  faqs?: Faq[]
  /* Brief v14 T2 — 'CRUDA' agregado para case studies transversales
     que no pertenecen a un vertical (Girish=hospitality/healthcare;
     confidencial=retail). Antes ambos decían "Architecture & Design"
     en el eyebrow, mentiroso y filtraba mal. */
  vertical: 'Architecture & Design' | 'Sports' | 'AI Concierge' | 'CRUDA'
  heroImage?: string
  heroAlt?: string
  /* Brief v5 T6 — portfolio (Mike, Girish) usan variante sin
     "represent". Client actuales (Karen, JP) usan la variante estándar. */
  status?: 'client' | 'portfolio'
}

const AUTHOR = {
  name: 'Francisco Herrera',
  role: 'Founder, CRUDA',
  photo: '/fran-herrera.png',
  url: 'https://www.thecruda.com/our-founder',
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function schema(cs: CaseStudy) {
  const base = 'https://www.thecruda.com'
  const article: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${base}/clients/${cs.slug}#article`,
    /* Brief v13 T2.1 — headline = keyword literal (seoTitle) para AI
       y buscadores; alternativeHeadline = H1 humano. */
    headline: cs.seoTitle ?? cs.title,
    alternativeHeadline: cs.seoTitle ? cs.title : undefined,
    description: cs.answerCapsule,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      url: AUTHOR.url,
      worksFor: { '@type': 'Organization', name: 'CRUDA', url: base },
    },
    publisher: {
      '@type': 'Organization',
      name: 'CRUDA',
      url: base,
      logo: { '@type': 'ImageObject', url: `${base}/logo.png` },
    },
    about: {
      '@type': 'Organization',
      name: cs.client.company,
      location: cs.client.location,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${base}/clients/${cs.slug}` },
  }
  if (cs.publishedAt) article.datePublished = cs.publishedAt
  if (cs.updatedAt) article.dateModified = cs.updatedAt
  if (cs.heroImage) article.image = `${base}${cs.heroImage}`

  const graph: unknown[] = [article]
  if (cs.faqs && cs.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${base}/clients/${cs.slug}#faq`,
      mainEntity: cs.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export default function CaseStudyLayout({ cs }: { cs: CaseStudy }) {
  const hasDates = !!cs.publishedAt
  const showUpdated =
    hasDates && cs.updatedAt && cs.updatedAt !== cs.publishedAt

  return (
    <article className="cs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(cs)) }}
      />

      {/* ---------- HEAD ---------- */}
      <header className="cs-head">
        <Link href="/resources" className="cs-back mono">
          ← Resources
        </Link>
        <p className="cs-eyebrow">{cs.vertical}</p>
        <h1 className="cs-title">{cs.title}</h1>
        {cs.subtitle && <p className="cs-sub">{cs.subtitle}</p>}

        <div className="cs-byline">
          <Image src={AUTHOR.photo} alt={AUTHOR.name} width={40} height={40} className="cs-avatar" />
          <div>
            <span className="cs-author">{AUTHOR.name}</span>
            <span className="cs-role">{AUTHOR.role}</span>
          </div>
          {hasDates && (
            <div className="cs-dates">
              <time dateTime={cs.publishedAt}>{fmt(cs.publishedAt!)}</time>
              {showUpdated && (
                <span> · Updated <time dateTime={cs.updatedAt}>{fmt(cs.updatedAt!)}</time></span>
              )}
            </div>
          )}
        </div>
      </header>

      {/* ---------- ANSWER CAPSULE ---------- */}
      <p className="cs-capsule">{cs.answerCapsule}</p>

      {/* ---------- TAKEAWAYS ---------- */}
      {cs.takeaways && cs.takeaways.filter(Boolean).length > 0 && (
        <aside className="cs-takeaways" aria-label="Key takeaways">
          <p className="cs-label">Key takeaways</p>
          <ul>
            {cs.takeaways.filter(Boolean).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </aside>
      )}

      {cs.heroImage && cs.heroAlt && (
        <figure className="cs-hero">
          <Image src={cs.heroImage} alt={cs.heroAlt} width={1600} height={900} priority />
        </figure>
      )}

      {/* ---------- CLIENT ---------- */}
      <section className="cs-client">
        <p className="cs-label">The client</p>
        <h2>{cs.client.name}</h2>
        <p className="cs-client-meta">
          {cs.client.role}, {cs.client.company}<br />{cs.client.location}
        </p>
      </section>

      {/* ---------- STATS ---------- */}
      {cs.stats && cs.stats.length > 0 && (
        <section className="cs-stats" aria-label="Results">
          {cs.stats.map((s, i) => (
            <div className="cs-stat" key={i}>
              <span className="cs-stat-v">{s.value}</span>
              <span className="cs-stat-l">{s.label}</span>
              {s.source && <span className="cs-stat-s">{s.source}</span>}
            </div>
          ))}
        </section>
      )}

      {/* ---------- BODY ---------- */}
      <div className="cs-body">
        {cs.sections.map((sec, i) => (
          <section key={i} className="cs-section">
            <h2>{sec.heading}</h2>
            {/* Brief v13 T2.2 — answer inmediatamente después del
                heading (opcional). Es el bloque que un motor de
                respuesta puede levantar solo, sin el resto. */}
            {sec.answer && <p className="cs-answer">{sec.answer}</p>}
            {sec.body.map((p, j) => <p key={j}>{p}</p>)}
            {sec.pullQuote && <blockquote className="cs-pull">{sec.pullQuote}</blockquote>}
          </section>
        ))}
      </div>

      {/* ---------- TESTIMONIAL ---------- */}
      {cs.testimonial && (
        <section className="cs-testimonial">
          <blockquote>{cs.testimonial.quote}</blockquote>
          <cite>{cs.testimonial.attribution}</cite>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      {cs.faqs && cs.faqs.length > 0 && (
        <section className="cs-faq">
          <h2>Questions</h2>
          {cs.faqs.map((f, i) => (
            <details key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      )}

      <ClosingBlock
        kind="case-study"
        variant={cs.status === 'portfolio' ? 'portfolio' : 'client'}
      />

      {/* Brief v9 T5 — 3 piezas relacionadas después del cierre. */}
      <RelatedResources excludeHrefs={[`/clients/${cs.slug}`]} lang="en" />
    </article>
  )
}

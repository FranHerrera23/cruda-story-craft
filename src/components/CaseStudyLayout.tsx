import Image from 'next/image'
import './case-study.css'

/* ------------------------------------------------------------------
   CRUDA — CaseStudyLayout
   Molde AEO. Cada case study hereda esta estructura y su schema.
   Ref: cruda-aeo-content-playbook.md
------------------------------------------------------------------- */

export type Stat = {
  value: string          // "+300%"
  label: string          // "LinkedIn growth"
  source?: string        // "LinkedIn Analytics, Jul 2026"
}

export type Section = {
  heading: string        // afirmación-cápsula, no label
  body: string[]         // párrafos
  pullQuote?: string
}

export type Faq = { q: string; a: string }

export type CaseStudy = {
  slug: string
  title: string              // = resultado o pregunta del buyer
  subtitle?: string
  client: {
    name: string
    role: string
    company: string
    location: string
    photo: string
    photoAlt: string
  }
  publishedAt: string        // ISO
  updatedAt: string          // ISO
  answerCapsule: string      // 2-3 frases autocontenidas. El bloque que la IA levanta.
  takeaways: [string, string, string]
  stats: Stat[]
  sections: Section[]
  testimonial?: { quote: string; attribution: string }
  faqs: Faq[]
  vertical: 'Architecture & Design' | 'Sports' | 'AI Concierge'
  heroImage: string
  heroAlt: string
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
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${base}/clients/${cs.slug}#article`,
        headline: cs.title,
        description: cs.answerCapsule,
        datePublished: cs.publishedAt,
        dateModified: cs.updatedAt,
        image: `${base}${cs.heroImage}`,
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
      },
      {
        '@type': 'FAQPage',
        '@id': `${base}/clients/${cs.slug}#faq`,
        mainEntity: cs.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

export default function CaseStudyLayout({ cs }: { cs: CaseStudy }) {
  return (
    <article className="cs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(cs)) }}
      />

      {/* ---------- HEAD ---------- */}
      <header className="cs-head">
        <p className="cs-eyebrow">{cs.vertical}</p>

        {/* Un solo H1. Es el resultado, no un tagline. */}
        <h1 className="cs-title">{cs.title}</h1>
        {cs.subtitle && <p className="cs-sub">{cs.subtitle}</p>}

        {/* Byline — ethos para el humano, señal EEAT para la máquina */}
        <div className="cs-byline">
          <Image src={AUTHOR.photo} alt={AUTHOR.name} width={40} height={40} className="cs-avatar" />
          <div>
            <span className="cs-author">{AUTHOR.name}</span>
            <span className="cs-role">{AUTHOR.role}</span>
          </div>
          <div className="cs-dates">
            <time dateTime={cs.publishedAt}>{fmt(cs.publishedAt)}</time>
            {cs.updatedAt !== cs.publishedAt && (
              <span> · Updated <time dateTime={cs.updatedAt}>{fmt(cs.updatedAt)}</time></span>
            )}
          </div>
        </div>
      </header>

      {/* ---------- ANSWER CAPSULE ---------- */}
      {/* El bloque que la IA levanta. Autocontenido, sin contexto previo. */}
      <p className="cs-capsule">{cs.answerCapsule}</p>

      {/* ---------- TAKEAWAYS ---------- */}
      <aside className="cs-takeaways" aria-label="Key takeaways">
        <p className="cs-label">Key takeaways</p>
        <ul>{cs.takeaways.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </aside>

      <figure className="cs-hero">
        <Image src={cs.heroImage} alt={cs.heroAlt} width={1600} height={900} priority />
      </figure>

      {/* ---------- CLIENT ---------- */}
      <section className="cs-client">
        <p className="cs-label">The client</p>
        <h2>{cs.client.name}</h2>
        <p className="cs-client-meta">
          {cs.client.role}, {cs.client.company}<br />{cs.client.location}
        </p>
      </section>

      {/* ---------- STATS ---------- */}
      {/* Stat density: cada claim es un dato atribuible */}
      <section className="cs-stats" aria-label="Results">
        {cs.stats.map((s, i) => (
          <div className="cs-stat" key={i}>
            <span className="cs-stat-v">{s.value}</span>
            <span className="cs-stat-l">{s.label}</span>
            {s.source && <span className="cs-stat-s">{s.source}</span>}
          </div>
        ))}
      </section>

      {/* ---------- BODY ---------- */}
      {/* Subheaders = afirmaciones-cápsula. Cada sección se sostiene sola. */}
      <div className="cs-body">
        {cs.sections.map((sec, i) => (
          <section key={i} className="cs-section">
            <h2>{sec.heading}</h2>
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
      {/* Preguntas reales de alguien evaluando el servicio */}
      <section className="cs-faq">
        <h2>Questions</h2>
        {cs.faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <footer className="cs-cta">
        <p>Want this for your studio?</p>
        <a href="/contact" className="cs-btn">Start a conversation</a>
      </footer>
    </article>
  )
}

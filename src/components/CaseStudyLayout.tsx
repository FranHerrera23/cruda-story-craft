import Image from 'next/image'
import Link from 'next/link'
import './case-study.css'
import CaptureForm from './CaptureForm'
import { CAPTURE_ENABLED } from '@/lib/flags'

/* ------------------------------------------------------------------
   CRUDA — CaseStudyLayout
   Molde AEO. Cada case study hereda esta estructura y su schema.

   Data-gap rule: any field without a verified value gets left empty.
   The layout skips render + the JSON-LD skips emit. No invention.

   B5 rework (deroga §4.5, §4.6 y §4.7 del brief para páginas de pieza):
   - El chip .cs-eyebrow (la vertical) sale del hero. Las categorías
     viven solo en las cards de los índices.
   - El hero se ordena breadcrumb → fecha → H1 → subtitle → byline
     (foto, nombre, rol) → imagen hero.
   - Cada Section puede abrir con una imagen. Sin imagen → arranca
     sin hueco.
   - ClosingBlock (.cb bloque beige) eliminado. Reemplazo: línea de
     texto con .link — "¿Tenés una historia que contar? Hablemos." /
     "Got a story worth telling? Let's talk."
   - RelatedResources eliminado del cierre. Mecanismo de continuidad
     es el newsletter (CaptureForm). Cards viven solo en /resources/*.
   - Orden final: sections → testimonial → faq → CTA line →
     CaptureForm → SiteFooter global. */

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
  /* B5.4 — slot de imagen opcional al abrir la sección. */
  image?: { src: string; alt: string }
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
  vertical: 'Architecture & Design' | 'Sports' | 'Systems' | 'CRUDA'
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
    '@id': `${base}/resources/case-studies/${cs.slug}#article`,
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
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${base}/resources/case-studies/${cs.slug}` },
  }
  if (cs.publishedAt) article.datePublished = cs.publishedAt
  if (cs.updatedAt) article.dateModified = cs.updatedAt
  if (cs.heroImage) article.image = `${base}${cs.heroImage}`

  const graph: unknown[] = [article]
  if (cs.faqs && cs.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${base}/resources/case-studies/${cs.slug}#faq`,
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
  /* B5.2 — CTA de una línea. Case studies del sitio siempre están en
     inglés hoy, pero el copy queda listo para bilingüe si mañana
     Karen o JP levantan versión española. */
  const ctaLine = "Got a story worth telling? Let's talk."

  return (
    <article className="cs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(cs)) }}
      />

      {/* ---------- HEAD (B5.3) ----------
          breadcrumb → fecha → H1 → subtitle → byline. Cero chip
          de vertical: las categorías viven en los índices. */}
      <header className="cs-head">
        <Link href="/resources" className="cs-back mono">
          ← Resources
        </Link>
        {hasDates && (
          <p className="cs-date mono">
            <time dateTime={cs.publishedAt}>{fmt(cs.publishedAt!)}</time>
            {showUpdated && (
              <> · Updated <time dateTime={cs.updatedAt}>{fmt(cs.updatedAt!)}</time></>
            )}
          </p>
        )}
        <h1 className="cs-title">{cs.title}</h1>
        {cs.subtitle && <p className="cs-sub">{cs.subtitle}</p>}

        <div className="cs-byline">
          <Image src={AUTHOR.photo} alt={AUTHOR.name} width={40} height={40} className="cs-avatar" />
          <div>
            <span className="cs-author">{AUTHOR.name}</span>
            <span className="cs-role">{AUTHOR.role}</span>
          </div>
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
            {/* B5.4 — slot de imagen opcional al abrir la sección.
                Reveal por clip-path (definido en CSS). Sin imagen,
                la sección arranca sin hueco. */}
            {sec.image && (
              <figure className="cs-section-image">
                <Image src={sec.image.src} alt={sec.image.alt} width={1600} height={900} />
              </figure>
            )}
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

      {/* B5.2 — CTA es una línea, no un bloque beige. */}
      <p className="cs-cta-line">
        <Link href="/contact" className="link">
          {ctaLine}
        </Link>
      </p>

      {/* B5.6 — captura al cierre. Reemplaza al grid de RelatedResources
          que se eliminó. Continuidad = newsletter.
          F0 — gateado por CAPTURE_ENABLED. Si el flag está apagado
          el cierre queda sections → testimonial → faq → línea CTA →
          SiteFooter, sin hueco. */}
      {CAPTURE_ENABLED && <CaptureForm lang="en" variant="full" />}
    </article>
  )
}

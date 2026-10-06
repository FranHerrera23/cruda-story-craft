import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import { collectionPageSchema } from '@/lib/collection-schema'
import type { Resource, ResourceCompany } from '@/content/resources'
import SubscribeForm from '@/components/SubscribeForm'
import EssayCard, { type EssayCardData } from '@/components/thinking/EssayCard'
import './thinking.css'

/* /thinking · F54 · 1-oct · Fran · rediseño con imágenes + sidebar.

   Estructura (brief F54 §1):
     - Hero · h1 "Thinking", regla naranja, intro, toggle lang, aside
       de suscripción (solo EN).
     - Destacada · la pieza más reciente del idioma activo (imagen
       cols 1-7, texto cols 8-12).
     - Grilla · el resto de las piezas en 3 columnas, con tarjetas
       (imagen o portada tipográfica).
     - Cierre · "Case studies live in Work" link.

   Idioma: /thinking renderiza las piezas en inglés; /thinking?lang=es
   solo las piezas en español. El aside de suscripción solo aparece
   en EN (la newsletter es solo EN, brief §1.1). Los toggles son
   links reales (`<a href>`), no botones JS. */

type Lang = 'en' | 'es'

/* ------- Datos ------- */

const ARTICLES = [...allEssays].sort((a, b) =>
  (b.publishedAt || '').localeCompare(a.publishedAt || ''),
)

const SCHEMA_ITEMS: Resource[] = ARTICLES.map(e => ({
  slug: e.slug,
  href: `/thinking/${e.slug}`,
  title: e.title,
  excerpt: e.answerCapsule,
  kind: 'essay' as const,
  company: 'cruda' as ResourceCompany,
  language: (e.language ?? 'en') as Lang,
  publishedAt: e.publishedAt,
  canonicalPieceId: e.alternates?.en ?? e.slug,
}))

type Row = {
  slug: string
  href: string
  title: string
  dek?: string
  language: Lang
  kind: 'article' | 'podcast'
  readingMinutes?: number
  publishedAt: string
  heroImage?: string
  heroAlt?: string
  altLang?: Lang
  status?: 'upcoming'
}

const ARTICLE_ROWS: Row[] = ARTICLES.map(e => {
  const language = (e.language ?? 'en') as Lang
  const alt = e.alternates
  const altEs = language === 'en' && alt?.es ? ('es' as const) : undefined
  const altEn = language === 'es' && alt?.en ? ('en' as const) : undefined
  return {
    slug: e.slug,
    href: `/thinking/${e.slug}`,
    title: e.title,
    dek: e.deck || undefined,
    language,
    kind: 'article',
    readingMinutes: e.readingMinutes,
    publishedAt: e.publishedAt,
    heroImage: e.heroImage,
    heroAlt: e.heroAlt,
    altLang: altEs ?? altEn,
  }
})

const PODCAST_ROWS: Row[] = [
  {
    slug: 'steve-walls',
    href: '/thinking/steve-walls',
    title: 'Steve Walls',
    dek: 'Former CSO, Publicis Singapore & Saatchi & Saatchi.',
    language: 'en',
    kind: 'podcast',
    publishedAt: '',
    status: 'upcoming',
  },
]

/* Ordenamiento: por fecha descendente, upcoming al final (brief §1.3). */
const ALL_ROWS = [...ARTICLE_ROWS, ...PODCAST_ROWS].sort((a, b) => {
  if (!a.publishedAt) return 1
  if (!b.publishedAt) return -1
  return b.publishedAt.localeCompare(a.publishedAt)
})

/* ------- Formatos i18n ------- */

const MONTHS: Record<Lang, string[]> = {
  en: [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ],
  es: [
    'enero','febrero','marzo','abril','mayo','junio',
    'julio','agosto','septiembre','octubre','noviembre','diciembre',
  ],
}

function fmtDate(iso: string, lang: Lang): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const day = d.getUTCDate()
  const mon = MONTHS[lang][d.getUTCMonth()]
  const year = d.getUTCFullYear()
  if (lang === 'es') return `${day} de ${mon} de ${year}`
  return `${mon} ${day}, ${year}`
}

const READ_LABEL: Record<Lang, string> = {
  en: 'min read',
  es: 'min de lectura',
}

const ALSO_LABEL: Record<Lang, string> = {
  en: 'Also in Español',
  es: 'Also in English',
}

const PODCAST_LABEL: Record<Lang, { base: string; upcoming: string }> = {
  en: { base: 'Podcast', upcoming: 'Podcast · Upcoming' },
  es: { base: 'Podcast', upcoming: 'Podcast · Próximamente' },
}

function metaText(row: Row, viewLang: Lang): string {
  const parts: string[] = []
  if (row.publishedAt) parts.push(fmtDate(row.publishedAt, viewLang))
  if (row.kind === 'podcast') {
    parts.push(row.status === 'upcoming'
      ? PODCAST_LABEL[viewLang].upcoming
      : PODCAST_LABEL[viewLang].base)
  } else if (row.readingMinutes) {
    parts.push(`${row.readingMinutes} ${READ_LABEL[viewLang]}`)
  }
  /* "Also in Español" / "Also in English" (brief §1.2 destacada ·
     texto en meta, no link, porque todo el bloque es un link al
     ensayo). Aplicable también a tarjetas de grilla por consistencia. */
  if (row.altLang) {
    parts.push(ALSO_LABEL[viewLang])
  }
  return parts.join(' · ')
}

/* ------- Metadata (dinámica por lang) ------- */

const BASE_TITLE = 'Thinking · CRUDA'
const BASE_DESC =
  'Articles, case studies and podcasts by CRUDA on narrative, brand and demand.'

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const params = (await searchParams) ?? {}
  const lang: Lang = params.lang === 'es' ? 'es' : 'en'
  const canonical =
    lang === 'es'
      ? 'https://www.thecruda.com/thinking?lang=es'
      : 'https://www.thecruda.com/thinking'
  return {
    title: BASE_TITLE,
    description: BASE_DESC,
    alternates: { canonical },
    openGraph: {
      title: BASE_TITLE,
      description: BASE_DESC,
      url: canonical,
      type: 'website',
      images: [{
        url: 'https://www.thecruda.com/logo.png',
        width: 1080, height: 1080, alt: 'CRUDA',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: BASE_TITLE,
      description: BASE_DESC,
      images: ['https://www.thecruda.com/logo.png'],
    },
  }
}

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/thinking',
  name: BASE_TITLE,
  description: BASE_DESC,
  items: SCHEMA_ITEMS,
})

/* ------- Render ------- */

/* Helper · convierte un Row al shape que espera EssayCard. */
function rowToCard(row: Row, viewLang: Lang, opts: {
  priority?: boolean
  sizes?: string
  dim?: boolean
}): EssayCardData {
  return {
    slug: row.slug,
    href: row.href,
    title: row.title,
    dek: row.dek,
    metaText: metaText(row, viewLang),
    heroImage: row.heroImage,
    heroAlt: row.heroAlt,
    priority: opts.priority,
    sizes: opts.sizes,
    dim: opts.dim,
  }
}

const SIZES_FEATURED =
  '(max-width: 767px) 90vw, (max-width: 1023px) 100vw, 58vw'
const SIZES_CARD =
  '(max-width: 767px) 90vw, (max-width: 1023px) 48vw, 31vw'

export default async function ThinkingPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}) {
  const params = (await searchParams) ?? {}
  const viewLang: Lang = params.lang === 'es' ? 'es' : 'en'

  /* Filtrado por idioma · solo las piezas del idioma activo (brief
     §1.1). La destacada es la primera (más reciente); el resto va a
     la grilla. Los upcoming se mantienen en orden (ya quedaron al
     final por el sort). */
  const rows = ALL_ROWS.filter(r => r.language === viewLang)
  const [featured, ...rest] = rows

  return (
    <div className="thinking" data-lang={viewLang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ============ Hero (brief §1.1) ============
          Grid de 12 columnas · izquierda h1/regla/intro/toggle (cols
          1-7), derecha aside de suscripción (cols 9-12, solo EN).
          align-items: end · ambas columnas alineadas al borde inferior
          del hero. */}
      <section className="t-hero" aria-labelledby="t-hero-h1">
        <div className="t-hero__left">
          <h1 id="t-hero-h1" className="t-hero__h">Thinking</h1>
          <div className="t-hero__rule" aria-hidden="true" />
          <p className="t-hero__intro">
            Pieces on narrative, brand, and the founders who build them.
            Written for people who have to make decisions, not for people
            who write about them.
          </p>
          <nav className="t-hero__lang" aria-label="Language">
            <Link
              className={`t-hero__lang-opt${viewLang === 'en' ? ' is-active' : ''}`}
              href="/thinking"
              hrefLang="en"
              aria-current={viewLang === 'en' ? 'page' : undefined}
            >
              English
            </Link>
            <Link
              className={`t-hero__lang-opt${viewLang === 'es' ? ' is-active' : ''}`}
              href="/thinking?lang=es"
              hrefLang="es"
              aria-current={viewLang === 'es' ? 'page' : undefined}
            >
              Español
            </Link>
          </nav>
        </div>

        {/* Aside de suscripción · solo en vista EN (brief §1.1). */}
        {viewLang === 'en' && (
          <aside className="t-hero__sub" aria-labelledby="t-hero-sub-h">
            <h2 id="t-hero-sub-h" className="t-hero__sub-h">Narrative Sparring</h2>
            <p className="t-hero__sub-line">Every week, the full story.</p>
            {/* F57 §4 · contenedor del embed con max-height igual a
                la altura reservada por SubscribeForm (360px),
                overflow: hidden y aligned-top · el embed no puede
                empujar el h1 hacia abajo. Si el embed de beehiiv
                todavía trae título o descripción propios, quedan
                cortados por el overflow y el h2/line de arriba
                siguen siendo el único título visible. */}
            <div className="t-hero__sub-embed">
              <SubscribeForm />
            </div>
          </aside>
        )}
      </section>

      {/* ============ Destacada (brief §1.2) ============
          Un solo link al ensayo · imagen cols 1-7, texto cols 8-12,
          centrado vertical. La única imagen con `priority`. */}
      {featured && (
        <section className="t-featured">
          <Link href={featured.href} className="t-featured__link">
            <div className="t-featured__media">
              {featured.heroImage && featured.heroAlt ? (
                /* F54.1 (Fran 1-oct) · next/image con priority para
                   LCP · formatos AVIF/WebP vía next.config.mjs
                   formats · sizes del brief §3. */
                <Image
                  src={featured.heroImage}
                  alt={featured.heroAlt}
                  width={1600}
                  height={900}
                  sizes={SIZES_FEATURED}
                  priority
                  className="t-featured__img"
                />
              ) : (
                /* Reutilizo la portada tipográfica del card. */
                <div className="t-featured__cover">
                  <span className="essay-cover__mark" aria-hidden="true" />
                  <p className="essay-cover__title">{featured.title}</p>
                </div>
              )}
            </div>
            <div className="t-featured__text">
              <p className="t-featured__meta">{metaText(featured, viewLang)}</p>
              <h2 className="t-featured__h">{featured.title}</h2>
              {featured.dek && (
                <p className="t-featured__dek">{featured.dek}</p>
              )}
            </div>
          </Link>
        </section>
      )}

      {/* ============ Grilla (brief §1.3) ============
          3 columnas · column-gap 32, row-gap 56. Las tarjetas usan
          EssayCard; el podcast upcoming va con la variante `--dim`
          (sin link, título en gris). */}
      {rest.length > 0 && (
        <section className="t-grid">
          {rest.map(row => (
            <EssayCard
              key={row.slug}
              data={rowToCard(row, viewLang, {
                priority: false,
                sizes: SIZES_CARD,
                dim: row.status === 'upcoming',
              })}
            />
          ))}
        </section>
      )}

      {/* ============ Cierre (brief §1.4) ============ */}
      <p className="t-close">
        <Link href="/#selected-work">Case studies live in Work →</Link>
      </p>
    </div>
  )
}

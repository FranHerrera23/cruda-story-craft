import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EssayLayout from '@/components/EssayLayout'
import { allEssays } from '@/content/essays'

const BASE = 'https://www.thecruda.com'

export function generateStaticParams() {
  return allEssays.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const es = allEssays.find((e) => e.slug === slug)
  if (!es) return {}
  const modified = es.updatedAt || es.publishedAt
  /* Brief v8 T2 — metadata en idioma correcto. og:locale marca el
     idioma real de la pieza para que LinkedIn muestre título y
     descripción en español cuando corresponde. */
  const locale = es.language === 'es' ? 'es_ES' : 'en_US'
  /* Brief v13 T2.1 — seoTitle gana en el head si existe. */
  const headTitle = es.seoTitle ?? es.title
  /* Brief v15 T2 — hreflang recíproco. Cada versión declara ambos
     idiomas (incluyéndose a sí misma) más x-default apuntando al
     inglés porque el sitio comercial opera en inglés. Sin esto
     Google trata las dos versiones como duplicados que compiten. */
  const languages: Record<string, string> = {}
  if (es.alternates?.es) {
    languages['es'] = `${BASE}/thinking/${es.alternates.es}`
  }
  if (es.alternates?.en) {
    languages['en'] = `${BASE}/thinking/${es.alternates.en}`
    languages['x-default'] = `${BASE}/thinking/${es.alternates.en}`
  }
  const alternates: NonNullable<Metadata['alternates']> = {
    canonical: `${BASE}/thinking/${es.slug}`,
  }
  if (Object.keys(languages).length > 0) {
    alternates.languages = languages
  }
  return {
    title: `${headTitle} | CRUDA`,
    description: es.answerCapsule.slice(0, 155),
    alternates,
    openGraph: {
      title: headTitle,
      description: es.answerCapsule,
      url: `${BASE}/thinking/${es.slug}`,
      type: 'article',
      publishedTime: es.publishedAt,
      modifiedTime: modified,
      locale,
      /* Brief v12 T7 — sin heroImage cae al logo. Antes emitíamos
         undefined y el link no tenía preview al compartir. */
      images: [es.heroImage ? `${BASE}${es.heroImage}` : `${BASE}/logo.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: headTitle,
      description: es.answerCapsule.slice(0, 200),
      images: [es.heroImage ? `${BASE}${es.heroImage}` : `${BASE}/logo.png`],
    },
  }
}

export default async function EssayPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const es = allEssays.find((e) => e.slug === slug)
  if (!es) notFound()
  return <EssayLayout es={es} />
}

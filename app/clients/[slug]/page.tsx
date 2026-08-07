import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { allClients } from '@/content/clients'

const BASE = 'https://www.thecruda.com'

// Static generation → el contenido está en el HTML crudo. La IA lo ve.
export function generateStaticParams() {
  return allClients.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) return {}
  /* Brief v12 T7 — 4 de 5 case studies (Mike, Girish, JP, Nitin) no
     tienen heroImage. Antes emitíamos og:image = ".comundefined/"
     (concatenación con undefined). Fallback al logo hasta que las
     fotos de portada existan. */
  const ogImage = cs.heroImage ? `${BASE}${cs.heroImage}` : `${BASE}/logo.png`
  /* Brief v13 T2.1 — seoTitle es la keyword literal para buscador +
     AI. title es el H1 visible para el humano. Si Alan entrega
     seoTitle, gana en el head y en los previews. */
  const headTitle = cs.seoTitle ?? cs.title
  return {
    title: `${headTitle} | CRUDA`,
    description: cs.answerCapsule.slice(0, 155),
    alternates: { canonical: `${BASE}/clients/${cs.slug}` },
    openGraph: {
      title: headTitle,
      description: cs.answerCapsule,
      url: `${BASE}/clients/${cs.slug}`,
      type: 'article',
      publishedTime: cs.publishedAt,
      modifiedTime: cs.updatedAt,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: headTitle,
      description: cs.answerCapsule.slice(0, 200),
      images: [ogImage],
    },
  }
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) notFound()
  return <CaseStudyLayout cs={cs} />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import MomentIndex from '@/components/MomentIndex'
import { allClients } from '@/content/clients'
import { MOMENTS, MOMENT_LABEL, MOMENT_DESC, type Moment } from '@/content/moments'

const BASE = 'https://www.thecruda.com'

/* Brief v2 Task 2 + Task 8 — /work/[segment] cumple dos roles a la
   vez, ninguno de los cuales colisiona con el otro porque los slugs
   de case study nunca coinciden con los cinco valores de momento:

     /work/karen-mannheim   → case study
     /work/market-entry     → índice del moment "market-entry"

   generateStaticParams emite ambos sets. La página inspecciona el
   segment: si es un moment, renderea el índice; si es un slug, el
   case study; else 404. */

function isMoment(s: string): s is Moment {
  return (MOMENTS as readonly string[]).includes(s)
}

export function generateStaticParams() {
  return [
    ...allClients.map((c) => ({ slug: c.slug })),
    ...MOMENTS.map((m) => ({ slug: m })),
  ]
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params

  // Moment index metadata
  if (isMoment(slug)) {
    const label = MOMENT_LABEL[slug]
    const desc = MOMENT_DESC[slug]
    return {
      title: `${label} — CRUDA Work`,
      description: desc,
      alternates: { canonical: `${BASE}/work/${slug}` },
      openGraph: {
        title: `${label} — CRUDA Work`,
        description: desc,
        url: `${BASE}/work/${slug}`,
        type: 'website',
        images: [`${BASE}/logo.png`],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${label} — CRUDA Work`,
        description: desc,
        images: [`${BASE}/logo.png`],
      },
    }
  }

  // Case study metadata
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) return {}
  /* Brief v14 T5 — cascada de og:image:
     1) heroImage propio (landscape, ideal og) — hoy solo Karen.
     2) client.photo (retrato) — Girish, JP, Mike.
     3) logo como último fallback. */
  const ogImage = cs.heroImage
    ? `${BASE}${cs.heroImage}`
    : cs.client.photo
      ? `${BASE}${cs.client.photo}`
      : `${BASE}/logo.png`
  const headTitle = cs.seoTitle ?? cs.title
  /* Task 7 — one-liner es la fuente única para meta description y
     og:description. Fallback a answerCapsule para cases pre-migración
     que aún no tengan oneLiner. */
  const desc = cs.oneLiner ?? cs.answerCapsule
  return {
    title: `${headTitle} | CRUDA`,
    description: desc.slice(0, 200),
    alternates: { canonical: `${BASE}/work/${cs.slug}` },
    openGraph: {
      title: headTitle,
      description: desc,
      url: `${BASE}/work/${cs.slug}`,
      type: 'article',
      publishedTime: cs.publishedAt,
      modifiedTime: cs.updatedAt,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: headTitle,
      description: desc.slice(0, 200),
      images: [ogImage],
    },
  }
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  if (isMoment(slug)) return <MomentIndex moment={slug} />
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) notFound()
  return <CaseStudyLayout cs={cs} />
}

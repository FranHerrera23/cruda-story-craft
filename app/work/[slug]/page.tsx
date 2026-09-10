import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import CaseComposer from '@/components/case-blocks/CaseComposer'
import MomentIndex from '@/components/MomentIndex'
import { allClients } from '@/content/clients'
import { allClientsV2, findClientV2 } from '@/content/clients-v2'
import { MOMENTS, MOMENT_LABEL, MOMENT_DESC, type Moment } from '@/content/moments'

const BASE = 'https://www.thecruda.com'

/* Brief v2 Task 2 + Task 8 + Paso 5 · migración v2 — /work/[segment]
   cumple tres roles:

     /work/karen-mannheim   → case study v1 (CaseStudyLayout legacy)
     /work/inout            → case study v2 (CaseComposer con bloques)
     /work/market-entry     → índice del moment "market-entry"

   La resolución es:
     1. isMoment(slug)? → MomentIndex
     2. findClientV2(slug)? → CaseComposer (bloques)
     3. allClients.find(...)? → CaseStudyLayout (legacy)
     4. notFound()

   generateStaticParams emite los tres sets. */

function isMoment(s: string): s is Moment {
  return (MOMENTS as readonly string[]).includes(s)
}

export function generateStaticParams() {
  return [
    ...allClientsV2.map((c) => ({ slug: c.slug })),
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

  // Case v2 metadata — bloques model
  const v2 = findClientV2(slug)
  if (v2) {
    const desc = v2.oneLiner
    return {
      title: `${v2.title} | CRUDA`,
      description: desc.slice(0, 200),
      alternates: { canonical: `${BASE}/work/${v2.slug}` },
      openGraph: {
        title: v2.title,
        description: desc,
        url: `${BASE}/work/${v2.slug}`,
        type: 'article',
        images: [`${BASE}/logo.png`],
      },
      twitter: {
        card: 'summary_large_image',
        title: v2.title,
        description: desc.slice(0, 200),
        images: [`${BASE}/logo.png`],
      },
    }
  }

  // Case study v1 (legacy) metadata
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

  // V2 primero — case migrado al modelo de bloques.
  const v2 = findClientV2(slug)
  if (v2) return <CaseComposer cs={v2} />

  // Fallback legacy — cases sin migrar.
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) notFound()
  return <CaseStudyLayout cs={cs} />
}

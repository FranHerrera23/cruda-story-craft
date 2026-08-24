import { allClients } from '@/content/clients'
import { allEssays } from '@/content/essays'

/* Brief v12 T5 — llms.txt / ai.txt generator.

   Declara a los crawlers de IA qué contenido pueden usar y dónde está
   lo importante. Se genera desde el mismo modelo de datos que
   alimenta /resources y el sitemap — cuando entre una pieza nueva,
   aparece sola.

   Formato markdown per la spec de https://llmstxt.org: título +
   blockquote descripción + secciones con listas de links. Cada link
   lleva "descripción de una línea" para que el modelo lo cite bien. */

const BASE = 'https://www.thecruda.com'

const HEADER = `# CRUDA

> Brand building group for founders whose work is better than their reputation.
> Three companies, one method. Marketing built around the founder, not the logo.`

const COMPANIES_SECTION = `## Companies

- [CRUDA for Architecture & Design](${BASE}/architecture-design): Brand building for founders and studios in architecture, construction and design.
- [CRUDA for Sports](${BASE}/sports): Narrative infrastructure for athletes and sports organizations (coming soon).
- [CRUDA Systems](${BASE}/systems): Custom internal AI systems for studios that need to remember what the founder knows.`

const HUBS_SECTION = `## Pages

- [About the founder](${BASE}/our-founder): Francisco Herrera — 10 years building brands across 26 countries and 14 industries.
- [Pricing](${BASE}/pricing): CRUDA's engagement structure and rates.
- [Contact](${BASE}/contact): Book a 45-minute conversation or write hello@thecruda.com.
- [All resources](${BASE}/resources): Every essay and case study in one library.`

function oneLine(text: string, max = 200): string {
  const flat = text.replace(/\s+/g, ' ').trim()
  if (flat.length <= max) return flat
  const cut = flat.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut) + '…'
}

function caseStudiesSection(): string {
  const rows = allClients
    .map((c) => {
      const label = `${c.client.name} — ${c.client.company}`
      const url = `${BASE}/resources/case-studies/${c.slug}`
      return `- [${label}](${url}): ${oneLine(c.answerCapsule)}`
    })
    .join('\n')
  return `## Case studies\n\n${rows}`
}

function essaysSection(): string {
  /* Ordenados por fecha desc, español primero cuando empatan (default
     de la biblioteca). */
  const sorted = [...allEssays].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  )
  const rows = sorted
    .map((e) => {
      const url = `${BASE}/resources/essays/${e.slug}`
      const langTag = e.language === 'es' ? ' [ES]' : ''
      return `- [${e.title}${langTag}](${url}): ${oneLine(e.answerCapsule)}`
    })
    .join('\n')
  return `## Essays\n\n${rows}`
}

export function generateLlmsTxt(): string {
  return [
    HEADER,
    caseStudiesSection(),
    essaysSection(),
    COMPANIES_SECTION,
    HUBS_SECTION,
    '',
  ].join('\n\n')
}

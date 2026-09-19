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

/* Fran directive (19-sep) · el archivo servido a los crawlers
   de IA tenía tres problemas graves:
   · /sports y /systems declaradas como Companies · devuelven 410
     Gone via middleware.ts. Retiradas.
   · /resources listada como hub · redirige 308 a /work. Retirada.
   · Header, /work y /about con descripciones del posicionamiento
     viejo (Ogilvy-era "three companies, one method" · nicho
     cerrado de "Architecture & Design" · frase de /about que F9
     §2.4 marca para reemplazo por QUÉ ES CRUDA).

   Las descripciones corregidas quedan como slot [PENDIENTE · FRAN]
   hasta que llegue el copy nuevo. Fran (19-sep) · "preferible un
   /llms.txt con menos líneas que uno con líneas falsas".

   Regla nueva del protocolo (Fran, 19-sep) · cada vez que se
   retira o agrega una ruta del sitio, se revisan /llms.txt y
   /ai.txt. Registrado en docs/build-incidents.md.

   F9.4 (Commit 7 · 19-sep) · nueva ruta /services · agregada al
   hub con la descripción firmada del plano 00 (QUÉ ES CRUDA).
   Los cuatro planos internos llegan en F9.5/F9.6 · la descripción
   de /services se re-audita cuando eso pase.

   /pricing salió en commit f25ff69 (18-sep · Commit 1). */

const HEADER = `# CRUDA

> [ Description · PENDIENTE · FRAN ]`

const HUBS_SECTION = `## Pages

- [About CRUDA](${BASE}/about): [ PENDIENTE · FRAN ]
- [Work](${BASE}/work): [ PENDIENTE · FRAN ]
- [Services](${BASE}/services): CRUDA is a communications company. We translate cultures into business.
- [Process](${BASE}/process): The first 90 days. What CRUDA does, month by month.
- [Contact](${BASE}/contact): Book a 45-minute conversation or write fran@thecruda.com.`

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
      const url = `${BASE}/work/${c.slug}`
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
      const url = `${BASE}/essays/${e.slug}`
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
    HUBS_SECTION,
    '',
  ].join('\n\n')
}

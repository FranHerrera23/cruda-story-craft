import { allClients } from '@/content/clients'
import { allEssays } from '@/content/essays'
import { selectedWork, allWork } from '@/content/work'
import { doorSpec } from '@/content/services/doors'

/* Brief v12 T5 — llms.txt / ai.txt generator.

   Declara a los crawlers de IA qué contenido pueden usar y dónde está
   lo importante. Se genera desde el mismo modelo de datos que
   alimenta /resources y el sitemap — cuando entre una pieza nueva,
   aparece sola.

   Formato markdown per la spec de https://llmstxt.org: título +
   blockquote descripción + secciones con listas de links. Cada link
   lleva "descripción de una línea" para que el modelo lo cite bien. */

const BASE = 'https://www.thecruda.com'

/* H0 hotfix (21-sep) · cero marcadores de build llegan a
   producción · regla 1 del brief 21-sep.

   ANTES · las tres líneas del generador tenían slots
   [PENDIENTE · FRAN] visibles al crawler:
     · Header  · "> [ Description · PENDIENTE · FRAN ]"
     · About   · "[About CRUDA](/about): [ PENDIENTE · FRAN ]"
     · Work    · "[Work](/work): [ PENDIENTE · FRAN ]"

   DESPUÉS:
     · Header · usa el copy firmado en el hero de /services
       (WHAT CRUDA IS · F9 §2.4 · misma línea idéntica en home,
       /services y /about)
     · About  · misma descripción firmada
     · Work   · usa el dek firmado F5 (brief 21-sep) del
       prototipo home-v3 · "Nine founders. Six cities. Four
       countries." · es el copy autorizado para describir la
       sección Selected Work y por extensión la ruta /work

   Los case studies siguen listados uno por uno en
   caseStudiesSection() (allClients) · esta línea del hub es
   la descripción resumen que ve el crawler al conocer la ruta.

   Historial de rutas:
     · /sports, /systems, /resources retiradas (19-sep)
     · /services agregada (F9.4)
     · /pricing borrada (Commit 1 · f25ff69)

   Regla del protocolo · cada vez que se retira o agrega una
   ruta, se revisan /llms.txt y /ai.txt. */

const HEADER = `# CRUDA

> CRUDA is a communications company. We translate cultures into business.`

const HUBS_SECTION = `## Pages

- [About CRUDA](${BASE}/about): CRUDA is a communications company. We translate cultures into business.
- [Work](${BASE}/work): Nine founders. Six cities. Four countries.
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
  /* F18.5 · fuente única · una línea por caso = client · door ·
     dek · proof (si aplica). Incluye JPR (order > 100) pero fuera
     de SELECTED WORK. */
  const cases = allWork
    .filter(w => w.capsule.length > 0)
    .sort((a, b) => a.order - b.order)
  const rows = cases
    .map(w => {
      const doorLabel = doorSpec(w.door.primary).label
      const proof = w.proof
        ? w.proof.type === 'metric'
          ? ` · ${w.proof.value} ${w.proof.label} (${w.proof.period})`
          : ` · ${w.proof.text}`
        : ''
      const label = w.confidential ? w.client.company : `${w.client.name} — ${w.client.company}`
      const url = `${BASE}/work/${w.slug}`
      return `- [${label}](${url}): ${doorLabel} · ${oneLine(w.dek)}${proof}`
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
      const url = `${BASE}/thinking/${e.slug}`
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

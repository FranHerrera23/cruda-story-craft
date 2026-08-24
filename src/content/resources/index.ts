/* Unified library — brief v5 T7 + brief v8.

   Merges essays + case studies into a single flat list with three
   independent tags: kind (essay · conversation · playbook · case-study),
   company (cruda · a-d · sports · systems), and language (en · es).

   The /resources page reads this. Chips are built from the actual
   tags present — never hardcoded. Sports, Conversations and Playbooks
   just don't render until content of that kind lands.

   Brief v8 T3 — retag: los ensayos de la casa madre (pensamiento,
   método, filosofía) pasan a `cruda`. Solo lo que pertenece a una
   vertical lleva su vertical. */

import { allEssays } from '@/content/essays'
import { allClients } from '@/content/clients'

export type ResourceKind =
  | 'essay'
  | 'conversation'
  | 'playbook'
  | 'case-study'

export type ResourceCompany = 'cruda' | 'a-d' | 'sports' | 'systems'

export type ResourceLanguage = 'en' | 'es'

export type Resource = {
  slug: string
  href: string
  title: string
  excerpt: string
  kind: ResourceKind
  company: ResourceCompany
  language: ResourceLanguage
  publishedAt: string
  /* Brief v4 UX §4.6 — un mismo ensayo en dos idiomas es UNA pieza,
     no dos. canonicalPieceId agrupa las traducciones. Un ensayo sin
     traducción usa su propio slug. Un ensayo con alternates usa el
     slug de la versión x-default (inglés) como piece.id. */
  canonicalPieceId: string
}

const VERTICAL_TO_COMPANY: Record<string, ResourceCompany> = {
  'Architecture & Design': 'a-d',
  Sports: 'sports',
  Systems: 'systems',
  /* Brief v14 T2 — case studies transversales (Girish, confidencial)
     usan 'CRUDA' como vertical y se agrupan bajo la company cruda,
     igual que los ensayos. */
  CRUDA: 'cruda',
}

const KIND_LABEL: Record<ResourceKind, string> = {
  essay: 'Essay',
  conversation: 'Conversation',
  playbook: 'Playbook',
  'case-study': 'Case study',
}

const COMPANY_LABEL: Record<ResourceCompany, string> = {
  cruda: 'CRUDA',
  'a-d': 'A&D',
  sports: 'Sports',
  systems: 'Systems',
}

const COMPANY_LABEL_LONG: Record<ResourceCompany, string> = {
  cruda: 'CRUDA',
  'a-d': 'Architecture & Design',
  sports: 'Sports',
  systems: 'CRUDA Systems',
}

/* Brief v10 T2 — filtro de idioma. Labels visibles siguen el idioma
   de la etiqueta ("Español" / "English"), no el idioma del navegador. */
const LANGUAGE_LABEL: Record<ResourceLanguage, string> = {
  es: 'Español',
  en: 'English',
}

/* Brief v8 T3 — retag de ensayos existentes.
   Los dos ensayos anteriores estaban etiquetados como 'a-d' pero
   ninguno lo era: uno es una anécdota sobre confianza (categoría
   Trust), el otro sobre libertad de un founder (Business/Freedom).
   Ambos son pensamiento de la casa madre, no del vertical A&D. */
const ESSAY_COMPANY: Record<string, ResourceCompany> = {
  'el-ocho': 'cruda',
  'founder-worth-70-million': 'cruda',
  'narradores-peligrosos': 'cruda',
  'siglas-para-no-decir-gente': 'cruda',
  'tercer-lugar': 'cruda',
  'third-place': 'cruda',
}

/* Brief v4 UX §5 — rutas nuevas. Toda pieza vive bajo /resources/.
   Los slugs de la carpeta content no cambian; solo el prefijo público. */
const essayResources: Resource[] = allEssays.map((e) => ({
  slug: e.slug,
  href: `/resources/essays/${e.slug}`,
  title: e.title,
  excerpt: e.answerCapsule,
  kind: e.contentType === 'Conversation' ? 'conversation' : 'essay',
  company: ESSAY_COMPANY[e.slug] ?? 'cruda',
  language: (e.language ?? 'en') as ResourceLanguage,
  publishedAt: e.publishedAt,
  canonicalPieceId: e.alternates?.en ?? e.slug,
}))

const caseStudyResources: Resource[] = allClients.map((c) => ({
  slug: c.slug,
  href: `/resources/case-studies/${c.slug}`,
  title: c.title,
  excerpt: c.answerCapsule,
  kind: 'case-study',
  company: VERTICAL_TO_COMPANY[c.vertical] ?? 'a-d',
  language: 'en',
  publishedAt: c.publishedAt || '',
  canonicalPieceId: c.slug,
}))

/* Newest first. Empty publishedAt goes last. */
export const allResources: Resource[] = [
  ...essayResources,
  ...caseStudyResources,
].sort((a, b) => {
  if (!a.publishedAt && !b.publishedAt) return 0
  if (!a.publishedAt) return 1
  if (!b.publishedAt) return -1
  return b.publishedAt.localeCompare(a.publishedAt)
})

export function kindLabel(k: ResourceKind) {
  return KIND_LABEL[k]
}
export function companyLabel(c: ResourceCompany) {
  return COMPANY_LABEL[c]
}
export function companyLabelLong(c: ResourceCompany) {
  return COMPANY_LABEL_LONG[c]
}
export function languageLabel(l: ResourceLanguage) {
  return LANGUAGE_LABEL[l]
}

/* Count per tag — used to build chips from data. If a value has zero
   items it doesn't appear at all. */
/* Brief v4 UX §4.6 — un ensayo bilingüe es UNA pieza en la biblioteca.
   Deduplica por canonicalPieceId, prefiriendo la versión que matchea
   `preferredLang`. Si ninguna coincide, cae a la primera disponible.
   Los case studies (sin traducciones) pasan sin cambio. */
export function dedupeByPiece(
  items: Resource[],
  preferredLang: ResourceLanguage = 'en',
): Resource[] {
  const groups = new Map<string, Resource[]>()
  for (const r of items) {
    const g = groups.get(r.canonicalPieceId) ?? []
    g.push(r)
    groups.set(r.canonicalPieceId, g)
  }
  const out: Resource[] = []
  /* Recorremos items en orden para preservar el sort original. */
  const seen = new Set<string>()
  for (const r of items) {
    if (seen.has(r.canonicalPieceId)) continue
    seen.add(r.canonicalPieceId)
    const group = groups.get(r.canonicalPieceId)!
    const pick = group.find((x) => x.language === preferredLang) ?? group[0]
    out.push(pick)
  }
  return out
}

export function countByKind(items: Resource[]): Record<ResourceKind, number> {
  const acc: Record<ResourceKind, number> = {
    essay: 0,
    conversation: 0,
    playbook: 0,
    'case-study': 0,
  }
  for (const r of items) acc[r.kind] += 1
  return acc
}

export function countByCompany(
  items: Resource[],
): Record<ResourceCompany, number> {
  const acc: Record<ResourceCompany, number> = {
    cruda: 0,
    'a-d': 0,
    sports: 0,
    'systems': 0,
  }
  for (const r of items) acc[r.company] += 1
  return acc
}

/* Brief v10 T2 — conteo por idioma para armar el eje. Los chips se
   construyen desde este map: un idioma con 0 piezas no aparece. */
export function countByLanguage(
  items: Resource[],
): Record<ResourceLanguage, number> {
  const acc: Record<ResourceLanguage, number> = { en: 0, es: 0 }
  for (const r of items) acc[r.language] += 1
  return acc
}

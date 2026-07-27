/* Unified library — brief v5 T7.

   Merges essays + case studies into a single flat list with two
   independent tags: kind (essay · conversation · playbook · case-study)
   and company (a-d · sports · ai-concierge).

   The /resources page reads this. Chips are built from the actual
   tags present — never hardcoded. Sports, Conversations and Playbooks
   just don't render until content of that kind lands. */

import { allEssays } from '@/content/essays'
import { allClients } from '@/content/clients'

export type ResourceKind =
  | 'essay'
  | 'conversation'
  | 'playbook'
  | 'case-study'

export type ResourceCompany = 'a-d' | 'sports' | 'ai-concierge'

export type Resource = {
  slug: string
  href: string
  title: string
  excerpt: string
  kind: ResourceKind
  company: ResourceCompany
  publishedAt: string
}

const VERTICAL_TO_COMPANY: Record<string, ResourceCompany> = {
  'Architecture & Design': 'a-d',
  Sports: 'sports',
  'AI Concierge': 'ai-concierge',
}

const KIND_LABEL: Record<ResourceKind, string> = {
  essay: 'Essay',
  conversation: 'Conversation',
  playbook: 'Playbook',
  'case-study': 'Case study',
}

const COMPANY_LABEL: Record<ResourceCompany, string> = {
  'a-d': 'A&D',
  sports: 'Sports',
  'ai-concierge': 'AI Concierge',
}

const COMPANY_LABEL_LONG: Record<ResourceCompany, string> = {
  'a-d': 'Architecture & Design',
  sports: 'Sports',
  'ai-concierge': 'AI Concierge',
}

/* Essay company assignment. Both live essays sit under A&D:
   - El Ocho: cybercafé founder story, primary reader is A&D founders.
   - $70M Founder: US construction CEO — literal A&D vertical fit.
   When conversations land they'll carry their own company field. */
const ESSAY_COMPANY: Record<string, ResourceCompany> = {
  'el-ocho': 'a-d',
  'founder-worth-70-million': 'a-d',
}

const essayResources: Resource[] = allEssays.map((e) => ({
  slug: e.slug,
  href: `/thinking/${e.slug}`,
  title: e.title,
  excerpt: e.answerCapsule,
  kind: e.contentType === 'Conversation' ? 'conversation' : 'essay',
  company: ESSAY_COMPANY[e.slug] ?? 'a-d',
  publishedAt: e.publishedAt,
}))

const caseStudyResources: Resource[] = allClients.map((c) => ({
  slug: c.slug,
  href: `/clients/${c.slug}`,
  title: c.title,
  excerpt: c.answerCapsule,
  kind: 'case-study',
  company: VERTICAL_TO_COMPANY[c.vertical] ?? 'a-d',
  publishedAt: c.publishedAt || '',
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

/* Count per tag — used to build chips from data. If a value has zero
   items it doesn't appear at all. */
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
    'a-d': 0,
    sports: 0,
    'ai-concierge': 0,
  }
  for (const r of items) acc[r.company] += 1
  return acc
}

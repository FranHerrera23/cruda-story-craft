/* F18.1 · fuente única de precios de puerta.
   Usado por: /services (índice y planos), home WHAT WE DO, cierres de
   puerta en los case studies (F18.1-e), llms.txt, schema.
   Cero copy duplicado. */

import type { Door } from '@/content/work/types'

export type DoorSpec = {
  key: Door
  n: string
  label: string
  descriptor: string
  price: string
  href: string
}

export const DOORS: readonly DoorSpec[] = [
  {
    key: 'translated',
    n: '01',
    label: 'Translated',
    descriptor:
      'Twelve weeks to build the system a company uses to say what it is.',
    price: '12 weeks · $19,500',
    href: '/services#translated',
  },
  {
    key: 'transmission',
    n: '02',
    label: 'Transmission',
    descriptor:
      'The system, run every week, so it stops depending on the founder.',
    price: 'from $2,200 / month',
    href: '/services#transmission',
  },
  {
    key: 'interpreted',
    n: '03',
    label: 'Interpreted',
    descriptor:
      'Two sides with capital and capability, made legible to each other.',
    price: '12 weeks · from $55,000',
    href: '/services#interpreted',
  },
  {
    key: 'read',
    n: '04',
    label: 'The Read',
    descriptor: 'One session. What an outsider sees, said plainly.',
    price: 'per session · On request',
    href: '/services#read',
  },
] as const

export function doorSpec(key: Door): DoorSpec {
  return DOORS.find(d => d.key === key)!
}

const AXIS_LABEL: Record<'inward' | 'outward' | 'across', string> = {
  inward: 'Inward',
  outward: 'Outward',
  across: 'Across',
}

export function axisLabel(axis: 'inward' | 'outward' | 'across') {
  return AXIS_LABEL[axis]
}

/* Enmienda 7 · costos externos · fuente única · aparece en /services
   (índice + planos Translated y Transmission), /process (bajo la
   lista de entregables), cierres de puerta en case studies, y en
   llms.txt (línea de precios). Ningún texto del sitio sugiere que
   un fee incluye ad spend, media, herramientas o proveedores. */
export const EXTERNAL_COSTS_NOTE =
  'Fees cover our work. Ad spend and any third-party costs are paid by the client directly.'

/* Enmienda 5-D · Translated · una sola definición de entregables ·
   consumida por /services (cuerpo del plano) y /process. */
export const TRANSLATED_DELIVERABLES = {
  narrative: [
    'narrative platform',
    'founder manuscript',
    'four content pillars',
    'working cadence',
  ] as readonly string[],
  demand: [
    'site',
    'CRM',
    'workflows',
    'list',
    'booking',
    'GTM',
    'outreach',
    'paid',
  ] as readonly string[],
} as const

/* Enmienda 5-D · fee de Translated como string único. */
export const TRANSLATED_FEE = {
  duration: 'Twelve weeks',
  amount: '$19,500',
  terms: 'Flat · 50% to begin, 50% at month three',
} as const

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

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

/* F57 §3 (Fran 6-oct) · Second Look pasa a ser la primera entrada
   (la del flujo recomendado). En el slot del número va "Start here"
   con el mismo estilo naranja. Translated/Transmission/Interpreted
   quedan como 01/02/03. */
export const DOORS: readonly DoorSpec[] = [
  {
    key: 'read',
    n: 'Start here',
    label: 'Second Look',
    descriptor:
      'Two conversations and a written diagnosis.',
    price: 'two conversations · $950',
    href: '/services#second-look',
  },
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
      'We run the system every week, so it stops depending on the founder.',
    price: 'from $2,500 / month',
    href: '/services#transmission',
  },
  {
    key: 'interpreted',
    n: '03',
    label: 'Interpreted',
    descriptor:
      'For companies whose owners, teams and buyers come from different cultures.',
    price: '12 weeks · from $55,000',
    href: '/services#interpreted',
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

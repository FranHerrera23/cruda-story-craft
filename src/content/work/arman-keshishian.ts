import type { Work } from './types'

/* Arman · BAUHOME · sin página propia · sólo entra a SELECTED WORK
   como índice (F18.3 · <div>, sin proof, sin chip). */

export const armanKeshishian: Work = {
  slug: 'arman-keshishian',
  order: 8,
  title: 'Arman · BAUHOME',
  metaTitle: 'Arman · BAUHOME — CRUDA',
  dek: 'Residential · Jacksonville',
  /* Enmienda 6-A · display "Arman · BAUHOME" en SELECTED WORK. */
  client: {
    name: 'Arman · BAUHOME',
    role: 'Founder',
    company: 'BAUHOME',
  },
  confidential: false,
  place: {
    to: 'Sherman Oaks, Los Angeles, CA',
    city: 'Los Angeles',
    country: 'United States',
  },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'translated' },
  /* Enmienda 6-A · Arman sin chip hasta que Fran lo defina. */
  hideChip: true,
  axis: 'outward',
  capsule: [],
  takeaways: [],
  metrics: [],
  sections: [],
}

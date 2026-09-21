import type { Work } from './types'

/* Jack Yeager · sin página propia · sólo entra a SELECTED WORK como
   índice (F18.3 · <div>, sin proof, sin chip). Se conserva por si
   Fran habilita la página en una tanda posterior. */

export const jackYeager: Work = {
  slug: 'jack-yeager',
  /* Enmienda 6-A · Jack se queda en SELECTED WORK · índice · sin
     página · chips Translated + Transmission (Translated primero). */
  order: 7,
  title: 'Jack Yeager',
  metaTitle: 'Jack Yeager — CRUDA',
  dek: 'Lighting · Midtown Miami',
  client: { name: 'Jack Yeager', role: 'Founder', company: 'Mistiva' },
  confidential: false,
  place: { to: 'Miami, Florida', city: 'Miami', country: 'United States' },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'translated', secondary: 'transmission' },
  axis: 'outward',
  capsule: [],
  takeaways: [],
  metrics: [],
  sections: [],
}

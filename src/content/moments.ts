/* Task 8 — Moment taxonomy. Un solo eje.
   Cada case study lleva UN valor. Renderea como pill bajo el
   one-liner y linkea a /work/{moment}, un índice por momento.

   NO se construyen filtros por sector ni por disciplina. Nueve
   case studies no necesitan dieciocho sectores; filtros a esta
   escala son teatro. */

export const MOMENTS = [
  'market-entry',
  'category-shift',
  'succession',
  'hyperscale',
  'new-entity',
] as const

export type Moment = (typeof MOMENTS)[number]

export const MOMENT_LABEL: Record<Moment, string> = {
  'market-entry': 'Market entry',
  'category-shift': 'Category shift',
  succession: 'Succession',
  hyperscale: 'Hyperscale',
  'new-entity': 'New entity',
}

/* Descripción one-line de cada momento, usada como subtitle del
   índice /work/{moment} y como meta description. */
export const MOMENT_DESC: Record<Moment, string> = {
  'market-entry':
    'Companies with decades of local reputation entering a market that has never heard of them.',
  'category-shift':
    'Founders and companies redefining what category they belong to, not just how they compete inside it.',
  succession:
    'Businesses handing the work to whoever comes next — while the story stays.',
  hyperscale:
    'Companies that grew faster than their own explanation of themselves.',
  'new-entity':
    'A founder building a new company that must not read as an extension of the one they already built.',
}

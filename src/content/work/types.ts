/* F18.0 · 21-sep · autónomo · fuente única de datos por caso.

   content/work/[slug].ts alimenta TODO: página, card de home, card
   de /thinking, Next case, More from, schema, sitemap, og, llms.txt.
   Cero strings de cliente duplicados en componentes. */

export type Door =
  | 'translated'
  | 'transmission'
  | 'interpreted'
  | 'read'

export type Axis = 'inward' | 'outward' | 'across'

export type ProofMetric = {
  type: 'metric'
  value: string
  label: string
  period: string
}
export type ProofChange = {
  type: 'change'
  text: string
}
export type Proof = ProofMetric | ProofChange

export type WorkPlace = {
  from?: string
  to: string
  city: string
  country: string
}

export type WorkPeriod = {
  start: string
  end: string
}

export type WorkClient = {
  name: string
  role: string
  company: string
}

export type WorkMetric = {
  value: string
  label: string
  /* Ledger 24: cada cifra publicada lleva fuente. Sin source o
     period, no se publica. */
  source: string
  period: string
  /* F26 molde · número de fuente en el pie de la sección
     "What changed". Cuando se usa `metricGroups`. Opcional. */
  n?: number
}

/* F26 §A.7 · cifras agrupadas por bloque. Todos opcionales. Los
   grupos vacíos no se renderizan. Cuando el caso trae
   `metricGroups`, la sección "What changed" se pinta con este
   layout: rótulo del grupo · fila de cifras naranjas (business,
   reach, mediaValue) o ink (context) · label/meta abajo · lista
   de fuentes numeradas al pie. */
export type WorkMetricGroups = {
  business?: WorkMetric[]
  reach?: WorkMetric[]
  mediaValue?: WorkMetric[]
  context?: WorkMetric[]
}

/* F26 §A.5 · fila del bloque WHAT WE BUILT. Reemplaza al `built`
   plano cuando el caso está en el molde F26. */
export type WorkBuiltRow = {
  name: string
  description: string
}

/* F26 §A.8 · fila del bloque ROOMS IT OPENED. */
export type WorkRoom = {
  year?: string
  name: string
  description: string
  image?: string
  /* F26 §G · links opcionales que salen debajo del texto, con el
     mismo estilo que "Book the call →". Se abren en pestaña nueva
     (target="_blank" rel="noopener"). */
  links?: Array<{ label: string; href: string }>
}

export type WorkSection = {
  h2: string
  body: string[]
  pull?: string
  blocks?: WorkBlock[]
}

export type WorkImageBlock = {
  kind: 'image'
  src: string
  caption?: string
  aspect?: 'p' | 'l' | 's'
}
export type WorkTestimonialBlock = {
  kind: 'testimonial'
  quote: string
  cite: string
}
export type WorkPublishedBlock = {
  kind: 'published'
  outlet: string
  headline: string
  href?: string
  when?: string
}
export type WorkListBlock = {
  kind: 'list'
  label?: string
  items: string[]
}
export type WorkBlock =
  | WorkImageBlock
  | WorkTestimonialBlock
  | WorkPublishedBlock
  | WorkListBlock

export type WorkFaq = { q: string; a: string }

export type WorkMoreFrom = {
  slug: string  // href
  name: string
  meta: string
  img?: string
}

export type Work = {
  slug: string
  /* Orden en SELECTED WORK. 1-indexed. */
  order: number
  /* Titular de resultado · h1 del caso. */
  title: string
  /* ≤60 chars · <title> del head. */
  metaTitle: string
  /* 1 frase · = meta description · = bajada del caso · = texto de
     card · ≤155 chars · única en el sitio. */
  dek: string

  client: WorkClient
  confidential: boolean
  place: WorkPlace
  period: WorkPeriod
  via: string

  door: { primary: Door; secondary?: Door }
  axis: Axis
  moment?: string

  image?: string
  /* F23-3 §4.1 · formato del hero. `portrait` para retratos (4:5,
     5/12 cols) · `landscape` para paisaje o producto (16:9, ancho
     completo). Default: landscape. */
  heroFormat?: 'portrait' | 'landscape'
  /* F23-3 §4.1 · object-position para retratos. Igual criterio que
     Selected Work. Ignorado en landscape. */
  heroObjectPosition?: string
  proof?: Proof

  capsule: string[]        // 2–3 párrafos
  takeaways: string[]      // 3
  metrics: WorkMetric[]    // ≤4

  sections: WorkSection[]

  built?: string[] | WorkBuiltRow[]
  change?: string[]
  credit?: string
  faq?: WorkFaq[]
  moreFrom?: WorkMoreFrom[]
  /* slug del next case en el orden de SELECTED WORK. */
  next?: string

  /* Testimonio principal (serif) · opcional. */
  testimonial?: { quote: string; cite: string }

  /* F26 §A · molde nuevo · todo opcional. Un caso migrado al molde
     define `summary`, `byline`, `builtRows` (en vez de `built`
     plano), `metricGroups` (en vez de `metrics` plano en la
     sección "What changed"), `sources` (numeradas) y `rooms`.
     Los casos que no lo definan siguen renderizando el layout
     previo. */
  summary?: string
  byline?: string
  metricGroups?: WorkMetricGroups
  sources?: string[]
  rooms?: WorkRoom[]
  /* Línea corta debajo de "What changed" antes de las cifras. */
  changePreamble?: string
  /* F26 §A.7 · h2 del bloque WHAT CHANGED. Cambia por caso. */
  changeH2?: string
  /* F26 §A.8 · h2 del bloque ROOMS IT OPENED. */
  roomsH2?: string
}

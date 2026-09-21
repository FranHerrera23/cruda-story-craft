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
  /* Enmienda 6-A · Arman se queda en SELECTED WORK sin chip hasta
     que Fran lo defina. Cuando `hideChip` está en true, la card /
     fila de índice no renderiza chips. */
  hideChip?: boolean
  axis: Axis
  moment?: string

  image?: string
  /* Enmienda 6-B · tile tipográfico para cards sin foto disponible.
     Renderiza en la grilla sin `<img>`: fondo --black, `primary`
     como cifra naranja Archivo 600 y `secondary` como línea de
     rótulo blanco. Alternativa a `image` cuando no hay retrato. */
  cardTile?: {
    primary: string
    secondary: string
  }
  proof?: Proof

  capsule: string[]        // 2–3 párrafos
  takeaways: string[]      // 3
  metrics: WorkMetric[]    // ≤4

  sections: WorkSection[]

  built?: string[]
  change?: string[]
  credit?: string
  faq?: WorkFaq[]
  moreFrom?: WorkMoreFrom[]
  /* slug del next case en el orden de SELECTED WORK. */
  next?: string

  /* Testimonio principal (serif) · opcional. */
  testimonial?: { quote: string; cite: string }
}

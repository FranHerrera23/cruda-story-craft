/* Task 11 — sistema de bloques para case studies.
   Contrato de datos. Cada case study declara qué bloques usa y en
   qué orden; el compositor mapea `type` → componente y renderiza.
   Sin bloques hardcodeados por caso, sin condicionales por slug. */

import type { Moment } from '@/content/moments'

/* Identidad del cliente — tres valores, inyectados como CSS custom
   properties (--c-1, --c-2, --c-type) en el contenedor del caso.
   El molde no cambia; cambia de color. Casos sin identidad (Girish,
   confidencial): c1 cae a --black, c2 a --ink, type a --g. */
export type Identity = {
  c1: string
  c2: string
  type: string
}

export type Fact = {
  label: string
  value: string
}

export type Credit = {
  role: string
  name: string
}

export type Credits = {
  facts: Fact[]
  attribution: string
}

/* Bloques individuales — discriminados por `type`.
   Punto 3 del orden: B1 B2 B3 B4 B5 B11 B12 primero.
   El resto (B6 B7 B8 B9 B10 B13 B14 + slab modifier) se agrega
   en la siguiente iteración. `slab` va como wrapping para B4/B8;
   se declara acá para que el compositor lo omita+loguée si aparece
   antes de estar implementado. */
export type Block =
  | { type: 'head'; title: string; oneLiner: string; facts: Fact[] }
  | { type: 'lead'; asset: MediaAsset }
  | { type: 'band'; asset: MediaAsset; caption?: string; groups: ProseGroup[] }
  | { type: 'prose'; label?: string; paragraphs: string[] }
  | { type: 'pull'; quote: string }
  | { type: 'credits'; facts: Fact[]; attribution: string; id?: string }
  | { type: 'next'; slug: string; label: string; oneLiner: string }
  /* Placeholders declarados — el compositor los omite y loguea hasta
     que existan. Ver §3 del spec. */
  | { type: 'pair'; assets: [MediaAsset, MediaAsset] }
  | { type: 'bleed'; asset: MediaAsset }
  | { type: 'voice'; quote: string; attribution: string }
  | { type: 'figures'; primary: Figure; support: Figure[] }
  | {
      type: 'built'
      built: string[]
      changes: string[]
    }
  | { type: 'passages'; paragraphs: string[]; archive?: string[] }
  | { type: 'system'; cells: SystemCell[] }
  | { type: 'slab'; tone: 'c1' | 'c2'; children: Block[] }

export type MediaAsset = {
  src?: string
  alt?: string
  /* Cuando el asset no existe todavía, el slot renderiza un
     placeholder con estos datos. Ver §6. */
  slotName: string
  slotSpec: string
}

export type ProseGroup = {
  label: string
  paragraphs: string[]
}

export type Figure = {
  value: string
  label: string
}

export type SystemCell = {
  kind: 'swatch' | 'type' | 'slot'
  wide?: boolean
  // Union of shape-specific fields, kept loose intentionally.
  payload: Record<string, string>
}

/* Contrato principal — reemplaza al CaseStudy legacy cuando se
   migren los cinco casos existentes (paso 5). Por ahora corren
   ambos en paralelo. */
export type CaseStudyV2 = {
  slug: string
  title: string
  oneLiner: string
  moment: Moment
  identity?: Identity
  blocks: Block[]
  credits: Credits
  next: { slug: string; label: string; oneLiner: string }
}

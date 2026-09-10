/* Task 11 — sistema de bloques para case studies.
   Contrato de datos. Cada case study declara qué bloques usa y en
   qué orden; el compositor mapea `type` → componente y renderiza.
   Sin bloques hardcodeados por caso, sin condicionales por slug. */

import type { Moment } from '@/content/moments'

/* Identidad del cliente — tres valores obligatorios, inyectados
   como CSS custom properties (--c-1, --c-2, --c-type) en el
   contenedor del caso. El molde no cambia; cambia de color.
   Casos sin identidad (Girish, confidencial): c1 cae a --black,
   c2 a --ink, type a --g.

   `type` es una CLAVE del manifest en fonts.ts (ej. 'montserrat').
   El compositor resuelve la clave → CSS variable. Si la clave no
   existe, cae a --g y loguea en dev.

   `head` es OPCIONAL — override de estilo del H1 del head para
   casos con display display-typography particular (INOUT usa
   weight 200 + tracking .18em). Cuando no se declara, el H1 usa
   los defaults de case-blocks.css (weight 700, tracking tight,
   sizing normal), que sirven para MTC y Girish. */
export type Identity = {
  c1: string
  c2: string
  type: string
  head?: {
    weight?: number         // default 700
    tracking?: string       // default '-.03em'
    size?: string           // default clamp(38px, 6vw, 84px)
    boldWeight?: number     // <b> dentro del H1. default 700
    boldTracking?: string   // default 'inherit'
  }
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
  | {
      type: 'head'
      title: string
      oneLiner: string
      tags?: string[]  // texto plano separado por punto medio, no links
      facts: Fact[]
    }
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
  | { type: 'voice'; label?: string; quote: string; attribution: string }
  /* B9 · figures — lista plana. El primer item es el que "manda"
     y CSS lo hace más grande via :first-child. El resto son support.
     Grid genera N columnas via flex (first 5, rest 3). Sirve para
     2 items (5fr/3fr), 3 (5fr/3fr/3fr, como MTC/Girish), o más. */
  | { type: 'figures'; items: Figure[] }
  | {
      type: 'built'
      built: string[]
      changes: string[]
    }
  | {
      type: 'passages'
      label?: string
      featured: Passage[]
      archive?: Passage[]
    }
  | { type: 'system'; label?: string; cells: SystemCell[] }
  | { type: 'slab'; tone: 'c1' | 'c2'; children: Block[] }
  /* Contenido de slabs — sólo válidos dentro de un slab.
     Cuando el caso no declara identidad, --c-1 y --c-2 caen a
     --black y --ink, y el claim/manifesto salen en negro sin que
     nadie tenga que declararlo. */
  | {
      type: 'claim'
      text: string    // acepta <br> y <b> vía dangerouslySetInnerHTML
      gloss?: string  // línea en el otro idioma / lectura
      note?: string   // nota de contexto abajo
    }
  | {
      type: 'manifesto'
      who: string       // rótulo grande en --c-type
      paragraphs: string[]  // prosa de argumento a la izquierda
      lines: string[]   // lista de líneas de marca a la derecha
                        // (acepta <b>...</b> inline)
    }
  /* SPX · specifiers. Lista jerárquica de entidades con etiqueta
     corta al costado. INOUT: quién especifica el sistema. MTC:
     hitos de AGP. No lleva prosa nuestra — no entra al pool de
     pull quotes. */
  | {
      type: 'spx'
      label?: string
      items: { title: string; meta?: string }[]
      src?: string     // atribución de fuente (MTC)
    }
  /* PILLARS · tres (o N) pilares numerados. Cada uno con número,
     heading display y cuerpo de prosa. Es lo que hace que doce
     piezas se lean como un argumento. Girish. Cuerpo SÍ entra al
     pool de pull quotes (es prosa nuestra). */
  | {
      type: 'pillars'
      label?: string
      items: { number: string; heading: string; body: string }[]
      note?: string
    }
  /* PIECE · una pieza publicada del cliente, recreada entera para
     legibilidad. Columna de texto con apertura display, frases
     bisagra en semibold, y párrafos normales. Sidebar sticky con
     métricas de engagement + fuente + por qué esa pieza importa.

     content.text es COPY DEL AUTOR (Girish's own words). NO entra
     al pool de pull quotes — misma política que passages.excerpt.

     sidebar.why es prosa NUESTRA sobre la pieza. SÍ entra al pool. */
  | {
      type: 'piece'
      label?: string
      content: PieceLine[]
      sidebar: {
        metrics: { value: string; label: string }[]
        src?: string
        why?: string
      }
      note?: string
    }

/* PIECE · líneas de una pieza publicada, tres kinds.
   - open: apertura display de la pieza.
   - turn: frase bisagra en semibold, quiebra el ritmo.
   - p:    párrafo normal.
   El renderer decide clase CSS por kind. */
export type PieceLine =
  | { kind: 'open'; text: string }
  | { kind: 'turn'; text: string }
  | { kind: 'p'; text: string }

/* B13 · Passage. Para casos cuya prueba es escritura publicada.
   Dos densidades:
     - featured: pieza destacada. title + excerpt a tamaño de
                 lectura + venue/year como metadata.
     - archive:  entrada del archivo. title + venue + year, sin
                 excerpt. Densa, listable.
   `url` externo opcional en cualquiera de las dos (link al piece
   publicado). */
export type Passage = {
  title: string
  excerpt?: string
  venue?: string
  year?: string
  url?: string
}

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
  hint?: string  // small note debajo del label — fuente, período
}

/* B14 · celdas del sistema de identidad. Se rendereán (no se
   simulan) — la celda de color muestra la muestra real de --c-1
   o --c-2; la celda tipográfica renderea texto con la face y
   pesos del cliente; los slots reservan lugar para piezas que
   todavía no existen (manual, brochure, morfología).

   `wide: true` hace que la celda ocupe 2 columnas de la grilla
   de 4 (útil para spreads y assets horizontales). */
export type SystemCell =
  | {
      kind: 'swatch'
      wide?: boolean
      tone: 'c1' | 'c2'
      pantone: string
      hex: string
      friendly: string
    }
  | {
      kind: 'type'
      wide?: boolean
      ladder: { weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900; text: string }[]
      note: string
    }
  | {
      kind: 'slot'
      wide?: boolean
      slotName: string
      slotSpec: string
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

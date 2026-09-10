import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Paso 5 del spec — case studies migrados al modelo de bloques.

   Los cinco cases legacy (`src/content/clients/*.ts`) siguen
   corriendo con `CaseStudyLayout`. Cuando cada uno migre a este
   folder, la route /work/[slug] lo detecta acá primero y lo
   renderea con `CaseComposer`; sino cae al legacy.

   Karen, JP, Mike, confidencial y BAUHOME se mantienen legacy
   hasta que Fran los pida en v2.

   Los slots vacíos son intencionales — el array va poblando en
   commits siguientes. */

// eslint-disable-next-line prefer-const
export let allClientsV2: CaseStudyV2[] = []

export function findClientV2(slug: string): CaseStudyV2 | undefined {
  return allClientsV2.find((c) => c.slug === slug)
}

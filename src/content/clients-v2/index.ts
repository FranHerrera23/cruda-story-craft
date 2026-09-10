import type { CaseStudyV2 } from '@/components/case-blocks/types'
import { inout } from './inout'

/* Paso 5 del spec — case studies migrados al modelo de bloques.

   Los cinco cases legacy (`src/content/clients/*.ts`) siguen
   corriendo con `CaseStudyLayout`. La route /work/[slug] intenta
   v2 primero; si no encuentra, cae al legacy.

   Karen, JP, Mike, confidencial y BAUHOME se mantienen legacy
   hasta que Fran los pida en v2. M2Develop no se toca. */

export const allClientsV2: CaseStudyV2[] = [inout]

export function findClientV2(slug: string): CaseStudyV2 | undefined {
  return allClientsV2.find((c) => c.slug === slug)
}

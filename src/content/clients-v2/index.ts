import type { CaseStudyV2 } from '@/components/case-blocks/types'
import { inout } from './inout'
import { mannheimTrading } from './mannheim-trading'
import { girishSehgal } from './girish-sehgal'
/* F23-6 hotfix (Fran, 22-sep): archivo v2 del confidential eliminado.
   Contenía datos identificatorios (fechas específicas, montos en
   libras, ciudad del socio anterior) que la regla de confidencialidad
   prohíbe publicar en cualquier surface del repo, incluso dead code.
   La ruta /work/confidential-fashion-founder resuelve por
   src/content/work/confidential-fashion-founder.ts (findWork gana
   sobre findClientV2), así que retirar el v2 no afecta render.
   No volver a agregarlo. */

/* Paso 5 del spec — case studies migrados al modelo de bloques.

   Los legacy que quedan (`src/content/clients/*.ts`) siguen corriendo
   con `CaseStudyLayout`. La route /work/[slug] intenta v2 primero;
   si no encuentra, cae al legacy.

   Karen, JP y Mike se mantienen legacy hasta que Fran los pida en v2.
   BAUHOME y Mistiva no tienen data. M2Develop no se toca. */

export const allClientsV2: CaseStudyV2[] = [
  inout,
  mannheimTrading,
  girishSehgal,
]

export function findClientV2(slug: string): CaseStudyV2 | undefined {
  return allClientsV2.find((c) => c.slug === slug)
}

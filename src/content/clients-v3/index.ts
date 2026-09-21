import type { CaseStudyData } from '@/components/CaseStudyLayoutV2'
import { karenMannheim } from './karen-mannheim'

/* clients-v3 · F17.1 · 21-sep · autónomo.
   Datos servidos al `CaseStudyLayoutV2` (molde firmado).

   F17.1 sólo incluye Karen. Brief §7 · PEZET, Saadiyat, Girish y
   José esperan capturas re-tomadas. Cuando lleguen, cada uno se
   agrega acá y `/work/[slug]` los resuelve por match antes que
   `findClientV2`. */

export const allClientsV3: CaseStudyData[] = [karenMannheim]

export function findClientV3(slug: string): CaseStudyData | null {
  return allClientsV3.find(c => c.slug === slug) ?? null
}

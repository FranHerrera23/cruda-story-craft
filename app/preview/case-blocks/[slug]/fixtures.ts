import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Task 11 · fixtures del preview route.

   Espacio de trabajo interno para validar el compositor con
   contenido scaffold antes de que un caso migre a data file real.

   Estado actual: vacío. INOUT, MTC y Girish migraron a
   src/content/clients-v2/ y viven en /work/<slug>. passages-lab
   se retiró — Girish tiene passages archive real, que era la
   condición para retirar el scaffold.

   Cuando llegue un nuevo bloque o layout que necesite validación
   antes de comprometerlo a un caso, se agrega acá temporalmente. */

export const previewFixtures: Record<string, CaseStudyV2> = {}

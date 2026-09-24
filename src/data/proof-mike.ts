import type { ProofCell } from '@/components/proof/ProofBlock'

/* F28 §2 · Mike proof · cifras hardcodeadas en el componente.
   El componente MikeProofBlock en /services no lee del molde de
   caso (que sólo existe en F26/F27), así que las cifras viven
   acá con sus fuentes exactas. Cuando se mergee F26 y las
   metricGroups estén en main, podemos migrar a leer desde
   `work/mike-kaeding.metricGroups`. */

export const MIKE_PROOF_CELLS: ProofCell[] = [
  {
    value: '56,000',
    label: 'LinkedIn followers',
    period: 'Jul 2023 — Oct 2024',
    source: 'LinkedIn Analytics, Jul 2023 — Oct 2024',
  },
  {
    value: '2M',
    label: 'impressions a year',
    period: 'Jul 2023 — Oct 2024',
    source: 'LinkedIn Analytics, Jul 2023 — Oct 2024',
  },
  {
    value: '$110,000',
    label: 'a year',
    period: 'what buying that attention would have cost · 2M impressions × $55 CPM',
    source: 'CPMs at the floor of published 2026 benchmarks',
  },
]

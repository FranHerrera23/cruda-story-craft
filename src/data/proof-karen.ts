import type { ProofCell } from '@/components/proof/ProofBlock'

/* F28 §1.1 · Karen proof · cifras hardcodeadas en el componente.
   Idem a proof-mike.ts: HomeKarenProof no lee del data del caso
   porque metricGroups sólo existe en F26. Cuando F26 esté en main,
   migrar a leer desde `work/karen-mannheim.metricGroups`. */

export const KAREN_PROOF_CELLS: ProofCell[] = [
  {
    value: '605,050',
    label: 'LinkedIn impressions',
    period: '365 days · 66% outside her network',
    source: 'LinkedIn Analytics, August 2026',
  },
  {
    value: '96×',
    label: 'more people than follow her',
    period: 'on 6,299 followers',
    source: 'LinkedIn Analytics, August 2026',
  },
  {
    value: '$60,192',
    label: 'a year',
    period: 'what buying that attention would have cost',
    source: 'LinkedIn $33,278 + Instagram $26,914 · CPMs at the floor of published 2026 benchmarks',
  },
]

import { findWork } from '@/content/work'
import ProofBlock from '@/components/proof/ProofBlock'

/* Home · LA PRUEBA · plano negro · F28 §1.1 · 23-sep.

   Delega en ProofBlock. Los datos vienen del molde F26 de Karen
   (`content/work/karen-mannheim.ts`):
   · reach[0]     · 605,050 LinkedIn impressions
   · reach[2]     · 96× more people than follow her
   · mediaValue[2] · $60,192 a year

   Cifras + fuentes viven en el data · sin strings duplicados en
   este componente. */

export default function HomeKarenProof() {
  const w = findWork('karen-mannheim')
  if (!w) return null
  const c1 = w.metricGroups?.reach?.[0]
  const c2 = w.metricGroups?.reach?.[2]
  const c3 = w.metricGroups?.mediaValue?.[2]
  const cells = [c1, c2, c3].filter(Boolean) as {
    value: string
    label: string
    period: string
    source: string
  }[]
  return (
    <ProofBlock
      id="karen-proof"
      eyebrow="What we built for her"
      h2="Thirty-three years of work, in front of the people who specify it."
      body="Karen lights ten to two hundred million dollar homes. Her buyers are developers, architects and high-end builders across the United States, Latin America and Spain — a few thousand people, not a market. The writing went to them."
      cells={cells}
      href={`/work/${w.slug}`}
      linkLabel="Read the case study"
    />
  )
}

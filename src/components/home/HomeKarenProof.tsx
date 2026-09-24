import { findWork } from '@/content/work'
import ProofBlock from '@/components/proof/ProofBlock'
import { KAREN_PROOF_CELLS } from '@/data/proof-karen'

/* Home · LA PRUEBA · plano negro · F28 §1.1 · 23-sep.

   Delega en ProofBlock. Las cifras (605,050 · 96× · $60,192) viven
   en `src/data/proof-karen.ts` porque el molde de caso (metricGroups)
   sólo existe en F26 y f28-proof sale desde main. Cuando F26 esté
   mergeado en main, migrar a leer directamente desde
   `work/karen-mannheim.metricGroups`.

   El link "Read the case study →" apunta a `/work/karen-mannheim`. */

export default function HomeKarenProof() {
  const w = findWork('karen-mannheim')
  const slug = w?.slug ?? 'karen-mannheim'
  return (
    <ProofBlock
      id="karen-proof"
      eyebrow="What we built for her"
      h2="Thirty-three years of work, in front of the people who specify it."
      body="Karen lights homes worth $10 million to $200 million. Her buyers are developers, architects and high-end builders across the United States, Latin America and Spain — a few thousand people, not a market. The writing went to them."
      cells={KAREN_PROOF_CELLS}
      href={`/work/${slug}`}
      linkLabel="Read the case study"
    />
  )
}

import type { Essay } from '@/components/EssayLayout'
import { loadAllEssays } from '@/lib/essay-mold/parse'
import { elOcho } from './el-ocho'
import { founderWorth70Million } from './founder-worth-70-million'
import { narradoresPeligrosos } from './narradores-peligrosos'
import { siglasParaNoDecirGente } from './siglas-para-no-decir-gente'
import { tercerLugar } from './tercer-lugar'
import { thirdPlace } from './third-place'

/* F53 · molde de ensayo · combinación de ensayos migrados a `.md`
   + los `.ts` legacy que todavía no se migraron.
   Larry Holmes es el primero migrado · vive en
   `content/essays/larry-holmes.md`. Los demás se migran a `.md`
   en fases siguientes de F53 sin cambiar copy. */

const MD_ESSAYS: Essay[] = loadAllEssays().map(l => l.data)

const LEGACY_TS_ESSAYS: Essay[] = [
  tercerLugar,
  thirdPlace,
  siglasParaNoDecirGente,
  narradoresPeligrosos,
  elOcho,
  founderWorth70Million,
]

// Newest first. Bilingual pairs (ES + EN) are listed as separate
// entries — they are distinct URLs. The alternates field on each
// links them via hreflang.
export const allEssays: Essay[] = [...MD_ESSAYS, ...LEGACY_TS_ESSAYS].sort(
  (a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''),
)

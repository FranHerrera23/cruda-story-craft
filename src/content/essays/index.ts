import type { Essay } from '@/components/EssayLayout'
import { elOcho } from './el-ocho'
import { founderWorth70Million } from './founder-worth-70-million'
import { narradoresPeligrosos } from './narradores-peligrosos'
import { siglasParaNoDecirGente } from './siglas-para-no-decir-gente'
import { tercerLugar } from './tercer-lugar'
import { thirdPlace } from './third-place'

// Newest first. Bilingual pairs (ES + EN) are listed as separate
// entries — they are distinct URLs. The alternates field on each
// links them via hreflang.
export const allEssays: Essay[] = [
  tercerLugar,
  thirdPlace,
  siglasParaNoDecirGente,
  narradoresPeligrosos,
  elOcho,
  founderWorth70Million,
]

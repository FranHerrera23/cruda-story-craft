import type { Essay } from '@/components/EssayLayout'
import { elOcho } from './el-ocho'
import { founderWorth70Million } from './founder-worth-70-million'
import { narradoresPeligrosos } from './narradores-peligrosos'
import { siglasParaNoDecirGente } from './siglas-para-no-decir-gente'

// Newest first.
export const allEssays: Essay[] = [
  siglasParaNoDecirGente,
  narradoresPeligrosos,
  elOcho,
  founderWorth70Million,
]

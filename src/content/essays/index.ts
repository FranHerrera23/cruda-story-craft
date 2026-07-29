import type { Essay } from '@/components/EssayLayout'
import { elOcho } from './el-ocho'
import { founderWorth70Million } from './founder-worth-70-million'
import { narradoresPeligrosos } from './narradores-peligrosos'

// Newest first.
export const allEssays: Essay[] = [
  narradoresPeligrosos,
  elOcho,
  founderWorth70Million,
]

import type { Essay } from '@/components/EssayLayout'
import { elOcho } from './el-ocho'
import { founderWorth70Million } from './founder-worth-70-million'

// Newest first — order matches the essaysindex.html template.
export const allEssays: Essay[] = [
  elOcho,
  founderWorth70Million,
]

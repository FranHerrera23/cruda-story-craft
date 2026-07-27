import type { CaseStudy } from '@/components/CaseStudyLayout'
import { karenMannheim } from './karen-mannheim'
import { girishSehgal } from './girish-sehgal'
import { juanPabloRomero } from './juan-pablo-romero'
import { mikeKaeding } from './mike-kaeding'
import { nitinPassi } from './nitin-passi'

// Every case study migrated to CaseStudyLayout / AEO mould.
export const allClients: CaseStudy[] = [
  karenMannheim,
  girishSehgal,
  juanPabloRomero,
  mikeKaeding,
  nitinPassi,
]

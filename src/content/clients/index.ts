import type { CaseStudy } from '@/components/CaseStudyLayout'
import { karenMannheim } from './karen-mannheim'
import { girishSehgal } from './girish-sehgal'
import { juanPabloRomero } from './juan-pablo-romero'
import { mikeKaeding } from './mike-kaeding'

/* Legacy CaseStudy list. Los cases migrados a v2 se retiran de acá:
   - inout, mannheim-trading no estuvieron en legacy.
   - girish-sehgal sigue en legacy por compatibilidad (v2 gana en la
     ruta), pero cuando Karen/JP/Mike también migren, este archivo
     puede retirarse entero.
   - confidential migrado a v2 con slug confidential-fashion-founder;
     el file legacy se retiró y el slug viejo tiene 308 redirect. */
export const allClients: CaseStudy[] = [
  karenMannheim,
  girishSehgal,
  juanPabloRomero,
  mikeKaeding,
]

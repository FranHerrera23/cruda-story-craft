import type { WorkCardData } from '@/components/home/SelectedWork'

/* Home · Selected Work — los nueve cases en el orden fijo del brief
   10-sep §2. El orden separa a José de Karen (mismo apellido no
   quedan contiguos), y manda el confidencial al final (única sin
   retrato posible).

   Estado de verificación (brief §5):

   | # | Name                       | Company             | Estado |
   |---|----------------------------|---------------------|--------|
   | 1 | José Mannheim              | Mannheim Trading Corp | Verificado |
   | 2 | Girish Sehgal              | SSMC                | Nombre OK · empresa sin verificar |
   | 3 | Germán Noël                | INOUT               | Verificado (L32) |
   | 4 | JP Romero                  | JURA · Connecting the Dots | Sin verificar |
   | 5 | Mike Kaeding               | Norhart             | Verificado (L7) |
   | 6 | Karen Mannheim             | TRAZZO              | Sin verificar |
   | 7 | Arman Keshishian           | BAUHOME             | Sin verificar |
   | 8 | Jack                       | Mistiva             | Apellido falta |
   | 9 | An on-demand fashion founder | Confidential      | Verificado (L4, L5) |

   Cards con placeholder de imagen: las nueve. Las ocho primeras
   esperan foto (retrato blanco y negro por brief §4). La novena
   —confidencial— no va a tener foto nunca; permanentPlaceholder:true.

   Cards sin route: BAUHOME (Arman) y Mistiva (Jack) no tienen data
   file en clients-v2/ ni clients/. href: undefined → WorkCard
   renderea como <div> no-clickable con data-placeholder-route.
   Cuando migren, se agrega el href acá y la card se vuelve Link
   automáticamente.

   La card del confidencial dice "An on-demand fashion founder", no
   "A $300M fashion founder". La cifra vive adentro del caso, donde
   tiene contexto. (Fran L, 10-sep). */

export const selectedWorkCards: WorkCardData[] = [
  {
    name: 'José Mannheim',
    company: 'Mannheim Trading Corp',
    href: '/work/mannheim-trading',
  },
  {
    name: 'Girish Sehgal',
    company: 'SSMC',
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    companyVerified: false,
  },
  {
    name: 'Germán Noël',
    company: 'INOUT',
    href: '/work/inout',
  },
  {
    name: 'JP Romero',
    company: 'JURA · Connecting the Dots',
    href: '/work/juan-pablo-romero',
    imageSrc: '/juan-pablo-romero.webp',
    nameVerified: false,
    companyVerified: false,
  },
  {
    name: 'Mike Kaeding',
    company: 'Norhart',
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
  },
  {
    name: 'Karen Mannheim',
    company: 'TRAZZO',
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    companyVerified: false,
  },
  {
    name: 'Arman Keshishian',
    company: 'BAUHOME',
    // href intencionalmente omitido — BAUHOME no tiene data ni ruta
    // todavía. WorkCard renderea como <div> no-clickable con
    // data-placeholder-route="true". Se agrega cuando migre.
    nameVerified: false,
    companyVerified: false,
  },
  {
    name: 'Jack',
    company: 'Mistiva',
    // href intencionalmente omitido — mismo motivo que BAUHOME.
    nameVerified: false,        // apellido de Jack falta
    companyVerified: false,
  },
  {
    name: 'An on-demand fashion founder',
    company: 'Confidential',
    href: '/work/confidential-fashion-founder',
    // El único caso con placeholder permanente — no va a tener
    // foto nunca (§6 del brief).
    permanentPlaceholder: true,
  },
]

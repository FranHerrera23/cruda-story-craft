import type { WorkCardData } from '@/components/home/SelectedWork'

/* Home · Selected Work — brief 12-sep §6.3.

   Estructura de cada card:
     nombre    (grot 700 --t-body)
     empresa   (grot 400 --t-body)
     línea     (grot 400 --t-small)

   Regla dura: el bloque de texto va PEGADO a la imagen. Nada de
   nombre arriba, hueco de imagen en el medio y empresa abajo —
   ese patrón hacía que "INOUT" leyera contra "JP Romero" en la
   grilla anterior.

   Orden — los seis con retrato primero, después las tipográficas:
     José · Girish · JP · Mike · Karen · Jack · Germán · Arman · Confidential
   (Jack sube cuando llegue su foto con el re-do; Germán y Arman
   cuando lleguen las suyas.)

   Correcciones §6.3:
     · JURA → JURA PLANK
     · Jack → Jack Yaeger
     · JP tiene DOS empresas: "JURA PLANK · Connecting the Dots".
       El separador se lee como dos, no como marca con bajada.

   draft:true en Germán — INOUT no publica sin su cita. Con el
   flag la card no se renderea; cuando llegue la cita se saca el
   flag y sube al orden con foto.

   Cards sin route (Arman, Jack): href omitido — WorkCard renderea
   como <div> no clickable, sin hover, sin flecha, sin cursor
   pointer (brief §6.3). */

export const selectedWorkCards: WorkCardData[] = [
  {
    name: 'José Mannheim',
    company: 'Mannheim Trading Corp',
    line: 'Founded AGP — glass for Tesla and the Pentagon.',
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
  },
  {
    name: 'Girish Sehgal',
    company: 'SSMC',
    line: "Four Seasons and Taj, then Cleveland Clinic. Now patient experience at the Middle East's largest medical city.",
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    companyVerified: false,
  },
  {
    name: 'JP Romero',
    company: 'JURA PLANK · Connecting the Dots',
    line: 'High-end wood flooring, and a consultancy taking leading Latin American brands into the US.',
    href: '/work/juan-pablo-romero',
    imageSrc: '/juan-pablo-romero.webp',
    nameVerified: false,
    companyVerified: false,
  },
  {
    name: 'Mike Kaeding',
    company: 'Norhart',
    line: '$230M in assets created and 1,000 units delivered, on a mission to halve the cost of building.',
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
  },
  {
    name: 'Karen Mannheim',
    company: 'TRAZZO',
    line: "Latin America's leading lighting designer, on houses up to $200M with Robert A.M. Stern and Oppenheim Architecture.",
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    companyVerified: false,
  },
  {
    name: 'Jack Yaeger',
    company: 'Mistiva',
    line: 'Trained architect, software entrepreneur, M&A CEO. After a seven-figure exit and five years sailing, building a lighting company in Miami.',
    // href intencionalmente omitido — sin caso todavía.
    nameVerified: false,
    companyVerified: false,
  },
  {
    name: 'Germán Noël',
    company: 'INOUT',
    line: "Built one of Argentina's leading glass companies — airports, towers. Then patented a frameless sliding door and started over with it.",
    href: '/work/inout',
    /* §6.3 — INOUT no publica sin la cita de Germán. Card
       oculta hasta que llegue. */
    draft: true,
  },
  {
    name: 'Arman Keshishian',
    company: 'BAUHOME',
    line: "Ran operations at Santa Monica's largest hospital. Now opening a high-end kitchen and bath showroom in Sherman Oaks.",
    // href intencionalmente omitido — sin caso todavía.
    nameVerified: false,
    companyVerified: false,
  },
  {
    name: 'An on-demand fashion founder',
    company: 'Confidential',
    line: 'A $300M fashion company, told without naming it.',
    href: '/work/confidential-fashion-founder',
  },
]

import type { WorkCardData } from '@/components/home/SelectedWork'

/* Home · Selected Work · F19-B.2 (21-sep).

   8 cards en el orden firmado por Fran:
     Karen · Mike · Girish · Jack · José · Germán Noel · Confidential · Arman

   La tercera línea de la card ("scope") pasa de las superficies
   ("NARRATIVE & BRAND STRATEGY · WEB · DEMAND") al servicio:
     Karen        · Translated · Transmission
     Mike         · Transmission
     Girish       · Translated
     Jack         · Translated · Transmission
     José         · Translated
     Germán Noel  · Translated
     Confidential · Interpreted
     Arman        · [] (línea oculta)

   Correcciones de dato F19-B.2:
     · Girish · location Abu Dhabi, UAE (era Dubai).
     · Germán · sin diéresis: "Germán Noel".
     · Jack · "Jack Yeager" (correción firmada).
     · JP Romero no entra a SELECTED WORK (F17 · §7).
     · Retiro de la card "INOUT · Retail systems · Panamá City":
       nunca existió en 577f104. La card "Germán" ya linkea a
       /work/inout con location Salta. */
export const selectedWorkCards: WorkCardData[] = [
  {
    name: 'Karen Mannheim',
    company: 'TRAZZO',
    location: 'Miami, FL',
    line: "Latin America's leading lighting designer, on houses up to $200M with Robert A.M. Stern and Oppenheim Architecture.",
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    companyVerified: false,
    scope: ['TRANSLATED', 'TRANSMISSION'],
  },
  {
    name: 'Mike Kaeding',
    company: 'Norhart',
    location: 'Minneapolis, MN',
    line: '$230M in assets created and 1,000 units delivered, on a mission to halve the cost of building.',
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
    scope: ['TRANSMISSION'],
  },
  {
    name: 'Girish Sehgal',
    company: 'SSMC',
    location: 'Abu Dhabi, UAE',
    line: "Four Seasons and Taj, then Cleveland Clinic. Now patient experience at the Middle East's largest medical city.",
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    companyVerified: false,
    scope: ['TRANSLATED'],
  },
  {
    name: 'Jack Yeager',
    company: 'Mistiva',
    location: 'Miami, FL',
    line: 'Trained architect, software entrepreneur, M&A CEO. After a seven-figure exit and five years sailing, building a lighting company in Miami.',
    /* Sin página · placeholder mantiene alineación. F19-B.2 · chips
       Translated + Transmission. */
    nameVerified: false,
    companyVerified: false,
    placeholder: true,
    scope: ['TRANSLATED', 'TRANSMISSION'],
  },
  {
    name: 'José Mannheim',
    company: 'Mannheim Trading Corp',
    location: 'Panamá City, Panamá',
    line: 'Founded AGP — glass for Tesla and the Pentagon.',
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
    scope: ['TRANSLATED'],
  },
  {
    name: 'Germán Noel',
    company: 'INOUT',
    location: 'Salta, Argentina',
    line: "Built one of Argentina's leading glass companies — airports, towers. Then patented a frameless sliding door and started over with it.",
    href: '/work/inout',
    placeholder: true,
    scope: ['TRANSLATED'],
  },
  {
    name: 'An on-demand fashion founder',
    company: 'Confidential',
    location: 'Dubai, UAE',
    line: 'A $300M fashion company, told without naming it.',
    href: '/work/confidential-fashion-founder',
    scope: ['INTERPRETED'],
  },
  {
    name: 'Arman Keshishian',
    company: 'BAUHOME',
    location: 'Sherman Oaks, Los Angeles, CA',
    line: "Ran operations at Santa Monica's largest hospital. Now opening a high-end kitchen and bath showroom in Sherman Oaks.",
    /* F19-B.2 · sin chip · línea oculta. */
    nameVerified: false,
    companyVerified: false,
    scope: [],
  },
]

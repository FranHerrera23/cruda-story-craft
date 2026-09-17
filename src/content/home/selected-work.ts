import type { WorkCardData } from '@/components/home/SelectedWork'

/* Home · Selected Work — brief 12-sep §6.3 + Fran addendum 15-sep.

   Estructura de cada card:
     nombre    (grot 700 --t-body)
     empresa   (grot 400 --t-body)
     línea     (grot 400 --t-small)

   Regla dura: el bloque de texto va PEGADO a la imagen. Nada de
   nombre arriba, hueco de imagen en el medio y empresa abajo —
   ese patrón hacía que "INOUT" leyera contra "JP Romero" en la
   grilla anterior.

   Orden (nueve cards):
     José · Girish · JP · Mike · Karen · Jack · Germán · Arman ·
     Confidential

   Correcciones §6.3:
     · JURA → JURA PLANK
     · Jack → Jack Yaeger
     · JP tiene DOS empresas: "JURA PLANK · Connecting the Dots".
       El separador se lee como dos, no como marca con bajada.

   Regla nueva (Fran 15-sep · ledger 23) · "sin PÁGINA la card
   sale, sin FOTO la card se queda y la foto se resuelve".
   Aplicada acá:

     · INOUT (Germán) · tiene página (/work/inout). draft:true
       retirado. placeholder:true hasta que llegue la foto.
     · Mistiva (Jack) · no tiene página todavía. draft:true
       retirado igual — Fran decide restaurarla con placeholder.
       href omitido, sin arrow, sin hover — comportamiento
       de "card muerta" del brief §6.3.
     · Arman / BAUHOME · sin foto ni href. Se queda como está
       (decisión de Fran · el retiro arrastra el dek "Eight
       founders"). Sin placeholder, sin cambios en esta pasada.

   Los draft:true anteriores venían de commits previos:
     · ebffebf3 (2026-09-12) · INOUT · "no publica sin su cita"
     · 190dba4f (2026-09-14) · Mistiva · "sin foto la card
       floteaba desalineada"
   Ambos motivos los cubre ahora el placeholder + la regla nueva. */

/* v6 §1 · scope y locación (16-sep).

   Cada card lleva ahora:
     · location   (siempre visible) · ciudad + región, dictada
                                       por Fran.
     · scope      (visible en hover) · array donde scope[0] es
                                       SIEMPRE 'NARRATIVE & BRAND
                                       STRATEGY' (constante del
                                       sistema, no se omite) y
                                       scope[1..] son las
                                       superficies del caso en el
                                       orden dictado en el brief.

   Vocabulario del scope (v6 §1 notas de vocabulario):
     · LinkedIn      → ORGANIC SOCIAL
     · PR strategy   → PR (la distinción va en la página del caso)
     · FOUNDER'S BRAND STORYTELLING no es superficie: vive dentro
       de NARRATIVE & BRAND STRATEGY. */
export const selectedWorkCards: WorkCardData[] = [
  {
    name: 'José Mannheim',
    company: 'Mannheim Trading Corp',
    location: 'Panamá City, Panamá',
    line: 'Founded AGP — glass for Tesla and the Pentagon.',
    href: '/work/mannheim-trading',
    imageSrc: '/jose-mannheim.webp',
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'WEB',
      'DEMAND INFRASTRUCTURE',
    ],
  },
  {
    name: 'Girish Sehgal',
    company: 'SSMC',
    location: 'Abu Dhabi, UAE',
    line: "Four Seasons and Taj, then Cleveland Clinic. Now patient experience at the Middle East's largest medical city.",
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    companyVerified: false,
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'PR',
      'ORGANIC SOCIAL',
    ],
  },
  {
    name: 'JP Romero',
    company: 'JURA PLANK · Connecting the Dots',
    location: 'Jacksonville · Miami, FL',
    line: 'High-end wood flooring, and a consultancy taking leading Latin American brands into the US.',
    href: '/work/juan-pablo-romero',
    imageSrc: '/juan-pablo-romero.webp',
    nameVerified: false,
    companyVerified: false,
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'WEB',
      'DEMAND INFRASTRUCTURE',
    ],
  },
  {
    name: 'Mike Kaeding',
    company: 'Norhart',
    /* Fran dictó (16-sep) "Minneapolis, Minnesota, US". Se
       normaliza a "Minneapolis, MN" para mantener el patrón de
       las otras US cards (Miami · FL, Los Angeles · CA). Si Fran
       quiere el nombre completo, es un cambio de una línea. */
    location: 'Minneapolis, MN',
    line: '$230M in assets created and 1,000 units delivered, on a mission to halve the cost of building.',
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'PR',
      'ORGANIC SOCIAL',
    ],
  },
  {
    name: 'Karen Mannheim',
    company: 'TRAZZO',
    /* v6 F4 · rule 25 normalización (17-sep) · el campo de ciudad
       lleva SÓLO la ciudad. El barrio ("Design District") va
       aparte o no va. Antes se contaba como ciudad propia y le
       rompía el count de rule 25. */
    location: 'Miami, FL',
    line: "Latin America's leading lighting designer, on houses up to $200M with Robert A.M. Stern and Oppenheim Architecture.",
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    companyVerified: false,
    /* Karen es el caso más largo (5 superficies) — el bloque de
       scope de todas las cards reserva altura para este. */
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'ORGANIC SOCIAL',
      'PR',
      'WEB',
      'DEMAND INFRASTRUCTURE',
      'BUSINESS DEVELOPMENT',
    ],
  },
  {
    name: 'Jack Yaeger',
    company: 'Mistiva',
    /* v6 F4 · rule 25 normalización (17-sep) · antes decía
       "Midtown Miami, FL" · el parser lo tomaba como una ciudad
       propia ("Midtown Miami") en vez de contarlo como Miami. */
    location: 'Miami, FL',
    line: 'Trained architect, software entrepreneur, M&A CEO. After a seven-figure exit and five years sailing, building a lighting company in Miami.',
    // href intencionalmente omitido — sin caso todavía.
    nameVerified: false,
    companyVerified: false,
    /* placeholder:true (Fran 15-sep · ledger 23) · el crop del
       sistema 4:5 en gris mantiene la alineación de la grilla sin
       borrar el caso. Sale cuando llegue el retrato. */
    placeholder: true,
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'CONTENT SYSTEM',
      'ORGANIC SOCIAL',
      'PR',
    ],
  },
  {
    name: 'Germán Noël',
    company: 'INOUT',
    location: 'Salta, Argentina',
    line: "Built one of Argentina's leading glass companies — airports, towers. Then patented a frameless sliding door and started over with it.",
    href: '/work/inout',
    /* placeholder:true · mismo tratamiento que Mistiva. INOUT sí
       tiene página (/work/inout) — la card linkea normal, la
       flecha aparece en hover, sólo falta la foto. La foto de las
       puertas frameless llega por push (v6 §10). */
    placeholder: true,
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'WEB',
      'DEMAND INFRASTRUCTURE',
    ],
  },
  {
    name: 'Arman Keshishian',
    company: 'BAUHOME',
    location: 'Sherman Oaks, Los Angeles, CA',
    line: "Ran operations at Santa Monica's largest hospital. Now opening a high-end kitchen and bath showroom in Sherman Oaks.",
    // href intencionalmente omitido — sin caso todavía.
    nameVerified: false,
    companyVerified: false,
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'WEB',
      'DEMAND INFRASTRUCTURE',
    ],
  },
  {
    name: 'An on-demand fashion founder',
    company: 'Confidential',
    location: 'Jebel Ali, Dubai, UAE',
    line: 'A $300M fashion company, told without naming it.',
    href: '/work/confidential-fashion-founder',
    scope: [
      'NARRATIVE & BRAND STRATEGY',
      'ORGANIC SOCIAL',
    ],
  },
]

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
    /* placeholder:true (Fran 15-sep · ledger 23) · el crop del
       sistema 4:5 en gris mantiene la alineación de la grilla sin
       borrar el caso. Sale cuando llegue el retrato. */
    placeholder: true,
  },
  {
    name: 'Germán Noël',
    company: 'INOUT',
    line: "Built one of Argentina's leading glass companies — airports, towers. Then patented a frameless sliding door and started over with it.",
    href: '/work/inout',
    /* placeholder:true · mismo tratamiento que Mistiva. INOUT sí
       tiene página (/work/inout) — la card linkea normal, la
       flecha aparece en hover, sólo falta la foto. */
    placeholder: true,
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

import type { Work } from './types'

/* /work/inout · F30 · 24-sep · Fran.
   Molde F33 (Pentagram) · migra el caso desde el shape v1 al
   molde nuevo. La copy es la existente (F18 →), reordenada al
   flujo F33 (SUMMARY · WHAT WE SAW · IDENTITY SYSTEM · INSIDERS
   · ROOMS · WHAT CHANGED · CREDITS · NEXT).

   Assets faltantes (reportar a Fran para producción):
   Ninguno de los stills descritos en `docs/F25-inout-jose-visuals.md`
   §A1–A9 existe en `public/`. Concretamente:
     A1 · construcción del logo (22X/3X)
     A2 · morfología de dos ejes
     A3 · swatch Pantone 4736 C (#1600FF)
     A4 · swatch Pantone 418 C (#3E4B41)
     A5 · especificación tipográfica (Montserrat 14pt)
     A6 · INSIDERS #01 Salvador Pepi still
     A7 · INSIDERS #02 Sergio Cabrera still
     A8 · INSIDERS #03 Horizontal Arquitectos still
     A9 · Interior El Tipal, Neobox, mayo 2022
   Mientras no estén, las secciones se rinden sólo con texto —
   `rooms[].image` está seteado a lo que se subiría cuando exista;
   el helper `publicFileExists()` del WorkLayout las oculta hasta
   entonces. */

export const inout: Work = {
  slug: 'inout',
  order: 6,
  title:
    'The reliable supplier engineered a frameless system for the tier that buys authorship, not specification.',
  metaTitle: 'INOUT · Frameless sliding doors · CRUDA',
  dek:
    'A brand and narrative system for INOUT, the frameless sliding door line built by the founder of the leading glass manufacturer in northern Argentina. Five years on, INSIDERS is still in production, by the client, without us.',
  client: {
    name: 'Germán Noel',
    role: 'Founder',
    company: 'INOUT · Cristalizando',
  },
  confidential: false,
  place: { to: 'Salta, Argentina', city: 'Salta', country: 'Argentina' },
  /* F30 · el engagement va de 2020 a 2022; INSIDERS sigue corriendo
     al 2026 sin nosotros, ese hito vive en WHAT CHANGED / ROOMS. */
  period: { start: '2020', end: '2022' },
  via: 'CRUDA',
  door: { primary: 'translated' },
  axis: 'outward',
  moment: 'new-entity',
  sector: 'Architecture',

  image: '/inout-sliding-wall.jpg',
  heroFormat: 'landscape',
  heroObjectPosition: 'center 50%',

  summary:
    "From 2020 to 2022, Fran Herrera built the brand and the narrative system for INOUT: a frameless sliding door line engineered by Germán Noel, founder of Cristalizando, the leading glass and high-performance openings manufacturer in northern Argentina. INOUT was quoted project by project, for houses that wanted the wall to disappear. CRUDA built the identity, the language, the format INSIDERS, and the demand infrastructure. Five years on, INSIDERS is still in production — by the client, without us.",
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  capsule: [],

  takeaways: [
    "Being already known was the problem. A supplier's reputation does not travel up to the tier where studios are buying authorship, not specification.",
    "The palette is the brand's argument, resolved as a system: electric blue to cement green, industrial architecture plus sky and nature.",
    "INSIDERS is the format: INOUT never explains its own quality. It hosts the people whose judgment sets it. A system that outlasts the engagement proves more than one that requires us to keep running it.",
  ],

  metrics: [],

  sections: [
    {
      /* §1 · THE CHALLENGE */
      h2: 'A known name, a new line.',
      body: [
        'Germán Noel had built Cristalizando into the leading glass and high-performance openings manufacturer in northern Argentina: an industrial plant, façades for hospitals and towers, contracts won on volume and price.',
        'INOUT was the opposite. A frameless system he engineered himself — 20mm vertical profiles, insulated glass — quoted project by project, for houses that wanted the wall to disappear. The product did not change; the meaning had to.',
        "He was already known. That was the problem. Known as the reliable supplier, and that reputation does not travel up to the tier where studios are buying authorship rather than specification.",
      ],
    },
    {
      /* §2 · IDENTITY SYSTEM (SYSTEM grid F30 · sin stills)
         F30 A1–A5 · los cuatro decisiones + los dos swatches
         viven en el texto porque los archivos no están en public/.
         Cuando lleguen, van como blocks image en esta sección. */
      h2: 'The identity system.',
      body: [
        "The mark is drawn from the product's own geometry — right angles, vertices, intersections. The lines trace an opening and, at the centre, a camera lens: the brand's two axes, contemplation and movement, in a single figure.",
        "The palette runs from electric blue (Pantone 4736 C · #1600FF) to cement green (Pantone 418 C · #3E4B41): industrial architecture plus sky and nature. The palette is the brand's argument, resolved as a system.",
        "Type: Montserrat, tracking 14pt. Construction: modular grid 22X / 3X — logo proportions fixed by multiples of X.",
      ],
    },
    {
      /* §3 · INSIDERS
         F30 A6–A8 · los tres episodios abajo en ROOMS.
         Además el código fotográfico va acá: "toda foto de INOUT se
         toma desde adentro." */
      h2: 'INSIDERS.',
      body: [
        'The format: the brand interviewing the architects who decide what gets built in the region. INOUT never explains its own quality. It hosts the people whose judgment sets it. This is where the method starts.',
        'Every photograph of INOUT is taken from the inside — the same rule the format is built on.',
        'Five years on, INSIDERS is still in production — by the client, without us. A system that outlasts the engagement proves more than one that requires us to keep running it.',
      ],
    },
    {
      /* §4 · WHAT WE BUILT · body vacío es el marker que hace que
         WorkLayout renderee los `built` rows debajo del h2 (mismo
         patrón que confidential-fashion-founder). */
      h2: 'What we built.',
      body: [],
    },
  ],

  built: [
    {
      name: 'NAMING · IDENTITY · VERBAL SYSTEM',
      description:
        'The name, the mark, the palette, the type, and the language INOUT uses to talk about itself in the market and inside its own studio.',
    },
    {
      name: 'INSIDERS',
      description:
        'A long-form interview format hosting the architects who decide what gets built in the region. First three episodes produced with the client; still in production today, by the client, without us.',
    },
    {
      name: 'COMMUNICATIONS + DEMAND INFRASTRUCTURE',
      description:
        'Site, launch communications, and the runbook the sales team uses when a project brief lands on their desk.',
    },
  ],

  /* F33 · WHAT CHANGED · un contexto de dos cifras (context, no
     business/reach/media). El "5 años" es el hecho central del caso
     y va como cifra n1. */
  changeH2: 'A system that outlasted the engagement.',
  changePreamble:
    "Five years after the engagement ended, INOUT still runs the identity, the language, and INSIDERS — the format we built together — without any of it going back through CRUDA. The clearest evidence a system was built rather than delivered.",
  metricGroups: {
    context: [
      {
        value: '5 years',
        label: 'INSIDERS still in production, by the client, without us',
        period: '2021 — 2026',
        source: 'Client, verified',
        n: 1,
      },
      {
        value: '20mm',
        label: 'vertical profiles · frameless system engineered by the client',
        period: '2020',
        source: 'INOUT technical spec',
        n: 2,
      },
    ],
  },
  sources: ['Client, verified · 2021–2026', 'INOUT technical spec · 2020'],

  /* F33 · ROOMS · los tres episodios de INSIDERS.
     F30 A6–A8 · stills no existen. `image` queda apuntando al slug
     que iría; el helper `publicFileExists()` del WorkLayout no la
     va a mostrar hasta que Fran suba los archivos. La fila se
     rinde igual: año, nombre del episodio y sinopsis. */
  rooms: [
    {
      year: '2021',
      name: 'INSIDERS · #01 · Salvador Pepi',
      description:
        'Infinito al Cuadrado. August 2021 — the first episode of the format.',
      image: '/inout/insiders-01-salvador-pepi.jpg',
    },
    {
      year: '2022',
      name: 'INSIDERS · #02 · Sergio Cabrera',
      description:
        'Sergio Cabrera Arquitectos, one of the practices that specify the system.',
      image: '/inout/insiders-02-sergio-cabrera.jpg',
    },
    {
      year: '2022',
      name: 'INSIDERS · #03 · Horizontal Arquitectos',
      description:
        'Horizontal Arquitectos, one of the practices that specify the system.',
      image: '/inout/insiders-03-horizontal-arquitectos.jpg',
    },
  ],
  roomsH2: 'INSIDERS · episodes produced with the client.',

  /* F38 · sin publishedAt fake. El caso original arrancó en 2020;
     no tenemos la fecha exacta del post que anunciaba la marca.
     Sale hasta que Fran la confirme. */

  change: [],
  credit: '',

  faq: [
    {
      q: 'What did CRUDA build for INOUT?',
      a: 'The name, the identity, the language, and the format INSIDERS — the interview series where INOUT hosts the architects who specify the system. Plus the site and the runbook the sales team uses when a project brief lands on their desk.',
    },
    {
      q: 'Who owns INOUT?',
      a: 'Germán Noel, founder of Cristalizando. CRUDA built the naming, the brand, and the formats. The engineering, the patent, and the company are Germán‘s.',
    },
    {
      q: 'Is INSIDERS still in production?',
      a: 'Yes, five years on. INOUT produces the episodes on its own — the same format, the same rule of photography, the same tone.',
    },
    {
      q: 'What is Translated?',
      a: 'A three-month sprint to make the founder’s story make sense to a market that never heard of them. Twelve weeks, $19,500 flat.',
    },
  ],
  moreFrom: [],
  next: 'karen-mannheim',
}

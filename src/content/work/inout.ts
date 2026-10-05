import type { Work } from './types'

/* /work/inout · F30 · Fran 5-oct-2026 · rebuild al molde F33 con
   tres bloques propios del caso.

   Base: branch f30-inout (24-sep) que ya migró el shape v1 al
   molde nuevo. Esta iteración (5-oct) aplica el scope F30 nuevo
   de Fran:
     - h1 = nombre (INOUT) · descriptor en el dek
     - Hero 16:9 · una columna · CREDITS · NEXT CASE solo texto
     - StartHere a /second-look (viene del componente ya migrado)
     - 3 bloques propios: SYSTEM, PHOTO BAND, INSIDERS sobre #1600FF
     - Todo en inglés · "Vos elegís de qué lado estar." queda literal
     - Imágenes: ninguna del design system existe en el repo
       (ver docs/F25-inout-jose-visuals.md A1–A9). Van como
       placeholders · docs/placeholders.md los lista.

   Copy base: F18 (docs/F18-before/inout.md) + inout.ts previo.
   publishedAt sin setear (F38: no fake dates). */

export const inout: Work = {
  slug: 'inout',
  order: 6,
  /* F30 (Fran 5-oct): h1 = nombre de la marca (INOUT). El
     descriptor que WorkLayout pinta debajo del h1 es `title`.
     client.name = brand · client.role mantiene al fundador para
     el bloque de CREDITS y el schema. */
  title: 'Frameless sliding doors.',
  metaTitle: 'INOUT · Frameless sliding doors · CRUDA',
  dek:
    'Brand and narrative system for the frameless sliding door line engineered by the founder of the leading glass manufacturer in northern Argentina. Five years on, INSIDERS is still in production, by the client, without us.',
  client: {
    name: 'INOUT',
    role: 'Germán Noel, Founder',
    company: 'Cristalizando',
  },
  confidential: false,
  place: { to: 'Salta, Argentina', city: 'Salta', country: 'Argentina' },
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
  byline: 'Fran Herrera, Founder, CRUDA · Updated October 2026',

  capsule: [],

  takeaways: [
    "Being already known was the problem. A supplier's reputation does not travel up to the tier where studios are buying authorship, not specification.",
    "The palette is the brand's argument, resolved as a system: electric blue to cement green, industrial architecture plus sky and nature.",
    "INSIDERS is the format: INOUT never explains its own quality. It hosts the people whose judgment sets it. A system that outlasts the engagement proves more than one that requires us to keep running it.",
  ],

  metrics: [],

  sections: [
    {
      /* §1 · THE CHALLENGE · pull-quote verbatim en español */
      h2: 'A known name, a new line.',
      body: [
        'Germán Noel had built Cristalizando into the leading glass and high-performance openings manufacturer in northern Argentina: an industrial plant, façades for hospitals and towers, contracts won on volume and price.',
        'INOUT was the opposite. A frameless system he engineered himself — 20mm vertical profiles, insulated glass — quoted project by project, for houses that wanted the wall to disappear. The product did not change; the meaning had to.',
        "He was already known. That was the problem. Known as the reliable supplier, and that reputation does not travel up to the tier where studios are buying authorship rather than specification.",
      ],
      /* Fran, 5-oct: tal cual, español, no traducir. */
      pull: 'Vos elegís de qué lado estar.',
    },

    {
      /* §2 · SYSTEM · bloque propio del caso con imágenes del
         design system de INOUT (A1–A5 del F25 brief). Ninguno
         existe en public/ · entran como placeholders que
         publicFileExists() oculta en producción. */
      h2: 'The identity system.',
      body: [
        "The mark is drawn from the product's own geometry — right angles, vertices, intersections. The lines trace an opening and, at the centre, a camera lens: the brand's two axes, contemplation and movement, in a single figure.",
        "The palette runs from electric blue (Pantone 4736 C · #1600FF) to cement green (Pantone 418 C · #3E4B41): industrial architecture plus sky and nature. The palette is the brand's argument, resolved as a system.",
        "Type: Montserrat, tracking 14pt. Construction: modular grid 22X / 3X — logo proportions fixed by multiples of X.",
      ],
      blocks: [
        { kind: 'image', src: '/inout/system-01-logo-grid.jpg',       caption: 'Logo construction · modular grid 22X / 3X.', aspect: 's' },
        { kind: 'image', src: '/inout/system-02-two-axes.jpg',        caption: 'Two axes · contemplation and movement.', aspect: 's' },
        { kind: 'image', src: '/inout/system-03-swatch-blue.jpg',     caption: 'Pantone 4736 C · #1600FF · electric blue.', aspect: 's' },
        { kind: 'image', src: '/inout/system-04-swatch-green.jpg',    caption: 'Pantone 418 C · #3E4B41 · cement green.', aspect: 's' },
        { kind: 'image', src: '/inout/system-05-typography.jpg',      caption: 'Montserrat · tracking 14pt.', aspect: 'l' },
      ],
    },

    {
      /* §3 · PHOTO BAND · banda full-width · placeholder del
         interior de un proyecto que usa INOUT (F25 A9 · El Tipal,
         mayo 2022, Neobox). El código fotográfico del caso es
         "toda foto de INOUT se toma desde adentro". */
      h2: 'Taken from the inside.',
      body: [
        'Every photograph of INOUT is taken from the inside — the same rule the format is built on.',
      ],
      blocks: [
        { kind: 'image', src: '/inout/photo-band-el-tipal-neobox.jpg', caption: 'El Tipal · Neobox · May 2022.', aspect: 'l' },
      ],
    },

    {
      /* §4 · INSIDERS · sobre placa #1600FF (electric blue del
         sistema). WorkLayout aplica `bg` + `fg` como inline style
         en .cs-sec. El h2 y el body van en crema contrastando. */
      h2: 'INSIDERS.',
      body: [
        'The format: the brand interviewing the architects who decide what gets built in the region. INOUT never explains its own quality. It hosts the people whose judgment sets it. This is where the method starts.',
        'Five years on, INSIDERS is still in production — by the client, without us. A system that outlasts the engagement proves more than one that requires us to keep running it.',
      ],
      bg: '#1600FF',
      fg: '#EFEBDF',
    },

    {
      /* §5 · WHAT WE BUILT · body vacío · WorkLayout renderea los
         `built` rows debajo del h2 (patrón confidential-fashion-founder). */
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

  change: [],
  credit: 'CRUDA · Fran Herrera, Founder',

  faq: [
    {
      q: 'What did CRUDA build for INOUT?',
      a: 'The name, the identity, the language, and the format INSIDERS — the interview series where INOUT hosts the architects who specify the system. Plus the site and the runbook the sales team uses when a project brief lands on their desk.',
    },
    {
      q: 'Who owns INOUT?',
      a: 'Germán Noel, founder of Cristalizando. CRUDA built the naming, the brand, and the formats. The engineering, the patent, and the company are Germán’s.',
    },
    {
      q: 'Is INSIDERS still active?',
      a: 'Yes. The format is still in production — by the client, without us. The system outlasted the engagement.',
    },
    {
      q: 'What is Translated?',
      a: 'The twelve-week engagement in which CRUDA builds the narrative system a company uses to say what it is: platform, founder manuscript, four content pillars, website, CRM and working cadence. INOUT ran on Translated.',
    },
  ],

  moreFrom: [],
  next: 'karen-mannheim',
}

import type { Work } from './types'

/* /work/mike-kaeding · F27 · 23-sep · Fran §1 (revisión 2).
   Migrada al molde F26. Copy §1.1–§1.10 verbatim; ROOMS no va;
   sin cita; WHAT CHANGED con REACH + MEDIA VALUE + CONTEXT. */

/* Assets de la sección WHAT WE BUILT · Fran manda las imágenes
   `mike-work-1.png` a `mike-work-9.png`. Se listan acá y si algún
   archivo no existe, WorkLayout lo omite silenciosamente (el
   <img> queda con alt vacío; el server sigue emitiendo el <img>
   con broken src). Reportar los que falten. */
const MIKE_WORK_IMAGES = Array.from({ length: 9 }, (_, i) => `/mike-work-${i + 1}.png`)

export const mikeKaeding: Work = {
  slug: 'mike-kaeding',
  order: 2,
  title:
    'Mike Kaeding had a plan to halve the cost of housing. Now 56,000 people follow it.',
  metaTitle: 'Mike Kaeding · Norhart · CRUDA',
  dek:
    "How CRUDA turned Norhart CEO Mike Kaeding's plan to halve the cost of housing into a founder-led voice 56,000 people follow.",
  client: { name: 'Mike Kaeding', role: 'CEO', company: 'Norhart' },
  /* F34 · CREDITS · Team · el sujeto pasa de "CRUDA" a un texto
     que refleja el arco Norhart in-house → CRUDA. */
  creditsTeam: 'Fran Herrera · in-house at Norhart, then CRUDA',
  confidential: false,
  place: {
    from: 'Forest Lake',
    to: 'Minneapolis, Minnesota',
    city: 'Minneapolis',
    country: 'United States',
  },
  period: { start: '2023', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'transmission' },
  axis: 'outward',
  moment: 'category-shift',

  image: '/mike-kaeding.webp',
  heroFormat: 'portrait',
  heroObjectPosition: 'center 30%',

  summary:
    'Mike Kaeding is the CEO of Norhart, a Minnesota company that designs, builds and rents apartments and has created $230M in assets. He runs it with one goal: cut the cost of building housing in half, by making its own parts in its own factory. From 2023 to 2025, Fran Herrera turned that goal into founder-led content under his name: first in-house at Norhart, then, from February 2024, through CRUDA. His LinkedIn reached 2M impressions a year: attention that would have cost $110,000 a year to buy.',
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  capsule: [],

  takeaways: [
    'If your company does more than its story says, the gap costs you the conversations you are never invited to.',
    "A cost model convinces analysts. The founder's reason for it convinces everyone else.",
    'Talking about waste instead of growth is what made a construction CEO sound like a systems thinker.',
  ],

  metrics: [],

  sections: [
    {
      /* §1 · THE CHALLENGE */
      h2: 'A plan the housing debate needed, told one tip at a time.',
      body: [
        "Norhart is a family company. Mike's father, Ed Kaeding, started it building apartments in Forest Lake. Mike, a software engineer by training, took over after his father's death in 2014, with no idea how things were supposed to be done in construction. So he questioned all of it.",
        'In 2021, Norhart opened its own factory to make steel studs and wall panels. Mike says it has cut construction costs by 20 to 30%, and the target is half. It was building a $100M, 328-unit apartment building in Oakdale.',
        'By 2023, Mike had been a source on rent for CBS Minnesota and ABC7 Los Angeles, and a regular guest on industry podcasts. Each appearance explained a tip or a technique. None of them carried the mission, and none of it was his own voice.',
      ],
    },
    {
      /* §2 · WHAT WE SAW */
      h2: 'The mission was a family story before it was a cost model.',
      body: [
        'Most construction CEOs talk about growth. Mike talks about waste: why residential construction is broken, how regulation inflates costs, why building in a factory matters. That is an argument. What makes people believe it is who is making it: an engineer who inherited a company he never asked to run, and decided to fix the industry his father worked in.',
        'So the content leads with Mike, and the cost model comes second. A father, a daughter in a hard hat, a Harvard rejection: the argument about housing travels inside the story.',
      ],
    },
    {
      /* §3 · WHAT WE BUILT · h2 solo · rows abajo + imágenes */
      h2: 'A founder voice with four weekly streams.',
      body: [],
      blocks: MIKE_WORK_IMAGES.map(src => ({
        kind: 'image' as const,
        src,
        aspect: 'l' as const,
      })),
    },
    {
      /* §4 · HOW IT RUNS */
      h2: 'One voice, every week, on every surface.',
      body: [
        "Fran Herrera wrote and published under Mike's name every week on LinkedIn. The same pieces became keynotes, newsletters for Norhart's team, investor decks and talking points for interviews, so the company said one thing everywhere.",
      ],
    },
  ],

  built: [
    {
      name: 'POSITIONING',
      description:
        "The engineer challenging his industry's math: a builder who talks about waste instead of growth.",
    },
    {
      name: 'LEADERSHIP',
      description:
        'Essays on running a company he never asked to run, including conversations with his daughters and what he learned from his wife.',
    },
    {
      name: 'INDUSTRY',
      description: 'What is broken in American housing, and what is possible.',
    },
    {
      name: 'OPERATIONS',
      description:
        'How Norhart actually builds: its own factory, its own parts, its own recruiters, the systems behind the mission.',
    },
    {
      name: 'POLICY',
      description:
        'Housing policy, inflation and regulation, and what builders should do about them.',
    },
    {
      name: 'BEYOND LINKEDIN',
      description:
        'The same material went into keynotes, internal newsletters, investor decks and media interviews.',
    },
  ],

  /* §5 · WHAT CHANGED · h2 · Measured, July 2023 to October 2024. */
  changeH2: 'Measured, July 2023 to October 2024.',
  metricGroups: {
    reach: [
      { value: '56,000', label: 'LinkedIn followers', period: 'Jul 2023 — Oct 2024', source: 'LinkedIn Analytics, Jul 2023 — Oct 2024', n: 1 },
      { value: '2M', label: 'impressions a year', period: 'Jul 2023 — Oct 2024', source: 'LinkedIn Analytics, Jul 2023 — Oct 2024', n: 1 },
    ],
    mediaValue: [
      { value: '$110,000', label: 'a year', period: 'what buying that attention would have cost · 2M impressions × $55 CPM', source: 'CPMs at the floor of published 2026 benchmarks', n: 2 },
    ],
    context: [
      { value: '$230M', label: 'in assets created', period: '', source: 'Norhart', n: 3 },
      { value: '$100M', label: 'Oakdale building · 328 units', period: '', source: 'Norhart, Business Wire, August 2022', n: 4 },
      { value: '20–30%', label: 'lower construction costs, so far', period: '', source: 'Mike Kaeding, Construction Genius podcast', n: 5 },
      { value: '2021', label: "Norhart's own factory opens", period: '', source: 'Forest Lake Times, April 2023', n: 6 },
    ],
  },
  sources: [
    'LinkedIn Analytics, Jul 2023 — Oct 2024',
    'CPMs at the floor of published 2026 benchmarks',
    'Norhart',
    'Norhart, Business Wire, August 2022',
    'Mike Kaeding, Construction Genius podcast',
    'Forest Lake Times, April 2023',
  ],

  change: [],
  credit: '',

  faq: [
    {
      q: 'What did CRUDA build for Norhart?',
      a: "Positioning for Mike as the engineer challenging his industry's math, four weekly content streams under his name, and the material behind his keynotes, newsletters, investor decks and interviews.",
    },
    {
      q: 'What was the LinkedIn work worth in media value?',
      a: "Mike's LinkedIn reached 2M impressions a year. Buying that attention at the floor of published 2026 CPM benchmarks would have cost about $110,000 a year.",
    },
    {
      q: 'What is Transmission?',
      a: 'CRUDA runs the narrative system every week, so it stops depending on the founder. It starts at $2,200 a month.',
    },
  ],
  moreFrom: [],
  next: 'girish-sehgal',
}

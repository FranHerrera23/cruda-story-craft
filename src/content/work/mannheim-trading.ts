import type { Work } from './types'

/* /work/mannheim-trading · F27 · 23-sep · Fran §2.
   Migrada al molde F26. Copy §2 textual, sin invenciones.
   Sin ROOMS, sin HOW IT RUNS, sin cita. */

export const mannheimTrading: Work = {
  slug: 'mannheim-trading',
  order: 5,
  title:
    'José Mannheim co-founded AGP. At eighty, he started a company that sells to its competitors.',
  metaTitle: 'José Mannheim · MTC · CRUDA',
  dek:
    'Narrative and positioning for Mannheim Trading Corp, the new company of AGP founder José Mannheim.',
  client: { name: 'José Mannheim', role: 'Founder', company: 'Mannheim Trading Corp' },
  confidential: false,
  place: { to: 'Panama City, Panama', city: 'Panama City', country: 'Panama' },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'translated' },
  axis: 'across',
  moment: 'new-entity',

  image: '/jose-mannheim.webp',
  heroFormat: 'portrait',
  heroObjectPosition: 'center 20%',

  summary:
    'José Mannheim and his father founded Autoglass Peruana in Lima in 1965. It became AGP Group, whose glass is in four in ten armored vehicles in the world, in 45 countries, for Tesla, the Pentagon and heads of state. Arturo Mannheim runs AGP now. At eighty, José founded Mannheim Trading Corp in Panama City, which supplies critical materials to armored glass manufacturers. In 2025, CRUDA built MTC’s narrative and the voice José publishes under, for the first time in his own name.',
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  capsule: [],

  takeaways: [
    'Sixty years of industry weight only becomes a narrative asset if the person carrying it is willing to sign under his own name.',
    'When your customers compete with the name you are known for, the narrative has to say so first.',
    'A founder who has never wanted to be seen needs a system that lets him publish in prose he recognizes.',
  ],

  metrics: [],

  sections: [
    {
      h2: 'A new company, a sixty-year name, and customers who compete with that name.',
      body: [
        "The Mannheims built their first glass factory in Germany more than a century ago. In the eighties, José and his father took their first patents in bullet-resistant glass. AGP opened in Knoxville, Tennessee, in 1988, supplied Lotus from 2000, made curved armored glass for the Pentagon, glazed 8,950 military vehicles for the United States in 2004, and has supplied Tesla since 2021. It made the glass for John Paul II's Popemobile.",
        'The market noticed. Goldman Sachs took a minority position in 2018, after the group tripled its global revenue in five years. BDT Capital Partners followed in 2021. In 2022, AGP secured a $250M credit line with OMERS and BMO; in 2023, it announced an $800M investment in Mexico.',
        'None of that belongs to MTC. It is a new company with no track record, founded by a man who had never spoken in public, selling to the manufacturers AGP competes with.',
      ],
    },
    {
      h2: 'The credential was José, and he had never signed anything.',
      body: [
        "MTC supplies polycarbonate, polyurethane and other critical materials to armored glass manufacturers, which means it sells to AGP's competitors. Leaning on the AGP name would have been the obvious move, and the wrong one.",
        'The narrative had to acknowledge that arithmetic without becoming defensive about it. Sixty years of industry weight is the credential; MTC is the new company; José signs his own posts.',
      ],
    },
    {
      /* WHAT WE BUILT · h2 solo · las built rows debajo. */
      h2: 'A narrative for MTC, and a voice José recognizes as his.',
      body: [],
    },
  ],

  built: [
    {
      name: 'NARRATIVE PLATFORM',
      description:
        "MTC's position and message for procurement at armored glass manufacturers: a new supplier carrying sixty years of the industry's weight.",
    },
    {
      name: 'FOUNDER VOICE',
      description:
        'José publishing under his own name for the first time, in prose he recognizes as his.',
    },
  ],

  changeH2: 'A man who never wanted to be seen now signs his own name.',
  changePreamble:
    'At eighty, José publishes under his own name, for a company that has to earn its own reputation.',
  metricGroups: {
    context: [
      { value: '4 in 10', label: 'armored vehicles carry AGP glass', period: '', source: 'agpglass.com, 2025', n: 1 },
      { value: '45', label: 'countries', period: '', source: 'agpglass.com, 2025', n: 1 },
      { value: '180+', label: 'certified ballistic formulas', period: '', source: 'agpglass.com, 2025', n: 1 },
      { value: '60 years', label: 'in the industry', period: '', source: 'AGP + MTC history, 1965 — 2025', n: 2 },
    ],
  },
  sources: [
    'agpglass.com, 2025',
    'AGP + MTC history, 1965 — 2025',
  ],

  change: [],
  credit: '',

  faq: [
    {
      q: 'What did CRUDA build for Mannheim Trading Corp?',
      a: 'A narrative platform for MTC and a founder voice that lets José Mannheim publish under his own name for the first time.',
    },
    {
      q: 'Why not lean on the AGP name?',
      a: "MTC sells to AGP's competitors. The narrative acknowledges that openly: José's sixty years are the credential, and MTC earns its own reputation.",
    },
    {
      q: 'What is Translated?',
      a: 'Twelve weeks to build the system a company uses to say what it is. It costs $19,500 flat.',
    },
  ],
  moreFrom: [],
  next: 'confidential-fashion-founder',
}

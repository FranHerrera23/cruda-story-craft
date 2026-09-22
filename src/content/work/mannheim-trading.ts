import type { Work } from './types'

export const mannheimTrading: Work = {
  slug: 'mannheim-trading',
  order: 5,
  title:
    'Narrative and positioning for a new company founded by a man whose name has carried an industry for sixty years — and who has never wanted to be seen',
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
  proof: {
    type: 'change',
    text: 'A founder who publishes under his own name, at eighty.',
  },

  capsule: [
    "The Mannheims built their first glass factory in Germany more than a century ago. In 1965, José Mannheim and his father founded Autoglass Peruana in Lima. In the eighties they took their first patents in bullet-resistant glass and moved into high-value products. That company became AGP Group — glass in four in ten armoured vehicles on earth, in 45 countries, for Tesla, the Pentagon, and heads of state.",
    "In 2018, Goldman Sachs took a minority position. BDT Capital followed in 2021. Arturo Mannheim runs AGP now. The company is in the family's hands and out of José's. Then, at eighty, he started something new.",
    'CRUDA built the narrative platform for Mannheim Trading Corp — a materials supplier to armoured glass manufacturers — that lets José publish under his own name for the first time.',
  ],
  takeaways: [
    'Sixty years of industry weight only becomes a narrative asset if the person carrying it is willing to sign under his own name.',
    "MTC sells to AGP's competitors. The narrative had to acknowledge that arithmetic without becoming defensive about it.",
    'A founder who has never wanted to be seen needs a system that lets him publish in prose he recognises.',
  ],
  metrics: [
    { value: '4 in 10', label: 'armoured vehicles carry AGP glass', source: 'agpglass.com', period: '2025' },
    { value: '45', label: 'countries', source: 'agpglass.com', period: '2025' },
    { value: '180+', label: 'certified ballistic formulas', source: 'agpglass.com', period: '2025' },
    { value: '60 years', label: 'of industry weight, made visible', source: 'AGP + MTC history', period: '1965–2025' },
  ],
  sections: [
    {
      h2: 'What sixty years built.',
      body: [
        'Knoxville, Tennessee · AGP USA opens, 1988. Brazil, Mexico, Asia · expansion, partly through an alliance with North Glass Japan. Lotus UK · key supplier to the sports car division, 2000. The Pentagon · curved armoured glass solutions. 8,950 military vehicles manufactured for the United States, 2004, deployed across the Middle East. Tesla · BMW · Range Rover · Audi · VW · Toyota — OEM programmes. Tesla supplier since 2021.',
        "The \"Cielo\" windshield · the world's first panoramic windshield fully integrated with a car roof, Opel Astra GTC. AGP B.33 ballistic glass · 30% lighter and thinner. The Popemobile · glass for John Paul II. AGP's own materials say heads of state, ministers, soldiers and Popes; José names the one that mattered to him.",
      ],
    },
    {
      h2: 'And what the market did about it.',
      body: [
        'Goldman Sachs Private Capital Investing took a minority position in 2018, after the group tripled its global revenues in five years. BDT Capital Partners followed in 2021, describing the investment as a partnership with the Mannheim family. A $250M credit line with OMERS and BMO in 2022. An $800M investment announced in Mexico in 2023.',
        "Arturo Mannheim runs it now, as CEO and Chairman. The company is in the family's hands and out of José's.",
      ],
    },
    {
      h2: 'The narrative problem.',
      body: [
        "Mannheim Trading Corp supplies polycarbonate, polyurethane and other critical materials to armoured glass manufacturers. Which means it sells to AGP's competitors. The obvious move — leaning on the AGP name — would have been the wrong one.",
        'The narrative had to acknowledge the arithmetic without becoming defensive about it. Sixty years of industry weight is the credential; MTC is the new company; José is signing his own posts.',
      ],
    },
  ],
  built: [
    'Narrative platform for MTC',
    "Founder voice · José publishing under his own name",
    'One-page positioning · MTC vs. AGP arithmetic',
  ],
  change: [
    "A founder who has never wanted to be seen, publishing under his own name at eighty.",
  ],
  credit: 'CRUDA · Fran Herrera, Founder',
  faq: [],
  moreFrom: [],
  next: 'confidential-fashion-founder',
}

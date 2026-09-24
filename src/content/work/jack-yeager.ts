import type { Work } from './types'

/* /work/jack-yeager · F29 · 23-sep · Fran §1.
   Nueva página completa · molde F26.
   Copy §1 verbatim. */

export const jackYeager: Work = {
  slug: 'jack-yeager',
  order: 4,
  title:
    "Jack Yeager rebuilt Mistiva around the one thing competitors can't copy.",
  metaTitle: 'Jack Yeager · Mistiva · CRUDA',
  dek:
    'How CRUDA turned the Mistiva founder story into a Journal that answers customers before they ask.',
  client: { name: 'Jack Yeager', role: 'Founder', company: 'Mistiva' },
  confidential: false,
  place: { to: 'Midtown Miami', city: 'Miami', country: 'United States' },
  period: { start: '2026', end: '2026' },
  via: 'CRUDA',
  door: { primary: 'translated', secondary: 'transmission' },
  axis: 'outward',
  moment: 'category-shift',

  image: '/jack-yeager.jpeg',
  heroFormat: 'portrait',
  heroObjectPosition: 'center 25%',

  summary:
    'Jack Yeager grew up on a farm in Ohio, became the top mortgage-insurance sales rep in the United States, ran company turnarounds and sold a software business for seven figures. After five years sailing, he bought a lighting business, cut its catalogue from 112 products to four and rebuilt it in Miami as Mistiva. In 2026, CRUDA built the research, brand platform and founder narrative behind it, moved the brand toward trade buyers, and set up a Journal that answers customers’ questions before they ask.',
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  capsule: [],

  takeaways: [
    'When every feature you sell can be copied, the only defence left is who made it.',
    'The questions your customers email you are your best content. Answer each one once, in public.',
    'Selling to the trade means writing for the person who specifies light for many homes at once.',
  ],

  metrics: [],

  sections: [
    {
      h2: 'Every feature Mistiva sold could be copied.',
      body: [
        'Mistiva makes ring chandeliers and rechargeable sconces, designed in Miami and sold studio-direct. The ring shape, "rechargeable", "dimmable": a competitor can copy all of it. The luxury catalogues win on range, the copycats on price, and the aggregators outrank everyone in search.',
        "The company also carried a rebrand. It had been House of Interiors, and search engines still split its authority between two names. No editor had written about it yet, so AI assistants cited aggregators instead. Paid social was buying reach, and nothing was turning that reach into demand.",
        "The one story no competitor could copy, the founder's, had never been told. Jack says sharing himself is the hardest thing he does.",
      ],
    },
    {
      h2: 'The only thing no one can copy is the man who cut 112 products to four.',
      body: [
        "The research ran across five lenses: context, culture, category, company and customer. Every one pointed the same way. The middle of the market stopped trusting markup, light became part of how people see themselves, and every product feature can be copied. What can't be copied is authorship: a founder, a short list and a studio in Miami.",
        "The customer isn't an income bracket either. The ring buyer in the mountain states and the sconce buyer in the Sun Belt share one thing: they never accepted what they were handed. Jack's whole life is that refusal.",
      ],
    },
    {
      h2: 'What Mistiva now runs on.',
      body: [],
      blocks: [
        { kind: 'image', src: '/mistiva-journal-list.png', caption: 'The Journal · every question, answered once', aspect: 'l' },
        { kind: 'image', src: '/mistiva-journal-article.png', caption: 'An article opens with the short answer an AI assistant can quote', aspect: 'l' },
      ],
    },
    {
      h2: 'Organic first, paid only behind what already works.',
      body: [
        'Content goes out organically first. Money goes behind a piece only after people have shown, by watching it, that it works. The Journal compounds underneath: each article answers a question once, for every customer and every search that asks it.',
      ],
    },
  ],

  built: [
    { name: 'RESEARCH', description: 'Five lenses on the market, the culture, the category, the company and the customer, each with its data. The conclusion: brand is the only moat.' },
    { name: 'BRAND PLATFORM', description: 'The insight, the enemy, the position and one rule for every piece. The position: the light was always the most important thing in your home; Mistiva makes it the one you chose. The enemy is resignation, "it is what it is". The tone is desire and recognition, never fear.' },
    { name: 'FOUNDER NARRATIVE', description: "Jack's life as a founder letter, \"Making a Life From Scratch\": the Ohio farm, the mowing business that paid for architecture school, the seven-figure exit, five years at sea. Four content pillars grow from it." },
    { name: 'THE JOURNAL', description: 'Every question customers ask before buying, answered once, by Jack: vaulted ceilings, sloped mounts, whether you need an electrician. Each article opens with a short answer an AI assistant can quote, and the team sends the links to clients instead of writing the same email twice.' },
    { name: 'VIDEO FOR CLIENTS', description: "Short videos hosted on Mistiva's own store and sent to clients during the sale." },
    { name: 'TRADE POSITIONING', description: "The site's written and visual narrative rebuilt for the designers, architects and builders who specify light for many homes at once." },
  ],

  changeH2: 'Where it starts from.',
  changePreamble:
    'The engagement began in June 2026. Results will be published here as they are measured.',
  metricGroups: {
    context: [
      { value: '112 → 4', label: 'products in the catalogue', period: '', source: 'Mistiva, 2026', n: 1 },
      { value: '4.9★', label: 'across hundreds of verified reviews', period: '', source: 'Mistiva, 2026', n: 1 },
      { value: '3', label: 'dimming zones in a single ring', period: '', source: 'Mistiva, 2026', n: 1 },
    ],
  },
  sources: ['Mistiva, 2026'],

  change: [],
  credit: '',

  faq: [
    {
      q: 'What did CRUDA build for Mistiva?',
      a: "The research, brand platform and founder narrative, a Journal that answers customers' questions in articles an AI assistant can quote, videos for clients, and a site narrative rebuilt for trade buyers.",
    },
    {
      q: 'What is the Journal?',
      a: "A library of articles, each answering one question customers ask before buying. Every article opens with a short answer, carries Jack's byline and dates, and is structured so search engines and AI assistants can cite it.",
    },
    {
      q: 'Why move Mistiva toward trade buyers?',
      a: "A designer, architect or builder specifies light for many homes. One trade relationship is worth many single purchases, and trade buyers choose on authorship and trust, which competitors can't copy.",
    },
    {
      q: 'What does this cost?',
      a: 'Translated is $19,500 flat for twelve weeks. Transmission starts at $2,200 a month.',
    },
  ],
  moreFrom: [],
  next: 'mannheim-trading',
}

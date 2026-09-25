import type { Work } from './types'

/* /work/girish-sehgal · F27 · 23-sep · Fran §3.
   Migrada al molde F26. Copy §3 textual, sin invenciones.
   Sin ROOMS, sin HOW IT RUNS, sin cita. */

export const girishSehgal: Work = {
  slug: 'girish-sehgal',
  order: 3,
  title:
    "Girish Sehgal took hospitality from Four Seasons to the UAE's biggest medical city.",
  metaTitle: 'Girish Sehgal · Sheikh Shakhbout · CRUDA',
  dek:
    'Twenty-five years of positions turned into a narrative that makes a move from luxury hotels to healthcare read as strategy.',
  client: {
    name: 'Girish Sehgal',
    role: 'Chief Patient Experience Officer',
    company: 'Sheikh Shakhbout Medical City',
  },
  confidential: false,
  place: { to: 'Abu Dhabi', city: 'Abu Dhabi', country: 'United Arab Emirates' },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'translated' },
  axis: 'outward',
  moment: 'new-entity',

  image: '/girish-sehgal.webp',
  heroFormat: 'portrait',
  heroObjectPosition: 'center 15%',

  summary:
    'Girish Sehgal spent twenty-five years in luxury hotels, from Kempinski to Four Seasons, Taj and JW Marriott, across fourteen cities in six countries. Then he became Chief Patient Experience Officer at Sheikh Shakhbout Medical City in Abu Dhabi. On paper, the move read as a career change. In 2025, CRUDA turned twenty-five years of unwritten positions into a narrative that makes it read as strategy.',
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  capsule: [],

  takeaways: [
    'Executive thought leadership formats ask a person to summarize themselves. That produces competent posts nobody remembers.',
    'Girish had positions instead of lessons: stances arrived at over twenty-five years, held against pressure, and never written down until now.',
    'A move from hotels to a hospital reads as strategy once the argument that hospitality is a mindset is on the page.',
  ],

  metrics: [],

  sections: [
    {
      h2: 'A career that read as a detour.',
      body: [
        "Girish started at Kempinski at nineteen, from a town in the Doon Valley. Then Four Seasons, in the Maldives, Boston, Chicago and Toronto. Then Taj, where he took Falaknuma's average stay from under one night to over six. Then JW Marriott Pune, past $24 million in under a year, in a non-metro city.",
        "Then he moved to healthcare. To anyone who didn't know him, a hotel executive running patient experience at a hospital looked like an accident. Nothing online explained the thinking behind the move.",
      ],
    },
    {
      h2: 'He had positions, not lessons.',
      body: [
        'The obvious move was executive thought leadership: lessons, frameworks, takeaways. It would have produced competent posts nobody remembers, because that format asks a person to summarize themselves.',
        "What Girish had instead were positions, arrived at over twenty-five years, held against pressure and never written down. That a security guard nobody notices decides whether forty traumatised patients feel safe. That when you build on someone else's land, money is not enough; you have to invest in their dignity. That being told you are too kind to lead is usually said by people who mistake distance for authority.",
      ],
    },
    {
      h2: 'One page first, then twelve posts.',
      body: [],
    },
  ],

  built: [
    {
      name: 'NARRATIVE BIO',
      description:
        'One page: twenty-five years turned into a position Girish recognizes and can repeat out loud. The executive who builds cultures rather than inherits them, now doing it where the stakes are highest.',
    },
    {
      name: 'KINDNESS IS AN OPERATING STRENGTH',
      description:
        'Presence and access produce better decisions than distance does.',
    },
    {
      name: 'POTENTIAL WHERE OTHERS SEE INCONVENIENCE',
      description:
        'Each piece takes someone written off and shows what was actually there.',
    },
    {
      name: 'HOSPITALITY IS A MINDSET, NOT A DEPARTMENT',
      description:
        'The pillar that makes the move to healthcare inevitable.',
    },
    {
      name: 'TWELVE LINKEDIN POSTS',
      description:
        'Every piece sits on one of the three pillars, so twelve posts read as one argument.',
    },
  ],

  changeH2: 'The move now reads as strategy.',
  changePreamble:
    "A hospitality executive's move to healthcare now reads as a decision, in his own words.",
  metricGroups: {
    reach: [
      { value: '368', label: 'reactions on one post', period: '', source: 'LinkedIn, 2025', n: 1 },
      { value: '170', label: 'comments on one post', period: '', source: 'LinkedIn, 2025', n: 1 },
    ],
    context: [
      { value: '25 years', label: 'in luxury hospitality', period: '', source: 'CV, 2000 — 2025', n: 2 },
      { value: '14 cities', label: 'in six countries', period: '', source: 'CV, 2000 — 2025', n: 2 },
      { value: '#1', label: 'Condé Nast Traveller · Falaknuma', period: '', source: 'Condé Nast Traveller, 2015', n: 3 },
      { value: '$24M', label: 'JW Marriott Pune, in under a year', period: '', source: 'CV, 2000 — 2025', n: 2 },
    ],
  },
  sources: [
    'LinkedIn, 2025',
    'CV, 2000 — 2025',
    'Condé Nast Traveller, 2015',
  ],

  change: [],
  credit: '',

  faq: [
    {
      q: 'What did CRUDA build for Girish Sehgal?',
      a: 'A one-page narrative bio, a three-pillar argument and twelve LinkedIn posts built on it.',
    },
    {
      q: 'Why not standard executive thought leadership?',
      a: "That format asks a person to summarize themselves. Girish's material was his positions, held for twenty-five years and never written down.",
    },
    {
      q: 'What is Translated?',
      a: 'Twelve weeks to build the system a company uses to say what it is. It costs $19,500 flat.',
    },
  ],
  moreFrom: [],
  next: 'mannheim-trading',
}

import type { Work } from './types'

/* /work/confidential-fashion-founder · F32 §1 · 24-sep · Fran.
   Molde F33 (Pentagram) + copy §1 verbatim.

   Confidencialidad (F32 §1.0): ningún texto de la página menciona
   nombre del founder, empresas, socios, ciudad de origen, moneda
   local, años de préstamo/lanzamiento/colapso ni facturación de
   un año concreto. Ver la lista completa de términos vetados en
   F32 §1.0. Este archivo pasa el grep de confidencialidad. */

export const confidentialFashionFounder: Work = {
  slug: 'confidential-fashion-founder',
  order: 7,
  title:
    "A second-time founder didn't need followers. He needed his story to make sense.",
  metaTitle: 'Confidential · On-demand fashion · CRUDA',
  dek:
    'Founder narrative for a confidential on-demand fashion group in Dubai: one version, inside and out.',
  client: {
    name: 'Confidential',
    role: 'Founder',
    /* F32 §1 · company es un descriptor genérico (el nombre real
       queda confidencial), va en minúscula. En CREDITS se combina
       como "Confidential · Founder, on-demand fashion group". */
    company: 'on-demand fashion group',
  },
  confidential: true,
  place: { to: 'Dubai', city: 'Dubai', country: 'United Arab Emirates' },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'interpreted' },
  axis: 'across',
  moment: 'second-company',
  sector: 'Fashion',

  image: '/confidential-hero.jpg',
  heroFormat: 'landscape',
  heroObjectPosition: 'center 40%',

  summary:
    "Our client built a $300M fashion group, lost it, and built it again: an on-demand fashion company, run from Dubai with a lean global team and an international joint venture behind its supply chain. He didn't want a personal brand. He wanted to understand his own story and how it connected to the new company, so that his team, his partners and his investors heard one version of it. CRUDA built that narrative. Most of it was never posted; it was used inside the company.",
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  capsule: [],

  takeaways: [
    'A comeback told too early reads as a defence. Settle the story inside before you tell it outside.',
    'When partners come from different cultures, the company needs one version of why it exists, in words each side can repeat.',
    'Not every narrative is meant to be published. Some of the most valuable ones are only read by your own team.',
  ],

  metrics: [],

  sections: [
    {
      /* §1.3 · THE CHALLENGE */
      h2: 'The public story ended with the fall.',
      body: [
        "Everyone who knew his name knew it from the first company, and most knew it from how it ended. The press covered the exit, not what came after. His second company runs on a different model, on-demand, and kept being filed alongside the fast fashion he had left behind.",
        'The joint venture behind its supply chain added another layer: partners from different cultures, an association some people find polarising, and a team spread across countries, each hearing a slightly different version of why the company exists.',
        "He didn't want visibility. He wanted every person who works with him to explain, in the same words, who he is now and what the company does.",
      ],
    },
    {
      /* §1.4 · WHAT WE SAW */
      h2: 'Clarity inside had to come before visibility outside.',
      body: [
        "A comeback told too early reads as a defence. He didn't need to answer the press. He needed a story he could stand behind in a board meeting, in an interview with a new hire and on a call with his partners.",
        'So the order was reversed. The narrative was built for the inside of the company first, and only a small part of it was ever published.',
      ],
    },
    {
      /* §1.5 · WHAT WE BUILT · h2 solo · rows abajo · sin imágenes. */
      h2: 'One version of the story, for everyone inside.',
      body: [],
    },
  ],

  built: [
    {
      name: 'SECOND-TIME FOUNDER',
      description:
        'A position that moves him from "fashion CEO" to a founder who learned expensive lessons and built a tighter company the second time.',
    },
    {
      name: 'THE MODEL, EXPLAINED',
      description:
        'Why the on-demand model works, told in a way that never reveals how it works.',
    },
    {
      name: 'THE PARTNERSHIP',
      description:
        'How to talk about the joint venture: associated with it, never its spokesperson.',
    },
    {
      name: 'INTERNAL NARRATIVE',
      description:
        'The language the team, the partners and the investors use to describe the company, in one document.',
    },
    {
      name: 'CONTROLLED VISIBILITY',
      description:
        'A small set of public pieces, written only once the story inside was settled.',
    },
  ],

  changeH2: 'One version, inside and out.',
  changePreamble:
    'The narrative became the version the company uses with its team, its partners and its investors. The little that was published did its job: one LinkedIn post brought more than a thousand job applications.',
  metricGroups: {
    context: [
      {
        value: '$300M',
        label: 'the fashion group he built, lost and built again',
        period: '',
        source: 'Client data, 2025',
        n: 1,
      },
      {
        value: '1,000+',
        label: 'job applications from one LinkedIn post',
        period: '',
        source: 'Client data, 2025',
        n: 1,
      },
    ],
  },
  sources: ['Client data, 2025'],

  change: [],
  credit: '',

  faq: [
    {
      q: 'What did CRUDA build for this founder?',
      a: 'A position as a second-time founder, a way to explain the on-demand model, a way to talk about the joint venture, and the internal narrative the company uses with its team, partners and investors.',
    },
    {
      q: 'Why is the client confidential?',
      a: 'The engagement is under confidentiality. We share what the work was, not who it was for.',
    },
    {
      q: 'Why was most of it never published?',
      a: 'The founder needed clarity inside the company before visibility outside it. Most of the narrative is used internally.',
    },
    {
      q: 'What is Interpreted?',
      a: 'For companies whose owners, teams and buyers come from different cultures. Twelve weeks, from $55,000.',
    },
  ],
  moreFrom: [],
  next: 'juan-pablo-romero',
}

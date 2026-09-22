import type { Work } from './types'
import pezetHero from '@/assets/pezet-05-context-skyline.jpg'
import pezetPool from '@/assets/pezet-04-pool-interior.jpg'
import pezetEntrance from '@/assets/pezet-01-entrance.png'
import pezetLobby from '@/assets/pezet-08-lobby-interior.jpg'
import pezetCard from '@/assets/pezet-07-exterior-front.jpg'
import saadiyatCard from '@/assets/saadiyat-hero-new.jpg'

/* /work/karen-mannheim · F18.0 · 21-sep · autónomo · fuente única. */

export const karenMannheim: Work = {
  slug: 'karen-mannheim',
  order: 1,
  title:
    'How a Lima lighting studio went from zero Miami presence to winning pitches against international firms',
  metaTitle: 'Karen Mannheim · TRAZZO Lighting · CRUDA',
  dek:
    'How CRUDA built the narrative system that took TRAZZO Lighting from zero Miami presence to winning pitches against international firms.',
  client: {
    name: 'Karen Mannheim',
    role: 'Founder',
    company: 'TRAZZO Lighting',
  },
  confidential: false,
  place: {
    from: 'Lima, Peru',
    to: 'Miami, Florida',
    city: 'Miami',
    country: 'United States',
  },
  period: { start: '2021', end: '2026' },
  via: 'Bushido 2021–2024 · CRUDA 2024–2026',
  door: { primary: 'translated', secondary: 'transmission' },
  axis: 'across',
  moment: 'market-entry',

  image: pezetHero.src,
  heroFormat: 'landscape',
  /* La card usa la torre de PEZET (F17.1-iter). El hero interno del
     caso también · el mismo asset se sirve como imagen destacada. */
  proof: {
    type: 'metric',
    value: '605,050',
    label: 'LinkedIn impressions',
    period: '365 days',
  },

  capsule: [
    "When Karen Mannheim started working with Fran Herrera in 2021, she had spent 28 years building Lima's most respected architectural lighting firm: more than 2,500 projects, an 80-person team, and work inside RAMSA, Four Seasons and Oppenheim buildings. Outside Peru, almost nobody knew she existed.",
    'Over the next five years, CRUDA built the narrative system that made her work legible outside Peru. In 2025, TRAZZO grew revenue 46% and closed its largest project, $380K. In 2026, her studio won a Miami pitch against international firms: the client asked no questions and requested the proposal.',
    "Forbes Perú named her one of the country's 50 most powerful women in 2026. Nobody pitched it: CRUDA does no PR and buys no placements.",
  ],
  takeaways: [
    'If your work is known at home and invisible abroad, the work is not the problem. Nothing explains it when you are not in the room.',
    'The right format beats more content. Karen asking experts showed more judgment than any post about her.',
    'Your deck is part of the narrative. If it lists projects, it loses to the one that tells a story.',
  ],
  metrics: [
    /* PRUEBA · las 4 cifras clave (W6 · naranja) */
    {
      value: '605,050',
      label: 'LinkedIn impressions',
      source: 'LinkedIn Analytics',
      period: '365 days · 66% outside her network',
    },
    {
      value: '96×',
      label: 'more people than actually follow her',
      source: 'LinkedIn Analytics',
      period: 'on 6,299 followers',
    },
    {
      value: '$60,180',
      label: 'a year · what buying that attention would have cost',
      source:
        'LinkedIn $33,278 + Instagram $26,902 · CPMs at the floor of published 2026 benchmarks',
      period: '365 days',
    },
    {
      value: '+300%',
      label: 'LinkedIn growth',
      source: 'LinkedIn Analytics',
      period: '2021 — 2026',
    },
    /* CONTEXTO · las restantes (W6 · ink) */
    {
      value: '500K',
      label: 'Instagram views',
      source: 'Meta Business Suite',
      period: '90 days · Jul 2026',
    },
    {
      value: '5 years',
      label: 'Client since 2021',
      source: 'Bushido + CRUDA engagement',
      period: '2021 — 2026',
    },
    {
      value: '33 years',
      label: 'Of practice, made legible',
      source: 'TRAZZO Lighting history',
      period: '28 years before · 5 since',
    },
  ],
  sections: [
    {
      h2: 'Where she started.',
      body: [
        'In early 2021, TRAZZO had 28 years of work behind it: more than 2,500 projects, Lima\'s most important showrooms, work inside RAMSA, Four Seasons and Oppenheim buildings, and the Porsche flagship in Lima.',
        'Inside the circle that already knew her, the work moved. Outside it, nobody had a way in. Karen had about a thousand followers on Instagram and no way to reach a developer in Miami who had never seen a room she lit.',
      ],
      blocks: [
        { kind: 'image', src: pezetEntrance.src, caption: 'PEZET 1, entrance.', aspect: 'l' },
        { kind: 'image', src: pezetPool.src, caption: 'Pool interior, PEZET.', aspect: 'l' },
        { kind: 'image', src: pezetLobby.src, caption: 'Lobby interior, PEZET.', aspect: 'l' },
      ],
    },
    {
      h2: 'What we saw.',
      body: [
        'Most founder content fails because it asks the founder to talk about herself. Karen is technical, precise and generous, and she is at her best when she is asking, not explaining.',
        'So instead of writing about her, we built SPOTLIGHT: a format where Karen interviews other experts in her field. It showed her judgment in motion, which no post about her could have done.',
        'Everything else sits on three pillars: how light behaves in luxury spaces, what it takes to build a Latin American company in Miami, and why lighting cannot be the last decision in a project.',
      ],
    },
    {
      h2: 'The deck that closes the room.',
      body: [
        'In high-end architecture and design, a single deck decides a multi-million dollar project, and most decks in the category list projects instead of telling anything.',
        'We built the presentation system her team now runs in-house: the structure, the master template and the rules for assembling any pitch. Decks that took weeks now take an afternoon.',
        'In 2026, TRAZZO won a Miami pitch against international studios. The client asked no questions. They requested the proposal and signed.',
      ],
    },
    {
      h2: 'Forbes Perú, 2026.',
      body: [
        'Forbes Perú named Karen one of the country\'s 50 most powerful women. It was an editorial selection. Nobody pitched it.',
        'In Florida, the rooms she walks into are already warm: interior design firms, architects and contractors who have been reading her for years.',
      ],
    },
  ],
  built: [
    'Narrative platform · positioning',
    'Content system · LinkedIn + Instagram',
    'SPOTLIGHT format · Karen interviews',
    'Presentation system · in-house decks',
  ],
  change: [
    'The Miami pitch closed without questions.',
    'The team assembles pitches in an afternoon instead of weeks.',
    'Revenue grew 46% in 2025.',
  ],
  credit: 'CRUDA · Fran Herrera, Founder',
  faq: [
    {
      q: 'What did CRUDA actually build for TRAZZO Lighting?',
      a: 'A narrative system across two surfaces: organic content on LinkedIn and Instagram — strategy, creative direction and execution — and a presentation system the team now runs in-house for pitches, onboarding and partners.',
    },
    {
      q: 'How long did the results take?',
      a: 'The work ran from 2021 to 2026. LinkedIn growth compounded over the first two years. The Miami pitch and the Forbes recognition came in 2026.',
    },
    {
      q: 'Does this only work for lighting or architecture firms?',
      a: 'The method is the same for any founder-expert whose work is stronger than their reach. CRUDA has applied it in lighting, building materials, construction and hospitality.',
    },
    {
      q: "Who does the work — CRUDA or the client's team?",
      a: "CRUDA builds the system. The client's team runs it. With TRAZZO, the presentation system was handed over and the team now produces decks without us.",
    },
  ],
  moreFrom: [
    {
      slug: '/projects/karen-mannheim/pezet',
      name: 'PEZET',
      meta: 'Three towers with RAMSA · Lima',
      img: pezetCard.src,
    },
    {
      slug: '/projects/karen-mannheim/saadiyat-music-festival',
      name: 'Saadiyat Music Festival',
      meta: 'Abu Dhabi',
      img: saadiyatCard.src,
    },
  ],
  next: 'mike-kaeding',
  testimonial: {
    quote: 'We finally sound like who we actually are.',
    cite: 'Karen Mannheim, Founder, TRAZZO Lighting',
  },
}

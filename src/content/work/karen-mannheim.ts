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
  metaTitle: 'Karen Mannheim · TRAZZO Lighting — CRUDA',
  dek:
    "Karen Mannheim spent 33 years building Lima's most respected lighting firm. In 2026 her studio won a Miami pitch against international firms.",
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
  door: { primary: 'transmission', secondary: 'translated' },
  axis: 'across',
  moment: 'market-entry',

  image: pezetHero.src,
  /* La card usa la torre de PEZET (F17.1-iter). El hero interno del
     caso también · el mismo asset se sirve como imagen destacada. */
  proof: {
    type: 'metric',
    value: '605,050',
    label: 'LinkedIn impressions',
    period: '365 days',
  },

  capsule: [
    "Karen Mannheim spent 33 years building Lima's most respected architectural lighting firm — over 2,500 projects, an 80-person team, and work in RAMSA, Four Seasons and Oppenheim buildings. Outside Peru, almost nobody knew she existed.",
    'Between 2021 and 2026, Fran Herrera built the narrative system that made her work legible internationally — first through the agency Bushido, then through CRUDA after 2024. LinkedIn grew 300% and Instagram reached 500K views per 90 days. In 2026 her studio won a Miami pitch against international firms — the client asked no questions and requested the proposal.',
    "That same year, Forbes Peru named her one of the country's 50 most powerful women: an editorial selection, not a paid placement.",
  ],
  takeaways: [
    'Thirty-three years of proven work does not travel on its own. Recognition is a system, not a byproduct.',
    'The format matters more than the volume: SPOTLIGHT — Karen interviewing other experts — outperformed anything written about her.',
    'Presentation systems compound. When the portfolio is told with authority, the room stops asking questions.',
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
      h2: 'Thirty-three years of work in Peru. Zero presence in Miami.',
      body: [
        "Thirty-three years later: more than 2,500 projects. Lima's most important showrooms. An eighty-person team. Work inside RAMSA, Four Seasons and Oppenheim buildings. The Porsche flagship in Lima. Saadiyat Nights in Abu Dhabi.",
        'For 28 of those 33 years the same pattern held: the work was always exceptional. It just never left Lima. Inside the circle that already knew her, it moved. Outside it, nobody had a way in.',
      ],
      blocks: [
        { kind: 'image', src: pezetEntrance.src, caption: 'PEZET 1, entrance.', aspect: 'l' },
        { kind: 'image', src: pezetPool.src, caption: 'Pool interior, PEZET.', aspect: 'l' },
        { kind: 'image', src: pezetLobby.src, caption: 'Lobby interior, PEZET.', aspect: 'l' },
      ],
    },
    {
      h2: 'The format was the unlock, not the volume.',
      body: [
        'Most founder content fails because it asks the founder to talk about themselves. Karen is technical, precise, and generous — she is at her best when she is asking, not explaining.',
        'That produced SPOTLIGHT: a format where Karen interviews other experts in her field. It did more for her authority than anything we could have written about her, because it showed her judgment in motion instead of describing it.',
      ],
      pull:
        'We did not give Karen a voice. We found the room where hers already worked.',
    },
    {
      h2: 'When the work is told well, the room stops asking questions.',
      body: [
        'In high-end A&D, a single deck decides a multi-million dollar project — and most decks in the category enumerate instead of telling. We built the presentation system her team now runs in-house: structure, master template, and the rules for assembling any pitch.',
        'Decks that took the team weeks now take an afternoon. In 2026, KMLS won a Miami pitch against international studios. The client asked no questions. They requested the proposal and signed.',
      ],
    },
    {
      h2: 'Forbes did not discover Karen. It caught up.',
      body: [
        'In 2026, Forbes Peru named Karen one of the 50 most powerful women in the country — an editorial selection, not a paid placement.',
        'The award did not create the reputation. It registered one that had become visible.',
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
    'Forbes Peru named Karen one of the country\'s 50 most powerful women.',
    'The team now assembles pitches in an afternoon instead of weeks.',
  ],
  credit: 'Bushido 2021–2024 · CRUDA 2024–2026 · Fran Herrera, Founder',
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

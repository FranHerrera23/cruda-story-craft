import type { CaseStudyData } from '@/components/CaseStudyLayoutV2'

/* /work/karen-mannheim · F17.1 · 21-sep · autónomo · case-molde-v1.

   Capsule reordenado (C2 firmado): las tres frases del caso, en el
   orden del prototipo · Forbes al final con "an editorial selection,
   not a paid placement".

   Cifras (C1 cerrado, lockeadas):
     +300%     LinkedIn growth
     500K      Instagram views / 90 days
     5 years   Client since 2021
     33 years  Of practice, made legible

   DECISIÓN F17.1 · el slot "período · C1" del +300% en el prototipo
   no tiene dato firmado. Se muestra sólo "LinkedIn Analytics" sin
   período específico (§5.4 sin inventar). Cuando Fran entregue el
   período, se actualiza la fuente.

   Sub-casos · PEZET y Saadiyat esperan capturas (§7) · no se
   renderizan en F17.1. `moreFrom` queda vacío. */

export const karenMannheim: CaseStudyData = {
  slug: 'karen-mannheim',
  h1: 'How a Lima lighting studio went from zero Miami presence to winning pitches against international firms',
  hero: {
    img: '/karen-mannheim.webp',
    alt: 'Karen Mannheim at PEZET, Lima.',
    caption: 'Karen Mannheim at PEZET, Lima.',
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
  meta: {
    client: 'Karen Mannheim',
    clientRole: 'Founder, TRAZZO Lighting',
    where: 'Lima, Peru → Miami, Florida',
    scope: 'Market entry',
    period: '2021 — 2026',
    author: 'Fran Herrera, Founder, CRUDA',
    date: 'July 26, 2026',
    dateISO: '2026-07-26',
  },
  stats: [
    {
      value: '+300%',
      label: 'LinkedIn growth',
      source: 'LinkedIn Analytics',
    },
    {
      value: '500K',
      label: 'Instagram views / 90 days',
      source: 'Meta Business Suite, Jul 2026',
    },
    {
      value: '5 years',
      label: 'Client since 2021',
      source: 'Bushido 2021–2024 · CRUDA 2024–2026',
    },
    {
      value: '33 years',
      label: 'Of practice, made legible',
      source: '28 years before · 5 since, 2021—2026',
    },
  ],
  sections: [
    {
      h2: 'Thirty-three years of work in Peru. Zero presence in Miami.',
      body: [
        'Thirty-three years later: more than 2,500 projects. Lima\'s most important showrooms. An eighty-person team. Work inside RAMSA, Four Seasons and Oppenheim buildings. The Porsche flagship in Lima. Saadiyat Nights in Abu Dhabi.',
        'For 28 of those 33 years the same pattern held: the work was always exceptional. It just never left Lima. Inside the circle that already knew her, it moved. Outside it, nobody had a way in.',
      ],
      /* Assets reales de PEZET / Porsche / Saadiyat esperan (§7).
         Regla §2: sin asset, sin bloque · evidencia vacía en F17.1. */
      evidence: [],
    },
    {
      h2: 'The format was the unlock, not the volume.',
      body: [
        'Most founder content fails because it asks the founder to talk about themselves. Karen is technical, precise, and generous — she is at her best when she is asking, not explaining.',
        'That produced SPOTLIGHT: a format where Karen interviews other experts in her field. It did more for her authority than anything we could have written about her, because it showed her judgment in motion instead of describing it.',
      ],
      pull:
        'We did not give Karen a voice. We found the room where hers already worked.',
      evidence: [],
    },
    {
      h2: 'When the work is told well, the room stops asking questions.',
      body: [
        'In high-end A&D, a single deck decides a multi-million dollar project — and most decks in the category enumerate instead of telling. We built the presentation system her team now runs in-house: structure, master template, and the rules for assembling any pitch.',
        'Decks that took the team weeks now take an afternoon. In 2026, KMLS won a Miami pitch against international studios. The client asked no questions. They requested the proposal and signed.',
      ],
      evidence: [],
    },
    {
      h2: 'Forbes did not discover Karen. It caught up.',
      body: [
        'In 2026, Forbes Peru named Karen one of the 50 most powerful women in the country — an editorial selection, not a paid placement.',
        'The award did not create the reputation. It registered one that had become visible.',
      ],
      evidence: [],
    },
  ],
  testimonial: {
    quote: 'We finally sound like who we actually are.',
    cite: 'Karen Mannheim, Founder, TRAZZO Lighting',
  },
  faqs: [
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
  moreFrom: [],
}

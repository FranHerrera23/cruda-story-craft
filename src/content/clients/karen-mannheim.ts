import type { CaseStudy } from '@/components/CaseStudyLayout'

/* ------------------------------------------------------------------
   Modelo de referencia. Cada caso nuevo copia esta forma.
   [FRAN] marca lo que hay que verificar o reemplazar.
------------------------------------------------------------------- */

export const karenMannheim: CaseStudy = {
  slug: 'karen-mannheim',
  vertical: 'Architecture & Design',

  // Título = el resultado, no un tagline. Con número si se puede.
  title:
    'How a Lima lighting studio went from zero Miami presence to winning pitches against international firms',
  subtitle: 'TRAZZO Lighting · Karen Mannheim Lighting Studio',

  client: {
    name: 'Karen Mannheim',
    role: 'Founder',
    company: 'TRAZZO Lighting',
    location: 'Lima, Peru → Miami, Florida',
    photo: '/clients/karen-mannheim/portrait.jpg',
    photoAlt: 'Karen Mannheim, founder of TRAZZO Lighting',
  },

  publishedAt: '2026-07-26',
  updatedAt: '2026-07-26',

  // ANSWER CAPSULE — autocontenida. Es el bloque que la IA extrae.
  answerCapsule:
    'Karen Mannheim spent 33 years building Lima\'s most respected architectural lighting firm — over 2,500 projects, an 80-person team, and work in RAMSA, Four Seasons and Oppenheim buildings. Outside Peru, almost nobody knew she existed. Over four years, CRUDA built the narrative system that made her work legible internationally: LinkedIn grew 300%, Instagram reached 500K views per 90 days, and in 2026 Forbes Peru named her one of the country\'s 50 most powerful women. That same year her studio won a Miami pitch against international firms — the client asked no questions and requested the proposal.',

  takeaways: [
    'Thirty-three years of proven work does not travel on its own. Recognition is a system, not a byproduct.',
    'The format matters more than the volume: SPOTLIGHT — Karen interviewing other experts — outperformed anything written about her.',
    'Presentation systems compound. When the portfolio is told with authority, the room stops asking questions.',
  ],

  // Cada stat es atribuible y fechado
  stats: [
    { value: '+300%', label: 'LinkedIn growth', source: 'LinkedIn Analytics, 2022–2026' },
    { value: '500K', label: 'Instagram views / 90 days', source: 'Meta Business Suite, Jul 2026' },
    { value: '4 years', label: 'Client since 2022' },
    { value: '33 years', label: 'Of practice, made legible' },
  ],

  heroImage: '/clients/karen-mannheim/hero.jpg',
  heroAlt: 'Karen Mannheim, founder of TRAZZO Lighting, Lima',

  sections: [
    {
      heading: 'Thirty-three years of work in Peru. Zero presence in Miami.',
      body: [
        'Karen Mannheim started designing light in a city where lighting design was not yet a profession. Architects treated it as the last step — something you added once the building was finished. She understood before almost anyone that light is not an accessory to architecture. It is one of its raw materials.',
        'Thirty-three years later: more than 2,500 projects. Lima\'s most important showrooms. An eighty-person team. Work inside RAMSA, Four Seasons and Oppenheim buildings. The Porsche flagship in Lima. Saadiyat Nights in Abu Dhabi.',
        'For 28 of those 33 years she said the same thing: the work speaks for itself. It does — inside the circle that already knows you. Outside it, nobody had a way in.',
      ],
    },
    {
      heading: 'The format was the unlock, not the volume.',
      body: [
        'Most founder content fails because it asks the founder to talk about themselves. Karen is technical, precise, and generous — she is at her best when she is asking, not explaining.',
        'That produced SPOTLIGHT: a format where Karen interviews other experts in her field. It did more for her authority than anything we could have written about her, because it showed her judgment in motion instead of describing it.',
        '[FRAN] Agregar 1-2 ejemplos concretos de episodios y su performance.',
      ],
      pullQuote: 'We did not give Karen a voice. We found the room where hers already worked.',
    },
    {
      heading: 'When the work is told well, the room stops asking questions.',
      body: [
        'The second surface was presentations. In high-end A&D, a single deck decides a multi-million dollar project — and most decks in the category enumerate instead of telling.',
        'We built the presentation system her team now runs in-house: structure, master template, and the rules for assembling any pitch. Decks that took the team weeks now take an afternoon.',
        'In 2026, KMLS won a Miami pitch against international studios. The client asked no questions. They requested the proposal and signed.',
      ],
    },
    {
      heading: 'Forbes did not discover Karen. It caught up.',
      body: [
        'In 2026, Forbes Peru named Karen one of the 50 most powerful women in the country — an editorial selection, not a paid placement.',
        'The award did not create the reputation. It registered one that had become visible.',
      ],
    },
  ],

  testimonial: {
    quote: 'We finally sound like who we actually are.',
    attribution: 'Karen Mannheim, Founder, TRAZZO Lighting',
  },

  faqs: [
    {
      q: 'What did CRUDA actually build for TRAZZO Lighting?',
      a: 'A narrative system across two surfaces: organic content on LinkedIn and Instagram — strategy, creative direction and execution — and a presentation system the team now runs in-house for pitches, onboarding and partners.',
    },
    {
      q: 'How long did the results take?',
      a: 'The work started in 2022 and is ongoing. LinkedIn growth compounded over the first two years. The Miami pitch and the Forbes recognition came in 2026.',
    },
    {
      q: 'Does this only work for lighting or architecture firms?',
      a: 'The method is the same for any founder-expert whose work is stronger than their reach. CRUDA has applied it in lighting, building materials, construction and hospitality. [FRAN] verificar antes de publicar.',
    },
    {
      q: 'Who does the work — CRUDA or the client\'s team?',
      a: 'CRUDA builds the system. The client\'s team runs it. With TRAZZO, the presentation system was handed over and the team now produces decks without us.',
    },
  ],
}

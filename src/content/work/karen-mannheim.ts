import type { Work } from './types'
import pezetHero from '@/assets/pezet-05-context-skyline.jpg'
import pezetPool from '@/assets/pezet-04-pool-interior.jpg'
import pezetEntrance from '@/assets/pezet-01-entrance.png'
import pezetLobby from '@/assets/pezet-08-lobby-interior.jpg'
import pezetCard from '@/assets/pezet-07-exterior-front.jpg'
import saadiyatCard from '@/assets/saadiyat-hero-new.jpg'

/* /work/karen-mannheim · F26 · 23-sep · Fran §A/§B.
   Migrada al molde F26: summary + byline, secciones nombradas
   por preguntas del molde, `builtRows` en vez de `built` plano,
   `metricGroups` en vez de `metrics` sueltos, `rooms[]`, `sources`.
   Copy §B textual, sin invenciones. */

export const karenMannheim: Work = {
  slug: 'karen-mannheim',
  order: 1,
  title:
    "Karen Mannheim's work was known only in Lima. Now it wins pitches in Miami.",
  metaTitle: 'Karen Mannheim · TRAZZO Lighting · CRUDA',
  dek:
    'How CRUDA built the narrative system that took TRAZZO Lighting from zero Miami presence to winning pitches against international firms.',
  client: {
    name: 'Karen Mannheim',
    role: 'Co-founder',
    company: 'TRAZZO Lighting',
  },
  confidential: false,
  place: {
    to: 'Lima · Miami · Madrid',
    city: 'Miami',
    country: 'United States',
  },
  period: { start: '2021', end: '2026' },
  via: 'CRUDA',
  door: { primary: 'translated', secondary: 'transmission' },
  axis: 'across',
  moment: 'market-entry',
  sector: 'Lighting',

  image: pezetHero.src,
  heroFormat: 'landscape',
  proof: {
    type: 'metric',
    value: '605,050',
    label: 'LinkedIn impressions',
    period: '365 days',
  },

  /* §B.2 · resumen + byline · §H · reemplaza al capsule y la firma
     suelta de la versión previa. Antes/después de 2021: Oppenheim
     Architecture, Four Seasons, Wecselman Design, Kobi Karp, el
     nuevo Osaka y el nuevo Porsche solo aparecen después de 2021. */
  summary:
    'Karen Mannheim co-founded TRAZZO Lighting in Lima 33 years ago. By 2021 it had more than 2,500 projects: residential buildings by RAMSA for ACM Grupo, work with Llosa Cortegana Arquitectos and Barclay & Crousse, the Porsche flagship and Osaka Nikkei. Almost nobody outside Peru knew. Since 2021, CRUDA has built and run the narrative system behind Karen and the company, across Lima, Miami, LinkedIn and Instagram. In those years TRAZZO added Four Seasons, Oppenheim Architecture, Wecselman Design and Kobi Karp to its list, grew revenue 46% in 2025 and closed its largest project, $380K. In 2026, Forbes Perú named Karen one of the country’s 50 most powerful women.',
  byline: 'Fran Herrera, Founder, CRUDA · Updated September 2026',

  /* Legacy · el layout ignora `capsule` cuando `summary` existe.
     Queda vacío para no romper el shape del type. */
  capsule: [],

  /* §B.9 · WHAT THIS MEANS FOR YOUR COMPANY */
  takeaways: [
    "If your work is known only by the people who already hired you, the next buyer has no way in.",
    "The names on your project list are an argument, but only once someone explains why they matter to your buyer.",
    "Your deck is part of the narrative. Your team should be able to build the next one in an afternoon.",
  ],

  /* Legacy `metrics` · se conserva vacía porque el layout F26 usa
     `metricGroups` cuando existe. */
  metrics: [],

  sections: [
    {
      /* §B.3 · THE CHALLENGE · §H · antes de 2021 · nombra a RAMSA,
         Llosa Cortegana, Barclay & Crousse, Porsche y Osaka Nikkei. */
      h2: 'Twenty-eight years of work that only travelled by word of mouth.',
      body: [
        "In early 2021, TRAZZO had 28 years behind it: more than 2,500 projects, an 80-person team, Lima's most important showrooms, and a list any architect in Lima would recognise: residential buildings by RAMSA for ACM Grupo, projects with Llosa Cortegana Arquitectos and Barclay & Crousse, the Porsche flagship and Osaka Nikkei. Inside Lima, that record moved through Karen's network. Outside it, nobody could see it.",
        "TRAZZO had opened in Miami in 2020. Its buyers there are developers, architects and high-end builders across the United States, Latin America and Spain: a few thousand people, none of whom had walked into a room Karen lit. She had about a thousand followers on Instagram.",
        "A lighting studio is chosen before anyone walks into its work. When the record can't reach the architect or developer specifying the project, the studio isn't in the conversation.",
      ],
    },
    {
      /* §B.4 · WHAT WE SAW · §H · el primer párrafo pierde Four
         Seasons y Oppenheim (van a WHAT CHANGED); el segundo
         párrafo no cambia. */
      h2: 'The names on the list already persuaded. Nobody had explained them.',
      body: [
        "TRAZZO's project list carried weight a Miami developer would recognise at once, if someone told them what it meant. RAMSA designed the most expensive penthouse ever sold in the United States, the Harvard Kennedy School and residential colleges at Yale, and had chosen TRAZZO four times for residential projects in Peru, through ACM Grupo.",
        "So the content never describes lamps. It takes a project the buyer already respects and shows how its light was decided: the process, the constraints, the judgment. The association opens the door; Karen's criteria is what the reader remembers.",
      ],
    },
    {
      /* §B.5 · WHAT WE BUILT · imágenes de Pezet + grilla de 4
         posts de Karen (F26 §B.5 · si algún archivo no existe se
         omite por §E.6). */
      h2: "A narrative system Karen's team runs every week.",
      body: [],
      blocks: [
        { kind: 'image', src: pezetEntrance.src, caption: 'PEZET 1, entrance.', aspect: 'l' },
        { kind: 'image', src: pezetPool.src, caption: 'Pool interior, PEZET.', aspect: 'l' },
        { kind: 'image', src: pezetLobby.src, caption: 'Lobby interior, PEZET.', aspect: 'l' },
        { kind: 'image', src: '/karen-post-1.png', aspect: 'p' },
        { kind: 'image', src: '/karen-post-2.png', aspect: 'p' },
        { kind: 'image', src: '/karen-post-3.png', aspect: 'p' },
        { kind: 'image', src: '/karen-post-4.png', aspect: 'p' },
      ],
    },
    {
      /* §B.6 · HOW IT RUNS */
      h2: 'Lima, Miami, LinkedIn and Instagram, run as one system.',
      body: [
        "LinkedIn carries Karen to developers and architects. Instagram carries the projects. The same story is told in Lima, to a market that already knows TRAZZO, and in Miami, to one that doesn't. Karen and Fran meet once a week; CRUDA runs the rest.",
      ],
    },
  ],

  /* §B.5 · WHAT WE BUILT · filas */
  built: [
    {
      name: 'NARRATIVE PLATFORM',
      description:
        'One position for Karen and the company: an entrepreneur who found her language in light. It decides which stories get told and which don’t.',
    },
    {
      name: 'PROJECT BREAKDOWNS',
      description:
        'How the light was decided in penthouses, villas and buildings, starting with Pezet, by RAMSA, in Lima.',
    },
    {
      name: 'FOUNDER STORIES',
      description:
        'The decisions behind the company, told by Karen: being chosen to light the new Porsche flagship in Peru, opening Miami in 2020.',
    },
    {
      name: 'SPOTLIGHT · 2026',
      description:
        'A video series in which Karen interviews people at the top of neighbouring fields: Peter Seinfeld, five years in Frank Gehry’s studio; Norbert Jacniak, a Marbella-based chef who has cooked for Formula 1 in Saudi Arabia and for a European king; and leading Latin American architects.',
    },
    {
      name: 'PRESENTATION SYSTEM',
      description:
        "The structure, master template and rules for any pitch. Karen's team now builds a deck in an afternoon instead of weeks.",
    },
  ],

  /* §B.7 · WHAT CHANGED · §H · el preámbulo ahora nombra Four
     Seasons Residences ($14M, Adriana Hoyos), Oppenheim en Golden
     Beach, Wecselman Design, Kobi Karp, el nuevo Osaka y el nuevo
     Porsche · todos post-2021. */
  changeH2: 'Five years, measured.',
  changePreamble:
    'Since 2021, the work has reached a different level of project: Four Seasons Residences in Brickell, with a penthouse redesigned by Adriana Hoyos and listed at $14M; a $200M house by Oppenheim Architecture in Golden Beach; projects with Wecselman Design and Kobi Karp; and the new Osaka and the new Porsche flagship. In 2026, TRAZZO won a Miami pitch against international studios; the client asked no questions and requested the proposal. One process video of Pezet reached 80,000 views on Instagram and brought an inbound contact that became a penthouse project worth $20–30K.',
  metricGroups: {
    business: [
      { value: '+46%', label: 'revenue growth', period: '2025 vs 2024', source: 'TRAZZO internal review, 2025', n: 3 },
      { value: '+27%', label: 'approved quotes', period: '2025', source: 'TRAZZO internal review, 2025', n: 3 },
      { value: '$380K', label: 'largest close', period: '2025', source: 'TRAZZO internal review, 2025', n: 3 },
    ],
    reach: [
      { value: '605,050', label: 'LinkedIn impressions', period: '365 days · 66% outside her network', source: 'LinkedIn Analytics, August 2026', n: 1 },
      { value: '165,513', label: 'people reached on LinkedIn', period: '365 days', source: 'LinkedIn Analytics, August 2026', n: 1 },
      { value: '96×', label: 'more people than follow her', period: 'on 6,299 followers', source: 'LinkedIn Analytics, August 2026', n: 1 },
      { value: '+300%', label: 'LinkedIn growth', period: '2021 — 2026', source: 'LinkedIn Analytics, August 2026', n: 1 },
      { value: '560,715', label: 'Instagram views', period: '90 days · 0% paid', source: 'Meta Insights, 2026', n: 2 },
      { value: '19,000', label: 'Instagram followers', period: 'from about 1,000', source: 'Meta Insights, 2026', n: 2 },
    ],
    mediaValue: [
      { value: '$33,278', label: 'LinkedIn', period: '605,050 impressions × $55 CPM', source: 'CPMs at the floor of published 2026 benchmarks', n: 4 },
      { value: '$26,914', label: 'Instagram', period: '2,242,860 views × $12 CPM, annualised from 90 days', source: 'CPMs at the floor of published 2026 benchmarks', n: 4 },
      { value: '$60,192', label: 'a year', period: 'what buying that attention would have cost', source: 'CPMs at the floor of published 2026 benchmarks', n: 4 },
    ],
    context: [
      { value: '33 years', label: 'of practice', period: '', source: '', },
      { value: '5 years', label: 'with CRUDA · 2021 — 2026', period: '', source: '' },
      { value: '2,500+', label: 'projects', period: '', source: '' },
      { value: '80', label: 'people on the team', period: '', source: '' },
    ],
  },
  sources: [
    'LinkedIn Analytics, August 2026',
    'Meta Insights, 2026',
    'TRAZZO internal review, 2025',
    'CPMs at the floor of published 2026 benchmarks',
  ],

  testimonial: {
    quote: 'We finally sound like who we actually are.',
    cite: 'Karen Mannheim, Co-founder, TRAZZO Lighting',
  },

  /* §B.8 · ROOMS IT OPENED */
  rooms: [
    {
      year: '2026',
      name: 'FORBES PERÚ',
      description:
        'Named one of the 50 most powerful women in Peru, June–July 2026 issue. An editorial selection; nobody pitched it. CRUDA does no PR and buys no placements. Also featured in Architectural Digest.',
      image: '/forbes-peru-2026-cover.jpg',
      links: [
        {
          label: 'Read the profile on Forbes Perú',
          href: 'https://forbes.pe/mujeres-poderosas/2026-06-19/las-50-mujeres-mas-poderosas-de-peru-en-2026-karen-mannheim/',
        },
        {
          label: 'See the full list',
          href: 'https://forbes.pe/mujeres-poderosas/2026-06-22/listado-forbes-estos-son-las-50-mujeres-mas-poderosas-de-peru-en-2026/',
        },
      ],
    },
    {
      year: '2025',
      name: 'MORPH',
      description:
        "A direct meeting with César Frías Enciso, CEO of MORPH, a studio ranked among the world's 100 best, arranged through CRUDA's network.",
    },
    {
      year: '2021',
      name: 'SAADIYAT NIGHTS, ABU DHABI',
      description:
        "Lighting for the venue of Abu Dhabi's leading music festival, with first-tier international headliners. The project came through CRUDA's network.",
    },
    {
      name: 'PITCHES',
      description:
        "Presentations for a Brazilian football star's residence, a seven-storey villa in Marbella and a Grammy-winning artist's home.",
    },
  ],

  change: [],
  credit: '',

  /* §B.10 · FAQ nuevas */
  faq: [
    {
      q: 'What did CRUDA build for TRAZZO Lighting?',
      a: 'A narrative platform for Karen and the company, a content system across LinkedIn and Instagram, the SPOTLIGHT video series and the presentation system her team uses for every pitch.',
    },
    {
      q: 'How long did it take to see results?',
      a: "Karen started working with Fran Herrera in 2021. In 2025, TRAZZO's revenue grew 46% and it closed its largest project, $380K.",
    },
    {
      q: 'Did CRUDA arrange the Forbes Perú listing?',
      a: "No. Forbes Perú's list is an editorial selection. CRUDA does no PR and buys no placements.",
    },
    {
      q: 'What does this kind of engagement cost?',
      a: 'Translated is $19,500 flat for twelve weeks. Transmission starts at $2,200 a month.',
    },
  ],

  moreFrom: [],
  next: 'mike-kaeding',
}

import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Girish Sehgal — data file v2. Reemplaza al legacy en
   src/content/clients/girish-sehgal.ts (que sigue existiendo por
   compatibilidad hasta que se retire).

   Girish no declara identidad — cae a los defaults del sistema:
   --c-1 → --black, --c-2 → --ink, --c-type → --g (Archivo).
   El slab se pinta negro sin que nadie tenga que declararlo, y
   el H1 sale en Archivo weight 700 tracking tight (defaults).

   Voice de Girish va con draft:true — testimonio pendiente.
   Los `[fecha]` de los archive items se dejan como year: undefined
   hasta que Fran los complete. */

export const girishSehgal: CaseStudyV2 = {
  slug: 'girish-sehgal',
  title: 'Girish Sehgal',
  oneLiner:
    'Narrative and positioning for a hospitality executive moving into healthcare, with twenty-five years of work no search would find.',
  moment: 'category-shift',
  // Sin identity — Girish se sostiene en tipografía del sistema.
  blocks: [
    {
      type: 'head',
      title: 'Girish Sehgal',
      oneLiner:
        'Narrative and positioning for a hospitality executive moving into healthcare, with twenty-five years of work no search would find.',
      tags: ['Category shift', 'Hospitality → Healthcare', 'Abu Dhabi'],
      facts: [
        { label: 'Moment', value: 'Category shift' },
        { label: 'Sector', value: 'Hospitality → Healthcare' },
        { label: 'Where', value: 'Abu Dhabi' },
        { label: 'Year', value: '2025' },
      ],
    },
    {
      type: 'lead',
      asset: {
        slotName: 'Lead media — retrato',
        slotSpec: 'Girish en SSMC. 78vh, mínimo 2000px de ancho.',
      },
    },
    {
      type: 'prose',
      label: 'The moment',
      paragraphs: [
        "Girish Sehgal started at Kempinski at nineteen, from a town in the Doon Valley. Then Four Seasons — Maldives, Boston, Chicago, Toronto. Then Taj, where he took Falaknuma's average stay from under one night to over six. Then JW Marriott Pune, past $24 million in under a year, in a non-metro city. Fourteen cities, six countries.",
        'Then he moved to healthcare, as Chief Patient Experience Officer at Sheikh Shakhbout Medical City in Abu Dhabi. A career like that is an argument only to the people already holding the CV. Everyone else had no way to find it.',
      ],
    },
    {
      type: 'pull',
      quote:
        'A career like that is an argument only to the people already holding the CV.',
    },
    {
      type: 'prose',
      label: 'The narrative problem',
      paragraphs: [
        'The obvious move was executive thought leadership: lessons, frameworks, takeaways. It would have produced competent posts nobody remembers, because that format asks a person to summarise themselves.',
        'What Girish had instead were positions — arrived at over thirty years, held against pressure, and never written down. That a security guard nobody notices decides whether forty traumatised patients feel safe. That when you build on someone else’s land, money is not enough; you have to invest in their dignity. That being told you are too kind to lead is usually said by people who mistake distance for authority.',
        'None of that is a lesson. All of it is a stance.',
      ],
    },
    {
      type: 'slab',
      tone: 'c1',
      children: [
        {
          type: 'thesis',
          statement: 'None of that is a lesson. All of it is a stance.',
          reading:
            'Three decades of positions, none of them written down until now.',
        },
      ],
    },
    {
      type: 'prose',
      label: 'The narrative bio',
      paragraphs: [
        'The first deliverable was not a post. It was one page: twenty-five years turned into a position, written so that Girish could recognise himself in it and repeat it out loud.',
        'Not "hospitality executive with international experience." That describes a category. The position we landed is narrower and harder to copy — the executive who builds cultures rather than inherits them, now doing it where the stakes are highest.',
        'Everything downstream is decided by that sentence: which stories get told, which do not, and why a move from hotels to a hospital reads as strategy rather than as a career accident.',
      ],
    },
    {
      type: 'pillars',
      label: 'The three pillars',
      items: [
        {
          number: '01',
          heading: 'Kindness is an operating strength',
          body:
            'Not temperament, not softness. The argument that presence and access produce better decisions than distance does — and that most people who mistake distance for authority have never tested it.',
        },
        {
          number: '02',
          heading: 'Potential where others see inconvenience',
          body:
            'Villagers with no hotel experience. A gardener with four children. A security guard nobody notices. Each piece takes someone written off and shows what was actually there.',
        },
        {
          number: '03',
          heading: 'Hospitality is a mindset, not a department',
          body:
            'The pillar that makes the move to healthcare inevitable rather than surprising. If hospitality is how you show up, it travels — and a hospital is where it matters most.',
        },
      ],
      note:
        'Every piece he published sits on one of these three. That is what makes twelve posts read as one argument instead of twelve opinions.',
    },
    {
      type: 'piece',
      label: 'The work',
      content: [
        {
          kind: 'open',
          text: 'I was born in Dehradun — a quiet valley town in India, framed by two mountain ranges, with the Himalayas watching from afar.',
        },
        {
          kind: 'p',
          text: "My childhood was simple. No silver spoons or shortcuts. Just stillness, nature, and a quiet dream that maybe, someday, I'd do something meaningful.",
        },
        {
          kind: 'p',
          text: 'At nineteen I stepped into a world far removed from mine: Kempinski, Mumbai. My first break in luxury hospitality. Two and a half years that changed everything.',
        },
        {
          kind: 'p',
          text: "Then came Four Seasons. Eight years across the Maldives, Boston, the Bahamas, and later Toronto, the HQ. It wasn't just a job; it was a masterclass in empathy, detail, and connection.",
        },
        {
          kind: 'p',
          text: "India called me home. I joined the leadership program at Taj, and soon after I was entrusted with leading their Maldives resort as General Manager. That resort had survived the tsunami. What it needed wasn't a renovation — it needed a revival of spirit.",
        },
        {
          kind: 'p',
          text: 'We built from the inside out. The resort went on to be named No. 1 in the world.',
        },
        {
          kind: 'turn',
          text: "True hospitality isn't about luxury. It's about how you make people feel.",
        },
        {
          kind: 'p',
          text: 'At Taj Falaknuma we grew the average stay from under one night to over six. At JW Marriott Pune we crossed $24 million in revenue in under a year — a first for a non-metro hotel in South Asia.',
        },
        {
          kind: 'p',
          text: "I've lived in 14 cities across 6 countries. Led turnarounds. Repositioned icons. But what I remember most are the people.",
        },
        {
          kind: 'p',
          text: "And that's why this next chapter feels so right. I've joined Sheikh Shakhbout Medical City in Abu Dhabi as Chief Patient Experience Officer.",
        },
        {
          kind: 'p',
          text: "Here, a warm smile might mean hope. A few extra minutes with a family might bring peace. Every detail matters — not for TripAdvisor reviews, but because someone's loved one is counting on it.",
        },
        {
          kind: 'turn',
          text: "Because hospitality is not an industry. It's a mindset. A way of showing up — with empathy, with dignity, with humanity. Especially when it matters most.",
        },
      ],
      sidebar: {
        metrics: [
          { value: '368', label: 'reactions' },
          { value: '170', label: 'comments' },
          { value: '2', label: 'reposts' },
        ],
        src: 'LinkedIn',
        why:
          'Twenty-five years of career, told once, in his own voice. Every fact in it is checkable. Nothing in it is a claim about himself — the claims are about the people he worked with. That is the whole method in one piece.',
      },
      note: 'Recreated for legibility. The words are his, as published.',
    },
    {
      type: 'passages',
      label: 'The series',
      featured: [],
      archive: [
        {
          number: '02',
          title: '"Local people are lazy"',
          excerpt: 'A prejudice reframed as a management failure',
        },
        {
          number: '03',
          title: 'Giving without expecting',
          excerpt: 'Fourteen cities, and the year he followed her',
        },
        {
          number: '04',
          title: 'Split rocks or build cathedrals',
          excerpt: 'The security guard nobody noticed',
        },
        {
          number: '05',
          title: 'Fourteen cities, six countries',
          excerpt: 'Why he moves, and what he leaves behind',
        },
        {
          number: '06',
          title: 'Not every star player sprints',
          excerpt: 'Leadership as an orchestra, not a race',
        },
        {
          number: '07',
          title: 'Too kind to lead',
          excerpt: 'Twenty years of being told to be less available',
          year: '184 reactions',
        },
        {
          number: '08',
          title: 'CSR begins at home',
          excerpt: 'The gardener with four children',
        },
        {
          number: '09',
          title: 'Say it in plain words',
          excerpt: 'Tachycardia, and what the patient actually heard',
        },
        {
          number: '10',
          title: 'What Sonder forgot',
          excerpt: 'Hospitality is who shows up when it breaks',
        },
        {
          number: '11',
          title: 'Food as medicine',
          excerpt: 'What you feed your staff is a strategy',
        },
        {
          number: '12',
          title: 'Mubadala, ten years on',
          excerpt: 'Bringing hospitality standards into healthcare',
        },
      ],
    },
    /* Figures — el ref tenía un tercer item con "[ ]" y "[período]"
       como placeholders. Se omite hasta que Fran tenga la cifra
       real; entretanto quedan dos figures (14 y #1) donde "14"
       manda por :first-child (career record, cities/countries)
       y "#1" apoya (Taj Exotica ranking). */
    {
      type: 'figures',
      items: [
        {
          value: '14',
          label: 'Cities, six countries',
          hint: 'Career record',
        },
        {
          value: '#1',
          label: 'Taj Exotica Maldives, worldwide',
          hint: "Condé Nast Traveler Readers' Choice",
        },
      ],
    },
    {
      type: 'prose',
      label: 'The intervention',
      paragraphs: [
        'Three pillars, held across every piece: kindness as an operating strength rather than a temperament, potential where others see inconvenience, and hospitality as a mindset instead of a department.',
        'The through-line runs the other way too. The move from hotels to a hospital is the same act the tachycardia piece describes — taking something true and making it legible to the person who needs it. Girish was already doing in a ward what the writing does on the page.',
      ],
    },
    {
      type: 'voice',
      draft: true,
      quote: '[Testimonio firmado de Girish — traerlo del archivo.]',
      attribution:
        'Girish Sehgal — Chief Patient Experience Officer, SSMC, Abu Dhabi',
    },
    /* Built con solo la columna izquierda. Los "Números reales
       pendientes" y "Cadencia sostenida — período" del ref son
       placeholders bracketed que no deben salir a producción;
       cuando Fran los complete, se agregan al array de changes y
       la columna aparece. BlockBuilt renderea full-width cuando
       solo hay una columna. */
    {
      type: 'built',
      built: [
        'Executive positioning and voice',
        'Three content pillars',
        'Long-form editorial system',
        'Publishing cadence and editing',
      ],
      changes: [],
    },
    {
      type: 'credits',
      facts: [
        { label: 'Client', value: 'Girish Sehgal' },
        { label: 'Moment', value: 'Category shift' },
        { label: 'Year', value: '2025' },
        { label: 'Team', value: 'Fran Herrera' },
      ],
      attribution:
        'CRUDA built the positioning, the pillars and the editorial system. The positions are his, and so is the career they come from.',
    },
  ],
  credits: {
    facts: [
      { label: 'Client', value: 'Girish Sehgal' },
      { label: 'Moment', value: 'Category shift' },
      { label: 'Year', value: '2025' },
      { label: 'Team', value: 'Fran Herrera' },
    ],
    attribution:
      'CRUDA built the positioning, the pillars and the editorial system. The positions are his, and so is the career they come from.',
  },
}

import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Confidential — data file v2. Slug `confidential-fashion-founder`
   per L5: el descriptor es fashion, no retail. El slug anterior
   (confidential-retail-founder) redirect 308 desde next.config.mjs.

   Sin identidad — cae a defaults negros. El slab se pinta negro
   sin declararse; H1 en Archivo weight 700 tracking tight.

   Sin `lead` block — el caso es confidencial y no tiene retrato
   posible. La página abre en tipografía directamente. Fran's vote.

   Sin `voice` block — un testimonio firmado por alguien que no se
   puede nombrar no dice nada. Fran's vote.

   Bloque nuevo `method` (tres movimientos numerados) es la única
   prueba visible cuando no podés mostrar al cliente. */

export const confidentialFashionFounder: CaseStudyV2 = {
  slug: 'confidential-fashion-founder',
  title: 'An industry with no faces.',
  oneLiner:
    'Founder narrative for the head of a $300M on-demand fashion group, who had built the same business twice and never told the story of either one.',
  moment: 'new-entity',
  // Sin identidad — se sostiene en tipografía del sistema.
  blocks: [
    {
      type: 'head',
      title: 'An industry with no faces.',
      oneLiner:
        'Founder narrative for the head of a $300M on-demand fashion group, who had built the same business twice and never told the story of either one.',
      tags: ['Founder narrative', 'Fashion', 'Confidential', '2025'],
      facts: [
        { label: 'Moment', value: 'Second company' },
        { label: 'Sector', value: 'On-demand fashion' },
        { label: 'Scale', value: '$300M net revenue' },
        { label: 'Year', value: '2025' },
      ],
    },
    /* Sin lead — el caso es confidencial y no lleva retrato del
       cliente. La página abre en tipografía. */
    {
      type: 'prose',
      label: 'The challenge',
      paragraphs: [
        "Name a fast fashion founder. Not a brand — a person. Most people in the industry can't, and most people outside it have never tried. The category is enormous, it dresses a generation, and it has no faces. The largest players keep their founders out of the story entirely.",
        'Our client was the exception waiting to happen. He had borrowed £50,000 from his father in 2008, launched a website in March 2009, and built it into a business turning over £287 million by 2021. In 2022 it collapsed. In 2023 he started again, and inside two years the new group was doing $300 million.',
        'Almost nobody knew any of that. He had the most tellable story in his industry and no way of telling it. Not because he was hiding — because he had never been asked the questions that would have made him articulate it.',
      ],
    },
    /* Statement editorial standalone — no viene de párrafo previo.
       Va como `line` (§7 regla 1: `pull` requiere fuente verbatim
       en prosa; `line` es prosa nuestra a tamaño display sin ese
       requisito). El build gate atrapó esto correctamente cuando
       estaba declarado como pull. */
    {
      type: 'line',
      text: 'The rise gets told. The fall gets buried. The return needs both.',
    },
    {
      type: 'pillars',
      label: 'The position',
      items: [
        {
          number: '01',
          heading: 'The operator, not the influencer',
          body:
            'The category is full of founders performing success. The decision was to build him as someone who runs things: every piece carries real operational detail — what a decision cost, what it returned, what it broke. Credibility in this industry comes from specifics, not from tone.',
        },
        {
          number: '02',
          heading: 'The fall is the asset',
          body:
            'The instinct is to skip it. A founder who only tells you about the rise is one of thousands. A founder who has been through the entire cycle — built it, lost it, built it again — is one of very few, and that is not something a competitor can acquire, hire or copy.',
        },
        {
          number: '03',
          heading: 'Occupy the empty seat',
          body:
            'No major player in the category uses its founder in its public story. That vacancy is not an accident of taste — it is a structural opening. The first person to fill it credibly owns a position that cannot be contested by spend.',
        },
      ],
    },
    {
      type: 'slab',
      tone: 'c1',
      children: [
        {
          type: 'thesis',
          statement:
            'Before a founder can tell his story outward, he has to be able to tell it to himself.',
          reading: 'CRUDA',
        },
      ],
    },
    {
      type: 'method',
      label: 'How we worked',
      movements: [
        {
          number: 'Movement one',
          heading: 'Go backwards before going forwards',
          paragraphs: [
            'We did not start with what he wanted to say. We started three generations earlier.',
            'His grandfather arrived in Britain from India and set up a knitwear factory in Manchester. His father moved into design and supply. He moved into selling direct to the customer. Same industry, three different layers of it, one family.',
            'Nothing about how he operates makes sense without that. It is not background colour — it is the explanation.',
          ],
        },
        {
          number: 'Movement two',
          heading: 'Integrate the shadow',
          paragraphs: [
            "Jung's argument is that what a person refuses to look at does not disappear; it runs the show from underneath. Individuation is the work of taking it back.",
            'We applied that literally. The collapse was the part everyone advised him to leave out. We put it at the centre — not as confession, and not as a lesson, but as the source of the authority everything else rests on.',
          ],
        },
        {
          number: 'Movement three',
          heading: 'Fifteen years of archaeology',
          paragraphs: [
            'We rebuilt the entire timeline from interviews, press, filings and archives, and marked the gaps as gaps rather than filling them.',
            'Then we handed it back with the questions only he could answer. What made you certain about that deal. What did the loss actually feel like. Why that hire.',
            'The document that came back was the raw material for everything that followed. Fran travelled to his office to run the sessions in person.',
          ],
        },
      ],
    },
    {
      type: 'piece',
      label: 'One piece',
      pieceTitle: "The opening of the founder's most-read post",
      content: [
        {
          kind: 'p',
          text:
            'My grandfather came to the UK from India in the 1950s, and set up a knitwear factory. My dad took that legacy, and went into design and supply, building an import business supplying retailers across the UK, US, and Europe. And I went into direct-to-consumer retail.',
        },
        {
          kind: 'p',
          text:
            'That was my first real glimpse into how the industry works: volume, margin, relationships.',
        },
        {
          kind: 'p',
          text:
            'After uni, I spent two years on the ground, learning from factories in China, buyers in New York, teams in London. Different cities, different playbooks, but the same mindset everywhere.',
        },
        {
          kind: 'p',
          text:
            'I borrowed money from my dad and launched <span class="redact">&nbsp;</span>. I was 26, full of ideas, and we built fast.',
        },
      ],
      sidebar: {
        metrics: [],
        src: "Published under the founder's name · 2025",
        why:
          'It starts in a factory in the 1950s and arrives at an operating model without the reader noticing the seam. That is the whole method in one piece: the business argument is only credible because the family history came first.',
      },
      note:
        "Brand names are withheld. The text is the client's, written inside the system we built.",
    },
    {
      type: 'prose',
      label: 'What actually happened',
      paragraphs: [
        'More than twenty pieces were written. Three were published.',
        'That sounds like a failure and it is the most interesting part of the engagement. The other seventeen did their work without ever going out. They settled what the company believed, in which words, and what it would not say — and that got used in hiring, in investor conversations, and in how the founder briefed his own team.',
        'One of the published pieces was a job posting. It read like the others because it came from the same system, and it was written to attract people who already thought like operators.',
        'The output was not content. It was a company that could finally hear itself.',
      ],
    },
    {
      type: 'built',
      built: [
        'Five-part strategic diagnostic',
        'Fifteen-year narrative archaeology',
        'Founder positioning and three pillars',
        'Content framework with a five-point voice filter',
        'Twenty-plus written pieces',
      ],
      changes: [
        'A founder narrative where the category had none',
        'The collapse reframed from liability to credential',
        'The system reused for recruitment',
      ],
    },
    {
      type: 'credits',
      facts: [
        { label: 'Client', value: 'Confidential' },
        { label: 'Moment', value: 'Second company' },
        { label: 'Year', value: 'May–June 2025' },
        { label: 'Team', value: 'Fran Herrera' },
      ],
      attribution:
        'CRUDA built the diagnostic, the positioning, the content framework and the written archive. The life is his, and so is the company the story comes from.',
    },
  ],
  credits: {
    facts: [
      { label: 'Client', value: 'Confidential' },
      { label: 'Moment', value: 'Second company' },
      { label: 'Year', value: 'May–June 2025' },
      { label: 'Team', value: 'Fran Herrera' },
    ],
    attribution:
      'CRUDA built the diagnostic, the positioning, the content framework and the written archive. The life is his, and so is the company the story comes from.',
  },
}

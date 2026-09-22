import type { Work } from './types'

export const confidentialFashionFounder: Work = {
  slug: 'confidential-fashion-founder',
  order: 7,
  title:
    'An industry with no faces. The first person to fill the empty seat credibly owns a position that cannot be contested by spend.',
  metaTitle: 'Confidential · On-demand fashion · CRUDA',
  dek:
    'Founder narrative for an on-demand fashion group in Dubai: the position, the fall and the return.',
  client: { name: 'Confidential', role: 'Founder', company: 'On-demand fashion group' },
  confidential: true,
  place: { to: 'Dubai, UAE', city: 'Dubai', country: 'United Arab Emirates' },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'interpreted' },
  axis: 'across',
  moment: 'second-company',

  proof: {
    type: 'change',
    text: 'The system reused for recruitment',
  },

  capsule: [
    "Name a fast fashion founder. Not a brand — a person. Most people in the industry can't, and most people outside it have never tried. The category is enormous, it dresses a generation, and it has no faces.",
    "Our client was the exception waiting to happen. He had built one company, lost it, and built a second one that is now doing $300 million. He had the most tellable story in his industry and no way of telling it — not because he was hiding, but because he had never been asked the questions that would have made him articulate it.",
    'CRUDA built the founder narrative — the position, the fall, the return — that his company is now reusing for recruitment.',
  ],
  takeaways: [
    'The category is full of founders performing success. The decision was to build him as someone who runs things: every piece carries real operational detail — what a decision cost, what it returned, what it broke.',
    'The instinct is to skip the fall. A founder who only tells you about the rise is one of thousands. A founder who has been through the entire cycle — built it, lost it, built it again — is one of very few.',
    'No major player in the category uses its founder in the public story. That vacancy is not an accident of taste — it is a structural opening.',
  ],
  metrics: [
    { value: '$300M', label: 'net revenue · current company', source: 'Client, verified in interview', period: '2025' },
  ],
  sections: [
    {
      h2: 'The rise gets told. The fall gets buried. The return needs both.',
      body: [
        'He had built one company and grown it into a business with hundreds of millions in revenue. It collapsed. He started again, and inside two years the new group was doing $300 million. Almost nobody knew any of that.',
        "He had the most tellable story in his industry and no way of telling it. Not because he was hiding — because he had never been asked the questions that would have made him articulate it.",
      ],
      pull: 'The rise gets told. The fall gets buried. The return needs both.',
    },
    {
      h2: 'The position.',
      body: [
        'The operator, not the influencer · the category is full of founders performing success. The decision was to build him as someone who runs things: every piece carries real operational detail — what a decision cost, what it returned, what it broke. Credibility in this industry comes from specifics, not from tone.',
        'The fall is the asset · a founder who only tells you about the rise is one of thousands. A founder who has been through the entire cycle is one of very few, and that is not something a competitor can acquire, hire or copy.',
        'Occupy the empty seat · no major player in the category uses its founder in its public story. That vacancy is not an accident of taste — it is a structural opening. The first person to fill it credibly owns a position that cannot be contested by spend.',
      ],
    },
    {
      h2: 'How we worked.',
      body: [
        'Movement one · go backwards before going forwards. We did not start with what he wanted to say. We started three generations back — the arc that produced him — and worked forward.',
        "Movement two · translate the operator's detail into public voice. Every post is built from a decision, not from a lesson. The lesson emerges from the decision.",
      ],
    },
  ],
  built: [
    'Founder narrative · position, fall, return',
    'Operator voice · decisions, not lessons',
    'Recruitment story reused from the founder narrative',
  ],
  change: [
    "The system reused for recruitment.",
  ],
  credit: 'CRUDA · Fran Herrera, Founder',
  faq: [],
  moreFrom: [],
  next: 'arman-keshishian',
}

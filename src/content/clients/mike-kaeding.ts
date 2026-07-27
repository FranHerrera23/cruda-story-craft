import type { CaseStudy } from '@/components/CaseStudyLayout'

/* Mike Kaeding — CEO, Norhart.
   Content extracted verbatim from the retired hardcoded page.
   Missing fields left empty; see docs/case-study-data-gaps.md. */

export const mikeKaeding: CaseStudy = {
  slug: 'mike-kaeding',
  vertical: 'Architecture & Design',
  status: 'portfolio',

  title:
    "A construction CEO with $230M in assets and a mission to cut housing costs in half — turned from best-kept secret into a voice policymakers and industry leaders take calls from",

  client: {
    name: 'Mike Kaeding',
    role: 'CEO',
    company: 'Norhart',
    location: 'Minneapolis, Minnesota',
    photo: '/clients/mike-kaeding.webp',
    photoAlt: 'Mike Kaeding',
  },

  publishedAt: '',
  updatedAt: '',

  answerCapsule:
    "Mike Kaeding runs Norhart, a residential construction company with over 1,000 units delivered and $230M in assets, including the largest residential project in Minneapolis history — a $100M building. He inherited the CEO seat when his father died and set the company against a bigger target: cut construction costs in half to solve America's housing crisis. The work was loud, the story was quiet. CRUDA built the narrative system that put twenty years of construction expertise in front of policymakers, industry leaders and media, without changing what Mike sounds like.",

  takeaways: [
    "Being the best-kept secret in an industry that desperately needs what you build is not a growth strategy. Invisibility is a distinct risk.",
    "The arc is the differentiator. Software engineer → builder → CEO after his father's death isn't background — it's what makes Mike's mission read.",
    "Talking about waste, not growth, is the positioning that made a construction CEO sound like a systems thinker.",
  ],

  stats: [
    { value: '$230M', label: 'In assets' },
    { value: '1,000+', label: 'Residential units delivered' },
    { value: '$100M', label: 'Largest residential project in Minneapolis history' },
  ],

  sections: [
    {
      heading: 'Twenty years of construction expertise. A quiet story.',
      body: [
        "Mike Kaeding runs Norhart, a residential construction company in Minnesota. He didn't choose to lead it — his father's unexpected death put him there. What he did next matters more: he turned a family business into the kind of company that builds the largest residential project in Minneapolis history. A $100 million building. Over 1,000 units delivered. $230M in assets.",
        "But none of that showed up online. Mike is a software engineer by training, a builder by conviction. He had a mission — cut construction costs in half to solve America's housing crisis — but no system to make that mission travel. His posts were technical. Intermittent. Impersonal. The work was loud. The story was quiet.",
      ],
      pullQuote:
        "The risk wasn't failure. It was invisibility. Being the best-kept secret in an industry that needs what he's building.",
    },
    {
      heading: 'From son to CEO — arc first, then mission.',
      body: [
        "Mike didn't choose leadership. It chose him. His father's death forced a decision: walk away or step up. CRUDA told that story — not as tragedy, but as transformation. From fear to vision.",
        "That arc is the on-ramp to everything else Mike says. Once a reader has it, the technical posts on waste, regulation and residential construction economics land differently. They read as conviction, not commentary.",
      ],
    },
    {
      heading: 'A builder with systems thinking.',
      body: [
        "Most construction CEOs talk about growth. Mike talks about waste. Why residential construction is broken. How regulation inflates costs. Why reducing waste solves more than building faster.",
        "He's an engineer solving systems problems, and the writing that CRUDA built for him treats him as one. Norhart isn't building apartments. They're building a case for why construction needs to cost less.",
      ],
      pullQuote:
        "Not a developer. Someone challenging an industry's assumptions about what's possible.",
    },
  ],

  testimonial: {
    quote:
      "CRUDA gave me something I didn't know I was missing — a system to turn what I do every day into a story that actually travels. I don't sound like every other CEO anymore. I sound like me.",
    attribution: 'Mike Kaeding, CEO, Norhart',
  },

  faqs: [],
}

import type { Metadata } from 'next'
import AIConciergeContent from './AIConciergeContent'

export const metadata: Metadata = {
  title: 'CRUDA AI Concierge — Your judgment is the asset',
  description:
    'We find the work in your studio that never needed you, and build it so it runs on its own. Free assessment for high-end architecture and design studios.',
  alternates: { canonical: 'https://www.thecruda.com/ai-concierge' },
  openGraph: {
    title: 'CRUDA AI Concierge — Your judgment is the asset',
    description:
      'We find the work in your studio that never needed you, and build it so it runs on its own.',
    url: 'https://www.thecruda.com/ai-concierge',
    type: 'website',
  },
}

// 9 FAQs from section 06, extracted verbatim, in source order.
const FAQS: { q: string; a: string }[] = [
  {
    q: 'What happens on the first call?',
    a: "Forty-five minutes. You walk us through how a project actually moves — where the request comes in, who touches it, where it waits, what ends up back on your desk. We ask about your week, not about software. Within 48 hours you get the map, the three places it's costing you most, and what those hours are worth. No pitch on the call.",
  },
  {
    q: 'What do I actually get for free?',
    a: "A written assessment. How work moves through your studio, where it stalls, what it costs you in hours and money, and which tools would fix each bottleneck — including what they cost and how long they take to set up. It's the same document we'd hand a paying client. Use it with us, with someone else, or on your own.",
  },
  {
    q: 'Why is the first build $499?',
    a: 'Because we\'re building the first ten cases in this industry. We want the cases more than the margin — a studio that can say "this took four days off my month" is worth more to us right now than a bigger invoice. After that, it\'s priced by the job.',
  },
  {
    q: 'What do you need from me?',
    a: 'Three calls and access to whatever the build touches. The first is 45 minutes, the second about 30 for the detail — your pricing logic, your exceptions, how you actually decide — and the third is the handover. Everything in between is our time, not yours.',
  },
  {
    q: 'Do we pay for tools on top?',
    a: "Yes, and they stay in your name. Some builds run entirely on free plans. Others need a paid one. We tell you exactly what's required and what it costs before we start — never after. You own every account, so nothing is hostage to us.",
  },
  {
    q: 'Do we need to be technical?',
    a: "No. If you can explain how your studio works, that's the whole requirement. Most of our clients have never built anything like this. You describe the work, we handle the rest.",
  },
  {
    q: 'What if our information is scattered?',
    a: "Everyone's is. Pricing in a spreadsheet, specs in supplier PDFs, decisions in someone's head. Mapping that is the first call — it's the starting point, not a prerequisite.",
  },
  {
    q: 'Is our data safe?',
    a: "Yours, permissioned, never shared between clients, revoked whenever you want. Everything runs on your accounts, not ours. Pricing and client history stay where they are — we structure access, we don't take custody.",
  },
  {
    q: 'How is this different from hiring someone who does AI?',
    a: "We look at the process before we touch the tools. Software on top of a workaround just makes the workaround faster. Half the time what a studio needs isn't AI at all — it's a form that asks the right questions, or a template that stops the rewriting. We'll tell you when that's the case.",
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'CRUDA AI Concierge',
      serviceType: 'Business process automation for architecture and design studios',
      provider: { '@type': 'Organization', name: 'CRUDA', url: 'https://www.thecruda.com' },
      areaServed: 'United States',
      audience: {
        '@type': 'Audience',
        audienceType: 'High-end architecture and design studios',
      },
      offers: {
        '@type': 'Offer',
        price: '499',
        priceCurrency: 'USD',
        description: 'One system, built and handed over running.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function AIConciergePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <AIConciergeContent />
    </>
  )
}

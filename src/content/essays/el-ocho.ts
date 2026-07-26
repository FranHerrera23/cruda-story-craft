import type { Essay } from '@/components/EssayLayout'

/* ------------------------------------------------------------------
   El Ocho — locked verbatim from essaytemplate.html.
   Trust · 3 min read · Apr 6, 2025 (updated Jul 26, 2026)
------------------------------------------------------------------- */

export const elOcho: Essay = {
  slug: 'el-ocho',
  category: 'Trust',
  readingMinutes: 3,
  publishedAt: '2025-04-06',
  updatedAt: '2026-07-26',

  title: 'The best CRM I ever saw belonged to a man in an Adidas tracksuit',

  answerCapsule:
    "A cybercafé owner in northern Argentina extended credit to eight-year-olds off memory — no CRM, no funnel, no customer experience strategy. Twenty years later I still remember his name. This is about why the trust brands buy with software almost never lands.",

  body: [
    {
      type: 'p',
      lead: true,
      text:
        "When I was eight, my grandma used to walk me two blocks to a place that looked like the underdeveloped version of the internet cafés you'd see in movies.",
    },
    {
      type: 'p',
      text:
        'Rows of chunky monitors that took minutes to boot. Slow ceiling fans. White fluorescent hospital lighting.',
    },
    { type: 'p', text: 'It was called El Cyber del Ocho.' },
    {
      type: 'p',
      text:
        'El Ocho was the owner — a redhead with a massive mustache and an Adidas tracksuit. To us he was the Mark Zuckerberg of the underdeveloped world. He ran the only cybercafé in the neighbourhood, which meant he controlled access to the internet. If you wanted to play, work, or send an email, you went through him.',
    },
    {
      type: 'p',
      text:
        "I didn't have a phone. Or a computer. That was my access to tech: walk to the cyber, load some credit, sit on a plastic chair for hours playing Counter-Strike while downloading music off Ares and praying it wasn't a virus.",
    },

    { type: 'h2', text: "Here's the part I didn't understand until much later" },

    {
      type: 'p',
      text:
        "If El Ocho knew you, you didn't pay upfront. If your time ran out mid-game, he'd spot you a few extra minutes. If he didn't know you, you paid before you sat down. No favours.",
    },

    { type: 'pull', text: 'He was extending credit. To eight-year-olds. Off memory.' },

    {
      type: 'p',
      text:
        'No CRM, no funnel, no customer experience strategy — and yet he was running the exact thing all of that software is built to imitate. He knew our names. He knew what we played. He knew my grandma dropped me off for an hour and came back for me.',
    },
    {
      type: 'p',
      text:
        'And he was making a call, every single time, about who was good for it.',
    },

    { type: 'h2', text: "That's what nobody copies" },

    {
      type: 'p',
      text:
        "El Ocho's trust was expensive. If he misjudged you, he lost money that day. He had skin in it. That's the only reason it meant anything.",
    },
    {
      type: 'p',
      text:
        'Today trust is cheap to fake. A brand can sound warm at zero cost. It can remember your name automatically, wish you a happy birthday, apologise in a tone workshopped by a committee. None of it costs anything, which is exactly why none of it lands.',
    },
    { type: 'p', text: 'Twenty years later I still remember his name.' },
    {
      type: 'p',
      text:
        'I have no idea what happened to El Ocho. The cyber is probably a phone repair shop now, or nothing at all.',
    },
    {
      type: 'p',
      text:
        "But he had something most companies with a Series B will never buy: a neighbourhood full of kids who came back, and one who's still telling the story.",
    },
  ],
}

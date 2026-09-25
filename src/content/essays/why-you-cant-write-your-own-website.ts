import type { Essay } from '@/components/EssayLayout'

/* Why you can't write your own website — publicado 25 septiembre 2026.
   Fuente: `why-you-cant-write-your-own-website.md` que pasó Fran,
   verbatim, con los dos cambios firmados en F46:

   1) Grammy-winning artists, professional footballers → sale de la
      oración de Karen. La versión publicada dice: "She designs the
      lighting for homes worth up to $200 million, for the kind of
      client who never appears in a case study."
   2) "you're selling judgement" → "you're selling judgment" (US EN).

   Los `---` del markdown se rinden con el separator del molde
   (hairline gris con aire), no con `<hr>` crudo. */

export const whyYouCantWriteYourOwnWebsite: Essay = {
  slug: 'why-you-cant-write-your-own-website',
  category: 'Narrative',
  tags: ['Brand', 'Founder'],
  contentType: 'Essay',
  readingMinutes: 6,
  publishedAt: '2026-09-25',
  updatedAt: '2026-09-25',
  language: 'en',

  title: "Why you can't write your own website",

  /* F46 · deck sale del cuerpo (la línea en negrita del md). Va
     entre h1 y byline y también en la fila de /thinking. La línea
     NO se repite dentro del body para no salir dos veces.
     answerCapsule es una frase textual del ensayo, elegida por
     Fran como el resumen de AEO/search (la línea de cierre del
     penúltimo bloque). También aparece en el body en su lugar
     original. */
  deck:
    "Ten years spent reading other people's labels, and I couldn't read my own.",
  answerCapsule:
    "Somebody has to walk in without history, ask the question everyone stopped asking, and be unimpressed by the official version.",

  body: [
    { type: 'separator' },
    {
      type: 'p',
      lead: true,
      text: 'The first version of CRUDA was a PDF.',
    },
    {
      type: 'p',
      text:
        "It went out to people who were being asked to trust something that didn't exist yet, and it opened with an offer I couldn't explain out loud. Not wouldn't. Couldn't. If you had stopped me in the middle of a call and asked what the thing actually was, I'd have given you three answers and none of them would have matched the document in front of you.",
    },
    {
      type: 'p',
      text: "That PDF worked about as well as you'd expect.",
    },
    { type: 'separator' },
    {
      type: 'p',
      text:
        "What followed was two and a half years of trying again. Landing pages. Full sites. More proposals, each one cleaner than the last. I hired developers, paid them properly, and never once managed to brief them well enough to get what I had in my head, because what I had in my head wasn't finished. They built exactly what I described. The problem was the description.",
    },
    {
      type: 'p',
      text:
        "That's the part I'd change if I could: I spent money looking for a design solution to a definition problem. A site is a finished sentence. You can't hand someone a sentence with a hole in the middle and ask them to make the punctuation better.",
    },
    {
      type: 'p',
      text: 'Fourteen versions, if you count the ones that never went live.',
    },
    {
      type: 'p',
      text:
        'And the whole time, the day job was working. In 2021, Karen Mannheim hired me — three years before CRUDA existed as a company. She designs the lighting for homes worth up to $200 million, for the kind of client who never appears in a case study. Thirty-three years of it, a record any architect in Lima would recognize on sight, and almost nobody outside Peru could see it. We spent five years putting that record in front of the people who specify the work. Revenue grew 46%. The largest project closed at $380K. Forbes Perú named her one of the fifty most powerful women in the country, and nobody pitched it.',
    },
    {
      type: 'p',
      text:
        "Girish Sehgal spent twenty-five years running luxury hotels — Four Seasons GM, then Taj — and then moved to a hospital in Abu Dhabi as Chief Patient Experience Officer. On paper it read like an accident. It took one page to make it read like the decision it was: hospitality was never an industry to him. It's a mindset. And the place it matters most is where people are afraid.",
    },
    {
      type: 'p',
      text:
        "José Mannheim co-founded AGP, the company that makes armored glass for the Pentagon, Tesla and Audi. At eighty he started another one, selling to his old company's competitors, and published under his own name for the first time in his life.",
    },
    {
      type: 'p',
      text:
        'I could do that. I could do it well enough that people paid for it, referred me, and came back. And I could not do it for myself.',
    },
    { type: 'separator' },
    {
      type: 'p',
      text:
        "There's a thing people say about not being able to read the label from inside the jar. It sounds like a nice line until you're the jar.",
    },
    {
      type: 'p',
      text:
        "Here is what it actually feels like. You sit down to write the offer. You know the work, you've done it two hundred times, and every sentence you produce is either too small — a list of deliverables that sounds like anyone's — or too large, one of those sentences about story and truth that could be pasted onto any company on earth. Both are wrong and you can tell they're wrong, and you cannot tell why, because the thing you'd normally use to find out is the one thing you don't have. Distance.",
    },
    {
      type: 'p',
      text:
        "With a client, distance is free. You arrive knowing nothing. You ask the stupid question, the one nobody in the company has asked since 2014 because everyone assumes everyone else knows the answer. You hear the founder say something in passing, on minute forty of a call, in a tone completely different from the one they use for the official version — and that's it, that's the sentence, and you take it because you have no history with it. Nothing in you is protecting it.",
    },
    {
      type: 'p',
      text:
        'With yourself there is no minute forty. You are in the room the entire time.',
    },
    {
      type: 'p',
      text:
        "A client of mine — someone who ran turnarounds for a private equity firm and later sold his software company for seven figures — told me that building a communications company is harder than what he used to do. I've thought about that more than he probably expects. In a turnaround, the numbers tell you where you are. Inventory is a fact. A P&L closes. Here there is no closing number: you're selling judgment about something abstract, to people who have to decide whether to trust you before they've seen anything, and the only proof you can show is work that lives under someone else's name.",
    },
    {
      type: 'p',
      text:
        "That is a hard business to build. It's also, for the same reason, not a crowded one at the top.",
    },
    { type: 'separator' },
    {
      type: 'p',
      text: 'So: how long has it been on your list?',
    },
    {
      type: 'p',
      text:
        "Not the redesign. The other thing — the sentence. The one you'd need to write before any designer could help you. I'd guess you've opened that document more than once, written a paragraph, read it back, and found that it described a company that isn't yours. It could be anyone's. That's the tell, and it isn't a writing problem.",
    },
    {
      type: 'p',
      text:
        "I'd also guess that somewhere in the last year you explained your work to a stranger at a dinner, or on a plane, or in a hallway at a conference where nobody knew you — and it came out clean. Better than anything on your site. It happens because the stranger doesn't know the official version, so you don't reach for it. You just say the true thing.",
    },
    {
      type: 'p',
      text:
        "The question worth sitting with isn't why the site is bad. It's why you can say it to a stranger and not write it down.",
    },
    { type: 'separator' },
    {
      type: 'p',
      text:
        'I started doing this for other people about ten years ago, on the agency side first, on accounts where I was one of many hands. What I learned there was how to take things off. Most of what a company says about itself was added by someone who needed to fill a slide, and the work is to strip until what\'s left is only theirs — the thing they would have said anyway, the thing they say at minute forty.',
    },
    {
      type: 'p',
      text:
        "It took me fourteen tries to do that to my own company, and I only got there when I stopped treating it as a design cycle and admitted I couldn't name the thing. The offer came first. The words came second. The site was last, and it took two weeks, because by then there was nothing left to decide.",
    },
    {
      type: 'p',
      text:
        'It says: we translate cultures into business. Everything else on it is a case with numbers and a source under them, and the prices are published.',
    },
    {
      type: 'p',
      text:
        "That's the whole label. Two and a half years to read it from inside the jar.",
    },
    { type: 'separator' },
    {
      type: 'p',
      text:
        "Which is the argument for the job existing at all. Not as a service — as a structural fact. There is no version of you that can stand outside your own work, because the only vantage point that helps is the one you gave up the day you started caring about it. Somebody has to walk in without history, ask the question everyone stopped asking, and be unimpressed by the official version. It doesn't have to be me.",
    },
    {
      type: 'p',
      text: "But it has to be someone, and it can't be you.",
    },
    { type: 'separator' },
    {
      type: 'signature',
      text: 'thecruda.com',
    },
  ],
}

import type { Metadata } from 'next'
import Link from 'next/link'
import './approach.css'

/* Brief v2 Task 4 + `/approach` copy doc — ready-to-build page.
   The copy is locked and derived from Content Engine SOP + M2Develop
   scope. Ships without noindex — the copy exists, so the page ships. */

const BASE = 'https://www.thecruda.com'

const ONE_LINER =
  'How CRUDA works: four phases, one weekly call, and a rule that nothing gets written until we know what it is about.'

export const metadata: Metadata = {
  title: 'Approach — CRUDA',
  /* Task 7 pattern — one-liner drives description + og:description. */
  description: ONE_LINER,
  alternates: { canonical: `${BASE}/approach` },
  openGraph: {
    title: 'Approach — CRUDA',
    description: ONE_LINER,
    url: `${BASE}/approach`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Approach — CRUDA',
    description: ONE_LINER,
    images: [`${BASE}/logo.png`],
  },
}

export default function ApproachPage() {
  return (
    <article className="ap grid-container">
      <header data-reveal="text" className="ap-head">
        <p className="ap-eyebrow mono">Approach</p>
        <h1 className="ap-h1">We do not start by writing.</h1>
        <p className="ap-sub">{ONE_LINER}</p>
      </header>

      <div data-reveal="text" className="ap-lede">
        <p>
          Most content work starts at the end. Someone opens a calendar, picks
          a topic, and writes something.
        </p>
        <p>
          We start four steps earlier, because a piece with a weak idea cannot
          be fixed by writing it better.
        </p>
      </div>

      <section data-reveal="text" className="ap-phase" id="capture">
        <div className="ap-phase-head">
          <span className="ap-phase-n mono">1</span>
          <span className="ap-phase-name mono">Capture</span>
        </div>
        <div className="ap-phase-body">
          <h2>You talk. We collect.</h2>
          <p>
            The raw material comes from one call a week. That is the whole ask
            on your side. No writing, no reviewing drafts at midnight, no
            filling in a brief.
          </p>
          <p>
            We also collect what already exists: the voice note you sent at
            the airport, the notebook page, the thing you said on a client
            call that nobody wrote down, the number from last quarter with the
            date attached.
          </p>
          <p>Three rules govern this phase.</p>
          <p>
            <strong>The quote is sacred.</strong> We transcribe what you said
            the way you said it — with the filler word, with the mistake, with
            the regionalism. That is where a person actually sounds like
            themselves. Cleaning it up kills it.
          </p>
          <p>
            <strong>Nothing gets edited while it is being captured.</strong>{' '}
            Editing during capture kills the rawness. Editing happens later, on
            purpose.
          </p>
          <p>
            <strong>The number travels with the story.</strong> A result
            without a figure attached is not quotable — not by a case study,
            not by a journalist, not by a language model.
          </p>
        </div>
      </section>

      <section data-reveal="text" className="ap-phase" id="diagnosis">
        <div className="ap-phase-head">
          <span className="ap-phase-n mono">2</span>
          <span className="ap-phase-name mono">Diagnosis</span>
        </div>
        <div className="ap-phase-body">
          <h2>Substance before form. Nothing is written until four things are locked.</h2>
          <p>
            This is the step almost everyone skips, and the one that kills the
            most work.
          </p>
          <p>
            <strong>The core idea.</strong> Not a topic — an argument.
            &ldquo;Branding&rdquo; is a topic. &ldquo;A brand is time and
            money, and there is no shortcut&rdquo; is an idea. If it does not
            fit in one sentence, we do not have it yet.
          </p>
          <p>
            <strong>The tension.</strong> Two forces that appear to collide.
            Without tension there is no piece — there is description.
          </p>
          <p>
            <strong>The reader.</strong> Not &ldquo;everyone.&rdquo; One
            specific person with one specific blind spot, who should come away
            productively uncomfortable.
          </p>
          <p>
            <strong>The arc.</strong> Where it opens, where the story turns
            into a concept, where it speaks directly to the reader, and where
            it lands.
          </p>
          <p>
            Before a word gets written, we come back to you with all four,
            plus what needs fact-checking, what can be named, and what is off
            the record. You approve the arc. Then we write.
          </p>
          <p className="ap-pull">
            <strong>A piece with a weak idea cannot be fixed by writing it better.</strong>
          </p>
        </div>
      </section>

      <section data-reveal="text" className="ap-phase" id="mother-piece">
        <div className="ap-phase-head">
          <span className="ap-phase-n mono">3</span>
          <span className="ap-phase-name mono">The mother piece</span>
        </div>
        <div className="ap-phase-body">
          <h2>One long piece a week. Everything else comes out of it.</h2>
          <p>
            Between 1,200 and 2,500 words. Under that is a long post, not an
            essay. Over it, something is usually padding.
          </p>
          <p>
            From that single piece come the week&apos;s posts — three on
            LinkedIn, three on X, three on Instagram, carousels, captioned
            photographs. Not because volume matters, but because nine pieces
            derived from one argument stay coherent, and nine pieces written
            separately do not.
          </p>
          <p>
            This is why the weekly call is the whole input. One conversation
            becomes one argument becomes a week of publishing.
          </p>
        </div>
      </section>

      <section data-reveal="text" className="ap-phase" id="editing">
        <div className="ap-phase-head">
          <span className="ap-phase-n mono">4</span>
          <span className="ap-phase-name mono">Editing</span>
        </div>
        <div className="ap-phase-body">
          <h2>Six passes. Nothing ships without all six.</h2>
          <p>
            Does it sound like you, or like a copywriter doing an impression
            of you? Does it sound like AI?
          </p>
          <p>
            Then: the red flags come out. Then the cut — twenty percent,
            always, because there is always twenty percent. Then rhythm, read
            aloud. Then the facts. Then the last pass, cold.
          </p>
        </div>
      </section>

      <section data-reveal="text" className="ap-phase" id="run-it">
        <div className="ap-phase-head">
          <span className="ap-phase-n mono">·</span>
          <span className="ap-phase-name mono">And then we run it</span>
        </div>
        <div className="ap-phase-body">
          <p>
            Writing is the part everyone talks about. Running it is the part
            that determines whether any of it matters.
          </p>
          <p>
            <strong>We publish it.</strong> On time, every week, on every
            channel.
          </p>
          <p>
            <strong>We answer it.</strong> Comments replied to. People who
            wrote in, written back to by name.
          </p>
          <p>
            <strong>We measure it.</strong> Not impressions. Who wrote back,
            who read what, what worked.
          </p>
          <p>
            <strong>We improve it.</strong> Next month is written knowing what
            happened this month.
          </p>
          <p>
            <strong>And we keep the contacts.</strong> Every name in one
            place — who wrote, when, and what they were looking at. Nothing
            gets lost, and nobody has to remember anything.
          </p>
          <p className="ap-pull">
            <strong>This is the part that turns posts into a list of people you can actually call.</strong>
          </p>
        </div>
      </section>

      <section data-reveal="text" className="ap-block" aria-label="What CRUDA is not">
        <h2>What this is not</h2>
        <p>We are not a LinkedIn ghostwriting service.</p>
        <p>We are not a content calendar.</p>
        <p>We do not manufacture founder personas.</p>
        <p>We do not do crisis management or press handling.</p>
        <p>
          We work before the channel. We solve the narrative problem first, so
          that everything published afterwards has something to say.
        </p>
      </section>

      <section data-reveal="text" className="ap-block" aria-label="When companies call CRUDA">
        <h2>When companies call us</h2>
        <ul className="ap-list">
          <li>
            A company with decades of local reputation entering a market that
            has never heard of it
          </li>
          <li>
            A founder whose personal history is larger than the company&apos;s,
            and starting to eclipse it
          </li>
          <li>A business handing the work to whoever comes next</li>
          <li>A company that grew faster than its own explanation of itself</li>
          <li>
            A leader who needs a public voice proportional to what they are
            responsible for
          </li>
        </ul>
      </section>

      <section data-reveal="text" className="ap-block" aria-label="How a project starts">
        <h2>How a project starts</h2>
        <p>
          One conversation. We ask what you are actually trying to do, and
          what the market currently believes about you.
        </p>
        <p>
          If those two things are the same, you do not need us. If they are
          not, that gap is the work.
        </p>
        <p className="ap-cta-line">
          <Link href="/contact" className="link">
            Start a conversation
          </Link>
          .
        </p>
      </section>
    </article>
  )
}

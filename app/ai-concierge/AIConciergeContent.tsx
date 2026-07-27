'use client'

import { useEffect, useRef } from 'react'
import './ai-concierge.css'

/* ------------------------------------------------------------------
   CRUDA AI Concierge — content, copy locked from cruda-ai-concierge.html.
   No paraphrasing. Interactions: FAQ accordion, reveal-on-scroll,
   How-it-works progress line. All respect prefers-reduced-motion.
------------------------------------------------------------------- */

const BOOK_HREF = '[FRAN — pegar link de agenda]' // [FRAN] literal, do not invent a URL

export default function AIConciergeContent() {
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // A. FAQ accordion
    const fqs = Array.from(document.querySelectorAll<HTMLButtonElement>('.aic .fq'))
    const onFqClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement
      btn.parentElement?.classList.toggle('open')
    }
    fqs.forEach((b) => b.addEventListener('click', onFqClick))

    // B. Reveal on scroll
    const rvs = Array.from(document.querySelectorAll<HTMLElement>('.aic .rv'))
    let io: IntersectionObserver | null = null
    if (!reduce) {
      rvs.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 80}ms`
      })
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              io?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
      rvs.forEach((el) => io!.observe(el))
    }

    // C. How-it-works progress line
    const steps = stepsRef.current
    let onScroll: (() => void) | null = null
    let onResize: (() => void) | null = null
    if (steps && !reduce) {
      const items = Array.from(steps.querySelectorAll<HTMLElement>('.st'))
      const tick = () => {
        const r = steps.getBoundingClientRect()
        const vh = window.innerHeight
        const p = Math.max(0, Math.min(1, (vh * 0.7 - r.top) / r.height))
        steps.style.setProperty('--line', `${p * 100}%`)
        items.forEach((it) => {
          it.classList.toggle('on', it.getBoundingClientRect().top < vh * 0.7)
        })
      }
      onScroll = tick
      onResize = tick
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onResize)
      tick()
    }

    return () => {
      fqs.forEach((b) => b.removeEventListener('click', onFqClick))
      io?.disconnect()
      if (onScroll) window.removeEventListener('scroll', onScroll)
      if (onResize) window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="aic">
      <header className="aic-header">
        <div className="w">
          <p className="mono hero-eye">CRUDA AI Concierge</p>
          <h1 className="h1 hero-h">
            Your creative energy is the asset. <span className="accent">Everything else</span> should
            run without you.
          </h1>
          <div className="hero-row">
            <p className="body-lg">
              We find the work in your studio that never needed you, and build it so it runs on its
              own.
            </p>
            <div>
              <a href={BOOK_HREF} className="btn">
                Book a call
              </a>
              <p className="btn-note">Free · 45 minutes · No pitch</p>
            </div>
          </div>
        </div>
      </header>

      {/* 01 The problem */}
      <section>
        <div className="w">
          <div className="sec-head rv">
            <div className="sec-n">01</div>
            <div>
              <p className="mono sec-label">The problem</p>
              <h2 className="h2">Your studio knows more than any one person in it.</h2>
            </div>
          </div>
          <div className="prob">
            <div className="prob-i rv">
              <h3 className="h3">It lives everywhere.</h3>
              <p>
                Pricing in a spreadsheet. Specs in a supplier&apos;s PDF. That ceiling detail from
                2023 — in someone&apos;s head.
              </p>
            </div>
            <div className="prob-i rv">
              <h3 className="h3">So everything comes back to you.</h3>
              <p>
                Your team could answer most of it. The part only you know is the part that stops
                them.
              </p>
            </div>
            <div className="prob-i rv">
              <h3 className="h3">And your own work goes last.</h3>
              <p>
                After the emails. After the quote. Whatever&apos;s left goes to the thing you actually
                do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 What we build */}
      <section>
        <div className="w">
          <div className="sec-head rv">
            <div className="sec-n">02</div>
            <div>
              <p className="mono sec-label">What we build</p>
              <h2 className="h2">What this looks like in practice.</h2>
            </div>
          </div>

          <p className="mono grp rv">Start here</p>
          <div className="builds">
            <div className="b rv">
              <span className="b-n">01</span>
              <svg className="dg" viewBox="0 0 200 118" aria-hidden="true">
                <path className="l" style={{ ['--len' as string]: 200 } as React.CSSProperties} d="M18 30 h52 v58 h-52 z" />
                <path className="l" style={{ ['--len' as string]: 140 } as React.CSSProperties} d="M28 44 h32 M28 56 h32 M28 68 h20" />
                <path className="l-r" style={{ ['--len' as string]: 130 } as React.CSSProperties} d="M76 59 h44" />
                <path className="l-r" style={{ ['--len' as string]: 40 } as React.CSSProperties} d="M112 53 l8 6 l-8 6" />
                <path className="l" style={{ ['--len' as string]: 200 } as React.CSSProperties} d="M128 30 h54 v58 h-54 z" />
                <path className="l" style={{ ['--len' as string]: 100 } as React.CSSProperties} d="M138 46 h34 M138 58 h34 M138 70 h22" />
                <text x="18" y="22">REQUEST</text>
                <text x="128" y="22">QUOTE</text>
              </svg>
              <h3 className="h3">Speed to Quote</h3>
              <p>Requests arrive complete. You quote the same day instead of chasing information.</p>
            </div>
            <div className="b rv">
              <span className="b-n">02</span>
              <svg className="dg" viewBox="0 0 200 118" aria-hidden="true">
                <path className="l-g" style={{ ['--len' as string]: 120 } as React.CSSProperties} d="M18 24 h40 v18 h-40 z" />
                <path className="l-g" style={{ ['--len' as string]: 120 } as React.CSSProperties} d="M18 50 h40 v18 h-40 z" />
                <path className="l-g" style={{ ['--len' as string]: 120 } as React.CSSProperties} d="M18 76 h40 v18 h-40 z" />
                <path className="l-r" style={{ ['--len' as string]: 120 } as React.CSSProperties} d="M64 33 h20 v26 M64 59 h20 M64 85 h20 v-26" />
                <path className="l" style={{ ['--len' as string]: 250 } as React.CSSProperties} d="M104 24 h78 v70 h-78 z" />
                <path className="l" style={{ ['--len' as string]: 150 } as React.CSSProperties} d="M116 42 h54 M116 56 h54 M116 70 h36" />
                <circle className="dot" cx="90" cy="59" r="2.6" />
              </svg>
              <h3 className="h3">Speed to Proposal</h3>
              <p>Scope, phases, fees — assembled from blocks you&apos;ve already written.</p>
            </div>
            <div className="b rv">
              <span className="b-n">03</span>
              <svg className="dg" viewBox="0 0 200 118" aria-hidden="true">
                <path className="l" style={{ ['--len' as string]: 280 } as React.CSSProperties} d="M30 92 v-52 l40 -22 l40 22 v52 z" />
                <path className="l-g" style={{ ['--len' as string]: 80 } as React.CSSProperties} d="M52 92 v-30 h36 v30" />
                <path className="l-r" style={{ ['--len' as string]: 70 } as React.CSSProperties} d="M124 66 h40" />
                <path className="l-r" style={{ ['--len' as string]: 40 } as React.CSSProperties} d="M156 60 l8 6 l-8 6" />
                <path className="l" style={{ ['--len' as string]: 60 } as React.CSSProperties} d="M168 52 h14 v28 h-14" />
                <circle className="dot" cx="118" cy="66" r="2.6" />
              </svg>
              <h3 className="h3">Clean Handoff</h3>
              <p>Every project closes the same way. Nobody builds the package from scratch.</p>
            </div>
          </div>

          <p className="mono grp second rv">Bigger builds</p>
          <div className="builds">
            <div className="b rv">
              <span className="b-n">04</span>
              <svg className="dg" viewBox="0 0 200 118" aria-hidden="true">
                <path className="l-g" style={{ ['--len' as string]: 150 } as React.CSSProperties} d="M20 22 h48 M20 34 h48 M20 46 h34" />
                <path className="l-g" style={{ ['--len' as string]: 150 } as React.CSSProperties} d="M20 66 h48 M20 78 h48 M20 90 h34" />
                <path className="l-r" style={{ ['--len' as string]: 120 } as React.CSSProperties} d="M84 56 h26" />
                <path className="l" style={{ ['--len' as string]: 260 } as React.CSSProperties} d="M120 20 h60 v78 h-60 z" />
                <path className="l" style={{ ['--len' as string]: 180 } as React.CSSProperties} d="M120 36 h60 M132 52 h36 M132 64 h36 M132 76 h24" />
                <circle className="dot" cx="112" cy="56" r="2.6" />
              </svg>
              <h3 className="h3">Presentation System</h3>
              <p>Pitch, onboarding, partners — one system. Every deck at the same level, in hours.</p>
            </div>
            <div className="b rv">
              <span className="b-n">05</span>
              <svg className="dg" viewBox="0 0 200 118" aria-hidden="true">
                <circle className="l" style={{ ['--len' as string]: 190 } as React.CSSProperties} cx="100" cy="59" r="30" />
                <path className="l-g" style={{ ['--len' as string]: 60 } as React.CSSProperties} d="M100 12 v14 M148 59 h14 M100 92 v14 M38 59 h14" />
                <path className="l-g" style={{ ['--len' as string]: 60 } as React.CSSProperties} d="M134 25 l10 -10 M134 93 l10 10 M66 93 l-10 10 M66 25 l-10 -10" />
                <path className="l-r" style={{ ['--len' as string]: 80 } as React.CSSProperties} d="M88 59 h24 M100 47 v24" />
                <circle className="dot" cx="100" cy="59" r="2.8" />
                <text x="74" y="112">ANSWERED</text>
              </svg>
              <h3 className="h3">Specs on Demand</h3>
              <p>The same twenty questions, answered without interrupting anyone.</p>
            </div>
            <div className="b rv">
              <span className="b-n">06</span>
              <svg className="dg" viewBox="0 0 200 118" aria-hidden="true">
                <path className="l" style={{ ['--len' as string]: 240 } as React.CSSProperties} d="M40 88 h120 M40 88 v-14 h120 v14 M40 74 v-14 h120 v14 M40 60 v-14 h120 v14" />
                <path className="l-r" style={{ ['--len' as string]: 100 } as React.CSSProperties} d="M100 32 v-14 M100 18 h-24 M100 18 h24" />
                <circle className="dot" cx="76" cy="18" r="2.6" />
                <circle className="dot" cx="124" cy="18" r="2.6" />
                <circle className="dot" cx="100" cy="32" r="2.6" />
                <text x="60" y="106">EVERY PROJECT</text>
              </svg>
              <h3 className="h3">Studio Memory</h3>
              <p>What the studio has learned, where people can find it. Not in one head.</p>
            </div>
          </div>

          <p className="b-note rv">
            Examples, not a menu. Built on what you already use — nothing gets ripped out. The call
            tells us which one is worth doing first.
          </p>
        </div>
      </section>

      {/* 03 How it works */}
      <section>
        <div className="w">
          <div className="sec-head rv">
            <div className="sec-n">03</div>
            <div>
              <p className="mono sec-label">How it works</p>
              <h2 className="h2">
                You leave the first call with a plan. Whether you build it with us or not.
              </h2>
            </div>
          </div>
          <div className="steps reveal-group" id="steps" ref={stepsRef}>
            <div className="st rv reveal">
              <div className="st-n">01</div>
              <div>
                <h3 className="h3">The call</h3>
                <p>
                  Forty-five minutes. You walk us through how the work actually moves: where a
                  request comes in, what happens next, where it stops, what comes back to you.
                </p>
              </div>
            </div>
            <div className="st rv reveal">
              <div className="st-n">02</div>
              <div>
                <h3 className="h3">What you get back</h3>
                <p>
                  Within 48 hours: a map of how work moves through your studio. The three places
                  it&apos;s costing you most. What those hours are worth in money. And which tools
                  would fix each one, with what they cost and how long they take to set up.
                </p>
                <p className="keep">
                  Yours to keep. Use it with us, with someone else, or on your own.
                </p>
              </div>
            </div>
            <div className="st rv reveal">
              <div className="st-n">03</div>
              <div>
                <h3 className="h3">If you want us to build it</h3>
                <p>
                  We take the first one and build it. One call for the detail, then it&apos;s running
                  before we hang up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 What it costs */}
      <section>
        <div className="w">
          <div className="sec-head rv">
            <div className="sec-n">04</div>
            <div>
              <p className="mono sec-label">What it costs</p>
              <h2 className="h2">One problem, start to finish.</h2>
            </div>
          </div>
          <div className="price">
            <div className="pc rv">
              <p className="mono pc-n">The first call</p>
              <p className="pc-p free">Free</p>
              <p className="pc-d">
                A map of how work moves through your studio, and what&apos;s worth building first.
                Yours whether you continue or not.
              </p>
            </div>
            <div className="pc rv">
              <p className="mono pc-n">Your first build</p>
              <p className="pc-p">$499</p>
              <p className="pc-d">
                One system, built and handed over running. If it doesn&apos;t work, you get every
                dollar back.
              </p>
            </div>
          </div>
          <div className="p-note">
            <p className="rv">
              We&apos;re building the first ten cases in this industry. That&apos;s the price while
              we do it — after that, it&apos;s priced by the job. No retainer, no lock-in.
            </p>
            <p className="rv">
              Tools and subscriptions stay in your accounts, in your name. We tell you what&apos;s
              needed and what it costs before we start.
            </p>
          </div>
        </div>
      </section>

      {/* 05 Why CRUDA */}
      <section>
        <div className="w">
          <div className="sec-head rv">
            <div className="sec-n">05</div>
            <div>
              <p className="mono sec-label">Why CRUDA</p>
              <h2 className="h2">We&apos;re not AI people. We work in your world.</h2>
            </div>
          </div>
          <div className="why">
            <div className="wy rv">
              <h4 className="h4">We understand high-end.</h4>
              <p>
                Our clients work with RAMSA, Oppenheim, Kobi Karp. Four Seasons Residences. Fisher
                Island. Abu Dhabi. Rooms where one presentation decides a project.
              </p>
            </div>
            <div className="wy rv">
              <h4 className="h4">Nine years in this industry.</h4>
              <p>Architecture studios, construction firms, interior designers, manufacturers.</p>
            </div>
            <div className="wy rv">
              <h4 className="h4">And twenty industries before it.</h4>
              <p>
                CPG. Tech. Private equity. Fintech. Hospitality. That&apos;s where the pattern
                recognition comes from.
              </p>
            </div>
            <div className="wy rv">
              <h4 className="h4">We know what a spec sheet is.</h4>
              <p>
                Why the quote takes four days. Why the person who designs best is the one answering
                emails at nine.
              </p>
            </div>
            <div className="wy rv">
              <h4 className="h4">We look at the process first.</h4>
              <p>Half the time the answer isn&apos;t AI at all.</p>
            </div>
            <div className="wy rv">
              <h4 className="h4">This is one of three.</h4>
              <p>
                CRUDA also builds narrative for high-end A&amp;D studios, and takes early positions
                in athletes. Same thesis, three doors.
              </p>
            </div>
          </div>
          <div className="pull rv">
            <p className="serif">Creativity doesn&apos;t run out. The energy to use it does.</p>
          </div>
        </div>
      </section>

      {/* 06 Questions */}
      <section>
        <div className="w">
          <div className="sec-head rv">
            <div className="sec-n">06</div>
            <div>
              <p className="mono sec-label">Questions</p>
              <h2 className="h2">Everything you&apos;d ask on the call.</h2>
            </div>
          </div>
          <div className="faq">
            <div className="fi rv">
              <button className="fq">What happens on the first call?</button>
              <div className="fa">
                <p>
                  Forty-five minutes. You walk us through how a project actually moves — where the
                  request comes in, who touches it, where it waits, what ends up back on your desk.
                  We ask about your week, not about software. Within 48 hours you get the map, the
                  three places it&apos;s costing you most, and what those hours are worth. No pitch on
                  the call.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">What do I actually get for free?</button>
              <div className="fa">
                <p>
                  A written assessment. How work moves through your studio, where it stalls, what it
                  costs you in hours and money, and which tools would fix each bottleneck — including
                  what they cost and how long they take to set up. It&apos;s the same document
                  we&apos;d hand a paying client. Use it with us, with someone else, or on your own.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">Why is the first build $499?</button>
              <div className="fa">
                <p>
                  Because we&apos;re building the first ten cases in this industry. We want the cases
                  more than the margin — a studio that can say &ldquo;this took four days off my
                  month&rdquo; is worth more to us right now than a bigger invoice. After that,
                  it&apos;s priced by the job.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">What do you need from me?</button>
              <div className="fa">
                <p>
                  Three calls and access to whatever the build touches. The first is 45 minutes, the
                  second about 30 for the detail — your pricing logic, your exceptions, how you
                  actually decide — and the third is the handover. Everything in between is our time,
                  not yours.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">Do we pay for tools on top?</button>
              <div className="fa">
                <p>
                  Yes, and they stay in your name. Some builds run entirely on free plans. Others
                  need a paid one. We tell you exactly what&apos;s required and what it costs before
                  we start — never after. You own every account, so nothing is hostage to us.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">Do we need to be technical?</button>
              <div className="fa">
                <p>
                  No. If you can explain how your studio works, that&apos;s the whole requirement.
                  Most of our clients have never built anything like this. You describe the work, we
                  handle the rest.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">What if our information is scattered?</button>
              <div className="fa">
                <p>
                  Everyone&apos;s is. Pricing in a spreadsheet, specs in supplier PDFs, decisions in
                  someone&apos;s head. Mapping that is the first call — it&apos;s the starting point,
                  not a prerequisite.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">Is our data safe?</button>
              <div className="fa">
                <p>
                  Yours, permissioned, never shared between clients, revoked whenever you want.
                  Everything runs on your accounts, not ours. Pricing and client history stay where
                  they are — we structure access, we don&apos;t take custody.
                </p>
              </div>
            </div>
            <div className="fi rv">
              <button className="fq">
                How is this different from hiring someone who does AI?
              </button>
              <div className="fa">
                <p>
                  We look at the process before we touch the tools. Software on top of a workaround
                  just makes the workaround faster. Half the time what a studio needs isn&apos;t AI at
                  all — it&apos;s a form that asks the right questions, or a template that stops the
                  rewriting. We&apos;ll tell you when that&apos;s the case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="close" id="book">
        <div className="w">
          <h2 className="h2 rv">Find out where your week actually goes.</h2>
          <p className="body-lg rv">
            Forty-five minutes, free. You&apos;ll leave with a map of how work moves through your
            studio, and the first thing worth building.
          </p>
          <div className="close-row">
            <p className="mono rv" style={{ color: 'var(--ink-2)' }}>
              CRUDA AI Concierge
            </p>
            <div className="rv">
              <a href={BOOK_HREF} className="btn">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="aic-footer">
        <div className="w ft">
          <span className="mono" style={{ color: 'var(--ink-2)' }}>
            CRUDA
          </span>
          <div className="ft-links mono">
            <a href="https://www.thecruda.com/architecturedesign">Architecture &amp; Design</a>
            <a href="https://www.thecruda.com/sports">Sports</a>
            <a href="https://www.thecruda.com">thecruda.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

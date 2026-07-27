'use client'

/* /contact — parche P1.1.
   Every CTA on the site ends up here. Two clear paths: the Calendly
   for a 45-min call, or an email address for anything else. No dead
   end. */

const CALENDLY = 'https://calendly.com/cruda-intro/narrative-sparring-live-1'
const HELLO = 'hello@thecruda.com'

export default function ContactContent() {
  return (
    <div className="contact-root">
      <main className="contact-shell">
        <section className="contact-lede reveal">
          <p className="mono contact-eyebrow">Contact</p>
          <h1 className="display--sm contact-h1">Let&apos;s talk about your story.</h1>
          <p className="contact-sub">
            Forty-five minutes. No pitch. If it&apos;s a fit, we take it from there. If it
            isn&apos;t, you leave with a map of what would be.
          </p>
        </section>

        <section className="contact-actions reveal">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener"
            className="contact-primary"
          >
            <span className="contact-primary-lede mono">Book a call</span>
            <span className="contact-primary-body">
              45 minutes on the calendar. Pick a slot that works.
            </span>
            <span className="contact-primary-arrow mono" aria-hidden="true">→</span>
          </a>

          <div className="contact-alt">
            <p className="mono contact-alt-label">Or write</p>
            <a href={`mailto:${HELLO}`} className="contact-alt-mail">
              {HELLO}
            </a>
            <p className="contact-alt-note">
              For press, hiring, or anything that isn&apos;t a discovery call.
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .contact-root {
          background: var(--white);
          color: var(--ink);
          font-family: 'Archivo', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .contact-shell {
          max-width: 1080px;
          margin: 0 auto;
          padding: calc(96px + 12vh) clamp(24px, 5vw, 72px) 120px;
        }
        .mono {
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 500;
          font-size: 11px;
          letter-spacing: var(--track-mono, 0.12em);
          text-transform: uppercase;
        }
        .contact-eyebrow {
          color: var(--ink-2);
          margin-bottom: 28px;
        }
        .contact-h1 {
          color: var(--ink);
          max-width: 22ch;
          margin-bottom: 24px;
        }
        .contact-sub {
          font-size: clamp(17px, 1.6vw, 20px);
          line-height: 1.55;
          color: var(--ink-2);
          max-width: 56ch;
        }
        .contact-actions {
          margin-top: clamp(56px, 8vh, 96px);
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
          gap: clamp(24px, 4vw, 56px);
          align-items: stretch;
        }

        .contact-primary {
          display: grid;
          grid-template-columns: 1fr auto;
          grid-template-areas:
            'lede arrow'
            'body arrow';
          gap: 12px 24px;
          align-items: baseline;
          text-decoration: none;
          background: var(--ink);
          color: var(--white);
          padding: 48px 56px;
          transition: background-color 300ms
            var(--ease, cubic-bezier(0.16, 1, 0.3, 1));
          min-height: 220px;
        }
        .contact-primary:hover {
          background-color: var(--accent);
        }
        .contact-primary-lede {
          grid-area: lede;
          color: var(--white);
        }
        .contact-primary-body {
          grid-area: body;
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(24px, 2.8vw, 36px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          max-width: 18ch;
        }
        .contact-primary-arrow {
          grid-area: arrow;
          align-self: end;
          color: var(--white);
          font-size: 20px;
          letter-spacing: 0;
          text-transform: none;
        }

        .contact-alt {
          background: var(--cream);
          padding: 40px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-alt-label {
          color: var(--ink-2);
          margin-bottom: 16px;
        }
        .contact-alt-mail {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(24px, 2.4vw, 32px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 4px;
          align-self: flex-start;
          transition: color 0.2s, border-color 0.2s;
        }
        .contact-alt-mail:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        .contact-alt-note {
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-2);
          margin-top: 24px;
          max-width: 32ch;
        }

        :global(.contact-root) :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
        }

        @media (max-width: 900px) {
          .contact-shell {
            padding-top: 120px;
          }
          .contact-actions {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .contact-primary {
            padding: 36px 32px;
            min-height: 160px;
          }
        }
      `}</style>
    </div>
  )
}

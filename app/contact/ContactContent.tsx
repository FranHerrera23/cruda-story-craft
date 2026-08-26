'use client'

import Script from 'next/script'

/* /contact — brief v5, tarea 3.
   Calendly embebido como primario. Email en texto con mailto.
   Sin formulario. Sin urgencia, sin escasez. Voz de la casa.
   Si el embed no carga (JS off, adblock), el link "Open in a new tab"
   y el mailto siguen funcionando — cero dead end. */

const CALENDLY = 'https://calendly.com/cruda-intro/narrative-sparring-live-1'
const HELLO = 'hello@thecruda.com'

// Calendly params — colores del sistema: --ink, --accent, --white.
const CALENDLY_EMBED =
  `${CALENDLY}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=e8623a`

export default function ContactContent() {
  return (
    <div className="contact-root">
      <main className="contact-shell">
        <section className="contact-lede">
          <p className="mono contact-eyebrow">Contact</p>
          <h1 className="display--sm contact-h1">Let&apos;s talk about your story.</h1>
          <p className="contact-sub">
            Forty-five minutes on the calendar. No pitch. Pick a slot below, or
            write and we&apos;ll take it from there.
          </p>
        </section>

        <section className="contact-calendly">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_EMBED}
            style={{ minWidth: '320px', height: '720px' }}
          />
          <p className="contact-fallback mono">
            Widget not loading?{' '}
            <a href={CALENDLY} target="_blank" rel="noopener">
              Open Calendly in a new tab →
            </a>
          </p>
        </section>

        <section className="contact-email">
          <p className="mono contact-alt-label">Or write</p>
          <a href={`mailto:${HELLO}`} className="contact-alt-mail">
            {HELLO}
          </a>
          <p className="contact-alt-note">
            For press, hiring, or anything that isn&apos;t a discovery call.
          </p>
        </section>
      </main>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <style jsx>{`
        .contact-root {
          background: var(--white);
          color: var(--ink);
          font-family: var(--font-archivo), -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .contact-shell {
          max-width: 1080px;
          margin: 0 auto;
          padding: calc(96px + 8vh) clamp(24px, 5vw, 72px) 120px;
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

        .contact-calendly {
          margin-top: clamp(56px, 8vh, 96px);
        }
        .contact-fallback {
          color: var(--ink-2);
          margin-top: 16px;
          text-align: center;
        }
        .contact-fallback a {
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--color-rule);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .contact-fallback a:hover {
          color: var(--color-ink);
          border-bottom-color: var(--color-ink);
        }

        .contact-email {
          margin-top: clamp(64px, 10vh, 120px);
          background: var(--cream);
          padding: clamp(32px, 5vw, 56px);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-alt-label {
          color: var(--ink-2);
        }
        .contact-alt-mail {
          font-family: var(--font-archivo), -apple-system, sans-serif;
          font-weight: 600;
          font-size: clamp(24px, 2.4vw, 32px);
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--color-rule);
          padding-bottom: 4px;
          align-self: flex-start;
          transition: color 0.2s, border-color 0.2s;
        }
        .contact-alt-mail:hover {
          color: var(--color-ink);
          border-color: var(--color-ink);
        }
        .contact-alt-note {
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-2);
          max-width: 40ch;
        }

        :global(.contact-root) :focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 4px;
        }

        @media (max-width: 900px) {
          .contact-shell {
            padding-top: 120px;
          }
        }
      `}</style>
    </div>
  )
}

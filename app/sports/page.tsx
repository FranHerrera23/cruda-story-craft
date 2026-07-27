import type { Metadata } from 'next'
import './sports.css'

/* ------------------------------------------------------------------
   CRUDA Sports — placeholder (part 6 rewrite).
   Full black. Headline in Instrument Serif via .display. One mono
   line at the foot with a contact address. No form. No CTA. No date.
   No Service schema — the service does not exist yet.
------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'CRUDA Sports — Coming soon',
  description:
    'CRUDA Sports. A media and marketing company investing in athletes. Coming soon.',
  alternates: { canonical: 'https://www.thecruda.com/sports' },
}

export default function SportsPage() {
  return (
    <div className="sports-root sports">
      <div className="shell">
        <main className="mid">
          <p className="mono eyebrow step-1">CRUDA Sports</p>
          <h1 className="display headline step-2">
            A media and marketing company investing in athletes.
          </h1>
        </main>
        <footer className="foot step-3">
          <p className="mono soon">Coming soon</p>
          <p className="mono contact">
            <a href="mailto:hello@thecruda.com">hello@thecruda.com</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import './sports.css'

/* ------------------------------------------------------------------
   CRUDA Sports — placeholder. Etapa 5.
   One screen, no scroll. No form, no CTA, no date.
   No Service schema — no service exists yet.
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
          <p className="mono eyebrow">CRUDA Sports</p>
          <h1>
            A media and marketing company investing in athletes.
          </h1>
          <p className="soon">Coming soon</p>
        </main>
        <footer className="foot">
          <span className="mono yr">CRUDA &copy; 2026</span>
          <span className="mono yr">thecruda.com</span>
        </footer>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { allClients } from '@/content/clients'
import '@/components/case-study.css'

const BASE = 'https://www.thecruda.com'

export const metadata: Metadata = {
  title: 'Clients | CRUDA',
  description:
    'Founder-experts whose work is stronger than their reach. What we built and what changed.',
  alternates: { canonical: `${BASE}/clients` },
}

export default function ClientsIndex() {
  return (
    <main className="idx">
      <header className="idx-head">
        <p className="idx-eyebrow">Clients</p>
        <h1>The work speaks. We make sure it carries.</h1>
        <p className="idx-sub">
          Founder-experts whose work is stronger than their reach. What we built, and what changed.
        </p>
      </header>

      <div className="idx-grid">
        {allClients.map((c) => (
          <Link key={c.slug} href={`/clients/${c.slug}`} className="idx-card">
            <figure>
              <Image src={c.heroImage} alt={c.heroAlt} width={800} height={500} />
            </figure>
            <div className="idx-card-body">
              <p className="idx-card-eyebrow">{c.client.company} · {c.vertical}</p>
              <h2>{c.title}</h2>
              <p>{c.answerCapsule.split('. ').slice(0, 2).join('. ')}.</p>
              <span className="idx-arrow">Read the case →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

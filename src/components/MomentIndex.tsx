import Link from 'next/link'
import { allClients } from '@/content/clients'
import { MOMENT_LABEL, MOMENT_DESC, type Moment } from '@/content/moments'
import '@/styles/resources.css'

/* Brief v2 Task 8 — índice por moment.
   Lista los case studies cuyo `moment` === argumento. Un solo axis,
   cero decoración. Cero filtros adicionales (nada de sector /
   discipline / language). */

export default function MomentIndex({ moment }: { moment: Moment }) {
  const cases = allClients.filter((c) => c.moment === moment)
  return (
    <div className="rs-root">
      <section className="rs-head">
        <div className="rs-inner">
          <p className="rs-eyebrow">Work · {MOMENT_LABEL[moment]}</p>
          <h1 className="rs-h1">{MOMENT_LABEL[moment]}.</h1>
          <p className="rs-sub">{MOMENT_DESC[moment]}</p>
        </div>
      </section>
      <div className="rs-body">
        <div className="rs-inner">
          {cases.length === 0 ? (
            <p className="rs-empty">
              No case studies published under this moment yet.
            </p>
          ) : (
            <ul className="rs-moment-list">
              {cases.map((cs) => (
                <li key={cs.slug}>
                  <Link href={`/work/${cs.slug}`} className="card">
                    <div className="card__head">
                      <span className="card__eyebrow">
                        {cs.client.company || cs.client.name}
                      </span>
                      <span className="card__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <h3 className="card__title">
                      {cs.oneLiner ?? cs.title}
                    </h3>
                    {cs.publishedAt && (
                      <time className="card__date" dateTime={cs.publishedAt}>
                        {new Date(cs.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

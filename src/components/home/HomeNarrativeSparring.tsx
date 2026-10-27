import { existsSync } from 'node:fs'
import { join } from 'node:path'
import Link from 'next/link'
import NewsletterCTA from '@/components/NewsletterCTA'
import './home-narrative-sparring.css'

/* F26 §E.6 · misma guardia que WorkLayout.publicFileExists · si el
   asset no existe en /public, el placeholder se muestra en preview
   y se oculta en producción. Idéntico contrato. */
function publicFileExists(src: string): boolean {
  if (!src) return false
  if (src.startsWith('data:')) return true
  if (src.startsWith('/_next/')) return true
  if (!src.startsWith('/')) return true
  if (typeof process === 'undefined' || !process.cwd) return true
  try {
    return existsSync(join(process.cwd(), 'public', src.slice(1)))
  } catch {
    return true
  }
}

/* Home · 01 Narrative Sparring · F58 · 27-oct.

   Plano papel con grabado + newsletter. Grabado: public/home/gloves.png
   (todavía no existe · placeholder visible en preview, oculto en
   producción). El ensayo de Neumann todavía no está publicado · el
   título queda sin link hasta que exista. */

const GLOVES_SRC = '/home/gloves.png'
const GLOVES_ALT = 'Boxing gloves hanging — line engraving in the same stroke as the Marco Aurelio book.'

const NEUMANN_SLUG = ''

export default function HomeNarrativeSparring() {
  const glovesExist = publicFileExists(GLOVES_SRC)
  return (
    <section
      className="plane plane--paper home-ns"
      id="narrative-sparring"
      data-plane
    >
      <div className="plane__in">
        <div className="home-ns__grid">
          <div className="home-ns__slot" aria-hidden={!glovesExist}>
            {glovesExist ? (
              <img src={GLOVES_SRC} alt={GLOVES_ALT} />
            ) : (
              <span className="home-ns__placeholder">
                [PLACEHOLDER: grabado de guantes]
              </span>
            )}
          </div>

          <div className="home-ns__body">
            <p className="eyebrow">Newsletter</p>
            <h2 className="name home-ns__name">Narrative Sparring</h2>
            <div className="rule" />
            <p className="lede home-ns__lede">
              A sparring partner hits back so you get stronger.<br />
              Muhammad Ali had Larry Holmes.<br />
              Warren Buffett had Charlie Munger.<br />
              Your company has us.
            </p>
            <p className="body home-ns__body-text">
              One essay a week on the stories that shape business and culture.{' '}
              <Link href="/thinking/im-from-the-government-and-im-here-to-help">
                Why a co-founder of Airbnb is now designing government forms.
              </Link>{' '}
              {NEUMANN_SLUG ? (
                <Link href={NEUMANN_SLUG}>
                  Why Adam Neumann says he handed over the keys to his own story.
                </Link>
              ) : (
                <>Why Adam Neumann says he handed over the keys to his own story.</>
              )}{' '}
              Written by Fran Herrera, in English and Spanish.
            </p>
            <div className="home-ns__cta">
              <NewsletterCTA variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

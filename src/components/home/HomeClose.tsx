import StartHere from '@/components/StartHere'
import './home-close.css'

/* Home · CONTACT · plano paper · F23-5 · 22-sep.
   Reemplaza el bloque "One conversation." por START HERE. */

export default function HomeClose() {
  return (
    <section
      className="plane plane--paper home-close"
      id="close"
      data-plane
    >
      <div className="plane__in">
        <StartHere
          h2="Where is your company standing today?"
          proof="We work with founders and companies in Miami, Minneapolis, Abu Dhabi, Panamá City, Dubai, Los Angeles and Argentina."
        />
      </div>
    </section>
  )
}

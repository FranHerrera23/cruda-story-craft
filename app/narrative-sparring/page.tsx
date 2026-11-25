import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterCTA from '@/components/NewsletterCTA'
import './sparring.css'

const title = 'Narrative Sparring · Fran Herrera, fundador de CRUDA'
const description = 'Una carta semanal de Fran Herrera, estratega de marca y fundador de CRUDA. Ensayos y artículos sobre marcas, identidad y lo que cambia cuando emigrás.'
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: 'https://www.thecruda.com/narrative-sparring' },
  openGraph: { title, description, url: '/narrative-sparring', locale: 'es_AR', images: ['/fran-herrera.webp'] },
}

const readings = [
  { kind: 'Ensayo', title: 'Emigrar te devuelve el lápiz', slug: 'emigrar-te-devuelve-el-lapiz', image: '/essays/emigrar-te-devuelve-el-lapiz/hero.webp' },
  { kind: 'Artículo', title: 'Arquitectura de marca: ¿cuándo crear otra marca?', slug: 'arquitectura-de-marca-cuando-crear-otra-marca', image: '/articles/arquitectura-de-marca-cuando-crear-otra-marca/bmw.svg' },
  { kind: 'Ensayo', title: 'Buscá a tu Larry Holmes', slug: 'busca-a-tu-larry-holmes', image: '/essays/larry-holmes/larry-holmes.webp' },
]

const brands = [
  ['tiktok', 'TikTok'],
  ['mastercard', 'Mastercard'],
  ['mcdonalds', 'McDonald’s'],
]

export default async function NarrativeSparring({ searchParams }: { searchParams: Promise<{ utm_source?: string }> }) {
  const { utm_source } = await searchParams
  const profile = utm_source === 'argentinoenrusia' || utm_source === 'thecruda' ? utm_source : ''
  const attribution = profile ? '?utm_source=' + profile + '&utm_campaign=narrative-sparring' : ''
  const libraryUrl = profile ? '/thinking?lang=es&' + attribution.slice(1) : '/thinking?lang=es'
  return (
    <div className="sparring" lang="es-AR">
      <section className="sparring-intro" aria-labelledby="autor">
        <div className="sparring-heading">
          <p className="sparring-byline">Narrative Sparring · Una carta de CRUDA</p>
          <h1 id="autor">Soy Fran Herrera.</h1>
        </div>
        <img className="sparring-portrait" src="/fran-herrera.webp" alt="Fran Herrera" />
        <div className="sparring-letter" id="suscripcion">
          <p>Soy estratega de marca. Nací en Salta, viví en ocho países y hoy escribo desde Rusia. Fundé CRUDA para trabajar con gente que conoce su empresa de memoria y se traba cuando le preguntan «¿y vos qué hacés?».</p>
          <p>Cada semana te mando un ensayo o un artículo. A veces la pregunta es qué nombre ponerle a lo que estás construyendo. Otras, cómo presentarte cuando te mudás a un lugar donde nadie te conoce.</p>
          <NewsletterCTA locale="es" campaign="narrative-sparring" variant="light" ctaLabel="Recibir la carta" helper="Es gratis. Al confirmar, te llega «Emigrar te devuelve el lápiz». Si me respondés, te leo yo." />
        </div>
      </section>

      <section className="sparring-proof" aria-labelledby="trayectoria">
        <div>
          <h2 id="trayectoria">Mi recorrido</h2>
          <p>A los 18 tuve mi primer cliente, Mary Kay. Desde agencia participé en el lanzamiento de TikTok en Argentina. En Dubái armé el área de estrategia de marca de Luna PR y después trabajé del lado del cliente en Norhart.</p>
          <p>En mi podcast hablé con Tomás Piuzzi, de Mercado Pago, sobre cómo pensar el crecimiento, y con Alexia Keglevich sobre volver a empezar. <a href="https://www.youtube.com/playlist?list=PLkZDmUoEd-4DN6yd2AOeKcvQCEvSh73Vz">Escuchá The Cruda Space</a>.</p>
        </div>
        <div>
          <h3>Marcas para las que trabajé desde agencia</h3>
          <ul className="sparring-brands">{brands.map(([slug, name]) => (
            <li key={slug}><img src={`/brands/${slug}.svg`} alt="" width="32" height="32" /><span>{name}</span></li>
          ))}</ul>
          <a href="https://franherrera.me/">Más sobre mí →</a>
        </div>
      </section>

      <section className="sparring-reads" id="lecturas" aria-labelledby="seleccion">
        <h2 id="seleccion">¿Por dónde querés empezar?</h2>
        <div>{readings.map(r => (
          <Link key={r.slug} href={'/thinking/' + r.slug + attribution}>
            <img src={r.image} alt="" loading="lazy" className={r.image.endsWith('.svg') ? 'sparring-diagram' : undefined} />
            <small>{r.kind}</small>
            <h3>{r.title}</h3>
          </Link>
        ))}</div>
        <nav aria-label="Más lecturas y suscripción">
          <Link href={libraryUrl}>Ver todos los ensayos y artículos →</Link>
          <a href="#suscripcion">Recibir la carta ↑</a>
        </nav>
      </section>
    </div>
  )
}

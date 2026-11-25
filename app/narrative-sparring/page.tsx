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
  ['mary-kay.webp', 'Mary Kay'], ['tiktok.svg', 'TikTok'],
  ['purina.webp', 'Purina'], ['mastercard.svg', 'Mastercard'],
  ['ab-inbev.webp', 'AB InBev'], ['directv.webp', 'DIRECTV'],
  ['mondelez.webp', 'Mondelēz · Oreo'], ['pedidosya.webp', 'PedidosYa'],
  ['mcdonalds.svg', 'McDonald’s'], ['cerveza-salta.webp', 'Cerveza Salta · CCU'],
  ['georgalos.webp', 'Georgalos · Flynn Paff'], ['sheraton.webp', 'Sheraton Argentina'],
  ['polo.webp', 'Asociación Argentina de Polo'], ['ucasal.webp', 'Universidad Católica de Salta'],
]

export default async function NarrativeSparring({ searchParams }: { searchParams: Promise<{ utm_source?: string }> }) {
  const { utm_source } = await searchParams
  const profile = utm_source === 'argentinoenrusia' || utm_source === 'thecruda' ? utm_source : ''
  const attribution = profile ? '?utm_source=' + profile + '&utm_campaign=narrative-sparring' : ''
  const libraryUrl = profile ? '/thinking?lang=es&' + attribution.slice(1) : '/thinking?lang=es'
  return (
    <div className="sparring" lang="es-AR">
      <section className="sparring-intro" aria-labelledby="apertura">
        <div className="sparring-author">
          <img className="sparring-portrait" src="/fran-herrera.webp" alt="" width="64" height="64" />
          <p><strong>Fran Herrera</strong><span>Estratega de marca · Fundador de CRUDA</span></p>
        </div>
        <div className="sparring-letter">
          <p className="sparring-byline">Narrative Sparring</p>
          <h1 id="apertura">¿Quién sos cuando nadie te conoce?</h1>
          <p>Tenía 23 años cuando me despedí de mi vieja en Ezeiza. En Salta, alguien siempre conocía a mi familia o sabía dónde había laburado. Al emigrar, me tocó elegir qué contar primero.</p>
          <p>Con Karen Mannheim me tocó trabajar esa misma pregunta. Su estudio de iluminación llevaba más de 2.500 proyectos. En Lima la conocían. En Miami tenía que presentarse de cero. <Link href="/work/karen-mannheim">Así armamos esa presentación.</Link></p>
          <div className="sparring-signup" id="suscripcion">
            <p>Te escribo una vez por semana sobre marcas, identidad y las historias que otros cuentan de nosotros.</p>
            <NewsletterCTA locale="es" campaign="narrative-sparring" variant="light" ctaLabel="Recibir la carta" helper="Es gratis. La primera carta es «Emigrar te devuelve el lápiz». Si me respondés, te leo yo." />
          </div>
        </div>
        <aside className="sparring-credentials" aria-labelledby="trayectoria">
          <h2 id="trayectoria">Mi recorrido</h2>
          <dl>
            <div><dt>Argentina</dt><dd><strong>Mary Kay fue mi primer cliente.</strong> Tenía 18 años. Después coordiné creadores para el lanzamiento de TikTok en el país.</dd></div>
            <div><dt>Emiratos Árabes Unidos</dt><dd><strong>En Dubái armé el área de estrategia de marca de Luna PR.</strong> Con CRUDA trabajé con Girish Sehgal, que llevó lo que aprendió en hotelería a un hospital de Abu Dabi. <Link href="/work/girish-sehgal">Ver el caso</Link></dd></div>
            <div><dt>Estados Unidos</dt><dd><strong>En Norhart trabajé desde adentro.</strong> Con Mike Kaeding, su CEO, contamos cómo una constructora de Minnesota se propuso reducir a la mitad el costo de la vivienda. <Link href="/work/mike-kaeding">Ver el caso</Link></dd></div>
          </dl>
          <p className="sparring-location">Nací en Salta. Viví en tres países, viajé por trece y hoy escribo desde Rusia.</p>
        </aside>
      </section>

      <section className="sparring-proof" aria-labelledby="campanas">
        <div className="sparring-section-head">
          <h2 id="campanas">Campañas en las que trabajé</h2>
          <p>Clientes de mi etapa en agencias</p>
        </div>
        <ul className="sparring-brands">{brands.map(([file, name]) => (
          <li key={file}>
            <img src={'/brands/' + file} alt="" width="110" height="38" loading="lazy" />
            <span>{name}</span>
          </li>
        ))}</ul>
        <p className="sparring-footnote">También participé en una campaña para Naciones Unidas.</p>
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
        <p className="sparring-podcast">¿Preferís escuchar? En The Cruda Space hablé con Tomás Piuzzi, de Mercado Pago, sobre crecer sin empezar por los indicadores, y con Alexia Keglevich sobre volver a empezar. <a href="https://www.youtube.com/playlist?list=PLkZDmUoEd-4DN6yd2AOeKcvQCEvSh73Vz">Escuchá las conversaciones</a>.</p>
        <nav aria-label="Más lecturas y suscripción">
          <Link href={libraryUrl}>Ver todos los ensayos y artículos →</Link>
          <a href="#suscripcion">Recibir la carta ↑</a>
        </nav>
      </section>
    </div>
  )
}

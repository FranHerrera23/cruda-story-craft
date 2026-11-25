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

const readingGroups = [
  {
    title: 'Ensayos',
    readings: [
      { title: 'Emigrar te devuelve el lápiz', slug: 'emigrar-te-devuelve-el-lapiz', image: '/essays/emigrar-te-devuelve-el-lapiz/hero.webp' },
      { title: 'Buscá a tu Larry Holmes', slug: 'busca-a-tu-larry-holmes', image: '/essays/larry-holmes/larry-holmes.webp' },
      { title: '¿Quemarías tu propia casa?', slug: 'quemarias-tu-propia-casa', image: '/essays/would-you-burn-down-your-own-house/thiel-email.webp' },
    ],
  },
  {
    title: 'Artículos técnicos',
    readings: [
      { title: 'Arquitectura de marca: ¿cuándo crear otra marca?', slug: 'arquitectura-de-marca-cuando-crear-otra-marca', image: '/articles/arquitectura-de-marca-cuando-crear-otra-marca/bmw.svg' },
      { title: 'Cómo lograr que los clientes pidan tu marca, además de tu producto', slug: 'como-lograr-que-clientes-pidan-tu-marca-b2b', image: '/articles/como-lograr-que-clientes-pidan-tu-marca-b2b/intel.svg' },
      { title: '¿Necesitás un rebranding o explicar mejor lo que tu empresa ya hace?', slug: 'rebranding-o-explicar-mejor-tu-empresa', image: '/articles/rebranding-o-explicar-mejor-tu-empresa/kia-ev6-2021.webp' },
    ],
  },
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
          <h1 id="apertura">¿Cómo hacés para que alguien crea en vos?</h1>
          <p>Nací y me crié en una ciudad chica del norte de Argentina. A los 16 años organizaba eventos en Salta para 600 personas. Hoy es fácil decir «600». Lo difícil, a esa edad, era que la primera persona se tomara en serio la invitación.</p>
          <p>Capaz estás ahí. Tenés algo que vale la pena y todavía sos la única persona que lo sabe.</p>
          <div className="sparring-signup" id="suscripcion">
            <p>Cada semana te mando una carta sobre cómo contar lo que hacés para que otros también lo vean.</p>
            <NewsletterCTA locale="es" campaign="narrative-sparring" variant="light" ctaLabel="Recibir la carta" helper="Es gratis. La primera carta es «Emigrar te devuelve el lápiz». Si me respondés, te leo yo." />
          </div>
        </div>
      </section>

      <section className="sparring-credentials" aria-labelledby="trayectoria">
        <h2 id="trayectoria">Mi recorrido</h2>
        <dl>
          <div><dt>Argentina</dt><dd><strong>A los 18 años, mi primer cliente fue Mary Kay.</strong> Más tarde, cuando TikTok llegó a Argentina, coordiné a los creadores que participaron en el lanzamiento.</dd></div>
          <div><dt>Emiratos Árabes Unidos</dt><dd><strong>En Dubái armé un área nueva en la agencia Luna PR.</strong> Mi trabajo era ayudar a cada empresa a explicar qué hacía y por qué elegirla. Después, con CRUDA, ayudé a Girish Sehgal a contar cómo usaba sus 25 años en hoteles para cuidar mejor a los pacientes de un hospital. <Link href="/work/girish-sehgal">Leer la historia de Girish</Link></dd></div>
          <div><dt>Estados Unidos</dt><dd><strong>Conté cómo Norhart construye viviendas en Minnesota.</strong> Empecé dentro de la empresa. En 2024 fundé CRUDA y seguí escribiendo con Mike Kaeding, su director. En un año, sus publicaciones aparecieron dos millones de veces en LinkedIn. <Link href="/work/mike-kaeding">Ver el trabajo con Mike</Link></dd></div>
          <div><dt>Perú</dt><dd><strong>Un video trajo un proyecto de iluminación.</strong> Con Karen Mannheim mostramos cómo su estudio, TRAZZO, había iluminado un edificio en Lima. Alguien vio el video, escribió al estudio y lo contrató para iluminar un departamento. El proyecto valió entre 20.000 y 30.000 dólares. <Link href="/work/karen-mannheim">Ver el caso de TRAZZO</Link></dd></div>
        </dl>
        <p className="sparring-location">Viví en tres países, viajé por trece y hoy escribo desde Rusia.</p>
      </section>

      <section className="sparring-proof" aria-labelledby="campanas">
        <h2 id="campanas">Clientes con los que trabajé</h2>
        <p className="sparring-client-context">Desde sus equipos y desde agencias.</p>
        <ul className="sparring-brands">{brands.map(([file, name]) => (
          <li key={file}>
            <img src={'/brands/' + file} alt={name} width="110" height="38" loading="lazy" />
          </li>
        ))}</ul>
      </section>

      <section className="sparring-reads" id="lecturas" aria-labelledby="seleccion">
        <h2 id="seleccion">¿Por dónde querés empezar?</h2>
        {readingGroups.map(group => (
          <div className="sparring-reading-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="sparring-reading-list">{group.readings.map(r => (
              <li key={r.slug}>
                <Link href={'/thinking/' + r.slug + attribution}>
                  <img src={r.image} alt="" loading="lazy" className={r.image.endsWith('.svg') ? 'sparring-diagram' : undefined} />
                  <h4>{r.title}</h4>
                </Link>
              </li>
            ))}</ul>
          </div>
        ))}
        <p className="sparring-podcast">¿Preferís escuchar? En The Cruda Space hablé con Tomás Piuzzi, de Mercado Pago, sobre crecer sin empezar por los indicadores, y con Alexia Keglevich sobre volver a empezar. <a href="https://www.youtube.com/playlist?list=PLkZDmUoEd-4DN6yd2AOeKcvQCEvSh73Vz">Escuchá las conversaciones</a>.</p>
        <nav aria-label="Más lecturas y suscripción">
          <Link href={libraryUrl}>Ver todos los ensayos y artículos →</Link>
          <a href="#suscripcion">Recibir la carta ↑</a>
        </nav>
      </section>
    </div>
  )
}

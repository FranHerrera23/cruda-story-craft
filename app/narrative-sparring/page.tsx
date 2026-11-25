import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterCTA from '@/components/NewsletterCTA'
import { career } from './editions'
import './sparring.css'

type PageProps = { searchParams: Promise<{ lang?: string; utm_source?: string; utm_campaign?: string }> }
const path = '/narrative-sparring'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const english = (await searchParams).lang === 'en'
  const url = 'https://www.thecruda.com' + path
  const canonical = english ? url + '?lang=en' : url
  const title = english ? 'Narrative Sparring · Fran Herrera, founder of CRUDA' : 'Narrative Sparring · Fran Herrera, fundador de CRUDA'
  const description = english
    ? 'A weekly letter from Fran Herrera on brands, identity and how to tell the story of your work.'
    : 'Una carta semanal de Fran Herrera sobre marcas, identidad y cómo contar lo que hacés.'
  return {
    title, description,
    alternates: { canonical, languages: { 'es-AR': url, 'en-US': url + '?lang=en' } },
    openGraph: { title, description, url: canonical, locale: english ? 'en_US' : 'es_AR', images: ['/fran-herrera.webp'] },
  }
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

const englishReadingGroups: typeof readingGroups = [
  {
    title: 'Essays',
    readings: [
      { title: 'Find Your Larry Holmes', slug: 'find-your-larry-holmes', image: '/essays/larry-holmes/larry-holmes.webp' },
      { title: 'Would You Burn Down Your Own House?', slug: 'would-you-burn-down-your-own-house', image: '/essays/would-you-burn-down-your-own-house/thiel-email.webp' },
      { title: 'Michael Bay Would Be Kubrick', slug: 'michael-bay-would-be-kubrick', image: '/essays/michael-bay-would-be-kubrick/hero.webp' },
    ],
  },
  {
    title: 'Brand strategy articles',
    readings: [
      { title: 'Brand Architecture: When Should You Create a New Brand?', slug: 'brand-architecture-when-to-create-a-new-brand', image: '/articles/arquitectura-de-marca-cuando-crear-otra-marca/bmw-en.svg' },
      { title: 'How Do You Get Customers to Ask for Your B2B Brand by Name?', slug: 'how-to-get-customers-to-ask-for-your-b2b-brand', image: '/articles/como-lograr-que-clientes-pidan-tu-marca-b2b/intel-en.svg' },
      { title: 'Should You Rebrand or Explain What Your Company Already Does?', slug: 'rebrand-or-explain-what-your-company-does', image: '/articles/rebranding-o-explicar-mejor-tu-empresa/kia-ev6-2021.webp' },
    ],
  },
]

const brands = [
  ['mary-kay.webp', 'Mary Kay'], ['tiktok.svg', 'TikTok'],
  ['purina.webp', 'Purina'], ['mastercard.svg', 'Mastercard'],
  ['ab-inbev.webp', 'AB InBev'], ['directv.webp', 'DIRECTV'],
  ['mondelez.webp', 'Mondelēz · Oreo'], ['pedidosya.webp', 'PedidosYa'],
  ['mcdonalds.svg', 'McDonald’s'], ['ccu.png', 'CCU'],
  ['georgalos.webp', 'Georgalos · Flynn Paff'], ['sheraton.webp', 'Sheraton Argentina'],
  ['polo.webp', 'Asociación Argentina de Polo'], ['ucasal.webp', 'UCASAL'],
]

function Credits({ entries }: { entries: typeof career.es }) {
  return (
    <dl>
      {entries.map(item => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>
            <strong>{item.headline}</strong>
            <p>{item.body}</p>
            {item.credits && <p className="sparring-credit-line">{item.credits}</p>}
            {item.link && <Link href={item.link.href}>{item.link.label}</Link>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default async function NarrativeSparring({ searchParams }: PageProps) {
  const params = await searchParams
  const english = params.lang === 'en'
  const language = english ? 'en' : 'es'
  const attribution = new URLSearchParams()
  if (typeof params.utm_source === 'string') attribution.set('utm_source', params.utm_source)
  if (typeof params.utm_campaign === 'string' || attribution.has('utm_source')) {
    attribution.set('utm_campaign', params.utm_campaign || 'narrative-sparring')
  }
  const suffix = attribution.size ? '?' + attribution.toString() : ''
  const englishQuery = new URLSearchParams(attribution)
  englishQuery.set('lang', 'en')
  const switchUrl = english ? path + suffix : path + '?' + englishQuery.toString()
  const libraryQuery = new URLSearchParams(attribution)
  libraryQuery.set('lang', language)
  const libraryUrl = '/thinking?' + libraryQuery.toString()
  const subscribe = english ? 'Get the letter' : 'Recibir la carta'
  return (
    <div className="sparring" lang={english ? 'en-US' : 'es-AR'}>
      <section className="sparring-intro" aria-labelledby="apertura">
        <div className="sparring-author">
          <img className="sparring-portrait" src="/fran-herrera.webp" alt="" width="64" height="64" />
          <p><strong>Fran Herrera</strong><span>{english ? 'Brand strategist · Founder of CRUDA' : 'Estratega de marca · Fundador de CRUDA'}</span></p>
          <Link className="sparring-lang" href={switchUrl} hrefLang={english ? 'es' : 'en'} lang={english ? 'es' : 'en'}>{english ? 'Español' : 'English'}</Link>
        </div>
        <div className="sparring-letter">
          <p className="sparring-byline">Narrative Sparring</p>
          <h1 id="apertura">{english ? 'Who are you when no one knows you?' : '¿Quién sos cuando nadie te conoce?'}</h1>
          <p>{english ? 'I grew up in a working-class family in a small city in northern Argentina. At 23, I moved abroad on my own. My parents, my old friends, the neighborhood I grew up in, all of it was far away. I finally had to sit down and have the conversation with myself I’d been putting off for years.' : 'Nací y me crié en una familia laburante, en una ciudad chica del norte de Argentina. A los 23 emigré solo. Lejos de mis viejos, de mis amigos de siempre y de mi barrio, me tocó tener esa charla incómoda conmigo mismo que llevaba años evitando.'}</p>
          <p>{english ? 'For me, it took moving abroad. For you, it might be quitting a job, finally saying no, or having a conversation in the same old kitchen. None of us gets to choose how our story begins. You get to write the next line.' : 'A mí me sirvió emigrar. A vos capaz te sirve una renuncia, un «no» que venías postergando, una conversación en la cocina de siempre. Nadie elige cómo empieza su historia. Lo que sí se elige es la próxima línea. Y esa la escribís vos.'}</p>
          <p>{english ? 'Over the years, I worked in communications for small and midsize businesses and for Fortune 500 companies in several countries.' : 'Con los años trabajé en comunicación para pymes y para empresas de la lista Fortune 500 en distintos países.'}</p>
          <p>{english ? 'Today at CRUDA, I work with founders who know their businesses inside out and still get stuck when someone asks, “So, what do you do?”' : 'Hoy, en CRUDA, trabajo con fundadores que conocen su empresa de memoria y se traban cuando alguien les pregunta «¿y vos qué hacés?».'}</p>
          <div className="sparring-signup" id="suscripcion">
            <p>{english ? 'Every week I write to you about who you are, what you do and how to put it into words for someone you’ve just met.' : 'Cada semana te escribo sobre quién sos, qué hacés y cómo se lo contás a alguien que recién te conoce.'} <Link href={'/thinking/emigrar-te-devuelve-el-lapiz' + suffix} hrefLang="es">{english ? 'Read the first letter in Spanish.' : 'Leé la primera carta.'}</Link></p>
            <NewsletterCTA locale={language} campaign="narrative-sparring" variant="light" ctaLabel={subscribe} helper={english ? "Free. Your first letter is in Spanish. Reply anytime. I read every response." : "Es gratis. La primera carta es «Emigrar te devuelve el lápiz». Si me respondés, te leo yo."} />
          </div>
        </div>
      </section>

      <section className="sparring-reads" id="lecturas" aria-labelledby="seleccion">
        <h2 id="seleccion">{english ? 'Where would you like to start?' : '¿Por dónde querés empezar?'}</h2>
        {(english ? englishReadingGroups : readingGroups).map(group => (
          <div className="sparring-reading-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="sparring-reading-list">{group.readings.map(r => (
              <li key={r.slug}>
                <Link href={'/thinking/' + r.slug + suffix}>
                  <img src={r.image} alt="" loading="lazy" className={r.image.endsWith('.svg') ? 'sparring-diagram' : undefined} />
                  <h4>{r.title}</h4>
                </Link>
              </li>
            ))}</ul>
          </div>
        ))}
        <p className="sparring-podcast">{english ? 'Prefer to listen? Hear my conversations in Spanish with Tomás Piuzzi of Mercado Pago and Alexia Keglevich.' : '¿Preferís escuchar? En The Cruda Space hablé con Tomás Piuzzi, de Mercado Pago, sobre crecer sin empezar por los indicadores, y con Alexia Keglevich sobre volver a empezar.'} <a href="https://www.youtube.com/playlist?list=PLkZDmUoEd-4DN6yd2AOeKcvQCEvSh73Vz">{english ? 'Listen to The Cruda Space' : 'Escuchá las conversaciones'}</a>.</p>
        <nav aria-label={english ? 'More reading and subscription' : 'Más lecturas y suscripción'}>
          <Link href={libraryUrl}>{english ? 'Browse all essays and articles →' : 'Ver todos los ensayos y artículos →'}</Link>
          <a href="#suscripcion">{subscribe} ↑</a>
        </nav>
      </section>

      <section className="sparring-proof" aria-labelledby="campanas">
        <h2 id="campanas">{english ? 'Brands I’ve worked on' : 'Clientes con los que trabajé'}</h2>
        <p className="sparring-client-context">{english ? 'In-house and on agency teams.' : 'Desde sus equipos y desde agencias.'}</p>
        <ul className="sparring-brands">{brands.map(([file, name]) => (
          <li key={file}>
            <img src={'/brands/' + file} alt={name} width="110" height="38" loading="lazy" />
          </li>
        ))}</ul>
      </section>

      <section className="sparring-credentials" aria-labelledby="trayectoria">
        <h2 id="trayectoria">{english ? 'Why read me?' : '¿Por qué leerme?'}</h2>
        <p className="sparring-origin">{english ? 'I’ve worked since I was 15. My first “startup” was a Facebook group. It grew to 5,000 members. I sold ads there.' : 'Trabajo desde los 15. Mi primer «emprendimiento», ponele, fue un grupo de Facebook. Lo llevé a 5.000 miembros. Ahí vendía publicidad.'}</p>
        <Credits entries={career[language].filter(item => item.featured)} />
        <details className="sparring-more">
          <summary>{english ? 'More work in production, PR and writing' : 'Más trabajos de producción, prensa y escritura'}</summary>
          <Credits entries={career[language].filter(item => !item.featured)} />
        </details>
        <p className="sparring-location">{english ? 'I’ve lived in three countries, traveled through thirteen and now write from Russia.' : 'Viví en tres países, viajé por trece y hoy escribo desde Rusia.'}</p>
      </section>
    </div>
  )
}

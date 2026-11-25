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
            {Array.isArray(item.body) ? item.body.map((paragraph, index) => (
              <p key={paragraph} className={index > 0 ? 'sparring-credit-line' : undefined}>{paragraph}</p>
            )) : <p>{item.body}</p>}
            {item.credits && <p className="sparring-credit-line">{item.credits}</p>}
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
          <p>{english ? 'I founded CRUDA to make founders and companies famous to the few who matter. We bring creative capital to the table so the right buyers, partners and investors know what makes their work worth choosing.' : 'En CRUDA aportamos capital creativo a fundadores y empresas. Queremos que el cliente que los puede contratar, el socio que necesitan o el inversor que buscan conozcan su trabajo y sepan por qué elegirlos.'}</p>
          <div className="sparring-signup" id="suscripcion">
            <p>{english ? 'Every week I write to you about who you are, what you do and how to put it into words for someone you’ve just met.' : 'Cada semana te escribo sobre quién sos, qué hacés y cómo se lo contás a alguien que recién te conoce.'}</p>
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
        <p className="sparring-origin">{english ? 'At 15, I started a Facebook group. It grew to 5,000 members, and I started selling ads there. At 17, I organized my first event, an edition of Fuck Up Nights. Three hundred people came to hear people get onstage and talk about what had gone wrong.' : 'A los 15 armé un grupo de Facebook. Llegó a tener 5.000 miembros y ahí empecé a vender publicidad. A los 17 organicé mi primer evento, una edición de Fuck Up Nights. Vinieron 300 personas a escuchar a gente contar, arriba de un escenario, qué le había salido mal.'}</p>
        <p className="sparring-origin">{english ? 'I’m a full-stack marketer. Sometimes the work starts with an uncomfortable question. Is the offer we’re about to advertise worth what we’re asking for it? Sometimes it starts earlier, when the company still needs a name. I build the brand strategy and carry it through to the work itself, from directing a design system to writing a script, producing a photo shoot or running an ad campaign.' : 'Trabajo en marketing de punta a punta. A veces el trabajo empieza con una pregunta bastante incómoda: ¿la oferta que queremos anunciar vale lo que pedimos por ella? Otras veces empieza antes, cuando la empresa todavía necesita un nombre. Armo la estrategia de marca y puedo llevarla hasta la ejecución: dirigir el sistema de diseño, escribir el guion de un video, producir la sesión de fotos o armar la campaña de anuncios.'}</p>
        <Credits entries={career[language]} />
        <p className="sparring-location">{english ? 'I’ve lived in three countries, traveled through thirteen and now write from Russia.' : 'Viví en tres países, viajé por trece y hoy escribo desde Rusia.'}</p>
        <a className="sparring-subscribe-return" href="#suscripcion">{subscribe} ↑</a>
      </section>
    </div>
  )
}

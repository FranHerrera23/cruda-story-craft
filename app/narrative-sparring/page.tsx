import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterCTA from '@/components/NewsletterCTA'
import './sparring.css'

const title = 'Narrative Sparring · Fran Herrera, fundador de CRUDA'
const description = 'Ensayos y artículos de Fran Herrera sobre lo que contás, lo que los demás entienden y lo que pasa cuando empezás de nuevo.'
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: 'https://www.thecruda.com/narrative-sparring' },
  openGraph: { title, description, url: '/narrative-sparring', locale: 'es_AR', images: ['/fran-herrera.webp'] },
}

const readings = [
  { kind: 'Ensayo', title: 'Emigrar te devuelve el lápiz', slug: 'emigrar-te-devuelve-el-lapiz', image: '/essays/emigrar-te-devuelve-el-lapiz/hero.webp', note: '¿Qué parte de «es lo que te tocó» te gustaría volver a elegir?' },
  { kind: 'Artículo', title: 'Arquitectura de marca: ¿cuándo crear otra marca?', slug: 'arquitectura-de-marca-cuando-crear-otra-marca', image: '/articles/arquitectura-de-marca-cuando-crear-otra-marca/bmw.svg', note: 'BMW le puso su nombre al Serie 3 y dejó que MINI siguiera siendo MINI. ¿Qué harías con tu próximo producto?' },
  { kind: 'Ensayo', title: 'Buscá a tu Larry Holmes', slug: 'busca-a-tu-larry-holmes', image: '/essays/larry-holmes/larry-holmes.webp', note: '¿Quién te conoce lo suficiente como para decirte algo que te cuesta escuchar?' },
]

export default async function NarrativeSparring({ searchParams }: { searchParams: Promise<{ utm_source?: string }> }) {
  const { utm_source } = await searchParams
  const profile = utm_source === 'argentinoenrusia' || utm_source === 'thecruda' ? utm_source : ''
  const attribution = profile ? '?utm_source=' + profile + '&utm_campaign=narrative-sparring' : ''
  return <div className="sparring" lang="es-AR">
    <section className="sparring-intro">
      <div>
        <p className="sparring-byline">Narrative Sparring / Por Fran Herrera</p>
        <h1>¿Qué contás de vos cuando nadie te conoce?</h1>
        <p>A los 23 me despedí de mi vieja en Ezeiza y me fui a vivir afuera. Si alguna vez tuviste que empezar de cero, conocés ese momento. Alguien te pregunta quién sos y de golpe la respuesta que dabas en casa te queda rara.</p>
        <p>Años después, fundando CRUDA, me pasó algo parecido. Me ganaba la vida ayudando a otros a explicar lo que hacían. Escribí la primera presentación de mi propio estudio y, cuando quise decir en voz alta qué ofrecía, me salieron tres respuestas distintas.</p>
        <p>Escribo una carta por semana sobre esas cosas que cuesta explicar, en la vida y en los negocios. Podés empezar por la historia que te toque más de cerca.</p>
        <div className="sparring-links"><a href="#lecturas">Elegí qué leer ↓</a><a href="#suscripcion">Recibir mis cartas</a></div>
      </div>
      <figure><img src="/fran-herrera.webp" alt="Fran Herrera" /><figcaption>Fran Herrera · Fundador de CRUDA</figcaption></figure>
    </section>
    <section className="sparring-pair" aria-labelledby="quien">
      <h2 id="quien">Desde dónde escribo</h2>
      <div><p>Soy estratega de marca y emprendedor. A los 18 tuve mi primer cliente, Mary Kay. Después pasé casi diez años entre agencias y equipos internos de empresas, en tres continentes. En esos equipos trabajé en proyectos para Nestlé, TikTok, Mondelēz, AB InBev y Delivery Hero. Hoy vivo entre Moscú y Dubái y trabajo con fundadores que necesitan contar qué hace especial a su empresa.</p>
      <p>Hay una pregunta que podés probar la próxima vez que hables con un cliente. Preguntale cómo le explicó a otra persona por qué te eligió. Capaz en esa frase encontrás lo que llevás meses tratando de escribir en tu web.</p>
      <p>De eso escribo en Narrative Sparring, la publicación de CRUDA. A veces la pregunta sale de una reunión. Otras, de emigrar, de una pelea de boxeo o de una charla que me dejó pensando.</p></div>
    </section>
    <section id="lecturas" className="sparring-reads"><h2>¿Por dónde querés empezar?</h2>
      <div>{readings.map(r => <Link key={r.slug} href={'/thinking/' + r.slug + attribution}>
        <img src={r.image} alt="" loading="lazy" className={r.image.endsWith('.svg') ? 'sparring-diagram' : undefined}/>
        <small>{r.kind}</small><h3>{r.title}</h3><p>{r.note}</p>
      </Link>)}</div><Link href="/thinking?lang=es">Ver todos los ensayos y artículos →</Link>
    </section>
    <section className="sparring-pair"><h2>Con quién converso</h2><div>
      <p>Tomás Piuzzi estaba a cargo de crecimiento en Mercado Pago cuando vino a mi podcast. ¿Por dónde empezamos? Por la curiosidad. Con Marcos Westphalen hablamos de los malos jefes y con Alexia Keglevich, de lo que cuesta volver a empezar.</p>
      <p>También charlé con Steve Walls sobre los que arrancan con las de perder, y con Phillip Oakley sobre qué pasa con la creatividad cuando mandan los datos.</p>
      <a href="https://www.youtube.com/playlist?list=PLkZDmUoEd-4DN6yd2AOeKcvQCEvSh73Vz">Escuchá The Cruda Space →</a></div>
    </section>
    <section className="sparring-pair sparring-mail" id="suscripcion"><h2>¿Te escribo?</h2><div>
      <p>Una vez por semana te mando una lectura. La primera es «Emigrar te devuelve el lápiz». Si te hace acordar a algo tuyo, respondeme. Del otro lado estoy yo.</p>
      <NewsletterCTA locale="es" campaign="narrative-sparring" variant="light" ctaLabel="Recibir Narrative Sparring" helper="Es gratis. Podés darte de baja cuando quieras." /></div>
    </section>
  </div>
}

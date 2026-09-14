import EveryCompanyFocus from './EveryCompanyFocus'
import './every-company.css'

/* Home · every-company (ex why-now) — Brief 04 P1 (14-sep).

   Rename: el argumento ya no es urgencia. El copy y la mecánica
   cambian entero.

   Copy verbatim del brief. Cinco párrafos (antes cuatro). Título
   en serif con seis palabras exactas — cumple la regla lockeada
   del ledger #15.

   ESTRUCTURA
   Layout de dos columnas 1fr / 1.4fr (misma proporción que la
   anterior). Título sticky a la izquierda arriba de una secuencia
   de seis PNG que se sustraen con el scroll — la primera columna
   pierde línea a medida que el texto avanza. Cinco párrafos en la
   segunda columna, con opacidad atada al scrub con meseta.

   SUSTRACCIÓN, NO ACUMULACIÓN
   Bust dense → bust mid → bust min → book dense → book mid → book
   min. La disolvencia entre bust y book cae en el párrafo 2 —
   entre bust-03-min y book-01-dense no hace falta registro
   posicional; son sujetos distintos.

   FRAMES SON DECORACIÓN
   Los cinco párrafos siguen en pie sin los frames. prefers-reduced-
   motion mantiene el copy visible, un solo frame estático, y el
   scrub no se registra.

   FRAMES PENDIENTES
   Los seis PNG van a public/why-now/. Fran los pushea aparte —
   son binarios, no atraviesan chat. Path histórico conservado
   deliberadamente aunque la sección se renombre.

   NOWRAPS
   La itálica `To Himself` no puede partirse entre dos renglones.
   `&nbsp;—` evita que un em-dash abra línea. text-wrap: pretty
   en el cuerpo y balance en el título. */

export default function EveryCompany() {
  return (
    <section id="every-company" className="every-company">
      <div className="every-company__in in">
        <div className="every-company__frames" aria-hidden="true">
          {/* Los seis PNG viven en public/why-now/ y se cargan en
              orden — el crossfade se hace por opacidad atada al
              scrub en EveryCompanyFocus. Si falta un archivo, la
              <img> falla silenciosa y la sección se degrada sin
              romper. */}
          <img src="/why-now/bust-01-dense.png" alt="" />
          <img src="/why-now/bust-02-mid.png" alt="" />
          <img src="/why-now/bust-03-min.png" alt="" />
          <img src="/why-now/book-01-dense.png" alt="" />
          <img src="/why-now/book-02-mid.png" alt="" />
          <img src="/why-now/book-03-min.png" alt="" />
        </div>
        <div className="every-company__head">
          <h2 data-reveal="lines">
            Every company runs
            <br />
            on a story.
          </h2>
        </div>
        <div className="every-company__body">
          <p>
            Marcus Aurelius ran the Roman Empire for nineteen years.
            <br />
            Wars, plague, the whole weight of it.
          </p>
          <p>
            What survived isn&apos;t the empire. It&apos;s twelve notebooks
            he wrote in Greek and titled{' '}
            <em className="nowrap">To&nbsp;Himself</em>&nbsp;— not philosophy,
            just a man working out what to do.
          </p>
          <p>
            You have a version of that. It lives in your head, in rooms
            you&apos;ve walked into, in decisions you made so long ago you
            stopped explaining them.
          </p>
          <p>
            And you&apos;re too close to see it. Anyone who does something
            exceptional every day eventually files it under normal.
          </p>
          <p>
            So the job isn&apos;t writing.
            <br />
            It&apos;s taking things off until what&apos;s left is only yours.
          </p>
        </div>
      </div>
      <EveryCompanyFocus />
    </section>
  )
}

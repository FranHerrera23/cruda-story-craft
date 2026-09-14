import './translation-in-practice.css'

/* Home · The Translation in Practice — Brief 04 §4.3 (Addendum A).
   Reemplaza el bloque inside-cruda que fue retirado de la home.

   Un solo caso por superficie: Girish Sehgal. Karen y Jack van
   adentro de sus case studies y como contenido, nunca acá — regla
   lockeada del ledger #10.

   El AFTER es verbatim de lo que Girish publicó. Si CRUDA lo
   escribiera, la sección que prueba que traducís está fabricada.

   Cero comentario sobre el BEFORE. Ni adjetivos, ni ironía, ni
   tachado. Se muestra, y el AFTER argumenta solo. El lector tiene
   un perfil parecido a ese; burlarse de él es burlarse del lector.

   Asimetría 1 · 1.6 columnas (BEFORE gris chico · AFTER negro
   grande). El peso desigual es lo que hace funcionar el bloque;
   si pesan igual la sección no dice nada.

   El lede de la maqueta ('nothing gets invented…') no va: la
   nota de cierre ya dice 'Nothing was added' y decirlo dos veces
   lo debilita.

   La línea de Isadore Sharp NO se recorta. Es la rima que sostiene
   el caso — a Girish le dijeron que sonreía demasiado, a Sharp
   que era ingenuo. */

export default function TranslationInPractice() {
  return (
    <section
      id="translation-in-practice"
      className="tip"
      data-reveal-seq
    >
      <div className="tip__in in">
        <p
          className="tip__eyebrow"
          data-seq="eyebrow"
          data-reveal="text"
        >
          The translation in practice
        </p>

        <article className="tip__case" data-seq="body" data-reveal="text">
          <p className="tip__who">
            <b>Girish Sehgal</b>{' '}
            <span>Chief Patient Experience Officer, Abu Dhabi</span>
          </p>

          <div className="tip__pair">
            <div className="tip__side tip__side--before">
              <p className="tip__side-label">Before</p>
              <blockquote>
                <p>&ldquo;I worked at Four Seasons.&rdquo;</p>
              </blockquote>
            </div>

            <div className="tip__side tip__side--after">
              <p className="tip__side-label">After</p>
              <blockquote>
                <p>
                  &ldquo;Kindness isn&rsquo;t a soft skill &mdash; it&rsquo;s
                  a leadership strength.
                </p>
                <p>
                  Early in my journey, I was often told that I was too
                  approachable, smiled too much, and needed to be less
                  accessible. In an era where distance is often mistaken
                  for authority, I&rsquo;ve always chosen presence.
                </p>
                <p>
                  At Four Seasons, if there is one person who shaped how I
                  see leadership, it&rsquo;s Isadore Sharp. He didn&rsquo;t
                  lead with fear. He led with empathy. People said he was
                  na&iuml;ve, that his optimism wasn&rsquo;t built for the
                  real business world.
                </p>
                <p>
                  That &lsquo;naivety&rsquo; built one of the most respected
                  luxury brands in the world.
                </p>
                <p>
                  Under-performing properties went on to be No. 1 in the
                  World.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

          <p className="tip__note">Same twenty-eight years. Nothing was added.</p>
        </article>
      </div>
    </section>
  )
}

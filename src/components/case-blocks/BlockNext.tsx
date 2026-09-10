import Link from 'next/link'

/* B12 · NEXT. Siguiente caso a sangre, 72vh sobre negro, nombre
   a clamp(34px, 6vw, 88px). Sale del contenedor .cb-root porque
   toma el ancho de la pantalla. La ruta se arma con /work/{slug}. */
export default function BlockNext({
  slug,
  label,
  oneLiner,
}: {
  slug: string
  label: string
  oneLiner: string
}) {
  return (
    <section className="b-next">
      <Link href={`/work/${slug}`}>
        <span>Next case</span>
        <strong>{label}</strong>
        <em>{oneLiner}</em>
      </Link>
    </section>
  )
}

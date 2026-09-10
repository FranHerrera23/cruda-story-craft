/* B5 · PULL. Cita a máquina, arranca en la columna 2 (no contra
   el margen). §7 regla 1: las pull quotes se levantan verbatim de
   la prosa de la misma página. Ese chequeo lo hace el compositor
   (ver CaseComposer.tsx) — este componente solo renderiza. */
export default function BlockPull({ quote, id }: { quote: string; id?: string }) {
  return (
    <section className="b-pull" id={id}>
      <blockquote>{quote}</blockquote>
    </section>
  )
}

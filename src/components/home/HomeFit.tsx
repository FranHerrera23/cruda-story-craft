import './home-fit.css'

/* Home · FIT
   Wireframe LOCK · home §5 · Commit 3 fase C2 (19-sep).

   Los dos grupos con listas (bloque viejo de párrafos apilados)
   se retiran · el criterio y las cuatro situaciones ahora viven
   en HomeWhoItHoldsFor con estructura de grilla. Queda sólo el
   corte final como copy firmado, para no perder la línea que
   cierra la sección.

   ⚠ Duplicación detectada · HomeWhoItHoldsFor.tsx (fase C1) ya
   incluye el mismo corte al final de la grilla ("If none of this
   is you, this is not for you."). Con el retiro de los grupos,
   el corte aparece dos veces en el render de la home · una al
   fin del grid y otra acá. Reportado en el commit · Fran decide
   si el corte se retira también de acá o del grid (wireframe
   §2.7.2 lo pone en el grid explícito). */

export default function HomeFit() {
  return (
    <section id="fit" className="home-fit">
      <div className="home-fit__inner">
        <p className="home-fit__close">
          If none of this is you, this is not for you.
        </p>
      </div>
    </section>
  )
}

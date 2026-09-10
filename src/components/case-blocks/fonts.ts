import { Source_Serif_4 } from 'next/font/google'

/* Task 11 — Source Serif 4 es la face del cuerpo (--s) del sistema
   de bloques. Archivo (--g) ya viene declarada en app/layout.tsx.
   Se expone como CSS variable --font-source-serif-4 para que
   case-blocks.css la consuma via var(). */
export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-source-serif-4',
})

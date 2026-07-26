import type { Essay } from '@/components/EssayLayout'

/* ------------------------------------------------------------------
   Modelo de referencia — mismo rol que karen-mannheim.ts.
   [FRAN] marca lo que Fran debe pasar antes de publicar.

   Fragmentos lockeados por el brief (etapa 5, PASO 2):
   - título, answer capsule, metadata, categoría, tiempo de lectura
   - los dos pull quotes marcados
   - la atribución de los diálogos con el CEO ("The founder")
   - la cita de Gary Vee
------------------------------------------------------------------- */

export const founderWorth70Million: Essay = {
  slug: 'founder-worth-70-million',
  category: 'Business',
  readingMinutes: 4,
  publishedAt: '2025-04-03',
  updatedAt: '[FRAN — fecha de republicación]',

  title: 'What a founder worth $70 million told me about freedom',

  answerCapsule:
    "A construction founder with a net worth of $70 million told me he couldn't take a one-month road trip with his family. He had built something most people would envy and was actively designing his way out of it. This is about what that conversation changed in how I think about building.",

  body: [
    // The brief supplies the anchors below but not the running paragraphs.
    // Fran to paste the original Substack essay text verbatim (see brief PASO 2:
    // "Cuerpo: el texto del ensayo original, tal cual. Fran lo pasa en el archivo adjunto.")
    {
      type: 'p',
      text:
        '[FRAN — paragraph 1 of original essay. Do not soften the language. La crudeza es la voz. Paste the Substack copy verbatim.]',
    },
    {
      type: 'p',
      text:
        '[FRAN — paragraph 2. Set the scene of the conversation with the CEO. Verbatim.]',
    },

    // Founder dialogue — attributed quote block per brief conversion rules
    {
      type: 'quote',
      text:
        "[FRAN — first line of dialogue from the CEO. Verbatim. Preserve tone.]",
      attribution: 'The founder',
    },

    {
      type: 'p',
      text:
        '[FRAN — connecting paragraph after the first dialogue. Verbatim.]',
    },

    {
      type: 'quote',
      text:
        "[FRAN — additional dialogue lines from the CEO, each as its own quote block if there are more. Verbatim.]",
      attribution: 'The founder',
    },

    {
      type: 'p',
      text:
        '[FRAN — the paragraphs that lead into the first pull. Verbatim.]',
    },

    // Pull quote — locked verbatim from brief
    {
      type: 'pull',
      text:
        "Life's short. Don't get caught up in the numbers.",
    },

    {
      type: 'p',
      text:
        '[FRAN — paragraphs after the first pull, leading to the Gary Vee moment. Verbatim.]',
    },

    // Gary Vee — attributed quote per brief
    {
      type: 'quote',
      text: '[FRAN — the exact Gary Vee quote from the original essay. Verbatim.]',
      attribution: 'Gary Vaynerchuk',
    },

    {
      type: 'p',
      text:
        '[FRAN — closing paragraphs before the final pull. Verbatim. Do not tone down the language — the rawness is the voice.]',
    },

    // Closing pull — locked verbatim from brief
    {
      type: 'pull',
      text:
        "Because if we're not building for that — what the fuck are we doing it for?",
    },
  ],
}

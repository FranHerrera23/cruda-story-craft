import type { Essay } from '@/components/EssayLayout'

/* ------------------------------------------------------------------
   Narradores peligrosos — verbatim del original.
   Publicado 28 julio 2026. Idioma: español.
   No editar el cuerpo. El brief define el molde alrededor del texto,
   no el texto.
------------------------------------------------------------------- */

export const narradoresPeligrosos: Essay = {
  slug: 'narradores-peligrosos',
  language: 'es',
  /* Brief v9 T3 — una sola categoría, en el idioma de la pieza. */
  category: 'Narrativa',
  contentType: 'Essay',
  readingMinutes: 12,
  publishedAt: '2026-07-28',
  updatedAt: '2026-07-28',

  title: 'Los trucos que usás cuando no confiás en lo que vendés',

  /* Brief v9 T1 — bajada del molde. Antes vivía duplicada como
     body[0] en negrita; ahora entra al header entre H1 y byline. */
  deck:
    'El contador que se reinicia, el "quedan 2 lugares" que no es cierto, el mail que aprieta. Ninguno de esos es un problema de copywriting. Son un problema de identidad.',

  answerCapsule:
    'Los mensajes que apuran no son un problema de redacción. Son el comportamiento visible de una creencia: que lo que vendés no alcanza para convencer solo. Se arregla cambiando desde dónde escribís, no las palabras. Y buena parte del daño no lo escribió nadie: son templates heredados y texto generado por IA que nadie volvió a leer.',

  body: [
    {
      type: 'p',
      text:
        'Si tenés un negocio, liderás un equipo o vendés algo que hiciste vos, esto ya te pasó.',
    },
    {
      type: 'p',
      text:
        'Estás por mandar la propuesta que no contestaron hace diez días. O el recordatorio de pago al cliente que se atrasó. O el mensaje al equipo un domingo a la noche porque el mes viene flojo. Y en algún lugar del texto se te filtra algo. Un "necesito una respuesta hoy". Un "si no confirmás pierdo el lugar". Una fecha límite que en realidad no es tan límite.',
    },
    { type: 'p', text: 'No lo pensaste. Salió así.' },
    {
      type: 'p',
      text:
        'Y del otro lado, alguien lo lee y algo se le aprieta un poco. No es pánico, es más chiquito que eso: esa molestia de fondo de sentirse apurado por alguien.',
    },
    {
      type: 'p',
      text:
        'Quiero mirar eso de cerca, porque atrás hay algo que no se arregla escribiendo mejor.',
    },

    { type: 'h2', text: 'Primero, la versión visible del problema' },

    {
      type: 'p',
      text:
        'La forma más obvia de esto son los trucos comerciales que todos aprendimos a usar sin preguntarnos demasiado.',
    },
    {
      type: 'p',
      text:
        'El contador regresivo que se reinicia cuando recargás la página. El "quedan 2 lugares" en un programa que no tiene cupo. El "el precio sube esta noche" que sube y después baja la semana que viene. El stock limitado de un producto digital, que por definición no tiene stock.',
    },
    {
      type: 'p',
      text:
        'Nadie que hace esto se despierta pensando en manipular a alguien. Lo hace porque en algún momento leyó que la urgencia convierte, y convierte. Los números le dieron la razón. Y una vez que te dieron la razón, es muy difícil volver atrás.',
    },
    { type: 'p', text: 'Pero fijate qué está pasando ahí realmente.' },
    {
      type: 'p',
      html:
        'Cuando ponés un contador falso, estás diciendo, sin decirlo: <em>lo que vendo no alcanza para convencerte solo, necesito apurarte antes de que lo pienses bien.</em>',
    },
    {
      type: 'p',
      text:
        'Esa frase no aparece en ningún lado del embudo. Pero está adentro del contador. Y el que la recibe la percibe, aunque compre igual.',
    },

    { type: 'h2', text: 'Después, la versión invisible' },

    {
      type: 'p',
      text:
        'La versión invisible es más común y hace más daño, porque nadie la ve.',
    },
    {
      type: 'p',
      text:
        'Llega el mail de la suscripción que no se pudo cobrar. "Si no actualizás tu método de pago, vas a perder el acceso." A veces con la cuenta regresiva, a veces con el botón en rojo.',
    },
    { type: 'p', text: 'Ahora leé el mismo mail escrito por GoDaddy:' },
    {
      type: 'p',
      html:
        '<em>No pudimos procesar tu pago. Pero no te preocupes, sabemos que eso puede pasar. Acá te dejamos un link para que lo soluciones cuando puedas.</em>',
    },
    {
      type: 'p',
      text:
        'Misma deuda. Mismo monto. Mismo plazo. La cobranza es idéntica: te van a cobrar igual, y si no pagás vas a perder el servicio igual. Lo único que cambia es desde dónde te hablan.',
    },
    {
      type: 'p',
      text:
        'Y el que escribió el primero no es un tipo cruel. Probablemente es alguien de veintipico que copió un template que estaba en Notion, que otro copió de otra empresa, que salió de un manual de retención de hace quince años.',
    },
    { type: 'p', text: 'Nadie eligió esa frase. Se heredó.' },

    { type: 'h2', text: 'Acá pega distinto' },

    {
      type: 'p',
      text:
        'En Latinoamérica esto tiene una capa más, y creo que es la que más importa.',
    },
    {
      type: 'p',
      text:
        'Buena parte de la comunicación institucional que recibimos vino históricamente desde el miedo. El banco, el organismo de impuestos según el país, la empresa de servicios, el proveedor. Intimación. Apercibimiento. "En caso de incumplimiento". Crecimos leyendo mensajes escritos por gente que daba por sentado que si no te asustaba, no ibas a responder.',
    },
    {
      type: 'p',
      text:
        'Después eso se filtró a todo lo demás. Al mail del proveedor. Al mensaje del cliente que reclama. A cómo un founder le escribe a su equipo cuando el mes viene flojo.',
    },
    {
      type: 'p',
      text:
        'No lo inventamos nosotros. Lo heredamos. Y lo repetimos sin revisarlo, como se repiten casi todas las cosas heredadas.',
    },
    {
      type: 'p',
      text:
        'Por eso cuando aparece alguien que te habla desde otro lugar, el contraste es tan brutal. No es que GoDaddy hizo algo genial. Es que hizo algo normal en un contexto donde lo normal es apretar.',
    },

    { type: 'h2', text: 'Por qué esto no se arregla escribiendo mejor' },

    { type: 'p', text: 'Acá está el punto que me interesa de verdad.' },
    {
      type: 'p',
      text:
        'La respuesta obvia sería: sacá el contador falso, reescribí el mail, usá palabras más amables. Comportamiento. Pero el comportamiento vuelve. La semana que viene el mes viene flojo otra vez y el "necesito una respuesta hoy" se te filtra de nuevo, aunque hayas leído diez posts sobre comunicación empática.',
    },
    {
      type: 'p',
      text:
        'Chris Walker —que construyó Refine Labs y hoy escribe sobre otra cosa completamente distinta— tiene una cadena que explica bien por qué:',
    },
    {
      type: 'pull',
      html:
        '<strong>Identidad → creencias → emociones → intenciones → comportamiento → resultados.</strong>',
    },
    {
      type: 'p',
      text:
        'Si los resultados no son los que querés, no arreglás el comportamiento. Arreglás la identidad. Todo lo demás cae solo.',
    },
    {
      type: 'p',
      html:
        'Aplicado a esto: el contador falso no es una decisión de marketing. Es el comportamiento visible de una creencia invisible, que es <em>lo que hago no alcanza</em>. El mail que aprieta no es un problema de redacción. Es el comportamiento visible de <em>si no lo apuro, no me va a responder</em>.',
    },
    {
      type: 'p',
      text:
        'Cambiá la frase y va a volver con otra forma. Cambiá desde dónde estás parado y las frases se acomodan solas.',
    },
    {
      type: 'p',
      text:
        'Por eso los mejores mensajes comerciales que vas a leer no están mejor escritos. Están escritos desde otro lugar.',
    },

    { type: 'h2', text: 'Las dos frecuencias' },

    {
      type: 'p',
      text:
        'Todo mensaje tiene una frecuencia, y se puede medir en el cuerpo del que lo recibe.',
    },
    {
      type: 'p',
      text:
        'Los que salen desde la escasez producen estrés, ansiedad, frustración, enojo. Aunque tengan razón. Aunque el que los escribió tenga todo el derecho del mundo a reclamar lo que le deben.',
    },
    {
      type: 'p',
      text:
        'Los que salen desde la abundancia producen paz. Salís de esa interacción más liviano, no más chico.',
    },
    {
      type: 'p',
      text:
        'Y no es que una sea blanda y la otra firme. GoDaddy no está regalando el servicio. Podés cobrar exactamente lo mismo, exigir exactamente lo mismo, poner el mismo plazo, y que la persona salga más tranquila. La forma cambia; el reclamo no.',
    },

    { type: 'h2', text: 'La parte que me toca' },

    {
      type: 'p',
      text:
        'Voy a ser honesto sobre mi lugar en esto, porque si no queda como que hablo desde afuera.',
    },
    {
      type: 'p',
      text:
        'Estuve de los dos lados. Recibí mensajes que me dejaron tenso cuando podrían haberme dejado tranquilo. Y escribí mensajes desde el miedo sin darme cuenta: cuando algo me preocupaba, cuando necesitaba que el otro respondiera rápido, cuando estaba apurado y el apuro se filtró en el texto.',
    },
    {
      type: 'p',
      text:
        'Ninguna de esas veces me senté a pensar "voy a apretar un poco a esta persona". Escribí desde donde estaba parado. Y desde donde estás parado se nota siempre, aunque las palabras sean impecables.',
    },
    {
      type: 'p',
      text:
        'Lo que cambió con el tiempo no es que dejé de tener esos momentos. Los sigo teniendo. Lo que cambió es que ahora los reconozco mientras están pasando: estoy escribiendo, siento la presión adentro, y puedo frenar antes de mandar. Reescribir la misma cosa desde otro lugar.',
    },
    {
      type: 'p',
      text:
        'No siempre lo logro. Pero verlo es lo que abre la puerta a poder elegir.',
    },

    { type: 'h2', text: 'Pero también: podés estar en paz y apretar igual' },

    {
      type: 'p',
      text:
        'Hay una parte de esto que no es tuya, y es la que más se pasa por alto.',
    },
    {
      type: 'p',
      text:
        'Podés estar bien parado. Confiar en lo que hacés, cobrar lo que vale, no necesitar apurar a nadie. Y aun así tu empresa aprieta mil veces por día sin que lo sepas.',
    },
    {
      type: 'p',
      text:
        'Los mails automáticos los escribió alguien hace dos años y nadie los volvió a leer. El recordatorio de pago salió de un template que copió un pasante. La página de precios la armó una agencia que trabajó con quince clientes antes que vos y usó la misma estructura en todos. El equipo copió el copy de un curso de growth que estaba bueno en 2019.',
    },
    {
      type: 'p',
      text:
        'Y ahora, además, hay una capa nueva: buena parte de los textos de empresa los escribe un modelo de lenguaje. Le pedís a una IA que redacte el mail de cobranza, y te devuelve el promedio de internet. El promedio de internet es exactamente el manual de retención de hace quince años, reciclado y con mejor gramática.',
    },
    { type: 'p', text: 'Nadie eligió eso tampoco. Es la versión moderna del template de Notion.' },
    {
      type: 'p',
      text:
        'La frecuencia de una marca no es solo la del que la fundó. Es la de todo lo que sale con su nombre. Y casi nunca coinciden.',
    },

    { type: 'h2', text: 'Cómo se revisa esto sin psicoanalizarse' },

    {
      type: 'p',
      text:
        'Acá está la parte práctica, y es más fácil de lo que parece.',
    },
    {
      type: 'p',
      text:
        'No podés cambiar desde dónde estás parado por decisión. Pero no hace falta: los textos que ya escribiste son el registro de dónde estabas cuando los escribiste. Están ahí, guardados, esperando que alguien los lea con esta pregunta en la cabeza. No necesitás mirarte para adentro — alcanza con leer lo que dejaste afuera.',
    },
    { type: 'p', text: 'Son cuatro superficies, en orden de impacto.' },
    {
      type: 'p',
      html:
        '<strong>Los mails automáticos.</strong> Bienvenida, cobro fallido, recordatorio, carrito abandonado, cancelación. Son los que más se envían y los que nadie revisó nunca. Ahí vive la mayor parte del daño, porque se disparan miles de veces sin que ningún humano los vuelva a leer.',
    },
    {
      type: 'p',
      html:
        '<strong>La web donde se pide algo.</strong> El checkout, la página de precios, el formulario, el botón. Ahí viven los contadores, los cupos que no existen y las fechas que no son fechas.',
    },
    {
      type: 'p',
      html:
        '<strong>Los seguimientos.</strong> Los mails y DMs que mandás vos cuando no te contestan. Esta es la superficie más personal y la que más rápido delata en qué estado estabas ese día.',
    },
    {
      type: 'p',
      html:
        '<strong>Los mensajes internos.</strong> Cómo le escribís al equipo cuando el mes viene flojo. Nadie audita esta y es la que más forma la cultura de adentro, que después se filtra a todo lo demás.',
    },
    {
      type: 'p',
      html:
        'Sobre cada texto, dos preguntas. La primera: <strong>si le saco la urgencia, ¿sigue funcionando el mensaje?</strong> Si la respuesta es no, la urgencia era el mensaje, y no había mensaje.',
    },
    {
      type: 'p',
      html:
        'La segunda es más incómoda: <strong>¿qué estoy asumiendo sobre la persona que lo lee?</strong> Cada texto que aprieta tiene una creencia adentro sobre el otro. Que no va a responder si no lo apurás. Que no va a valorar lo que hiciste si no le ponés un precio tachado al lado.',
    },

    { type: 'h2', text: 'El checklist' },

    { type: 'p', text: 'Veinte minutos, sobre lo que ya tenés escrito.' },
    {
      type: 'checklist',
      items: [
        '<strong>Mails automáticos.</strong> Leer los cinco principales de corrido. ¿Cuántos usan una consecuencia negativa como motor?',
        '<strong>Página de precios y checkout.</strong> ¿Hay contadores, cupos o fechas que no son verdad? Si no son verdad, se sacan. No es una decisión de marca, es una decisión de honestidad.',
        '<strong>Últimos cinco seguimientos que mandaste.</strong> ¿Alguno tiene un plazo que inventaste para acelerar la respuesta?',
        '<strong>Últimos tres mensajes al equipo en una semana complicada.</strong> ¿Informan o presionan?',
        '<strong>El test de sustracción.</strong> A cada texto, sacarle la urgencia. Si deja de funcionar, el mensaje era la urgencia.',
        '<strong>El test de la creencia.</strong> Por cada texto que aprieta, escribir en una línea qué asume sobre el que lo lee. Leerlas todas juntas al final.',
        '<strong>Lo que salió de una IA.</strong> Revisar qué textos se generaron con un modelo y no se editaron. Ahí está el promedio de internet, intacto.',
      ],
    },
    {
      type: 'p',
      text:
        'Al final del check vas a tener dos pilas. Una es de cosas heredadas: templates viejos, copy de un curso, texto generado y no revisado. Esa pila se arregla en una tarde y no requiere que cambies nada de vos.',
    },
    {
      type: 'p',
      text:
        'La otra pila es la que escribiste vos, esta semana, desde donde estabas parado. Esa es la que importa.',
    },
    {
      type: 'p',
      text:
        'Y acá va la parte honesta: para la primera pila, esto alcanza. Para la segunda, es un parche. Podés reescribir cada mail y volver a apretar el mes que viene, porque el texto era el síntoma. El check no te cambia la identidad; te muestra la evidencia. Qué hacés con la evidencia ya es otra conversación, más larga y más personal.',
    },
    {
      type: 'p',
      text:
        'Y hay un tercer caso, que conviene decirlo. A veces corrés el check, encontrás que casi todo aprieta, y al mirar por qué te das cuenta de que la empresa necesita apurar para vender. Que si el que compra se toma dos días para pensarlo, no compra. Ahí el problema no está en los textos. Los textos están diciendo la verdad, y son la única parte del sistema que está siendo honesta.',
    },
    { type: 'p', text: 'Eso no se arregla con un check.' },

    { type: 'h2', text: 'Las preguntas' },

    {
      type: 'p',
      text:
        'Entonces la pregunta que te dejo no es si estás manipulando a alguien. Casi seguro que no.',
    },
    {
      type: 'p',
      html:
        'Es esta: <strong>el último mensaje importante que mandaste —la propuesta, el recordatorio, el mail al equipo— ¿lo escribiste desde donde querías estar, o desde donde estabas?</strong>',
    },
    {
      type: 'p',
      text:
        'Y una más, que a mí me costó más responder. Cada mensaje que aprieta esconde adentro una creencia sobre el otro: que si no lo apurás, no te va a responder. Que si le das tiempo, se va a ir.',
    },
    { type: 'p', text: '¿Cuántas veces eso resultó cierto?' },
    { type: 'p', text: 'Casi nunca. Pero se nota en el texto.' },

    { type: 'h2', text: 'Lo que queda' },

    {
      type: 'p',
      text:
        'Tu marca no es el logo ni la paleta. Es la sensación con la que la gente sale de cada interacción con vos, sobre todo de las aburridas: la cobranza, el recordatorio, el seguimiento que nadie mira dos veces. Son las que ocurren mil veces. Ahí se define.',
    },
    {
      type: 'p',
      text:
        'Podés tener una identidad visual impecable y estar dejando a tu gente un poco tensa cada vez que le escribís. Nadie te lo va a decir. Simplemente van a asociar tu nombre con esa sensación.',
    },
    {
      type: 'p',
      text:
        'No hay narrativas peligrosas dando vueltas por ahí, como si fueran objetos con voluntad propia.',
    },
    {
      type: 'p',
      text:
        'Hay gente escribiendo desde la escasez sin saber que la escasez está adentro, no en el mercado. Hay templates que nadie revisó desde 2019. Hay modelos de lenguaje devolviendo el promedio de internet, que es baja frecuencia por default. Y hay empresas enteras cuya única forma de vender es apurar, donde el texto no está mintiendo: está siendo el más honesto del sistema.',
    },
    {
      type: 'p',
      text:
        'Lo más incómodo es esto: casi siempre lo que vendemos es mejor de lo que creemos, y por eso el truco sobra.',
    },
    {
      type: 'p',
      text:
        'Andá y leé los cinco mails que tu empresa manda más veces por día. Eso es lo que la gente cree que sos.',
    },

    {
      type: 'p',
      html:
        '<em>El checklist de arriba es el primer paso del Messaging Frequency Check que usamos en CRUDA.</em>',
    },
    /* Brief v15 T4 — la línea del newsletter salió (no hay
       newsletter todavía; volverá con marca propia). Firma sobria. */
    { type: 'signature', text: 'TODO ES UNA NARRATIVA.' },
  ],

  faqs: [],
}

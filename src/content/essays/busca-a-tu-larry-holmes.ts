import type { Essay } from '@/components/EssayLayout'

/* ------------------------------------------------------------------
   Buscá a tu Larry Holmes — versión español.
   Publicado 28 septiembre 2026. Vinculado con
   /thinking/find-your-larry-holmes vía alternates.
   Cuerpo textual del .md de Fran · no editar.
   Hero: /larry-holmes-hero.webp (1344 × 752 WebP, aspecto 16:9,
   compartido con la versión EN).
------------------------------------------------------------------- */

export const buscaATuLarryHolmes: Essay = {
  slug: 'busca-a-tu-larry-holmes',
  language: 'es',
  category: 'Negocios',
  contentType: 'Essay',
  readingMinutes: 6,
  publishedAt: '2026-09-28',
  updatedAt: '2026-09-28',

  title: 'Buscá a tu Larry Holmes',
  deck: 'El más grande de todos nunca estuvo solo en el ring.',

  answerCapsule:
    'Larry Holmes fue sparring de Ali durante casi cuatro años y el único que tenía su mapa. ¿Quién tiene el mapa de tu empresa?',

  heroImage: '/larry-holmes-hero.webp',
  heroAlt:
    'Rincón de un ring de boxeo en un gimnasio rústico de madera: un par de guantes de cuero gastados colgando de la cuerda superior, dos taburetes de madera al frente y una ventana con luz de día a la izquierda.',
  /* heroCredit intencionalmente ausente · Fran indicó "sin crédito"
     hasta confirmar la fuente. */

  alternates: {
    es: 'busca-a-tu-larry-holmes',
    en: 'find-your-larry-holmes',
  },

  body: [
    /* Sección 1 · setup */
    {
      type: 'p',
      text: 'Hay pocas cosas más raras que ver llorar al que ganó.',
    },
    {
      type: 'p',
      text:
        'Pasó el 2 de octubre de 1980, en Las Vegas, en un estadio que habían armado sobre el estacionamiento del Caesars Palace, como quien arma un salón de fiestas donde a la mañana había autos. Larry Holmes, campeón mundial de los pesados, le ganó todos los rounds a Muhammad Ali. Después del décimo, el rincón de Ali no lo dejó salir más. Era la primera vez en su carrera que a Ali lo paraban antes del final.',
    },
    {
      type: 'p',
      text:
        'Holmes acababa de hacer lo que mejor sabía hacer en el mundo, y lloraba. Para entender esas lágrimas hay que volver unos años atrás, a un lavadero de autos.',
    },

    { type: 'separator' },

    /* Sección 2 · Holmes sparring, el mapa */
    {
      type: 'p',
      text:
        'Holmes había dejado la escuela en séptimo grado. Lavaba autos, y el boxeo era lo único que tenía, hasta que Ali lo eligió como sparring. Le pagaban quinientos dólares por semana, con cama, comida y viajes incluidos. Para un pibe que lavaba autos, eso era ganarse la lotería sin haber comprado el billete.',
    },
    {
      type: 'p',
      text:
        'Durante casi cuatro años vivió en el campamento del hombre más famoso del planeta, y lo conoció como te conoce la gente con la que vivís, que es la única forma en que alguien te conoce de verdad.',
    },
    {
      type: 'p',
      text:
        'Ser sparring es un oficio extraño. Te pagan para que te peguen, y para que pegues lo justo. Holmes nunca intentó humillarlo: Ali era su ídolo, y él quería verlo ganarle a Foreman y a Frazier. Pero round tras round, casi sin darse cuenta, fue armando un mapa que nadie más tenía. Dónde se le abría la guardia cuando se cansaba, qué hacía cuando algo le dolía, qué golpes no veía venir.',
    },
    {
      type: 'p',
      text:
        'En 1978, Holmes ganó el título. Un año después Ali se retiró, y al poco tiempo anunció que volvía, para ser campeón por cuarta vez. Alrededor de Ali había mucha gente, y fue Holmes el que le pidió que no lo hiciera. Le dijo que él no quería pelear, y que Ali tampoco debería. “Tu mente está haciendo una cita que tu cuerpo no puede cumplir.”',
    },
    {
      type: 'p',
      text:
        'Ali peleó igual. Esa noche en Las Vegas, el único que tenía el mapa descubrió que había tenido razón. Por eso lloraba.',
    },

    { type: 'separator' },

    /* Sección 3 · Jobs y Buffett */
    { type: 'p', text: 'Esto no pasa solo en el boxeo.' },
    {
      type: 'p',
      text:
        'Diecisiete años después, la cara de Ali apareció otra vez, en blanco y negro, en una publicidad de computadoras. Steve Jobs había vuelto a Apple hacía unos dos meses y encontró la empresa en su peor momento. Jobs sabía hacer computadoras mejor que nadie, pero Apple se había olvidado de para qué las hacía, y para darse cuenta de eso no hacía falta un ingeniero.',
    },
    {
      type: 'p',
      html:
        'Se sentó con Lee Clow, el creativo con el que había hecho el famoso comercial de 1984, alguien que lo conocía de antes. Entre los dos armaron una campaña sin productos, sin especificaciones y sin precio: solo retratos de Einstein, Gandhi, Picasso, Bob Dylan y Muhammad Ali. A sus empleados, Jobs les explicó que el marketing era sobre valores, porque el mundo hacía tanto ruido que nadie iba a recordar mucho de Apple. Lo que Apple creía, en el fondo, era que la gente con pasión puede cambiar el mundo. El comercial arrancaba con una frase que todavía se cita: <em>Here’s to the crazy ones.</em>',
    },
    {
      type: 'p',
      text:
        'Warren Buffett se había pasado la vida comprando empresas baratas, y cuando apareció una cadena de chocolates que costaba más de lo que él acostumbraba a pagar, dijo que no. Charlie Munger, el socio al que había apodado el abominable hombre del no, esa vez empujó. See’s Candies terminó siendo, para Buffett, el ejemplo de negocio soñado.',
    },
    {
      type: 'p',
      text:
        'Ali tenía pegada, Jobs tenía las computadoras y Buffett tenía los números. Lo que tenían además era alguien con el mapa y con la confianza para mostrárselo.',
    },

    { type: 'separator' },

    /* Sección 4 · vos y tu empresa */
    { type: 'p', text: 'Ahora pensá en tu empresa.' },
    {
      type: 'p',
      text:
        'En algún momento, sin darte cuenta, pasaste de vender una idea a vender un producto con un precio. No es que no hayas buscado ayuda. Le pediste a tu gerente de marketing que ordenara el mensaje, contrataste una agencia, pasaron un par de consultores, le mostraste la web nueva a tu CFO y a los amigos de siempre. Tu gerente de marketing te conoce, pero trabaja para vos, y cuesta decirle al que firma tu sueldo que la historia no se entiende. La agencia y los consultores saben de su oficio, pero te ven unas horas por mes. Tu CFO pregunta, con toda la razón, cuánto va a rendir todo esto. Tus amigos te quieren y te dicen que está bárbaro, que es lo que dicen los amigos.',
    },
    {
      type: 'p',
      text:
        'Cada uno te ve desde donde está parado, y por eso tu empresa habla de lo técnico, de los precios y de los proyectos. Es lo que vos les diste. Una diseñadora de iluminación que conozco me lo resumió una vez, después de veintiocho años de trabajo excepcional: el trabajo es excelente y nadie fuera de tu círculo se entera.',
    },
    {
      type: 'p',
      text:
        'La gente no se sube a un barco por la calidad del casco. Se sube porque cree en adónde va. Lulu Cheng Meservey, que asesora a varios de los founders más conocidos de Silicon Valley, dice que los mejores son, en el fondo, líderes de un culto. ¿Quién se sube al barco de alguien que no sabe bien cuál es su destino?',
    },

    { type: 'separator' },

    /* Sección 5 · Quién tiene tu mapa */
    {
      type: 'p',
      text:
        'Alrededor de Ali había entrenadores, promotores, periodistas y amigos. Holmes era el único que había vivido con él, que podía decirle que no y que, además, quería verlo ganar. Por eso tenía el mapa.',
    },
    { type: 'p', text: '¿Quién tiene el tuyo?' },
    {
      type: 'p',
      text:
        'Después de retirarse, Holmes siguió visitando a Ali durante años. Ya no había pelea que preparar ni título que defender. Iba a ver al hombre, no al campeón, porque lo había conocido antes de que el mundo lo mirara.',
    },

    { type: 'separator' },

    /* Sección 6 · La historia antes de que alguien la mirara */
    {
      type: 'p',
      text:
        'Tu empresa también tiene una historia de antes de que alguien la mirara, y probablemente no aparezca en nada de lo que tu empresa publica. Los proyectos terminados, las funcionalidades, la lista de clientes, el precio: todo eso es verdad, y todo eso lo puede decir también tu competencia.',
    },
    {
      type: 'p',
      text:
        'Si tenés una constructora, en algún lugar hay una casa que explica por qué un día quisiste construir la casa de otras personas. Quizás fue la casa donde creciste, la que tu viejo terminó de a pedazos, un verano la pieza y otro verano el baño, con los ladrillos a la vista durante años porque no alcanzaba para el revoque. Quizás fue una casa que perdieron.',
    },
    {
      type: 'p',
      text:
        'Si diseñás interiores, hay un cuarto que te enseñó que un espacio te puede cambiar el ánimo: la luz de la tarde entrando por la ventana de la cocina de tu abuela, o una lámpara que alguien encendía siempre a la misma hora.',
    },
    {
      type: 'p',
      text:
        'Si hacés software, quizás todo empezó mirando a alguien perder una tarde entera en algo que tendría que haber tomado cinco minutos. Tu vieja haciendo las cuentas del negocio en un cuaderno de tapa dura, con una calculadora de pilas y una paciencia que se le iba terminando antes que las pilas.',
    },
    {
      type: 'p',
      text:
        'Eso no aparece en ninguna presentación. Nadie en tu equipo lo va a proponer para la próxima campaña, porque no lo conocen, o porque los que lo conocen creen que es de otro cajón. Es, sin embargo, lo único de tu empresa que nadie más puede copiar.',
    },
    {
      type: 'p',
      text: 'Vos sabés dónde empezó todo. ¿Quién más, a tu alrededor, lo sabe?',
    },

    /* Newsletter · linkea a /newsletter. */
    {
      type: 'p',
      html:
        '<em>Cada semana, la historia completa. <a href="/newsletter">Suscribite a la newsletter.</a></em>',
    },
  ],
}

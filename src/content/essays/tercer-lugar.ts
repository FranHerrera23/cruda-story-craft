import type { Essay } from '@/components/EssayLayout'

/* ------------------------------------------------------------------
   Tercer lugar — versión española.
   Publicada 9 agosto 2026. Cross-linked con /thinking/third-place
   via alternates. Primer par bilingüe del sitio.
   No editar el cuerpo — verbatim del original.
------------------------------------------------------------------- */

export const tercerLugar: Essay = {
  slug: 'tercer-lugar',
  language: 'es',
  category: 'Sociedad',
  contentType: 'Essay',
  readingMinutes: 8,
  publishedAt: '2026-08-09',
  updatedAt: '2026-08-09',

  title: 'Una sociedad se define por cómo te trata cuando no producís nada',

  /* Brief v15 T1 — no lleva bajada en negrita. La primera línea del
     cuerpo ("Hace años que no sos nadie.") funciona como apertura, no
     como bajada. No inventar una para completar el molde. */

  answerCapsule:
    'Una sociedad se define por cómo trata a su ciudadano cuando no está produciendo nada. Cuando no compra, no vende, no rinde, no aporta. Cuando simplemente está. Casi ninguna sociedad tiene una buena respuesta para eso. Y la respuesta que da cada una te dice todo lo que necesitás saber sobre ella.',

  alternates: {
    es: 'tercer-lugar',
    en: 'third-place',
  },

  body: [
    { type: 'p', text: 'Hace años que no sos nadie.' },
    {
      type: 'p',
      text:
        'En el trabajo sos output. En tu casa sos un rol con expectativas colgadas. En un café alquilás la mesa con un cortado. Online sos un perfil que tiene que seguir siendo interesante.',
    },
    {
      type: 'p',
      text:
        'Cada uno de esos lugares te pide algo a cambio de dejarte estar.',
    },
    {
      type: 'p',
      html:
        'Te lo digo de una, por si no leés el resto: <strong>una sociedad se define por cómo trata a su ciudadano cuando no está produciendo nada.</strong> Cuando no compra, no vende, no rinde, no aporta. Cuando simplemente está.',
    },
    {
      type: 'p',
      text:
        'Casi ninguna sociedad tiene una buena respuesta para eso. Y la respuesta que da cada una te dice todo lo que necesitás saber sobre ella.',
    },
    {
      type: 'p',
      text:
        'Me llevó un año en Dubái y una tarde en una biblioteca sueca darme cuenta.',
    },

    { type: 'h2', text: 'Cómo se siente no tenerlo' },

    { type: 'p', text: 'Viví un año en Dubái.' },
    {
      type: 'p',
      text:
        'La ciudad es espectacular. Todo funciona. Es segura, rápida, ambiciosa, y te premia si aparecés con algo para ofrecer. Conocí gente extraordinaria y sigo volviendo.',
    },
    {
      type: 'p',
      text:
        'Pero estuve solo de una manera que no supe nombrar mientras me estaba pasando.',
    },
    {
      type: 'p',
      text:
        'La arquitectura te mueve, sin que lo decidas, de tu casa al trabajo, del trabajo a un restaurante o a un mall, del restaurante a tu casa. Siempre en auto. Siempre con aire acondicionado. Siempre consumiendo algo. Caminar sin destino no es raro allá: es físicamente complicado. Hay pocas veredas, y el calor las vuelve inhabitables la mitad del año.',
    },
    {
      type: 'p',
      html:
        'Y la cultura es transaccional. Estás en un lugar porque vas a comprar, vender o cerrar algo. Cada café tenía un propósito. Cada cena tenía un ángulo. Cada conversación arrancaba con <em>a qué te dedicás</em>, que en realidad significa <em>cuánto valés para mí</em>.',
    },
    {
      type: 'p',
      text:
        'Y me volví bueno en eso. Esa es la parte que más me costó admitir. No la sufrí: me adapté. Aprendí a tener siempre algo para ofrecer, a leer una sala buscando la oportunidad, a ser interesante a pedido.',
    },
    {
      type: 'p',
      text:
        'En algún momento de ese año dejé de ser una persona y pasé a ser una propuesta.',
    },
    {
      type: 'p',
      text:
        'Nadie me hizo eso. Me lo hice yo, porque no había un solo lugar en esa ciudad donde no hiciera falta. Ni uno donde pudiera aparecer sin nada y estar bien.',
    },
    {
      type: 'p',
      text:
        'Y no es un veredicto sobre Dubái. Cada ciudad es buena para unas cosas y mala para otras, y Dubái es extraordinaria en lo que se propuso ser. Simplemente no la construyeron para el que no produce.',
    },

    { type: 'h2', text: 'Cómo se siente tenerlo' },

    {
      type: 'p',
      text:
        '27 de diciembre, tres grados bajo cero en Malmö. Salimos del hotel con mi mujer sin ningún plan, caminamos quince minutos, y vimos un castillo renacentista a lo lejos. No teníamos idea de qué era. Llegó una pareja en bici, estacionaron, entraron. Los seguimos.',
    },
    { type: 'p', text: 'Era la biblioteca pública.' },
    {
      type: 'p',
      text:
        'Adentro había un silencio que no era el silencio incómodo de los lugares formales. Era el silencio cómodo de una casa llena de gente que se conoce. En una sala, cuatro personas leyendo el diario: tres viejos y una señora de sweater blanco, cada uno en su sillón, ninguno hablando, todos ocupando el espacio como si fuera de ellos.',
    },
    { type: 'p', text: 'Nadie pidió nada. Nadie consumió nada. Nadie justificó estar ahí.' },
    {
      type: 'p',
      text:
        'Nos sentamos frente a un ventanal enorme, con ese sol de invierno escandinavo que se filtra distinto, y pensé: me mudaría a Malmö solo para venir acá todos los días.',
    },
    {
      type: 'p',
      text:
        'Tardé días en entender por qué me había pegado tanto. No era el edificio, ni la luz, ni la prolijidad escandinava.',
    },
    {
      type: 'p',
      text:
        'Era que por primera vez en años estaba en un lugar que no me pedía nada.',
    },

    { type: 'h2', text: 'Tiene nombre' },

    {
      type: 'p',
      html:
        'En 1989 un sociólogo llamado Ray Oldenburg escribió un libro, <em>The Great Good Place</em>, y le puso nombre a la cosa: <strong>tercer lugar</strong>.',
    },
    {
      type: 'p',
      text:
        'La casa es el primero. El trabajo es el segundo. El tercero es cualquier lado donde no sos marido, ni empleado, ni jefe, ni cliente. Una plaza, una biblioteca, un club, un lago. Un lugar donde entrar cuesta poco o nada, y donde podés volver mañana sin que nadie te pregunte dónde estuviste ayer.',
    },
    {
      type: 'p',
      text:
        'Oldenburg ya avisaba en esa época que estaba desapareciendo. Ciudades hechas para autos y no para personas. Suburbios matando la vereda. Malls reemplazando plazas con simulacros vigilados.',
    },
    {
      type: 'p',
      text:
        'Lo que no llegó a ver es qué lo reemplazó. Cuando el tercer lugar físico se cae, no aparece otro físico en su lugar. Aparece la pantalla. El feed es la plaza. El grupo de WhatsApp es el bar. La identidad pública es un perfil. Y el cuerpo, que igual tiene que estar en algún lado, queda atrapado entre el living y la oficina.',
    },

    { type: 'h2', text: 'Cada país hace una apuesta' },

    { type: 'p', text: 'Y acá está lo que más me interesa, porque la apuesta se ve.' },
    {
      type: 'p',
      text:
        'Suecia decidió, como sociedad, gastar plata pública para que un argentino de paso, que no aporta absolutamente nada, pueda entrar a un edificio de vidrio en pleno invierno, sentarse frente a una ventana y quedarse tres horas sin que nadie le pregunte nada. Eso costó décadas de decisiones políticas. Impuestos. Prioridades. Una idea de qué le debe una sociedad a su gente cuando no está ni produciendo ni consumiendo.',
    },
    {
      type: 'p',
      text:
        'Pero ojo, porque esto no es una cuestión de guita ni de urbanismo de primer mundo.',
    },
    {
      type: 'p',
      text:
        'A cinco minutos de mi casa en Rusia hay un lago donde en verano van a pescar viejos y pibes de veinte. Algunos se tiran al agua. Otros se sientan y ya. Los barrios tienen veredas, hay plazas que la gente usa de verdad, y los chicos andan solos y juegan afuera, algo que casi no existe más en el mundo. Nadie lo diseñó como política pública. Es simplemente lo que la gente hace.',
    },
    {
      type: 'p',
      text:
        'En Argentina es parecido, con el club de barrio. El mío tenía cancha de fútbol, de tenis, una pared de paleta. Pero más que eso tenía un espacio donde podías ir a estar. Charlar con tus amigos. Ver jugar a otros. Pasar una tarde sin plan. No pagabas cada vez. No tenías que consumir. Eras socio y con eso alcanzaba.',
    },
    {
      type: 'p',
      text:
        'Por eso el fútbol significa lo que significa para nosotros. Cuando sos hincha de Boca, de River o del club del barrio, sos un hincha más. La tribuna no te pide el CV. No te mide por output. Pertenecés, y eso no cambia según cómo te fue en la semana. Funciona a pesar del Estado, no gracias a él.',
    },
    {
      type: 'p',
      text:
        'Los que lo perdieron fueron Dubái y Estados Unidos, y lo perdieron por lo mismo desde dos lados distintos: la transacción y el individualismo. Uno construyó un país sobre la idea de que la vida es un negocio. El otro se enamoró del individuo y terminó con Starbucks, un tercer lugar trucho donde comprás un café para ganarte el derecho a ocupar la mesa.',
    },
    {
      type: 'p',
      text:
        'Aunque a veces encontré lo real allá. Un día subí al Getty, en Los Ángeles. La entrada es gratis. El edificio está sobre una colina mirando al Pacífico. Adentro había gente con laptops, estudiantes leyendo, parejas tomando café, viejos sentados en bancos mirando las obras. Nadie me pidió una entrada porque no había. Nadie me preguntó qué hacía ahí. Estuve cuatro horas y no gasté un dólar.',
    },
    { type: 'p', text: 'En Estados Unidos eso es la excepción, no la regla.' },

    { type: 'h2', text: 'Nunca fue un edificio' },

    {
      type: 'p',
      html:
        'Alan Watts decía que la palabra "persona" viene del latín <em>persona</em>: la máscara que usaban los actores en el teatro griego y romano. La palabra que usamos para decir <em>soy alguien</em> originalmente significaba <em>máscara</em>.',
    },
    {
      type: 'p',
      text:
        'Jung agarró la misma palabra y la convirtió en concepto. La persona no es el problema, decía. La necesitás. El problema es identificarte tanto con ella que te olvidás de que atrás hay alguien.',
    },
    {
      type: 'p',
      html:
        'Watts lo decía de sí mismo sin ningún drama: <em>interpreto un papel llamado Alan Watts. Sé perfectamente que es una actuación.</em>',
    },
    {
      type: 'p',
      text:
        'Entonces el tercer lugar no era la biblioteca. La biblioteca solo lo hacía fácil. Lo que encontré ahí fue el permiso de sacarme la máscara unas horas. Y lo que me faltaba en Dubái no eran veredas: era eso.',
    },
    {
      type: 'p',
      text:
        'Podés perderlo en Suecia si entrás con la máscara puesta. Y podés encontrarlo en cualquier lado si decidís bajarla.',
    },

    { type: 'h2', text: 'Entonces dejame preguntarte algo' },

    {
      type: 'p',
      text:
        'No te voy a preguntar dónde está tu tercer lugar. Probablemente no tengas uno, y no es tu culpa: a casi todos nos entregaron un mundo con dos ubicaciones y una pantalla.',
    },
    { type: 'p', text: 'Te pregunto algo más chico.' },
    {
      type: 'p',
      html:
        '<strong>¿Hay una sola persona con la que puedas estar sin tener nada para ofrecerle?</strong>',
    },
    {
      type: 'p',
      text:
        'No un cliente. No un contacto. No alguien que te admira, o que necesita algo tuyo, o que capaz sirve más adelante. Alguien frente a quien puedas sentarte sin haber producido nada esta semana. Sin una historia lista, sin novedades, sin una versión tuya presentable.',
    },
    { type: 'p', text: 'Alguien delante de quien no tengas que ser bueno en nada.' },
    {
      type: 'p',
      text:
        'Si esa persona existe, ese es tu tercer lugar. Lo tuviste todo este tiempo y nadie te dijo cómo se llamaba.',
    },
    {
      type: 'p',
      text:
        'Y si no existe — si repasaste la lista y cada nombre venía con un rol pegado — ese es el trabajo. No la marca, no el lanzamiento, no lo próximo que estés construyendo.',
    },
    { type: 'p', text: 'Ese. Y es más urgente que todo lo demás.' },
    {
      type: 'p',
      text:
        'Sigo pensando en la señora del sweater blanco. En su sillón, con su diario, sin ser nadie en particular. Lo venía haciendo hacía años y lo iba a hacer de nuevo al día siguiente.',
    },
    { type: 'p', text: 'Nadie la estaba mirando. De eso se trataba.' },

    { type: 'signature', text: 'TODO ES UNA NARRATIVA.' },
  ],

  faqs: [],
}

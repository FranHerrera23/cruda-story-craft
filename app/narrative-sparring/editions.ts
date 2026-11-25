type Credit = {
  label: string
  headline: string
  body: string | string[]
  credits?: string
}

export const career: Record<'es' | 'en', Credit[]> = {
  es: [
    {
      label: 'Convocar gente',
      headline: 'A los 17 organicé mi primer evento. Vinieron 300 personas.',
      body: 'Fue Fuck Up Nights, una noche para hablar en público de lo que salió mal. Después coproduje shows de Lucho Mellera y Lucas Lauriente, Lucas Lezin, Grego Rossello, Lucas Castel y Mariano Bondar.',
      credits: 'Entre todos esos shows de comedia vinieron más de 3.000 personas.',
    },
    {
      label: 'Teatro y música',
      headline: 'Integré los equipos de producción de Axel, Les Luthiers y el musical Sugar.',
      body: 'También trabajé en el concierto «De Broadway a Hollywood». Gerónimo Rauch cantó con una orquesta sinfónica dirigida por Gerardo Gardelín.',
    },
    {
      label: 'Campañas con creadores',
      headline: 'Las campañas con creadores en las que trabajé superaron los 30 millones de vistas.',
      body: 'A los 18, mi primer cliente fue Mary Kay. Más tarde coordiné a los creadores para el lanzamiento de TikTok en Argentina.',
      credits: 'En campañas para marcas trabajé con Pablo Granados, Mike Chouhy, Pipa Barbato, Agustín Battioni, Chapu Martínez, PedritoVM, Dai Hernández, Lucas Rodríguez y Roberto Galati, entre otros.',
    },
    {
      label: 'Luna PR · Prensa',
      headline: 'Mi primer trabajo en Dubái fue en Luna PR.',
      body: 'Llevé las relaciones con la prensa de clientes de la agencia.',
    },
    {
      label: 'Norhart · Construcción',
      headline: 'Escribí con Mike Kaeding, director de la constructora Norhart.',
      body: 'Contamos cómo su empresa fabrica sus propias piezas para bajar el costo de construir viviendas. Escribí sus charlas, publicaciones y presentaciones a inversores. Empecé dentro de Norhart y seguí con Mike cuando fundé CRUDA en 2024.',
    },
    {
      label: 'CRUDA · Moda',
      headline: 'El CEO de un grupo de moda de USD 300 millones había construido la empresa dos veces.',
      body: 'Trabajamos con él para contar qué había aprendido y cómo funcionaba la nueva empresa. Esa historia la usó primero con su equipo y sus inversores.',
    },
    {
      label: 'CRUDA · Salud y hotelería',
      headline: '¿Qué puede aprender un hospital de un buen hotel?',
      body: 'Con Girish Sehgal, que trabajó en Four Seasons Chicago y pasó a dirigir la experiencia del paciente en un hospital de Abu Dabi, escribimos sobre algo que conocía de primera mano. Hasta el modo en que un guardia recibe a una familia en la puerta puede cambiar cómo se siente adentro.',
    },
    {
      label: 'CRUDA · Arquitectura y diseño',
      headline: 'Desde 2021 trabajo con Karen Mannheim en la estrategia y la dirección creativa de su marca personal.',
      body: [
        'Cuando empezamos, su firma de iluminación ya llevaba 25 años en Perú. En Lima había trabajado en edificios de Robert A.M. Stern Architects, el estudio que diseñó dos residencias de Yale, la ampliación de la Harvard Kennedy School y la torre de Nueva York donde la venta de un penthouse marcó un récord nacional en 2019.',
        'Una foto de un edificio terminado puede llevar la firma del arquitecto y dejar fuera de cuadro todas las decisiones de quien lo iluminó. Con Karen hicimos visibles esas decisiones. Ese criterio guía las historias que contamos sobre su carrera, los proyectos que llevamos a video y la forma en que su equipo presenta el estudio ante un posible cliente.',
        'Florida fue un capítulo de ese trabajo. Para un arquitecto en Miami, conocer el nombre de Robert A.M. Stern era una cosa. Entender qué había aportado Karen a un proyecto suyo en Lima le daba una razón concreta para querer trabajar con ella. Después llegaron los proyectos con Wecselman Design, Kobi Karp y Oppenheim Architecture. Entre las residencias que iluminó su equipo están la de un futbolista que vistió la camiseta del Barça y la de un cantante ganador de un Grammy.',
      ],
    },
  ],
  en: [
    {
      label: 'Bringing people together',
      headline: 'I was 17 when I organized my first event. Three hundred people came.',
      body: 'It was Fuck Up Nights, a night for people to talk openly about things that went wrong. Later I co-produced shows for Lucho Mellera and Lucas Lauriente, two Argentine comics with Netflix specials.',
      credits: 'Across all the comedy shows I co-produced, more than 3,000 people attended.',
    },
    {
      label: 'Stage production',
      headline: 'From Broadway to Hollywood, live in Argentina.',
      body: 'I worked on the production team for a concert with Gerónimo Rauch, who played the Phantom in London’s West End. Gerardo Gardelín, who wrote music for Tanguera at New York City Center, conducted the orchestra.',
    },
    {
      label: 'Creator campaigns',
      headline: 'I worked on creator campaigns that drew over 30 million views.',
      body: 'I coordinated creators for TikTok’s Argentina launch. My campaign work also included PedritoVM and Dai Hernández. Their YouTube channels have about 4.4 million and 3 million subscribers, respectively (November 2026).',
    },
    {
      label: 'Luna PR · Media relations',
      headline: 'My first job in Dubai was at Luna PR.',
      body: 'I handled media relations for the agency’s clients.',
    },
    {
      label: 'Norhart · Construction',
      headline: 'I wrote with Mike Kaeding, CEO of Minnesota homebuilder Norhart.',
      body: 'We turned the work inside his factories into talks, investor presentations and stories about the cost of housing. I started on his team and kept working with him when I founded CRUDA in 2024.',
    },
    {
      label: 'CRUDA · Fashion',
      headline: 'The CEO of a $300 million fashion group had built the business twice.',
      body: 'We worked with him on an account of what he had learned and how the new company worked. His own team and investors were its first audience.',
    },
    {
      label: 'CRUDA · Healthcare and hospitality',
      headline: 'What can a hospital learn from a good hotel?',
      body: 'Girish Sehgal worked at Four Seasons Chicago before leading patient experience at a hospital in Abu Dhabi. We wrote about details he knew firsthand, down to how the security guard at the door can make a family feel safe.',
    },
    {
      label: 'CRUDA · Architecture and design',
      headline: 'Since 2021, I’ve worked with Karen Mannheim on the strategy and creative direction of her personal brand.',
      body: [
        'When we started, her lighting design firm had been working in Peru for 25 years. In Lima, her team had worked on buildings by Robert A.M. Stern Architects, the firm behind two residential colleges at Yale, the Harvard Kennedy School expansion and the New York tower where a penthouse sale set a national record in 2019.',
        'A photograph of a finished building can credit the architect and leave every decision the lighting designer made outside the frame. Karen and I brought those decisions into view. They guide the stories we tell about her career, the projects we document on film and the way her team presents the studio to a prospective client.',
        'Florida was one chapter of that work. An architect in Miami might already know Robert A.M. Stern’s name. Seeing what Karen had contributed to one of his firm’s projects in Lima gave that architect a reason to work with her. Projects with Wecselman Design, Kobi Karp and Oppenheim Architecture followed. Among the homes her team has lit are one for a footballer who wore the Barça shirt and another for a Grammy-winning singer.',
      ],
    },
  ],
}

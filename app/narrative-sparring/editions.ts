type Credit = {
  label: string
  headline: string
  body: string
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
      body: 'Cuando volvió a empezar, sus socios conocían versiones distintas de lo que había pasado. Trabajamos con él para contar qué había aprendido y cómo funcionaba la nueva empresa. Esa historia la usó primero con su equipo y sus inversores.',
    },
    {
      label: 'CRUDA · Salud y hotelería',
      headline: '¿Qué puede aprender un hospital de un buen hotel?',
      body: 'Con Girish Sehgal, que trabajó en Four Seasons Chicago y pasó a dirigir la experiencia del paciente en un hospital de Abu Dabi, escribimos sobre algo que conocía de primera mano. Hasta el modo en que un guardia recibe a una familia en la puerta puede cambiar cómo se siente adentro.',
    },
    {
      label: 'CRUDA · Arquitectura y diseño',
      headline: 'Karen Mannheim abrió en Miami con un nombre que los arquitectos ya conocían en Lima.',
      body: 'Con Karen armamos las presentaciones que usa su equipo para competir por proyectos. En video y en redes mostramos cómo decidía iluminar una casa o un edificio. Su estudio trabajó en proyectos con RAMSA, Wecselman Design, Oppenheim Architecture y Kobi Karp.',
      credits: 'Su comunidad pasó de 1.000 a 26.000 seguidores. Un video sobre un edificio de RAMSA en Lima trajo la consulta que se convirtió en un proyecto de iluminación para un penthouse.',
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
      body: 'When he started again, his partners had heard different versions of what had happened. We worked with him on an account of what he had learned and how the new company worked. His own team and investors were its first audience.',
    },
    {
      label: 'CRUDA · Healthcare and hospitality',
      headline: 'What can a hospital learn from a good hotel?',
      body: 'Girish Sehgal worked at Four Seasons Chicago before leading patient experience at a hospital in Abu Dhabi. We wrote about details he knew firsthand, down to how the security guard at the door can make a family feel safe.',
    },
    {
      label: 'CRUDA · Architecture and design',
      headline: 'When Karen Mannheim opened in Miami, architects in Lima already knew her lighting studio.',
      body: 'Karen and I built the presentations her team uses to pitch for work. In films and social posts, we showed how she decides to light a house or a building. Her studio worked on projects with RAMSA, Wecselman Design, Oppenheim Architecture and Kobi Karp.',
      credits: 'Her audience grew from 1,000 to 26,000. A film about a RAMSA building in Lima brought in an inquiry that became a penthouse lighting commission.',
    },
  ],
}

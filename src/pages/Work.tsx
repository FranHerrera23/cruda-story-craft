import { Link } from 'react-router-dom';
import karenImage from '@/assets/karen-mannheim-casestudy.jpg';
import mikeImage from '@/assets/mike-kaeding.webp';
import juanPabloImage from '@/assets/juan-pablo-romero.jpeg';
import hospitalityImage from '@/assets/hospitality-manager.jpg';
import retailImage from '@/assets/retail-ceo.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Work = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>();

  const clients = [
    {
      name: "Karen Mannheim",
      title: "Lighting Designer",
      description: "From technical expert to cultural curator—translating 20 years of lighting mastery into a narrative that travels across continents.",
      image: karenImage,
      slug: "karen-mannheim",
      status: "live"
    },
    {
      name: "Mike Kaeding",
      title: "CEO & Founder, Norhart",
      description: "Transforming a construction CEO into a thought leader whose ideas about housing reform reach millions.",
      image: mikeImage,
      slug: "mike-kaeding",
      status: "live"
    },
    {
      name: "Juan Pablo Romero",
      title: "Founder & Managing Partner",
      description: "Elevating a venture capital narrative from startup to sophistication.",
      image: juanPabloImage,
      slug: "juan-pablo-romero",
      status: "coming-soon"
    },
    {
      name: "Hospitality GM",
      title: "General Manager, Luxury Hotels",
      description: "Translating decades of hospitality expertise into a personal brand that opens doors.",
      image: hospitalityImage,
      slug: "hospitality-gm-abudhabi",
      status: "coming-soon"
    },
    {
      name: "Retail CEO",
      title: "Chief Executive Officer",
      description: "Positioning a retail visionary as the architect of customer experience transformation.",
      image: retailImage,
      slug: "retail-ceo-dubai",
      status: "coming-soon"
    }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F5F1E8', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={headerRef}
            className={`animate-on-scroll animate-header ${headerVisible ? 'visible' : ''}`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8" style={{ color: '#3D3835', lineHeight: '1.1' }}>
              The Work That{' '}
              <span style={{ color: '#FF2E63', fontWeight: 300 }}>Travels</span>
            </h1>
          </div>
          <p 
            ref={subtitleRef}
            className={`text-xl md:text-2xl font-light max-w-3xl animate-on-scroll animate-paragraph ${subtitleVisible ? 'visible' : ''}`}
            style={{ color: '#3D3835', opacity: 0.8, lineHeight: '1.6' }}
          >
            Real stories. Real expertise. Real results. See how we help founders transform years of mastery into narratives that move markets.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {clients.map((client, index) => {
              const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();
              
              return (
                <div
                  key={client.slug}
                  ref={elementRef}
                  className={`animate-on-scroll animate-box ${isVisible ? 'visible' : ''}`}
                  style={{ 
                    opacity: 0,
                    transform: 'translateY(30px)',
                    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
                  }}
                >
                  <Link 
                    to={client.status === 'live' ? `/clients/${client.slug}` : '#'}
                    className={`block group relative ${client.status === 'coming-soon' ? 'cursor-default' : ''}`}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                      <img 
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Coming Soon Overlay */}
                      {client.status === 'coming-soon' && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                          <span className="text-white text-sm font-medium px-4 py-2 border border-white/30 rounded-full mb-3">
                            COMING SOON
                          </span>
                          <p className="text-white/80 text-sm">Full case study in progress</p>
                        </div>
                      )}
                      
                      {/* Hover Overlay for Live Cases */}
                      {client.status === 'live' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-8">
                          <span className="text-white text-lg font-light flex items-center gap-2">
                            View Case Study
                            <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-3xl font-light mb-2" style={{ color: '#3D3835' }}>
                        {client.name}
                      </h3>
                      <p className="text-sm font-medium mb-4" style={{ color: '#FF2E63', letterSpacing: '0.05em' }}>
                        {client.title}
                      </p>
                      <p className="text-base font-light leading-relaxed" style={{ color: '#3D3835', opacity: 0.7 }}>
                        {client.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#3D3835' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
            Ready to translate your expertise?
          </h2>
          <p className="text-xl font-light mb-12 text-white/80 max-w-2xl mx-auto">
            Let's turn your years of mastery into a narrative that opens doors, attracts opportunities, and positions you where you belong.
          </p>
          <Link
            to="/book-call"
            className="inline-block px-12 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#FF2E63',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Start Your Story
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Work;

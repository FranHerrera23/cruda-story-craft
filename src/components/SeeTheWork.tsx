import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    slug: "construction-expansion",
    clientName: "CONSTRUCTION CEO",
    projectHeadline: "International Expansion",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop",
    metrics: [
      { label: "Continents", value: "3" },
      { label: "Timeline", value: "18 months" },
      { label: "Projects", value: "$50M+" }
    ],
    description: "Positioned regional builder as climate tech authority, securing partnerships across three continents.",
    challenge: "Regional construction company struggling to compete internationally.",
    solution: "Developed positioning as sustainable construction innovator with proven track record.",
    results: "Secured international partnerships across 3 continents, $50M+ in new projects.",
    testimonial: "CRUDA helped us think bigger than our market."
  },
  {
    id: 2,
    slug: "karen-mannheim",
    clientName: "KAREN MANNHEIM",
    projectHeadline: "Strategic Positioning",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    metrics: [
      { label: "Locations", value: "12" },
      { label: "Value", value: "$50M+" },
      { label: "Featured in", value: "AD" }
    ],
    description: "From lighting designer to architectural storyteller. Strategic narrative that attracts developers who understand value.",
    challenge: "Despite working with Porsche, Maserati, and Four Seasons, Karen's brand didn't reflect the caliber of her client roster.",
    solution: "We repositioned her from 'lighting designer' to strategic collaborator for architects and developers building iconic spaces.",
    results: "Featured in Architectural Digest, secured 12 new high-end residential and retail projects, $50M+ project value.",
    testimonial: "The positioning CRUDA created helped me attract the projects I actually want to work on."
  },
  {
    id: 3,
    slug: "athlete-brand",
    clientName: "PROFESSIONAL ATHLETE",
    projectHeadline: "Personal Brand Launch",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=800&fit=crop",
    metrics: [
      { label: "Followers", value: "14K" },
      { label: "Board Positions", value: "2" },
      { label: "Speaking", value: "8+" }
    ],
    description: "Built personal brand architecture that extends influence beyond the field into entrepreneurship and leadership.",
    challenge: "Professional athlete wanting to build influence beyond sports.",
    solution: "Created personal brand framework positioning athletic discipline as business leadership principle.",
    results: "14K followers, 2 board positions, 8+ speaking engagements.",
    testimonial: "My athletic career opened doors. CRUDA helped me build what's behind them."
  },
  {
    id: 4,
    slug: "real-estate-premium",
    clientName: "REAL ESTATE DEVELOPER",
    projectHeadline: "Premium Positioning",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=800&fit=crop",
    metrics: [
      { label: "Pricing", value: "Premium" },
      { label: "Clients", value: "International" },
      { label: "Features", value: "Media" }
    ],
    description: "Elevated from regional developer to international authority in sustainable luxury construction.",
    challenge: "Regional developer wanting to command premium pricing and attract international clients.",
    solution: "Repositioned as sustainable luxury specialist with proven premium project delivery.",
    results: "Premium pricing achieved, international client base established, multiple media features.",
    testimonial: "CRUDA showed us how to charge what we're worth."
  }
];

const SeeTheWork = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] mb-2" style={{ color: '#3D3835' }}>
              See the Work
            </h2>
            {/* Yellow underline accent */}
            <div className="h-[2px] w-[80px] mx-auto" style={{ backgroundColor: '#F5B800' }} />
          </div>

          {/* Horizontal Carousel */}
          <div className="relative">
            <div 
              id="work-carousel"
              className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              <div className="flex gap-8 md:gap-10">
                {caseStudies.map((study, index) => (
                <Link 
                  key={study.id}
                  to={`/work/${study.slug}`}
                  className="group cursor-pointer w-[85vw] md:w-[420px] flex-shrink-0 snap-start"
                  style={{
                    opacity: 0,
                    transform: 'translateX(40px)',
                    animation: `fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.15 * index}s forwards`
                  }}
                >
                  <div 
                    className="bg-white overflow-hidden"
                    style={{ 
                      borderRadius: '12px',
                      boxShadow: '0 2px 16px rgba(61,56,53,0.08)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,56,53,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 16px rgba(61,56,53,0.08)';
                    }}
                  >
                    {/* Image - 60% of card */}
                    <div className="relative overflow-hidden" style={{ height: '320px' }}>
                      <img 
                        src={study.image} 
                        alt={study.projectHeadline}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content - 40% of card */}
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-wide mb-3" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
                        {study.clientName}
                      </p>
                      
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D3835' }}>
                        {study.projectHeadline}
                      </h3>

                      {/* Key Metrics with Yellow Accent */}
                      <div className="space-y-2 mb-4">
                        {study.metrics.slice(0, 2).map((metric, idx) => (
                          <p key={idx} className="text-sm">
                            <span style={{ color: '#F5B800', fontWeight: '600' }}>{metric.value}</span>
                            <span style={{ color: 'rgba(61, 56, 53, 0.7)' }}> {metric.label}</span>
                          </p>
                        ))}
                      </div>

                      <p className="text-[15px] leading-[1.6] mb-6 line-clamp-3" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                        {study.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#3D3835' }}>
                        <span>View Case Study</span>
                        <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const carousel = document.getElementById('work-carousel');
                if (carousel) carousel.scrollBy({ left: -440, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#3D3835', color: '#FDFBF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5B800'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D3835'}
            >
              ←
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('work-carousel');
                if (carousel) carousel.scrollBy({ left: 440, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#3D3835', color: '#FDFBF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5B800'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D3835'}
            >
              →
            </button>
          </div>
        </div>
    </section>
  );
};

export default SeeTheWork;

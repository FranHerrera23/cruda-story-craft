import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import karenPhoto from "@/assets/karen-mannheim-new.jpg";
import mikePhoto from "@/assets/mike-kaeding.webp";
import juanPhoto from "@/assets/juan-pablo-romero.jpeg";
import hospitalityPhoto from "@/assets/hospitality-manager.jpg";
import retailPhoto from "@/assets/retail-ceo.jpg";
import marlyPhoto from "@/assets/marly-hurtado.jpeg";

const clients = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer",
    location: "High-End Residential & Retail | Peru & USA",
    photo: karenPhoto,
    fullTitle: "Architectural Lighting Designer | High-End Residential & Retail",
    testimonial: "Fran helped us articulate what made our work different in a way our clients finally understood. The clarity was immediate.",
    bio: [
      "Karen Mannheim has spent 15 years mastering the intersection of light, space, and human experience. Based between Lima and Miami, she's become the go-to designer for architects and developers who understand that lighting isn't decoration—it's the difference between a space that works and one that transforms."
    ],
    whatBuilding: "Karen is expanding her practice into hospitality and healthcare—spaces where lighting directly impacts human wellbeing and business performance.",
    achievements: [
      "Led lighting design for $50M+ residential development in Lima, Peru",
      "Created signature lighting experience for luxury retail brand across 12 locations",
      "Featured in Architectural Digest for innovative use of natural light integration"
    ]
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO of Norhart Inc.",
    location: "Residential Construction | Minneapolis, USA",
    photo: mikePhoto,
    fullTitle: "CEO of Norhart Inc. | Residential Construction",
    testimonial: "Working with CRUDA transformed how we communicate our mission. The narrative system we built together works whether I'm on stage, on a podcast, or in a pitch meeting.",
    bio: [
      "Founder of a $200M construction company redefining how America builds. Led the development of a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures."
    ],
    whatBuilding: "Building scalable construction models that reduce costs and timelines.",
    achievements: [
      "Built $200M construction company",
      "Led $100M residential development"
    ]
  },
  {
    slug: "juan-pablo-romero",
    name: "Juan Pablo Romero",
    title: "US Regional Sales Manager",
    location: "UNIK Parquet | High-End Wood Flooring",
    photo: juanPhoto,
    fullTitle: "US Regional Sales Manager, UNIK Parquet",
    comingSoon: true,
    bio: [
      "Leads US regional sales for UNIK Parquet, serving luxury residential and commercial projects. Deep expertise in high-end wood flooring specifications and architectural applications."
    ],
    whatBuilding: "Building industry leadership in luxury wood flooring across the US market.",
    achievements: [
      "350% LinkedIn growth in 5 months",
      "Featured in industry publications",
      "Recognized thought leader in luxury flooring"
    ]
  },
  {
    slug: "hospitality-gm-abudhabi",
    name: "We'd Love to Tell You, But We Also Enjoy Not Being Sued",
    title: "Luxury Hospitality GM",
    location: "UAE",
    photo: hospitalityPhoto,
    fullTitle: "General Manager | Luxury Hospitality",
    bio: [
      "Leading world-class guest experiences at luxury properties in the Middle East. Work operates at a level where discretion matters as much as execution."
    ],
    whatBuilding: "Elevating luxury hospitality standards across the UAE.",
    achievements: [
      "Led operations for prestigious properties",
      "Case study in progress"
    ]
  },
  {
    slug: "retail-ceo-dubai",
    name: "Redacted (Our Lawyers Insisted)",
    title: "Retail CEO & Founder",
    location: "UAE | Represented by Mini-Batman for Legal Reasons",
    photo: retailPhoto,
    fullTitle: "Founder & CEO | Luxury Retail",
    bio: [
      "Built a retail empire across the Middle East. Work operates at a level where discretion matters as much as execution."
    ],
    whatBuilding: "Expanding luxury retail experiences across emerging markets.",
    achievements: [
      "Built multi-location retail presence",
      "Case study in progress"
    ]
  }
];

const ProofOfWork = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <>
      {/* Large Card Carousel */}
      <section ref={elementRef} className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] md:text-[44px] font-bold leading-[1.2] mb-2" style={{ color: '#1A1A1A' }}>
              Who trusts us with their story and reputation
            </h2>
            {/* Red underline accent */}
            <div className="h-[2px] w-[80px] mx-auto" style={{ backgroundColor: '#FF2E63' }} />
          </div>
          
          {/* Card Carousel */}
          <div className="relative">
            <div 
              id="client-carousel"
              className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              <div className="flex gap-6 md:gap-8 items-start">
                {clients.map((client, index) => (
                  <Link
                    key={index}
                    to={`/clients/${client.slug}`}
                    className="flex-shrink-0 overflow-hidden cursor-pointer snap-start group flex flex-col"
                    style={{
                      width: '380px',
                      minWidth: '380px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      boxShadow: '0 4px 16px rgba(26,26,26,0.08)',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                      transition: `all 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.15 * index}s`,
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 6px 24px rgba(26, 26, 26, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,26,26,0.08)';
                    }}
                  >
                    {/* Image - Fixed height */}
                    <div className="relative overflow-hidden" style={{ height: '320px' }}>
                      <img
                        src={client.photo}
                        alt={client.name}
                        className="w-full h-full object-cover"
                        style={{ 
                          filter: 'grayscale(15%)',
                          objectPosition: 'center',
                          transition: 'filter 300ms cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                        onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(15%)'}
                      />
                    </div>

                    {/* Text Content - Flexible height */}
                    <div className="flex flex-col justify-start px-6 py-5" style={{ 
                      backgroundColor: '#FFFFFF',
                      flexGrow: 1
                    }}>
                      <h3 className="font-semibold mb-1" style={{ 
                        fontSize: '22px',
                        color: '#1A1A1A',
                        lineHeight: '1.3'
                      }}>
                        {client.name}
                      </h3>
                      <p className="mb-1" style={{ 
                        fontSize: '15px',
                        color: 'rgba(26, 26, 26, 0.8)',
                        lineHeight: '1.4'
                      }}>
                        {client.title}
                      </p>
                      <p style={{ 
                        fontSize: '13px',
                        color: 'rgba(26, 26, 26, 0.6)',
                        lineHeight: '1.4'
                      }}>
                        {client.location}
                      </p>
                      {client.testimonial && (
                        <p 
                          className="mt-4"
                          style={{ 
                            fontSize: '14px',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            color: 'rgba(26, 26, 26, 0.6)',
                            lineHeight: '1.6'
                          }}
                        >
                          "{client.testimonial}"
                        </p>
                      )}
                    </div>

                    {/* Coming Soon Overlay */}
                    {client.comingSoon && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          backgroundColor: 'rgba(26, 26, 26, 0.92)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: '16px',
                          zIndex: 20
                        }}
                      >
                        <div className="text-center px-6">
                          <div 
                            className="inline-block mb-3 px-5 py-2"
                            style={{
                              backgroundColor: 'rgba(255, 46, 99, 0.15)',
                              border: '1px solid rgba(255, 46, 99, 0.3)',
                              borderRadius: '8px'
                            }}
                          >
                            <p style={{
                              fontSize: '13px',
                              color: '#FF2E63',
                              letterSpacing: '2px',
                              textTransform: 'uppercase',
                              fontWeight: 700
                            }}>
                              Coming Soon
                            </p>
                          </div>
                          <p style={{
                            fontSize: '16px',
                            color: 'rgba(255, 255, 255, 0.85)',
                            lineHeight: '1.6',
                            maxWidth: '280px',
                            margin: '0 auto'
                          }}>
                            Full case study in progress
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const carousel = document.getElementById('client-carousel');
                if (carousel) carousel.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF2E63'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1A1A1A'}
            >
              ←
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('client-carousel');
                if (carousel) carousel.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF2E63'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1A1A1A'}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProofOfWork;

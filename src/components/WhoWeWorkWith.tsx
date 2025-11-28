import verticalArchitecture from "@/assets/karen-project-construction.jpg";
import verticalHospitality from "@/assets/vertical-hospitality.jpg";
import verticalAthletes from "@/assets/vertical-athletes.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const verticals = [
  {
    id: "construction",
    title: "Construction, Architecture, Design & Materials",
    image: verticalArchitecture,
    description: (
      <>
        You shape spaces that outlive you. Every material, dimension, light—decades of impact. That responsibility deserves a narrative that matches.
      </>
    )
  },
  {
    id: "hospitality",
    title: "Hospitality & Healthcare Leaders",
    image: verticalHospitality,
    description: (
      <>
        You hold space for people during <span style={{ color: '#FF2E63', fontWeight: 600 }}>vulnerable moments</span>—rest, healing, celebration. Your work shapes how people feel when most present. That deserves more than metrics.
      </>
    )
  },
  {
    id: "athletes",
    title: "Professional Athletes & Sports Executives",
    image: verticalAthletes,
    description: (
      <>
        Your career is public. Your discipline, visible. But the story behind the performance—the decisions, sacrifices, evolution—that <span style={{ color: '#FF2E63', fontWeight: 600 }}>creates legacy</span> beyond the highlight reel.
      </>
    )
  }
];

const WhoWeWorkWith = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={elementRef} className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[36px] font-display font-semibold leading-[1.2] tracking-tight-2 mb-4 max-w-[750px] mx-auto" style={{ color: '#1A1A1A' }}>
            Who We Work With
          </h2>
          {/* Red underline accent with animation */}
          <div 
            className="h-[3px] w-[60px] mx-auto"
            style={{ 
              backgroundColor: '#FF2E63',
              animation: 'scaleInX 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0.3s forwards',
              transformOrigin: 'center',
              transform: 'scaleX(0)'
            }} 
          />
        </div>

        {/* Static 3-Column Grid (No Carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {verticals.map((vertical, index) => (
            <div
              key={vertical.id}
              className="bg-white border overflow-hidden group client-card transition-all duration-300"
              style={{ 
                borderColor: 'rgba(26, 26, 26, 0.06)',
                borderRadius: '12px',
                boxShadow: '0 2px 16px rgba(26,26,26,0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,26,26,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(26,26,26,0.06)';
              }}
            >
              {/* Image Container */}
              <div className="overflow-hidden" style={{ height: '320px' }}>
                <img
                  src={vertical.image}
                  alt={vertical.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  style={{ 
                    filter: 'grayscale(15%)',
                    objectPosition: 'center',
                    transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                    transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s, filter 300ms cubic-bezier(0.4, 0, 0.2, 1)`
                  }}
                  loading="lazy"
                />
              </div>

              {/* Text Container */}
              <div className="p-10">
                <h3 className="font-display font-bold mb-4 group-hover:underline transition-all duration-300" style={{ 
                  color: '#1A1A1A',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  textDecorationColor: '#FF2E63'
                }}>
                  {vertical.title}
                </h3>
                <p className="leading-[1.7]" style={{ 
                  color: 'rgba(26, 26, 26, 0.8)',
                  fontSize: '17px'
                }}>
                  {vertical.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;

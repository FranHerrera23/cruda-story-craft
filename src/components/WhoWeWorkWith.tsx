import verticalArchitecture from "@/assets/karen-project-construction.jpg";
import verticalHospitality from "@/assets/vertical-hospitality.jpg";
import verticalAthletes from "@/assets/vertical-athletes.jpg";

const verticals = [
  {
    id: "construction",
    title: "Construction, Architecture, Design & Materials",
    image: verticalArchitecture,
    description: (
      <>
        You shape spaces that outlive you. Every decision—material, dimension, light—defines how people live for decades. That responsibility deserves a narrative that matches the <span style={{ color: '#F5B800', fontWeight: 600 }}>permanence of the work</span>.
      </>
    )
  },
  {
    id: "hospitality",
    title: "Hospitality & Healthcare Leaders",
    image: verticalHospitality,
    description: (
      <>
        You've mastered the art of holding space for people during <span style={{ color: '#F5B800', fontWeight: 600 }}>vulnerable moments</span>. Whether it's rest, healing, or celebration, your work shapes how people feel when they're most present. That deserves more than operational metrics.
      </>
    )
  },
  {
    id: "athletes",
    title: "Professional Athletes & Sports Executives",
    image: verticalAthletes,
    description: (
      <>
        Your career is public. Your discipline, visible. But the story behind the performance—the thousand decisions, the sacrifices, the evolution—that's what <span style={{ color: '#F5B800', fontWeight: 600 }}>creates legacy</span> beyond the highlight reel.
      </>
    )
  }
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[36px] font-display font-semibold leading-[1.2] tracking-tight-2 mb-4 max-w-[750px] mx-auto" style={{ color: '#3D3835' }}>
            Who We Work With
          </h2>
          {/* Yellow underline accent with animation */}
          <div 
            className="h-[3px] w-[60px] mx-auto"
            style={{ 
              backgroundColor: '#F5B800',
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
              className="bg-white border overflow-hidden group transition-all duration-[0.4s] hover:-translate-y-2"
              style={{ 
                borderColor: 'rgba(61, 56, 53, 0.08)',
                borderRadius: '12px',
                boxShadow: '0 2px 16px rgba(61,56,53,0.08)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: 0,
                animation: `fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.2 * index}s forwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,56,53,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(61,56,53,0.08)';
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
                    transform: 'scale(1.04)',
                    animation: `scaleDown 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.2 * index}s forwards`
                  }}
                  loading="lazy"
                />
              </div>

              {/* Text Container */}
              <div className="p-10">
                <h3 className="font-display font-bold mb-4 group-hover:underline transition-all duration-300" style={{ 
                  color: '#3D3835',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  textDecorationColor: '#F5B800'
                }}>
                  {vertical.title}
                </h3>
                <p className="leading-[1.7]" style={{ 
                  color: 'rgba(61, 56, 53, 0.85)',
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

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Dot Grid Icon Component (white version)
const DotGridIcon = () => (
  <div 
    style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 6px)',
      gridTemplateRows: 'repeat(3, 6px)',
      gap: '8px',
      marginTop: '12px',
      marginRight: '60px',
      flexShrink: 0
    }}
  >
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.4)'
        }}
      />
    ))}
  </div>
);

const CredibilitySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#0A0A0A',
        padding: '160px 80px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '900px' }}>
          {/* Dot Grid Icon */}
          <div
            className="hidden md:block transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <DotGridIcon />
          </div>

          {/* Text Block */}
          <div style={{ flex: 1 }}>
            {/* Header */}
            <h2
              className="transition-all duration-700"
              style={{
                fontSize: '48px',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: '1.2',
                marginBottom: '48px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              We've been on both sides.
            </h2>

            {/* Companies */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.55)',
                lineHeight: '1.7',
                marginBottom: '20px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms'
              }}
            >
              A decade inside TikTok, Mondelez, Nestlé, United Nations, DeliveryHero, Natura, Ab InBev.
            </p>

            {/* Cities */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.4)',
                marginBottom: '48px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '200ms'
              }}
            >
              Buenos Aires. Miami. Dubai. Los Angeles. Madrid.
            </p>

            {/* Closing */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '22px',
                fontWeight: '400',
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: '1.5',
                maxWidth: '550px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              That gap — between what you know and what people understand — we've lived it.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px 120px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CredibilitySection;

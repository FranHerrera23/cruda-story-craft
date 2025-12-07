import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BeforeAfterSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 60px'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Two columns */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '80px' }}
        >
          {/* Before Column */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p 
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.3)',
                marginBottom: '20px'
              }}
            >
              BEFORE
            </p>
            <p 
              style={{
                fontSize: '22px',
                fontStyle: 'italic',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.4)',
                lineHeight: '1.6'
              }}
            >
              "TRAZZO is a premier lighting design firm with over thirty years of experience, committed to excellence and innovation in architectural illumination."
            </p>
          </div>

          {/* After Column */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            <p 
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.3)',
                marginBottom: '20px'
              }}
            >
              AFTER
            </p>
            <p 
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#0A0A0A',
                lineHeight: '1.5'
              }}
            >
              "TRAZZO: Lighting partner to Robert A.M. Stern Architects. Three projects. Seven years. From Lima to Miami."
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <p 
          className="transition-all duration-700"
          style={{ 
            fontSize: '18px',
            color: 'rgba(10, 10, 10, 0.5)',
            textAlign: 'center',
            marginTop: '60px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '300ms'
          }}
        >
          The first is forgettable. The second builds trust.
        </p>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterSection;

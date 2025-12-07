import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Dot Grid Icon Component
const DotGridIcon = () => (
  <div 
    style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 6px)',
      gridTemplateRows: 'repeat(3, 6px)',
      gap: '8px',
      marginTop: '16px',
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
          backgroundColor: '#0A0A0A'
        }}
      />
    ))}
  </div>
);

const BeliefSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F7F7F7',
        padding: '180px 80px'
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
            {/* Main headline */}
            <h2
              className="transition-all duration-700"
              style={{
                fontSize: '56px',
                fontWeight: '600',
                color: '#0A0A0A',
                lineHeight: '1.1',
                marginBottom: '48px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Trust shifted.
            </h2>

            {/* First paragraph */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '26px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.6)',
                lineHeight: '1.6',
                marginBottom: '40px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms'
              }}
            >
              From institutions to people.<br />
              From logos to leaders.
            </p>

            {/* Key statement */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '26px',
                fontWeight: '500',
                color: '#0A0A0A',
                lineHeight: '1.5',
                marginBottom: '40px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '200ms'
              }}
            >
              A CEO without a voice is a business without a soul.
            </p>

            {/* Closing */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '26px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.6)',
                lineHeight: '1.5',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              The story is already there. We help you find it.
            </p>

            {/* Timeline Bar */}
            <div
              className="transition-all duration-700"
              style={{
                marginTop: '100px',
                position: 'relative',
                width: '100%',
                opacity: isVisible ? 1 : 0,
                transitionDelay: '400ms'
              }}
            >
              {/* Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'rgba(10, 10, 10, 0.4)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  BEFORE
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'rgba(10, 10, 10, 0.4)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  AFTER
                </span>
              </div>

              {/* Bar with dots */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(10, 10, 10, 0.2)',
                    flexShrink: 0
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    backgroundColor: 'rgba(10, 10, 10, 0.12)'
                  }}
                />
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(10, 10, 10, 0.2)',
                    flexShrink: 0
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
          section h2 {
            font-size: 40px !important;
          }
          section p {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BeliefSection;

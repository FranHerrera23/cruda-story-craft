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
                fontSize: '52px',
                fontWeight: '600',
                color: '#0A0A0A',
                lineHeight: '1.1',
                marginBottom: '40px',
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
                fontSize: '24px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.6)',
                lineHeight: '1.6',
                marginBottom: '32px',
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
                fontSize: '24px',
                fontWeight: '500',
                color: '#0A0A0A',
                lineHeight: '1.5',
                marginBottom: '32px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '200ms'
              }}
            >
              A CEO without a voice is a business without a soul.
            </p>

            {/* Bridge line */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '22px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.6)',
                lineHeight: '1.5',
                marginBottom: '24px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              When people trust the leader, they trust the company.
            </p>

            {/* Punk line */}
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                fontWeight: '500',
                color: '#0A0A0A',
                fontStyle: 'italic',
                lineHeight: '1.5',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '400ms'
              }}
            >
              We don't dance around truth. We carve it.
            </p>

            {/* Timeline Bar */}
            <div
              className="transition-all duration-1000"
              style={{
                marginTop: '80px',
                position: 'relative',
                width: '100%',
                height: '2px',
                backgroundColor: 'rgba(10, 10, 10, 0.15)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transitionDelay: '500ms'
              }}
            />

            {/* Before/After Grid */}
            <div
              className="transition-all duration-700"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                marginTop: '40px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '700ms'
              }}
            >
              {/* Before Column */}
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.12em',
                    color: 'rgba(10, 10, 10, 0.35)',
                    marginBottom: '16px',
                    textTransform: 'uppercase'
                  }}
                >
                  BEFORE
                </p>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: '400',
                    color: 'rgba(10, 10, 10, 0.4)',
                    fontStyle: 'italic',
                    lineHeight: '1.5'
                  }}
                >
                  Great work.<br />
                  No one knows about it.
                </p>
              </div>

              {/* After Column */}
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.12em',
                    color: 'rgba(10, 10, 10, 0.35)',
                    marginBottom: '16px',
                    textTransform: 'uppercase'
                  }}
                >
                  AFTER
                </p>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#0A0A0A',
                    lineHeight: '1.5'
                  }}
                >
                  Great work. Now people get it before you walk in the room.
                </p>
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
            font-size: 36px !important;
          }
          section p {
            font-size: 18px !important;
          }
          section > div > div > div:last-child > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BeliefSection;
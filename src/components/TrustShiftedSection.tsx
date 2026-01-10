import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TrustShiftedSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F5F1E8',
        padding: '100px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Upper content */}
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '600',
              marginBottom: '32px',
              color: '#0A0A0A',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Trust shifted.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#0A0A0A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms'
              }}
            >
              From institutions to people.
            </p>
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#0A0A0A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '150ms'
              }}
            >
              From logos to leaders.
            </p>
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#0A0A0A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '200ms'
              }}
            >
              From promises to proof.
            </p>
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#0A0A0A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '250ms'
              }}
            >
              A CEO without a voice is a business without a soul.
            </p>
            <p
              className="transition-all duration-700"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#0A0A0A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              When people trust the leader, they trust the company.
            </p>
          </div>

          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: 'rgba(10,10,10,0.7)',
              marginTop: '48px',
              marginBottom: '80px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms'
            }}
          >
            We don't dance around truth. We carve it.
          </p>
        </div>

        {/* Before/After Visual */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 transition-all duration-700"
          style={{ 
            gap: '60px',
            position: 'relative',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms'
          }}
        >
          {/* Vertical divider - desktop only */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 h-full"
            style={{ 
              width: '2px', 
              backgroundColor: '#E5E5E5',
              transform: 'translateX(-50%)'
            }} 
          />

          {/* Before Column */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FF2E63',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              BEFORE
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.7',
                color: '#0A0A0A'
              }}
            >
              Great work. No one outside your clients knows about it.
            </p>
          </div>

          {/* After Column */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FF2E63',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              AFTER
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.7',
                color: '#0A0A0A'
              }}
            >
              Great work. Now people get it before you walk in the room.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustShiftedSection;

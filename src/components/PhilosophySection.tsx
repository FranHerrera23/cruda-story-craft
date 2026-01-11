import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F5F1E8',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Main Headline */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(48px, 8vw, 100px)',
            fontWeight: '800',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          DATA DOESN'T MOVE<br />
          THE WORLD.<br />
          <br />
          <span style={{ color: '#FF2E63' }}>STORIES DO.</span>
        </h2>

        {/* Body text */}
        <div 
          style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1.8',
              color: 'rgba(10,10,10,0.7)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            We decide emotionally. Then justify logically.<br />
            Every deal. Every hire. Every partnership.
          </p>

          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1.8',
              color: 'rgba(10,10,10,0.7)',
              fontStyle: 'italic',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            Your metrics get you in the room.<br />
            Your story is why they say yes.
          </p>
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

export default PhilosophySection;

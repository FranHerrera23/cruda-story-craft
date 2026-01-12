import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#F5F1E8',
        padding: '120px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: '52px',
            fontWeight: '600',
            color: '#0A0A0A',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          The story you tell becomes the story they believe.
        </h2>

        {/* Body */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.7)',
            maxWidth: '600px',
            margin: '48px auto 0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p style={{ marginBottom: '8px' }}>Your metrics get you in the room.</p>
          <p style={{ fontStyle: 'italic' }}>Your story is why they say yes.</p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          section h2 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;

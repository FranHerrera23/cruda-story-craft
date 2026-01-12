import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="philosophy-section"
      style={{ 
        backgroundColor: '#F5F1E8',
        padding: '140px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700 philosophy-headline"
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#0A0A0A',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          The story you tell<br />
          becomes the story<br />
          they believe.
        </h2>

        {/* Accent Line */}
        <div 
          className="transition-all duration-700"
          style={{
            width: '40px',
            height: '2px',
            background: '#FF2E63',
            margin: '48px auto',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '100ms'
          }}
        />

        {/* Body */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.6)',
            maxWidth: '500px',
            margin: '0 auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms'
          }}
        >
          <p style={{ marginBottom: '8px' }}>Your metrics get you in the room.</p>
          <p style={{ fontStyle: 'italic', color: 'rgba(10, 10, 10, 0.8)' }}>Your story is why they say yes.</p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .philosophy-section {
            padding: 100px 24px !important;
          }
          .philosophy-headline {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WeveBeenOnBothSidesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '100px 80px'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        {/* Divider top */}
        <div
          className="transition-all duration-700"
          style={{
            width: '200px',
            height: '1px',
            backgroundColor: '#E5E5E5',
            margin: '0 auto 60px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
          }}
        />

        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '32px',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          We've been on both sides.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              lineHeight: '1.7',
              color: 'rgba(10,10,10,0.7)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            Inside the agency. Inside the brand. Inside the founder's head.
          </p>

          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              lineHeight: '1.7',
              color: 'rgba(10,10,10,0.7)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            We know what gets diluted in handoffs. What gets lost in translation. What never makes it out of the meeting room.
          </p>

          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              lineHeight: '1.7',
              color: 'rgba(10,10,10,0.7)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            That's why we sit in the gap — not to interpret for you, but to make your story impossible to misunderstand.
          </p>
        </div>

        {/* Divider bottom */}
        <div
          className="transition-all duration-700"
          style={{
            width: '200px',
            height: '1px',
            backgroundColor: '#E5E5E5',
            margin: '60px auto 0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transitionDelay: '400ms'
          }}
        />
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

export default WeveBeenOnBothSidesSection;

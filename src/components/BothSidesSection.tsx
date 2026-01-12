import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  "TikTok",
  "Mondelez",
  "Nestlé",
  "United Nations",
  "DeliveryHero",
  "Natura",
  "Ab InBev"
];

const BothSidesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px 80px 80px'
      }}
    >
      <div style={{ maxWidth: '700px' }}>
        {/* Headline */}
        <h2
          className="transition-all duration-700 both-headline"
          style={{
            fontSize: '44px',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          We've been on both sides.
        </h2>

        {/* Body */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            lineHeight: '1.7',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            Inside the agency. Inside the brand. Inside the founder's head.
          </p>
          <p style={{ marginBottom: '24px' }}>
            We know what gets diluted in handoffs. What gets lost in translation. What never makes it out of the meeting room.
          </p>
          <p>
            That's why we sit in the gap — not to interpret for you, but to make your story impossible to misunderstand.
          </p>
        </div>
      </div>

      {/* Logo Marquee */}
      <div 
        style={{ 
          marginTop: '80px',
          borderTop: '1px solid rgba(10, 10, 10, 0.1)',
          paddingTop: '40px',
          overflow: 'hidden'
        }}
      >
        <div 
          className="marquee-track"
          style={{ gap: '80px' }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <span
              key={`logo-1-${index}`}
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(10, 10, 10, 0.25)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {logo}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <span
              key={`logo-2-${index}`}
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(10, 10, 10, 0.25)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .both-headline {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BothSidesSection;

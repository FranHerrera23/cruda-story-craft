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
      className="both-sides-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px 80px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header Block - Side by Side */}
        <div
          className="both-sides-header transition-all duration-700"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(10, 10, 10, 0.08)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          {/* Headline */}
          <h2
            className="both-headline"
            style={{
              fontSize: '44px',
              fontWeight: '600',
              lineHeight: '1.1',
              color: '#0A0A0A',
              maxWidth: '400px'
            }}
          >
            We've been on both sides.
          </h2>

          {/* Tagline - Right aligned */}
          <div
            className="both-tagline"
            style={{
              fontSize: '18px',
              fontStyle: 'italic',
              lineHeight: '1.5',
              color: 'rgba(10, 10, 10, 0.5)',
              textAlign: 'right'
            }}
          >
            <p>Inside the agency.</p>
            <p>Inside the brand.</p>
            <p>Inside the founder's head.</p>
          </div>
        </div>

        {/* Body Copy */}
        <div
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            lineHeight: '1.7',
            maxWidth: '700px',
            marginBottom: '80px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            We know what gets diluted in handoffs. What gets lost in translation. What never makes it out of the meeting room.
          </p>
          <p>
            That's why we sit in the gap — not to interpret for you, but to make your story impossible to misunderstand.
          </p>
        </div>

        {/* Logo Marquee */}
        <div 
          className="logo-marquee-container"
          style={{ 
            borderTop: '1px solid rgba(10, 10, 10, 0.08)',
            paddingTop: '32px',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div 
            className="marquee-track"
            style={{ 
              display: 'flex',
              gap: '60px',
              animation: 'marquee 30s linear infinite'
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <span
                key={`logo-1-${index}`}
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.2)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {logo}
                <span style={{ marginLeft: '60px', color: 'rgba(10, 10, 10, 0.15)' }}>·</span>
              </span>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <span
                key={`logo-2-${index}`}
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.2)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {logo}
                <span style={{ marginLeft: '60px', color: 'rgba(10, 10, 10, 0.15)' }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @media (max-width: 768px) {
          .both-sides-section {
            padding: 80px 24px !important;
          }
          .both-sides-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
          }
          .both-headline {
            font-size: 32px !important;
          }
          .both-tagline {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BothSidesSection;

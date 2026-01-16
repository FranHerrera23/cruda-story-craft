'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BothSidesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  const logos = [
    "TIKTOK", "MONDELEZ", "NESTLÉ", "UNITED NATIONS", "DELIVERYHERO",
    "AMAZON", "TWITCH", "ELECTRONIC ARTS", "FACEBOOK", "OCULUS",
    "LUCASARTS", "MARVEL", "UNIVERSAL", "HASBRO", "GSK"
  ];

  return (
    <section 
      ref={elementRef}
      className="both-sides-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header - 50/50 Grid */}
        <div 
          className="both-sides-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'end',
            marginBottom: '64px',
            paddingBottom: '64px',
            borderBottom: '1px solid rgba(10, 10, 10, 0.08)'
          }}
        >
          {/* Headline - 48px */}
          <h2 
            className="transition-all duration-700 both-sides-headline"
            style={{
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            We've been on<br />both sides.
          </h2>

          {/* Tagline - 20px italic */}
          <div 
            className="transition-all duration-700 both-sides-tagline"
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              lineHeight: '1.5',
              color: 'rgba(10, 10, 10, 0.5)',
              textAlign: 'right',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
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
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.7)',
            maxWidth: '800px',
            marginBottom: '80px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            Over a decade inside TikTok, Nestlé, Amazon, GSK, the United Nations, and a dozen startups. We know what gets diluted in handoffs. What gets lost in translation. What never makes it out of the meeting room.
          </p>
          <p>
            That's why we sit in the gap — not to interpret for you, but to make your story impossible to misunderstand.
          </p>
        </div>

        {/* Logo Marquee */}
        <div 
          className="transition-all duration-700"
          style={{
            paddingTop: '40px',
            borderTop: '1px solid rgba(10, 10, 10, 0.08)',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '300ms'
          }}
        >
          <div 
            className="logo-marquee-track"
            style={{
              display: 'flex',
              gap: '48px',
              animation: 'marquee 35s linear infinite'
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <span 
                key={index}
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.2)',
                  whiteSpace: 'nowrap'
                }}
              >
                {logo}
                <span style={{ marginLeft: '48px', color: 'rgba(10, 10, 10, 0.15)' }}>·</span>
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
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .both-sides-headline {
            font-size: 36px !important;
          }
          .both-sides-tagline {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BothSidesSection;

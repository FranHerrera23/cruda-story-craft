import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const changes = [
  "You walk into a room and they already know who you are",
  "Your socials sound like you, not a press release",
  "Your team explains what makes you different — without fumbling",
  "Clients, partners — they get it before you say a word",
  "You stop competing on price and start competing on trust"
];

const WhatChangesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 80px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          What changes
        </p>

        {/* List container */}
        <div style={{ maxWidth: '800px' }}>
          {/* Initial divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(10, 10, 10, 0.1)',
              marginTop: '24px'
            }}
          />

          {/* List */}
          {changes.map((change, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '36px 0',
                borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              {/* Arrow */}
              <span 
                style={{ 
                  fontSize: '22px',
                  color: '#FF2E63', 
                  marginRight: '24px',
                  flexShrink: 0,
                  lineHeight: '1.4'
                }}
              >
                →
              </span>
              
              {/* Text */}
              <p
                style={{
                  fontSize: '22px',
                  fontWeight: '400',
                  color: '#0A0A0A',
                  lineHeight: '1.4'
                }}
              >
                {change}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
          section p {
            font-size: 18px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatChangesSection;

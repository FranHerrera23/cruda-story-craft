import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";

const changes = [
  "You walk into a room and they already know who you are",
  "Your socials sound like you, not a press release",
  "Your team explains what makes you different — without fumbling",
  "Clients, partners — they get it before you say a word",
  "You stop competing on price and start competing on trust"
];

const WhatChangesSection = () => {
  const { containerRef, isVisible, visibleItems } = useStaggerAnimation<HTMLElement>(changes.length, 100);

  return (
    <section 
      ref={containerRef} 
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
            className="transition-all duration-500"
            style={{
              height: '1px',
              backgroundColor: 'rgba(10, 10, 10, 0.1)',
              marginTop: '24px',
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left'
            }}
          />

          {/* List with staggered animation */}
          {changes.map((change, index) => (
            <div
              key={index}
              className="stagger-item hover-glow"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '32px 0',
                borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index] ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default'
              }}
            >
              {/* Arrow with hover animation */}
              <span 
                className="transition-transform duration-300"
                style={{ 
                  fontSize: '20px',
                  color: '#FF2E63', 
                  marginRight: '20px',
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

          {/* Closer line */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#0A0A0A',
              textAlign: 'center',
              marginTop: '60px',
              fontStyle: 'italic',
              opacity: visibleItems[changes.length - 1] ? 1 : 0,
              transform: visibleItems[changes.length - 1] ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '500ms'
            }}
          >
            Your story finally works as hard as you do.
          </p>
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
        
        .stagger-item:hover span {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default WhatChangesSection;
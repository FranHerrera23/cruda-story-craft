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

const LogoMarquee = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef}
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        overflow: 'hidden'
      }}
    >
      {/* Marquee Container */}
      <div 
        className="relative w-full transition-opacity duration-700"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transitionDelay: '200ms'
        }}
      >
        {/* Marquee Track */}
        <div 
          className="flex animate-marquee"
          style={{ 
            width: 'fit-content',
            gap: '80px'
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <span
              key={`logo-1-${index}`}
              style={{
                fontSize: '22px',
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
                fontSize: '22px',
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

      {/* Timeline */}
      <div 
        className="transition-opacity duration-700"
        style={{ 
          marginTop: '48px',
          maxWidth: '1000px',
          margin: '48px auto 0',
          padding: '0 80px',
          opacity: isVisible ? 1 : 0,
          transitionDelay: '400ms'
        }}
      >
        {/* Bar with dots */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'rgba(10, 10, 10, 0.25)',
              flexShrink: 0
            }}
          />
          <div
            style={{
              flex: 1,
              height: '1px',
              backgroundColor: 'rgba(10, 10, 10, 0.15)'
            }}
          />
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'rgba(10, 10, 10, 0.25)',
              flexShrink: 0
            }}
          />
        </div>

        {/* Labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: 'rgba(10, 10, 10, 0.4)'
            }}
          >
            2017
          </span>
          <span
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: 'rgba(10, 10, 10, 0.4)'
            }}
          >
            2025
          </span>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @media (max-width: 768px) {
          section > div:last-child {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  "TikTok",
  "Mondelez",
  "Nestlé",
  "DeliveryHero",
  "DirecTV",
  "Natura",
  "Ab InBev",
  "United Nations"
];

const LogoMarquee = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef}
      className="py-20 overflow-hidden w-full"
      style={{ backgroundColor: '#FFFFFF' }}
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
          className="flex gap-20 animate-marquee"
          style={{ width: 'fit-content' }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <span
              key={`logo-1-${index}`}
              className="flex-shrink-0 text-[20px] md:text-[24px] font-semibold whitespace-nowrap"
              style={{
                color: '#1A1A1A',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                letterSpacing: '0.02em'
              }}
            >
              {logo}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <span
              key={`logo-2-${index}`}
              className="flex-shrink-0 text-[20px] md:text-[24px] font-semibold whitespace-nowrap"
              style={{
                color: '#1A1A1A',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                letterSpacing: '0.02em'
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div 
        className="mt-12 max-w-[1200px] mx-auto px-6 md:px-16 flex items-center gap-4 transition-opacity duration-700"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transitionDelay: '400ms'
        }}
      >
        {/* Left Label */}
        <span 
          className="text-[13px]"
          style={{ color: 'rgba(26, 26, 26, 0.4)' }}
        >
          2004
        </span>

        {/* Left Dot */}
        <div 
          className="w-[6px] h-[6px] rounded-full flex-shrink-0"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
        />

        {/* Line */}
        <div 
          className="flex-1 h-[1px]"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.15)' }}
        />

        {/* Right Dot */}
        <div 
          className="w-[6px] h-[6px] rounded-full flex-shrink-0"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
        />

        {/* Right Label */}
        <span 
          className="text-[13px]"
          style={{ color: 'rgba(26, 26, 26, 0.4)' }}
        >
          Now
        </span>
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
      `}</style>
    </section>
  );
};

export default LogoMarquee;

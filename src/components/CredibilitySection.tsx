import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CredibilitySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef}
      className="py-[80px] md:py-[120px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[36px] font-semibold leading-[1.2] mb-12 transition-all duration-700"
          style={{ 
            color: '#FFFFFF',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
          }}
        >
          A decade of translation
        </h2>
        
        {/* Companies - Row 1 */}
        <p
          className="text-[18px] mb-3 transition-all duration-700"
          style={{ 
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: '0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '100ms'
          }}
        >
          TikTok · Mondelez · Nestlé · United Nations
        </p>

        {/* Companies - Row 2 */}
        <p
          className="text-[18px] mb-6 transition-all duration-700"
          style={{ 
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: '0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '150ms'
          }}
        >
          DeliveryHero · DirecTV · Natura · Ab InBev
        </p>

        {/* Cities */}
        <p
          className="text-[16px] mb-12 transition-all duration-700"
          style={{ 
            color: 'rgba(255, 255, 255, 0.4)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '200ms'
          }}
        >
          Buenos Aires · Miami · Dubai · Los Angeles · Madrid
        </p>

        {/* Closing Line */}
        <p
          className="text-[20px] md:text-[22px] italic leading-[1.6] transition-all duration-700"
          style={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '300ms'
          }}
        >
          That gap—between what you know and what people understand—we've lived it.
        </p>
      </div>
    </section>
  );
};

export default CredibilitySection;

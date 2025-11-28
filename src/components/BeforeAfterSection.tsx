import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BeforeAfterSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-20 md:py-[100px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px]">
          {/* Before Column */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p 
              className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4"
              style={{ color: 'rgba(26, 26, 26, 0.4)' }}
            >
              BEFORE
            </p>
            <p 
              className="text-[20px] leading-[1.6] italic"
              style={{ color: 'rgba(26, 26, 26, 0.6)' }}
            >
              "TRAZZO is a premier lighting design firm with over thirty years of experience, committed to excellence and innovation in architectural illumination."
            </p>
          </div>

          {/* After Column */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            <p 
              className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4"
              style={{ color: 'rgba(26, 26, 26, 0.4)' }}
            >
              AFTER
            </p>
            <p 
              className="text-[20px] leading-[1.6] font-medium"
              style={{ color: '#1A1A1A' }}
            >
              "TRAZZO: Lighting partner to Robert A.M. Stern Architects. Three projects. Seven years. From Lima to Miami."
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <p 
          className="text-[16px] text-center mt-12 transition-all duration-700"
          style={{ 
            color: 'rgba(26, 26, 26, 0.5)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '300ms'
          }}
        >
          The first is forgettable. The second opens doors.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

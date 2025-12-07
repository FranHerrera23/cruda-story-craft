import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-[100px] md:py-[140px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Headline */}
        <h2
          className="text-[32px] md:text-[42px] font-semibold leading-[1.3] mb-8 transition-all duration-700"
          style={{
            color: '#1A1A1A',
            maxWidth: '800px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          You can talk about your work for hours. But when someone asks "what do you do?" — something gets lost.
        </h2>

        {/* Body */}
        <div
          className="transition-all duration-700"
          style={{
            maxWidth: '600px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms'
          }}
        >
          <p
            className="text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.7)' }}
          >
            The depth flattens. The nuance disappears. You end up sounding like everyone else.
          </p>
          <p
            className="text-[20px] leading-[1.7] font-semibold"
            style={{ color: '#1A1A1A' }}
          >
            We fix that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

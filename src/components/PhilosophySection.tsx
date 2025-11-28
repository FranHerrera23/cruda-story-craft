import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-20 md:py-28 px-6 md:px-16" 
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <p
          className="text-[20px] md:text-[24px] leading-[1.8] transition-all duration-700"
          style={{
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          You've spent years building expertise. The work is real. But when you try to explain it to people who've never met you, something gets lost. We find the pattern that makes your work <span style={{ color: '#FF2E63', fontWeight: 600 }}>yours</span> — and turn it into a narrative that travels.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

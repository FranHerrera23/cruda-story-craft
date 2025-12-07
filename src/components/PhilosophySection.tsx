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
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p
            className="text-[20px] md:text-[24px] leading-[1.8] mb-8"
            style={{ color: '#1A1A1A' }}
          >
            You know what you do. You can talk about it for hours.
          </p>
          
          <p
            className="text-[20px] md:text-[24px] leading-[1.8] mb-8"
            style={{ color: '#1A1A1A' }}
          >
            But when someone asks 'what do you do?' at a conference, in a pitch, in an email—something gets lost. The depth flattens. The nuance disappears.
          </p>
          
          <p
            className="text-[20px] md:text-[24px] leading-[1.8]"
            style={{ color: '#1A1A1A' }}
          >
            We find the pattern underneath your work. The philosophy that makes it yours. And we document it in a way that travels—without you in the room.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const beforeItems = [
  "Your LinkedIn has your role, but not your voice",
  "Every pitch starts from scratch",
  "You're the only one who can explain the work",
  "Proposals take days to write"
];

const afterItems = [
  "Your philosophy is clear in every post",
  "One story. Used everywhere.",
  "It travels without you in the room",
  "The language is already there"
];

const BenefitsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-24 md:py-32 px-6 md:px-16" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Section Header */}
        <h2
          className="text-[32px] md:text-[40px] font-semibold mb-12 md:mb-16 transition-all duration-700 text-center"
          style={{
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          What changes
        </h2>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Before Column */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            <p
              className="text-[12px] font-semibold uppercase mb-6"
              style={{
                letterSpacing: '0.1em',
                color: 'rgba(26, 26, 26, 0.4)'
              }}
            >
              BEFORE
            </p>
            <div className="flex flex-col gap-6">
              {beforeItems.map((item, index) => (
                <p
                  key={index}
                  className="text-[18px] leading-[1.5]"
                  style={{ color: 'rgba(26, 26, 26, 0.7)' }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <p
              className="text-[12px] font-semibold uppercase mb-6"
              style={{
                letterSpacing: '0.1em',
                color: 'rgba(26, 26, 26, 0.4)'
              }}
            >
              AFTER
            </p>
            <div className="flex flex-col gap-6">
              {afterItems.map((item, index) => (
                <p
                  key={index}
                  className="text-[18px] leading-[1.5] font-medium"
                  style={{ color: '#1A1A1A' }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

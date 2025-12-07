import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "We talk.",
    description: "About how you think. What you've built. What you'd never compromise on."
  },
  {
    number: "02",
    title: "We find the pattern.",
    description: "The philosophy underneath your work. The thing that makes it yours."
  },
  {
    number: "03",
    title: "We put it to work.",
    description: "LinkedIn, pitch decks, proposals, talks. Content you can actually use."
  }
];

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-[100px] md:py-[140px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <h2
          className="text-[32px] md:text-[36px] font-semibold mb-16 transition-all duration-700"
          style={{
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </h2>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <p
                className="text-[64px] font-bold mb-4"
                style={{ color: 'rgba(26, 26, 26, 0.1)' }}
              >
                {step.number}
              </p>
              <h3
                className="text-[24px] font-semibold mb-3"
                style={{ color: '#1A1A1A' }}
              >
                {step.title}
              </h3>
              <p
                className="text-[17px] leading-[1.6]"
                style={{ color: 'rgba(26, 26, 26, 0.6)' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Bar */}
        <div
          className="mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: '400ms'
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[14px] font-medium" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>Month 1</p>
              <p className="text-[14px]" style={{ color: 'rgba(26, 26, 26, 0.4)' }}>Discovery</p>
            </div>
            <div className="text-right">
              <p className="text-[14px] font-medium" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>Month 4</p>
              <p className="text-[14px]" style={{ color: 'rgba(26, 26, 26, 0.4)' }}>Deployment</p>
            </div>
          </div>
          <div 
            className="h-[2px] w-full"
            style={{ backgroundColor: 'rgba(26, 26, 26, 0.15)' }}
          />
        </div>

        {/* What We Need From You */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms'
          }}
        >
          <p
            className="text-[12px] font-semibold uppercase mb-4"
            style={{
              letterSpacing: '0.1em',
              color: 'rgba(26, 26, 26, 0.4)'
            }}
          >
            What we need from you
          </p>
          <p
            className="text-[20px]"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            One hour a week. Feedback over WhatsApp. And guts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

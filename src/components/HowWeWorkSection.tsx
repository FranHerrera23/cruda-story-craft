import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      className="py-24 md:py-[100px] px-6 md:px-16" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[700px] mx-auto text-center">
        {/* Header */}
        <h2
          className="text-[32px] md:text-[40px] font-semibold mb-10 transition-all duration-700"
          style={{
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </h2>

        {/* Main Content */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            We talk. A lot.
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            About how you think. What you've built. What you believe. What you'd never compromise on.
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            We find the pattern—the philosophy underneath the work.
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            We document it in a way you can actually use: LinkedIn, pitch decks, proposals, conference talks, website copy.
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7]"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            Then it travels. Without you in the room.
          </p>
        </div>

        {/* What We Need Section */}
        <div
          className="mt-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '250ms'
          }}
        >
          <p
            className="text-[14px] font-semibold uppercase mb-6"
            style={{
              letterSpacing: '0.05em',
              color: 'rgba(26, 26, 26, 0.5)'
            }}
          >
            What we need from you
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            One hour a week. Feedback over WhatsApp. And guts.
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            That's it.
          </p>
          
          <p
            className="text-[18px] md:text-[20px] leading-[1.7]"
            style={{ color: 'rgba(26, 26, 26, 0.8)' }}
          >
            You're busy. We know. We work with founders in Miami, Abu Dhabi, Los Angeles, Madrid—people on planes every week. We're built for this.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

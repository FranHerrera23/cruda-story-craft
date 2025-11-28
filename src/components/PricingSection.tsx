import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={elementRef} className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <h2 
          className="text-[44px] md:text-[44px] font-bold text-center mb-20 transition-all duration-700" 
          style={{ 
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          How We Work Together
        </h2>
        
        {/* Opening Statement - Hero Paragraph */}
        <p 
          className="text-[20px] md:text-[24px] text-center mb-24 max-w-[800px] mx-auto" 
          style={{ 
            color: '#1A1A1A',
            lineHeight: '1.8'
          }}
        >
          We work with <span style={{ color: '#FF2E63', fontWeight: 700 }}>one new client per month</span> because the work we do—finding the story beneath the expertise, shaping it into something people feel—can't be rushed.
        </p>

        {/* Philosophy Statement */}
        <p 
          className="text-[22px] md:text-[28px] text-center mb-32 max-w-[900px] mx-auto" 
          style={{ 
            color: '#1A1A1A',
            lineHeight: '1.6'
          }}
        >
          It requires <span style={{ color: '#FF2E63', fontWeight: 700 }}>presence, not productivity. Focus, not volume.</span>
        </p>

        {/* Simplified Pricing Card - Teaser */}
        <div 
          className="max-w-[480px] mx-auto mb-24 py-12 px-10 transition-all duration-700 text-center"
          style={{
            backgroundColor: '#FAFAFA',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(26, 26, 26, 0.04)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transitionDelay: '200ms'
          }}
        >
          {/* Label */}
          <p 
            className="text-[11px] font-medium uppercase mb-4"
            style={{ 
              letterSpacing: '2.5px',
              color: 'rgba(26, 26, 26, 0.4)' 
            }}
          >
            INVESTMENT
          </p>
          
          {/* Main Price */}
          <h3 
            className="text-[48px] font-bold mb-3"
            style={{ 
              color: '#1A1A1A',
              letterSpacing: '-0.02em'
            }}
          >
            $7,200
          </h3>
          
          {/* Context Line */}
          <p 
            className="text-[15px] mb-7"
            style={{ color: 'rgba(26, 26, 26, 0.6)' }}
          >
            4 months · Founder-led · Narrative system
          </p>
          
          {/* Link to Pricing Page */}
          <Link
            to="/pricing"
            className="inline-block text-[15px] font-medium transition-all duration-300 hover:underline"
            style={{ color: '#FF2E63' }}
          >
            See what's included →
          </Link>
        </div>

        {/* Availability Badge & CTA */}
        <div className="text-center mt-24">
          {/* December Badge */}
          <div 
            className="inline-block px-8 py-3 rounded-full mb-8"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              fontSize: '12px',
              letterSpacing: '1.5px',
              fontWeight: 600
            }}
          >
            DECEMBER
          </div>
          
          {/* Heading */}
          <h3 
            className="text-[28px] md:text-[36px] font-bold mb-6"
            style={{ color: '#1A1A1A' }}
          >
            December Waitlist Open
          </h3>
          
          {/* Body Copy */}
          <p 
            className="text-[18px] mb-10 max-w-[700px] mx-auto"
            style={{ 
              color: 'rgba(26, 26, 26, 0.8)',
              lineHeight: '1.8'
            }}
          >
            December has one spot open. If you've read this far and it resonates, that's worth a conversation. Reach out. We'll talk, and if it feels right, we'll move forward together.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/book-call"
            className="inline-block px-12 py-5 rounded-lg font-semibold text-[18px] mb-6 transition-all duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF'
            }}
          >
            Start a Conversation
          </Link>
          
          {/* Fine Print */}
          <p 
            className="text-[15px]"
            style={{ color: 'rgba(26, 26, 26, 0.6)' }}
          >
            Can't start in December? We'll hold your spot for early 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
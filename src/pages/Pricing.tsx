import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: howRef, isVisible: howVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: investRef, isVisible: investVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: needRef, isVisible: needVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: includesRef, isVisible: includesVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: compareRef, isVisible: compareVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const comparisonData = [
    {
      label: "Investment",
      cruda: "$7,200",
      agency: "$15,000–$50,000+",
      freelancer: "$2,000–$5,000"
    },
    {
      label: "Timeline",
      cruda: "4 months",
      agency: "6–12 months",
      freelancer: "Per project"
    },
    {
      label: "Who you work with",
      cruda: "Founder",
      agency: "Account managers",
      freelancer: "Solo practitioner"
    },
    {
      label: "What you get",
      cruda: "Your philosophy, deployed",
      agency: "Campaign assets",
      freelancer: "Content pieces"
    }
  ];

  const leftDeliverables = [
    "Discovery conversations—we learn how you think",
    "Your philosophy, documented",
    "Messaging you can use everywhere",
    "4 strategy calls per month"
  ];

  const rightDeliverables = [
    "A 12-month content roadmap",
    "LinkedIn and social content framework",
    "PR targets and pitch templates",
    "Unlimited WhatsApp access"
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero */}
      <section 
        ref={heroRef}
        className="pt-[120px] pb-[80px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div className="max-w-[600px] mx-auto text-center">
          <h1 
            className="text-[36px] md:text-[48px] font-semibold mb-4 transition-all duration-700"
            style={{ 
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            How we work together
          </h1>
          
          <p 
            className="text-[20px] max-w-[500px] mx-auto transition-all duration-700"
            style={{ 
              color: 'rgba(26, 26, 26, 0.6)',
              lineHeight: '1.6',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            One engagement. Four months. Your philosophy, documented and put to work.
          </p>
        </div>
      </section>

      {/* SECTION 2: How It Works */}
      <section 
        ref={howRef}
        className="py-[100px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div 
          className="max-w-[700px] mx-auto text-center transition-all duration-700"
          style={{
            opacity: howVisible ? 1 : 0,
            transform: howVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p 
            className="text-[18px] md:text-[22px]"
            style={{ 
              color: 'rgba(26, 26, 26, 0.8)',
              lineHeight: '1.7'
            }}
          >
            We talk. A lot.
            <br /><br />
            About how you think. What you've built. What you believe. What you'd never compromise on.
            <br /><br />
            We find the pattern—the philosophy underneath the work.
            <br /><br />
            We document it in a way you can actually use: LinkedIn, pitch decks, proposals, conference talks, website copy.
            <br /><br />
            Then it travels. Without you in the room.
          </p>
        </div>
      </section>

      {/* SECTION 3: Investment */}
      <section 
        ref={investRef}
        className="py-[80px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div 
          className="max-w-[600px] mx-auto text-center transition-all duration-700"
          style={{
            opacity: investVisible ? 1 : 0,
            transform: investVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p 
            className="text-[14px] font-semibold uppercase mb-4"
            style={{ 
              letterSpacing: '0.1em',
              color: 'rgba(26, 26, 26, 0.4)'
            }}
          >
            Investment
          </p>
          
          <h2 
            className="text-[56px] md:text-[72px] font-bold"
            style={{ 
              color: '#1A1A1A',
              letterSpacing: '-0.02em'
            }}
          >
            $7,200
          </h2>
          
          <p 
            className="text-[18px] mt-3"
            style={{ color: 'rgba(26, 26, 26, 0.6)' }}
          >
            Four months. Founder-led. Everything included.
          </p>
          
          <p 
            className="text-[15px] mt-6"
            style={{ color: 'rgba(26, 26, 26, 0.4)' }}
          >
            $1,800/month if that's easier.
          </p>
        </div>
      </section>

      {/* SECTION 4: What We Need From You */}
      <section 
        ref={needRef}
        className="py-[100px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div 
          className="max-w-[600px] mx-auto text-center transition-all duration-700"
          style={{
            opacity: needVisible ? 1 : 0,
            transform: needVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h3 
            className="text-[28px] md:text-[32px] font-semibold mb-8"
            style={{ 
              color: '#1A1A1A',
              letterSpacing: '-0.01em'
            }}
          >
            What we need from you
          </h3>
          
          <p 
            className="text-[20px]"
            style={{ 
              color: 'rgba(26, 26, 26, 0.8)',
              lineHeight: '1.7'
            }}
          >
            One hour a week. Feedback over WhatsApp. And guts.
            <br /><br />
            That's it.
            <br /><br />
            You're busy. We know. We work with founders in Miami, Abu Dhabi, Los Angeles, Madrid—people on planes every week. We're built for this.
          </p>
        </div>
      </section>

      {/* SECTION 5: What's Included */}
      <section 
        ref={includesRef}
        className="py-[100px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h3 
            className="text-[32px] font-semibold text-center mb-[60px] transition-all duration-700"
            style={{ 
              color: '#1A1A1A',
              opacity: includesVisible ? 1 : 0,
              transform: includesVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What's included
          </h3>

          <div 
            className="grid md:grid-cols-2 gap-y-6 gap-x-16 transition-all duration-700"
            style={{
              opacity: includesVisible ? 1 : 0,
              transform: includesVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {leftDeliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span 
                    className="text-[18px] font-medium flex-shrink-0"
                    style={{ color: '#FF2E63' }}
                  >
                    →
                  </span>
                  <span 
                    className="text-[18px]"
                    style={{ 
                      color: 'rgba(26, 26, 26, 0.8)',
                      lineHeight: '1.6'
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {rightDeliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span 
                    className="text-[18px] font-medium flex-shrink-0"
                    style={{ color: '#FF2E63' }}
                  >
                    →
                  </span>
                  <span 
                    className="text-[18px]"
                    style={{ 
                      color: 'rgba(26, 26, 26, 0.8)',
                      lineHeight: '1.6'
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: How We Compare */}
      <section 
        ref={compareRef}
        className="py-[100px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div className="max-w-[900px] mx-auto">
          <h3 
            className="text-[28px] font-semibold text-center mb-3 transition-all duration-700"
            style={{ 
              color: '#1A1A1A',
              opacity: compareVisible ? 1 : 0,
              transform: compareVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            How we compare
          </h3>
          
          <p 
            className="text-[18px] text-center mb-[60px] transition-all duration-700"
            style={{ 
              color: 'rgba(26, 26, 26, 0.5)',
              opacity: compareVisible ? 1 : 0,
              transitionDelay: '100ms'
            }}
          >
            The depth of an agency. The speed of a freelancer. The focus of a founder.
          </p>

          {/* Table */}
          <div 
            className="overflow-x-auto transition-all duration-700"
            style={{
              opacity: compareVisible ? 1 : 0,
              transform: compareVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <table className="w-full min-w-[600px]" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th className="p-4 text-left" style={{ width: '25%' }}></th>
                  <th 
                    className="p-4 text-center"
                    style={{ 
                      width: '25%',
                      borderTop: '3px solid #FF2E63',
                      backgroundColor: 'rgba(255, 46, 99, 0.03)'
                    }}
                  >
                    <span 
                      className="text-[12px] font-bold uppercase"
                      style={{ 
                        letterSpacing: '0.12em',
                        color: '#FF2E63'
                      }}
                    >
                      CRUDA
                    </span>
                  </th>
                  <th className="p-4 text-center" style={{ width: '25%' }}>
                    <span 
                      className="text-[12px] font-semibold uppercase"
                      style={{ 
                        letterSpacing: '0.1em',
                        color: 'rgba(26, 26, 26, 0.4)'
                      }}
                    >
                      Agency
                    </span>
                  </th>
                  <th className="p-4 text-center" style={{ width: '25%' }}>
                    <span 
                      className="text-[12px] font-semibold uppercase"
                      style={{ 
                        letterSpacing: '0.1em',
                        color: 'rgba(26, 26, 26, 0.4)'
                      }}
                    >
                      Freelancer
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index}
                    style={{ 
                      borderTop: '1px solid rgba(26, 26, 26, 0.08)'
                    }}
                  >
                    <td 
                      className="p-4 text-[15px] font-medium"
                      style={{ color: 'rgba(26, 26, 26, 0.6)' }}
                    >
                      {row.label}
                    </td>
                    <td 
                      className="p-4 text-center text-[15px] font-medium"
                      style={{ 
                        color: '#1A1A1A',
                        backgroundColor: 'rgba(255, 46, 99, 0.03)'
                      }}
                    >
                      {row.cruda}
                    </td>
                    <td 
                      className="p-4 text-center text-[15px]"
                      style={{ color: 'rgba(26, 26, 26, 0.5)' }}
                    >
                      {row.agency}
                    </td>
                    <td 
                      className="p-4 text-center text-[15px]"
                      style={{ color: 'rgba(26, 26, 26, 0.5)' }}
                    >
                      {row.freelancer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section 
        ref={ctaRef}
        className="py-[120px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[500px] mx-auto text-center">
          <h3 
            className="text-[36px] font-semibold mb-4 transition-all duration-700"
            style={{ 
              color: '#1A1A1A',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Ready when you are.
          </h3>

          <p 
            className="text-[20px] mb-10 transition-all duration-700"
            style={{ 
              color: 'rgba(26, 26, 26, 0.6)',
              lineHeight: '1.6',
              opacity: ctaVisible ? 1 : 0,
              transitionDelay: '100ms'
            }}
          >
            No pitch. No pressure. Just a conversation.
            <br />
            We take one new client per month.
          </p>

          <Link
            to="/book-call"
            className="inline-block px-10 py-[18px] text-[16px] font-semibold rounded-[10px] transition-all duration-300"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E62958';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 46, 99, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a Conversation
          </Link>

          <p 
            className="text-[14px] mt-5 transition-all duration-700"
            style={{ 
              color: 'rgba(26, 26, 26, 0.4)',
              opacity: ctaVisible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            January has one spot open.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
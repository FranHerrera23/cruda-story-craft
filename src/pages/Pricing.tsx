import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: tableRef, isVisible: tableVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: includesRef, isVisible: includesVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const comparisonData = [
    {
      label: "Investment",
      cruda: { value: "$7,200", highlight: true },
      agency: "$15,000 – $50,000+",
      freelancer: "$2,000 – $5,000"
    },
    {
      label: "Timeline",
      cruda: { value: "4 months embedded", highlight: false },
      agency: "6 – 12 months",
      freelancer: "Per project"
    },
    {
      label: "Who You Work With",
      cruda: { value: "Founder-led", highlight: false },
      agency: "Account managers",
      freelancer: "Solo practitioner"
    },
    {
      label: "Outcome",
      cruda: { value: "Your philosophy, deployed", highlight: false },
      agency: "Campaign assets",
      freelancer: "Content pieces"
    }
  ];

  const leftDeliverables = [
    "Discovery conversations — we learn how you think",
    "Your philosophy, documented",
    "Messaging you can use everywhere",
    "4 monthly strategy calls (1 hour each)"
  ];

  const rightDeliverables = [
    "A 12-month content roadmap",
    "LinkedIn and social content framework",
    "PR targets and pitch templates",
    "Unlimited WhatsApp access throughout"
  ];

  return (
    <main 
      className="min-h-screen"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      {/* Hero Section */}
      <div 
        ref={headerRef}
        className="pt-[120px] md:pt-[140px] pb-[100px] px-6 md:px-[60px]"
      >
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Page Title */}
          <h1 
            className="text-[40px] md:text-[52px] font-semibold mb-4 transition-all duration-700"
            style={{ 
              color: '#3D3835',
              letterSpacing: '-0.02em',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Pricing
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-[18px] md:text-[20px] mb-[80px] max-w-[500px] mx-auto transition-all duration-700"
            style={{ 
              color: 'rgba(61, 56, 53, 0.65)',
              lineHeight: '1.6',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            One engagement. Four months.<br />
            Your philosophy, documented and deployed.
          </p>

          {/* Phase Label */}
          <p 
            className="text-[11px] font-medium uppercase mb-5 transition-all duration-700"
            style={{ 
              letterSpacing: '2.5px',
              color: 'rgba(61, 56, 53, 0.45)',
              opacity: headerVisible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            FOUNDATIONAL PHASE
          </p>

          {/* Main Price */}
          <h2 
            className="text-[48px] md:text-[64px] font-bold transition-all duration-700"
            style={{ 
              color: '#3D3835',
              letterSpacing: '-0.03em',
              lineHeight: '1.1',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            $1,800 monthly
          </h2>

          {/* Price Context */}
          <p 
            className="text-[17px] mt-3 transition-all duration-700"
            style={{ 
              color: 'rgba(61, 56, 53, 0.6)',
              opacity: headerVisible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            $7,200 total (4-month minimum commitment)
          </p>
        </div>
      </div>

      {/* Comparison Section */}
      <div 
        ref={tableRef}
        className="pb-[80px] px-6 md:px-[60px]"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section Label */}
          <p 
            className="text-[11px] font-medium uppercase text-center mb-3 transition-all duration-700"
            style={{ 
              letterSpacing: '2.5px',
              color: 'rgba(61, 56, 53, 0.45)',
              opacity: tableVisible ? 1 : 0
            }}
          >
            HOW WE COMPARE
          </p>
          
          {/* Helper Text */}
          <p 
            className="text-[17px] text-center max-w-[450px] mx-auto mb-12 transition-all duration-700"
            style={{ 
              color: 'rgba(61, 56, 53, 0.55)',
              lineHeight: '1.5',
              opacity: tableVisible ? 1 : 0,
              transitionDelay: '100ms'
            }}
          >
            The same depth as a traditional agency. A fraction of the time and cost.
          </p>

          {/* Comparison Table Card */}
          <div 
            className="transition-all duration-700 overflow-x-auto"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              boxShadow: '0 8px 48px rgba(61, 56, 53, 0.08), 0 2px 8px rgba(61, 56, 53, 0.04)',
              maxWidth: '920px',
              margin: '0 auto',
              opacity: tableVisible ? 1 : 0,
              transform: tableVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms'
            }}
          >
            {/* Table */}
            <div className="min-w-[640px]">
              {/* Header Row */}
              <div 
                className="grid"
                style={{ 
                  gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                  borderBottom: '1px solid rgba(61, 56, 53, 0.06)'
                }}
              >
                <div className="p-6 md:p-8"></div>
                
                {/* CRUDA Header - Highlighted */}
                <div 
                  className="p-6 md:p-8 text-center relative"
                  style={{ 
                    backgroundColor: 'rgba(255, 46, 99, 0.04)',
                    borderBottom: '3px solid #FF2E63',
                    marginBottom: '-1px'
                  }}
                >
                  <span 
                    className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: '#FF2E63' }}
                  >
                    CRUDA
                  </span>
                </div>
                
                <div className="p-6 md:p-8 text-center">
                  <span 
                    className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(61, 56, 53, 0.5)' }}
                  >
                    AGENCY
                  </span>
                </div>
                
                <div className="p-6 md:p-8 text-center">
                  <span 
                    className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(61, 56, 53, 0.5)' }}
                  >
                    FREELANCER
                  </span>
                </div>
              </div>

              {/* Data Rows */}
              {comparisonData.map((row, index) => (
                <div 
                  key={index}
                  className="grid transition-colors duration-200"
                  style={{ 
                    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                    borderBottom: index < comparisonData.length - 1 ? '1px solid rgba(61, 56, 53, 0.04)' : 'none',
                    backgroundColor: index % 2 === 1 ? 'rgba(61, 56, 53, 0.015)' : 'transparent'
                  }}
                >
                  {/* Label */}
                  <div 
                    className="p-6 md:p-8 text-[14px] md:text-[15px] font-medium flex items-center"
                    style={{ color: 'rgba(61, 56, 53, 0.65)' }}
                  >
                    {row.label}
                  </div>
                  
                  {/* CRUDA Column - Highlighted */}
                  <div 
                    className="p-6 md:p-8 text-center flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'rgba(255, 46, 99, 0.04)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[11px]"
                        style={{ 
                          backgroundColor: 'rgba(34, 197, 94, 0.12)',
                          color: '#16A34A'
                        }}
                      >
                        ✓
                      </span>
                      <span 
                        className="text-[14px] md:text-[15px] font-semibold"
                        style={{ 
                          color: row.cruda.highlight ? '#FF2E63' : '#3D3835'
                        }}
                      >
                        {row.cruda.value}
                      </span>
                    </div>
                  </div>
                  
                  {/* Agency Column */}
                  <div 
                    className="p-6 md:p-8 text-center text-[14px] md:text-[15px] flex items-center justify-center"
                    style={{ color: 'rgba(61, 56, 53, 0.5)' }}
                  >
                    {row.agency}
                  </div>
                  
                  {/* Freelancer Column */}
                  <div 
                    className="p-6 md:p-8 text-center text-[14px] md:text-[15px] flex items-center justify-center"
                    style={{ color: 'rgba(61, 56, 53, 0.5)' }}
                  >
                    {row.freelancer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div 
        ref={includesRef}
        className="py-[80px] px-6 md:px-[60px]"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <h3 
            className="text-[28px] font-semibold text-center mb-12 transition-all duration-700"
            style={{ 
              color: '#3D3835',
              letterSpacing: '-0.01em',
              opacity: includesVisible ? 1 : 0,
              transform: includesVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What's included
          </h3>

          {/* Deliverables Grid */}
          <div 
            className="grid md:grid-cols-2 gap-y-5 gap-x-12 max-w-[720px] mx-auto transition-all duration-700"
            style={{
              opacity: includesVisible ? 1 : 0,
              transform: includesVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            {/* Left Column */}
            <div className="flex flex-col gap-5">
              {leftDeliverables.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span 
                    className="text-[16px] font-medium flex-shrink-0 mt-0.5"
                    style={{ color: '#FF2E63' }}
                  >
                    →
                  </span>
                  <span 
                    className="text-[17px]"
                    style={{ 
                      color: 'rgba(61, 56, 53, 0.8)',
                      lineHeight: '1.5'
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-5">
              {rightDeliverables.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span 
                    className="text-[16px] font-medium flex-shrink-0 mt-0.5"
                    style={{ color: '#FF2E63' }}
                  >
                    →
                  </span>
                  <span 
                    className="text-[17px]"
                    style={{ 
                      color: 'rgba(61, 56, 53, 0.8)',
                      lineHeight: '1.5'
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={ctaRef}
        className="py-[80px] pb-[120px] px-6 md:px-[60px]"
      >
        <div className="max-w-[500px] mx-auto text-center">
          {/* Headline */}
          <h3 
            className="text-[28px] font-semibold mb-4 transition-all duration-700"
            style={{ 
              color: '#3D3835',
              letterSpacing: '-0.01em',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Ready when you are.
          </h3>

          {/* Subtext */}
          <p 
            className="text-[17px] mb-8 transition-all duration-700"
            style={{ 
              color: 'rgba(61, 56, 53, 0.65)',
              lineHeight: '1.6',
              opacity: ctaVisible ? 1 : 0,
              transitionDelay: '100ms'
            }}
          >
            No pitch. No pressure. Just a conversation about whether we're the right fit.
          </p>

          {/* CTA Button */}
          <Link
            to="/book-call"
            className="inline-block px-10 py-[18px] text-[16px] font-semibold rounded-[10px] transition-all duration-400"
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

          {/* Availability Note */}
          <p 
            className="text-[14px] mt-6 transition-all duration-700"
            style={{ 
              color: 'rgba(61, 56, 53, 0.45)',
              lineHeight: '1.5',
              opacity: ctaVisible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            We take one new client per month. December is open. If timing doesn't work, we'll hold a spot for Q1 2026.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Pricing;

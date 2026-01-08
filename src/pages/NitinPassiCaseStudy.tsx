import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';
import confidentialHero from '@/assets/confidential-hero.jpg';

const NitinPassiCaseStudy = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: snapshotRef, isVisible: snapshotVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: challengeRef, isVisible: challengeVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: translationRef, isVisible: translationVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: resultsRef, isVisible: resultsVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: impactRef, isVisible: impactVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* HERO SECTION - 100vh, name only */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center"
        style={{ 
          backgroundColor: '#0A0A0A'
        }}
      >
        {/* Abstract geometric pattern as placeholder */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 46, 99, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 46, 99, 0.05) 0%, transparent 40%),
              linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)
            `
          }}
        />
        
        <div 
          className="relative z-10 text-center px-6"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Industry Label */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              opacity: 0.8,
              marginBottom: '32px'
            }}
          >
            RETAIL INNOVATION • DUBAI
          </p>
          
          {/* Name - Redacted */}
          <h1
            style={{
              fontSize: 'clamp(48px, 10vw, 96px)',
              fontWeight: '600',
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}
          >
            [Name Redacted]
          </h1>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* THE SNAPSHOT */}
      <section
        ref={snapshotRef}
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left Column - The Executive */}
            <div
              style={{
                opacity: snapshotVisible ? 1 : 0,
                transform: snapshotVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.4)',
                  marginBottom: '24px'
                }}
              >
                THE EXECUTIVE
              </p>
              
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em'
                }}
              >
                [Name Redacted]
              </h2>
              
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}
              >
                Retail CEO & Founder<br />
                Dubai
              </p>
              
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: '1.8'
                }}
              >
                Third-generation entrepreneur. Built multiple retail brands across global markets. 
                Current venture reached $500M revenue in under 2 years.
              </p>
            </div>

            {/* Right Column - The Challenge */}
            <div
              style={{
                opacity: snapshotVisible ? 1 : 0,
                transform: snapshotVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 150ms'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.4)',
                  marginBottom: '24px'
                }}
              >
                THE CHALLENGE
              </p>
              
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: '1.8'
                }}
              >
                Second-time founder. Lessons learned. New model built. No public narrative while raising capital 
                and building operations. NDAs protect details. But the transformation—from traditional retail to 
                on-demand manufacturing—required strategic positioning that could travel to investors and industry 
                without revealing operational secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED DIVIDER #1 - Hero Image */}
      <div
        className="w-full"
        style={{
          height: '60vh',
          backgroundImage: `url(${confidentialHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="text-center">
            <p
              style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              CONFIDENTIAL PROJECT
            </p>
          </div>
        </div>
      </div>

      {/* THE CHALLENGE EXPANDED */}
      <section
        ref={challengeRef}
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[900px] mx-auto">
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)',
              marginBottom: '24px',
              opacity: challengeVisible ? 1 : 0,
              transform: challengeVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            THE SITUATION
          </p>
          
          <blockquote
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '400',
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: '1.5',
              marginBottom: '48px',
              opacity: challengeVisible ? 1 : 0,
              transform: challengeVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            "I've built companies before. This time I know what not to do. But explaining that 
            without giving away the playbook? That was the challenge."
          </blockquote>
          
          <div
            className="transition-all duration-700"
            style={{
              fontSize: '17px',
              color: 'rgba(10, 10, 10, 0.7)',
              lineHeight: '1.9',
              opacity: challengeVisible ? 1 : 0,
              transform: challengeVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              This is a case study we can't fully share.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Our client is a second-time founder in retail. Third-generation entrepreneur. Previously built 
              global retail brands to significant scale. Current venture reached $500M revenue in under two years.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We worked with them over three months on:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Strategic positioning (second-time founder, not tied to past business)</li>
              <li style={{ marginBottom: '8px' }}>Market narrative (explaining on-demand model without operational details)</li>
              <li style={{ marginBottom: '8px' }}>Founder story (what changed between first company and this one)</li>
              <li>Content system (weekly LinkedIn, messaging matrix, investor-ready language)</li>
            </ul>
            <p>
              The work was sophisticated. The NDAs are airtight. We can share results, not strategy.
            </p>
          </div>
        </div>
      </section>

      {/* THE TRANSLATION */}
      <section
        ref={translationRef}
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)',
              marginBottom: '24px',
              opacity: translationVisible ? 1 : 0,
              transform: translationVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            THE TRANSLATION
          </p>
          
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              fontWeight: '400',
              color: '#0A0A0A',
              lineHeight: '1.6',
              marginBottom: '64px',
              maxWidth: '700px',
              opacity: translationVisible ? 1 : 0,
              transform: translationVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            We built this founder's narrative around three things:
          </p>
          
          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Pillar 01 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: translationVisible ? 1 : 0,
                transform: translationVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FF2E63',
                  marginBottom: '16px'
                }}
              >
                01
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}
              >
                Post-failure clarity
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.7'
                }}
              >
                Second-time founder, sharper systems. First company: fast growth, operational chaos. 
                Second company: controlled growth, systems-first. We positioned this founder not as 
                "serial entrepreneur," but as someone who learned expensive lessons and built a tighter 
                operation the second time.
              </p>
            </div>

            {/* Pillar 02 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: translationVisible ? 1 : 0,
                transform: translationVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '300ms'
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FF2E63',
                  marginBottom: '16px'
                }}
              >
                02
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}
              >
                On-demand vs. traditional retail
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.7'
                }}
              >
                Explaining the model without the secrets. This venture challenges every assumption 
                about inventory, manufacturing, and retail margins. We helped this founder explain why the 
                model works—without revealing how it works operationally.
              </p>
            </div>

            {/* Pillar 03 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: translationVisible ? 1 : 0,
                transform: translationVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '400ms'
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FF2E63',
                  marginBottom: '16px'
                }}
              >
                03
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}
              >
                Controlled visibility
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.7'
                }}
              >
                Strategic positioning during growth. Raising capital while building operations requires 
                narrative precision. We developed messaging that positions the company as innovative without 
                hyping, credible without over-sharing, founder-led without ego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED DIVIDER #2 - Abstract placeholder */}
      <div
        className="w-full"
        style={{
          height: '60vh',
          background: `
            linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 100%)
          `,
          position: 'relative'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(255, 46, 99, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(255, 46, 99, 0.05) 0%, transparent 40%)
            `
          }}
        />
      </div>

      {/* WHAT WE CAN SHARE */}
      <section
        ref={resultsRef}
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '600',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '64px',
              opacity: resultsVisible ? 1 : 0,
              transform: resultsVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What we can share.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Results We Can Show */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: resultsVisible ? 1 : 0,
                transform: resultsVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '100ms'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.4)',
                  marginBottom: '32px'
                }}
              >
                RESULTS WE CAN SHOW
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p style={{ fontSize: '32px', fontWeight: '600', color: '#FF2E63', marginBottom: '8px' }}>
                    600+
                  </p>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    Reactions per post
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '32px', fontWeight: '600', color: '#FF2E63', marginBottom: '8px' }}>
                    60
                  </p>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    Comments (peer-level)
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '32px', fontWeight: '600', color: '#FF2E63', marginBottom: '8px' }}>
                    50K
                  </p>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    Impressions
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '32px', fontWeight: '600', color: '#FF2E63', marginBottom: '8px' }}>
                    1K
                  </p>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    CVs received for hiring
                  </p>
                </div>
              </div>
            </div>

            {/* Results We Can't Show */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: resultsVisible ? 1 : 0,
                transform: resultsVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.4)',
                  marginBottom: '32px'
                }}
              >
                RESULTS WE CAN'T SHOW
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Strategic positioning details',
                  'Investor messaging framework',
                  'Content system architecture',
                  'Market narrative approach'
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: '17px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '16px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <p
                style={{
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '24px'
                }}
              >
                (NDAs honored.)
              </p>
            </div>
          </div>

          {/* Why This Matters */}
          <div
            className="transition-all duration-700 mt-16 pt-16"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              opacity: resultsVisible ? 1 : 0,
              transform: resultsVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '300ms'
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '24px'
              }}
            >
              Why This Matters
            </h3>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.8',
                maxWidth: '800px'
              }}
            >
              Sometimes the most sophisticated work is the work you can't show. This founder needed strategic 
              positioning during a critical growth phase. The narrative had to work for investors, industry 
              peers, and potential hires—without revealing operational details that competitors could use.
              <br /><br />
              We built a system that balances visibility with discretion. The founder can speak publicly about 
              lessons learned, industry shifts, and philosophy—while protecting the details that make the 
              business defensible.
              <br /><br />
              <span style={{ fontStyle: 'italic' }}>That's not marketing. That's strategy.</span>
            </p>
          </div>
        </div>
      </section>

      {/* THE IMPACT - Testimonial */}
      <section
        ref={impactRef}
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#3A3A3A' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <blockquote
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              fontWeight: '400',
              fontStyle: 'italic',
              color: '#FFFFFF',
              lineHeight: '1.6',
              marginBottom: '40px',
              opacity: impactVisible ? 1 : 0,
              transform: impactVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            "CRUDA helped me build a narrative I could use while raising capital and hiring—without 
            giving away what makes this business different. That balance between visibility and 
            discretion was exactly what I needed."
          </blockquote>
          
          <div
            className="transition-all duration-700"
            style={{
              opacity: impactVisible ? 1 : 0,
              transform: impactVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            <p
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '4px'
              }}
            >
              — [Name Redacted]
            </p>
            <p
              style={{
                fontSize: '13px',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              FOUNDER & CEO
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={ctaRef}
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[600px] mx-auto text-center">
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.7',
              marginBottom: '40px',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            If you need strategic positioning under NDAs, we understand the constraints.
          </p>
          
          <Link
            to="/book-call"
            className="inline-block px-10 py-[18px] text-[16px] font-semibold rounded-[10px] transition-all duration-300"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
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
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          
          .h-screen + div,
          section + div {
            height: 50vh !important;
          }
        }
      `}</style>
    </main>
  );
};

export default NitinPassiCaseStudy;

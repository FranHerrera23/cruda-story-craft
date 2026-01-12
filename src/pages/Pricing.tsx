import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: investmentRef, isVisible: investmentVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: changesRef, isVisible: changesVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: howRef, isVisible: howVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const changes = [
    "Your LinkedIn sounds like you wrote it. Because you did — with us.",
    "Your website stops explaining and starts landing.",
    "Your pitch deck tells one story, not twelve.",
    "Your team can articulate what makes you different — without fumbling.",
    "You stop competing on price and start competing on trust."
  ];

  const columns = [
    { number: "01", label: "Month 1", title: "We listen.", body: ["Weekly conversations. Your projects, your milestones, your way of seeing the world.", "We're not writing yet. We're finding the pattern."] },
    { number: "02", label: "Months 2–6", title: "We build.", body: ["Your narrative — across LinkedIn, website, pitch decks, talking points.", "Not content for content's sake. A system that holds."] },
    { number: "03", label: "Month 7+", title: "Most clients stay.", body: ["Because the work evolves. New markets. New projects. New rooms to walk into."] }
  ];

  return (
    <main className="min-h-screen">
      {/* HERO - Pentagram-level clean */}
      <section 
        ref={heroRef} 
        className="pricing-hero" 
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '160px 80px 120px'
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          {/* Headline - 48px */}
          <h1 
            className="transition-all duration-700 pricing-headline"
            style={{ 
              fontSize: '48px', 
              fontWeight: '600', 
              lineHeight: '1.15', 
              letterSpacing: '-0.02em', 
              color: '#0A0A0A',
              marginBottom: '40px',
              opacity: heroVisible ? 1 : 0, 
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            You're here because<br />something isn't working.
          </h1>
          
          {/* Accent Divider - 32px */}
          <div 
            className="transition-all duration-700"
            style={{
              width: '32px',
              height: '2px',
              background: '#FF2E63',
              margin: '0 auto 48px auto',
              opacity: heroVisible ? 1 : 0,
              transitionDelay: '100ms'
            }}
          />
          
          {/* Intro - softest */}
          <div 
            className="transition-all duration-700" 
            style={{ 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '1.7', 
              color: 'rgba(10, 10, 10, 0.5)', 
              marginBottom: '24px',
              opacity: heroVisible ? 1 : 0, 
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', 
              transitionDelay: '150ms' 
            }}
          >
            <p>You've done the work.</p>
            <p>Built the portfolio.</p>
            <p>Won the projects.</p>
          </div>
          
          {/* Problem - slightly darker */}
          <p 
            className="transition-all duration-700"
            style={{ 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '1.7', 
              color: 'rgba(10, 10, 10, 0.6)', 
              marginBottom: '24px',
              opacity: heroVisible ? 1 : 0, 
              transitionDelay: '200ms' 
            }}
          >
            But the story isn't landing.
          </p>
          
          {/* Pain points */}
          <div 
            className="transition-all duration-700"
            style={{ 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '1.7', 
              color: 'rgba(10, 10, 10, 0.5)', 
              marginBottom: '48px',
              opacity: heroVisible ? 1 : 0, 
              transitionDelay: '250ms' 
            }}
          >
            <p>The LinkedIn feels hollow.</p>
            <p>The website sounds like everyone else.</p>
            <p>And every time you pitch, you start from zero.</p>
          </div>
          
          {/* Solution - strong */}
          <div 
            className="transition-all duration-700"
            style={{ 
              fontSize: '20px',
              fontWeight: '500',
              lineHeight: '1.5',
              color: '#0A0A0A',
              opacity: heroVisible ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            <p>You don't need more content.</p>
            <p style={{ fontWeight: '600' }}>You need coherence.</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section ref={investmentRef} style={{ backgroundColor: '#FFFFFF', padding: '120px 80px', borderTop: '1px solid rgba(10, 10, 10, 0.1)' }}>
        <div style={{ maxWidth: '550px', margin: '0 auto', textAlign: 'center' }}>
          <p className="transition-all duration-700" style={{ opacity: investmentVisible ? 1 : 0, transform: investmentVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            <span style={{ fontSize: '64px', fontWeight: '600', color: '#0A0A0A' }}>$2,600</span>
            <span style={{ fontSize: '24px', fontWeight: '400', color: 'rgba(10, 10, 10, 0.5)' }}>/month</span>
          </p>
          <p className="transition-all duration-700" style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(10, 10, 10, 0.5)', marginTop: '16px', opacity: investmentVisible ? 1 : 0, transitionDelay: '100ms' }}>
            6-month minimum. Most clients stay longer.
          </p>
          <div className="transition-all duration-700" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(10, 10, 10, 0.7)', marginTop: '48px', opacity: investmentVisible ? 1 : 0, transitionDelay: '200ms' }}>
            <p style={{ marginBottom: '16px' }}>This isn't a content package.<br />It's a narrative system built around you.</p>
            <p>We start with strategy. We end with a story that works whether you're in the room or not.</p>
          </div>
          <p className="transition-all duration-700" style={{ fontSize: '16px', fontStyle: 'italic', color: 'rgba(10, 10, 10, 0.5)', marginTop: '32px', opacity: investmentVisible ? 1 : 0, transitionDelay: '300ms' }}>
            $1,800/month if content-only works better for where you are.
          </p>
          
          {/* Square CTA Button */}
          <Link 
            to="/book-call" 
            className="cta-button-pricing inline-flex items-center gap-3 mt-12 transition-all"
            style={{ 
              backgroundColor: '#0A0A0A', 
              color: '#FFFFFF', 
              padding: '18px 28px', 
              fontSize: '15px', 
              fontWeight: '500',
              borderRadius: '0', 
              textDecoration: 'none' 
            }} 
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF2E63'; }} 
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0A0A0A'; }}
          >
            Start a Conversation
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section ref={changesRef} style={{ backgroundColor: '#FFFFFF', padding: '120px 80px', borderTop: '1px solid rgba(10, 10, 10, 0.1)' }}>
        <div style={{ maxWidth: '700px' }}>
          <p className="transition-all duration-700" style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF2E63', marginBottom: '48px', opacity: changesVisible ? 1 : 0 }}>What changes</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {changes.map((change, i) => (
              <p key={i} className="transition-all duration-700" style={{ fontSize: '24px', fontWeight: '400', color: '#0A0A0A', lineHeight: '1.6', opacity: changesVisible ? 1 : 0, transitionDelay: `${(i + 1) * 100}ms` }}>
                <span style={{ color: '#FF2E63', marginRight: '16px' }}>→</span>{change}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Clean grid */}
      <section ref={howRef} style={{ backgroundColor: '#F5F1E8', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="transition-all duration-700" style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF2E63', marginBottom: '64px', opacity: howVisible ? 1 : 0 }}>How it works</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }} className="pricing-how-grid">
            {columns.map((col, i) => (
              <div key={i} className="transition-all duration-700" style={{ opacity: howVisible ? 1 : 0, transitionDelay: `${(i + 1) * 100}ms` }}>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(10, 10, 10, 0.2)', marginBottom: '12px' }}>{col.number}</p>
                <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(10, 10, 10, 0.4)', marginBottom: '20px' }}>{col.label}</p>
                <div style={{ width: '32px', height: '2px', background: 'rgba(10, 10, 10, 0.1)', marginBottom: '24px' }} />
                <p style={{ fontSize: '22px', fontWeight: '600', color: '#0A0A0A', marginBottom: '16px' }}>{col.title}</p>
                {col.body.map((p, j) => <p key={j} style={{ fontSize: '17px', fontWeight: '400', color: 'rgba(10, 10, 10, 0.6)', lineHeight: '1.65', marginBottom: j < col.body.length - 1 ? '16px' : 0 }}>{p}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section ref={testimonialRef} style={{ backgroundColor: '#0A0A0A', padding: '120px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="transition-all duration-700" style={{ fontSize: '32px', fontWeight: '400', fontStyle: 'italic', color: '#FFFFFF', lineHeight: '1.4', opacity: testimonialVisible ? 1 : 0 }}>
            "I used to dread the 'so what do you do?' question. Now I look forward to it."
          </p>
          <p className="transition-all duration-700" style={{ fontSize: '16px', fontWeight: '400', color: '#FF2E63', marginTop: '24px', opacity: testimonialVisible ? 1 : 0, transitionDelay: '100ms' }}>
            — Mike Kaeding, CEO, Norhart
          </p>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} style={{ backgroundColor: '#FFFFFF', padding: '120px 80px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="transition-all duration-700 pricing-cta-headline" style={{ fontSize: '44px', fontWeight: '600', color: '#0A0A0A', opacity: ctaVisible ? 1 : 0 }}>
            Ready when <span style={{ color: '#FF2E63' }}>you are.</span>
          </h2>
          <p className="transition-all duration-700" style={{ fontSize: '20px', fontWeight: '400', color: 'rgba(10, 10, 10, 0.7)', marginTop: '24px', opacity: ctaVisible ? 1 : 0, transitionDelay: '100ms' }}>
            No pitch. No pressure.<br />Just a conversation about where you are and where you're going.
          </p>
          <Link 
            to="/book-call" 
            className="cta-button-final inline-flex items-center gap-3 mt-10 transition-all"
            style={{ 
              backgroundColor: '#0A0A0A', 
              color: '#FFFFFF', 
              padding: '18px 28px', 
              fontSize: '15px', 
              fontWeight: '500',
              borderRadius: '0', 
              textDecoration: 'none' 
            }} 
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF2E63'; }} 
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0A0A0A'; }}
          >
            Start a Conversation
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 80px 24px !important; }
          .pricing-hero { padding-top: 100px !important; }
          .pricing-headline { font-size: 36px !important; }
          .pricing-how-grid { grid-template-columns: 1fr !important; }
          .pricing-cta-headline { font-size: 32px !important; }
        }
      `}</style>
    </main>
  );
};

export default Pricing;

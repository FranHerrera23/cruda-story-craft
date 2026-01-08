import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { AnimatedHeader } from "@/components/case-study/AnimatedHeader";
import { AnimatedParagraph } from "@/components/case-study/AnimatedParagraph";
import { AnimatedDivider } from "@/components/case-study/AnimatedDivider";
import heroImage from "@/assets/juan-pablo-romero.jpeg";

const JuanPabloRomeroCaseStudy = () => {
  const navigate = useNavigate();

  const projects: any[] = [];

  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* Back Navigation */}
      <div className="px-10 md:px-20 py-6" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-70"
          style={{ color: '#FDFBF7' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* SECTION 1: HERO */}
      <section 
        className="relative flex items-center justify-center text-center"
        style={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      >
        <div className="max-w-4xl px-6 md:px-20">
          <p 
            className="mb-8"
            style={{ 
              fontSize: '13px',
              color: '#FFFFFF',
              opacity: 0.8,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            WOOD FLOORING • MIAMI, CENTRAL AMERICA, CARIBBEAN
          </p>
          <h1 
            className="font-bold"
            style={{ 
              fontSize: 'clamp(48px, 6vw, 72px)',
              color: '#FFFFFF',
              lineHeight: 1.0,
              fontWeight: 600,
              letterSpacing: '-0.03em'
            }}
          >
            Juan Pablo Romero
          </h1>
        </div>
        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FFFFFF' }} />
        </div>
      </section>

      {/* SECTION 2: THE SNAPSHOT */}
      <section 
        className="py-24 md:py-28 px-10 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Column - The Client */}
            <div>
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                THE CLIENT
              </p>
              <h2 
                className="mb-4"
                style={{ 
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  color: '#0A0A0A',
                  fontWeight: 600,
                  lineHeight: 1.2
                }}
              >
                Juan Pablo Romero
              </h2>
              <p 
                className="mb-4"
                style={{ 
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7
                }}
              >
                Regional Sales Manager, US & Caribbean<br />
                UNIK Parquet
              </p>
              <p 
                style={{ 
                  fontSize: '18px',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: 1.7
                }}
              >
                Guatemalan immigrant. Learned the trade at 17, working alongside his father. Twenty years in flooring. Built UNIK's entire US market from zero.
              </p>
            </div>
            
            {/* Right Column - The Challenge */}
            <div>
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                THE CHALLENGE
              </p>
              <AnimatedParagraph 
                className="mb-4"
                style={{ 
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7,
                  fontWeight: 600
                }}
              >
                Two decades mastering European wood flooring.
              </AnimatedParagraph>
              <AnimatedParagraph 
                className="mb-4"
                style={{ 
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7
                }}
              >
                Zero presence in competitive US markets.
              </AnimatedParagraph>
              <AnimatedParagraph 
                style={{ 
                  fontSize: '18px',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: 1.7
                }}
              >
                UNIK is a Canadian family-owned company. Juan Pablo built their US expansion from the ground up—not with marketing budgets, but with relationships and craft knowledge. The work existed. The story didn't.
              </AnimatedParagraph>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: FULL-BLEED IMAGE DIVIDER */}
      <section 
        className="w-full md:h-[60vh] h-[50vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />

      {/* SECTION 3: THE CHALLENGE EXPANDED */}
      <section 
        className="py-24 md:py-28 px-10 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[900px] mx-auto">
          <div 
            className="inline-block mb-10"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.1)',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            <p style={{ 
              fontSize: '12px',
              color: '#FF2E63',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              THE CHALLENGE
            </p>
          </div>

          <div 
            className="mb-12 pl-8"
            style={{ 
              borderLeft: '4px solid #FF2E63'
            }}
          >
            <p 
              className="italic"
              style={{ 
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                lineHeight: 1.4,
                color: '#0A0A0A',
                fontWeight: 500,
                fontStyle: 'italic'
              }}
            >
              "I learned this trade from my father. Every project is personal. But when you're expanding into new markets, relationships aren't enough. People need to understand what makes UNIK different."
            </p>
          </div>
          
          <div className="space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              Juan Pablo Romero came to the United States from Guatemala at 17. He started learning flooring alongside his father, working job sites, understanding wood from the ground up. That was two decades ago.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              Today, Juan Pablo is the Regional Sales Manager for UNIK Parquet across the US and Caribbean. UNIK is a Canadian family-owned company specializing in European engineered hardwood—Black Forest oak, natural oil finishes, precision engineering. Juan Pablo built their entire US presence from zero.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              But none of that translated into market visibility. UNIK had a product. Juan Pablo had the expertise. What they didn't have was a way to communicate why their approach to wood flooring—material sourcing, engineering, installation—was different from commodity competitors.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#0A0A0A'
            }}>
              The challenge wasn't credibility. It was translation. Taking twenty years of craft knowledge and putting it into words that architects, designers, and developers could understand before the first meeting.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE TRANSLATION */}
      <section 
        className="py-24 md:py-28 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          
          {/* Section Number */}
          <div 
            className="inline-block mb-10"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.1)',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            <p style={{ 
              fontSize: '12px',
              color: '#FF2E63',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              THE TRANSLATION
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#0A0A0A',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Craft knowledge, translated
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-20"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: 'rgba(10, 10, 10, 0.8)',
              maxWidth: '700px'
            }}
          >
            We built Juan Pablo's story around three things:
          </AnimatedParagraph>
          
          {/* 3-Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Pillar 1 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>01</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Generational craft
              </h3>
              <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>Family roots, professional rigor</h4>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Juan Pablo didn't learn wood flooring in a classroom. He learned it at 17, working job sites with his father. Two decades later, that foundation still shapes how he talks about material selection, installation precision, and long-term performance.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>02</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Material expertise
              </h3>
              <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>European engineering, explained clearly</h4>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Black Forest oak. Natural oil finishes. Click-lock engineering. These aren't buzzwords—they're decisions that affect how a floor performs over 20 years. We helped translate technical knowledge into language that makes architects pay attention.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div 
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 700, marginBottom: '16px' }}>03</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>
                Market expansion without hype
              </h3>
              <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: '#0A0A0A' }}>Building from zero in competitive markets</h4>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.7)' }}>
                Juan Pablo built UNIK's US market from zero—not with big budgets, but with relationships and reliability. We positioned him as someone who understands what makes a flooring project succeed from specification to installation.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: FULL-BLEED IMAGE DIVIDER */}
      <section 
        className="w-full md:h-[60vh] h-[50vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%'
        }}
      />

      {/* SECTION 6: WHAT THIS LOOKS LIKE */}
      <section 
        className="py-24 md:py-28 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <AnimatedHeader
            className="mb-16"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 48px)',
              color: '#0A0A0A',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            What this looks like.
          </AnimatedHeader>

          {/* Two Metric Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Positioning Card */}
            <div 
              className="p-12"
              style={{
                backgroundColor: '#4A90E2',
                borderRadius: '16px'
              }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px', color: '#FFFFFF', lineHeight: 1.3 }}>
                Clear positioning
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#FFFFFF' }}>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• Engineered hardwood specialist</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• European sourcing + Canadian manufacturing</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '12px' }}>• US market builder, not just sales</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7 }}>• Technical expertise, approachable communication</li>
              </ul>
            </div>

            {/* Market Presence Card */}
            <div 
              className="p-12"
              style={{
                backgroundColor: '#E0D5C7',
                borderRadius: '16px'
              }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: '#0A0A0A', lineHeight: 1.3 }}>
                Market presence being built
              </h3>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.85)', marginBottom: '16px' }}>
                Narrative foundation for:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(10, 10, 10, 0.85)' }}>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Architect conversations</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Designer presentations</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Developer meetings</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>• Trade show positioning</li>
                <li style={{ fontSize: '17px', lineHeight: 1.7 }}>• LinkedIn presence (launching)</li>
              </ul>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(10, 10, 10, 0.85)', marginTop: '16px', fontWeight: 600 }}>
                The story exists now. The content follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE IMPACT */}
      <section 
        className="py-24 md:py-28 px-10 md:px-20"
        style={{ backgroundColor: '#3A3A3A' }}
      >
        <div className="max-w-[900px] mx-auto">
          {/* Testimonial Quote */}
          <div 
            className="mb-16 p-12 md:p-14"
            style={{ 
              backgroundColor: 'rgba(253, 251, 247, 0.05)',
              borderLeft: '4px solid #FF2E63',
              borderRadius: '8px'
            }}
          >
            <p 
              className="mb-4"
              style={{ 
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: 1.4,
                color: '#FFFFFF',
                fontWeight: 500
              }}
            >
              "CRUDA helped me see what I couldn't articulate. I know wood flooring inside and out. But explaining why European engineering matters, why oil finishes outperform polyurethane, why UNIK's approach is different—that's what we built together. Now I can walk into any meeting and the story is clear."
            </p>
            <p style={{ 
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              — Juan Pablo Romero<br />
              <span style={{ fontWeight: 400 }}>Regional Sales Manager, UNIK Parquet</span>
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#FF2E63', lineHeight: 1.1, marginBottom: '8px' }}>
                NARRATIVE
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>
                Foundation built
              </p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#FF2E63', lineHeight: 1.1, marginBottom: '8px' }}>
                POSITIONING
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>
                Clarified
              </p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#FF2E63', lineHeight: 1.1, marginBottom: '8px' }}>
                EXPERTISE
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.7)' }}>
                Translated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: CTA */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 
            className="mb-10"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 40px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Ready to build your story?
          </h2>
          <Link 
            to="/book-call"
            className="inline-block px-10 py-5 text-lg font-semibold transition-all duration-300"
            style={{ 
              backgroundColor: '#3D3835',
              color: '#FDFBF7',
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(61, 56, 53, 0.2)',
              fontSize: '18px',
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2A2725';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3D3835';
            }}
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JuanPabloRomeroCaseStudy;
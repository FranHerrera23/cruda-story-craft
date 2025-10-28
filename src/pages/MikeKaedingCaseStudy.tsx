import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { AnimatedHeader } from "@/components/case-study/AnimatedHeader";
import { AnimatedParagraph } from "@/components/case-study/AnimatedParagraph";
import { AnimatedDivider } from "@/components/case-study/AnimatedDivider";
import heroImage from "@/assets/mike-kaeding.webp";

const MikeKaedingCaseStudy = () => {
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
          height: '70vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl px-6 md:px-20">
          <p 
            className="mb-6"
            style={{ 
              fontSize: '12px',
              color: '#FDFBF7',
              opacity: 0.7,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            RESIDENTIAL CONSTRUCTION | MINNEAPOLIS
          </p>
          <h1 
            className="font-bold"
            style={{ 
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: '#FDFBF7',
              lineHeight: 1.2,
              fontWeight: 700
            }}
          >
            When innovation doesn't travel
          </h1>
        </div>
        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FDFBF7' }} />
        </div>
      </section>

      {/* SECTION 2: CONTEXT BAR */}
      <section 
        className="py-16 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <p style={{ 
          fontSize: '12px',
          color: '#3D3835',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 500
        }}>
          Mike Kaeding | CEO of Norhart Inc. | Residential Construction | Minneapolis
        </p>
      </section>

      {/* SECTION 3: OPENING NARRATIVE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[750px] mx-auto space-y-10">
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Mike Kaeding built a $200M construction company that's redefining how America builds. Norhart Inc. developed a $100M residential complex in Forest Lake with an in-house model that's changing industry cost structures.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            His work was revolutionary. Walk through a Norhart development and you saw it. Faster timelines. Lower costs. Better quality. A completely integrated model that challenged conventional construction wisdom.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            But despite building a $200M company, Norhart's story was trapped in local press. The business model was proven. The scale was there.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            What wasn't there: anyone outside Minneapolis who understood what Mike had built.
          </AnimatedParagraph>
          
          <AnimatedParagraph style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            No national positioning. No thought leadership framework. No system to turn operational excellence into industry authority. When Mike wasn't in the room, no one understood what his business model meant for construction.
          </AnimatedParagraph>
        </div>
      </section>

      {/* SECTION 4: VISUAL DIVIDER */}
      <AnimatedDivider bgColor="#F5F1E8" />

      {/* SECTION 5: THE CHALLENGE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
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
              The Challenge
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.2,
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            A revolutionary business model. Zero national presence.
          </AnimatedHeader>
          
          <div className="space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Mike had proven his model in Minneapolis. But national developers didn't know him. Construction conferences hadn't heard of Norhart. He had no speaking opportunities. No partnerships beyond Minnesota.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              His reputation was local. His ambition was national.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The work spoke for itself—if you could see it. But you can't walk developers through Forest Lake remotely. You can't explain integrated construction in a cold email.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Mike needed to build belief at scale. Not with sales decks or pitch materials. With a story that showed what he understood about construction, efficiency, and what the industry could become.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We started working together to transform Mike from regional builder to construction industry disruptor.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 6: STRATEGIC GOALS */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[850px] mx-auto text-center">
          <p 
            className="mb-16"
            style={{ 
              fontSize: '16px',
              color: '#3D3835',
              opacity: 0.6,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            What We Needed to Solve
          </p>
          
          <div className="space-y-10">
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              Position Norhart as a national construction innovator. Not a regional success story. A model for how America should build residential properties.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              We needed to build Mike's personal brand as a thought leader and create content infrastructure that scales with company growth.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              The goal: speaking engagements at major industry conferences, inbound from developers across multiple states, national media coverage.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR APPROACH HEADER */}
      <section 
        className="py-20 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
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
              Our Approach
            </p>
          </div>
          
          <AnimatedHeader 
            className="mb-10 text-center italic"
            style={{ 
              fontSize: 'clamp(36px, 4.5vw, 48px)',
              lineHeight: 1.3,
              color: '#3D3835',
              fontWeight: 700,
              fontStyle: 'italic'
            }}
          >
            We didn't tell Mike's story. We helped him find his voice.
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="text-center"
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}
          >
            Through structured founder interviews and strategic positioning, we transformed Mike from regional builder to construction industry disruptor. We developed a content system that turns operational insights into national conversation.
          </AnimatedParagraph>
        </div>
      </section>

      {/* SECTION 8: THE TRANSLATION */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
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
              02
            </p>
          </div>
          
          <AnimatedHeader
            className="mb-8"
            style={{ 
              fontSize: 'clamp(42px, 5vw, 56px)',
              color: '#3D3835',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            The translation
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-20"
            style={{ 
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              lineHeight: 1.6,
              color: 'rgba(61, 56, 53, 0.85)',
              maxWidth: '700px'
            }}
          >
            We built his story around three things:
          </AnimatedParagraph>
          
          {/* 3-Column Pillars Grid */}
          <div className="pillars-grid mb-20">
            
            {/* Pillar 1: Construction Innovation */}
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <h3 className="pillar-heading">Construction Innovation</h3>
              <p className="pillar-description">
                How Norhart is reimagining residential building. Why the traditional model doesn't work anymore. What changes when you control the entire process.
              </p>
            </div>
            
            {/* Pillar 2: Business Model Breakdown */}
            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3 className="pillar-heading">Business Model Breakdown</h3>
              <p className="pillar-description">
                The economics of vertical integration. What changes when you own the entire process. Why this creates better outcomes.
              </p>
            </div>
            
            {/* Pillar 3: Industry Leadership */}
            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3 className="pillar-heading">Industry Leadership</h3>
              <p className="pillar-description">
                Challenging conventional construction wisdom. What the future of American residential building looks like. Why the industry needs to change.
              </p>
            </div>
            
          </div>
          
          {/* Closing Statement */}
          <div className="max-w-[700px] mx-auto text-center space-y-6">
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(19px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              The content wasn't promotional. It was Mike thinking out loud about building better, faster, and more affordably.
            </AnimatedParagraph>
            
            <AnimatedParagraph style={{ 
              fontSize: 'clamp(19px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              This built his presence nationally. Then opened doors across the construction industry.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* SECTION 9: VISUAL DIVIDER */}
      <AnimatedDivider bgColor="#E8DED1" />

      {/* SECTION 10: WHAT TRAVELS NOW */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <AnimatedHeader
            className="mb-10 text-center"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            What travels now
          </AnimatedHeader>
          
          <AnimatedParagraph 
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(20px, 2.4vw, 24px)',
              lineHeight: 1.6,
              color: '#3D3835'
            }}
          >
            Two years later: a construction model that travels beyond Minneapolis.
          </AnimatedParagraph>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>National media coverage</strong> in construction industry publications
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>Speaking engagements</strong> at major industry conferences
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>Inbound from developers</strong> across multiple states
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>300% LinkedIn growth</strong> in 6 months
              </p>
            </div>
            
            <div 
              className="flex items-start gap-4 p-7"
              style={{
                backgroundColor: '#FDFBF7',
                border: '1px solid #E8DED1',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(61, 56, 53, 0.06)'
              }}
            >
              <span style={{ color: '#FF2E63', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
              <p style={{ 
                fontSize: 'clamp(15px, 1.7vw, 17px)',
                lineHeight: 1.7,
                color: '#3D3835'
              }}>
                <strong style={{ color: '#FF2E63' }}>Featured</strong> in industry podcasts and documentaries
              </p>
            </div>
          </div>
          
          <AnimatedParagraph 
            className="text-center max-w-[700px] mx-auto"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: '#3D3835'
            }}
          >
            Mike walks into rooms now where people already know Norhart's model. National developers. Industry conferences. Media outlets.
          </AnimatedParagraph>
          
          <AnimatedParagraph 
            className="text-center max-w-[700px] mx-auto mt-6"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: '#3D3835'
            }}
          >
            The business model finally has a story that travels beyond Minneapolis.
          </AnimatedParagraph>
        </div>
      </section>

      {/* SECTION 11: PROJECT CAROUSEL (DARK SECTION) - EMPTY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <AnimatedParagraph
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: 'rgba(253, 251, 247, 0.7)'
            }}
          >
            Project case studies coming soon
          </AnimatedParagraph>
        </div>
      </section>

      {/* SECTION 12: TESTIMONIAL QUOTE */}
      <section 
        className="py-32 md:py-40 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div 
          className="max-w-[900px] mx-auto p-12 md:p-14"
          style={{ 
            backgroundColor: '#FDFBF7',
            borderLeft: '4px solid #FF2E63',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(61, 56, 53, 0.08)'
          }}
        >
          <p 
            className="mb-6 italic"
            style={{ 
              fontSize: 'clamp(22px, 2.6vw, 26px)',
              lineHeight: 1.7,
              color: '#3D3835',
              fontStyle: 'italic'
            }}
          >
            "CRUDA helped us articulate what makes Norhart different. Now we're not just building apartments—we're leading a conversation about the future of construction."
          </p>
          <p style={{ 
            fontSize: '14px',
            color: '#3D3835',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            — Mike Kaeding
          </p>
        </div>
      </section>

      {/* SECTION 13: CTA */}
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
            Want to build trust like Mike?
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
            Start Your Story →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MikeKaedingCaseStudy;
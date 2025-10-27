import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/retail-ceo.jpg";

const RetailCEOCaseStudy = () => {
  const navigate = useNavigate();

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
            LUXURY RETAIL | DUBAI
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
            We'd tell you more, but discretion is part of the deal
          </h1>
        </div>
        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FDFBF7' }} />
        </div>
      </section>

      {/* IMAGE CAPTION */}
      <section 
        className="py-4 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <p style={{ 
          fontSize: '14px',
          color: '#3D3835',
          fontStyle: 'italic',
          opacity: 0.7
        }}>
          Not the CEO. But definitely wears a cape to work.
        </p>
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
          [Name Redacted] | Retail CEO & Founder | Dubai | Mini-Batman Not Actual CEO
        </p>
      </section>

      {/* SECTION 3: OPENING NARRATIVE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[750px] mx-auto space-y-10">
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Building a luxury retail brand in one of the world's most competitive markets. CEO and founder. Dubai-based. The kind of operator who knows that brand positioning isn't marketing—it's survival.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            We worked together on a three-month consulting and advisory contract. Strategic positioning, market narrative, founder story development. The work was specific, focused, effective.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Here's the situation: we're developing case studies that show industry context, strategic challenges, our methodology, and measurable outcomes. What we're not showing: any details specific enough to get us sued into oblivion by very well-funded legal teams.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            The work happened. The results speak. The NDAs are airtight. So until we get written permission from someone who isn't a mini-Batman, this page stays exactly as sophisticated as it needs to be: professional enough to take seriously, honest enough to admit we can't tell you everything, and self-aware enough to know a toy superhero makes better placeholder content than stock photos of handshakes.
          </p>
        </div>
      </section>

      {/* SECTION 4: VISUAL DIVIDER */}
      <section 
        className="py-16 flex justify-center items-center gap-3"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      </section>

      {/* SECTION 5-11: MINIMAL PLACEHOLDER */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: 'rgba(61, 56, 53, 0.6)'
          }}>
            Content in development
          </p>
        </div>
      </section>

      {/* SECTION 12: PROJECT CAROUSEL (DARK SECTION) - EMPTY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <p 
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: 'rgba(253, 251, 247, 0.5)'
            }}
          >
            —
          </p>
        </div>
      </section>

      {/* SECTION 13: THE INSIGHT */}
      <section 
        className="py-32 md:py-40 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[600px] mx-auto">
          <p 
            style={{ 
              fontSize: '24px',
              lineHeight: 1.8,
              color: '#3D3835',
              textAlign: 'center'
            }}
          >
            Three months. Focused work. Results that speak but can't be spoken about without violating contracts we'd prefer not to violate.
          </p>
          
          <p 
            style={{ 
              fontSize: '24px',
              lineHeight: 1.8,
              color: '#3D3835',
              textAlign: 'center',
              marginTop: '32px'
            }}
          >
            Also: mini-Batman has impeccable taste and zero legal liability.
          </p>
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

export default RetailCEOCaseStudy;
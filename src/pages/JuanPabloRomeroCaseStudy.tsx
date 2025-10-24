import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/juan-pablo-romero.jpeg";

const JuanPabloRomeroCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            HIGH-END WOOD FLOORING | US REGIONAL SALES
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
            When vision meets execution
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
          Juan Pablo Romero | US Regional Sales Manager, UNIK Parquet | High-End Wood Flooring
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
            Juan Pablo Romero leads US regional sales for UNIK Parquet, a high-end wood flooring brand serving luxury residential and commercial projects across the country.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            But for years, his story wasn't reaching the right audience. Industry expertise. No narrative. His personal brand was invisible in a market where relationships drive everything.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            We helped Juan Pablo articulate his unique perspective on luxury flooring, architectural specifications, and how material choices create lasting value in high-end spaces.
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

      {/* SECTION 5: THE PATTERN */}
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
          
          <h2 
            className="mb-8"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.2,
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Deep industry expertise. Zero visibility.
          </h2>
          
          <div className="space-y-6">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Juan Pablo had deep expertise in luxury flooring specifications and architectural applications, but his personal brand was invisible. There was no content strategy, no consistent voice, and no way to translate his knowledge into long-term influence.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The expertise was real—if you could see it. But you can't walk architects through material selection in a LinkedIn message. You can't explain why certain wood species matter in an email.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: IMAGE PAIR */}
      <section 
        className="py-16 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              alt="Lima architectural project"
              style={{ 
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
              }}
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
              alt="Architectural process"
              style={{ 
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW WE DID THIS */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[900px] mx-auto">
          <div 
            className="p-10 md:p-12"
            style={{ 
              backgroundColor: 'rgba(255, 46, 99, 0.05)',
              borderLeft: '4px solid #FF2E63',
              borderRadius: '8px'
            }}
          >
            <h2 
              className="mb-6"
              style={{ 
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                lineHeight: 1.3,
                color: '#3D3835',
                fontWeight: 700
              }}
            >
              How we did this
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              Through weekly interviews and content architecture, we helped Juan Pablo articulate his unique perspective on luxury flooring and architectural specifications. We created a system that turns product knowledge into compelling industry leadership.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE TRANSLATION */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2 
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            The translation
          </h2>
          
          <div className="space-y-10">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We built his story around three things:
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Material Philosophy.</strong> Why wood species selection matters. How flooring choices create lasting value in luxury spaces.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Project Stories.</strong> Behind the scenes from specification to installation. The decisions that shaped each high-end project.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Market Insights.</strong> Luxury flooring trends and architectural specifications across the US market.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: IMAGE PAIR - TECHNICAL VS EMOTIONAL */}
      <section 
        className="py-16 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
              alt="Construction progress"
              style={{ 
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
              }}
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
              alt="Completed development"
              style={{ 
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 10: VISUAL DIVIDER */}
      <section 
        className="py-16 flex justify-center items-center gap-3"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      </section>

      {/* SECTION 11: WHAT TRAVELS NOW */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h2 
            className="mb-10 text-center"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            What travels now
          </h2>
          
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
                <strong style={{ color: '#FF2E63' }}>Featured in publications</strong> — Local and international architecture media
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
                <strong style={{ color: '#FF2E63' }}>Architect inbound</strong> — Consistent inquiries from high-end residential and commercial architects
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
                <strong style={{ color: '#FF2E63' }}>350% LinkedIn growth</strong> — Built in 5 months through strategic content
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
                <strong style={{ color: '#FF2E63' }}>Industry positioning</strong> — Recognized thought leader in luxury flooring specifications
              </p>
            </div>
          </div>
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
              color: 'rgba(253, 251, 247, 0.7)'
            }}
          >
            Project case studies coming soon
          </p>
        </div>
      </section>

      {/* SECTION 13: THE INSIGHT */}
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
            "CRUDA helped me go from being known for my projects to being known for my thinking. That shift changed everything."
          </p>
          <p style={{ 
            fontSize: '14px',
            color: '#3D3835',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            — Juan Pablo Romero
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

export default JuanPabloRomeroCaseStudy;
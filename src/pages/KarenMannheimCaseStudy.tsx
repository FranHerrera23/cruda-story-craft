import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/hero-karen-mannheim.jpg";

const KarenMannheimCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    { title: "How light shapes emotion", thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=450&fit=crop" },
    { title: "Why every room breathes differently", thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop" },
    { title: "Building trust when you're not in the room", thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop" },
    { title: "The technical precision behind luxury lighting", thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=450&fit=crop" },
    { title: "From Lima to Miami: cultural translation", thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=450&fit=crop" },
    { title: "Challenging industry assumptions", thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=450&fit=crop" }
  ];

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
            Luxury Lighting Design | Lima → Miami → Dubai
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
            When mastery doesn't travel
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
          Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Dubai
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
            Karen Mannheim had spent three decades perfecting how light shapes emotion in luxury spaces. By 2021, TRAZZO was one of Peru's most respected lighting companies—architects and developers who worked with her understood immediately. The portfolio was exceptional: Porsche, Maserati, residences where every room breathed differently depending on the hour, the mood, the moment.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            But her expertise stopped at Peru's border. More accurately, it stopped at the edge of her immediate network.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            The work was undeniable in person. Walking through a space she'd lit, you felt it—the way light made a wine cellar intimate, a lobby commanding, a bedroom restful without being flat. But she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. Not because the work wasn't there. Because the story wasn't.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            She had no audience online. A thousand followers, no LinkedIn presence, no way to create belief when she wasn't standing in front of you explaining what she saw. The gap wasn't quality. It was translation.
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
          
          <h2 
            className="mb-8"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.2,
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Karen's expertise stopped at Peru's border—but no one outside Lima knew about it.
          </h2>
          
          <div className="space-y-6">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Three decades perfecting architectural lighting for luxury spaces. TRAZZO was Peru's most respected—Porsche, Maserati, residences where every room breathed differently.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              But she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. A thousand followers. No LinkedIn presence. No way to create belief remotely.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The gap wasn't quality. It was translation.
            </p>
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
              Karen had mastery. What she didn't have was a way to create belief remotely.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              We needed to translate three decades of expertise into something that could travel—from Lima to Miami to Dubai, from her immediate circle to rooms she'd never been in. Not by simplifying what she did, but by understanding that technical precision speaks one language, and human connection speaks another.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835',
              fontWeight: 600
            }}>
              The work: build her story before we built her reach.
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
          
          <h2 
            className="mb-10 text-center italic"
            style={{ 
              fontSize: 'clamp(36px, 4.5vw, 48px)',
              lineHeight: 1.3,
              color: '#3D3835',
              fontWeight: 700,
              fontStyle: 'italic'
            }}
          >
            We didn't change what Karen built. We changed how it was understood.
          </h2>
          
          <p 
            className="text-center"
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}
          >
            Through structured founder interviews and strategic positioning, we transformed TRAZZO from a regional supplier to an international design authority. We developed a content system that turns technical mastery into emotional storytelling that travels across borders and cultures.
          </p>
        </div>
      </section>

      {/* SECTION 8: CONTENT APPROACH */}
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
              We didn't build a content system. We built a way for Karen to think out loud.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Her expertise lived in three spaces: the technical (how light actually works in luxury spaces—thermal dynamics, layering, material interaction), the cultural (what it means to build a Latin American company in Miami, to understand light speaks different languages), and the insurgent (challenging the 'lighting as afterthought' mindset that architecture accepts without question).
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The content wasn't promotional. It was contemplative. Her first experience as a speaker. The story behind TRAZZO and its founding team. How to expand a B2B company from Peru to Miami as a Latin American entrepreneur. The breakdown of real projects with the thinking that shaped them.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: VIDEO GRID */}
      <section 
        className="py-20 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(24px, 3vw, 32px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Watch how we translated their story into content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)',
                  aspectRatio: '16/9'
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <div 
                      style={{ 
                        width: 0, 
                        height: 0, 
                        borderLeft: '12px solid #3D3835',
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        marginLeft: '4px'
                      }}
                    />
                  </div>
                </div>
                <div 
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ backgroundColor: 'rgba(61, 56, 53, 0.8)' }}
                >
                  <p style={{ 
                    fontSize: 'clamp(16px, 1.8vw, 18px)',
                    color: '#FDFBF7',
                    fontWeight: 700
                  }}>
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
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
          
          <p 
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(20px, 2.4vw, 24px)',
              lineHeight: 1.6,
              color: '#3D3835'
            }}
          >
            Over three years: the belief that travels when Karen isn't in the room.
          </p>
          
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
                <strong style={{ color: '#FF2E63' }}>+20,000 followers and 500,000 annual impressions</strong> where there had been silence
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
                <strong style={{ color: '#FF2E63' }}>Architectural Digest, Modern Luxury Magazine, COSAS Magazine, Semana Económica</strong>—recognition that travels
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
                <strong style={{ color: '#FF2E63' }}>Saadiyat Nights</strong>—a music festival hosting global stars like Andrea Bocelli, Sting, Jennifer Lopez, Christina Aguilera, a client who'd never met her
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
                <strong style={{ color: '#FF2E63' }}>Indonesia, Spain, Hawaii</strong>—partnerships across borders
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
                <strong style={{ color: '#FF2E63' }}>+10 high-end Miami bids won</strong>—from cold outreach that isn't cold anymore
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
                <strong style={{ color: '#FF2E63' }}>Speaking invitations</strong>—industry conferences, and schools, not just local press
              </p>
            </div>
          </div>
          
          <p 
            className="text-center max-w-[700px] mx-auto"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: '#3D3835'
            }}
          >
            She walks into rooms now where people already know her work. The recognition finally matches the expertise.
          </p>
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
            "CRUDA helped us translate three decades of expertise into a story that works everywhere—from Lima to Miami to Dubai. The work was always exceptional. Now people outside our immediate circle can see it."
          </p>
          <p style={{ 
            fontSize: '14px',
            color: '#3D3835',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            — Karen Mannheim
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
            Want to build trust like Karen?
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

export default KarenMannheimCaseStudy;

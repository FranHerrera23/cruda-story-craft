import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/karen-hero-new.jpg";

const KarenMannheimCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      slug: "pezet",
      name: "PEZET",
      location: "Lima, Peru",
      teaser: "Lima's most exclusive residential tower. We showed how lighting transforms a building into an experience.",
      poster: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=1067&fit=crop"
    },
    {
      slug: "four-seasons-penthouse",
      name: "Four Seasons Penthouse",
      location: "Miami, Florida",
      teaser: "A penthouse where light adapts to every moment—from sunrise to entertaining guests after dark.",
      poster: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=1067&fit=crop"
    },
    {
      slug: "saadiyat-music-festival",
      name: "Saadiyat Nights",
      location: "Abu Dhabi, UAE",
      teaser: "Global music festival with Andrea Bocelli, Sting, and Jennifer Lopez—a client who'd never met her.",
      poster: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=1067&fit=crop"
    },
    {
      slug: "osaka-nikkei",
      name: "Osaka Nikkei",
      location: "Miami, Florida",
      teaser: "Where Japanese precision meets Peruvian warmth through light that guides every course.",
      poster: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=1067&fit=crop"
    },
    {
      slug: "porsche-design-tower",
      name: "Porsche Design Tower",
      location: "Miami, Florida",
      teaser: "Automotive excellence translated into residential architecture through meticulous lighting design.",
      poster: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&h=1067&fit=crop"
    },
    {
      slug: "fisher-island",
      name: "Fisher Island Residence",
      location: "Miami, Florida",
      teaser: "Private island living where every space breathes differently depending on the hour.",
      poster: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=1067&fit=crop"
    },
    {
      slug: "bauhaus-villa",
      name: "High-end BauHaus Villa",
      location: "Multiple Locations",
      teaser: "Contemporary minimalism meets lighting precision in high-end residential architecture.",
      poster: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=1067&fit=crop"
    },
    {
      slug: "trazzo-expansion",
      name: "Trazzo International Expansion & more",
      location: "Global",
      teaser: "Behind the scenes of building an international lighting design firm from Lima to the world.",
      poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=1067&fit=crop"
    }
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

      {/* SECTION 9: PROJECT STORYTELLING */}
      <section 
        id="projects"
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="mb-6 text-center"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            The work that now travels
          </h2>
          
          <p 
            className="mb-20 text-center mx-auto"
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835',
              opacity: 0.85,
              maxWidth: '800px'
            }}
          >
            Each project shows how we translated Karen's technical mastery into stories that create belief remotely—from Lima to Miami to Dubai.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/karen-mannheim/${project.slug}`}
                className="group flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(61, 56, 53, 0.08)',
                  cursor: 'pointer'
                }}
              >
                {/* Vertical video cover */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    height: '400px',
                    backgroundColor: '#E8DED1'
                  }}
                >
                  <img
                    src={project.poster}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '9/16' }}
                  />
                  
                  {/* Play button overlay (static) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                    >
                      <div 
                        style={{ 
                          width: 0, 
                          height: 0, 
                          borderLeft: '14px solid #3D3835',
                          borderTop: '9px solid transparent',
                          borderBottom: '9px solid transparent',
                          marginLeft: '4px'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* View Project overlay (hover) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(61, 56, 53, 0.85)' }}
                  >
                    <span style={{ fontSize: '18px', color: '#FDFBF7', fontWeight: 600 }}>
                      View Project →
                    </span>
                  </div>
                </div>
                
                {/* Project info */}
                <div style={{ padding: '24px' }}>
                  <h3 
                    style={{ 
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#3D3835',
                      marginBottom: '8px'
                    }}
                  >
                    {project.name}
                  </h3>
                  
                  <p 
                    style={{ 
                      fontSize: '14px',
                      color: '#3D3835',
                      opacity: 0.6,
                      marginBottom: '16px'
                    }}
                  >
                    {project.location}
                  </p>
                  
                  <p 
                    style={{ 
                      fontSize: '16px',
                      lineHeight: 1.7,
                      color: '#3D3835',
                      opacity: 0.85
                    }}
                  >
                    {project.teaser}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: VISUAL DIVIDER */}
      <div id="metrics"></div>
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

import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/karen-hero-new.jpg";
import pezetPoster from "@/assets/pezet-hero.jpg";
import fourSeasonsHero from "@/assets/four-seasons-hero.jpg";
import saadiyatHeroNew from "@/assets/saadiyat-hero-new.jpg";

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
      teaser: "Three towers by Robert A.M. Stern Architects. Proof of what Karen could do at the highest level—became the story we told Miami developers.",
      poster: pezetPoster
    },
    {
      slug: "saadiyat-music-festival",
      name: "Saadiyat Music Festival",
      location: "Abu Dhabi, UAE",
      teaser: "Jennifer Lopez, Christina Aguilera. The UAE partnership that happened because of content, not cold outreach.",
      poster: saadiyatHeroNew
    },
    {
      slug: "four-seasons-penthouse",
      name: "Four Seasons Penthouse",
      location: "Miami, Florida",
      teaser: "Four Seasons Residences, floor 66. A $13.5M home where lighting meets the standard the brand built globally—spaces that feel right at every hour, not just opening day.",
      poster: fourSeasonsHero
    },
    {
      slug: "porsche-flagship",
      name: "PORSCHE FLAGSHIP",
      location: "Lima, Perú",
      teaser: "Porsche Flagship Peru. Design approved by Porsche Germany. A project at that level doesn't happen without proven capability.",
      poster: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&h=1067&fit=crop"
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
            HIGH-END ARCHITECTURAL LIGHTING | LIMA, MIAMI, MADRID
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
          Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Madrid
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
            Karen Mannheim spent thirty years building TRAZZO in Peru. Lima's most respected lighting firm. Porsche showrooms, Maserati dealerships, Four Seasons penthouses. Over a thousand projects across Peru.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Her work was exceptional. Walk through a space she lit and you felt it. A wine cellar that felt intimate. A lobby that felt commanding. Bedrooms that helped you sleep.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            But in 2021, Karen wanted to expand to the US. She was ready for Miami. Ready for international projects. The expertise was there. The portfolio was there.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            What wasn't there: anyone outside Peru who knew her name.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            A thousand Instagram followers. No LinkedIn. No way to create belief with developers in Miami who'd never walked through her spaces. When Karen wasn't in the room, no one understood what thirty years of expertise looked like.
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
            Thirty years of work in Peru. Zero presence in Miami.
          </h2>
          
          <div className="space-y-6">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Karen was opening TRAZZO's Miami office. But Miami developers didn't know her. Middle Eastern hospitality groups hadn't heard of her. She had no speaking opportunities. No partnerships outside Peru.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Her reputation was local. Her ambition was international.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The work spoke for itself—if you could see it. But you can't walk Miami developers through a Lima penthouse. You can't explain three decades of lighting expertise in an email.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Karen needed to build belief remotely. Not with renderings or sales decks. With a story that showed what she understood about light, materials, and how spaces make people feel.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We started working together the month she committed to US expansion.
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
              Build Karen's presence in Florida from zero. Not a rebrand. Not a website refresh. A way to show Miami developers and international partners what thirty years in Peru had taught her.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              We needed to translate her local credibility into a story that worked in markets where no one knew TRAZZO existed.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}>
              The goal: partnerships, speaking opportunities, high-end residential projects in Miami. Eventually, international work—Dubai, Spain, beyond.
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
            We didn't tell Karen's story. We helped her find her voice.
          </h2>
          
          <p 
            className="text-center"
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}
          >
            Weekly interviews starting in 2021. Not about past projects. About how Karen thinks. How she approaches lighting. Why she visits sites at different times of day. What luxury lighting actually requires.
          </p>
          
          <p 
            className="text-center"
            style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.8,
              color: '#3D3835'
            }}
          >
            Every piece of content went through her. She marked up what felt wrong. What felt right. That feedback taught us how she wanted TRAZZO understood in new markets.
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
              We built her story around three things:
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Technical depth.</strong> How light behaves on different materials. Thermal dynamics. Layering. Why lighting a restaurant is different from lighting a residence.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Cross-cultural fluency.</strong> A Peruvian woman with German roots building a business in Miami. Understanding that light "speaks" differently across cultures.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Challenging assumptions.</strong> Why architects treat lighting as an afterthought. Why that's wrong. What changes when you design spaces with light as architecture.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The content wasn't promotional. It was Karen thinking out loud about thirty years of craft.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              This built her presence in Florida. Then opened doors in the UAE.
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
            Each project shows how we turned thirty years of Peru expertise into stories that opened doors in Miami, the UAE, and beyond.
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

          {/* MORE COMING SOON SECTION */}
          <div 
            className="text-center mx-auto py-20"
            style={{
              maxWidth: '800px',
              backgroundColor: '#F5F1E8'
            }}
          >
            <h3 style={{ 
              fontSize: '20px',
              color: '#3D3835',
              marginBottom: '16px',
              fontWeight: 600
            }}>
              More stories coming soon
            </h3>
            
            <p style={{ 
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(61, 56, 53, 0.85)'
            }}>
              We're crafting case studies from over 200 projects built with Karen—each one showing how mastery translates across markets. More stories publish as they're ready.
            </p>
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
            Three years later: belief that travels when Karen isn't in the room.
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
                <strong style={{ color: '#FF2E63' }}>20,000 followers</strong> where there had been silence
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
                <strong style={{ color: '#FF2E63' }}>Florida presence</strong> built from zero—ten high-end Miami bids won
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
                <strong style={{ color: '#FF2E63' }}>UAE partnership</strong> that started with content—Saadiyat Music Festival, Jennifer Lopez, Christina Aguilera
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
                <strong style={{ color: '#FF2E63' }}>International expansion</strong> across three continents—Indonesia, Spain, Hawaii
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
                <strong style={{ color: '#FF2E63' }}>Press</strong> that validates beyond Peru—Architectural Digest, Semana Económica
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
                <strong style={{ color: '#FF2E63' }}>Speaking invitations</strong> at architecture conferences—not just local, across the Americas
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
            She walks into rooms now where people already know her work, and her story. Miami developers. UAE & European partners.
          </p>
          
          <p 
            className="text-center max-w-[700px] mx-auto mt-6"
            style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.7,
              color: '#3D3835'
            }}
          >
            The thirty years of expertise finally has a story that travels.
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
            "CRUDA helped us translate three decades of expertise into a story that works everywhere—from Lima to Miami to Dubai. The work was always exceptional. Now people outside Peru can see it."
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

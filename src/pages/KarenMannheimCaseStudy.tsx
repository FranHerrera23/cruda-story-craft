import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const KarenMannheimCaseStudy = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { name: "PEZET", location: "Lima, Peru" },
    { name: "Saadiyat Music Festival", location: "Abu Dhabi, UAE" },
    { name: "Osaka Nikkei", location: "Miami, FL" },
    { name: "Fisher Island", location: "Miami, FL" },
    { name: "Porsche Design Tower", location: "Miami, FL" },
    { name: "Key Biscayne", location: "Miami, FL" },
    { name: "Four Seasons Penthouse", location: "Miami, FL" }
  ];

  return (
    <div style={{ backgroundColor: '#F5F1E8', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'rgba(253, 251, 247, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(61, 56, 53, 0.1)',
        zIndex: 1000,
        padding: '20px 60px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div 
            onClick={() => navigate('/')} 
            style={{ 
              fontSize: '24px', 
              fontWeight: 600, 
              color: '#3D3835',
              cursor: 'pointer',
              letterSpacing: '-0.5px'
            }}
          >
            CRUDA
          </div>
          
          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="hidden md:flex">
            <a onClick={() => navigate('/')} style={{ color: '#3D3835', fontSize: '16px', cursor: 'pointer', transition: 'color 0.2s' }}>Work</a>
            <a onClick={() => navigate('/')} style={{ color: '#3D3835', fontSize: '16px', cursor: 'pointer', transition: 'color 0.2s' }}>About</a>
            <a onClick={() => navigate('/book-call')} style={{ 
              backgroundColor: '#FF2E63', 
              color: '#FDFBF7', 
              padding: '12px 24px', 
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: 'none'
            }}>
              Start a Conversation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#3D3835' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            right: 0, 
            backgroundColor: '#FDFBF7',
            borderBottom: '1px solid rgba(61, 56, 53, 0.1)',
            padding: '20px 40px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a onClick={() => navigate('/')} style={{ color: '#3D3835', fontSize: '16px', cursor: 'pointer' }}>Work</a>
              <a onClick={() => navigate('/')} style={{ color: '#3D3835', fontSize: '16px', cursor: 'pointer' }}>About</a>
              <a onClick={() => navigate('/book-call')} style={{ 
                backgroundColor: '#FF2E63', 
                color: '#FDFBF7', 
                padding: '12px 24px', 
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                textAlign: 'center',
                display: 'block'
              }}>
                Start a Conversation
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SECTION 1: HERO */}
      <section style={{ 
        height: '70vh',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '80px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/src/assets/karen-mannheim.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(61, 56, 53, 0.3)'
          }} />
        </div>
        <div style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 40px'
        }}>
          <div style={{ 
            fontSize: '16px', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            color: '#FDFBF7',
            marginBottom: '30px',
            fontWeight: 400
          }}>
            LUXURY LIGHTING DESIGN | LIMA → MIAMI → DUBAI
          </div>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 60px)', 
            color: '#FDFBF7',
            fontWeight: 400,
            lineHeight: 1.2,
            maxWidth: '900px'
          }}>
            When mastery doesn't travel
          </h1>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#FDFBF7',
          fontSize: '14px',
          letterSpacing: '1px'
        }}>
          ↓
        </div>
      </section>

      {/* SECTION 2: CONTEXT BAR */}
      <section style={{ 
        backgroundColor: '#F5F1E8',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          color: 'rgba(61, 56, 53, 0.85)',
          fontSize: '16px',
          letterSpacing: '0.5px'
        }}>
          Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Dubai
        </div>
      </section>

      {/* SECTION 3: STORY SECTION - OPENING */}
      <section style={{ 
        backgroundColor: '#FDFBF7',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            Karen Mannheim had spent three decades perfecting how light shapes emotion in luxury spaces. By 2021, TRAZZO was one of Peru's most respected lighting companies—architects and developers who worked with her understood immediately. The portfolio was exceptional: Porsche, Maserati, residences where every room breathed differently depending on the hour, the mood, the moment.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            But her expertise stopped at Peru's border. More accurately, it stopped at the edge of her immediate network.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            The work was undeniable in person. Walking through a space she'd lit, you felt it—the way light made a wine cellar intimate, a lobby commanding, a bedroom restful without being flat. But she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. Not because the work wasn't there. Because the story wasn't.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)'
          }}>
            She had no audience online. A thousand followers, no LinkedIn presence, no way to create belief when she wasn't standing in front of you explaining what she saw. The gap wasn't quality. It was translation.
          </div>
        </div>
      </section>

      {/* SECTION 4: VISUAL DIVIDER */}
      <section style={{ 
        backgroundColor: '#F5F1E8',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '20px',
          letterSpacing: '8px',
          color: 'rgba(61, 56, 53, 0.3)'
        }}>
          • •
        </div>
      </section>

      {/* SECTION 5: STORY SECTION - THE PATTERN */}
      <section style={{ 
        backgroundColor: '#FDFBF7',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(32px, 4vw, 44px)', 
            fontWeight: 400,
            color: '#3D3835',
            marginBottom: '60px',
            lineHeight: 1.3
          }}>
            The pattern
          </h2>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            We recognized this immediately. Not because we're lighting experts—we're not. But because we've lived the gap between mastery and articulation. Expertise that's undeniable face-to-face, invisible remotely.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            What we saw: Karen wasn't selling lighting. She was selling how spaces make people feel. But "lighting designer" sounded like someone who picks fixtures, not someone who architects emotion. The technical precision was there—the thermal dynamics, the layering, the way to light an art collection versus a reading nook. But the framing made her sound like a vendor, not a design partner.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            The challenge wasn't just going from Lima to Miami. It was translating what lighting means when you understand it—that it's not an afterthought, not decoration, not buying pretty lamps and scattering recessed lights. It's the thing that makes or breaks how you live in a space.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)'
          }}>
            Latin culture gave us an entry point. In Latin homes, gathering matters. The home is shelter, yes, but also warmth. That's not just sentiment—it's how you approach light. We built relevance by showing Karen as a Peruvian woman with German roots building a construction business in Miami, working across nationalities, understanding that light speaks different languages depending on whether you're in a Coral Gables residence or a Dubai hotel lobby.
          </div>
        </div>
      </section>

      {/* SECTION 6: IMAGE PAIR - BEFORE/AFTER */}
      <section style={{ 
        backgroundColor: '#E8DED1',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: 'clamp(24px, 3vw, 32px)', 
            fontWeight: 400,
            color: '#3D3835',
            marginBottom: '60px',
            lineHeight: 1.4
          }}>
            From 1,000 followers and no story to 20,000 and belief that travels
          </h3>
        </div>
      </section>

      {/* SECTION 7: HOW WE DID THIS */}
      <section style={{ 
        backgroundColor: '#FDFBF7',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: 400,
            color: '#3D3835',
            marginBottom: '60px',
            lineHeight: 1.3,
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            HOW WE DID THIS
          </h2>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            Karen committed fully from day one. Weekly hour-long interviews where we unpacked not just her projects, but how she thinks about light, space, emotion. She treated this as seriously as her client work—blocking time, preparing, showing up.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            We didn't just interview and disappear. Every piece of content went through review. She'd mark up what felt right, what felt off. That feedback loop taught us how she wanted to be understood—not how we thought she should be positioned.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            Over three years now. Consistent weekly interviews. Content created, refined, published. The work wasn't fast. It was thorough.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)'
          }}>
            This only works when the builder shows up. Karen did.
          </div>
        </div>
      </section>

      {/* SECTION 8: STORY SECTION - THE TRANSLATION */}
      <section style={{ 
        backgroundColor: '#F5F1E8',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(32px, 4vw, 44px)', 
            fontWeight: 400,
            color: '#3D3835',
            marginBottom: '60px',
            lineHeight: 1.3
          }}>
            The translation
          </h2>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            We didn't change what Karen built. We changed how it was understood.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            First, we needed to translate her offline brand equity in Peru into digital presence. You can't expand to Miami when nobody outside your immediate circle knows your work exists. We built her story before we built her reach.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            The narrative shifted from product supplier to something closer to the truth: light as warmth, as power, as the source of life in a space. We showed her passion for design beyond lighting—visiting cities, discussing Foster and Koolhaas and Zaha Hadid, understanding architecture as cultural practice. We educated from a human perspective first: how lighting affects you as a person in restaurants, hotels, offices, homes. Then the B2B work—how architectural lighting design creates the atmosphere that determines whether a $13 million Four Seasons penthouse feels like a showpiece or a home.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            We made her relatable and specific at once. A mom, an entrepreneur, a lighting designer fluent in luxury lifestyle and design. Someone who understands what an avid reader needs versus an art collector versus a bon vivant with a wine cellar.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)'
          }}>
            The content wasn't promotional. It was contemplative. Her first experience as a speaker. The story behind TRAZZO and its founding team. How to expand a B2B company from Peru to Miami as a Latin American entrepreneur. Lessons on heritage, influences, leadership. The breakdown of real projects with the thinking that shaped them.
          </div>
        </div>
      </section>

      {/* SECTION 9: IMAGE PAIR - TECHNICAL VS EMOTIONAL */}
      <section style={{ 
        backgroundColor: '#E8DED1',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: 'clamp(24px, 3vw, 32px)', 
            fontWeight: 400,
            color: '#3D3835',
            lineHeight: 1.4
          }}>
            We didn't change what she built. We changed how it was understood.
          </h3>
        </div>
      </section>

      {/* SECTION 10: VISUAL DIVIDER */}
      <section style={{ 
        backgroundColor: '#FDFBF7',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '20px',
          letterSpacing: '8px',
          color: 'rgba(61, 56, 53, 0.3)'
        }}>
          • • •
        </div>
      </section>

      {/* SECTION 11: STORY SECTION - WHAT TRAVELS NOW */}
      <section style={{ 
        backgroundColor: '#FDFBF7',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(32px, 4vw, 44px)', 
            fontWeight: 400,
            color: '#3D3835',
            marginBottom: '60px',
            lineHeight: 1.3
          }}>
            What travels now
          </h2>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            Over three years: <span style={{ color: '#FF2E63', fontWeight: 600 }}>20,000 followers</span> across Instagram and LinkedIn where there had been silence. Architectural Digest, Semana Económica, speaking invitations. But more important—the belief that travels when Karen isn't in the room.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            A UAE business partner we connected her with helped close the Saadiyat Music Festival project—Jennifer Lopez, Christina Aguilera, lighting a festival for clients who'd never met her. Strategic partnerships in Indonesia, Spain, Hawaii. Miami developers who found her online or knew her but weren't sold until the narrative existed. <span style={{ color: '#FF2E63', fontWeight: 600 }}>Ten high-end project bids won in Miami</span>. Inbound inquiries not just from the US, but even within Peru—markets where she'd always had mastery but not visibility.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)'
          }}>
            Cold outreach that isn't cold anymore because people arrive educated. Recruiting made easier because reach creates context. Most importantly: she walks into rooms now where people already know her work. The recognition finally matches the expertise.
          </div>
        </div>
      </section>

      {/* SECTION 12: PROJECT CAROUSEL */}
      <section style={{ 
        backgroundColor: '#3D3835',
        padding: 'clamp(80px, 10vw, 100px) 0',
        maxHeight: '800px'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          padding: '0 clamp(40px, 5vw, 60px)'
        }}>
          <div style={{ 
            overflowX: 'auto',
            display: 'flex',
            gap: '30px',
            paddingBottom: '20px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(253, 251, 247, 0.3) transparent'
          }}>
            {projects.map((project, index) => (
              <div 
                key={index}
                style={{
                  minWidth: '350px',
                  backgroundColor: 'rgba(253, 251, 247, 0.05)',
                  borderRadius: '8px',
                  padding: '40px 30px',
                  border: '1px solid rgba(253, 251, 247, 0.1)'
                }}
              >
                <h3 style={{ 
                  fontSize: '24px',
                  color: '#FDFBF7',
                  marginBottom: '10px',
                  fontWeight: 500
                }}>
                  {project.name}
                </h3>
                <p style={{ 
                  fontSize: '16px',
                  color: 'rgba(253, 251, 247, 0.7)',
                  fontStyle: 'italic'
                }}>
                  {project.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: STORY SECTION - THE INSIGHT */}
      <section style={{ 
        backgroundColor: '#F5F1E8',
        padding: 'clamp(80px, 10vw, 100px) clamp(40px, 5vw, 60px)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(32px, 4vw, 44px)', 
            fontWeight: 400,
            color: '#3D3835',
            marginBottom: '60px',
            lineHeight: 1.3
          }}>
            The insight
          </h2>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)',
            marginBottom: '40px'
          }}>
            Translation isn't about simplifying what you do. It's about understanding that mastery speaks one language, and belief speaks another. Karen's craft never changed. But now it travels—across borders, across contexts, across the gap between walking through a space she's lit and trusting her before you've ever met.
          </div>
          <div style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)', 
            lineHeight: '1.9',
            color: 'rgba(61, 56, 53, 0.85)'
          }}>
            The work was always exceptional. Now people outside her immediate circle can see it.
          </div>
        </div>
      </section>

      {/* SECTION 14: CTA SECTION */}
      <section style={{ 
        backgroundColor: '#FDFBF7',
        padding: 'clamp(100px, 12vw, 120px) clamp(40px, 5vw, 60px)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/book-call')}
            style={{
              backgroundColor: '#FF2E63',
              color: '#FDFBF7',
              padding: '20px 50px',
              fontSize: '20px',
              fontWeight: 500,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(255, 46, 99, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 46, 99, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 46, 99, 0.2)';
            }}
          >
            Start a conversation →
          </button>
        </div>
      </section>
    </div>
  );
};

export default KarenMannheimCaseStudy;

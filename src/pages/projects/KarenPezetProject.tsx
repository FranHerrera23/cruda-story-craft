import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import pezetHero from "@/assets/pezet-interior.jpg";
import pezet01 from "@/assets/pezet-01-entrance.png";
import pezet02 from "@/assets/pezet-02-entrance.png";
import pezet03 from "@/assets/pezet-03-entrance.jpg";
import pezet04 from "@/assets/pezet-04-pool-interior.jpg";
import pezet05 from "@/assets/pezet-05-context-skyline.jpg";
import pezet06 from "@/assets/pezet-06-exterior-courtyard.jpg";
import pezet07 from "@/assets/pezet-07-exterior-front.jpg";
import pezet08 from "@/assets/pezet-08-lobby-interior.jpg";
import linkedinPost01 from "@/assets/pezet-linkedin-01.png";
import linkedinPost02 from "@/assets/pezet-linkedin-02.png";
import linkedinPost03 from "@/assets/pezet-linkedin-03.png";
import linkedinPost04 from "@/assets/pezet-linkedin-04.png";

const KarenPezetProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { type: 'image', src: pezet05, caption: 'PEZET building in Lima skyline context with Lima Golf Club' },
    { type: 'image', src: pezet01, caption: 'PEZET 1 entrance facade detail' },
    { type: 'image', src: pezet02, caption: 'PEZET 2 entrance facade detail' },
    { type: 'image', src: pezet07, caption: 'Front exterior view with pool and gardens' },
    { type: 'image', src: pezet04, caption: 'Interior pool with dramatic lighting design' },
    { type: 'image', src: pezet06, caption: 'Exterior courtyard with European-inspired landscaping' },
    { type: 'image', src: pezet08, caption: 'Lobby interior showing RAMSA architecture and lighting' },
    { type: 'image', src: pezet03, caption: 'PEZET 3 entrance' }
  ];

  const linkedinPosts = [
    { image: linkedinPost01, url: 'https://www.linkedin.com/posts/karen-mannheim_ramsa-robertstern-eurodisney-activity-7141170916553547776-B4xp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAphD7cB052SAtGH6SLA5tUOc-c8LYjc1bk', title: 'Working alongside RAMSA and Grupo ACM' },
    { image: linkedinPost02, url: 'https://www.linkedin.com/posts/karen-mannheim_en-demasiados-proyectos-la-iluminaci%C3%B3n-sigue-activity-7367225955846729729-jvUQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAphD7cB052SAtGH6SLA5tUOc-c8LYjc1bk', title: 'Lighting design at PEZET' },
    { image: linkedinPost03, url: 'https://www.linkedin.com/posts/karen-mannheim_ramsa-activity-7363957075065872385-WS6x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAphD7cB052SAtGH6SLA5tUOc-c8LYjc1bk', title: 'Designing for RAMSA' },
    { image: linkedinPost04, url: 'https://www.linkedin.com/posts/karen-mannheim_lightingdesign-pezet3-ramsa-activity-7330283319571460096-04bu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAphD7cB052SAtGH6SLA5tUOc-c8LYjc1bk', title: 'PEZET 3 project reveal' }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* BREADCRUMB & BACK LINK */}
      <section 
        className="py-6 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <Link
          to="/clients/karen-mannheim#projects"
          className="inline-flex items-center gap-2 transition-colors duration-300 group"
          style={{ fontSize: '14px', color: '#3D3835' }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>

      {/* HERO SECTION */}
      <section 
        className="relative flex items-end"
        style={{
          height: '60vh',
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${pezetHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-10 md:px-20 pb-12">
          <h1 
            className="font-bold mb-2"
            style={{ 
              fontSize: 'clamp(38px, 5vw, 52px)',
              color: '#FDFBF7',
              lineHeight: 1.2
            }}
          >
            PEZET
          </h1>
          <p 
            style={{ 
              fontSize: '18px',
              color: '#FDFBF7',
              opacity: 0.8
            }}
          >
            Lima, Peru · 2020-2023
          </p>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[800px] mx-auto space-y-10">
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Three residential buildings facing Lima Golf Club in San Isidro. Pezet 1 (2018), Pezet 2 (2022), Pezet 3 (2025).
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Robert A.M. Stern Architects—the same firm that designed 15 Central Park West, Four Seasons New York, Harvard Law School, the George W. Bush Presidential Center.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            These projects happened in Peru, before TRAZZO expanded to Miami in 2020. But they became proof of what Karen could do at the highest level.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            RAMSA doesn't follow trends. They design buildings that last decades. Karen designed the lighting for all three Pezet buildings over seven years. Her job: make sure what works during the day still works at night. That stone, glass, and bronze feel right after dark.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            When we started working with Karen in 2021, she was scaling to the US. Pezet became part of the story we told Miami developers: here's what thirty years in Peru looks like when you partner with world-class architecture firms.
          </p>
        </div>
      </section>

      {/* IMAGE/VIDEO GALLERY */}
      <section 
        className="pb-20 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Full width context skyline */}
          <img
            src={galleryItems[0].src}
            alt={galleryItems[0].caption}
            className="w-full"
            loading="lazy"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
            }}
          />
          
          {/* Two entrance facades side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].caption}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
              }}
            />
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].caption}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
              }}
            />
          </div>
          
          {/* Full width exterior with pool */}
          <img
            src={galleryItems[3].src}
            alt={galleryItems[3].caption}
            className="w-full"
            loading="lazy"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
            }}
          />
          
          {/* Three interior/detail shots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.slice(4, 7).map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)',
                  aspectRatio: '4/5'
                }}
              />
            ))}
          </div>

          {/* Final entrance facade */}
          <img
            src={galleryItems[7].src}
            alt={galleryItems[7].caption}
            className="w-full"
            loading="lazy"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
            }}
          />
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[750px] mx-auto">
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
          
          <div className="space-y-6">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Karen had the projects. She had the portfolio. What she didn't have: a way to show Miami developers what working with RAMSA meant.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Developers in Florida didn't know TRAZZO. They hadn't walked through Pezet 1, 2, or 3. They couldn't see how Karen thinks about lighting at that level.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We needed to translate these projects—and thirty years of others—into content that would build credibility in a market where she had zero presence.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Not portfolio documentation. A story that showed what RAMSA expects from partners. What lighting at that caliber requires.
            </p>
          </div>
        </div>
      </section>
      
      {/* HOW WE TOLD THIS STORY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[800px] mx-auto">
          <p 
            className="mb-6"
            style={{
              fontSize: '12px',
              color: '#FF2E63',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700
            }}
          >
            How we told this story
          </p>
          
          <div className="space-y-10">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We framed Pezet around partnership. What does it take to work with Robert A.M. Stern Architects three times over seven years?
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>The content strategy:</strong> We showed Karen's process. Visiting sites at different times of day. Understanding how stone, glass, and bronze behave after dark. Designing for decades, not just opening day. Not "TRAZZO did great work in Peru." Instead: Here's what world-class architecture requires. Here's what Karen brings to projects at RAMSA's level.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Pitch decks:</strong> First slide after intro. "TRAZZO: Lighting partner to Robert A.M. Stern Architects." Developers who know 15 Central Park West, Four Seasons New York, Harvard Law School understand immediately what that means.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Conference presentations:</strong> The RAMSA partnership establishes authority before Karen says a word. Not "here's my thirty years of experience." Here's who trusts my work. RAMSA came back three times.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Educational content:</strong> Posts that explained what RAMSA-level projects require. "What does Robert A.M. Stern Architects expect from lighting partners?" "How buildings like 15 Central Park West think about permanence, not trends." Show the standard, not the ego.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Partner conversations:</strong> With developers, architects, design studios—the RAMSA name is shared language. They know Four Seasons New York. They know 15 CPW. They know the Bush Center. They know what it takes to work at that level. Saying "RAMSA partnership" does the translation work instantly.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Repetition as strategy:</strong> We didn't mention RAMSA once. We mentioned it everywhere. Every pitch. Every post. Every presentation. Every conversation. Every email signature.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Brand equity doesn't transfer through a single mention. It transfers through pattern recognition. When people see "RAMSA partnership" five times across different contexts—pitch deck, then LinkedIn post, then conference bio, then partner introduction—it stops being a credential. It becomes how they remember Karen.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Not "the lighting designer from Peru." "RAMSA's lighting partner."
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              This positioned Karen for Miami. For developers who recognize names like 15 Central Park West. Who understand that buildings at that level need partners who think about permanence. The Pezet content helped open doors in Florida. Then the UAE. Then beyond.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>What this does for revenue:</strong> Developers who recognize RAMSA operate at a certain quality and budget level.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The RAMSA association doesn't just open doors, it opens the right doors. The ones where Karen's expertise makes economic sense. Where her pricing isn't questioned because the benchmark is already set.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Repetition creates velocity. Less time explaining credibility. More time closing projects that match the level she's built for.
            </p>
          </div>
        </div>
      </section>

      {/* THE WORK IN ACTION */}
      <section 
        className="py-20 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Section Title */}
          <h2 
            className="text-center mb-12 md:mb-16"
            style={{ 
              fontSize: 'clamp(24px, 3vw, 28px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            The work in action
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
            {[
              { title: 'Common Areas at PEZET 2', description: 'Designed by RAMSA Architects, built by Grupo ACM, lighting by TRAZZO.' },
              { title: 'Coming Soon', description: 'More video content coming soon' },
              { title: 'Coming Soon', description: 'More video content coming soon' },
              { title: 'Coming Soon', description: 'More video content coming soon' },
              { title: 'Coming Soon', description: 'More video content coming soon' },
              { title: 'Coming Soon', description: 'More video content coming soon' }
            ].map((video, index) => (
              <div key={index}>
                {index === 0 ? (
                  // Real video card
                  <div
                    className="transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#FDFBF7',
                      borderRadius: '12px',
                      boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* YouTube Embed */}
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.youtube.com/embed/oGu5hi3J1IQ?controls=1&modestbranding=1&rel=0"
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none'
                        }}
                      />
                    </div>
                    
                    {/* Video Info */}
                    <div style={{ padding: '20px 24px', backgroundColor: '#FDFBF7' }}>
                      <h3 style={{ 
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#3D3835',
                        marginBottom: '8px'
                      }}>
                        {video.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#3D3835',
                        opacity: 0.8,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {video.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Placeholder card
                  <div
                    style={{
                      backgroundColor: '#F5F1E8',
                      borderRadius: '12px',
                      boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)',
                      overflow: 'hidden',
                      cursor: 'default'
                    }}
                  >
                    {/* 16:9 Aspect Ratio Container */}
                    <div style={{ 
                      position: 'relative', 
                      paddingBottom: '56.25%', 
                      height: 0,
                      backgroundColor: '#F5F1E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px'
                      }}>
                        {/* Play Icon */}
                        <svg 
                          width="64" 
                          height="64" 
                          viewBox="0 0 64 64" 
                          fill="none"
                          style={{ opacity: 0.3 }}
                        >
                          <circle cx="32" cy="32" r="32" fill="#3D3835" opacity="0.1" />
                          <path 
                            d="M26 20L44 32L26 44V20Z" 
                            fill="#3D3835"
                          />
                        </svg>
                        
                        {/* Dots */}
                        <div style={{
                          display: 'flex',
                          gap: '8px',
                          alignItems: 'center'
                        }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#3D3835',
                            opacity: 0.3
                          }} />
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#3D3835',
                            opacity: 0.3
                          }} />
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#3D3835',
                            opacity: 0.3
                          }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Placeholder Info */}
                    <div style={{ padding: '20px 24px', backgroundColor: '#F5F1E8' }}>
                      <h3 style={{ 
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#3D3835',
                        marginBottom: '8px',
                        opacity: 0.5
                      }}>
                        {video.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#3D3835',
                        opacity: 0.4
                      }}>
                        {video.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Divider - 3 Red Dots */}
          <div className="flex justify-center items-center gap-3 my-16 md:my-20">
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FF2E63'
            }} />
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FF2E63'
            }} />
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FF2E63'
            }} />
          </div>

          {/* LinkedIn Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {linkedinPosts.map((post, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px',
                  border: '1px solid #D5CDC1',
                  borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)'
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full mb-4"
                  loading="lazy"
                  style={{ 
                    borderRadius: '4px'
                  }}
                />
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center transition-colors duration-300 hover:underline"
                  style={{
                    fontSize: '14px',
                    color: '#3D3835'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF2E63'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3D3835'}
                >
                  View on LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK TO KAREN'S STORY */}
      <section 
        className="py-20 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <Link
          to="/clients/karen-mannheim#metrics"
          className="inline-flex items-center gap-2 transition-colors duration-300 group"
          style={{ fontSize: '18px', color: '#3D3835', fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>
    </div>
  );
};

export default KarenPezetProject;

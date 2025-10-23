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
    { image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop', title: 'How light creates presence at night' },
    { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=800&fit=crop', title: 'PEZET: Architecture as urban sculpture' },
    { image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=800&fit=crop', title: 'Why residential towers need to breathe' }
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
            Three towers facing Lima Golf Club in San Isidro. Robert A.M. Stern Architects—the same firm that designed 15 Central Park West, Harvard Law School, the George W. Bush Presidential Center.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            This project happened in Peru, before TRAZZO expanded to Miami. But it became proof of what Karen could do at the highest level.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            RAMSA doesn't follow trends. They design buildings that last decades. Karen designed the lighting. Her job: make sure what works during the day still works at night. That stone, glass, and bronze feel right after dark.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            When we started working with Karen in 2021, she was ready to expand to the US. Pezet became part of the story we told Miami developers: here's what thirty years in Peru looks like when you partner with world-class architecture firms.
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
              Karen had the project. She had the portfolio. What she didn't have: a way to show Miami developers what working with RAMSA meant.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Developers in Florida didn't know TRAZZO. They hadn't walked through Pezet. They couldn't see how Karen thinks about lighting at that level.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We needed to translate this project—and thirty years of others—into content that would build credibility in a market where she had zero presence.
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
              We framed Pezet around partnership. What does it take to work with Robert A.M. Stern Architects?
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The content showed Karen's process. Visiting sites at different times of day. Understanding materials. Designing for decades, not just opening day.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Not "TRAZZO did great work in Peru." Instead: Here's what world-class architecture requires. Here's what Karen brings to projects at RAMSA's level.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              This positioned her for Miami. For developers who recognize names like 15 Central Park West. Who understand that buildings at that level need partners who think about permanence.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The Pezet content helped open doors in Florida. Then the UAE. Then beyond.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN POST EXAMPLES */}
      <section 
        className="py-16 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h3 
            className="mb-6 text-center"
            style={{ 
              fontSize: 'clamp(24px, 3vw, 28px)',
              color: '#3D3835',
              fontWeight: 700
            }}
          >
            Content examples from this project
          </h3>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linkedinPosts.map((post, index) => (
              <div 
                key={index}
                className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D5CBC1',
                  borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)',
                  padding: '16px'
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full"
                  loading="lazy"
                  style={{ 
                    aspectRatio: '1/1.3',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
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

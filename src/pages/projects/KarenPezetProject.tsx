import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const KarenPezetProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop', caption: 'PEZET tower at dusk' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1420&fit=crop', caption: 'Vertical illumination detail' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=1420&fit=crop', caption: 'Interior lighting layering' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=900&fit=crop', caption: 'Pacific ocean view at night' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=900&fit=crop', caption: 'Lobby lighting atmosphere' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=900&fit=crop', caption: 'Evening glow effect' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&h=900&fit=crop', caption: 'Architectural detail' }
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
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2000&h=1200&fit=crop)',
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
            Lima, Peru · 2023
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
            Lima's most exclusive residential tower, designed with RAMSA Architects. PEZET sits at the edge of the Pacific, visible from across the city when the sun sets.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Karen was brought in to design lighting that would make the building a presence—not just functional, but architectural. The challenge: translate that precision into content that would show developers across Latin America what she understands about light as structure.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            We didn't show product. We showed atmosphere. How a building breathes at night. How light can make glass and concrete feel warm. How Karen thinks about visibility, not just illumination.
          </p>
        </div>
      </section>

      {/* IMAGE/VIDEO GALLERY */}
      <section 
        className="pb-20 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Full width horizontal */}
          <img
            src={galleryItems[0].src}
            alt={galleryItems[0].caption}
            className="w-full"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
            }}
          />
          
          {/* Two verticals side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].caption}
              className="w-full"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)',
                aspectRatio: '9/16',
                objectFit: 'cover'
              }}
            />
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].caption}
              className="w-full"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)',
                aspectRatio: '9/16',
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* Full width horizontal */}
          <img
            src={galleryItems[3].src}
            alt={galleryItems[3].caption}
            className="w-full"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)'
            }}
          />
          
          {/* Three squares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.slice(4, 7).map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.caption}
                className="w-full"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)',
                  aspectRatio: '1/1',
                  objectFit: 'cover'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE COMMUNICATED IT */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
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
              We built the narrative around visibility as architecture. Not "here's what we installed," but "here's what PEZET becomes after dark."
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The content showed Karen's process: site visits, understanding the building's relationship to the ocean, designing for how light moves across glass at different hours. We positioned her as someone who thinks about buildings as living structures, not static objects.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The posts weren't promotional. They were observational. "How light creates presence." "Why residential towers need to breathe." "What architects miss about nighttime visibility." This positioned Karen for high-rise projects across Latin America—developers who understood buildings as urban sculpture, not just construction.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN POST EXAMPLES */}
      <section 
        className="py-16 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h3 
            className="mb-16 text-center"
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
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D5CBC1',
                  borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full"
                  style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                />
                <div style={{ padding: '16px' }}>
                  <p style={{ 
                    fontSize: '15px',
                    color: '#3D3835',
                    fontWeight: 600,
                    lineHeight: 1.5
                  }}>
                    {post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK TO KAREN'S STORY */}
      <section 
        className="py-20 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#E8DED1' }}
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

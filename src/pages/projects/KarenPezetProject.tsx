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
            Three towers face Lima Golf Club in San Isidro. Pezet 1, Pezet 2, Pezet 3.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            The architecture: Robert A.M. Stern Architects. The same firm behind 15 Central Park West—the building that redefined luxury residential in Manhattan. The same firm that designed Harvard Law School, the George W. Bush Presidential Center, the Comcast Center in Philadelphia. Buildings that don't chase trends. Buildings that understand permanence.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            RAMSA brought that sensibility to Lima. Not copying New York. Translating it—reinterpreting early 20th-century sophistication for how Lima lives today.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Karen was brought in to design the lighting. Not to decorate RAMSA's architecture. To complete it. To make sure that what works during the day still works at night. That the materials—stone, glass, bronze—still breathe after dark. That the buildings create presence on Lima's skyline without shouting.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            This is what thirty years looks like when it partners with firms that think in decades, not development cycles.
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
              We built the narrative around what it means to partner with firms like RAMSA.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Not "TRAZZO lit the Pezet towers." That's project documentation. We framed it as: What does Robert A.M. Stern Architects expect from a lighting partner? What does it take to work on buildings that sit next to their Harvard, Yale, and 15 Central Park West projects?
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The content showed Karen's process—not as promotion, but as observation. How she visits sites at different times of day to understand how Lima's coastal light behaves. How she designs for materials that will age over decades. How lighting at this caliber isn't about fixtures—it's about understanding architecture as cultural practice, as urban presence, as something that needs to feel right long after opening day.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We didn't say "TRAZZO works with world-class firms." We showed what that looks like. The rigor. The precision. The thinking in decades, not development cycles.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              This positioned Karen for conversations with high-rise residential developers across Latin America and beyond—developers who understood that buildings at this level require partners who think about permanence, not just project timelines. The kind of developers who know what 15 Central Park West means. Who understand why RAMSA's name matters.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN POST EXAMPLES */}
      <section 
        className="py-16 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
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
          
          <p 
            className="text-center mx-auto mb-16"
            style={{
              fontSize: '16px',
              fontStyle: 'italic',
              color: '#3D3835',
              opacity: 0.7,
              maxWidth: '700px',
              lineHeight: 1.7
            }}
          >
            Posts that educated the market about lighting as architecture, using RAMSA partnership as proof of caliber without saying it.
          </p>
          
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
          
          <p 
            className="text-center mx-auto mt-16"
            style={{
              fontSize: '16px',
              fontStyle: 'italic',
              color: '#3D3835',
              opacity: 0.7,
              maxWidth: '800px',
              lineHeight: 1.7
            }}
          >
            Each post was designed to educate developers and architects about what RAMSA-level projects require—not by saying "hire us," but by showing how Karen thinks about buildings that need to work for decades, not just development cycles.
          </p>
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

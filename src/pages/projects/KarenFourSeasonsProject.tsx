import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const KarenFourSeasonsProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&h=900&fit=crop', caption: 'Penthouse living space' },
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1420&fit=crop', caption: 'Floor-to-ceiling windows' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1420&fit=crop', caption: 'Evening ambiance' },
    { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&h=900&fit=crop', caption: 'Miami skyline view' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=900&fit=crop', caption: 'Dining area lighting' },
    { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&h=900&fit=crop', caption: 'Master bedroom' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&h=900&fit=crop', caption: 'Kitchen detail' }
  ];

  const linkedinPosts = [
    { image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop', title: 'Light that adapts to every moment' },
    { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=800&fit=crop', title: 'From sunrise to entertaining after dark' }
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

      {/* HERO */}
      <section 
        className="relative flex items-end"
        style={{
          height: '60vh',
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2000&h=1200&fit=crop)',
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
            Four Seasons Penthouse
          </h1>
          <p style={{ fontSize: '18px', color: '#FDFBF7', opacity: 0.8 }}>
            Miami, Florida · 2022
          </p>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[800px] mx-auto space-y-10">
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            A penthouse where light doesn't just fill rooms—it shapes how each moment feels. From sunrise coffee to entertaining guests after dark, every space needed to breathe differently.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            Karen designed a layered lighting system that adapts. Floor-to-ceiling windows bring Miami's light in during the day. At night, the system responds—warm for intimacy, dynamic for entertaining, subtle for winding down.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            We showed how she thinks about light as experience design. Not switches on walls, but environments that shift with life. The content positioned her for high-end residential clients who understand their space should feel as sophisticated as it looks.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section 
        className="pb-20 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          <img src={galleryItems[0].src} alt={galleryItems[0].caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.slice(1, 3).map((item, i) => (
              <img key={i} src={item.src} alt={item.caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)', aspectRatio: '9/16', objectFit: 'cover' }} />
            ))}
          </div>
          
          <img src={galleryItems[3].src} alt={galleryItems[3].caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.slice(4).map((item, i) => (
              <img key={i} src={item.src} alt={item.caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)', aspectRatio: '1/1', objectFit: 'cover' }} />
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
          <p className="mb-6" style={{ fontSize: '12px', color: '#FF2E63', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
            How we told this story
          </p>
          
          <div className="space-y-10">
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The narrative was about adaptability. How Karen designs lighting systems that respond to life, not just architecture. We showed the penthouse transitioning through the day—morning light through floor-to-ceiling windows, afternoon warmth, evening sophistication.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Content focused on the thinking behind layered lighting. Why dimming isn't enough. How color temperature affects mood. Why luxury means flexibility, not just fixtures. Karen's expertise became accessible—technical enough to establish authority, human enough to resonate with clients choosing their dream space.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN POSTS */}
      <section 
        className="py-16 md:py-24 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h3 className="mb-16 text-center" style={{ fontSize: 'clamp(24px, 3vw, 28px)', color: '#3D3835', fontWeight: 700 }}>
            Content examples from this project
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {linkedinPosts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5CBC1', borderRadius: '8px', boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} className="w-full" style={{ aspectRatio: '4/5', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <p style={{ fontSize: '15px', color: '#3D3835', fontWeight: 600, lineHeight: 1.5 }}>{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section 
        className="py-20 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#E8DED1' }}
      >
        <Link to="/clients/karen-mannheim#metrics" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '18px', color: '#3D3835', fontWeight: 600 }}>
          <ArrowLeft className="w-5 h-5 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>
    </div>
  );
};

export default KarenFourSeasonsProject;

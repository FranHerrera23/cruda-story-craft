import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const KarenSaadiyatProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=900&fit=crop', caption: 'Saadiyat Nights festival' },
    { src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=1420&fit=crop', caption: 'Stage lighting design' },
    { src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=1420&fit=crop', caption: 'Atmospheric lighting' },
    { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&h=900&fit=crop', caption: 'Concert atmosphere' },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&h=900&fit=crop', caption: 'Venue lighting' },
    { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&h=900&fit=crop', caption: 'Crowd ambiance' },
    { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&h=900&fit=crop', caption: 'Evening setup' }
  ];

  const linkedinPosts = [
    { image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop', title: 'From Lima to Abu Dhabi: When work travels' },
    { image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop', title: 'Lighting global performances' },
    { image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=800&fit=crop', title: 'How content creates belief remotely' }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* BREADCRUMB */}
      <section className="py-6 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <Link to="/clients/karen-mannheim#projects" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '14px', color: '#3D3835' }}>
          <ArrowLeft className="w-4 h-4 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>

      {/* HERO */}
      <section 
        className="relative flex items-end"
        style={{
          height: '60vh',
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=2000&h=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-10 md:px-20 pb-12">
          <h1 className="font-bold mb-2" style={{ fontSize: 'clamp(38px, 5vw, 52px)', color: '#FDFBF7', lineHeight: 1.2 }}>
            Saadiyat Nights
          </h1>
          <p style={{ fontSize: '18px', color: '#FDFBF7', opacity: 0.8 }}>
            Abu Dhabi, UAE · 2023
          </p>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section className="py-24 md:py-32 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[800px] mx-auto space-y-10">
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            A music festival hosting global stars like Andrea Bocelli, Sting, Jennifer Lopez, and Christina Aguilera. Karen had never met the client in person. They found her through content.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            This was the moment the strategy became undeniable. A high-profile international project—not from referrals, not from pitching, but from recognition that traveled. The client understood her approach to lighting before the first call. The content had already created belief.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            We documented the process: designing for outdoor performances, managing light across multiple stages, creating atmosphere that complements global talent without overpowering it. This project showed developers and event organizers worldwide that Karen's expertise scales—from intimate residences to large-scale international productions.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-20 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
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

      {/* HOW WE COMMUNICATED */}
      <section className="py-24 md:py-32 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[800px] mx-auto">
          <p className="mb-6" style={{ fontSize: '12px', color: '#FF2E63', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
            How we told this story
          </p>
          
          <div className="space-y-10">
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              This was proof that the strategy worked. We didn't need to say "content leads to opportunities." The story told itself: client in Abu Dhabi, never met Karen, hired her based on what they saw online.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              We shared the project as a case study in how mastery travels when it's communicated clearly. Behind-the-scenes of the design process, the challenges of outdoor lighting for world-class performances, Karen's approach to creating atmosphere that elevates talent without competing with it.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The content attracted similar clients—event producers, luxury venues, international developers who understood that lighting at this level is choreography, not just installation. Karen's reach expanded beyond residential and hospitality into entertainment and cultural spaces.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN POSTS */}
      <section className="py-16 md:py-24 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[1000px] mx-auto">
          <h3 className="mb-16 text-center" style={{ fontSize: 'clamp(24px, 3vw, 28px)', color: '#3D3835', fontWeight: 700 }}>
            Content examples from this project
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 px-10 md:px-20 text-center" style={{ backgroundColor: '#E8DED1' }}>
        <Link to="/clients/karen-mannheim#metrics" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '18px', color: '#3D3835', fontWeight: 600 }}>
          <ArrowLeft className="w-5 h-5 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>
    </div>
  );
};

export default KarenSaadiyatProject;

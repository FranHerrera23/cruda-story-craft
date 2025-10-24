import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import saadiyatHospitalityArea from "@/assets/saadiyat-hospitality-area.jpg";
import saadiyatKarenSpeaking from "@/assets/saadiyat-karen-speaking.jpg";
import saadiyatPreFunction from "@/assets/saadiyat-pre-function.jpg";
import saadiyatVenueNight from "@/assets/saadiyat-venue-night.jpg";
import saadiyatLinkedin01 from "@/assets/saadiyat-linkedin-01.png";
import saadiyatLinkedin02 from "@/assets/saadiyat-linkedin-02.png";

const KarenSaadiyatProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { src: saadiyatHospitalityArea, caption: 'Premium hospitality area with crowd at night' },
    { src: saadiyatKarenSpeaking, caption: 'Karen presenting at the venue' },
    { src: saadiyatPreFunction, caption: 'Pre-function area lighting design' },
    { src: saadiyatVenueNight, caption: 'Festival venue at night' }
  ];

  const videos = [
    { title: 'Saadiyat Nights Festival Highlights', description: 'Behind the scenes of Abu Dhabi\'s premier music festival', url: 'https://www.youtube.com/embed/p-xBGkWSHmw?controls=1&modestbranding=1&rel=0', type: 'youtube' },
    { title: 'Saadiyat Nights Media Coverage', description: 'Official festival media highlights', url: 'https://www.youtube.com/embed/xUugbX5s8Os?controls=1&modestbranding=1&rel=0', type: 'youtube' },
    { title: 'Karen Mannheim at Saadiyat', description: 'Behind the scenes with Karen at the festival', url: 'https://www.instagram.com/reel/DGTq9xQux1M/embed/', type: 'instagram' }
  ];

  const linkedinPosts = [
    { image: saadiyatLinkedin01, title: 'Saadiyat Nights Festival - Karen Interview', url: 'https://www.linkedin.com/posts/karen-mannheim_saadiyatnights-abudhabi-louvreabudhabiy-activity-7260282051994554368-QHmD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAphD7cB052SAtGH6SLA5tUOc-c8LYjc1bk' },
    { image: saadiyatLinkedin02, title: 'Mariah Carey Performance Announcement', url: 'https://www.linkedin.com/posts/karen-mannheim_iluminaciaejn-festival-mariahcarey-activity-7143601012061192192-Vj17?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAphD7cB052SAtGH6SLA5tUOc-c8LYjc1bk' }
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
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${saadiyatHospitalityArea})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-10 md:px-20 pb-12">
          <h1 className="font-bold mb-2" style={{ fontSize: 'clamp(38px, 5vw, 52px)', color: '#FDFBF7', lineHeight: 1.2 }}>
            SAADIYAT MUSIC FESTIVAL
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
            Saadiyat Nights. Abu Dhabi's most ambitious cultural initiative since 2023. Mariah Carey, Sting, Andrea Bocelli, John Legend, Ricky Martin, Hans Zimmer, Jennifer Lopez, Lewis Capaldi, Leningrad. Thousands of people. Premium hospitality. Global reach.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            Karen's work here wasn't the stage. That was handled.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            This was everything else—the walkways, the hospitality areas, the access points. The infrastructure that makes thousands of people feel like they're part of something exceptional, not just attending a concert.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            A UAE partner had been following Karen's work. They reached out. By the time they met, they already understood what she brought to projects. This was Karen's first work in the Middle East.
          </p>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-24 md:py-32 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
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
              THE CHALLENGE
            </p>
          </div>
          
          <div className="space-y-6">
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Karen had lit luxury residences, showrooms, hospitality spaces across Peru and the US. But a festival at this scale, in the Middle East, with this level of logistical complexity—that was new territory.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              This wasn't a residential project where you control every detail. This was field execution. Tight timelines. Coordination with engineers and constructors she'd never worked with before. Thousands of people moving through spaces that needed to feel seamless.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The lighting couldn't compete with the stage. It couldn't distract. It had to guide, enhance, create atmosphere without announcing itself. Functional precision with emotional intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE/VIDEO GALLERY */}
      <section className="pb-20 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)',
                  aspectRatio: index < 3 ? '16/9' : '1/1'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE TOLD THIS STORY */}
      <section className="py-24 md:py-32 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[800px] mx-auto">
          <p className="mb-6" style={{ fontSize: '12px', color: '#FF2E63', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
            HOW WE TOLD THIS STORY
          </p>
          
          <div className="space-y-10">
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              We told Saadiyat as a story about complexity. Not stage lighting—that wasn't Karen's work. The infrastructure around it. How you move thousands of people through premium hospitality spaces where every detail matters, but nothing should feel forced.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The content showed field execution, not showroom perfection. Coordinating across time zones. Managing logistics with teams who'd never worked with TRAZZO. Lighting that guides without announcing itself.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              We positioned this as Karen's first work in the Middle East. A festival at scale she'd never navigated before. Proof that expertise translates across contexts—from Lima penthouses to Abu Dhabi festivals—when you understand light as experience, not installation.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              This opened conversations with hospitality groups and developers who work at this level of scale and complexity. Spain, Hawaii, beyond. Projects that require operational depth, not just design sensibility.
            </p>
          </div>
        </div>
      </section>

      {/* THE WORK IN ACTION */}
      <section className="py-20 md:py-24 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Section Title */}
          <h2 className="text-center mb-12 md:mb-16" style={{ fontSize: 'clamp(24px, 3vw, 28px)', color: '#3D3835', fontWeight: 700 }}>
            The work in action
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
            {videos.map((video, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#FDFBF7',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)',
                  overflow: 'hidden'
                }}
              >
                {/* Video Embed */}
                <div style={{ position: 'relative', paddingBottom: video.type === 'instagram' ? '177.78%' : '56.25%', height: 0 }}>
                  <iframe
                    src={video.url}
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
            ))}
          </div>

          {/* Visual Divider - 3 Red Dots */}
          <div className="flex justify-center items-center gap-3 my-16 md:my-20">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
          </div>

          {/* LinkedIn Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
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
                  style={{ borderRadius: '4px' }}
                />
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center transition-colors duration-300 hover:underline"
                  style={{ fontSize: '14px', color: '#3D3835' }}
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

      {/* BACK LINK */}
      <section className="py-20 px-10 md:px-20 text-center" style={{ backgroundColor: '#F5F1E8' }}>
        <Link to="/clients/karen-mannheim#metrics" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '18px', color: '#3D3835', fontWeight: 600 }}>
          <ArrowLeft className="w-5 h-5 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>
    </div>
  );
};

export default KarenSaadiyatProject;
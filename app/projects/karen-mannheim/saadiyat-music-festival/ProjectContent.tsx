'use client'

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import saadiyatHospitalityArea from "@/assets/saadiyat-hospitality-area.jpg";
import saadiyatKarenSpeaking from "@/assets/saadiyat-karen-speaking.jpg";
import saadiyatPreFunction from "@/assets/saadiyat-pre-function.jpg";
import saadiyatVenueNight from "@/assets/saadiyat-venue-night.jpg";
import saadiyatLinkedin01 from "@/assets/saadiyat-linkedin-01.png";
import saadiyatLinkedin02 from "@/assets/saadiyat-linkedin-02.png";

const KarenSaadiyatProject = () => {
  const videos = [
    { title: 'Festival Highlights', description: 'Behind the scenes of Abu Dhabi\'s premier music festival', url: 'https://www.youtube.com/embed/p-xBGkWSHmw?controls=1&modestbranding=1&rel=0' },
    { title: 'Media Coverage', description: 'Official festival media highlights', url: 'https://www.youtube.com/embed/xUugbX5s8Os?controls=1&modestbranding=1&rel=0' }
  ];

  const linkedinPosts = [
    { image: saadiyatLinkedin01, title: 'Saadiyat Nights Festival', url: 'https://www.linkedin.com/posts/karen-mannheim_saadiyatnights-abudhabi-louvreabudhabiy-activity-7260282051994554368-QHmD' },
    { image: saadiyatLinkedin02, title: 'Mariah Carey Announcement', url: 'https://www.linkedin.com/posts/karen-mannheim_iluminaciaejn-festival-mariahcarey-activity-7143601012061192192-Vj17' }
  ];

  const strategyCards = [
    { number: '01', title: 'International positioning', description: 'UAE as proof of global reach beyond Peru and Miami.' },
    { number: '02', title: 'Celebrity association', description: 'J.Lo, Christina Aguilera, Mariah Carey — names that travel.' },
    { number: '03', title: 'Scale demonstration', description: 'From residential to festival. Complexity at a new level.' },
    { number: '04', title: 'Content as door-opener', description: 'Partnership before pitch. They found Karen through content.' }
  ];

  const galleryImages = [
    { src: saadiyatHospitalityArea, caption: 'Premium hospitality area' },
    { src: saadiyatKarenSpeaking, caption: 'Karen presenting' },
    { src: saadiyatPreFunction, caption: 'Pre-function lighting' },
    { src: saadiyatVenueNight, caption: 'Festival venue at night' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* SECTION 1: HERO */}
      <section
        className="relative flex items-end"
        style={{
          height: '70vh',
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%), url(${saadiyatHospitalityArea.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-6 left-6 md:left-20">
          <Link href="/clients/karen-mannheim#projects" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '14px', color: '#FFFFFF' }}>
            <ArrowLeft className="w-4 h-4 group-hover:opacity-70" />
            <span className="group-hover:opacity-70">Back to Karen's Story</span>
          </Link>
        </div>

        <div className="px-6 md:px-20 pb-12">
          <h1 className="font-semibold mb-2" style={{ fontSize: 'clamp(42px, 6vw, 56px)', color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            SAADIYAT MUSIC FESTIVAL
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>
            Abu Dhabi, UAE · 2023
          </p>
        </div>
      </section>

      {/* SECTION 2: THE SNAPSHOT */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#FF2E63', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Project
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Saadiyat Music Festival. Abu Dhabi, UAE.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Jennifer Lopez, Christina Aguilera, Mariah Carey. The lighting design for an international festival that put TRAZZO on the global stage.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#FF2E63', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Challenge
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  The UAE partnership started with content, not cold outreach.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Karen's work was speaking to international audiences. Now she needed projects that matched the ambition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-BLEED IMAGE DIVIDER */}
      <section
        className="w-full"
        style={{ height: '50vh', backgroundImage: `url(${saadiyatVenueNight.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* SECTION 4: THE CONTENT IN ACTION */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.2 }}>
            The content in action
          </h2>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="overflow-hidden" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
                <div className="p-6">
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0A0A0A', marginBottom: '4px' }}>{video.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(10, 10, 10, 0.6)' }}>{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {linkedinPosts.map((post, index) => (
              <a key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="group block transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)', overflow: 'hidden' }}>
                <img src={post.image.src} alt={post.title} className="w-full" loading="lazy" />
                <div className="p-6">
                  <span className="text-sm font-medium" style={{ color: '#FF2E63' }}>View on LinkedIn →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE TOLD THIS STORY */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1000px] mx-auto">
          <p className="mb-6" style={{ fontSize: '13px', color: '#FF2E63', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            How we told this story
          </p>

          <p className="mb-12" style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A', maxWidth: '600px' }}>
            We told Saadiyat as a story about complexity. Field execution, not showroom perfection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyCards.map((card, index) => (
              <div key={index} style={{ backgroundColor: '#F5F1E8', padding: '32px', borderRadius: '4px' }}>
                <p style={{ fontSize: '14px', color: '#FF2E63', fontWeight: 600, marginBottom: '16px' }}>{card.number}</p>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0A0A0A', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(10, 10, 10, 0.6)' }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: IMAGE GALLERY */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-[1200px] mx-auto">
          <img src={galleryImages[0].src.src} alt={galleryImages[0].caption} className="w-full mb-8" style={{ borderRadius: '8px', aspectRatio: '16/9', objectFit: 'cover' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.slice(1, 4).map((img, index) => (
              <img key={index} src={img.src.src} alt={img.caption} className="w-full" style={{ borderRadius: '8px', aspectRatio: '4/3', objectFit: 'cover' }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-20 md:py-28 px-6 md:px-20 text-center" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.2 }}>
            See more of Karen's work
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/clients/karen-mannheim#projects" className="inline-block px-10 py-4 font-semibold transition-all duration-300 hover:opacity-90" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', borderRadius: '4px', fontSize: '16px' }}>
              ← Back to Karen's Page
            </Link>
            <Link href="https://calendly.com/cruda-intro/narrative-sparring-live-1" target="_blank" rel="noopener" className="inline-block px-10 py-4 font-semibold transition-all duration-300" style={{ backgroundColor: 'transparent', color: '#0A0A0A', borderRadius: '4px', fontSize: '16px', border: '2px solid #0A0A0A' }}>
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarenSaadiyatProject;

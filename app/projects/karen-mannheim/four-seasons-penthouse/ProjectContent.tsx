'use client'

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import fourSeasonsExterior from "@/assets/four-seasons-exterior.jpg";
import fourSeasonsBathroom from "@/assets/four-seasons-bathroom.jpg";
import fourSeasonsWineCellar from "@/assets/four-seasons-wine-cellar.jpg";
import fourSeasonsDining from "@/assets/four-seasons-dining.jpg";
import fourSeasonsLiving from "@/assets/four-seasons-living.jpg";
import fourSeasonsLounge from "@/assets/four-seasons-lounge.jpg";
import fourSeasonsLinkedIn01 from "@/assets/four-seasons-linkedin-01.png";
import fourSeasonsInstagramPost from "@/assets/four-seasons-instagram-post.png";

const KarenFourSeasonsProject = () => {
  const strategyCards = [
    { number: '01', title: 'Brand alignment', description: 'Four Seasons as quality signal. Instant credibility.' },
    { number: '02', title: 'US market proof', description: 'Miami credibility for international expansion.' },
    { number: '03', title: 'Premium positioning', description: '$13.5M as filter for right-fit clients.' },
    { number: '04', title: 'Lifestyle documentation', description: 'Spaces that feel right at every hour.' }
  ];

  const galleryImages = [
    { src: fourSeasonsLiving, caption: 'Living room with Miami skyline' },
    { src: fourSeasonsBathroom, caption: 'Master bathroom' },
    { src: fourSeasonsWineCellar, caption: 'Wine cellar' },
    { src: fourSeasonsDining, caption: 'Dining area' },
    { src: fourSeasonsLounge, caption: 'Lounge' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* SECTION 1: HERO */}
      <section
        className="relative flex items-end"
        style={{
          height: '70vh',
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%), url(${fourSeasonsLiving.src})`,
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
            FOUR SEASONS PENTHOUSE
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>
            Miami, Florida · $13.5M
          </p>
        </div>
      </section>

      {/* SECTION 2: THE SNAPSHOT */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#E8623A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Project
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Four Seasons Residences, Floor 66. Miami, Florida.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  A $13.5M home where lighting meets the standard the brand built globally.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#E8623A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Challenge
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Four Seasons is a global benchmark. The lighting had to match.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  This project proved Karen could deliver at the highest residential level in the US market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-BLEED IMAGE DIVIDER */}
      <section
        className="w-full"
        style={{ height: '50vh', backgroundImage: `url(${fourSeasonsExterior.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* SECTION 4: THE CONTENT IN ACTION */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="mb-12" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.2 }}>
            The content in action
          </h2>

          {/* Instagram Post */}
          <div className="max-w-[600px] mx-auto mb-12 text-center">
            <img
              src={fourSeasonsInstagramPost.src}
              alt="Four Seasons Penthouse Instagram post"
              className="w-full rounded-lg mb-6"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            />
            <a
              href="https://www.instagram.com/p/DKfa6ZgzlqC/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: '#E8623A', color: '#FFFFFF', padding: '12px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600 }}
            >
              View on Instagram →
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8623A' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8623A' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8623A' }} />
          </div>

          {/* LinkedIn Post */}
          <div className="max-w-[500px] mx-auto">
            <a
              href="https://www.linkedin.com/posts/karen-mannheim_lightingdesign-arquitectura-emprendimiento-activity-7302742140755869696-N277"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)', overflow: 'hidden' }}
            >
              <img src={fourSeasonsLinkedIn01.src} alt="LinkedIn post" className="w-full" loading="lazy" />
              <div className="p-6 text-center">
                <span className="text-sm font-medium" style={{ color: '#E8623A' }}>View on LinkedIn →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE TOLD THIS STORY */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1000px] mx-auto">
          <p className="mb-6" style={{ fontSize: '13px', color: '#E8623A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            How we told this story
          </p>

          <p className="mb-12" style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A', maxWidth: '600px' }}>
            We built the Four Seasons project into every touchpoint. The brand name does the credibility work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyCards.map((card, index) => (
              <div key={index} style={{ backgroundColor: '#F5F1E8', padding: '32px', borderRadius: '4px' }}>
                <p style={{ fontSize: '14px', color: '#E8623A', fontWeight: 600, marginBottom: '16px' }}>{card.number}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryImages.slice(1, 5).map((img, index) => (
              <img key={index} src={img.src.src} alt={img.caption} className="w-full" style={{ borderRadius: '8px', aspectRatio: '1/1', objectFit: 'cover' }} loading="lazy" />
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

export default KarenFourSeasonsProject;

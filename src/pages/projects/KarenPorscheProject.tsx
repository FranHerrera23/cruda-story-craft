import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import porscheExteriorNight from "@/assets/porsche-exterior-night.jpg";
import porscheRibbonCutting from "@/assets/porsche-ribbon-cutting.jpg";
import porscheLounge from "@/assets/porsche-lounge.jpg";
import porscheShowroom from "@/assets/porsche-showroom.jpg";
import porscheInstagramPost from "@/assets/porsche-instagram-post.png";

const KarenPorscheProject = () => {
  const strategyCards = [
    { number: '01', title: 'Global brand approval', description: 'Porsche Germany sign-off validates global standards.' },
    { number: '02', title: 'Retail expertise', description: 'Showroom lighting differs from residential.' },
    { number: '03', title: 'Brand standards', description: 'Meeting corporate requirements without compromise.' },
    { number: '04', title: 'Three-stage narrative', description: 'Announcement. Progress. Completion.' }
  ];

  const galleryImages = [
    { src: porscheExteriorNight, caption: 'Flagship exterior at night' },
    { src: porscheShowroom, caption: 'Showroom interior' },
    { src: porscheLounge, caption: 'Lounge area' },
    { src: porscheRibbonCutting, caption: 'Opening ceremony' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* SECTION 1: HERO */}
      <section 
        className="relative flex items-end"
        style={{
          height: '70vh',
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%), url(${porscheExteriorNight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-6 left-6 md:left-20">
          <Link to="/clients/karen-mannheim#projects" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '14px', color: '#FFFFFF' }}>
            <ArrowLeft className="w-4 h-4 group-hover:opacity-70" />
            <span className="group-hover:opacity-70">Back to Karen's Story</span>
          </Link>
        </div>
        
        <div className="px-6 md:px-20 pb-12">
          <h1 className="font-semibold mb-2" style={{ fontSize: 'clamp(42px, 6vw, 56px)', color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            PORSCHE FLAGSHIP
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>
            Lima, Perú · 2025
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
                  Porsche Flagship Peru. Design approved by Porsche Germany.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  A project at that level doesn't happen without proven capability.
                </p>
              </div>
            </div>
            
            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#FF2E63', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Challenge
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Porsche Germany has standards. They approve every detail.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  This project became proof that Karen could meet global luxury brand requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-BLEED IMAGE DIVIDER */}
      <section 
        className="w-full"
        style={{ height: '50vh', backgroundImage: `url(${porscheShowroom})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* SECTION 4: THE CONTENT IN ACTION */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.2 }}>
            The content in action
          </h2>

          {/* Video */}
          <div className="max-w-[800px] mx-auto mb-12">
            <div className="overflow-hidden" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/5KMVlfPMt3U"
                  title="Porsche Flagship - The Work That Travels"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <div className="p-6">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0A0A0A', marginBottom: '4px' }}>Porsche Flagship Peru</h3>
                <p style={{ fontSize: '14px', color: 'rgba(10, 10, 10, 0.6)' }}>Lighting 75 years of aspiration</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
          </div>

          {/* Instagram Post */}
          <div className="max-w-[500px] mx-auto">
            <a
              href="https://www.instagram.com/p/C_tFVPRuXs-/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)', overflow: 'hidden' }}
            >
              <img src={porscheInstagramPost} alt="Porsche Instagram post" className="w-full" loading="lazy" />
              <div className="p-6 text-center">
                <span className="text-sm font-medium" style={{ color: '#FF2E63' }}>View on Instagram →</span>
              </div>
            </a>
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
            We told this story in three acts. Announcement. Progress. Completion. Each one building the TRAZZO + Porsche association.
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
          <img src={galleryImages[0].src} alt={galleryImages[0].caption} className="w-full mb-8" style={{ borderRadius: '8px', aspectRatio: '16/9', objectFit: 'cover' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.slice(1, 4).map((img, index) => (
              <img key={index} src={img.src} alt={img.caption} className="w-full" style={{ borderRadius: '8px', aspectRatio: '4/3', objectFit: 'cover' }} loading="lazy" />
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
            <Link to="/clients/karen-mannheim#projects" className="inline-block px-10 py-4 font-semibold transition-all duration-300 hover:opacity-90" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', borderRadius: '4px', fontSize: '16px' }}>
              ← Back to Karen's Page
            </Link>
            <Link to="/book-call" className="inline-block px-10 py-4 font-semibold transition-all duration-300" style={{ backgroundColor: 'transparent', color: '#0A0A0A', borderRadius: '4px', fontSize: '16px', border: '2px solid #0A0A0A' }}>
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarenPorscheProject;

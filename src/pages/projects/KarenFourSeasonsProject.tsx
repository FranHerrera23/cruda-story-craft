import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import fourSeasonsExterior from "@/assets/four-seasons-exterior.jpg";
import fourSeasonsBathroom from "@/assets/four-seasons-bathroom.jpg";
import fourSeasonsWineCellar from "@/assets/four-seasons-wine-cellar.jpg";
import fourSeasonsDining from "@/assets/four-seasons-dining.jpg";
import fourSeasonsLiving from "@/assets/four-seasons-living.jpg";
import fourSeasonsLounge from "@/assets/four-seasons-lounge.jpg";

const KarenFourSeasonsProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { src: fourSeasonsExterior, caption: 'Four Seasons Residences exterior - floor 66' },
    { src: fourSeasonsBathroom, caption: 'Master bathroom lighting design' },
    { src: fourSeasonsWineCellar, caption: 'Wine cellar with custom lighting' },
    { src: fourSeasonsDining, caption: 'Dining and living area' },
    { src: fourSeasonsLiving, caption: 'Living room with Miami skyline views' },
    { src: fourSeasonsLounge, caption: 'Lounge area lighting' }
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
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${fourSeasonsLiving})`,
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
            FOUR SEASONS PENTHOUSE
          </h1>
          <p style={{ fontSize: '18px', color: '#FDFBF7', opacity: 0.8 }}>
            Miami, Florida · $13.5M
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
            Four Seasons Residences. Floor 66. Brickell, Miami. $13.5 million.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            Karen had the project. A penthouse in one of the world's most prestigious residential brands. Interior design by Adriana Hoyos Design Studio. Architecture by Mobius Architecture Group. Lighting that met Four Seasons standards.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            What Karen didn't have: a way to turn this into belief that travels.
          </p>

          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            We turned one project into a repeating proof point. Every pitch deck. Every email to developers. Every speaking opportunity. Every post. The Four Seasons project became shorthand for "TRAZZO works at the highest residential level globally." Not because we documented it. Because we made it impossible to ignore.
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
              Karen had worked on luxury residential for three decades. But "luxury residential in Peru" doesn't open doors in Miami the way "Four Seasons Residences" does.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Four Seasons isn't just a client. It's a credential. A brand that means something to developers in New York, London, Dubai. When you say "we lit a Four Seasons Residence," you're speaking a language international developers understand immediately.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Our challenge: turn this project into a communication asset that works everywhere. Not just beautiful photos for a portfolio. Content that positions TRAZZO at Four Seasons level—in every email, every pitch, every post, every conference.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Make the Four Seasons name do the credibility work so Karen doesn't have to explain her thirty years every time.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
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
                  aspectRatio: '4/3'
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
              We built the Four Seasons project into every touchpoint.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              <strong>Pitch decks:</strong> Lead with it. "TRAZZO's work includes Four Seasons Residences Miami." One line. Instant credibility with developers who recognize the brand.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              <strong>Email signatures:</strong> Not hidden in a portfolio. In the signature. Every email carries the Four Seasons credential.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              <strong>Speaking opportunities:</strong> When Karen presents at conferences, the Four Seasons project is proof of residential expertise at global luxury brand level. Not "here's what we did." Here's the standard we work at.
            </p>

            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              <strong>Social content:</strong> We created posts that educate about what Four Seasons-level residential requires. Not promotional. Educational. "What it takes to light a Four Seasons Residence." "Why lighting in branded residences isn't the same as unbranded luxury."
            </p>

            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              <strong>Partner conversations:</strong> When talking to design studios or developers, the Four Seasons name does the translation work. It's a shared language. They know what Four Seasons expects. They know TRAZZO met that standard.
            </p>

            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              We turned one project into a repeating signal: TRAZZO operates at the level of globally recognized luxury brands.
            </p>
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

export default KarenFourSeasonsProject;

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
            Brickell, Miami · 2024
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
            Four Seasons Residences. Floor 66. Brickell, Miami.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            Four Seasons doesn't just mean luxury hotels. Their residential towers are among the most prestigious addresses in the world. New York, London, Dubai, Miami. Buildings where every detail is scrutinized. Where the brand's reputation depends on perfection that residents live with every day.
          </p>
          
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            This penthouse: two units merged into one 4,470-square-foot residence. $13.5 million. The only one of its kind in the building. Interior design by Adriana Hoyos Design Studio. Architecture by Mobius Architecture Group.
          </p>

          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            Karen's work: lighting that meets Four Seasons standards. Where nothing announces itself, but everything feels right. A wine cellar that feels intimate. Living spaces that feel commanding without being cold. Bedrooms that help you rest, not just look impressive.
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
              Four Seasons residences aren't hotels. They're homes. But they carry the same expectations the brand built globally—precision, consistency, details that don't fail.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Karen had worked on luxury residential across Peru and Miami. But Four Seasons represented a different level of scrutiny. Architecture and interiors already exceptional. Her lighting needed to match that standard—elevate spaces without competing with them.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              This wasn't about showcasing technology or fixtures. It was about creating spaces that feel right at every hour. Morning light in the kitchen. Evening atmosphere in the living room. A bedroom that helps you sleep in a building where floor 66 means floor-to-ceiling glass and Miami's constant light.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The Four Seasons name means something. The lighting had to hold up to that.
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
              We framed this around the Four Seasons name. Not "TRAZZO lit a penthouse." But: what it means to work in a Four Seasons Residence. What that brand expects. Why lighting in a Four Seasons building isn't the same as lighting any other luxury residential.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The content showed Karen's approach to spaces where the brand's global reputation is at stake. Where design teams like Adriana Hoyos Design Studio and Mobius Architecture are already bringing world-class work—and lighting needs to match that level without competing.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              We positioned this as proof of expertise at the highest residential standard. Four Seasons residences in New York, London, Dubai, Miami—these aren't just addresses. They're benchmarks. Working at that level means understanding that lighting isn't about what you install. It's about how residents feel in spaces they live in every day.
            </p>
            
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              This opened conversations with developers and design teams who work with brands at this caliber. Who understand that when Four Seasons is on the building, every partner needs to deliver at that standard.
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

import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import porscheExteriorNight from "@/assets/porsche-exterior-night.jpg";
import porscheRibbonCutting from "@/assets/porsche-ribbon-cutting.jpg";
import porscheLounge from "@/assets/porsche-lounge.jpg";
import porscheShowroom from "@/assets/porsche-showroom.jpg";

const KarenPorscheProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${porscheExteriorNight})`,
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
            PORSCHE FLAGSHIP
          </h1>
          <p 
            style={{ 
              fontSize: '18px',
              color: '#FDFBF7',
              opacity: 0.8
            }}
          >
            Lima, Perú · 2025
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
            Porsche Flagship Peru. Lima, 2025. Design approved by Porsche Germany.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Porsche doesn't need introduction. Seventy-five years of engineering, legacy, aspiration. The brand people dream about owning before they can afford it.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            Karen won the bid in early 2024. Project completed July 2025. Porsche chose TRAZZO because of product quality, service standards, and reputation on luxury projects with international benchmarks.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            But winning the project and telling the story are different things. Before CRUDA, this would've been a cold "project completed" post like 99% of architecture and design studios do. A few photos. Maybe a caption. Done.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            We saw something else. Porsche doesn't just validate technical capability—it validates taste, understanding, aspiration. When you work with a brand at that level, the story isn't "we did lighting." The story is: we understand what Porsche means. What it represents. What people feel when they walk into that space.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.9,
            color: '#3D3835'
          }}>
            This became a three-stage narrative. Announcement. Progress. Completion. Each one building the association: TRAZZO + Porsche. Not just another project. A credential that travels.
          </p>
        </div>
      </section>

      {/* PROJECT IMAGES GRID */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#FDFBF7' }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <img 
            src={porscheShowroom}
            alt="Porsche showroom interior with vehicles"
            className="w-full h-auto"
            style={{ aspectRatio: '16/10', objectFit: 'cover' }}
          />
          <img 
            src={porscheLounge}
            alt="Porsche lounge area with warm lighting"
            className="w-full h-auto"
            style={{ aspectRatio: '16/10', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section style={{ backgroundColor: '#FDFBF7' }}>
        <img 
          src={porscheRibbonCutting}
          alt="Porsche flagship opening ceremony"
          className="w-full h-auto"
          style={{ maxHeight: '70vh', objectFit: 'cover' }}
        />
      </section>

      {/* THE CHALLENGE */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#E8DED1' }}
      >
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
              The Challenge
            </p>
          </div>
          
          <div className="space-y-6">
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Karen won the Porsche bid. Design approved by Germany. A project at that level doesn't happen without proven capability.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              But capability doesn't market itself. And a completed Porsche flagship—if communicated like every other project—becomes just another line in a portfolio.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The challenge: turn this project into a positioning tool. Not "TRAZZO completed Porsche lighting." Instead: TRAZZO operates at Porsche's level. TRAZZO understands what luxury automotive brands require. TRAZZO gets selected by clients who don't compromise.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We needed to build the story across three stages—announcement, progress, completion—so that by the time the project finished, the market already associated Karen with Porsche. Not retroactively. In real time.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              This wasn't documentation. This was brand building.
            </p>
          </div>
        </div>
      </section>
      
      {/* HOW WE TOLD THIS STORY */}
      <section 
        className="py-24 md:py-32 px-10 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
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
              We told this story in three acts. Each one building the association between TRAZZO and Porsche.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Stage 1: The Announcement (Early 2024)</strong>
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We framed the win around selection, not just execution. "TRAZZO selected to design lighting for Porsche Flagship Peru. Design approved by Porsche Germany."
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Not "we're excited to work on this project." Here's who chose us. Here's the standard we're held to. Porsche Germany doesn't approve designs that don't meet their level.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The announcement established credibility before a single light was installed.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Stage 2: In Progress (2024-2025)</strong>
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We showed the work. Behind the scenes. Testing light temperatures. Understanding how red stays red under different kelvin ranges. How white doesn't go cold. How curves and volumes need focal precision without distortion.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Not glamorous construction photos. The technical sophistication required to light a brand like Porsche. The layers: focal light for geometry, ambient light for atmosphere, strategic accents for rhythm.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We used Porsche's own language. <em>"Honestly, did you spend your youth dreaming about someday owning a Nissan or a Mitsubishi?"</em> That line says everything about what Porsche represents. Aspiration. Distinction. Legacy.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              Our content showed Karen understood that. She wasn't just lighting cars. She was illuminating 75 years of dreams.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Stage 3: Completion (July 2025)</strong>
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              We broke down the finished project. Not just beauty shots. The thinking. How we designed in layers so the space contains the vehicles without competing with them. How we adjusted color temperature in waiting areas to feel more human, more approachable.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The result: red stays red. White doesn't cool. No reflections distract. Good light doesn't announce itself—it transforms how everything else feels.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              But more importantly, by July 2025, the association was already built. TRAZZO + Porsche. Karen operates at that level. She understands what brands like Porsche require.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>Repetition across touchpoints:</strong> We didn't mention Porsche once. We mentioned it everywhere. LinkedIn posts. Conference presentations. Pitch decks. Partner conversations. Every mention reinforced the pairing.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              When developers or retail brands see "Porsche Flagship" in Karen's work, they understand immediately. She's been selected by clients who don't compromise. Who have Germany approving designs. Who operate at a standard most firms never reach.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              <strong>What this does for positioning:</strong> Porsche isn't just automotive. It's luxury retail. It's brand experience. It's international standards. Working with Porsche positions TRAZZO for high-end retail, hospitality, residential—any client who recognizes what that caliber means.
            </p>
            
            <p style={{ 
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.9,
              color: '#3D3835'
            }}>
              The project opened doors Karen couldn't have opened with portfolio documentation alone. Because the story wasn't technical—it was aspirational. And aspiration is what Porsche has always sold.
            </p>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section 
        className="py-16 px-10 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <Link
          to="/clients/karen-mannheim#projects"
          className="inline-flex items-center gap-2 transition-all duration-300 group"
          style={{ 
            fontSize: '16px',
            color: '#3D3835',
            fontWeight: 600
          }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>
    </div>
  );
};

export default KarenPorscheProject;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import karenPortrait from "@/assets/karen-mannheim.jpg";
import karenProject from "@/assets/karen-project-construction.jpg";

const KarenMannheimCaseStudy = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      name: "PEZET",
      context: "Lima's most exclusive residential tower, designed with RAMSA Architects",
      image: karenProject
    },
    {
      name: "Saadiyat Music Festival",
      context: "Abu Dhabi, Jennifer Lopez & Christina Aguilera",
      image: karenProject
    },
    {
      name: "Osaka Nikkei",
      context: "Miami's most celebrated Peruvian-Japanese restaurant",
      image: karenProject
    },
    {
      name: "Fisher Island",
      context: "Private residence, Miami",
      image: karenProject
    },
    {
      name: "Porsche Design Tower",
      context: "Luxury automotive residences, Miami",
      image: karenProject
    },
    {
      name: "Key Biscayne",
      context: "Waterfront residence",
      image: karenProject
    },
    {
      name: "Four Seasons Penthouse",
      context: "$13M penthouse, Lima",
      image: karenProject
    }
  ];

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 400 + 30; // card width + gap
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
      setActiveProject(index);
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Dubai</title>
      
      {/* Navigation Bar - Fixed/Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(245,241,232,0.95)] backdrop-blur-[10px] border-b border-[rgba(61,56,53,0.1)] h-[80px]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[60px] h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[24px] font-bold text-[#3D3835]">
            CRUDA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[32px]">
            <Link 
              to="/" 
              className="text-[16px] text-[#3D3835] hover:underline hover:decoration-[#FF2E63] underline-offset-4 transition-all"
            >
              Home
            </Link>
            <Link 
              to="/book-call" 
              className="text-[16px] text-[#3D3835] hover:underline hover:decoration-[#FF2E63] underline-offset-4 transition-all"
            >
              Work with us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#3D3835]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 right-0 bg-[#F5F1E8] border-b border-[rgba(61,56,53,0.1)] py-6">
            <div className="flex flex-col items-center gap-6">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] text-[#3D3835] hover:underline hover:decoration-[#FF2E63] underline-offset-4 transition-all"
              >
                Home
              </Link>
              <Link 
                to="/book-call" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] text-[#3D3835] hover:underline hover:decoration-[#FF2E63] underline-offset-4 transition-all"
              >
                Work with us
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="bg-[#F5F1E8] text-[#3D3835] min-h-screen pt-[80px]">
        {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center px-5 md:px-10 lg:px-[60px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={karenPortrait} 
            alt="Karen Mannheim, founder of TRAZZO Lighting, luxury architectural lighting designer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3D3835]/30" />
        </div>

        <div className="relative z-10 max-w-[750px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#FDFBF7]/70 mb-6">
            LUXURY LIGHTING DESIGN | LIMA → MIAMI → DUBAI
          </p>
          
          <h1 className="text-[36px] md:text-[60px] leading-[1.2] font-bold text-[#FDFBF7]">
            When mastery doesn't travel
          </h1>
        </div>

        <div className="absolute bottom-10 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#FF2E63]" />
        </div>
      </section>

      {/* Context Bar */}
      <section className="bg-[#F5F1E8] py-[60px] px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#3D3835]/70">
            Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Dubai
          </p>
        </div>
      </section>

      {/* METRICS SECTION - What travels now */}
      <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold text-center mb-[60px] text-[#3D3835]">
            What travels now
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[40px] md:gap-[48px] mb-[60px]">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-[48px] md:text-[56px] font-bold text-[#FF2E63] mb-2">
                16,000
              </div>
              <div className="text-[14px] text-[#3D3835]/60 mb-3">
                from 1,000
              </div>
              <div className="text-[16px] text-[#3D3835]">
                Instagram followers
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-[48px] md:text-[56px] font-bold text-[#FF2E63] mb-2">
                900,000
              </div>
              <div className="text-[14px] text-[#3D3835]/60 mb-3">
                from 5,000
              </div>
              <div className="text-[16px] text-[#3D3835]">
                annual Instagram impressions
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-[48px] md:text-[56px] font-bold text-[#FF2E63] mb-2">
                4,000+
              </div>
              <div className="text-[14px] text-[#3D3835]/60 mb-3">
                from 100
              </div>
              <div className="text-[16px] text-[#3D3835]">
                LinkedIn followers
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-[48px] md:text-[56px] font-bold text-[#FF2E63] mb-2">
                500,000
              </div>
              <div className="text-[14px] text-[#3D3835]/60 mb-3">
                from 100
              </div>
              <div className="text-[16px] text-[#3D3835]">
                annual LinkedIn impressions
              </div>
            </div>

            {/* Stat 5 */}
            <div className="text-center">
              <div className="text-[48px] md:text-[56px] font-bold text-[#FF2E63] mb-2">
                280+
              </div>
              <div className="text-[14px] text-[#3D3835]/60 mb-3">
                content pieces annually
              </div>
              <div className="text-[16px] text-[#3D3835]">
                140 Instagram, 140 LinkedIn
              </div>
            </div>
          </div>

          {/* Supporting Text */}
          <div className="max-w-[900px] mx-auto text-center space-y-6">
            <p className="text-[17px] md:text-[20px] leading-[1.9] text-[#3D3835]">
              Architectural Digest. Semana Económica. Speaking invitations.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9] text-[#3D3835]">
              Saadiyat Music Festival—Jennifer Lopez, Christina Aguilera—lighting for clients who'd never met her. Partnerships in Indonesia, Spain, Hawaii. 10 high-end Miami bids won. Inbound inquiries from markets where she had mastery but not visibility.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9] text-[#3D3835]">
              She walks into rooms now where people already know her work. The recognition finally matches the expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section: Opening */}
      <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[750px] mx-auto">
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            Three decades perfecting how light shapes emotion in luxury spaces. TRAZZO was Peru's most respected—Porsche, Maserati, residences where every room breathed differently depending on the hour.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            But her expertise stopped at Peru's border. More accurately, at the edge of her network.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            The work was undeniable in person. But she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. A thousand followers. No LinkedIn presence. No way to create belief remotely.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            The gap wasn't quality. It was translation.
          </p>
        </div>
      </section>

      {/* Visual Divider */}
      <section className="bg-[#F5F1E8] py-[60px] px-5">
        <div className="flex flex-col items-center gap-[12px]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2E63]" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2E63]" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2E63]" />
        </div>
      </section>

      {/* Story Section: The Pattern */}
      <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold mb-[32px]">
            The pattern
          </h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            We recognized this immediately. Not because we're lighting experts—we're not. But because we've lived the gap between mastery and articulation. Expertise that's undeniable face-to-face, invisible remotely.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            What we saw: Karen wasn't selling lighting. She was selling how spaces make people feel. But "lighting designer" sounded like someone who picks fixtures, not someone who architects emotion.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            The technical precision was there—thermal dynamics, layering, lighting an art collection versus a reading nook. But the framing made her sound like a vendor, not a design partner.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            The challenge wasn't just Lima to Miami. It was translating what lighting means when you understand it—not afterthought, not decoration, not buying pretty lamps. It's what makes or breaks how you live in a space.
          </p>
        </div>
      </section>

      {/* Image Pair: Before/After Energy */}
      <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4%]">
            <div className="aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_4px_20px_rgba(61,56,53,0.1)]">
              <img 
                src={karenPortrait} 
                alt="Karen Mannheim professional portrait - before digital presence transformation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_4px_20px_rgba(61,56,53,0.1)] mt-8 md:mt-0">
              <img 
                src={karenProject} 
                alt="Karen Mannheim dramatic portrait - after digital presence transformation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-[16px] italic text-[#3D3835]/70 mt-[16px]">
            From 1,000 followers and no story to 20,000 and belief that travels
          </p>
        </div>
      </section>

      {/* Story Section: How We Did This */}
      <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[rgba(255,46,99,0.05)] border-l-[3px] border-[#FF2E63] py-[40px] px-[32px] md:px-[48px] rounded-[8px]">
            <h3 className="text-[16px] uppercase tracking-[0.12em] text-[#3D3835]/60 mb-[24px]">
              HOW WE DID THIS
            </h3>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
              Karen committed fully from day one. Weekly hour-long interviews unpacking not just projects, but how she thinks about light, space, emotion. She treated this like client work—blocking time, preparing, showing up.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
              Every piece went through review. She'd mark what felt right, what felt off. That feedback loop taught us how she wanted to be understood.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
              Three years now. Consistent weekly interviews. Content created, refined, published.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9]">
              This only works when the builder shows up. Karen did.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section: The Translation */}
      <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold mb-[32px]">
            The translation
          </h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            We didn't change what Karen built.<br />
            We changed how it was understood.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            First challenge: You can't expand to Miami when nobody outside your circle knows your work exists. We built her story before we built her reach.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            The narrative shifted from product supplier to something closer to truth: light as warmth, as power, as source of life in a space. We showed her passion for design beyond lighting—Foster, Koolhaas, Zaha Hadid, architecture as cultural practice.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            We educated from a human lens first: how lighting affects you in restaurants, hotels, homes. Then the B2B work—how architectural lighting determines whether a $13 million Four Seasons penthouse feels like showpiece or home.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            Latin culture gave us the entry point. In Latin homes, gathering matters. We built relevance showing Karen as a Peruvian woman with German roots, building across nationalities, understanding light speaks different languages.
          </p>
        </div>
      </section>

      {/* Image Pair: Technical vs Emotional */}
      <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4%]">
            <div className="aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_4px_20px_rgba(61,56,53,0.1)]">
              <img 
                src={karenPortrait} 
                alt="Technical framing of Karen Mannheim's lighting expertise"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_4px_20px_rgba(61,56,53,0.1)] mt-8 md:mt-0">
              <img 
                src={karenProject} 
                alt="Emotional framing showing impact of Karen's work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-[16px] italic text-[#3D3835]/70 mt-[16px]">
            We didn't change what she built. We changed how it was understood.
          </p>
        </div>
      </section>

      {/* Visual Divider */}
      <section className="bg-[#F5F1E8] py-[60px] px-5">
        <div className="flex flex-col items-center gap-[12px]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2E63]" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2E63]" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2E63]" />
        </div>
      </section>

      {/* Story Section: What Travels Now */}
      <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold mb-[32px]">
            What travels now
          </h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            Over three years: <span className="font-bold text-[#FF2E63]">20,000 followers</span> across Instagram and LinkedIn where there had been silence. <span className="font-bold text-[#FF2E63]">Architectural Digest, Semana Económica</span>, speaking invitations. But more important—the belief that travels when Karen isn't in the room.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[40px]">
            A UAE business partner we connected her with helped close the <span className="font-bold text-[#FF2E63]">Saadiyat Music Festival project</span>—Jennifer Lopez, Christina Aguilera, lighting a festival for clients who'd never met her. Strategic partnerships in <span className="font-bold text-[#FF2E63]">Indonesia, Spain, Hawaii</span>. Miami developers who found her online or knew her but weren't sold until the narrative existed. <span className="font-bold text-[#FF2E63]">Ten high-end project bids won in Miami</span>. Inbound inquiries not just from the US, but even within Peru—markets where she'd always had mastery but not visibility.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            Cold outreach that isn't cold anymore because people arrive educated. Recruiting made easier because reach creates context. Most importantly: she walks into rooms now where people already know her work. The recognition finally matches the expertise.
          </p>
        </div>
      </section>

      {/* Project Carousel Section */}
      <section className="bg-[#3D3835] py-[80px] md:py-[100px] px-5 md:px-[60px] max-h-[800px]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold mb-[60px] text-center text-[#FDFBF7]">
            The work that now travels
          </h2>
          
          <div 
            ref={carouselRef}
            className="flex gap-[30px] overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[400px] snap-start group cursor-pointer"
                onClick={() => setActiveProject(index)}
              >
                <div className="aspect-video overflow-hidden rounded-[8px] mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img 
                    src={project.image}
                    alt={`${project.name} - ${project.context}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[20px] font-bold mb-2 text-[#FDFBF7] group-hover:text-[#FF2E63] transition-colors">
                  {project.name}
                </h3>
                <p className="text-[15px] text-[#999999]">
                  {project.context}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: activeProject === index ? '#FF2E63' : 'rgba(253, 251, 247, 0.3)'
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section: The Insight */}
      <section className="bg-[#F5F1E8] py-[100px] md:py-[120px] px-5 md:px-[60px]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold italic mb-[40px]">
            The insight
          </h2>
          
          <p className="text-[20px] md:text-[24px] leading-[1.8] mb-[40px]">
            Translation isn't about simplifying what you do. It's about understanding that mastery speaks one language, belief speaks another.
          </p>
          
          <p className="text-[20px] md:text-[24px] leading-[1.8] mb-[40px]">
            Karen's craft never changed. But now it travels—across borders, across contexts, across the gap between walking through a space she's lit and trusting her before you've ever met.
          </p>
          
          <p className="text-[20px] md:text-[24px] leading-[1.8]">
            The work was always exceptional. Now people outside her immediate circle can see it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
        <div className="max-w-[750px] mx-auto text-center">
          <Link 
            to="/book-call"
            className="inline-block text-[18px] text-[#3D3835] hover:text-[#FF2E63] transition-colors duration-300 underline decoration-transparent hover:decoration-[#FF2E63] underline-offset-4"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
      </main>
    </>
  );
};

export default KarenMannheimCaseStudy;

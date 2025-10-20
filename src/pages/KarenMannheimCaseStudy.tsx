import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import karenPortrait from "@/assets/karen-mannheim.jpg";
import karenProject from "@/assets/karen-project-construction.jpg";

const KarenMannheimCaseStudy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      name: "Karen at speaking event",
      context: "Speaking at architectural lighting conference, Austin",
      image: karenPortrait
    },
    {
      name: "Architectural Digest feature",
      context: "Featured in Architectural Digest",
      image: karenProject
    },
    {
      name: "PEZET project",
      context: "PEZET Residences, Lima—RAMSA Architects",
      image: karenProject
    },
    {
      name: "Four Seasons penthouse",
      context: "$13M Four Seasons penthouse lighting design",
      image: karenProject
    },
    {
      name: "Osaka Nikkei",
      context: "Osaka Nikkei, Miami",
      image: karenProject
    },
    {
      name: "Saadiyat Music Festival",
      context: "Saadiyat Music Festival, Abu Dhabi",
      image: karenProject
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Dubai</title>
      
      {/* Navigation Bar - Fixed/Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(245,241,232,0.95)] backdrop-blur-[10px] border-b border-[rgba(61,56,53,0.1)] h-[80px]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[60px] h-full flex items-center justify-between">
          <Link to="/" className="text-[24px] font-bold text-[#3D3835]">
            CRUDA
          </Link>

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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#3D3835]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
        {/* 1. HERO SECTION */}
        <section className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center px-5 md:px-10 lg:px-[60px]">
          <div className="absolute inset-0 z-0">
            <img 
              src={karenPortrait} 
              alt="Karen Mannheim, founder of TRAZZO Lighting, luxury architectural lighting designer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#3D3835]/30" />
          </div>

          <div className="relative z-10 max-w-[900px] mx-auto">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <span className="inline-block px-4 py-2 bg-[rgba(255,46,99,0.15)] text-[#FDFBF7] text-[12px] uppercase tracking-[0.15em] rounded-full">
                ARCHITECTURAL LIGHTING
              </span>
              <span className="inline-block px-4 py-2 bg-[rgba(255,46,99,0.15)] text-[#FDFBF7] text-[12px] uppercase tracking-[0.15em] rounded-full">
                LIMA · MIAMI · DUBAI
              </span>
            </div>
            
            <h1 className="text-[40px] md:text-[72px] leading-[1.1] font-bold text-[#FDFBF7] text-center">
              Karen Mannheim
            </h1>
            
            <p className="text-[20px] md:text-[24px] text-[#FDFBF7]/90 text-center mt-4">
              Founder, TRAZZO Lighting
            </p>
          </div>

          <div className="absolute bottom-10 z-10 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#FF2E63]" />
          </div>
        </section>

        {/* 2. INTRO PARAGRAPH */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <Link to="/" className="text-[14px] mb-8 inline-block text-[#3D3835] hover:underline">
              ← Back to Home
            </Link>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] text-[#3D3835]/85">
              Karen Mannheim is founder of TRAZZO Lighting, Peru's most respected architectural lighting design firm. Over three decades, she's perfected how light shapes emotion in luxury spaces—working with Porsche, Maserati, and developers across Latin America, the Middle East, and the United States.
            </p>
          </div>
        </section>

        {/* 3. THE CHALLENGE */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <div className="inline-block px-4 py-2 bg-[rgba(255,46,99,0.1)] text-[#FF2E63] text-[12px] uppercase tracking-[0.15em] rounded-full mb-8">
              THE CHALLENGE
            </div>
            
            <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-normal mb-[40px]">
              Karen's expertise stopped at Peru's border—but no one outside Lima knew about it.
            </h2>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              Three decades perfecting architectural lighting for luxury spaces. TRAZZO was Peru's most respected—Porsche, Maserati, residences where every room breathed differently.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              But she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. A thousand followers. No LinkedIn presence. No way to create belief remotely.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8]">
              The gap wasn't quality. <span className="font-semibold text-[#FF2E63]">It was translation.</span>
            </p>
          </div>
        </section>

        {/* 4. WHAT TRAVELS NOW (WITH METRICS) */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[60px]">
              What Travels Now
            </h2>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[900px] mx-auto mb-[80px]">
              {/* Metric 1 */}
              <div className="text-center">
                <div className="text-[72px] md:text-[96px] font-bold text-[#FF2E63] leading-none mb-3" style={{ letterSpacing: '-2px' }}>
                  16,000
                </div>
                <div className="text-[16px] italic text-[#3D3835]/60 mb-2">
                  from 1,000
                </div>
                <div className="text-[18px] text-[#3D3835]/85">
                  Instagram followers
                </div>
              </div>

              {/* Metric 2 */}
              <div className="text-center">
                <div className="text-[72px] md:text-[96px] font-bold text-[#FF2E63] leading-none mb-3" style={{ letterSpacing: '-2px' }}>
                  900,000
                </div>
                <div className="text-[16px] italic text-[#3D3835]/60 mb-2">
                  from 5,000
                </div>
                <div className="text-[18px] text-[#3D3835]/85">
                  annual Instagram impressions
                </div>
              </div>

              {/* Metric 3 */}
              <div className="text-center">
                <div className="text-[72px] md:text-[96px] font-bold text-[#FF2E63] leading-none mb-3" style={{ letterSpacing: '-2px' }}>
                  4,000+
                </div>
                <div className="text-[16px] italic text-[#3D3835]/60 mb-2">
                  from 100
                </div>
                <div className="text-[18px] text-[#3D3835]/85">
                  LinkedIn followers
                </div>
              </div>

              {/* Metric 4 */}
              <div className="text-center">
                <div className="text-[72px] md:text-[96px] font-bold text-[#FF2E63] leading-none mb-3" style={{ letterSpacing: '-2px' }}>
                  500,000
                </div>
                <div className="text-[16px] italic text-[#3D3835]/60 mb-2">
                  from 100
                </div>
                <div className="text-[18px] text-[#3D3835]/85">
                  annual LinkedIn impressions
                </div>
              </div>

              {/* Metric 5 */}
              <div className="text-center md:col-span-2">
                <div className="text-[72px] md:text-[96px] font-bold text-[#FF2E63] leading-none mb-3" style={{ letterSpacing: '-2px' }}>
                  280+
                </div>
                <div className="text-[16px] italic text-[#3D3835]/60 mb-2">
                  content pieces annually
                </div>
                <div className="text-[18px] text-[#3D3835]/85">
                  140 Instagram, 140 LinkedIn
                </div>
              </div>
            </div>

            {/* Outcomes paragraph */}
            <div className="max-w-[750px] mx-auto">
              <p className="text-[19px] md:text-[20px] leading-[1.8] text-center">
                Architectural Digest. Semana Económica. Speaking invitations.
                <br /><br />
                <span className="font-semibold text-[#FF2E63]">Saadiyat Music Festival—Jennifer Lopez, Christina Aguilera</span>—lighting for clients who'd never met her. Partnerships in <span className="font-semibold text-[#FF2E63]">Indonesia, Spain, Hawaii</span>. <span className="font-semibold text-[#FF2E63]">10 high-end Miami bids won</span>. Inbound inquiries from markets where she had mastery but not visibility.
                <br /><br />
                She walks into rooms now where people already know her work. <span className="font-semibold text-[#FF2E63]">The recognition finally matches the expertise.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. STRATEGIC GOALS */}
        <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[60px]">
              STRATEGIC GOALS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Goal 1 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <div className="text-[48px] font-bold text-[#FF2E63] mb-4">1</div>
                <p className="text-[18px] leading-[1.7]">
                  Build Karen's digital presence from zero to establish TRAZZO beyond Peru
                </p>
              </div>

              {/* Goal 2 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <div className="text-[48px] font-bold text-[#FF2E63] mb-4">2</div>
                <p className="text-[18px] leading-[1.7]">
                  Position her as architectural lighting designer, not product vendor
                </p>
              </div>

              {/* Goal 3 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <div className="text-[48px] font-bold text-[#FF2E63] mb-4">3</div>
                <p className="text-[18px] leading-[1.7]">
                  Create content system that translates technical expertise into emotional storytelling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUR APPROACH */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <div className="inline-block px-4 py-2 bg-[rgba(255,46,99,0.1)] text-[#FF2E63] text-[12px] uppercase tracking-[0.15em] rounded-full mb-8">
              OUR APPROACH
            </div>
            
            <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-normal mb-[40px]">
              We didn't change what Karen built. We changed how it was understood.
            </h2>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              First challenge: You can't expand to Miami when nobody outside your circle knows your work exists. <span className="font-semibold text-[#FF2E63]">We built her story before we built her reach.</span>
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              The narrative shifted from product supplier to something closer to truth: light as warmth, as power, as source of life in a space. We showed her passion for design beyond lighting—<span className="font-semibold text-[#FF2E63]">Foster, Koolhaas, Zaha Hadid</span>, architecture as cultural practice.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8]">
              We educated from a human lens first: how lighting affects you in restaurants, hotels, homes. Then the B2B work—how architectural lighting determines whether a $13 million Four Seasons penthouse feels like showpiece or home.
            </p>
          </div>
        </section>

        {/* 7. CONTENT SYSTEM */}
        <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[24px]">
              Content System
            </h2>
            
            <p className="text-[20px] leading-[1.8] text-center mb-[60px]">
              Karen's content is built on three editorial pillars:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <h3 className="text-[22px] font-semibold mb-4">Technical Mastery</h3>
                <p className="text-[17px] leading-[1.7] text-[#3D3835]/85">
                  How light behaves in luxury spaces—thermal dynamics, layering, material interaction
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <h3 className="text-[22px] font-semibold mb-4">Cultural Translation</h3>
                <p className="text-[17px] leading-[1.7] text-[#3D3835]/85">
                  Building a Latin American company in Miami—heritage, identity, and cross-border business
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <h3 className="text-[22px] font-semibold mb-4">Industry Innovation</h3>
                <p className="text-[17px] leading-[1.7] text-[#3D3835]/85">
                  Challenging the "lighting as afterthought" mindset in architecture and design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTENT SHOWCASE / FEATURED WORK */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[60px]">
              Featured work and press
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#FDFBF7] rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-[20px] font-semibold mb-2">{project.name}</h3>
                    <p className="text-[16px] text-[#3D3835]/70">{project.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. HOW WE DID THIS */}
        <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <h3 className="text-[20px] md:text-[22px] uppercase tracking-[0.1em] mb-[40px] text-[#3D3835]/70">
              HOW WE DID THIS
            </h3>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              Karen committed fully from day one. Weekly hour-long interviews unpacking not just projects, but how she thinks about light, space, emotion. She treated this like client work—blocking time, preparing, showing up.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              Every piece went through review. She'd mark what felt right, what felt off. That feedback loop taught us how she wanted to be understood.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              Three years now. Consistent weekly interviews. Content created, refined, published.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] italic">
              This only works when the builder shows up. Karen did.
            </p>
          </div>
        </section>

        {/* 10. PULL QUOTE / TESTIMONIAL */}
        <section className="bg-[#F5F1E8] py-[100px] md:py-[120px] px-5 md:px-[60px]">
          <div className="max-w-[800px] mx-auto text-center">
            <blockquote className="text-[24px] md:text-[28px] leading-[1.6] italic mb-8 text-[#3D3835]">
              "CRUDA helped us translate three decades of expertise into a story that works everywhere—from Lima to Miami to Dubai. The work was always exceptional. Now people outside our immediate circle can see it."
            </blockquote>
            <p className="text-[16px] uppercase tracking-[1px] font-semibold text-[#3D3835]/70">
              — KAREN MANNHEIM, FOUNDER OF TRAZZO LIGHTING
            </p>
          </div>
        </section>

        {/* 11. THE INSIGHT */}
        <section className="bg-[#E8DED1] py-[100px] md:py-[120px] px-5 md:px-[60px]">
          <div className="max-w-[800px] mx-auto text-center">
            <h3 className="text-[20px] md:text-[22px] uppercase tracking-[0.1em] mb-[40px] text-[#3D3835]/70">
              THE INSIGHT
            </h3>
            
            <p className="text-[22px] md:text-[24px] leading-[1.8] mb-[40px] text-[#3D3835]">
              Translation isn't about simplifying what you do. It's about understanding that <span className="font-semibold text-[#FF2E63]">mastery speaks one language, belief speaks another</span>.
            </p>
            
            <p className="text-[22px] md:text-[24px] leading-[1.8] mb-[40px] text-[#3D3835]">
              Karen's craft never changed. But now it travels—across borders, across contexts, across the gap between walking through a space she's lit and trusting her before you've ever met.
            </p>
            
            <p className="text-[22px] md:text-[24px] leading-[1.8] text-[#3D3835]">
              The work was always exceptional. Now people outside her immediate circle can see it.
            </p>
          </div>
        </section>

        {/* 12. CTA SECTION */}
        <section className="bg-[#F5F1E8] py-[100px] md:py-[120px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal mb-[48px] text-[#3D3835]">
              Want to build belief like Karen?
            </h2>
            <Link 
              to="/book-call"
              className="inline-block px-12 py-5 text-[18px] font-semibold text-[#FDFBF7] bg-[#3D3835] hover:bg-[#FF2E63] transition-all duration-300 rounded-lg"
            >
              Start Your Story →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default KarenMannheimCaseStudy;

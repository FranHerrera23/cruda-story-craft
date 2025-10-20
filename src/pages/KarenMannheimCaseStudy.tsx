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

        {/* 2. CLIENT INTRODUCTION */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <Link to="/" className="text-[14px] mb-4 inline-block text-[#3D3835] hover:underline">
              ← Back to Home
            </Link>
            
            <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] mb-4">
              Karen Mannheim
            </h2>
            
            <p className="text-[24px] md:text-[28px] text-[#3D3835]/85 mb-6">
              Founder, TRAZZO Lighting
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-block px-4 py-2 bg-[rgba(255,46,99,0.1)] text-[#FF2E63] text-[14px] rounded-full">
                Architectural Lighting
              </span>
              <span className="inline-block px-4 py-2 bg-[rgba(255,46,99,0.1)] text-[#FF2E63] text-[14px] rounded-full">
                Lima · Miami · Dubai
              </span>
            </div>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8]">
              Karen Mannheim is founder of TRAZZO Lighting, Peru's most respected architectural lighting design firm. Over three decades, she's perfected how light shapes emotion in luxury spaces—working with Porsche, Maserati, and developers across Latin America, the Middle East, and the United States.
            </p>
          </div>
        </section>

        {/* 3. THE CHALLENGE */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal mb-[40px]">
              The Challenge
            </h2>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              Three decades perfecting how light shapes emotion in luxury spaces. TRAZZO was Peru's most respected—<span className="font-semibold text-[#FF2E63]">Porsche, Maserati</span>, residences where every room breathed differently depending on the hour.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              But her expertise <span className="font-semibold text-[#FF2E63]">stopped at Peru's border</span>. More accurately, at the edge of her network.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              The work was undeniable in person. But she couldn't get into rooms with <span className="font-semibold text-[#FF2E63]">Miami developers or Middle Eastern hospitality groups</span>. A thousand followers. No LinkedIn presence. <span className="font-semibold text-[#FF2E63]">No way to create belief remotely.</span>
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8]">
              The gap wasn't quality. <span className="font-semibold text-[#FF2E63]">It was translation.</span>
            </p>
          </div>
        </section>

        {/* 4. WHAT TRAVELS NOW */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[60px]">
              What Travels Now
            </h2>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-w-[900px] mx-auto mb-[80px]">
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
                Architectural Digest. Semana Económica. Speaking invitations. <span className="font-semibold text-[#FF2E63]">Saadiyat Music Festival—Jennifer Lopez, Christina Aguilera</span>—lighting for clients who'd never met her. Partnerships in <span className="font-semibold text-[#FF2E63]">Indonesia, Spain, Hawaii</span>. <span className="font-semibold text-[#FF2E63]">10 high-end Miami bids won</span>. Inbound inquiries from markets where she had mastery but not visibility. She walks into rooms now where people already know her work. <span className="font-semibold text-[#FF2E63]">The recognition finally matches the expertise.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. STRATEGIC GOALS */}
        <section className="bg-[#E8DED1] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[60px]">
              Strategic Goals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Goal 1 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <div className="text-[48px] font-bold text-[#FF2E63] mb-4">1</div>
                <p className="text-[18px] leading-[1.7]">
                  Position Karen as an architect of emotion through light, not a product supplier
                </p>
              </div>

              {/* Goal 2 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <div className="text-[48px] font-bold text-[#FF2E63] mb-4">2</div>
                <p className="text-[18px] leading-[1.7]">
                  Build a narrative that translates mastery across borders and contexts
                </p>
              </div>

              {/* Goal 3 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <div className="text-[48px] font-bold text-[#FF2E63] mb-4">3</div>
                <p className="text-[18px] leading-[1.7]">
                  Create digital infrastructure to reach Miami, Middle East, and Latin American markets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUR APPROACH */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto">
            <h2 className="text-[36px] md:text-[40px] leading-[1.3] font-normal mb-[40px] italic">
              We didn't change what Karen built. We changed how it was understood.
            </h2>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              First challenge: You can't expand to Miami when nobody outside your circle knows your work exists. <span className="font-semibold text-[#FF2E63]">We built her story before we built her reach.</span>
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              The narrative shifted from product supplier to something closer to truth: light as warmth, as power, as source of life in a space. We showed her passion for design beyond lighting—<span className="font-semibold text-[#FF2E63]">Foster, Koolhaas, Zaha Hadid</span>, architecture as cultural practice.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              We educated from a human lens first: how lighting affects you in restaurants, hotels, homes. Then the B2B work—how architectural lighting determines whether a $13 million Four Seasons penthouse feels like showpiece or home.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8]">
              Latin culture gave us the entry point. In Latin homes, gathering matters. We built relevance showing Karen as a <span className="font-semibold text-[#FF2E63]">Peruvian woman with German roots</span>, building across nationalities, understanding light speaks different languages.
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
                <h3 className="text-[22px] font-semibold mb-4">Light as Emotion</h3>
                <p className="text-[17px] leading-[1.7] text-[#3D3835]/85">
                  How lighting shapes the way people feel in luxury spaces—from intimate homes to grand commercial projects
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <h3 className="text-[22px] font-semibold mb-4">Architecture & Design</h3>
                <p className="text-[17px] leading-[1.7] text-[#3D3835]/85">
                  Celebrating the masters—Foster, Koolhaas, Zaha Hadid—and architectural practice as cultural expression
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#FDFBF7] p-8 rounded-lg">
                <h3 className="text-[22px] font-semibold mb-4">Cross-Cultural Design</h3>
                <p className="text-[17px] leading-[1.7] text-[#3D3835]/85">
                  How design translates across Latin America, North America, and the Middle East—from Lima to Miami to Dubai
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FEATURED WORK AND PRESS */}
        <section className="bg-[#F5F1E8] py-[80px] md:py-[100px] px-5 md:px-[60px]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal text-center mb-[60px]">
              Featured Work and Press
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
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal mb-[40px]">
              How We Did This
            </h2>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              <span className="font-semibold text-[#FF2E63]">Client commitment:</span> Weekly interviews over three years. Karen showed up consistently, sharing her process, her philosophy, her projects.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              <span className="font-semibold text-[#FF2E63]">Collaboration process:</span> Tight feedback loop. Every piece of content refined until it captured her voice authentically.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] mb-[40px]">
              <span className="font-semibold text-[#FF2E63]">Timeline:</span> Three years of consistent content creation across Instagram and LinkedIn.
            </p>
            
            <p className="text-[19px] md:text-[20px] leading-[1.8] italic">
              This only works when the builder shows up. Karen did.
            </p>
          </div>
        </section>

        {/* 10. PULL QUOTE */}
        <section className="bg-[#F5F1E8] py-[100px] md:py-[120px] px-5 md:px-[60px]">
          <div className="max-w-[800px] mx-auto text-center">
            <blockquote className="text-[24px] md:text-[28px] leading-[1.6] italic mb-8">
              "CRUDA helped me articulate what I've been building for three decades. Now my expertise travels—across borders, across contexts. People trust me before we've ever met. The recognition finally matches the work."
            </blockquote>
            <p className="text-[16px] uppercase tracking-[1px] font-semibold">
              — KAREN MANNHEIM, FOUNDER, TRAZZO LIGHTING
            </p>
          </div>
        </section>

        {/* 11. THE INSIGHT */}
        <section className="bg-[#E8DED1] py-[100px] md:py-[120px] px-5 md:px-[60px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal mb-[40px]">
              The Insight
            </h2>
            
            <p className="text-[22px] md:text-[24px] leading-[1.8] mb-[40px]">
              Translation isn't about simplifying what you do. It's about understanding that <span className="font-semibold text-[#FF2E63]">mastery speaks one language, belief speaks another</span>.
            </p>
            
            <p className="text-[22px] md:text-[24px] leading-[1.8] mb-[40px]">
              Karen's craft never changed. But now it travels—across borders, across contexts, across the gap between walking through a space she's lit and trusting her before you've ever met.
            </p>
            
            <p className="text-[22px] md:text-[24px] leading-[1.8]">
              The work was always exceptional. Now people outside her immediate circle can see it.
            </p>
          </div>
        </section>

        {/* 12. CTA SECTION */}
        <section className="bg-[#F5F1E8] py-[100px] md:py-[120px] px-5 md:px-[60px]">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="text-[40px] md:text-[44px] leading-[1.2] font-normal mb-[32px]">
              Want to build belief like Karen?
            </h2>
            <p className="text-[20px] leading-[1.8] mb-[48px] text-[#3D3835]/85">
              If you've built something exceptional but it doesn't travel beyond your immediate circle, let's talk.
            </p>
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

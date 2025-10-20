import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import karenPortrait from "@/assets/karen-mannheim.jpg";
import karenProject from "@/assets/karen-project-construction.jpg";

const KarenMannheimCaseStudy = () => {
  const [activeProject, setActiveProject] = useState(0);
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
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      {/* SEO Meta Tags */}
      <title>Karen Mannheim | TRAZZO Lighting | Architectural Lighting Design | Lima | Miami | Dubai</title>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-10">
        <div className="absolute inset-0 z-0">
          <img 
            src={karenPortrait} 
            alt="Karen Mannheim, founder of TRAZZO Lighting, luxury architectural lighting designer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-[750px] mx-auto text-center">
          <div className="mb-6">
            <p className="text-[12px] uppercase tracking-wider text-[#B0B0B0] mb-2">
              LUXURY LIGHTING DESIGN | LIMA → MIAMI → DUBAI
            </p>
          </div>
          
          <h1 className="text-[36px] md:text-[60px] leading-[1.2] mb-8 font-bold">
            When mastery doesn't travel
          </h1>
        </div>

        <div className="absolute bottom-10 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FF2E63]" />
          <p className="text-sm text-[#B0B0B0] mt-2">Scroll down</p>
        </div>
      </section>

      {/* Story Section - Part 1 */}
      <section className="py-[100px] px-5 md:px-10">
        <div className="max-w-[750px] mx-auto text-center">
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            Karen Mannheim had spent three decades perfecting how light shapes emotion in luxury spaces. By 2021, TRAZZO was one of Peru's most respected lighting companies—architects and developers who worked with her understood immediately. The portfolio was exceptional: Porsche, Maserati, residences where every room breathed differently depending on the hour, the mood, the moment.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            But her expertise stopped at Peru's border. More accurately, it stopped at the edge of her immediate network.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            The work was undeniable in person. Walking through a space she'd lit, you felt it—the way light made a wine cellar intimate, a lobby commanding, a bedroom restful without being flat. But she couldn't get into rooms with Miami developers or Middle Eastern hospitality groups. Not because the work wasn't there. Because the story wasn't.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            She had no audience online. A thousand followers, no LinkedIn presence, no way to create belief when she wasn't standing in front of you explaining what she saw. The gap wasn't quality. It was translation.
          </p>
        </div>
      </section>

      {/* Embedded Visual 1 */}
      <section className="py-[100px] px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="aspect-[4/3] bg-[#2A2A2A] rounded-lg overflow-hidden">
              <img 
                src={karenPortrait} 
                alt="Before digital presence - limited reach within Peru"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-[#2A2A2A] rounded-lg overflow-hidden">
              <img 
                src={karenProject} 
                alt="After digital presence - international recognition and projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-[14px] italic text-[#B0B0B0] mt-6">
            From 1,000 followers and no story to 20,000 and belief that travels
          </p>
        </div>
      </section>

      {/* The Pattern */}
      <section className="py-[100px] px-5 md:px-10 border-t border-[#2A2A2A]">
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-8">The pattern</h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            We recognized this immediately. Not because we're lighting experts—we're not. But because we've lived the gap between mastery and articulation. Expertise that's undeniable face-to-face, invisible remotely.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            What we saw: Karen wasn't selling lighting. She was selling how spaces make people feel. But "lighting designer" sounded like someone who picks fixtures, not someone who architects emotion. The technical precision was there—the thermal dynamics, the layering, the way to light an art collection versus a reading nook. But the framing made her sound like a vendor, not a design partner.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            The challenge wasn't just going from Lima to Miami. It was translating what lighting means when you understand it—that it's not an afterthought, not decoration, not buying pretty lamps and scattering recessed lights. It's the thing that makes or breaks how you live in a space.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            Latin culture gave us an entry point. In Latin homes, gathering matters. The home is shelter, yes, but also warmth. That's not just sentiment—it's how you approach light. We built relevance by showing Karen as a Peruvian woman with German roots building a construction business in Miami, working across nationalities, understanding that light speaks different languages depending on whether you're in a Coral Gables residence or a Dubai hotel lobby.
          </p>
        </div>
      </section>

      {/* The Translation */}
      <section className="py-[100px] px-5 md:px-10 border-t border-[#2A2A2A]">
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-8">The translation</h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            We didn't change what Karen built. We changed how it was understood.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            First, we needed to translate her offline brand equity in Peru into digital presence. You can't expand to Miami when nobody outside your immediate circle knows your work exists. We built her story before we built her reach.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            The narrative shifted from product supplier to something closer to the truth: light as warmth, as power, as the source of life in a space. We showed her passion for design beyond lighting—visiting cities, discussing Foster and Koolhaas and Zaha Hadid, understanding architecture as cultural practice. We educated from a human perspective first: how lighting affects you as a person in restaurants, hotels, offices, homes. Then the B2B work—how architectural lighting design creates the atmosphere that determines whether a $13 million Four Seasons penthouse feels like a showpiece or a home.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            We made her relatable and specific at once. A mom, an entrepreneur, a lighting designer fluent in luxury lifestyle and design. Someone who understands what an avid reader needs versus an art collector versus a bon vivant with a wine cellar.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            The content wasn't promotional. It was contemplative. Her first experience as a speaker. The story behind TRAZZO and its founding team. How to expand a B2B company from Peru to Miami as a Latin American entrepreneur. Lessons on heritage, influences, leadership. The breakdown of real projects with the thinking that shaped them.
          </p>
        </div>
      </section>

      {/* Embedded Visual 2 */}
      <section className="py-[100px] px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="aspect-[4/3] bg-[#2A2A2A] rounded-lg overflow-hidden">
              <img 
                src={karenPortrait} 
                alt="Technical framing - before positioning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-[#2A2A2A] rounded-lg overflow-hidden">
              <img 
                src={karenProject} 
                alt="Emotional framing - after positioning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-[14px] italic text-[#B0B0B0] mt-6">
            We didn't change what she built. We changed how it was understood.
          </p>
        </div>
      </section>

      {/* What Travels Now */}
      <section className="py-[100px] px-5 md:px-10 border-t border-[#2A2A2A]">
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-8">What travels now</h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            Within four years: <span className="text-[#FF2E63] font-bold">20,000 followers across Instagram and LinkedIn</span> where there had been silence. Architectural Digest, Semana Económica, speaking invitations. But more important—the belief that travels when Karen isn't in the room.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            A UAE business partner we connected her with helped close the <span className="text-[#FF2E63] font-bold">Saadiyat Music Festival project—Jennifer Lopez, Christina Aguilera</span>, lighting a festival for clients who'd never met her. Strategic partnerships in Indonesia, Spain, Hawaii. Miami developers who found her online or knew her but weren't sold until the narrative existed. <span className="text-[#FF2E63] font-bold">Ten high-end project bids won in Miami.</span> Inbound inquiries not just from the US, but even within Peru—markets where she'd always had mastery but not visibility.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            Cold outreach that isn't cold anymore because people arrive educated. Recruiting made easier because reach creates context. Most importantly: she walks into rooms now where people already know her work. The recognition finally matches the expertise.
          </p>
        </div>
      </section>

      {/* Project Carousel */}
      <section className="py-[100px] px-5 md:px-10 border-t border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-12 text-center">
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
                <div className="aspect-video bg-[#2A2A2A] rounded-lg overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img 
                    src={project.image}
                    alt={`${project.name} - ${project.context}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[20px] font-bold mb-2 group-hover:text-[#FF2E63] transition-colors">
                  {project.name}
                </h3>
                <p className="text-[14px] text-[#B0B0B0]">
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
                  backgroundColor: activeProject === index ? '#FF2E63' : '#2A2A2A'
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Insight */}
      <section className="py-[100px] px-5 md:px-10 border-t border-[#2A2A2A]">
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-8">The insight</h2>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9] mb-[2em]">
            Translation isn't about simplifying what you do. It's about understanding that mastery speaks one language, and belief speaks another. Karen's craft never changed. But now it travels—across borders, across contexts, across the gap between walking through a space she's lit and trusting her before you've ever met.
          </p>
          
          <p className="text-[17px] md:text-[20px] leading-[1.9]">
            The work was always exceptional. Now people outside her immediate circle can see it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] px-5 md:px-10 border-t border-[#2A2A2A]">
        <div className="max-w-[750px] mx-auto text-center">
          <Link 
            to="/book-call"
            className="inline-flex items-center gap-2 text-[20px] md:text-[24px] font-bold text-[#FF2E63] hover:gap-4 transition-all duration-300 group"
          >
            Start a conversation
            <span className="text-[#FF2E63] group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default KarenMannheimCaseStudy;

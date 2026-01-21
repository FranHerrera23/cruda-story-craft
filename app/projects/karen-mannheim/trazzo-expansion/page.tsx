'use client'

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const KarenTrazzoExpansionProject = () => {
  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop', caption: 'TRAZZO team and workspace' },
    { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1420&fit=crop', caption: 'International project meeting' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1420&fit=crop', caption: 'Design process' },
    { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=900&fit=crop', caption: 'Global reach visualization' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=900&fit=crop', caption: 'Team collaboration' },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=900&fit=crop', caption: 'Strategic planning' },
    { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&h=900&fit=crop', caption: 'Content creation process' }
  ];

  const linkedinPosts = [
    { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop', title: 'Building a global design firm from Lima' },
    { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop', title: 'The story behind TRAZZO\'s expansion' },
    { image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=800&fit=crop', title: 'How content creates international opportunities' }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* BREADCRUMB */}
      <section className="py-6 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <Link href="/clients/karen-mannheim#projects" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '14px', color: '#3D3835' }}>
          <ArrowLeft className="w-4 h-4 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>

      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{
          height: '60vh',
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=2000&h=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-10 md:px-20 pb-12">
          <h1 className="font-bold mb-2" style={{ fontSize: 'clamp(38px, 5vw, 52px)', color: '#FDFBF7', lineHeight: 1.2 }}>
            Trazzo International Expansion & more
          </h1>
          <p style={{ fontSize: '18px', color: '#FDFBF7', opacity: 0.8 }}>
            Lima → Miami → Dubai → Global · 2021-2024
          </p>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section className="py-24 md:py-32 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[800px] mx-auto space-y-10">
          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            Behind every international project is a story of how TRAZZO went from regional to global. This isn't a single project—it's the collection of work that shows the progression: from Lima's finest projects to Miami's high-end developments, from Middle Eastern hospitality to partnerships across Indonesia, Spain, and Hawaii.
          </p>

          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            The content strategy didn't just showcase finished work. It revealed process, philosophy, and the cultural translation Karen navigated as a Latin American founder building credibility in international markets. Each piece of content positioned TRAZZO not as a lighting supplier, but as design authority that understands how light creates experience across cultures.
          </p>

          <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
            We documented the expansion: the thinking behind entering new markets, the challenges of maintaining design integrity while scaling, what it means to build trust when you're not in the room. This meta-narrative became its own attractor—founders and executives who resonated with the journey, not just the portfolio.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-20 px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[1200px] mx-auto space-y-8">
          <img src={galleryItems[0].src} alt={galleryItems[0].caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.slice(1, 3).map((item, i) => (
              <img key={i} src={item.src} alt={item.caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)', aspectRatio: '9/16', objectFit: 'cover' }} />
            ))}
          </div>

          <img src={galleryItems[3].src} alt={galleryItems[3].caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.slice(4).map((item, i) => (
              <img key={i} src={item.src} alt={item.caption} className="w-full" style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(61, 56, 53, 0.1)', aspectRatio: '1/1', objectFit: 'cover' }} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE COMMUNICATED */}
      <section className="py-24 md:py-32 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[800px] mx-auto">
          <p className="mb-6" style={{ fontSize: '12px', color: '#FF2E63', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
            How we told this story
          </p>

          <div className="space-y-10">
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              The expansion story became content itself. We didn't just post completed projects—we shared the pattern recognition. "What we learned entering the Miami market." "How Latin American design firms build credibility internationally." "The cultural nuances that architects miss."
            </p>

            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              This positioned Karen beyond individual projects. She became a voice on the intersection of technical mastery, cultural intelligence, and entrepreneurial expansion. The content attracted two audiences: clients who wanted TRAZZO's expertise, and founders who resonated with the journey.
            </p>

            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.9, color: '#3D3835' }}>
              Speaking invitations followed. Industry conferences, design schools, business forums—not just about lighting, but about building international design firms from emerging markets. The narrative worked because it was specific, honest, and showed the work behind the work.
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN POSTS */}
      <section className="py-16 md:py-24 px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
        <div className="max-w-[1000px] mx-auto">
          <h3 className="mb-16 text-center" style={{ fontSize: 'clamp(24px, 3vw, 28px)', color: '#3D3835', fontWeight: 700 }}>
            Content examples from this project
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linkedinPosts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5CBC1', borderRadius: '8px', boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} className="w-full" style={{ aspectRatio: '4/5', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <p style={{ fontSize: '15px', color: '#3D3835', fontWeight: 600, lineHeight: 1.5 }}>{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-20 px-10 md:px-20 text-center" style={{ backgroundColor: '#E8DED1' }}>
        <Link href="/clients/karen-mannheim#metrics" className="inline-flex items-center gap-2 transition-colors duration-300 group" style={{ fontSize: '18px', color: '#3D3835', fontWeight: 600 }}>
          <ArrowLeft className="w-5 h-5 group-hover:text-[#FF2E63]" />
          <span className="group-hover:text-[#FF2E63]">Back to Karen's Story</span>
        </Link>
      </section>
    </div>
  );
};

export default KarenTrazzoExpansionProject;

import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import karenImage from '@/assets/karen-mannheim-casestudy.jpg';
import mikeImage from '@/assets/mike-kaeding.webp';

const Work = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  const projects = [
    {
      client: "KAREN MANNHEIM",
      title: "TRAZZO Lighting",
      description: "Brand narrative and positioning for a luxury architectural lighting designer working with Robert A.M. Stern, Porsche, and global hospitality brands.",
      image: karenImage,
      link: "/clients/karen-mannheim",
      status: "live"
    },
    {
      client: "MIKE KAEDING",
      title: "Norhart",
      description: "Founder story and media strategy for the CEO of a $200M housing innovation company transforming how apartments are built.",
      image: mikeImage,
      link: "/clients/mike-kaeding",
      status: "live"
    },
    {
      client: "JUAN PABLO ROMERO",
      title: "UNIK Parquet",
      description: "Brand positioning for a premium flooring manufacturer serving luxury residential projects across Latin America.",
      image: null,
      link: "#",
      status: "coming-soon"
    },
    {
      client: "GIRISH SEHGAL",
      title: "SSMC",
      description: "Executive narrative for a hospitality leader with Four Seasons, JW Marriott, and Grand Hyatt experience.",
      image: null,
      link: "#",
      status: "coming-soon"
    }
  ];

  return (
    <main 
      className="min-h-screen"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Hero Section */}
      <div 
        ref={headerRef}
        className="pt-[120px] md:pt-[140px] pb-[80px] px-6 md:px-[60px]"
      >
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Page Title */}
          <h1 
            className="text-[40px] md:text-[52px] font-semibold mb-4 transition-all duration-700"
            style={{ 
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Work
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-[18px] md:text-[20px] max-w-[540px] mx-auto mb-[80px] transition-all duration-700"
            style={{ 
              color: 'rgba(26, 26, 26, 0.6)',
              lineHeight: '1.6',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            Narrative strategy for the leaders shaping spaces, experiences, and industries.
          </p>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div 
        ref={gridRef}
        className="pb-[120px] px-6 md:px-[60px]"
      >
        <div 
          className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className={`block group ${project.status === 'coming-soon' ? 'cursor-default' : ''}`}
              onClick={(e) => project.status === 'coming-soon' && e.preventDefault()}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
              }}
            >
              <div 
                className="bg-white overflow-hidden transition-all duration-400"
                style={{ 
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(26, 26, 26, 0.04)'
                }}
                onMouseEnter={(e) => {
                  if (project.status === 'live') {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 26, 26, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(26, 26, 26, 0.04)';
                }}
              >
                {/* Image Area */}
                <div 
                  className="relative w-full overflow-hidden"
                  style={{ 
                    aspectRatio: '4/3',
                    backgroundColor: '#FAFAFA'
                  }}
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span 
                        className="text-[14px] font-medium"
                        style={{ color: 'rgba(26, 26, 26, 0.3)' }}
                      >
                        Image coming soon
                      </span>
                    </div>
                  )}
                  
                  {/* Coming Soon Badge */}
                  {project.status === 'coming-soon' && (
                    <div 
                      className="absolute top-4 right-4 px-3 py-1.5 text-[10px] font-medium uppercase"
                      style={{ 
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        color: '#FFFFFF',
                        letterSpacing: '1.5px',
                        borderRadius: '4px'
                      }}
                    >
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-7 pb-8">
                  {/* Client Name */}
                  <p 
                    className="text-[11px] font-medium uppercase mb-2"
                    style={{ 
                      letterSpacing: '2px',
                      color: 'rgba(26, 26, 26, 0.4)'
                    }}
                  >
                    {project.client}
                  </p>
                  
                  {/* Project Title */}
                  <h3 
                    className="text-[22px] font-semibold mb-3"
                    style={{ 
                      color: '#1A1A1A',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[15px] mb-5"
                    style={{ 
                      color: 'rgba(26, 26, 26, 0.6)',
                      lineHeight: '1.6'
                    }}
                  >
                    {project.description}
                  </p>
                  
                  {/* View Project Link */}
                  {project.status === 'live' && (
                    <span 
                      className="text-[14px] font-medium inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
                      style={{ color: '#FF2E63' }}
                    >
                      View Project 
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section 
        className="py-[80px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-[500px] mx-auto text-center">
          <h2 
            className="text-[28px] md:text-[32px] font-semibold mb-4"
            style={{ 
              color: '#FFFFFF',
              letterSpacing: '-0.01em'
            }}
          >
            Ready to translate your expertise?
          </h2>
          <p 
            className="text-[17px] mb-8"
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.6'
            }}
          >
            Let's turn your years of mastery into a narrative that opens doors.
          </p>
          <Link
            to="/book-call"
            className="inline-block px-10 py-[18px] text-[16px] font-semibold rounded-[10px] transition-all duration-400"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E62958';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 46, 99, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start Your Story
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Work;
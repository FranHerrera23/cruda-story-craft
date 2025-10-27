const WhatWeDoSection = () => {
  return (
    <section 
      className="py-[120px] px-[60px]"
      style={{ backgroundColor: '#E8DED1' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div 
          className="text-center mb-[60px] uppercase tracking-[2px]"
          style={{ 
            fontSize: '12px',
            color: 'rgba(61, 56, 53, 0.5)'
          }}
        >
          WHAT WE DO
        </div>
        
        <div className="max-w-[800px] mx-auto mb-[100px]">
          <p 
            className="mb-[32px]"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.8',
              color: '#3D3835'
            }}
          >
            You've spent years building something. The work is real. The expertise is there. But when you try to explain it to people who've never met you, something gets lost.
          </p>
          
          <p 
            style={{ 
              fontSize: '24px',
              lineHeight: '1.8',
              color: '#3D3835'
            }}
          >
            We help you find the words. Not by inventing a story, but by uncovering what's already there—the thing clients feel but can't articulate. The pattern that makes your work yours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-[60px]">
          <div>
            <h3 
              className="font-semibold mb-[20px]"
              style={{ 
                fontSize: '20px',
                lineHeight: '1.4',
                color: '#3D3835'
              }}
            >
              Brand Architecture<br/>& Strategy
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We map what you've built and find the pattern underneath.
            </p>
          </div>
          
          <div>
            <h3 
              className="font-semibold mb-[20px]"
              style={{ 
                fontSize: '20px',
                lineHeight: '1.4',
                color: '#3D3835'
              }}
            >
              Narrative & Content<br/>Strategy
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We turn that into stories that work in conversation, on social media, in pitch decks, everywhere.
            </p>
          </div>
          
          <div>
            <h3 
              className="font-semibold mb-[20px]"
              style={{ 
                fontSize: '20px',
                lineHeight: '1.4',
                color: '#3D3835'
              }}
            >
              PR & Communications<br/>Strategy
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We get those stories in front of the people who need to hear them.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 100px 40px !important;
          }
          
          .max-w-\\[800px\\] p {
            font-size: 20px !important;
          }
          
          h3 {
            font-size: 18px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection;

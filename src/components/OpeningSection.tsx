const OpeningSection = () => {
  return (
    <section className="py-[140px] md:py-[140px] px-10 md:px-20" style={{ backgroundColor: '#3D3835' }}>
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[42px] font-bold leading-[1.3] mb-[60px]"
          style={{ color: '#FDFBF7' }}
        >
          The work that's <span style={{ color: '#F5B800' }}>worth believing in</span>.
        </h2>

        {/* Paragraph 1 - Trust thesis */}
        <p 
          className="text-[19px] md:text-[20px] leading-[1.8] mb-10"
          style={{ color: '#FDFBF7' }}
        >
          <span style={{ color: '#F5B800', fontWeight: 600 }}>Trust doesn't live in institutions anymore</span>. <span style={{ color: '#F5B800', fontWeight: 600 }}>It lives in stories</span>. And the best stories aren't written by committees or optimized for algorithms—they're built from something real.
        </p>

        {/* Yellow separator */}
        <div className="text-center my-8">
          <span style={{ color: '#F5B800', fontSize: '20px' }}>•</span>
        </div>

        {/* Paragraph 2 - CORE THESIS - Special treatment */}
        <div 
          className="p-8 rounded-lg mb-10"
          style={{
            background: 'rgba(245, 184, 0, 0.1)',
            borderLeft: '4px solid #F5B800'
          }}
        >
          <p 
            className="text-[20px] md:text-[22px] leading-[1.8]"
            style={{ color: '#FDFBF7' }}
          >
            <strong style={{ color: '#F5B800' }}>The personal is universal</strong>. What makes you different isn't some manufactured brand story—it's the thing you actually care about. The decision that shaped how you build. The standard you won't compromise on. When we find that, everything else aligns.
          </p>
        </div>

        {/* Yellow separator */}
        <div className="text-center my-8">
          <span style={{ color: '#F5B800', fontSize: '20px' }}>•</span>
        </div>

        {/* Paragraph 3 - Recognition */}
        <p 
          className="text-[18px] md:text-[19px] leading-[1.8] mb-10"
          style={{ color: '#FDFBF7' }}
        >
          Great work doesn't need to be sold—it needs to be recognized. And <span style={{ color: '#F5B800', fontWeight: 600 }}>recognition is trust</span>. The builders who last aren't the loudest. They're the ones people understand before they meet them. That's positioning. That's why <span style={{ color: '#F5B800', fontWeight: 600 }}>narrative beats advertising</span>.
        </p>

        {/* Yellow separator */}
        <div className="text-center my-8">
          <span style={{ color: '#F5B800', fontSize: '20px' }}>•</span>
        </div>

        {/* Paragraph 4 - What we do */}
        <p 
          className="text-[18px] md:text-[19px] leading-[1.8]"
          style={{ color: '#FDFBF7' }}
        >
          We work with people who've already done the work. Our job is simple: <span style={{ color: '#F5B800', fontWeight: 600 }}>strip the performance</span>, <span style={{ color: '#F5B800', fontWeight: 600 }}>reveal the essence</span>, and turn <span style={{ color: '#F5B800', fontWeight: 600 }}>craft into belief</span>. If that sounds like you, let's talk.
        </p>
      </div>
    </section>
  );
};

export default OpeningSection;

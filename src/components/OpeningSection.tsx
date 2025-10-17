const OpeningSection = () => {
  return (
    <section className="py-[140px] md:py-[140px] px-10 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1000px] mx-auto">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[42px] font-bold leading-[1.3] mb-[60px]"
          style={{ color: '#3D3835' }}
        >
          You built something <span style={{ color: '#F5B800' }}>worth believing in</span>. We help people see it.
        </h2>

        {/* Paragraph 1 - Trust thesis */}
        <p 
          className="text-[19px] md:text-[20px] leading-[1.8] mb-10"
          style={{ color: '#3D3835' }}
        >
          Trust moved. It used to live in institutions—governments, corporations, media. Not anymore.
        </p>

        {/* Yellow separator */}
        <div className="text-center my-8">
          <span style={{ color: '#F5B800', fontSize: '20px' }}>•</span>
        </div>

        {/* Paragraph 2 */}
        <p 
          className="text-[19px] md:text-[20px] leading-[1.8] mb-10"
          style={{ color: '#3D3835' }}
        >
          Now trust lives person-to-person. In stories where people see themselves. Not in what you sell, but in why you built it. Not in features, but in the human truth behind the craft.
        </p>

        {/* Yellow separator */}
        <div className="text-center my-8">
          <span style={{ color: '#F5B800', fontSize: '20px' }}>•</span>
        </div>

        {/* Paragraph 3 - The personal is universal */}
        <p 
          className="text-[19px] md:text-[20px] leading-[1.8] mb-10"
          style={{ color: '#3D3835' }}
        >
          <strong style={{ color: '#F5B800' }}>The personal is universal</strong>. Your struggles mirror theirs. Your insights unlock something they already knew but couldn't name. That's where connection happens—not through persuasion, but recognition.
        </p>

        {/* Yellow separator */}
        <div className="text-center my-8">
          <span style={{ color: '#F5B800', fontSize: '20px' }}>•</span>
        </div>

        {/* Paragraph 4 - What we do */}
        <p 
          className="text-[19px] md:text-[20px] leading-[1.8]"
          style={{ color: '#3D3835' }}
        >
          We help you tell that story. Strip the bullshit (from punk). Find the essence (from Rubin). Understand what actually lands (from builders). CRUDA turns expertise into narratives that create belief, not just attention.
        </p>
      </div>
    </section>
  );
};

export default OpeningSection;

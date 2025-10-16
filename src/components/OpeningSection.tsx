const OpeningSection = () => {
  return (
    <section className="py-20 md:py-[100px] px-8 md:px-[60px]" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[800px] mx-auto">
        {/* Headline - Left aligned */}
        <h2 className="text-[24px] font-bold mb-8 text-left" style={{ color: '#3D3835' }}>
          The work speaks. When it doesn't, we do.
        </h2>

        {/* Body paragraphs - Left aligned, essay style */}
        <div className="space-y-6 text-left">
          <p className="text-[18px] leading-[1.7]" style={{ color: '#3D3835' }}>
            CRUDA was built on a simple belief: great work shouldn't need to beg for attention.
          </p>
          
          <p className="text-[18px] leading-[1.7]" style={{ color: '#3D3835' }}>
            We borrowed from punk—strip the bullshit. From Rick Rubin—find the essence. From a decade in the field—understand what builders actually need.
          </p>
          
          <p className="text-[18px] leading-[1.7]" style={{ color: '#3D3835' }}>
            Most agencies sell noise. We build stories that create gravity and human connection. The difference isn't semantic. It's everything.
          </p>
          
          <p className="text-[18px] leading-[1.7]" style={{ color: '#3D3835' }}>
            If you've mastered your craft but can't explain why it matters, that's not your weakness. That's our job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;

const OpeningSection = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Main Headline - Centered */}
        <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[1.15] tracking-tight-2 text-center mb-12" style={{ color: '#3D3835' }}>
          We don't make content. We build a communication system that makes people trust you.
        </h2>

        {/* Yellow underline accent */}
        <div className="h-[2px] w-[80px] mx-auto mb-16" style={{ backgroundColor: '#F5B800' }} />

        {/* Subline */}
        <p className="text-xl md:text-2xl text-center leading-[1.65] max-w-[800px] mx-auto" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
          Content gets ignored. Positioning creates gravity.
        </p>
      </div>
    </section>
  );
};

export default OpeningSection;

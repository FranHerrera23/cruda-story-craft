const OpeningSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="font-display text-[42px] md:text-[52px] font-bold leading-[1.2] tracking-tight-2 mb-8" style={{ color: '#3D3835' }}>
          We don't make content.<br />We build the system that makes people trust you.
        </h2>

        <div className="h-[2px] w-[80px] mx-auto mb-12" style={{ backgroundColor: '#F5B800' }} />

        <p className="text-2xl md:text-[28px] leading-[1.5] animate-fade-in" style={{ 
          color: 'rgba(61, 56, 53, 0.85)',
          animationDelay: '0.4s'
        }}>
          Content gets ignored. Positioning creates gravity.
        </p>
      </div>
    </section>
  );
};

export default OpeningSection;

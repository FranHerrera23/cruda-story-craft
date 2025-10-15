
const HeroManifesto = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-40" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[900px] mx-auto px-6 md:px-16 text-center">
        <h1 className="font-display text-5xl md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 animate-fade-in" style={{ color: '#3D3835' }}>
          Great work doesn't<br />explain itself.
        </h1>
        
        <p className="text-xl md:text-2xl font-normal leading-[1.65] max-w-[750px] mx-auto animate-fade-in" style={{ animationDelay: '0.3s', color: 'rgba(61, 56, 53, 0.85)' }}>
          We build the positioning system that makes people trust you before you walk in the room.
        </p>
      </div>
    </section>
  );
};

export default HeroManifesto;

const WhoThisIsntFor = () => {
  return (
    <section className="py-30 px-6 md:px-30 border-y" style={{ backgroundColor: '#FDFBF7', borderColor: 'rgba(61, 56, 53, 0.1)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: '#3D3835' }}>
          Where We Add Most Value
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto" style={{ color: 'rgba(61, 56, 53, 0.8)' }}>
          We work best with builders who've proven product-market fit and are ready to translate their craft into words that land.
        </p>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold pb-3" style={{ 
              color: '#3D3835',
              borderBottom: '2px solid rgba(61, 56, 53, 0.15)'
            }}>
              You're likely a fit if:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: '#10B981' }}>✓</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  Your company does <strong>$5M+ in annual revenue</strong>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: '#10B981' }}>✓</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You've been building for at least 2+ years
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: '#10B981' }}>✓</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You know your work is strong, but struggle to explain it
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: '#10B981' }}>✓</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You're ready to commit to clarity, not just visibility
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: '#10B981' }}>✓</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You value depth over speed
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold pb-3" style={{ 
              color: '#3D3835',
              borderBottom: '2px solid rgba(61, 56, 53, 0.15)'
            }}>
              We're probably not the right fit if:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: 'rgba(61, 56, 53, 0.4)' }}>—</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You're pre-revenue or in early testing phase
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: 'rgba(61, 56, 53, 0.4)' }}>—</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You're looking for quick-win marketing tactics
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: 'rgba(61, 56, 53, 0.4)' }}>—</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  You need a full marketing team (we focus on strategic storytelling)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1" style={{ color: 'rgba(61, 56, 53, 0.4)' }}>—</span>
                <span className="text-lg leading-relaxed" style={{ color: 'rgba(61, 56, 53, 0.9)' }}>
                  Speed matters more than substance to you
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsntFor;

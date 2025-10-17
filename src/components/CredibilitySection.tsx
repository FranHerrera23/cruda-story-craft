const CredibilitySection = () => {
  return (
    <section className="py-[140px] px-10 md:px-20" style={{ backgroundColor: '#E8DED1' }}>
      <div className="max-w-[900px] mx-auto text-center">
        <h2 
          className="text-[28px] md:text-[32px] font-bold mb-4"
          style={{ color: '#3D3835' }}
        >
          The people we work with share a pattern.
        </h2>
        
        {/* Yellow underline */}
        <div 
          className="h-[3px] w-[80px] mx-auto mb-8"
          style={{ backgroundColor: '#F5B800' }}
        />

        {/* Paragraph 1 */}
        <p 
          className="text-[17px] md:text-[18px] leading-[1.8] mb-8"
          style={{ color: '#3D3835' }}
        >
          They're exceptional at what they do, but they've hit the same wall: <span style={{ color: '#F5B800', fontWeight: 600 }}>expertise that doesn't translate</span>. They know their work is good. They've proven it. But when it comes time to explain <em>why</em> it matters—why someone should choose them, why their approach is different, why the premium is justified—the words don't land.
        </p>

        {/* Paragraph 2 */}
        <p 
          className="text-[17px] md:text-[18px] leading-[1.8] mb-10"
          style={{ color: '#3D3835' }}
        >
          That <span style={{ color: '#F5B800', fontWeight: 600 }}>gap—between mastery and articulation</span>—is where we work. We don't just write better copy or design prettier slides. We find the <span style={{ color: '#F5B800', fontWeight: 600 }}>personal truth that makes the universal click</span>. The thing you've always known but never said out loud. That's the story people recognize. That's the story they trust.
        </p>

        {/* Final line - larger, bolder */}
        <p 
          className="text-[19px] md:text-[21px] font-semibold mt-8"
          style={{ color: '#3D3835' }}
        >
          That's what turns craft into belief.
        </p>
      </div>
    </section>
  );
};

export default CredibilitySection;

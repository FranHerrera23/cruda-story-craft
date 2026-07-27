const EmotionalHook = () => {
  return (
    <section className="py-[100px] px-10 md:px-16" style={{ backgroundColor: '#3D3835' }}>
      <div className="max-w-[700px] mx-auto text-center">
        <p className="text-[28px] md:text-[36px] font-normal leading-[1.4] mb-10" style={{ color: '#FDFBF7' }}>
          If you've read this far, you <span style={{ color: '#E8623A', fontWeight: 600 }}>felt something</span>.
        </p>
        <p className="text-[20px] md:text-[24px] font-normal leading-[1.8]" style={{ color: '#FDFBF7' }}>
          That feeling is the <span style={{ color: '#E8623A', fontWeight: 600 }}>beginning</span>. Let's see where it goes.
        </p>
      </div>
    </section>
  );
};

export default EmotionalHook;

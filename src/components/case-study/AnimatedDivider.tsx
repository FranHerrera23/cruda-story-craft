import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedDividerProps {
  bgColor?: string;
}

export const AnimatedDivider = ({ bgColor = '#F5F1E8' }: AnimatedDividerProps) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      className={`py-16 flex justify-center items-center gap-3 animate-on-scroll animate-dots ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
    </section>
  );
};

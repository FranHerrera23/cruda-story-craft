import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'header' | 'paragraph' | 'image' | 'image-left' | 'image-right' | 'box' | 'carousel' | 'dots';
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'paragraph' 
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClass = `animate-on-scroll animate-${animationType} ${isVisible ? 'visible' : ''}`;

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export const RedDotDivider = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      className={`py-16 flex justify-center items-center gap-3 animate-on-scroll animate-dots ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
      <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2E63' }} />
    </section>
  );
};

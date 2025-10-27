import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'carousel';
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  style,
  variant = 'default' 
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  const variantClass = variant === 'carousel' ? 'animate-carousel' : '';

  return (
    <section
      // @ts-ignore - section element ref
      ref={elementRef}
      className={`animate-on-scroll ${variantClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

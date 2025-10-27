import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CSSProperties, ReactNode } from 'react';

interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  stagger?: boolean;
}

export const AnimatedParagraph = ({ children, className = '', style = {}, stagger = false }: AnimatedParagraphProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLParagraphElement>();
  
  const animClass = stagger ? 'stagger-paragraph' : 'animate-paragraph';
  
  return (
    <p 
      ref={elementRef}
      className={`animate-on-scroll ${animClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};

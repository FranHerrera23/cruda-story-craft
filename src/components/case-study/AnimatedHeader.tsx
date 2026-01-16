'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CSSProperties, ReactNode } from 'react';

interface AnimatedHeaderProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const AnimatedHeader = ({ children, className = '', style = {} }: AnimatedHeaderProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLHeadingElement>();
  
  return (
    <h2 
      ref={elementRef}
      className={`animate-on-scroll animate-header ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </h2>
  );
};

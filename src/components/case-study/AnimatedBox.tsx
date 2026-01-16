'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedBoxProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedBox = ({ 
  children, 
  className = '', 
  style 
}: AnimatedBoxProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll animate-box ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

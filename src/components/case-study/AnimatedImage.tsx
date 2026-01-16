'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CSSProperties } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  position?: 'left' | 'right' | 'single';
}

export const AnimatedImage = ({ src, alt, className = '', style = {}, position = 'single' }: AnimatedImageProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  const animClass = position === 'left' ? 'animate-image-left' 
                  : position === 'right' ? 'animate-image-right' 
                  : 'animate-image';
  
  return (
    <div 
      ref={elementRef}
      className={`animate-on-scroll ${animClass} ${isVisible ? 'visible' : ''}`}
    >
      <img 
        src={src}
        alt={alt}
        className={className}
        style={style}
      />
    </div>
  );
};

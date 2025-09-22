
import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ children, className = '' }) => {
  const text = typeof children === 'string' ? children : '';
  return (
    <div
      className={`glitch-text font-orbitron ${className}`}
      data-text={text}
    >
      {children}
    </div>
  );
};

export default GlitchText;

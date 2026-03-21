"use client";

import React, { useEffect, useState } from 'react';

interface BlinkingCursorProps {
  char?: string;
  className?: string;
}

export const BlinkingCursor: React.FC<BlinkingCursorProps> = ({ 
  char = '█',
  className = ''
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 530); // ~500ms blink rate standard for terminals
    
    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block ${className}`} 
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {char}
    </span>
  );
};

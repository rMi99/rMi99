import React from 'react';

interface TerminalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export const TerminalButton: React.FC<TerminalButtonProps> = ({ 
  children, 
  className = '', 
  active = false,
  ...props 
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-mono px-3 py-1 border border-primary transition-colors
        ${active 
          ? 'bg-primary text-background' 
          : 'bg-transparent text-primary hover:bg-primary hover:text-background'
        }
        ${className}
      `}
      {...props}
    >
      [ {children} ]
    </button>
  );
};

import React from 'react';

interface TerminalCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({
  title,
  children,
  className = '',
  bodyClassName = ''
}) => {
  return (
    <div className={`border border-primary bg-background flex flex-col ${className}`}>
      {/* ASCII Header */}
      <div className="flex items-center text-primary px-2 py-1 border-b border-primary bg-primary/10 select-none">
        <span>+--- {title.toUpperCase()} ---+</span>
        <div className="ml-auto flex gap-2">
          <span>[-]</span>
          <span>[X]</span>
        </div>
      </div>
      
      {/* Body */}
      <div className={`p-4 flex-grow overflow-auto ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

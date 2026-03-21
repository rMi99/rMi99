import React from 'react';

interface TerminalPromptProps {
  command?: string;
  path?: string;
  className?: string;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({ 
  command, 
  path = '~', 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-2 font-mono whitespace-nowrap overflow-x-auto no-scrollbar ${className}`}>
      <span className="text-secondary">user@rmi99</span>
      <span className="text-primary">:</span>
      <span className="text-blue-400">{path}</span>
      <span className="text-primary">$</span>
      {command && <span className="ml-2 text-primary">{command}</span>}
    </div>
  );
};

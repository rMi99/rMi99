import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';

export const About: React.FC = () => {
  return (
    <TerminalCard title="about" className="h-full">
      <div className="font-mono text-sm leading-relaxed space-y-4 text-primary/90">
        <p>
          <span className="text-secondary">#</span> System Profile Analysis
        </p>
        <p>
          Highly adaptable DevOps & Full-Stack Engineer from Galle, Sri Lanka. 
          Bridging the gap between software development and IT operations with a strong focus on automation, 
          scalability, and security.
        </p>
        <p>
          <span className="text-secondary">#</span> Core Capabilities
        </p>
        <ul className="list-disc list-inside pl-2 space-y-1 text-primary/80">
          <li>Architecting cloud-native solutions</li>
          <li>Developing resilient microservices</li>
          <li>Designing CI/CD pipelines for rapid deployment</li>
          <li>Exploring and integrating Machine Learning models</li>
        </ul>
      </div>
    </TerminalCard>
  );
};

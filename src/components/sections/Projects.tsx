import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';

const PROJECTS = [
  {
    name: "portfolio-v2",
    tech: "Next.js + Tailwind + Framer Motion",
    status: "OK",
    url: "https://github.com/rMi99/portfolio-v2"
  },
  {
    name: "devops-toolkit",
    tech: "Python automation scripts",
    status: "OK",
    url: "https://github.com/rMi99/devops-toolkit"
  },
  {
    name: "go-microservice-template",
    tech: "Go + Docker + Kubernetes",
    status: "OK",
    url: "https://github.com/rMi99/go-microservice-template"
  }
];

export const Projects: React.FC = () => {
  return (
    <TerminalCard title="projects" className="h-full">
      <div className="font-mono space-y-4">
        <p className="text-secondary">$ ls -l ~/projects</p>
        
        <div className="space-y-4 overflow-x-auto no-scrollbar">
          {PROJECTS.map((project, i) => (
            <div key={i} className="flex flex-col text-sm border-b border-primary/20 pb-2">
              <div className="flex justify-between items-center mb-1">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:bg-primary hover:text-background px-1 transition-colors"
                >
                  repo: {project.name}
                </a>
                <span className="text-secondary ml-4">
                  --status [{project.status}]
                </span>
              </div>
              <span className="text-primary/70 px-1">
                tech: {project.tech}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          <a 
            href="https://github.com/rMi99" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm bg-primary text-background px-2 py-1 font-bold hover:bg-transparent hover:text-primary border border-primary transition-colors"
          >
            [ VIEW_ALL_REPOS ]
          </a>
        </div>
      </div>
    </TerminalCard>
  );
};

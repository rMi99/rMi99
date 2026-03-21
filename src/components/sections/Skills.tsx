import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';

const SKILLS = {
  "DevOps & Cloud": [
    { name: "Terraform", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Docker", level: 90 },
    { name: "Kubernetes", level: 75 },
    { name: "Jenkins", level: 80 },
    { name: "Grafana", level: 70 },
    { name: "New Relic", level: 65 },
  ],
  "Programming": [
    { name: "Java", level: 85 },
    { name: "Python", level: 85 },
    { name: "Go", level: 75 },
    { name: "PHP", level: 80 },
    { name: "C#", level: 70 },
    { name: "Bash", level: 90 },
  ],
  "Frameworks": [
    { name: "React", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Spring", level: 75 },
    { name: "Laravel", level: 80 },
    { name: "Fiber", level: 70 },
    { name: ".NET", level: 65 },
  ],
  "ML Tools": [
    { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 65 },
    { name: "Scikit-learn", level: 75 },
  ]
};

const renderProgressBar = (level: number) => {
  const totalBlocks = 15;
  const filledBlocks = Math.round((level / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  
  return `[${'█'.repeat(filledBlocks)}${'.'.repeat(emptyBlocks)}]`;
};

export const Skills: React.FC = () => {
  return (
    <TerminalCard title="skills" className="h-full">
      <div className="font-mono space-y-6">
        <p className="text-secondary">$ ./analyze-skills.sh --all</p>
        
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <h3 className="text-secondary font-bold uppercase underline decoration-primary/30 underline-offset-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm mt-2">
              {items.map((skill) => (
                <div key={skill.name} className="flex justify-between items-center whitespace-nowrap overflow-hidden">
                  <span className="text-primary truncate mr-4">{skill.name}</span>
                  <span className="text-primary/70">{renderProgressBar(skill.level)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalCard>
  );
};

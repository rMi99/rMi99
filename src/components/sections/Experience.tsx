import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';

const EXPS = [
  {
    role: "Associate DevOps Engineer",
    company: "Rightmo Web Solution LLC",
    duration: "2024–Present",
  },
  {
    role: "Associate Software Engineer",
    company: "Rightmo Web Solution LLC",
    duration: "2023–2024",
  },
  {
    role: "Cyber Security Operator",
    company: "Sri Lanka Army",
    duration: "2021–2022",
  }
];

export const Experience: React.FC = () => {
  return (
    <TerminalCard title="experience" className="h-full">
      <div className="font-mono space-y-4">
        <p className="text-secondary">$ history | grep work</p>
        <div className="space-y-4 pl-2 border-l border-primary/20">
          {EXPS.map((exp, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-primary font-bold">
                {`[${i + 1}]`} {exp.role}
              </span>
              <span className="text-primary/70 ml-6">
                @ {exp.company}
              </span>
              <span className="text-primary/50 ml-6 text-xs">
                {exp.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

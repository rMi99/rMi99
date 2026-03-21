import React from 'react';
import { TerminalCard } from '../ui/TerminalCard';

const EDU = [
  {
    degree: "BEng (Hons) Software Engineering",
    institution: "London Metropolitan University",
    duration: "2024–2025"
  },
  {
    degree: "NDICT",
    institution: "Vocational Training Authority",
    duration: "2020–2021"
  }
];

export const Education: React.FC = () => {
  return (
    <TerminalCard title="education" className="h-full">
      <div className="font-mono space-y-4">
        <p className="text-secondary">$ cat /var/log/education.log</p>
        <div className="space-y-4">
          {EDU.map((edu, idx) => (
            <div key={idx} className="border border-primary/20 p-2 text-sm bg-primary/5">
              <div className="text-primary font-bold">
                {`> ${edu.degree}`}
              </div>
              <div className="text-primary/70 mt-1 pl-4">
                {`inst: ${edu.institution}`}
              </div>
              <div className="text-primary/50 mt-1 pl-4 text-xs">
                {`time: ${edu.duration}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

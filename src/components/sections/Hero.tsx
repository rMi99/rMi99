"use client";

import React, { useState, useEffect } from 'react';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { BlinkingCursor } from '../ui/BlinkingCursor';

const asciiLogo = `
      ___  ____  _  ___  ___  
     /  / / __ \\/ |/ (_) __ \\ 
    / /  / / / /    / / / / /
   / /  / / / / /| / / /_/ / 
  /___//_/ /_/_/ |_/_/\\____/  
`;

const INITIAL_TEXT = "> initializing profile...\n> loading devops engineer: ramisha_gimhana\n> SYSTEM READY\n";

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < INITIAL_TEXT.length) {
        setTypedText(INITIAL_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 font-mono w-full min-h-[40vh] py-8">
      {/* ASCII Logo */}
      <pre className="text-secondary text-xs sm:text-sm md:text-base font-bold whitespace-pre-wrap leading-tight hidden sm:block">
        {asciiLogo}
      </pre>

      {/* Typing Effect */}
      <div className="text-primary/80 whitespace-pre-wrap min-h-[4rem]">
        {typedText}
        {!isTypingDone && <BlinkingCursor />}
      </div>

      {isTypingDone && (
        <div className="mt-4 flex flex-col gap-2 animate-fade-in">
          <TerminalPrompt path="~" command="./whoami.sh" />
          <div className="mt-2 pl-4 border-l-2 border-primary/30">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">Ramisha Gimhana</h1>
            <h2 className="text-lg md:text-xl text-secondary mb-4">DevOps & Full-Stack Engineer | ML Enthusiast</h2>
            <p className="text-primary/90 max-w-2xl">
              Passionate about building scalable systems, automating workflows, and implementing ML solutions.
            </p>
            <p className="text-primary/70 mt-2">📍 Galle, Sri Lanka</p>
          </div>
          
          <div className="mt-6 flex gap-4 text-sm">
            <a href="https://github.com/rMi99" target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline decoration-primary underline-offset-4">
              [ GitHub ]
            </a>
            <a href="https://www.linkedin.com/in/ramisha-gimhana-024a23191/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline decoration-primary underline-offset-4">
              [ LinkedIn ]
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

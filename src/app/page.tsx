import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary p-2 sm:p-4 md:p-6 lg:p-8 font-mono">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Top bar / Status bar */}
        <div className="flex justify-between items-center border-b border-primary/50 pb-2 mb-4 text-xs sm:text-sm">
          <span>rMi99-SYSTEM_ONLINE</span>
          <span className="text-secondary animate-pulse">■</span>
        </div>

        {/* Full-width Hero */}
        <div className="mb-8">
          <Hero />
        </div>

        {/* Tmux-style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col">
            <div className="flex-1">
              <About />
            </div>
            <div className="flex-1">
              <Education />
            </div>
            <div className="flex-1">
              <Contact />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-4 flex flex-col">
            <div className="flex-none">
              <Experience />
            </div>
            <div className="flex-1">
              <Skills />
            </div>
            <div className="flex-1">
              <Projects />
            </div>
          </div>

        </div>

        {/* Bottom bar / Footer */}
        <div className="mt-8 pt-4 border-t border-primary/50 flex justify-between text-xs text-primary/50">
          <span>&copy; {new Date().getFullYear()} Ramisha Gimhana</span>
          <span>TERMINAL v2.0.0 // STATUS: [OK]</span>
        </div>
        
      </div>
    </main>
  );
}

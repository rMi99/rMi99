"use client";

import React, { useState } from 'react';
import { TerminalCard } from '../ui/TerminalCard';
import { TerminalButton } from '../ui/TerminalButton';
import { BlinkingCursor } from '../ui/BlinkingCursor';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate network delay
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <TerminalCard title="contact" className="h-full">
      <div className="font-mono space-y-4 text-sm">
        <p className="text-secondary">$ send-message --to=&quot;rmigs999@gmail.com&quot;</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-primary/70">--name=</label>
            <input 
              id="name"
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-transparent border border-primary/50 text-primary p-2 focus:outline-none focus:border-primary w-full"
              placeholder="Enter your name"
              disabled={status !== "idle"}
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-primary/70">--email=</label>
            <input 
              id="email"
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-transparent border border-primary/50 text-primary p-2 focus:outline-none focus:border-primary w-full"
              placeholder="Enter your email"
              disabled={status !== "idle"}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-primary/70">--message=</label>
            <textarea 
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-transparent border border-primary/50 text-primary p-2 focus:outline-none focus:border-primary w-full resize-none"
              placeholder="Type your message here..."
              disabled={status !== "idle"}
            />
          </div>

          <div className="pt-2">
            <TerminalButton type="submit" disabled={status !== "idle"} className="w-full sm:w-auto">
              {status === "idle" ? "EXECUTE" : status === "sending" ? "TRANSMITTING..." : "DELIVERED [OK]"}
            </TerminalButton>
          </div>
        </form>

        {status === "sending" && (
          <div className="text-secondary mt-4 animate-pulse">
            &gt; transmitting data packets <BlinkingCursor />
          </div>
        )}

        {status === "sent" && (
          <div className="text-primary mt-4 font-bold border-l-2 border-primary pl-2">
            &gt; connection closed. message successfully delivered to rMi99.
          </div>
        )}
      </div>
    </TerminalCard>
  );
};

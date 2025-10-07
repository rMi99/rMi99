"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Download, Mail, Globe, Youtube, FileText, Code, Shield } from "lucide-react"

// ...existing code...
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Left side - Profile Image */}
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl glow" />
            <img
              src="/profile.png"
              alt="Ramisha Gimhana"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6 order-1 md:order-2">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            <span className="text-primary">Ramisha Gimhana</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">DevOps & Full-Stack Engineer</h2>
          <p className="text-muted-foreground">From Galle, Sri Lanka</p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A passionate DevOps & Full-Stack Engineer with a strong foundation in cloud technologies, automation, and
            modern web development. Dedicated to building scalable and efficient solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="/Ramisha_Gimhana_CV.pdf" download aria-label="Download CV">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#contact" aria-label="Contact Ramisha">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            {[
              { href: "https://www.linkedin.com/in/ramisha-gimhana-024a23191/", label: "LinkedIn", Icon: Linkedin },
              { href: "https://github.com/rMi99", label: "GitHub", Icon: Github },
              { href: 'https://www.youtube.com/ramiya/', alt: 'YouTube', Icon: Youtube },
              { href: 'https://twitter.com/', alt: 'Twitter', Icon: Twitter },
              { href: 'https://stackoverflow.com/users/15619587/rmi99', alt: 'StackOverflow', Icon: Code },
              { href: 'https://rmi99.medium.com/', alt: 'Medium', Icon: FileText },
              { href: 'https://app.hackthebox.com/profile/899591', alt: 'HackTheBox', Icon: Shield },
            ].map((item) => {
              const text = item.label ?? item.alt ?? item.href
              const Icon = item.Icon
              return (
                <a
                  key={text}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  aria-label={text}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* visible label on md+ screens, keep accessible text for screen-readers */}
                  <span className="sr-only">{text}</span>
                  <span className="text-xs text-muted-foreground hidden md:block">{text}</span>
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
// ...existing code...
export default HeroSection
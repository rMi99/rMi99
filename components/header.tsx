"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="w-5 h-5 text-primary" />
          <span>Ramisha Gimhana</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-sm hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <img
          src="profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  )
}

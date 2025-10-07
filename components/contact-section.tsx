"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            I'm currently available for freelance work and open to discussing new projects. Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-3">ramisha@rightmo.lk</p>
            <a href="mailto:ramisha@rightmo.lk" className="text-sm text-primary hover:underline">
              Send a message
            </a>
          </Card>

          <Card className="glass p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground mb-3">+94 77 123 4567</p>
            <a href="tel:+94771234567" className="text-sm text-primary hover:underline">
              Call me
            </a>
          </Card>

          <Card className="glass p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm text-muted-foreground mb-3">Galle, Sri Lanka</p>
            <a href="#" className="text-sm text-primary hover:underline">
              View on map
            </a>
          </Card>
        </div>

        <Card className="glass p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input id="name" placeholder="Your name" className="bg-background/50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background/50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Your message..." rows={6} className="bg-background/50" />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { RepositoriesSection } from "@/components/repositories-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg fixed inset-0 -z-10" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RepositoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

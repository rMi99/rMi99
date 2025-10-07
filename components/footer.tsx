import { Github, Linkedin, Twitter, LinkIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rMi99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://rmi99.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">© 2025 Ramisha Gimhana. All rights reserved.</p>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">Built with ❤️ using Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

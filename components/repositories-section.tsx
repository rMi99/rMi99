import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"

const repositories = [
  {
    name: "portfolio-v2",
    description: "My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    language: "JavaScript",
    stars: 128,
    url: "https://github.com/rMi99/portfolio-v2",
  },
  {
    name: "devops-toolkit",
    description: "A collection of scripts and tools for automating DevOps tasks and workflows.",
    language: "Python",
    stars: 96,
    url: "https://github.com/rMi99/devops-toolkit",
  },
  {
    name: "go-microservice-template",
    description: "A template for building microservices in Go, featuring Docker and Kubernetes configs.",
    language: "Go",
    stars: 72,
    url: "https://github.com/rMi99/go-microservice-template",
  },
]

export function RepositoriesSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Repositories</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my open-source projects. Check out my GitHub for more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {repositories.map((repo) => (
            <Card key={repo.name} className="glass p-6 hover:border-primary/50 transition-all group">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{repo.description}</p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        repo.language === "JavaScript"
                          ? "bg-yellow-500"
                          : repo.language === "Python"
                            ? "bg-blue-500"
                            : "bg-cyan-500"
                      }`}
                    />
                    <span className="text-muted-foreground">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{repo.stars}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

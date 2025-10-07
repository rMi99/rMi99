"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
const experiences = [
  {
    title: 'Associate DevOps Engineer',
    company: 'Rightmo Web Solution LLC.',
    badge: '2024 - Present',
    period: 'Oct 2023 - Present',
  },
  {
    title: 'Associate Software Engineer',
    company: 'Rightmo Web Solution LLC.',
    badge: '2023 - 2024',
    period: 'Apr 2023 - Sep 2023',
  },
  {
    title: 'Cyber Security Operator',
    company: 'Sri Lanka Army',
    badge: '2021 - 2022',
    period: 'Aug 2021 - Sep 2022',
  },
];


const education = [
  {
    title: 'BEng (Hons) in Software Engineering',
    school: 'University of London Metropolitan',
    period: '2024 - 2025',
  },
  {
    title: 'National Diploma in ICT (NDICT)',
    school: 'Vocational Training Authority',
    period: '2020 - 2021',
  },
];


  const skillGroups = [
    { title: 'DevOps & Cloud', items: ['Terraform', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Grafana', 'New Relic'] },
    { title: 'Programming', items: ['Java', 'Python', 'Go' , "PHP" , "C#" ,"Bash"] },
    { title: 'Frameworks', items: ['React', 'NextJs', 'Node.js', 'Spring', "Laravel" , "Fiber" , ".NET" ] },
    { title: 'ML Tools', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'] },
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Here's a little bit about my journey, experience, and skills.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Experience */}
          <div id="experience">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.title} className="glass p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                    <Badge variant="secondary">{exp.badge}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm leading-relaxed">{exp.period}</p>
                </Card>
              ))}

            <h3 className="text-2xl font-bold mb-6 mt-12">Education</h3>
            {education.map((ed) => (
              <Card key={ed.title} className="glass p-6 hover:border-primary/50 transition-colors">
                <h4 className="text-lg font-semibold text-primary mb-2">{ed.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{ed.school}</p>
                <p className="text-sm leading-relaxed">{ed.period}</p>
              </Card>
            ))}
            </div>
          </div>

          {/* Skills */}
          <div id="skills">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <Card key={group.title} className="glass p-6">
                  <h4 className="font-semibold mb-4 text-primary">{group.title}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                    {group.items.map((item) => (
                      <SkillIcon key={item} name={item} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillIcon({ name }: { name: string }) {
  // map common names to simple-icons slugs
  const overrides: Record<string, string> = {
    'c#': 'csharp',
    'csharp': 'csharp',
    '.net': 'dotnet',
    'dotnet': 'dotnet',
    'nextjs': 'nextdotjs',
    'next.js': 'nextdotjs',
    'node.js': 'nodedotjs',
    'nodejs': 'nodedotjs',
    'scikit-learn': 'scikitlearn',
    'tensorflow': 'tensorflow',
    'pytorch': 'pytorch',
    'aws': 'amazonaws',
    'kubernetes': 'kubernetes',
    'docker': 'docker',
    'java': 'java',
    'python': 'python',
    'go': 'go',
    'php': 'php',
    'bash': 'gnubash',
    'spring': 'spring',
  'terraform': 'terraform',
  'jenkins': 'jenkins',
  'grafana': 'grafana',
  'new relic': 'newrelic',
    'laravel': 'laravel',
    'react': 'react',
    'next': 'nextdotjs',
    '.net core': 'dotnet',
    '.net 6': 'dotnet',
    '.net 7': 'dotnet',
  }

  const slugify = (s: string) => {
    const raw = s.trim().toLowerCase()
    if (overrides[raw]) return overrides[raw]
    return raw.replace(/[^a-z0-9]/g, '')
  }

  const slug = slugify(name)
  const localUrl = `/icons/${slug}.svg`
  const cdnUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`

  const [svgSrc, setSvgSrc] = React.useState<string | null>(null)
  const [failed, setFailed] = React.useState(false)

  // initials fallback
  const initials = name
    .split(/\s|\.|-|_/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')

  React.useEffect(() => {
    let mounted = true
    const storageKey = `si-${slug}`

    // If cached in localStorage, use it (data URL)
    const cached = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null
    if (cached) {
      setSvgSrc(`data:image/svg+xml;utf8,${encodeURIComponent(cached)}`)
      return
    }

    // Try fetching local file first
    fetch(localUrl, { method: 'GET' })
      .then((res) => {
        if (!mounted) return
        if (res.ok) return res.text()
        // otherwise fetch CDN
        return fetch(cdnUrl).then((r) => (r.ok ? r.text() : Promise.reject('cdn')))
      })
      .then((svgText) => {
        if (!mounted) return
        if (svgText) {
          try {
            window.localStorage.setItem(storageKey, svgText)
          } catch (e) {
            // ignore quota errors
          }
          setSvgSrc(`data:image/svg+xml;utf8,${encodeURIComponent(svgText)}`)
        }
      })
      .catch(() => {
        if (!mounted) return
        // mark failed so we show initials fallback
        setFailed(true)
      })

    return () => {
      mounted = false
    }
  }, [localUrl, cdnUrl, slug])

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        {svgSrc && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={svgSrc} alt={name} className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 rounded flex items-center justify-center bg-primary/20 text-[11px] font-semibold">{initials}</div>
        )}
      </div>
      <span className="text-xs font-medium text-center">{name}</span>
    </div>
  )
}

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
    { title: 'DevOps & Cloud', items: ['AWS', 'Docker', 'Kubernetes'] },
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
                  <div className="grid grid-cols-3 gap-4">
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
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <img src={`/.jpg?height=32&width=32&query=${name}+logo`} alt={name} className="w-8 h-8" />
      </div>
      <span className="text-xs font-medium text-center">{name}</span>
    </div>
  )
}

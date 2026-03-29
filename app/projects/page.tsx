import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Proyectos',
}

const projects = [
  {
    name: 'indacode.me',
    description: 'Portfolio personal y blog. Next.js 14, App Router, Tailwind CSS, desplegado en Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/indacode/indacode.me',
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl font-medium text-text-primary mb-12">Proyectos</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}

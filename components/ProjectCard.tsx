interface ProjectCardProps {
  name: string
  description: string
  techStack: string[]
  githubUrl: string
}

export default function ProjectCard({ name, description, techStack, githubUrl }: ProjectCardProps) {
  return (
    <div className="border border-[#222222] bg-white/5 rounded-lg p-6 hover:border-[#333333] transition-colors flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-base font-medium text-text-primary">{name}</h2>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on GitHub`}
          className="text-text-secondary hover:text-text-primary transition-colors shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-text-secondary border border-[#333333] px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

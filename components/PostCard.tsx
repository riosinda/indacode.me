import Link from 'next/link'

interface PostCardProps {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  is_newest: boolean
}

export default function PostCard({ slug, title, date, description, tags, is_newest }: PostCardProps) {
  return (
    <article className="group py-3">
      <div className="flex items-start justify-between gap-4 mb-2">
        <Link href={`/posts/${slug}`} className="flex items-center gap-2">
          <h2 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
            {title}
          </h2>
          {is_newest && (
            <span className="flex items-center gap-1 text-xs font-mono text-accent shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              New
            </span>
          )}
        </Link>
        <time className="text-xs text-text-secondary shrink-0 mt-1">{date}</time>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed mb-3">{description}</p>
      {tags.length > 0 && (
        <div className="flex items-center gap-3">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-text-secondary/60">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

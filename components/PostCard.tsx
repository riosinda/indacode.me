import Link from 'next/link'

interface PostCardProps {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export default function PostCard({ slug, title, date, description, tags }: PostCardProps) {
  return (
    <article className="group py-6">
      <div className="flex items-start justify-between gap-4 mb-2">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
            {title}
          </h2>
        </Link>
        <time className="text-xs text-text-secondary shrink-0 mt-1">{date}</time>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed mb-3">{description}</p>
      {tags.length > 0 && (
        <div className="flex items-center gap-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-text-secondary/60">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

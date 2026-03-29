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
    <article className="border border-[#222222] bg-white/5 rounded-lg p-6 hover:border-[#333333] transition-colors">
      <Link href={`/blog/${slug}`}>
        <h2 className="text-base font-medium text-text-primary hover:text-accent transition-colors mb-1">
          {title}
        </h2>
      </Link>
      <time className="text-xs text-text-secondary">{date}</time>
      <p className="text-sm text-text-secondary mt-2 leading-relaxed">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

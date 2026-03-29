import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="text-xs text-text-secondary hover:text-accent transition-colors mb-10 inline-block"
      >
        ← Blog
      </Link>
      <header className="mb-12">
        <h1 className="text-2xl font-medium text-text-primary mb-4">{post.title}</h1>
        <div className="flex items-center gap-4">
          <time className="text-xs text-text-secondary">{post.date}</time>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      <article
        className="prose prose-invert prose-sm max-w-none font-serif prose-headings:font-sans prose-headings:font-medium prose-a:text-accent prose-code:font-mono"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  )
}

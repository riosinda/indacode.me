import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import SharePost from '@/components/SharePost'

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
        ← Posts
      </Link>
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-medium text-text-primary">{post.title}</h1>
          {post.is_newest && (
            <span className="flex items-center gap-1 text-xs font-mono text-accent shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              New
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <time className="text-xs text-text-secondary">{post.date}</time>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-text-secondary/60">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      <article
        className="prose dark:prose-invert max-w-none prose-headings:font-medium prose-a:text-accent prose-code:font-mono"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <SharePost slug={post.slug} title={post.title} />
    </div>
  )
}

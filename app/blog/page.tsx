import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl font-medium text-text-primary mb-2">Blog</h1>
      <p className="text-sm text-text-secondary mb-12">Notas sobre AI, ML, APIs y sistemas en producción.</p>
      {posts.length === 0 ? (
        <p className="text-sm text-text-secondary">No hay posts publicados todavía.</p>
      ) : (
        <div className="border-t border-b border-border/40 divide-y divide-border/40">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  )
}

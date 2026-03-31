import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl font-medium text-text-primary mb-2">Posts</h1>
      <p className="text-sm text-text-secondary mb-6">Posts about AI, ML, APIs, and production systems.</p>
      <hr className="border-border mb-4" />
      {posts.length === 0 ? (
        <p className="text-sm text-text-secondary">No posts published yet.</p>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  )
}

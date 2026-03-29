import Image from 'next/image'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <section className="mb-20">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-border flex-shrink-0">
            <Image
              src="/images/avatar.jpeg"
              alt="José Indalecio Ríos"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-medium text-text-primary mb-3">
              José Indalecio Ríos
            </h1>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              AI Engineer. I build language systems, ML pipelines, and production APIs.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="text-sm bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded transition-colors"
              >
                View projects
              </Link>
              <Link
                href="/blog"
                className="text-sm border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary px-4 py-2 rounded transition-colors"
              >
                Read blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
              Latest posts
            </h2>
            <Link href="/blog" className="text-sm text-accent hover:text-accent/80 transition-colors">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

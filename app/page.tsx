import Image from 'next/image'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import { getAllPosts } from '@/lib/posts'

const featuredProjects = [
  {
    name: 'indacode.me',
    description: 'Portfolio personal y blog. Next.js 14, App Router, Tailwind CSS, desplegado en Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/riosinda/indacode.me',
  },
  {
    name: 'RAG Pipeline',
    description: 'Pipeline de retrieval-augmented generation con LangGraph, embeddings y FastAPI como backend.',
    techStack: ['Python', 'LangGraph', 'FastAPI'],
    githubUrl: 'https://github.com/riosinda',
  },
]

const THREADS_ICON = "M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883Z"

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2)

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="self-center sm:self-auto w-36 h-36 rounded-full overflow-hidden border border-border flex-shrink-0">
            <Image
              src="/images/avatar.jpeg"
              alt="Indalecio Ríos"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <h1 className="text-2xl font-medium text-text-primary text-center sm:text-left">
                Indalecio Ríos
              </h1>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <a
                  href="https://github.com/riosinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="border border-border p-2 rounded-full text-text-secondary hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.threads.net/@jose_indalecio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="border border-border p-2 rounded-full text-text-secondary hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 192 192" fill="currentColor" aria-hidden="true">
                    <path d={THREADS_ICON} />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/joseindalecio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="border border-border p-2 rounded-full text-text-secondary hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:indalecio.riosr@gmail.com"
                  aria-label="Email"
                  className="border border-border p-2 rounded-full text-text-secondary hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8.414l8 5 8-5V18z" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed text-center sm:text-left">
              Hi! I'm @indacode,
              Here you'll find my personal projects and blog posts about AI. I enjoy sharing my knowledge and experiences through writing and open-source contributions.
            </p>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-medium text-text-secondary uppercase tracking-widest">
              Latest Posts
            </h2>
            <Link href="/blog" className="text-xs text-accent hover:text-accent/80 transition-colors">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-border/40">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-medium text-text-secondary uppercase tracking-widest">
            Current projects
          </h2>
          <Link href="/projects" className="text-xs text-accent hover:text-accent/80 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}

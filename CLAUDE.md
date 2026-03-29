# CLAUDE.md — indacode.me

## Project overview

Personal portfolio and blog for José Indalecio Ríos, AI Engineer.
Domain: indacode.me | Deployed on Vercel | Repo on GitHub.

The site has three goals:
1. Showcase projects with GitHub links
2. Publish technical blog posts (AI, ML, Python, APIs)
3. Present a professional profile as an AI Engineer

---

## Tech stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (dark mode by default via `class` strategy)
- **Blog**: Markdown (.md) files with gray-matter + remark/rehype
- **Deployment**: Vercel (auto-deploy from GitHub `main` branch)
- **Domain**: indacode.me (DNS via GoDaddy pointing to Vercel)

---

## Project structure
```
indacode.me/
├── app/
│   ├── page.tsx              # Home / landing
│   ├── about/page.tsx        # About me
│   ├── blog/
│   │   ├── page.tsx          # Blog index (list of posts)
│   │   └── [slug]/page.tsx   # Individual post page
│   ├── projects/page.tsx     # Projects list
│   └── layout.tsx            # Root layout (nav + footer)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
│   └── ProjectCard.tsx
├── content/
│   └── blog/                 # All .md blog posts go here
│       └── example-post.md
├── lib/
│   └── posts.ts              # Utilities to read and parse markdown
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.js
└── CLAUDE.md                 # This file
```

---

## Blog system (Markdown)

Posts live in `content/blog/` as `.md` files.

### Frontmatter required for every post
```yaml
---
title: "Post title here"
date: "2025-01-15"
description: "Short description shown in the blog index."
tags: ["python", "machine-learning"]
published: true
---
```

### Rules
- File name becomes the slug: `my-first-post.md` → `/blog/my-first-post`
- `published: false` hides the post from the index (draft mode)
- Images for posts go in `public/images/blog/`
- Do not modify `lib/posts.ts` unless the frontmatter schema changes

### Reading posts (lib/posts.ts pattern)

Use `gray-matter` to parse frontmatter and `remark`/`rehype` to convert Markdown to HTML.
The functions should be: `getAllPosts()` and `getPostBySlug(slug: string)`.

---

## Design system

### Theme
- Dark mode is the default and primary experience
- Background: `#0a0a0a` (near black)
- Surface: `#111111`
- Border: `#222222`
- Text primary: `#f5f5f5`
- Text secondary: `#888888`
- Accent: `#6366f1` (indigo — used for links, highlights, active states)

### Tailwind config
- Dark mode strategy: `class` (toggle via `<html class="dark">`)
- Custom colors should be defined in `tailwind.config.ts`

### Typography
- Font: `Inter` (via `next/font/google`)
- Headings: `font-medium` (not bold — keep it clean)
- Body: `text-base leading-relaxed`
- Code blocks: `font-mono text-sm`

### Components

**Navbar**: fixed top, blur background, links to `/`, `/about`, `/blog`, `/projects`.

**PostCard**: shows title, date, description, tags, and a link to the post. Minimal, no images required.

**ProjectCard**: shows project name, short description, tech stack (as small badges), and a GitHub link icon.

### Style rules
- Minimal and clean — no animations unless absolutely necessary
- Use `border` and subtle `bg-white/5` for cards, not heavy shadows
- Mobile-first responsive layout
- Spacing: generous padding, never cramped
- No hero illustrations, no stock images — text-first design

---

## Pages content

### Home (`/`)
- Short headline: name + role
- One-line bio
- CTA buttons: "Ver proyectos" and "Leer blog"
- Featured/latest 2-3 posts preview

### About (`/about`)
- Photo (put in `public/images/avatar.jpg`)
- Short bio paragraph (2-3 sentences)
- Tech stack grid: Python, FastAPI, LangGraph, XGBoost, GCP, Next.js, etc.
- Links: GitHub (`github.com/indacode`) and LinkedIn

### Blog (`/blog`)
- List of all published posts, ordered by date (newest first)
- Each entry: title, date, description, tags

### Projects (`/projects`)
- Grid of ProjectCards
- Each project: name, description, tech badges, GitHub link
- Start with 2-3 real projects (add more later)

---

## Development rules

1. **Always use TypeScript** — no `.js` or `.jsx` files in `app/` or `components/`
2. **No `any` types** — use proper interfaces or `unknown`
3. **Server components by default** — only add `"use client"` when truly needed (interactivity, hooks)
4. **Imports**: use `@/` alias for absolute imports (`@/components/...`, `@/lib/...`)
5. **Tailwind only** — do not add CSS files or CSS modules for new components
6. **Never hardcode colors** — always use Tailwind classes that reference the theme

### When making changes
- If modifying the blog parsing logic in `lib/posts.ts`, test that existing posts still render
- If adding a new page, add the route to the Navbar links
- If adding a new npm package, say why it's needed — keep dependencies minimal

---

## Deployment

Flow: push to `main` → Vercel auto-builds → deploys to `indacode.me`

- Vercel project is linked to the GitHub repo
- Environment variables (if any in the future): set in Vercel dashboard, not in `.env` committed to git
- DNS: GoDaddy nameservers point to `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
- HTTPS is automatic via Let's Encrypt (handled by Vercel)

---

## What Claude Code should NOT do

- Do not add a CMS, database, or authentication unless explicitly asked
- Do not add analytics scripts unless asked
- Do not create `.css` or `.module.css` files — use Tailwind
- Do not use the Pages Router (`pages/` directory) — this project uses App Router only
- Do not add i18n — the site is in Spanish/English (Indalecio decides per section)
- Do not add comments to code unless the logic is genuinely complex
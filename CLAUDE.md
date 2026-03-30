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
- **Blog**: Markdown (.md) files with gray-matter + remark + remark-rehype + rehype-stringify
- **Fonts**: Inter (UI) via `next/font/google`, Newsreader loaded but not currently applied
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
│   │   ├── page.tsx          # Posts index (list of posts)
│   │   └── [slug]/page.tsx   # Individual post page
│   ├── projects/page.tsx     # Projects list
│   ├── layout.tsx            # Root layout (nav + footer)
│   ├── globals.css           # Global styles + CSS variables
│   ├── icon-light.svg        # Favicon for light mode (moved to public/)
│   └── icon-dark.svg         # Favicon for dark mode (moved to public/)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
│   ├── ProjectCard.tsx
│   ├── SharePost.tsx         # Share buttons at end of each post
│   └── ThemeToggle.tsx       # Light/dark toggle
├── content/
│   └── blog/                 # All .md blog posts go here
├── lib/
│   └── posts.ts              # Utilities to read and parse markdown
├── public/
│   ├── images/
│   ├── icon-light.svg        # Favicon for light mode
│   └── icon-dark.svg         # Favicon for dark mode
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
is_newest: false
---
```

### Rules
- File name becomes the slug: `my-first-post.md` → `/blog/my-first-post`
- `published: false` hides the post from the index (draft mode)
- `is_newest: true` shows an animated "New" badge next to the title — only set on one post at a time
- Images for posts go in `public/images/blog/`
- Tags render as `#tag` in `font-mono` — no background, minimal style
- Each post has a `SharePost` section at the bottom with LinkedIn, Threads, X, WhatsApp, Facebook, Telegram, Email

### Reading posts (lib/posts.ts pattern)

Uses `gray-matter` to parse frontmatter and `unified` + `remark-parse` + `remark-rehype` + `rehype-stringify` to convert Markdown to HTML.
The functions are: `getAllPosts()` and `getPostBySlug(slug: string)`.

---

## Design system

### Theme
- Dark mode is the default and primary experience; light mode is supported via toggle
- Theme preference stored in `localStorage` under key `'theme'`
- Inline script in `<head>` applies theme before hydration to avoid flash
- Background: `#0a0a0a` (near black) / light: `#fafafa`
- Surface: `#111111` / light: `#f0f0f0`
- Border: `#222222` / light: `#e0e0e0`
- Text primary: `#f5f5f5` / light: `#0a0a0a`
- Text secondary: `#888888` / light: `#555555`
- Accent: `#6366f1` (indigo — used for links, highlights, active states)

### Tailwind config
- Dark mode strategy: `class` (toggle via `<html class="dark">`)
- Custom colors defined in `tailwind.config.ts` as CSS variable references
- Font families: `font-sans` → Inter, `font-serif` → Newsreader, `font-mono` → system mono

### Typography
- Base font size: `17px` on `html` element
- Font: `Inter` (via `next/font/google`) for all UI
- Headings: `font-medium` (not bold — keep it clean)
- Body: `text-base leading-relaxed`
- Code/tags: `font-mono text-xs`
- Blog post body: `prose dark:prose-invert` (Tailwind Typography)

### Components

**Navbar**: fixed top, blur background, links to `/`, `/about`, `/blog` (labeled "Posts"), `/projects`. Brand name: `indacode`.

**PostCard**: shows title (with animated "New" badge if `is_newest`), date, description, tags with `#` prefix in mono font.

**ProjectCard**: shows project name, short description, tech stack badges, GitHub link icon.

**SharePost**: appears at end of each blog post. Takes `slug` and `title`, constructs `https://indacode.me/blog/{slug}` URL. Icons: LinkedIn, Threads, X, WhatsApp, Facebook, Telegram, Email.

**ThemeToggle**: reads/writes `localStorage('theme')`. State initialized as `null` to avoid icon flash.

**Footer**: copyright + 4 social icons (GitHub, Threads, LinkedIn, Email).

### Style rules
- Minimal and clean — `animate-ping` used only for the "New" badge
- Use `border` and subtle dividers for cards, not heavy shadows
- Mobile-first responsive layout — hero section stacks vertically on mobile (photo → name → icons → bio)
- Spacing: generous padding, never cramped
- No hero illustrations, no stock images — text-first design

---

## Pages content

### Home (`/`)
- Avatar photo + name + contact icons (GitHub, Threads, LinkedIn, Email) — responsive
- Short bio paragraph
- Latest 2 posts preview with link to `/blog`
- Current projects (2) with link to `/projects`

### About (`/about`)
- Photo (`public/images/avatar.jpeg`)
- Bio paragraphs
- Tech stack grid as minimal bordered badges
- Social links (GitHub, LinkedIn, Threads)

### Posts (`/blog`)
- List of all published posts, ordered by date (newest first)
- Each entry: title (+ "New" badge if applicable), date, description, `#tags`

### Projects (`/projects`)
- Grid of ProjectCards
- Each project: name, description, tech badges, GitHub link

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
- Blog section is labeled "Posts" in the UI but the route remains `/blog`

---

## Deployment

Flow: push to `main` → Vercel auto-builds → deploys to `indacode.me`

- Vercel project is linked to the GitHub repo (`riosinda/indacode.me`)
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

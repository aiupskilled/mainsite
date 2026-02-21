# AIUPSKILLED Website

Production-ready Next.js (App Router) + Tailwind CSS + TypeScript website for AIUPSKILLED.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- pnpm
- Markdown blog system (`/content/blog`)

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build for production

```bash
pnpm build
pnpm start
```

## Key Routes

- `/`
- `/courses`
- `/courses/ai-for-executives`
- `/courses/ai-for-tech-people`
- `/blog`
- `/blog/[slug]`
- `/about`
- `/contact`

## SEO Included

- Route metadata (title, description, OpenGraph)
- JSON-LD structured data
- `app/sitemap.ts`
- `app/robots.ts`

## Content Editing

Blog posts are markdown files in:

- `/content/blog/*.md`

Each post needs frontmatter:

- `title`
- `description`
- `date`
- `image`
- `author`

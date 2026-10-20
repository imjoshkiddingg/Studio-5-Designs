# Studio 5 Designs, Inc. — Website

A multi-page marketing site for Studio 5 Designs, built with Next.js 14 (App
Router), React, TypeScript, Tailwind CSS, Lucide icons, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Project structure

- `src/app` — App Router routes (`/`, `/work`, `/work/[slug]`, `/services`, `/about`, `/careers`, `/contact`)
- `src/components` — UI components (Navbar, Hero, Services, WorkGrid, ContactForm, Footer, …)
- `src/lib/site.ts` — all site content: nav, projects, case studies, services, partners
- `public/logos` — partner logos
- `public/covers` — book / report cover art

## Deployment

Optimized for [Vercel](https://vercel.com). Import the repository and Vercel
auto-detects Next.js — no extra configuration required.

## IndexNow

`scripts/indexnow.mjs` pings [IndexNow](https://www.indexnow.org/) (Bing and
other participating engines) to tell them URLs have changed, so they recrawl
and reindex sooner. The verification key lives at
`public/TfkfQ4bUJbQq4c5hyZiUkpRQf955b1LC.txt` and is served at
`https://www.hellostudio5designs.com/TfkfQ4bUJbQq4c5hyZiUkpRQf955b1LC.txt`
(the key is not a secret).

Submit the whole sitemap:

```bash
npm run indexnow
```

It only runs in production (`NODE_ENV=production` or `VERCEL_ENV=production`).
To run locally, add `--force`:

```bash
npm run indexnow -- --force
```

Submit specific pages (space-separate multiple URLs; add `--force` locally):

```bash
npm run indexnow -- https://www.hellostudio5designs.com/work/inlife-kairos
npm run indexnow -- --force https://www.hellostudio5designs.com/work/inlife-kairos
```

This is **not** run automatically on build or deploy — run it manually after
each production deploy.

## Notes

- The contact form currently simulates submission on the client. Wire
  `src/components/ContactForm.tsx` to an API route or form service before
  going live.
- Most photography uses Unsplash placeholders; partner logos and four book
  covers are real assets.

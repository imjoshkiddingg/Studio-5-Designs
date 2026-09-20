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

## Notes

- The contact form currently simulates submission on the client. Wire
  `src/components/ContactForm.tsx` to an API route or form service before
  going live.
- Most photography uses Unsplash placeholders; partner logos and four book
  covers are real assets.

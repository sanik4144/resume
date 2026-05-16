# Personal Resume Portfolio

A premium single-page resume and portfolio website built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Features

- Responsive single-page portfolio for desktop, tablet, and mobile
- Light and dark mode with persistent theme toggle
- Sticky navigation with active section highlighting
- Scroll progress indicator, reveal animations, loading screen, custom desktop cursor, and back-to-top button
- Data-driven sections for hero, about, education, skills, experience, projects, certifications, contact, and footer
- Optimized local visual assets served through `next/image`
- SEO metadata in the App Router root layout

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  BackToTop.tsx
  ContactForm.tsx
  LoadingScreen.tsx
  Navbar.tsx
  PortfolioPage.tsx
  ProjectCard.tsx
  ScrollProgress.tsx
  SectionWrapper.tsx
  SkillCard.tsx
  ThemeToggle.tsx
  Timeline.tsx
lib/
  portfolio-data.ts
public/
  portfolio/
  resume.pdf
```

## Customize

Edit `lib/portfolio-data.ts` to update your name, bio, education, skills, experience, projects, achievements, contact details, resume URL, and social links.

Replace `public/resume.pdf` with your real resume. Replace the SVG files in `public/portfolio/` with your own avatar and project previews when ready.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

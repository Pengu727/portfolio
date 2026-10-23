# Bouazza Ahmed Amine Aissa   Portfolio

A personal portfolio website for **Bouazza Ahmed Amine Aissa**, built with React and Vite.

## Stack

- React 19 + Vite (JavaScript)
- React Router (client-side routing)
- Framer Motion (scroll animations)
- Custom SVG icon system (Lucide + Simple Icons, inline   no icon library dependency)
- Google Fonts: Inter, Space Grotesk, JetBrains Mono

## Pages

- `/`   Home (hero, core stack, featured work, CTA)
- `/about`   Profile, experience, skills, education, certifications, leadership
- `/projects`   Projects (PharmaPortal, Network Analyzer, CoPal)
- `/contact`   Contact cards

## Design

The palette and identity are taken from the `pengu.png` brand mark (midnight indigo `#150a2b`, warm amber `#e88a3d`, periwinkle `#8a96c8`). The penguin image doubles as the logo and home button. Profile images live in `public/images/` (webp/jpg optimized from `pengu.png` / `pfp.png`).

Content is sourced from `CV_Bouazza_Ahmed_Amine_Aissa (1)_redesigned.md` in the parent directory.

## Development

Requires Node 22+ (system Node is v12).

```bash
source ~/.nvm/nvm.sh && nvm use 22
npm install
npm run dev       # dev server (http://localhost:5173)
npm run lint      # oxlint
npm run build     # production build to dist/
npm run preview   # preview the production build
```
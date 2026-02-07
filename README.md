# Madita Aziz Portfolio

A modern portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Push to the `master` branch to trigger a deploy.

## Customization

### Colors

All colors are defined as CSS custom properties in `src/app/globals.css`. Update the `:root` variables to change the entire color scheme:

```css
:root {
  --color-primary: #D4654E;
  --color-primary-light: #E8836E;
  --color-bg-warm: #F0E4D4;
  --color-bg-white: #FFFFFF;
  --color-text-dark: #2D2D2D;
  --color-text-light: #FFFFFF;
  --color-text-muted: #6B6B6B;
}
```

### Images

Replace placeholder images in `public/images/`:
- `hero.svg` - Homepage hero image
- `about.svg` - About page portrait photo

### Content

Update placeholder text directly in the component files under `src/components/`.

---
*Test commit.*

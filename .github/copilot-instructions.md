# De Gaza al Mundo - AI Coding Instructions

This is a humanitarian website project connecting donors with Palestinian families in need. Built with Astro 5.16+ and styled with utility-first CSS.

## Project Architecture

**Framework**: Astro with static site generation  
**Package Manager**: pnpm (v10.25.0+)  
**Styling**: TailwindCSS via CDN with custom theme configuration  
**Assets**: SVG icons and background images in `src/assets/`

### Key Components Structure
- **Layout System**: Single layout at `src/layouts/Layout.astro` with minimal HTML5 structure
- **Pages**: File-based routing in `src/pages/` (currently just `index.astro`)
- **Components**: Modular `.astro` components in `src/components/`
- **Static Assets**: Public directory for favicons, referenced as `/favicon.svg`

## Development Workflow

**Start Development**: `pnpm dev` (serves on localhost:4321)  
**Build for Production**: `pnpm build` (outputs to `./dist/`)  
**Preview Build**: `pnpm preview`  
**Install Dependencies**: `pnpm install`

### TypeScript Configuration
Uses Astro's strict TypeScript config (`astro/tsconfigs/strict`). Include all files except `dist/` folder.

## Design System & Styling

### Brand Colors (TailwindCSS Custom Theme)
```javascript
colors: {
  "primary": "#931a24",           // Deep red (Palestinian flag)
  "accent-green": "#236E1E",      // Palestinian flag green
  "background-light": "#ffffff",
  "background-offwhite": "#f8f6f6",
  "background-dark": "#171212",
  "text-main": "#171212",
  "text-muted": "#6b6b6b",
}
```

### Typography
- **Font**: Inter family for both display and body text
- **Icons**: Material Symbols Outlined from Google Fonts
- **Icon Settings**: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`

### Component Patterns
- **Icon + Text Buttons**: Use `flex items-center gap-2` with Material Symbols
- **Responsive Layout**: Mobile-first with `lg:` breakpoint for desktop
- **Sticky Header**: `sticky top-0 z-50` with backdrop blur
- **Cards**: Use rounded corners (`rounded-2xl`) with shadows (`shadow-2xl`)

## Content Patterns

### Spanish Language Focus
All text content should be in Spanish. Key messaging focuses on:
- Direct humanitarian aid ("ayuda directa")
- Transparency ("transparente") 
- No intermediaries ("sin intermediarios")
- Community building through Telegram groups

### Call-to-Action Patterns
Primary CTAs use red brand color with white text and Material icons. Secondary CTAs use white background with gray borders.

## File Naming & Organization

- **Components**: PascalCase `.astro` files (`Welcome.astro`)
- **Assets**: kebab-case for SVG files (`astro.svg`, `background.svg`)
- **Static Files**: Reference public assets with absolute paths (`/favicon.svg`)

## Code Style Conventions

### Astro Component Structure
1. Frontmatter with imports and logic (TypeScript)
2. HTML template with Astro syntax
3. Scoped `<style>` blocks when needed

### Asset Imports
Import SVG assets as modules: `import astroLogo from '../assets/astro.svg'`
Use `.src` property in templates: `src={astroLogo.src}`

### Responsive Design
Use TailwindCSS container queries (`@container`) and responsive prefixes:
- Mobile-first approach
- `sm:` for 640px+
- `md:` for 768px+ 
- `lg:` for 1024px+

## External Dependencies

- **TailwindCSS**: Loaded via CDN with forms and container-queries plugins
- **Google Fonts**: Inter font family and Material Symbols
- **Images**: External hosting via Googleusercontent CDN

When making changes, maintain the humanitarian focus, Spanish language, and Palestinian solidarity messaging while following Astro best practices for static site generation.
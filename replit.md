# WalletTao - Secure Digital Wallet

## Overview

WalletTao is a modern, secure digital wallet website built with Next.js 15, React 19, and Tailwind CSS v4. The application provides a professional marketing website for a cryptocurrency/digital asset wallet service with a focus on user experience, accessibility, and visual polish. It features a custom yin-yang inspired loading animation system that displays on first visit only, theme toggle functionality, responsive mobile navigation, and a clean gradient-based design system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 15 with App Router**: Chosen for its server-side rendering capabilities, excellent performance, and modern React features. The App Router provides file-based routing and server component optimization.
- **React 19**: Latest version for improved performance and modern React features including enhanced hooks and concurrent rendering.
- **TypeScript**: Ensures type safety across the codebase, reducing runtime errors and improving developer experience.

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework configured with custom theme extensions for gradient text, custom animations, and the "ink" color (#0B0B0C). Uses the new `@import "tailwindcss"` syntax and `@theme inline` configuration.
- **Framer Motion**: Handles complex animations for the loading screen with smooth transitions, reduced motion support, and AnimatePresence for mount/unmount animations.
- **Lucide React**: Provides consistent, customizable SVG icons throughout the application.
- **Geist Fonts**: Modern Google Fonts (Geist Sans and Geist Mono) for professional typography.

### State Management & Client-Side Logic
- **React Context API**: Used in `LoaderProvider` to manage loading screen state globally without prop drilling. Provides `show`, `hide`, and `forceShow` methods.
- **localStorage**: Persists user preferences including theme (dark/light mode) and first-visit tracking for the loading screen.
- **Client-Side Rendering**: Components using browser APIs (localStorage, window) are marked with `"use client"` directive and implement proper hydration strategies to prevent mismatches.

### Loading System Architecture
The custom "Tao Swirl" loading screen system demonstrates sophisticated client-side state management:
- **First Visit Detection**: Uses localStorage key `wallettao_seen_loader` to show loading animation only on first visit
- **Auto-Hide Mechanism**: Configurable timeout (default 1.5s) automatically dismisses the loading screen
- **Accessibility First**: Implements `role="status"`, `aria-busy`, `aria-live` attributes, and respects `prefers-reduced-motion` media query
- **Animation System**: Features a rotating yin-yang disc with S-curve seam, radial gradients (white/black halves), glowing dots with bloom filters, smooth scale/fade transitions, and gentle continuous rotation (2.4s duration, respects reduced motion)
- **Scroll Lock**: Prevents background scrolling while loading screen is visible via useEffect cleanup
- **Component Architecture**: TaoLoader handles rendering and animations, LoaderProvider manages state and first-visit logic
- **Recent Changes** (October 27, 2025): Upgraded from split-screen stretching dots design to centered rotating yin-yang disc. Removed onFinished callback to prevent race conditions with forceShow() function.

### Theme System
- **Dark/Light Mode Toggle**: Implements a persistent theme system that respects system preferences as fallback
- **Hydration Safe**: Theme components render placeholder UI on server to prevent hydration mismatches, then hydrate with correct theme on client
- **CSS Variables**: Uses custom properties in `globals.css` for theme-aware colors (--background, --foreground)

### Component Architecture
- **Atomic Design Pattern**: Components are self-contained and reusable (Logo, ThemeToggle, MobileNav)
- **Responsive Design**: Mobile-first approach with breakpoints for tablet/desktop views
- **Accessibility**: Focus states, ARIA labels, semantic HTML, and keyboard navigation support

### Styling Conventions
- **Gradient Text Effect**: Custom CSS class for animated gradient text in hero section
- **Custom Tailwind Animations**: Defined in `tailwind.config.js` for glowPulse, stretchHorizontal, and stretchVertical keyframes
- **Dark Mode**: Uses Tailwind's `dark:` variant with class-based switching (not media query based)

## External Dependencies

### NPM Packages
- **@hookform/resolvers**: Form validation resolver integration (likely for future forms)
- **class-variance-authority**: Utility for managing component variants and conditional classes
- **clsx + tailwind-merge**: Class name utilities for conditional and merged Tailwind classes
- **react-hook-form**: Form state management (currently installed but not actively used)
- **zod**: Schema validation library (likely for form validation in future features)

### Next.js Ecosystem
- **next-intl**: Internationalization support for multi-language features (installed but not actively used)
- **next-seo**: SEO optimization utilities for metadata management (installed but not actively used)

### Development Tools
- **ESLint + Prettier**: Code quality and formatting enforcement
- **Husky + lint-staged**: Git hooks for pre-commit linting and formatting
- **MDX Support**: Configured with @mdx-js/loader, @mdx-js/react, and @next/mdx for markdown content (not currently used)
- **Remark/Rehype Plugins**: Markdown processing with GFM support, slug generation, and heading auto-linking (for future blog/docs)

### Configuration Files
- **next.config.ts**: Minimal Next.js configuration (currently empty, ready for customization)
- **tsconfig.json**: TypeScript configuration with strict mode, bundler module resolution, and path aliases
- **tailwind.config.js**: Extended theme with custom colors, keyframes, and animations

### Browser APIs Used
- **localStorage**: Theme preferences and first-visit tracking
- **window.matchMedia**: Detecting system color scheme preference and reduced motion settings
- **document.body.style.overflow**: Managing scroll behavior during loading screen

### Deployment Configuration
- **Development Server**: Runs on port 5000 with host 0.0.0.0 for network access (required for Replit environment)
- **Production Server**: Configured to run on same port 5000 with network binding
- **Replit Environment**: Migrated from Vercel on October 27, 2025
  - Package manager: npm (detected from package-lock.json)
  - Scripts updated: `dev` and `start` commands include `-p 5000 -H 0.0.0.0` flags
  - Deployment target: autoscale (for stateless Next.js applications)
  - .gitignore excludes Replit-specific files (.replit, .config/, .upm/, replit.nix)

## Recent Changes

### October 28, 2025: Site Redesign
- **Complete redesign** from generic marketing page to clean, download-focused wallet extension landing
- **New color scheme**: Jade (#00C2A8) for primary CTAs, neutral slate backgrounds
- **New pages**:
  - `/download` - Browser auto-detection for Chrome/Firefox/Edge installation
  - `/developers` - EIP-1193 integration examples
  - `/security` - Security principles, audit info, responsible disclosure
  - `/support` - FAQ and contact options
  - `/blog` - Placeholder blog listing
- **Removed**: Pricing section and related marketing fluff
- **New component**: InstallButtons with Chrome/Firefox/Edge CTAs
- **Design system**: Minimal, glassy cards with soft borders, micro-motion (0.35s transitions)
- **Navigation**: Consistent across all pages with active state highlighting

### Known Issues
- **Hydration mismatch warning**: Pre-existing console warning from ThemeToggle component's client-side localStorage check. Does not affect functionality - the theme toggle works correctly with proper server/client rendering separation.
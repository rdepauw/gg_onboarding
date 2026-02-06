# CLAUDE.md — GolfGoose Onboarding

## Project Overview
Airline-themed 12-step onboarding flow for GolfGoose, a golf coaching mobile app. This is a Next.js web prototype that walks users through boarding pass intro, skill assessment, goal setting, AI coach setup, and account creation.

## Tech Stack
- **Framework:** Next.js 14.2, React 18.3, TypeScript 5.5
- **Styling:** Tailwind CSS 3.4 + shadcn/ui + tailwindcss-animate
- **Animation:** Framer Motion 11.3
- **Icons:** Lucide React
- **Path alias:** `@/*` maps to project root

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

## Design System

### Brand Identity
GolfGoose uses an airline/aviation motif. Everything should feel like a boarding pass, flight map, or airport terminal — NOT generic SaaS.

### Design Skill
**Always read `design_skill.md` before building any component.** It guards against generic "AI slop" aesthetics. Key rules:
- Choose bold, intentional aesthetic directions
- Never use Inter, Roboto, Arial, or system fonts
- Never default to purple gradients on white
- Every component should feel designed for THIS product

### Color Tokens (shadcn/ui CSS variables in globals.css)
```
--background: dark navy (222.2 84% 4.9%)
--primary: dark navy (222.2 47.4% 11.2%)
--primary-foreground: light blue-white (210 40% 98%)
--accent: light gray-blue (210 40% 96.1%)
--destructive: red (0 84.2% 60.2%)
--radius: 0.5rem
```

### Animation Conventions
- Use Framer Motion for all entrance/exit animations
- Default entrance: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Ease curve: `[0.25, 0.46, 0.45, 0.94]`
- Stagger children with `transition={{ delay: index * 0.1 }}`

## Component Conventions
- One main flow component: `components/GolfGooseNowBoardingFlow.tsx`
- UI primitives in `components/ui/` (shadcn/ui pattern)
- All components use TypeScript interfaces for props
- `'use client'` directive for any component with state/effects
- Utility functions in `lib/utils.ts` (uses `clsx` + `tailwind-merge`)

## File Naming
- Components: `PascalCase.tsx` (e.g., `BoardingPass.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Pages: Next.js App Router conventions (`page.tsx`, `layout.tsx`)

## Commit Message Format
```
type(scope): description

type: feat | fix | refactor | style | docs | chore
scope: onboarding | ui | layout | animation | nav
```
Examples:
- `feat(onboarding): add swing fault selection slide`
- `fix(nav): correct progress bar step count`
- `style(ui): update boarding pass card gradient`

## Architecture Notes
- The entire onboarding is a single-page flow controlled by step state
- Each "slide" is a section within `GolfGooseNowBoardingFlow.tsx`
- Navigation uses next/prev buttons + progress bar
- The `GolfGoose App/` subdirectory is a **separate Expo React Native project** — do not modify it when working on the web onboarding

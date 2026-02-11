# CLAUDE.md — GolfGoose

## Mission

GolfGoose is an AI-powered golf improvement platform. The goal: make every golfer better through personalized practice content, AI coaching, and data-driven insights. Everything we build should feel elite, ambitious, and human-crafted.

## Workspace Structure

This is the root project. Everything GolfGoose lives here:

```
gg_onboarding/                    ← YOU ARE HERE (root)
├── app/                          # Onboarding flow (Next.js App Router)
├── components/                   # Onboarding components
├── lib/                          # Onboarding utilities
├── GolfGoose App/                # Mobile app (Expo Router + React Native)
│   ├── app/                      # File-based routing (tabs)
│   ├── components/               # RN components + NativeWind
│   ├── services/                 # Backend service layer
│   ├── contexts/                 # Auth, user state
│   ├── data/                     # Local data/content
│   ├── supabase/                 # Supabase config + migrations
│   └── hooks/                    # Custom hooks
├── website/                      # Marketing site (Next.js)
│   ├── app/                      # Pages: landing, blog, library, chat
│   │   ├── (marketing)/          # Route group for marketing pages
│   │   ├── blog/                 # Blog with SEO
│   │   └── api/                  # API routes
│   ├── components/               # Site components (landing, library, seo, chat, blog)
│   ├── content/                  # Static content
│   ├── data/                     # Data files
│   └── lib/                      # Utilities
├── images/                       # Brand assets (logos, screenshots)
├── design_skill.md               # MANDATORY design guidelines
├── ideas.md                      # Strategic ideas (read-only unless told otherwise)
├── todo_next.md                  # Current TODOs
├── paywall.json                  # RevenueCat paywall config
└── privacy_policy.html           # Legal
```

## Tech Stacks

### Onboarding Flow (root `app/`, `components/`, `lib/`)
- Next.js 14.2, React 18.3, TypeScript 5.5
- Tailwind CSS 3.4 + shadcn/ui + tailwindcss-animate
- Framer Motion 11.3 for animations
- Lucide React for icons

### GolfGoose App (`GolfGoose App/`)
- Expo 53 + React Native with Expo Router (file-based routing)
- NativeWind (Tailwind for React Native)
- Supabase for auth, database, edge functions
- RevenueCat for subscriptions (`appl_HdcleuOgXZTEOrXKzZbtqrwDMSa`)
- Apple Sign-In, Google Sign-In, Facebook SDK
- Firebase for analytics/notifications
- Camera + Image Picker (scorecard OCR)
- Audio background mode (voice coaching)
- EAS Build with dev/preview/production variants
- Bundle ID: `ai.golfgoose.app`
- iOS only (no Android references)

### Website (`website/`)
- Next.js 14, React 18.3, TypeScript 5.5
- Tailwind CSS 3.4 + Framer Motion
- Vercel Analytics + Speed Insights
- OpenAI integration (AI chat feature)
- SEO infrastructure: `sitemap.ts`, `robots.ts`
- Component sections: landing, blog, library, chat, features, seo

## Design System

### Read `design_skill.md` Before Building ANYTHING

This is non-negotiable. Key principles:
- Choose **bold, intentional** aesthetic directions — not generic templates
- **Never** use Inter, Roboto, Arial, or system fonts
- **Never** default to purple gradients on white backgrounds
- Every component should feel designed specifically for GolfGoose
- Typography should be distinctive — pair a display font with a refined body font
- Motion should be purposeful — one well-orchestrated animation beats scattered micro-interactions
- Backgrounds should create atmosphere — gradients, textures, grain, not flat colors

### Airline / Aviation Brand Identity
The boarding pass / airline metaphor originated in the onboarding and carries everywhere:
- "Now Boarding", "Flight Plan", "Pre-Flight Check", "Flight GG-001"
- Boarding pass card layouts with dashed separators
- Runway progress bars, takeoff animations
- Branding concepts in play: "The Lounge", "The Hangar", "Travel HQ"

### Dark-First Design
All apps default to dark mode:
- **Onboarding:** `zinc-950` to `black` gradient, `#C3FCD2` mint green accent
- **App:** Dark theme with green primary (`#10b981`), `userInterfaceStyle: "dark"`
- **Website:** Dark theme with custom Tailwind config

### Color Tokens (Onboarding — shadcn/ui CSS variables)
```
--background: 222.2 84% 4.9%     (dark navy)
--primary: 222.2 47.4% 11.2%     (dark navy)
--primary-foreground: 210 40% 98% (light blue-white)
--accent: 210 40% 96.1%          (light gray-blue)
--destructive: 0 84.2% 60.2%     (red)
--radius: 0.5rem
```

### Animation Conventions
- Framer Motion for all entrance/exit animations
- Default entrance: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Ease curve: `[0.25, 0.46, 0.45, 0.94]`
- Stagger children: `transition={{ delay: index * 0.1 }}`
- AnimatePresence with `mode="wait"` for page transitions

## The Content Library — Feels, Drills, and Games

This is the heart of the product and content strategy:

- **Feels** — Swing thoughts and sensations for muscle memory
- **Drills** — Structured practice exercises with steps
- **Games** — Competitive practice formats with scoring

**Skill categories (used everywhere):** `off_the_tee`, `approach`, `short_game`, `putting`

### Notion as Source of Truth

Content is managed in **Notion** (connected via MCP). The workflow:
1. Content is created and curated in Notion
2. Items are marked **"reviewed"** when ready for publishing
3. Reviewed items push to the website and app
4. Library items are a **lead magnet** for marketing
5. Library items inspire **blog posts** and SEO content

Use `mcp__notion__*` tools to read, query, and update content. Notion also tracks project management boards (Product Roadmap, GTM/Marketing, Business/Ops).

### `/gg-library` — Library Management Skill

Use the `/gg-library` skill to manage the Notion content library. Three modes:

- **`/gg-library <youtube-url>`** — Add a new Feel/Drill/Game from a YouTube video. Extracts metadata, generates fields, asks for confirmation, creates the Notion entry with thumbnail.
- **`/gg-library cleanup`** — Batch fix missing previews, sources, golfer name formatting, and validate Ready items.
- **`/gg-library audit`** — Full database health report: status counts, field completeness, broken videos, duplicates.

**Key rules:** The `Reviewed` checkbox is Ryan's manual sign-off — never set it automatically. Golfer names go in the `Golfer` field, not in the item `Name`. Use the Notion REST API (not MCP) for file property updates.

## Backend — Supabase

Shared across app and website:

**Core tables:** `users`, `practice_sessions`, `practice_session_items`, `rounds_wide`, `library_items`, `notes`, `goals`, `user_ai_preferences`, `ai_responses`, `ai_prompts`, `user_custom_prompts`, `user_tools`

**Environment:**
- Production: `vdhfkvwvudunegyjuccm.supabase.co`
- Local dev: `http://192.168.2.241:54321`

## AI Integration

- **OpenAI GPT-4o** — Coaching, recommendations, content generation, website chat
- **ElevenLabs** — Text-to-speech for voice coaching
- **Whisper** — Audio transcription for voice input
- Rate limits: enforce client-side (2-10 req/min depending on service)

## Commands

### Onboarding (root)
```bash
npm run dev      # Next.js dev server
npm run build    # Production build
npm run lint     # ESLint
```

### GolfGoose App
```bash
cd "GolfGoose App"
npm start        # Expo dev server
npm run ios      # iOS simulator
```

### Website
```bash
cd website
npm run dev      # Next.js dev server
npm run build    # Production build
```

## Code Conventions

### Shared Across All Projects
- **TypeScript strict mode** — no `any` unless truly necessary
- **`cn()` utility** for Tailwind class merging (clsx + tailwind-merge)
- **shadcn/ui pattern** for web components (CVA + Radix primitives)
- **React Context** for state management (no Redux/Zustand)
- **Feature-based folder structure** — components organized by domain
- **`'use client'`** directive for any Next.js component with state/effects

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Pages: framework conventions (`page.tsx` for Next.js, `index.tsx` for Expo Router)

### Commit Messages
```
type(scope): description

type: feat | fix | refactor | style | docs | chore
scope: onboarding | app | website | ui | library | seo | animation
```

## SEO (Website)

Aggressively optimize for search:
- Semantic HTML with proper heading hierarchy
- Meta tags, Open Graph, structured data (JSON-LD)
- `sitemap.ts` and `robots.ts` already configured
- Blog content derived from Feels/Drills/Games library
- Target golf improvement keywords naturally
- Vercel Analytics + Speed Insights for monitoring

Always suggest SEO improvements when touching web-facing pages.

## Strategic Context

Read `ideas.md` for the full strategic picture, but key lanes:
1. **Core App** — Practice tracking, AI coaching, library, rounds, scorecard
2. **Coach Product (B2B)** — Coach dashboard, roster management, drill assignment (Phase 2)
3. **Affiliate Program** — 25-30% recurring commission, partner landing page
4. **Content Marketing** — Blog posts from library content, SEO play

Features in pipeline: Pre-Shot Routine builder, Club Gapping, Speed Training, Golf Travel Agent

## How to Work With Us

1. **Be opinionated** — Recommend the latest and greatest approaches. Don't just implement what we ask; tell us if there's a better way.
2. **We're coachable** — Push back when something could be better. Suggest modern patterns, newer APIs, performance wins, UX improvements.
3. **Elite UX or nothing** — Every interaction should feel polished. The bar is extremely high. Never ship "good enough."
4. **Read `design_skill.md`** — Before building any component or page. Every time.
5. **Use Notion via MCP** — For content, project tracking, and library management.
6. **iOS only** — No Android references in the app. We're iOS-first.
7. **Cross-project awareness** — Changes to types, Supabase schema, or service patterns affect all three projects. Think holistically.
8. **Quality over speed** — We'd rather ship something excellent slowly than something mediocre quickly.

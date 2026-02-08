export const SITE_CONFIG = {
  name: "Golf Goose AI",
  tagline: "Practice Smarter. Play Better.",
  description: "The only app built to connect your practice, rounds, and AI coach into one seamless improvement system.",
  url: "https://golfgoose.ai",
  flightCode: "GG-001",
  ogImage: "/images/og-image.png",
  pricing: {
    monthly: 9.99,
    annual: 72.0,
  },
  social: {
    twitter: "https://twitter.com/golfgooseai",
    instagram: "https://instagram.com/golfgooseai",
    tiktok: "https://tiktok.com/@golfgooseai",
  },
  appStore: {
    ios: "#",
  },
}

export const NAV_LINKS = [
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "AI Coach", href: "/features/ai-coach", description: "Talk to me, Goose!" },
      { label: "Practice Plans", href: "/features/practice-plans", description: "Personalized drills for your misses" },
      { label: "Round Analysis", href: "/features/round-analysis", description: "AI-powered round recaps" },
      { label: "Progress Tracking", href: "/features/progress-tracking", description: "Your flight path to lower scores" },
      { label: "Library", href: "/features/library", description: "Drills, feels, and games" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Library", href: "/library" },
  { label: "Blog", href: "/blog" },
  { label: "The Lounge", href: "/travel" },
  { label: "About", href: "/about" },
] as const

export const FOOTER_LINKS = {
  product: [
    { label: "AI Coach", href: "/features/ai-coach" },
    { label: "Practice Plans", href: "/features/practice-plans" },
    { label: "Round Analysis", href: "/features/round-analysis" },
    { label: "Progress Tracking", href: "/features/progress-tracking" },
    { label: "Library", href: "/features/library" },
    { label: "Free Library", href: "/library" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "The Lounge", href: "/travel" },
    { label: "Download", href: "/download" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Waitlist", href: "/waitlist" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const

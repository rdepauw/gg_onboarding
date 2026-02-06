import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle, Crosshair, Radio, BarChart3, BookOpen, Target } from "lucide-react"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureCTA } from "@/components/features/FeatureCTA"

export const metadata: Metadata = generatePageMetadata({
  title: "Features",
  description: "Explore all Golf Goose AI features — AI coaching, personalized practice plans, round analysis, progress tracking, and more.",
  path: "/features",
})

const features = [
  { icon: MessageCircle, title: "AI Coach", description: "Voice-enabled AI conversations for pre-round prep, post-round recaps, and podcast-style round replays.", href: "/features/ai-coach" },
  { icon: Crosshair, title: "Practice Plans", description: "Personalized drills, feels, and games based on your specific swing faults and improvement goals.", href: "/features/practice-plans" },
  { icon: Radio, title: "Round Analysis", description: "OCR scorecard scanning, AI-powered pattern analysis, and entertaining podcast recaps of your rounds.", href: "/features/round-analysis" },
  { icon: BarChart3, title: "Progress Tracking", description: "Activity calendar, handicap trends, progress graphs, and your visual flight path to lower scores.", href: "/features/progress-tracking" },
  { icon: BookOpen, title: "Library", description: "Searchable library of drills, feels, and practice games filtered by skill category and favorites.", href: "/features/library" },
  { icon: Target, title: "Goal Setting", description: "Set scoring goals, practice frequency targets, handicap milestones, and track birdies for the year.", href: "/features" },
]

export default function FeaturesPage() {
  return (
    <>
      <FeatureHero
        eyebrow="All Destinations"
        title="Everything You Need"
        titleAccent="In One App"
        description="Golf Goose connects your practice, rounds, and AI coaching into one seamless improvement system."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link key={feature.title} href={feature.href} className="group">
                  <div className="h-full rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black p-7 hover:border-goose-green/30 hover:shadow-lg hover:shadow-goose-green/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-5 group-hover:border-goose-green/40 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-goose-green" />
                    </div>
                    <h3 className="font-display font-bold text-lg tracking-wide text-white mb-2 group-hover:text-goose-mint transition-colors">{feature.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">{feature.description}</p>
                    <span className="font-mono text-[10px] tracking-flight text-zinc-600 group-hover:text-goose-green transition-colors uppercase">Explore →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FeatureCTA />
    </>
  )
}

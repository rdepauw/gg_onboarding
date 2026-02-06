import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureDetailSection } from "@/components/features/FeatureDetailSection"
import { FeatureCTA } from "@/components/features/FeatureCTA"
import { CrossLinkGrid } from "@/components/features/CrossLinkGrid"

export const metadata: Metadata = generatePageMetadata({
  title: "The Hangar — Drills, Feels & Games Library",
  description: "Browse a searchable library of golf drills, feels, and practice games. Filter by skill category and save your favorites.",
  path: "/features/library",
})

export default function LibraryPage() {
  return (
    <>
      <FeatureHero
        eyebrow="The Hangar"
        title="Your Practice"
        titleAccent="Library"
        description="A growing collection of drills, feels, and practice games — searchable, filterable, and personalized to your game."
      />

      <FeatureDetailSection
        eyebrow="Content Types"
        title="Three Ways to Improve"
        description="Every piece of content in the library falls into one of three categories, each designed to improve a different aspect of your game."
        details={[
          { icon: "🎯", title: "Drills", description: "Structured technical exercises with clear setup and goals" },
          { icon: "🎭", title: "Feels", description: "Mental cues and swing sensations to internalize mechanics" },
          { icon: "🎮", title: "Games", description: "Competitive practice scenarios that make improvement fun" },
        ]}
      />

      <FeatureDetailSection
        eyebrow="Organization"
        title="Find What You Need"
        description="Filter by skill category — off the tee, approach, short game, or putting. Search by keyword, browse favorites, or discover new content based on your practice plan."
        details={[
          { icon: "🔍", title: "Search & Filter", description: "By skill, type, keyword, or favorites" },
          { icon: "⭐", title: "Favorites", description: "Save your go-to drills for quick access" },
          { icon: "➕", title: "Custom Content", description: "Add your own drills and practice notes" },
        ]}
        reversed
      />

      <CrossLinkGrid currentFeature="/features/library" />
      <FeatureCTA title="Explore the Library" description="Find the perfect drill for every part of your game." />
    </>
  )
}

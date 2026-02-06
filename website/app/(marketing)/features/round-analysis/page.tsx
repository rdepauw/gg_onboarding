import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureDetailSection } from "@/components/features/FeatureDetailSection"
import { FeatureCTA } from "@/components/features/FeatureCTA"
import { CrossLinkGrid } from "@/components/features/CrossLinkGrid"

export const metadata: Metadata = generatePageMetadata({
  title: "Round Analysis",
  description: "Log rounds with OCR scorecard scanning, get AI analysis, and generate podcast-style round recaps.",
  path: "/features/round-analysis",
})

export default function RoundAnalysisPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Round Analysis"
        title="Your Round,"
        titleAccent="Replayed"
        description="Log your rounds, get AI-powered analysis, and turn every round into an entertaining podcast recap."
      />

      <FeatureDetailSection
        eyebrow="Scorecard"
        title="Snap Your Scorecard"
        description="Take a photo of your scorecard and our OCR technology reads it automatically. No more manual data entry after a long round."
        details={[
          { icon: "📸", title: "OCR Scanning", description: "Photo to data in seconds" },
          { icon: "✏️", title: "Easy Editing", description: "Quick corrections if needed" },
          { icon: "📊", title: "Full Stats", description: "Every hole captured and analyzed" },
        ]}
      />

      <FeatureDetailSection
        eyebrow="AI Analysis"
        title="Patterns You Can't See"
        description="AI analyzes your rounds over time to spot patterns — which holes give you trouble, where you lose strokes, and what's actually improving."
        details={[
          { icon: "🧠", title: "Pattern Recognition", description: "Trends across dozens of rounds" },
          { icon: "📉", title: "Stroke Analysis", description: "Where you're losing and gaining strokes" },
          { icon: "💡", title: "Practice Priorities", description: "Data-driven recommendations for what to work on" },
        ]}
        reversed
      />

      <FeatureDetailSection
        eyebrow="Podcast"
        title="Turn Rounds Into Stories"
        description="Generate podcast-style recaps where AI hosts banter about your round, celebrate your birdies, and give you friendly grief about that triple bogey on 14."
        details={[
          { icon: "🎙️", title: "AI Hosts", description: "Two personalities discuss your round" },
          { icon: "🎧", title: "Audio Generation", description: "Listen on your commute or share with friends" },
          { icon: "📱", title: "Round History", description: "Build a library of your golf stories" },
        ]}
      />

      <CrossLinkGrid currentFeature="/features/round-analysis" />
      <FeatureCTA title="Start Logging Rounds" description="Turn every round into insights and entertainment." />
    </>
  )
}

import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureDetailSection } from "@/components/features/FeatureDetailSection"
import { FeatureCTA } from "@/components/features/FeatureCTA"
import { CrossLinkGrid } from "@/components/features/CrossLinkGrid"

export const metadata: Metadata = generatePageMetadata({
  title: "Personalized Practice Plans",
  description: "Tell us your swing faults and get personalized drills, feels, and practice games designed specifically for your game.",
  path: "/features/practice-plans",
})

export default function PracticePlansPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Practice Plans"
        title="What's Your"
        titleAccent="Miss?"
        description="Select your swing faults and we'll generate a personalized practice plan with drills, feels, and games. No more wasted range sessions."
      />

      <FeatureDetailSection
        eyebrow="Diagnosis"
        title="Identify Your Faults"
        description="Choose from common swing faults — slice, hook, fat shots, thin shots, chipping yips, three-putts, shanks, and tempo issues. Your plan adapts to exactly what you struggle with."
        details={[
          { icon: "🎯", title: "8 Common Faults", description: "Cover every major miss pattern in golf" },
          { icon: "🔍", title: "Multi-Select", description: "Pick all the faults that apply to you" },
          { icon: "🔄", title: "Evolving Plans", description: "As you improve, your plan adapts to new priorities" },
        ]}
        screenshot="/images/app/review-tab.png"
      />

      <FeatureDetailSection
        eyebrow="Drills"
        title="Drills That Actually Work"
        description="Each fault gets targeted drills with clear instructions. No generic tips — specific exercises designed for your exact miss pattern."
        details={[
          { icon: "🎯", title: "Targeted Exercises", description: "Gate drills, alignment checks, and path correction work" },
          { icon: "📐", title: "Clear Instructions", description: "Step-by-step setup and execution for every drill" },
          { icon: "📈", title: "Progress Tracking", description: "Track completion and success rates over time" },
        ]}
        reversed
      />

      <FeatureDetailSection
        eyebrow="Feels + Games"
        title="Beyond Just Drills"
        description="Every plan includes mental 'feels' (swing thoughts and sensations) and competitive practice games that make range time actually fun."
        details={[
          { icon: "🎭", title: "Feels", description: "Mental cues that match your swing mechanics" },
          { icon: "🎮", title: "Practice Games", description: "Competitive challenges with scoring and goals" },
          { icon: "🧩", title: "Integrated System", description: "Drills, feels, and games work together as one plan" },
        ]}
      />

      <CrossLinkGrid currentFeature="/features/practice-plans" />
      <FeatureCTA title="Get Your Plan" description="Tell us your misses and start practicing with purpose." />
    </>
  )
}

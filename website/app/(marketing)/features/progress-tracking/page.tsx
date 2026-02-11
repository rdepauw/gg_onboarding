import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureDetailSection } from "@/components/features/FeatureDetailSection"
import { FeatureCTA } from "@/components/features/FeatureCTA"
import { CrossLinkGrid } from "@/components/features/CrossLinkGrid"

export const metadata: Metadata = generatePageMetadata({
  title: "Progress Tracking",
  description: "Track your golf improvement with activity calendars, handicap trends, progress graphs, and visual flight path to your goals.",
  path: "/features/progress-tracking",
})

export default function ProgressTrackingPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Progress Tracking"
        title="Your"
        titleAccent="Flight Path"
        description="See your improvement over time with beautiful dashboards, activity calendars, and a visual flight path from where you are to where you want to be."
      />

      <FeatureDetailSection
        eyebrow="Dashboard"
        title="Your Command Center"
        description="One screen to see everything: recent activity, upcoming goals, quick actions, and your overall progress trajectory."
        details={[
          { icon: "📊", title: "Progress Graphs", description: "Handicap trends and scoring averages over time" },
          { icon: "📅", title: "Activity Calendar", description: "See rounds, practice, and mock swings at a glance" },
          { icon: "⚡", title: "Quick Actions", description: "Pre-round prep, log practice, or log a round in one tap" },
        ]}
        screenshot="/images/app/podcast-generated.png"
      />

      <FeatureDetailSection
        eyebrow="Goals"
        title="Set Your Course"
        description="Set scoring goals, practice frequency targets, handicap milestones, and birdie counts. Watch your flight path visualization as you close the gap between current and goal."
        details={[
          { icon: "🎯", title: "Scoring Goals", description: "Break 100, 90, 80, or par. Set your target" },
          { icon: "✈️", title: "Flight Path", description: "Visual progress line from current to goal handicap" },
          { icon: "🐦", title: "Birdie Tracker", description: "Count birdies for the year with fun milestones" },
        ]}
        reversed
      />

      <FeatureDetailSection
        eyebrow="Trends"
        title="Handicap History"
        description="Track your handicap progression over time. See where you started, where you are now, and the trajectory toward your goal."
        details={[
          { icon: "📈", title: "Trend Lines", description: "Visualize your improvement over months" },
          { icon: "🏌️", title: "Round Comparison", description: "Compare performance across courses and conditions" },
          { icon: "🎓", title: "Skill Breakdown", description: "Track driving, approach, short game, and putting separately" },
        ]}
      />

      <CrossLinkGrid currentFeature="/features/progress-tracking" />
      <FeatureCTA title="Track Your Progress" description="See your improvement and stay motivated on the journey." />
    </>
  )
}

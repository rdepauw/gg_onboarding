import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureCTA } from "@/components/features/FeatureCTA"
import { CrossLinkGrid } from "@/components/features/CrossLinkGrid"
import { AskGooseSection } from "@/components/features/ai-coach/AskGooseSection"
import { PostRoundPodcastSection } from "@/components/features/ai-coach/PostRoundPodcastSection"
import { PreRoundPumpSection } from "@/components/features/ai-coach/PreRoundPumpSection"
import { GooseDifferentiators } from "@/components/features/ai-coach/GooseDifferentiators"

export const metadata: Metadata = generatePageMetadata({
  title: "AI Coach — Talk to me, Goose!",
  description: "Meet Goose, your AI golf coach. Get personalized pre-round pump ups, post-round podcast recaps, and AI conversations that actually know your game.",
  path: "/features/ai-coach",
})

export default function AICoachPage() {
  return (
    <>
      <FeatureHero
        eyebrow="AI Coach"
        title="Talk to me,"
        titleAccent="Goose!"
        description="AI-powered conversations for every part of your golf journey. Voice-enabled coaching that knows your game, your misses, and your goals."
      />

      <AskGooseSection />

      <PostRoundPodcastSection />

      <PreRoundPumpSection />

      <GooseDifferentiators />

      <CrossLinkGrid currentFeature="/features/ai-coach" />
      <FeatureCTA title="Meet Your AI Coach" description="Start chatting with Goose and transform your golf journey." />
    </>
  )
}

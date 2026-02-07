import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { FeatureDetailSection } from "@/components/features/FeatureDetailSection"
import { FeatureCTA } from "@/components/features/FeatureCTA"
import { CrossLinkGrid } from "@/components/features/CrossLinkGrid"

export const metadata: Metadata = generatePageMetadata({
  title: "AI Coach — Talk to me, Goose!",
  description: "Meet Goose, your AI golf coach. Get personalized pre-round pump ups, post-round recaps, and podcast-style round replays.",
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

      <FeatureDetailSection
        eyebrow="Pre-Round"
        title="Pre-Round Pump Up"
        description="Before you step to the first tee, Goose delivers a personalized speech focusing on the feels that work for you, your recent smart decisions, and specific things to avoid today."
        details={[
          { icon: "🌅", title: "Personalized Motivation", description: "Based on your recent rounds and what's been working" },
          { icon: "🧠", title: "Mental Cues", description: "Remind you of the feels and thoughts that produce your best swings" },
          { icon: "⚡", title: "Quick & Focused", description: "2-3 minute pump ups you can listen to on the drive to the course" },
        ]}
        screenshot="/images/app/round-recap.png"
      />

      <FeatureDetailSection
        eyebrow="Post-Round"
        title="Post-Round Recap"
        description="On the drive home, chat with Goose about your round. Focus on process vs. outcome to build lasting improvements rather than fixating on the score."
        details={[
          { icon: "📝", title: "Process-Focused", description: "Analyze decisions and execution, not just results" },
          { icon: "📊", title: "Pattern Recognition", description: "Goose identifies trends across your rounds over time" },
          { icon: "💡", title: "Actionable Takeaways", description: "Specific practice priorities for your next session" },
        ]}
        reversed
        screenshot="/images/app/ai-conversation.png"
      />

      <FeatureDetailSection
        eyebrow="Podcast"
        title="Relive Your Rounds"
        description="Turn your best rounds into entertaining podcast-style recaps with banter, analysis, and light jabs from your AI hosts. Perfect for reliving that time you finally broke 80."
        details={[
          { icon: "🎙️", title: "Banter-Style Format", description: "Two AI hosts discuss your round like a real podcast" },
          { icon: "🎧", title: "Share with Friends", description: "Send your round recaps to your golf buddies" },
          { icon: "😂", title: "Entertainment + Insight", description: "Learn from your rounds while being entertained" },
        ]}
        screenshot="/images/app/podcast-generated.png"
      />

      <CrossLinkGrid currentFeature="/features/ai-coach" />
      <FeatureCTA title="Meet Your AI Coach" description="Start chatting with Goose and transform your golf journey." />
    </>
  )
}

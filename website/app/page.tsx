import { HeroSection } from "@/components/landing/HeroSection"
import { SocialProofBar } from "@/components/landing/SocialProofBar"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { FeatureShowcase } from "@/components/landing/FeatureShowcase"
import { FeaturesGrid } from "@/components/landing/FeaturesGrid"
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel"
import { PricingTeaser } from "@/components/landing/PricingTeaser"
import { FinalCTA } from "@/components/landing/FinalCTA"
import { TicketDivider } from "@/components/shared/TicketDivider"
import { SoftwareAppJsonLd } from "@/components/seo/JsonLd"

export default function HomePage() {
  return (
    <>
      <SoftwareAppJsonLd />
      <HeroSection />
      <SocialProofBar />
      <TicketDivider className="max-w-6xl mx-auto px-6" />
      <HowItWorks />
      <FeatureShowcase />
      <TicketDivider className="max-w-6xl mx-auto px-6" />
      <FeaturesGrid />
      <TestimonialsCarousel />
      <TicketDivider className="max-w-6xl mx-auto px-6" />
      <PricingTeaser />
      <FinalCTA />
    </>
  )
}

import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { USMap } from "@/components/travel/USMap"
import { DepartureBoard } from "@/components/travel/DepartureBoard"
import { destinations } from "@/data/travel/destinations"

export const metadata: Metadata = generatePageMetadata({
  title: "Golf Travel Guide — Curated Destination Guides for Every Golfer",
  description:
    "Explore curated golf travel guides for the best destinations in the US. Course reviews, local dining, where to stay, and what to do beyond the fairways.",
  path: "/travel",
})

export default function TravelPage() {
  return (
    <>
      <FeatureHero
        eyebrow="The Lounge"
        title="Golf Travel"
        titleAccent="Guide"
        description="Curated destination guides built by golfers, for golfers. Courses to play, places to eat, where to stay, and what to do when you're not on the course."
      />

      {/* Interactive US Map */}
      <section className="relative pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <USMap destinations={destinations} />
        </div>
      </section>

      {/* Departure Board — All Destinations */}
      <DepartureBoard destinations={destinations} />
    </>
  )
}

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generatePageMetadata } from "@/lib/metadata"
import { destinations } from "@/data/travel/destinations"
import { CityHero } from "@/components/travel/CityHero"
import { CourseTierSection } from "@/components/travel/CourseTierSection"
import { NeighborhoodGuide } from "@/components/travel/NeighborhoodGuide"
import { DiningSection } from "@/components/travel/DiningSection"
import { ActivitySection } from "@/components/travel/ActivitySection"
import { TravelCTA } from "@/components/travel/TravelCTA"

interface PageProps {
  params: { slug: string }
}

// Generate static pages for all destinations at build time
export function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }))
}

// Dynamic SEO metadata per destination
export function generateMetadata({ params }: PageProps): Metadata {
  const destination = destinations.find((d) => d.slug === params.slug)
  if (!destination) return {}

  return generatePageMetadata({
    title: `${destination.city}, ${destination.state} Golf Travel Guide — Courses, Dining & More`,
    description: `Plan your ${destination.city} golf trip. ${destination.stats.coursesCount}+ courses, local restaurant picks, neighborhood guides, and insider tips for the perfect golf vacation.`,
    path: `/travel/${destination.slug}`,
  })
}

export default function CityDetailPage({ params }: PageProps) {
  const destination = destinations.find((d) => d.slug === params.slug)

  if (!destination) {
    notFound()
  }

  return (
    <>
      <CityHero destination={destination} />
      <CourseTierSection tiers={destination.courseTiers} />
      <NeighborhoodGuide neighborhoods={destination.neighborhoods} />
      <DiningSection dining={destination.dining} breweries={destination.breweries} />
      <ActivitySection activities={destination.activities} />
      <TravelCTA
        city={destination.city}
        slug={destination.slug}
        flightCode={destination.flightCode}
      />
    </>
  )
}

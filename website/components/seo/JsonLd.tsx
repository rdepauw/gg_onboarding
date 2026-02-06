interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Golf Goose AI",
        url: "https://golfgoose.ai",
        logo: "https://golfgoose.ai/images/golf-goose-logo.png",
        description: "AI-powered golf coaching platform. Practice Smarter. Play Better.",
        sameAs: [
          "https://twitter.com/golfgooseai",
          "https://instagram.com/golfgooseai",
          "https://tiktok.com/@golfgooseai",
        ],
      }}
    />
  )
}

export function SoftwareAppJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Golf Goose",
        applicationCategory: "SportsApplication",
        operatingSystem: "iOS, Android",
        offers: {
          "@type": "Offer",
          price: "9.99",
          priceCurrency: "USD",
          description: "Premium monthly subscription",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "50000",
        },
      }}
    />
  )
}

import type { Metadata } from "next"
import { SITE_CONFIG } from "./constants"

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const ogImage = image || SITE_CONFIG.ogImage

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

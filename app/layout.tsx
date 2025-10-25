import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Golf Goose Now Boarding",
  description: "Golf Goose onboarding flow mockup",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { Check } from "lucide-react"
import { SoftwareAppJsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = generatePageMetadata({
  title: "Download Golf Goose",
  description: "Download Golf Goose AI for iOS and Android. Start practicing smarter and playing better today.",
  path: "/download",
})

const highlights = [
  "Personalized practice plans for your misses",
  "AI Coach Goose for real-time coaching",
  "OCR scorecard scanning",
  "Round podcast recaps",
  "Progress tracking & analytics",
  "Voice-enabled conversations",
]

export default function DownloadPage() {
  return (
    <>
      <SoftwareAppJsonLd />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
        <GlowOrb className="top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" variant="green" size="xl" />

        <div className="relative z-10 max-w-2xl text-center">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6">
            Now Boarding
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[0.9] text-white mb-6">
            Download
            <br />
            <span style={{ color: "#C3FCD2" }}>Golf Goose</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
            Start practicing smarter and playing better today. Free to download, premium features available.
          </p>

          {/* App store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#"
              className="h-14 px-8 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors text-sm"
            >
              <span className="text-xl">🍎</span> Download on the App Store
            </a>
            <a
              href="#"
              className="h-14 px-8 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors text-sm"
            >
              <span className="text-xl">▶</span> Get it on Google Play
            </a>
          </div>

          {/* Feature recap */}
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 text-left">
            <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goose-green flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-zinc-600 mt-6">
            Free tier available. Premium is $9.99/mo with a 7-day free trial.
          </p>
        </div>
      </section>
    </>
  )
}

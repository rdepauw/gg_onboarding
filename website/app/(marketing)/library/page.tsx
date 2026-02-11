import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { LibraryGrid } from "@/components/library/LibraryGrid"
import libraryData from "@/data/library-items.json"

export const metadata: Metadata = generatePageMetadata({
  title: "Free Golf Drills, Feels & Games Library: 250+ Practice Resources",
  description: "Browse 250+ golf drills, feels, and practice games. Filter by skill: putting, short game, approach, off the tee. Free access with email.",
  path: "/library",
})

export default function LibraryPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <GlowOrb className="top-0 left-1/2 -translate-x-1/2" variant="green" size="xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 text-center">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6">
            Practice Library
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.9] text-white mb-4">
            250+ Drills, Feels &{" "}
            <span style={{ color: "#C3FCD2" }}>Games</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            The practice content that powers Golf Goose, free to browse. Filter by skill, type, or search for exactly what you need.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <LibraryGrid items={libraryData as any} />
        </div>
      </section>
    </>
  )
}

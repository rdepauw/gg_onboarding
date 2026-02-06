"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { fadeInUp, viewportOnce } from "@/lib/animations"

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Dramatic center glow */}
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" variant="green" size="xl" />
      <GlowOrb className="top-1/3 left-1/4" variant="mint" size="md" />

      <div className="absolute inset-0 bg-gradient-to-b from-goose-void via-transparent to-goose-void pointer-events-none" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-6">
          Last Call for Boarding
        </p>

        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[0.9] text-white mb-6">
          Ready for
          <br />
          <span style={{ color: "#C3FCD2" }}>Takeoff?</span>
        </h2>

        <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
          Join 50,000+ golfers who are practicing smarter and playing better with Golf Goose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/download">
            <Button variant="cta" size="xl">
              Board Now
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="xl">
              Explore Features
            </Button>
          </Link>
        </div>

        {/* App store badges placeholder */}
        <div className="flex justify-center gap-4 mt-10">
          <div className="h-10 px-6 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center gap-2 text-xs text-zinc-400">
            <span>🍎</span> App Store
          </div>
          <div className="h-10 px-6 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center gap-2 text-xs text-zinc-400">
            <span>▶</span> Google Play
          </div>
        </div>
      </motion.div>

      {/* Subtle flying airplane */}
      <motion.div
        className="absolute bottom-16 text-2xl pointer-events-none opacity-20"
        initial={{ x: "-10%", y: 0 }}
        animate={{ x: "110vw", y: -20 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        ✈️
      </motion.div>
    </section>
  )
}

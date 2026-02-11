"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { EmailCapture } from "@/components/shared/EmailCapture"
import { fadeInUp, viewportOnce } from "@/lib/animations"

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
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
          Get early access to Golf Goose plus our free library of 250+ drills, feels, and games.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <EmailCapture
            source="final-cta"
            buttonText="Get Early Access"
            placeholder="Enter your email"
            successMessage="You're on the list! Welcome aboard."
            variant="inline"
          />
          <p className="font-mono text-[10px] text-zinc-600 mt-2">
            LAUNCHING SOON &middot; NO SPAM
          </p>
        </div>

        <Link href="/features">
          <Button variant="outline" size="lg">
            Explore Features
          </Button>
        </Link>
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

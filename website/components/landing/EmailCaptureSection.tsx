"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { fadeInUp, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { EmailCapture } from "@/components/shared/EmailCapture"

export function EmailCaptureSection() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <GlowOrb className="-top-20 right-[-10%]" variant="mint" size="lg" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-4">
          Free Practice Library
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-wide text-white mb-4">
          250+ Drills, Feels &{" "}
          <span style={{ color: "#C3FCD2" }}>Games</span>
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Get instant access to our curated library of practice content. The same drills and feels used inside the app. Free, no card required.
        </p>

        <div className="max-w-md mx-auto">
          <EmailCapture
            source="homepage-section"
            buttonText="Get Free Access"
            placeholder="Enter your email"
            successMessage="You're in! Head to the Library to explore."
            variant="inline"
          />
          <p className="font-mono text-[10px] text-zinc-600 mt-3">
            NO SPAM &middot; UNSUBSCRIBE ANYTIME
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

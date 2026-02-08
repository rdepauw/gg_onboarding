"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { AudioSamplePlayer } from "@/components/features/AudioSamplePlayer"

const pumpFeatures = [
  {
    icon: "01",
    label: "Personalized Motivation",
    description: "Draws from your recent rounds and what has been working in practice.",
  },
  {
    icon: "02",
    label: "Mental Cues & Feels",
    description: "Reinforces the swing thoughts and sensations that produce your best shots.",
  },
  {
    icon: "03",
    label: "Quick & Focused",
    description: "2-3 minute audio you can listen to on the drive or in the parking lot.",
  },
]

export function PreRoundPumpSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Dashed divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <div className="border-t border-dashed border-zinc-800" />
      </div>

      <GlowOrb className="-bottom-16 -left-20" variant="mint" size="md" />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
          {/* Right side: Screenshot + Audio Player */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex-1 flex flex-col items-center gap-6"
          >
            <GlowOrb className="-top-8 right-0" variant="green" size="sm" />

            {/* Phone mockup */}
            <div className="relative w-60 md:w-64 rounded-[2.5rem] border-2 border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 shadow-2xl shadow-black/50">
              <div className="rounded-[2rem] bg-goose-void overflow-hidden aspect-[9/19]">
                <Image
                  src="/images/app/pre-round-pump.png"
                  alt="Pre-round pump up screen in the GolfGoose app"
                  width={390}
                  height={844}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Audio Player */}
            <AudioSamplePlayer
              title="Pre-Round Pump Up"
              description="Personalized motivation before your round"
              src="/audio/sample-pump-up.mp3"
              artwork="/images/app/pre-round-pump.png"
            />
          </motion.div>

          {/* Left side: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 space-y-6"
          >
            <motion.p
              variants={staggerItem}
              className="font-mono text-[10px] tracking-flight uppercase text-goose-green"
            >
              Pre-Round
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display font-bold text-3xl md:text-4xl tracking-wide text-white"
            >
              Get in the Zone<br />
              <span className="text-goose-mint">Before You Tee Off</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-zinc-400 leading-relaxed"
            >
              Before every round, Goose delivers a personalized audio pump-up that
              primes your mind for the course. It focuses on the feels that have
              been working, the smart decisions from your best rounds, and the
              specific things to keep front of mind today.
            </motion.p>

            {/* Feature cards */}
            <div className="space-y-3 pt-4">
              {pumpFeatures.map((feature) => (
                <motion.div
                  key={feature.label}
                  variants={staggerItem}
                  className="flex items-start gap-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4 hover:border-goose-green/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-goose-green/10 border border-goose-green/20 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-goose-green font-bold">
                        {feature.icon}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-white mb-0.5">
                      {feature.label}
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Boarding pass style stat */}
            <motion.div
              variants={staggerItem}
              className="mt-6 flex items-center gap-6 pt-4 border-t border-dashed border-zinc-800"
            >
              <div>
                <p className="font-mono text-[9px] tracking-flight uppercase text-zinc-600 mb-1">
                  Avg Duration
                </p>
                <p className="font-display font-bold text-xl text-white">2:30</p>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <p className="font-mono text-[9px] tracking-flight uppercase text-zinc-600 mb-1">
                  Tailored To
                </p>
                <p className="font-display font-bold text-xl text-white">Your Game</p>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <p className="font-mono text-[9px] tracking-flight uppercase text-zinc-600 mb-1">
                  When
                </p>
                <p className="font-display font-bold text-xl text-white">Pre-Tee</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

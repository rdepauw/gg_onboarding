"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"

const differentiators = [
  {
    tag: "Connected",
    title: "Practice + Rounds, Together",
    description:
      "Other golf apps silo practice and rounds into separate experiences. Goose connects them -- your practice data informs your round analysis, and your round patterns drive your practice plan.",
    versus: "Others separate practice and rounds",
    goose: "Goose connects everything into one loop",
  },
  {
    tag: "Personal",
    title: "AI That Actually Knows Your Game",
    description:
      "Generic golf tips don't help. Goose learns from your specific tendencies, favorite feels, miss patterns, and scoring trends to deliver coaching that's built just for you.",
    versus: "Generic tips from a chatbot",
    goose: "Coaching built from your actual data",
  },
  {
    tag: "Audio",
    title: "Audio Coaching That Fits Your Life",
    description:
      "Pre-round pump ups on the drive to the course. Post-round podcast recaps on the way home. Goose meets you where you are with voice-first coaching you can listen to, not just read.",
    versus: "Text-only tips you forget",
    goose: "Voice coaching for every moment",
  },
  {
    tag: "Feels",
    title: "Swing Feels, Not Just Drills",
    description:
      "The best golfers think in feels -- the sensations and thoughts that make a swing click. Goose tracks which feels work for you and reinforces them at the right moments.",
    versus: "Cookie-cutter drill libraries",
    goose: "Personalized feels that actually stick",
  },
]

export function GooseDifferentiators() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ticket perforation divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="flex gap-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          ))}
        </div>
      </div>

      <GlowOrb className="top-0 left-1/2 -translate-x-1/2" variant="green" size="lg" />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="font-mono text-[10px] tracking-flight uppercase text-goose-green mb-4">
            Why Goose
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white mb-4">
            What Makes Goose <span className="text-goose-mint">Different</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Not another generic golf app. Goose is built from the ground up
            around how golfers actually improve.
          </p>
        </motion.div>

        {/* Differentiator Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {differentiators.map((diff) => (
            <motion.div
              key={diff.tag}
              variants={staggerItem}
              className="group relative rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black overflow-hidden hover:border-goose-green/20 transition-all duration-500"
            >
              {/* Boarding pass style top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-dashed border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-goose-green group-hover:animate-glow-pulse" />
                  <span className="font-mono text-[9px] tracking-flight uppercase text-goose-green font-semibold">
                    {diff.tag}
                  </span>
                </div>
                <span className="font-mono text-[8px] tracking-wider uppercase text-zinc-700">
                  GG-DIFF
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-goose-mint transition-colors duration-300">
                  {diff.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {diff.description}
                </p>

                {/* Comparison strip */}
                <div className="space-y-2 pt-3 border-t border-zinc-800/60">
                  {/* Others */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-md bg-zinc-800 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" className="text-zinc-600">
                        <line x1="2" y1="2" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="8" y1="2" x2="2" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-zinc-600 line-through decoration-zinc-700">
                      {diff.versus}
                    </span>
                  </div>

                  {/* Goose */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-md bg-goose-green/10 border border-goose-green/20 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" className="text-goose-green">
                        <polyline points="1.5,5.5 4,8 8.5,2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-goose-mint font-medium">
                      {diff.goose}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-goose-green/[0.03] to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

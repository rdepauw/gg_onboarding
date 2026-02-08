"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { AudioSamplePlayer } from "@/components/features/AudioSamplePlayer"

const podcastFeatures = [
  {
    label: "Two-Host Format",
    description: "AI co-hosts banter about your round with personality, humor, and honest analysis.",
  },
  {
    label: "Hole-by-Hole Highlights",
    description: "Relive the highs, laugh at the lows, and understand the patterns.",
  },
  {
    label: "Share With Friends",
    description: "Send your podcast to your golf group chat and let them hear about that eagle.",
  },
]

export function PostRoundPodcastSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative ticket perforation divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="flex gap-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          ))}
        </div>
      </div>

      {/* Background accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-goose-green/[0.02] via-transparent to-transparent pointer-events-none" />

      <GlowOrb className="top-20 right-[-15%]" variant="green" size="lg" />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header -- full width, centered */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-goose-green/20 bg-goose-green/5">
            <div className="w-2 h-2 rounded-full bg-goose-green animate-glow-pulse" />
            <span className="font-mono text-[10px] tracking-flight uppercase text-goose-green font-semibold">
              Key Differentiator
            </span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-tight text-white mb-5">
            Your Personal<br />
            <span className="text-goose-mint">Post-Round Podcast</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            After every round, GolfGoose generates a fully personalized podcast
            that breaks down your performance, celebrates the wins, and
            dissects the misses. No other golf app does this.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Screenshot + Audio Player stacked */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex-1 flex flex-col items-center gap-6"
          >
            <GlowOrb className="-top-10 -left-10" variant="green" size="sm" />

            {/* Phone mockup */}
            <div className="relative w-60 md:w-64 rounded-[2.5rem] border-2 border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 shadow-2xl shadow-black/50">
              <div className="rounded-[2rem] bg-goose-void overflow-hidden aspect-[9/19]">
                <Image
                  src="/images/app/post-round-pod.jpg"
                  alt="Post-round podcast generation screen in GolfGoose"
                  width={390}
                  height={844}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Audio Player */}
            <AudioSamplePlayer
              title="Post-Round Podcast"
              description="AI-generated analysis of your latest round"
              src="/audio/sample-pump-up.mp3"
              artwork="/images/app/post-round-pod.jpg"
            />
          </motion.div>

          {/* Right: Feature breakdown */}
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
              How It Works
            </motion.p>
            <motion.h3
              variants={staggerItem}
              className="font-display font-bold text-2xl md:text-3xl tracking-wide text-white"
            >
              AI Hosts That Know Your Game
            </motion.h3>
            <motion.p
              variants={staggerItem}
              className="text-zinc-400 leading-relaxed"
            >
              Finish your round, log your scorecard, and Goose takes over. Within
              minutes you have a podcast-style recap with two AI hosts who
              banter, analyze, and occasionally roast your triple bogey on 14.
            </motion.p>

            {/* Feature list cards */}
            <div className="space-y-3 pt-4">
              {podcastFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  variants={staggerItem}
                  className="flex items-start gap-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4 hover:border-goose-green/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-goose-green/10 border border-goose-green/20 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-goose-green font-bold">
                        {String(index + 1).padStart(2, "0")}
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

            {/* Social proof callout */}
            <motion.div
              variants={staggerItem}
              className="mt-6 flex items-center gap-3 pt-4 border-t border-dashed border-zinc-800"
            >
              <div className="w-1 h-8 rounded-full bg-goose-green" />
              <p className="text-sm text-zinc-500 italic">
                &ldquo;It&apos;s like having a ShotLink broadcast for every round I play.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

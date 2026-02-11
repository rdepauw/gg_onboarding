"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { AudioSamplePlayer } from "@/components/features/AudioSamplePlayer"

const showcases = [
  {
    eyebrow: "AI Coach",
    title: "Talk to me, Goose!",
    description: "AI-powered conversations for every part of your golf journey. Get personalized speeches before rounds, process-focused recaps after, and banter-style podcast replays of your best moments.",
    features: [
      { icon: "🌅", label: "Pre-Round Pump Up", detail: "Personalized motivation focusing on what works for you" },
      { icon: "📝", label: "Post-Round Recap", detail: "Process vs. outcome analysis on the drive home" },
      { icon: "🎙️", label: "Podcast Recaps", detail: "Relive your rounds with AI-generated banter" },
    ],
    link: "/features/ai-coach",
    gradient: "from-goose-green/10",
    reversed: false,
    screenshot: "/images/app/practice-library.png",
    audio: {
      title: "Post-Round Podcast",
      description: "AI-generated analysis of your latest round",
      src: "/audio/sample-pump-up.mp3",
      artwork: "/images/app/podcast-generated.png",
    },
  },
  {
    eyebrow: "Content Library",
    title: "250+ Drills, Feels & Games",
    description: "Browse the same practice content that powers Golf Goose. Filter by skill category, search for exactly what you need, and build your own collection of go-to drills and feels.",
    features: [
      { icon: "📚", label: "Curated Content", detail: "Every item reviewed and tested by real golfers" },
      { icon: "🔍", label: "Smart Filters", detail: "Find content by skill: putting, short game, approach, off the tee" },
      { icon: "⭐", label: "Staff Picks", detail: "Our coaches' favorite drills and feels highlighted" },
    ],
    link: "/library",
    gradient: "from-goose-green/10",
    reversed: true,
    screenshot: "/images/app/swing-feels.png",
  },
  {
    eyebrow: "Practice Plans",
    title: "What's Your Miss?",
    description: "Tell us your swing faults and we'll generate a personalized practice plan with drills, feels, and games designed specifically for your game. No more wasted range sessions.",
    features: [
      { icon: "🎯", label: "Fault Diagnosis", detail: "Identify your most common misses" },
      { icon: "🎭", label: "Custom Feels", detail: "Mental cues that match your swing" },
      { icon: "🎮", label: "Practice Games", detail: "Competitive drills that make practice fun" },
    ],
    link: "/features/practice-plans",
    gradient: "from-goose-mint/5",
    reversed: false,
    screenshot: "/images/app/onboarding-miss.png",
  },
]

export function FeatureShowcase() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4">
          In-Flight Entertainment
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white">
          Everything You Need to{" "}
          <span style={{ color: "#C3FCD2" }}>Improve</span>
        </h2>
      </div>

      <div className="space-y-20">
        {showcases.map((item, index) => (
          <div
            key={item.title}
            className={`relative flex flex-col ${
              item.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12 lg:gap-16 items-center`}
          >
            {/* Content side */}
            <motion.div
              variants={item.reversed ? slideInRight : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex-1 space-y-6"
            >
              <p className="font-mono text-[10px] tracking-flight uppercase text-goose-green">
                {item.eyebrow}
              </p>
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-wide text-white">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-lg">
                {item.description}
              </p>

              <div className="space-y-4 pt-4">
                {item.features.map((feature) => (
                  <div key={feature.label} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                    <div>
                      <p className="font-display font-semibold text-sm text-white">
                        {feature.label}
                      </p>
                      <p className="text-xs text-zinc-500">{feature.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={item.link}
                  className="font-mono text-xs tracking-wide text-goose-green hover:text-goose-mint transition-colors"
                >
                  EXPLORE FEATURE →
                </Link>
              </div>
            </motion.div>

            {/* Visual side — phone mockup */}
            <motion.div
              variants={item.reversed ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative flex-1 flex flex-col items-center gap-6"
            >
              <div className="relative">
                <GlowOrb
                  className={`-top-10 ${item.reversed ? "-left-10" : "-right-10"}`}
                  variant="green"
                  size="md"
                />
                {/* Phone frame */}
                <div className="relative w-64 md:w-72 rounded-[2.5rem] border-2 border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 shadow-2xl shadow-black/50">
                  <div className="rounded-[2rem] bg-goose-void overflow-hidden aspect-[9/19]">
                    <Image
                      src={item.screenshot}
                      alt={`${item.eyebrow} app screen`}
                      width={390}
                      height={844}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Audio player (if present) */}
              {"audio" in item && item.audio && (
                <AudioSamplePlayer
                  title={item.audio.title}
                  description={item.audio.description}
                  src={item.audio.src}
                  artwork={item.audio.artwork}
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

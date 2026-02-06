"use client"

import { motion } from "framer-motion"
import { Target, Plane, TrendingUp } from "lucide-react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const zones = [
  {
    zone: "01",
    title: "Tell Us Your Miss",
    description: "Select the swing faults you fight most — slice, hook, fat shots, and more. Our AI diagnoses your patterns.",
    icon: Target,
    color: "text-goose-green",
  },
  {
    zone: "02",
    title: "Get Your Flight Plan",
    description: "Receive a personalized practice plan with drills, feels, and games designed specifically for your misses.",
    icon: Plane,
    color: "text-goose-mint",
    featured: true,
  },
  {
    zone: "03",
    title: "Practice Smarter",
    description: "Track your progress, log rounds, and let your AI coach Goose guide you to lower scores over time.",
    icon: TrendingUp,
    color: "text-goose-green",
  },
]

export function HowItWorks() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4">
          Boarding Process
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white">
          Three Steps to{" "}
          <span style={{ color: "#C3FCD2" }}>Lower Scores</span>
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Connecting flight path line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] -translate-y-1/2 z-0">
          <div className="border-t-2 border-dashed border-zinc-800" />
        </div>

        {zones.map((zone) => {
          const Icon = zone.icon
          return (
            <motion.div
              key={zone.zone}
              variants={staggerItem}
              className={`relative z-10 group ${zone.featured ? "md:-mt-4" : ""}`}
            >
              <div
                className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                  zone.featured
                    ? "border-goose-green/30 bg-gradient-to-br from-goose-green/10 to-zinc-900 shadow-lg shadow-goose-green/5 md:py-10"
                    : "border-zinc-800 bg-gradient-to-br from-zinc-900 to-black hover:border-zinc-700"
                }`}
              >
                {/* Zone badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] tracking-flight text-zinc-600 uppercase">
                    Zone {zone.zone}
                  </span>
                  <div className="flex-1 border-t border-dashed border-zinc-800" />
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-5 group-hover:border-goose-green/30 transition-colors`}>
                  <Icon className={`w-5 h-5 ${zone.color}`} />
                </div>

                <h3 className="font-display font-bold text-xl tracking-wide text-white mb-3">
                  {zone.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {zone.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}

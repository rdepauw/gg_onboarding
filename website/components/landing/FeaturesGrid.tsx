"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Crosshair, Radio, BarChart3, BookOpen, Target } from "lucide-react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const features = [
  {
    icon: MessageCircle,
    title: "AI Coach",
    description: "Voice-enabled AI conversations for pre-round prep, post-round recaps, and real-time coaching.",
    href: "/features/ai-coach",
    span: false,
  },
  {
    icon: Crosshair,
    title: "Practice Plans",
    description: "Personalized drills, feels, and games based on your specific swing faults and goals.",
    href: "/features/practice-plans",
    span: true,
  },
  {
    icon: Radio,
    title: "Round Analysis",
    description: "OCR scorecard scanning, AI analysis, and podcast-style round recaps.",
    href: "/features/round-analysis",
    span: false,
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Activity calendar, handicap trends, and visual flight path from current to goal.",
    href: "/features/progress-tracking",
    span: false,
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Searchable library of drills, feels, and practice games filtered by skill category.",
    href: "/features/library",
    span: false,
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set scoring goals, practice frequency targets, and track your birdie count for the year.",
    href: "/features",
    span: true,
  },
]

export function FeaturesGrid() {
  return (
    <SectionWrapper className="bg-goose-terminal">
      <div className="text-center mb-10">
        <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4">
          All Destinations
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white">
          Built for{" "}
          <span style={{ color: "#C3FCD2" }}>Every Part</span> of Your Game
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className={feature.span ? "lg:col-span-2" : ""}
            >
              <Link href={feature.href} className="block group h-full">
                <div className="relative h-full rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black p-7 transition-all duration-300 hover:border-goose-green/30 hover:shadow-lg hover:shadow-goose-green/5 overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-goose-green/0 to-goose-green/0 group-hover:from-goose-green/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-5 group-hover:border-goose-green/40 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-goose-green" />
                    </div>

                    <h3 className="font-display font-bold text-lg tracking-wide text-white mb-2 group-hover:text-goose-mint transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <span className="font-mono text-[10px] tracking-flight text-zinc-600 group-hover:text-goose-green transition-colors uppercase">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}

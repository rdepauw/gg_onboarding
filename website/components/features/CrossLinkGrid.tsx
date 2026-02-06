"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Crosshair, Radio, BarChart3, BookOpen } from "lucide-react"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const allFeatures = [
  { icon: MessageCircle, title: "AI Coach", href: "/features/ai-coach" },
  { icon: Crosshair, title: "Practice Plans", href: "/features/practice-plans" },
  { icon: Radio, title: "Round Analysis", href: "/features/round-analysis" },
  { icon: BarChart3, title: "Progress Tracking", href: "/features/progress-tracking" },
  { icon: BookOpen, title: "Library", href: "/features/library" },
]

interface CrossLinkGridProps {
  currentFeature: string
}

export function CrossLinkGrid({ currentFeature }: CrossLinkGridProps) {
  const otherFeatures = allFeatures.filter((f) => f.href !== currentFeature)

  return (
    <section className="py-20 border-t border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-8 text-center">
          Other Destinations
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {otherFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={staggerItem}>
                <Link
                  href={feature.href}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-goose-green/30 hover:bg-goose-green/5 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-zinc-500 group-hover:text-goose-green transition-colors" />
                  <span className="text-sm font-display font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    {feature.title}
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

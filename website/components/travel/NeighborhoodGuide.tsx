"use client"

import { motion } from "framer-motion"
import { Home, Tag } from "lucide-react"
import { TicketDivider } from "@/components/shared/TicketDivider"
import type { Neighborhood } from "@/data/travel/types"
import { fadeIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

interface NeighborhoodGuideProps {
  neighborhoods: Neighborhood[]
}

export function NeighborhoodGuide({ neighborhoods }: NeighborhoodGuideProps) {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10"
        >
          <TicketDivider className="mb-8" />
          <div className="flex items-center gap-3 mb-3">
            <Home className="w-4 h-4 text-goose-green" />
            <span className="font-mono text-[11px] tracking-flight uppercase text-goose-green">
              Where to Stay
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            Neighborhoods
          </h2>
        </motion.div>

        {/* Neighborhood grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {neighborhoods.map((hood) => (
            <motion.div
              key={hood.name}
              variants={staggerItem}
              className="group rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700/60"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-bold text-white text-base">{hood.name}</h3>
                <span className="shrink-0 font-mono text-xs font-semibold text-goose-green">
                  {hood.priceRange}
                </span>
              </div>

              {/* Dashed divider */}
              <div className="border-t border-dashed border-zinc-800 my-3" />

              {/* Vibe description */}
              <p className="text-zinc-400 text-sm font-body leading-relaxed mb-3">
                {hood.vibe}
              </p>

              {/* Best for tag */}
              <div className="flex items-start gap-2">
                <Tag className="w-3 h-3 text-zinc-600 mt-0.5 shrink-0" />
                <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase leading-relaxed">
                  {hood.bestFor}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

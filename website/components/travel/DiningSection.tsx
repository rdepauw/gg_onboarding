"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed, Beer } from "lucide-react"
import { TicketDivider } from "@/components/shared/TicketDivider"
import type { DiningSpot, Brewery } from "@/data/travel/types"
import { fadeIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

interface DiningSectionProps {
  dining: DiningSpot[]
  breweries: Brewery[]
}

export function DiningSection({ dining, breweries }: DiningSectionProps) {
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
            <UtensilsCrossed className="w-4 h-4 text-goose-green" />
            <span className="font-mono text-[11px] tracking-flight uppercase text-goose-green">
              Dining
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            Where to Eat
          </h2>
        </motion.div>

        {/* Restaurant grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {dining.map((spot) => (
            <motion.div
              key={spot.name}
              variants={staggerItem}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700/60"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-white text-sm">{spot.name}</h3>
                <span className="shrink-0 font-mono text-xs font-semibold text-goose-green">
                  {spot.priceRange}
                </span>
              </div>

              {/* Cuisine tag */}
              <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-800/40 px-2.5 py-0.5 font-mono text-[9px] tracking-wider uppercase text-zinc-400 mb-3">
                {spot.cuisine}
              </span>

              {/* Dashed divider */}
              <div className="border-t border-dashed border-zinc-800 my-3" />

              {/* Highlight */}
              <p className="text-zinc-400 text-xs font-body leading-relaxed">{spot.highlight}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Breweries sub-section */}
        {breweries.length > 0 && (
          <>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Beer className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-[11px] tracking-flight uppercase text-amber-400">
                  Breweries
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Post-Round Pints
              </h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {breweries.map((brewery) => (
                <motion.div
                  key={brewery.name}
                  variants={staggerItem}
                  className="rounded-xl border border-amber-400/10 bg-amber-400/5 p-5 transition-colors hover:border-amber-400/20"
                >
                  <h4 className="font-display font-bold text-white text-sm mb-1">
                    {brewery.name}
                  </h4>
                  <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 font-mono text-[9px] tracking-wider uppercase text-amber-400 mb-3">
                    {brewery.style}
                  </span>

                  <div className="border-t border-dashed border-zinc-800/60 my-3" />

                  <p className="text-zinc-400 text-xs font-body leading-relaxed">
                    {brewery.highlight}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

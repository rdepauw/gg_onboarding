"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Plane } from "lucide-react"
import type { GolfDestination } from "@/data/travel/types"

interface DestinationPreviewProps {
  destination: GolfDestination
  index: number
}

export function DestinationPreview({ destination, index }: DestinationPreviewProps) {
  return (
    <motion.div
      id={`dest-${destination.slug}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/travel/${destination.slug}`}
        className="group block border border-zinc-800/50 rounded-lg bg-zinc-950/60 backdrop-blur-sm
          transition-all duration-300
          hover:border-goose-green/20 hover:bg-zinc-900/40 hover:shadow-[0_0_30px_rgba(8,226,110,0.04)]"
      >
        {/* Departure board row */}
        <div className="px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">

            {/* Flight code + status indicator */}
            <div className="flex items-center gap-3 sm:w-[140px] flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-goose-green animate-glow-pulse" />
              <span className="font-mono text-sm tracking-wider text-goose-green font-medium">
                {destination.flightCode}
              </span>
            </div>

            {/* City & state */}
            <div className="sm:flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <h3 className="font-display font-bold text-white text-lg sm:text-xl group-hover:text-goose-mint transition-colors truncate">
                  {destination.city}
                </h3>
                <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase flex-shrink-0">
                  {destination.state}
                </span>
              </div>
              <p className="text-zinc-500 text-sm mt-0.5 line-clamp-1 hidden sm:block">
                {destination.tagline}
              </p>
            </div>

            {/* Stats columns */}
            <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
              {/* Courses */}
              <div className="text-center hidden lg:block">
                <p className="font-mono text-[10px] tracking-wider uppercase text-zinc-600 mb-0.5">
                  Courses
                </p>
                <p className="font-mono text-sm text-white">
                  {destination.stats.coursesCount}
                </p>
              </div>

              {/* Green fees */}
              <div className="text-center hidden lg:block">
                <p className="font-mono text-[10px] tracking-wider uppercase text-zinc-600 mb-0.5">
                  Avg Fee
                </p>
                <p className="font-mono text-sm text-white">
                  {destination.stats.avgGreenFee}
                </p>
              </div>

              {/* Best month */}
              <div className="text-center hidden lg:block">
                <p className="font-mono text-[10px] tracking-wider uppercase text-zinc-600 mb-0.5">
                  Best Month
                </p>
                <p className="font-mono text-sm text-white">
                  {destination.stats.bestMonth}
                </p>
              </div>

              {/* Explore CTA */}
              <div className="flex items-center gap-2 text-zinc-500 group-hover:text-goose-green transition-colors">
                <span className="font-mono text-[11px] tracking-wider uppercase hidden sm:inline">
                  Explore
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom dashed border for boarding-pass feel */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      </Link>
    </motion.div>
  )
}

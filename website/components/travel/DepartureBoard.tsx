"use client"

import { motion } from "framer-motion"
import { Plane } from "lucide-react"
import { DestinationPreview } from "./DestinationPreview"
import { TicketDivider } from "@/components/shared/TicketDivider"
import type { GolfDestination } from "@/data/travel/types"
import { fadeIn, viewportOnce } from "@/lib/animations"

interface DepartureBoardProps {
  destinations: GolfDestination[]
}

export function DepartureBoard({ destinations }: DepartureBoardProps) {
  return (
    <section className="relative pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* Section header with boarding-pass aesthetic */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8"
        >
          <TicketDivider className="mb-8" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Plane className="w-4 h-4 text-goose-green -rotate-45" />
              <h2 className="font-mono text-[11px] tracking-flight uppercase text-goose-green">
                Departures
              </h2>
            </div>

            {/* Column headers — desktop only */}
            <div className="hidden lg:flex items-center gap-6 pr-10">
              <span className="font-mono text-[9px] tracking-wider uppercase text-zinc-600 w-[56px] text-center">
                Courses
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase text-zinc-600 w-[80px] text-center">
                Avg Fee
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase text-zinc-600 w-[76px] text-center">
                Best Month
              </span>
            </div>
          </div>
        </motion.div>

        {/* Destination rows */}
        <div className="space-y-2">
          {destinations.map((dest, i) => (
            <DestinationPreview key={dest.slug} destination={dest} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center"
        >
          <p className="font-mono text-[10px] tracking-wider uppercase text-zinc-600">
            More destinations boarding soon
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full bg-goose-green/40"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

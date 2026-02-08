"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import type { GolfDestination } from "@/data/travel/types"
import { staggerItem } from "@/lib/animations"

interface DestinationCardProps {
  destination: GolfDestination
  index: number
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={`/travel/${destination.slug}`}
        className="group block rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-4 transition-all
          hover:border-goose-green/30 hover:bg-zinc-900/80"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-wider text-goose-green">
              {destination.flightCode}
            </span>
            <div>
              <p className="text-white font-display font-bold text-sm">
                {destination.city}, {destination.state}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-zinc-500" />
                <span className="font-mono text-[10px] text-zinc-500">
                  {destination.stats.coursesCount} courses
                </span>
              </div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-goose-green transition-colors" />
        </div>
      </Link>
    </motion.div>
  )
}

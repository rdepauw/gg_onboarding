"use client"

import { motion } from "framer-motion"
import { Plane, MapPin, Thermometer, Calendar, DollarSign, LayoutGrid } from "lucide-react"
import type { GolfDestination } from "@/data/travel/types"
import { heroStagger, heroItem, viewportOnce } from "@/lib/animations"

interface CityHeroProps {
  destination: GolfDestination
}

export function CityHero({ destination }: CityHeroProps) {
  const { city, state, flightCode, tagline, stats, nearestAirport } = destination

  const statItems = [
    { label: "Courses", value: `${stats.coursesCount}+`, icon: LayoutGrid },
    { label: "Avg Green Fee", value: stats.avgGreenFee, icon: DollarSign },
    { label: "Best Month", value: stats.bestMonth, icon: Calendar },
    { label: "Avg Temp", value: stats.avgTemp, icon: Thermometer },
  ]

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-goose-void via-zinc-950 to-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-goose-green-ambient to-transparent opacity-60" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Flight code badge */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-goose-green/30 bg-goose-green/10 px-4 py-1.5">
              <Plane className="w-3.5 h-3.5 text-goose-green -rotate-45" />
              <span className="font-mono text-xs tracking-flight uppercase text-goose-green font-semibold">
                {flightCode}
              </span>
            </span>
          </motion.div>

          {/* City name */}
          <motion.h1
            variants={heroItem}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight"
          >
            {city}
            <span className="text-goose-mint">,</span>{" "}
            <span className="text-goose-mint">{state}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={heroItem}
            className="mt-4 md:mt-6 text-zinc-400 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* Nearest airport */}
          <motion.div variants={heroItem} className="mt-5 flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase">
              {nearestAirport}
            </span>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={heroItem}
            className="mt-10 md:mt-12 mx-auto max-w-2xl rounded-xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/60 divide-y md:divide-y-0 divide-zinc-800/60">
              {statItems.map((stat) => (
                <div key={stat.label} className="px-4 py-4 md:py-5 text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    <stat.icon className="w-3 h-3 text-zinc-600" />
                    <span className="font-mono text-[9px] tracking-wider uppercase text-zinc-500">
                      {stat.label}
                    </span>
                  </div>
                  <p className="font-mono text-sm md:text-base font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

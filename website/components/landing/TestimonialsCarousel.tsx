"use client"

import { motion, useMotionValue } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { fadeInUp, viewportOnce } from "@/lib/animations"

const testimonials = [
  {
    flightCode: "GG-389",
    quote: "The personalized drills for my slice actually worked. Within two weeks, my miss went from a 30-yard banana to a gentle fade.",
    name: "Sarah K.",
    handicap: "24 → 19",
    rating: 5,
  },
  {
    flightCode: "GG-156",
    quote: "I've tried every golf app. This is the first one that connects everything: my practice, my rounds, and real coaching advice.",
    name: "James R.",
    handicap: "12 → 9",
    rating: 5,
  },
  {
    flightCode: "GG-512",
    quote: "The podcast recaps are hilarious. My wife actually listens to them with me now. Best golf app feature ever built.",
    name: "David L.",
    handicap: "15 → 11",
    rating: 5,
  },
  {
    flightCode: "GG-934",
    quote: "Finally broke 80 for the first time after using Golf Goose for three months. The flight plan goal tracking kept me accountable.",
    name: "Tom W.",
    handicap: "11 → 7",
    rating: 5,
  },
  {
    flightCode: "GG-271",
    quote: "The pre-round pump up completely changed my mental game. I step onto the first tee with a clear plan instead of just hoping for the best.",
    name: "Michelle P.",
    handicap: "18 → 14",
    rating: 5,
  },
  {
    flightCode: "GG-648",
    quote: "My range sessions used to be aimless bucket-hitting. Now every practice has structure and I can actually see what's improving week to week.",
    name: "Chris M.",
    handicap: "8 → 5",
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <SectionWrapper fullBleed>
      <div className="mx-auto max-w-6xl px-6 md:px-8 mb-8">
        <div className="text-center">
          <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4">
            Passenger Reviews
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white">
            What Golfers Are{" "}
            <span style={{ color: "#C3FCD2" }}>Saying</span>
          </h2>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto pb-6 px-6 md:px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.flightCode}
              className="flex-shrink-0 w-80 snap-start"
            >
              {/* Luggage tag card */}
              <div className="relative rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 h-full">
                {/* Flight code header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] tracking-flight text-zinc-600">
                    {t.flightCode}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-goose-green text-xs">★</span>
                    ))}
                  </div>
                </div>

                {/* Dashed divider */}
                <div className="border-t border-dashed border-zinc-800 mb-5" />

                {/* Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                  <span className="font-body text-sm font-medium text-white">
                    {t.name}
                  </span>
                  <span className="font-mono text-xs text-goose-green font-bold">
                    {t.handicap}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { heroStagger, heroItem } from "@/lib/animations"

const boardingDetails = [
  { label: "PASSENGER", value: "YOU" },
  { label: "DEST", value: "LOWER SCORES" },
  { label: "FLIGHT", value: "GG-001" },
  { label: "GATE", value: "AI" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Glow orbs */}
      <GlowOrb className="top-[-10%] right-[-5%]" variant="green" size="xl" />
      <GlowOrb className="bottom-[-15%] left-[-10%]" variant="mint" size="lg" />

      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden="true" />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-5xl"
      >
        {/* Eyebrow */}
        <motion.p
          variants={heroItem}
          className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-6"
        >
          Golf Goose Airways
        </motion.p>

        {/* Logo */}
        <motion.div variants={heroItem} className="mb-6">
          <Image
            src="/images/golf-goose-logo.png"
            alt="Golf Goose AI"
            width={72}
            height={72}
            priority
            className="drop-shadow-[0_0_30px_rgba(8,226,110,0.3)]"
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={heroItem}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] mb-8"
          style={{ color: "#C3FCD2" }}
        >
          NOW
          <br />
          BOARDING
        </motion.h1>

        {/* Boarding pass detail strip */}
        <motion.div
          variants={heroItem}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 py-4 px-6 border-y border-zinc-800/60"
        >
          {boardingDetails.map((detail) => (
            <div key={detail.label} className="text-left">
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-600">
                {detail.label}
              </p>
              <p className="font-mono text-sm font-bold text-goose-green tracking-wide">
                {detail.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={heroItem}
          className="font-body text-lg md:text-xl text-zinc-300 mb-4 max-w-lg"
        >
          The only app that connects your practice, rounds, and AI coach
          into one seamless improvement system.
        </motion.p>

        <motion.p
          variants={heroItem}
          className="font-display font-bold text-lg tracking-wide mb-10"
          style={{ color: "#C3FCD2" }}
        >
          Practice Smarter. Play Better.
        </motion.p>

        {/* CTA Cluster */}
        <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4">
          <Link href="/download">
            <Button variant="cta" size="xl">
              Board Now
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="xl">
              Explore Features
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-goose-green" />
        </motion.div>
      </motion.div>
    </section>
  )
}

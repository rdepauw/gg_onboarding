"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { EmailCapture } from "@/components/shared/EmailCapture"
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
        {/* Eyebrow — airline badge */}
        <motion.div
          variants={heroItem}
          className="flex items-center gap-3 mb-6"
        >
          <div className="font-mono text-[10px] tracking-flight uppercase text-zinc-600 border border-zinc-800 rounded-full px-4 py-1.5 flex items-center gap-2">
            <span className="text-goose-green">✈</span>
            NOW BOARDING
          </div>
        </motion.div>

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

        {/* Main headline — value prop first */}
        <motion.h1
          variants={heroItem}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6"
        >
          <span className="text-white">Your AI</span>
          <br />
          <span style={{ color: "#C3FCD2" }}>Golf Coach</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroItem}
          className="font-body text-lg md:text-xl text-zinc-300 mb-4 max-w-lg"
        >
          The only app that connects your practice, rounds, and AI coach
          into one seamless improvement system.
        </motion.p>

        <motion.p
          variants={heroItem}
          className="font-display font-bold text-lg tracking-wide mb-8"
          style={{ color: "#C3FCD2" }}
        >
          Practice Smarter. Play Better.
        </motion.p>

        {/* Primary CTA — email capture for pre-launch */}
        <motion.div variants={heroItem} className="w-full max-w-md mb-6">
          <EmailCapture
            source="hero"
            buttonText="Get Early Access"
            placeholder="Enter your email"
            successMessage="You're on the list! We'll be in touch soon."
            variant="inline"
          />
          <p className="font-mono text-[10px] text-zinc-600 mt-2">
            JOIN THE WAITLIST + GET 248 FREE DRILLS
          </p>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div variants={heroItem}>
          <Link href="/features">
            <Button variant="outline" size="lg">
              Explore Features
            </Button>
          </Link>
        </motion.div>

        {/* Boarding pass detail strip — subtle, below CTAs */}
        <motion.div
          variants={heroItem}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 py-4 px-6 border-y border-zinc-800/40"
        >
          {boardingDetails.map((detail) => (
            <div key={detail.label} className="text-left">
              <p className="font-mono text-[9px] tracking-flight uppercase text-zinc-700">
                {detail.label}
              </p>
              <p className="font-mono text-xs font-bold text-zinc-500 tracking-wide">
                {detail.value}
              </p>
            </div>
          ))}
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

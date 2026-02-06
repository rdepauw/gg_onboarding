"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { fadeInUp, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { SITE_CONFIG } from "@/lib/constants"

const features = [
  "Unlimited AI chat with Goose",
  "Personalized drills for your misses",
  "Advanced drill library",
  "Progress tracking & analytics",
  "Round podcast recaps",
  "Voice-enabled coaching",
]

export function PricingTeaser() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <GlowOrb className="-top-20 left-1/2 -translate-x-1/2" variant="green" size="xl" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4">
          Select Your Class
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white mb-4">
          For the Price of a
          <br />
          <span style={{ color: "#C3FCD2" }}>Large Bucket</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-md mx-auto">
          Everything you need to transform your game, for less than a bucket of range balls.
        </p>

        {/* Pricing card — styled as boarding pass */}
        <div className="relative rounded-3xl border border-goose-green/20 bg-gradient-to-br from-goose-green/10 to-zinc-900 p-8 md:p-10 max-w-md mx-auto overflow-hidden">
          <div className="absolute top-0 right-0">
            <div className="bg-goose-green text-goose-void font-mono text-[9px] tracking-flight font-bold px-4 py-1 rounded-bl-xl">
              FIRST CLASS
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display font-black text-5xl text-white">
                ${SITE_CONFIG.pricing.monthly}
              </span>
              <span className="text-zinc-500 text-sm">/month</span>
            </div>
            <p className="font-mono text-[10px] text-zinc-500 mt-2 tracking-wide">
              OR ${SITE_CONFIG.pricing.annual}/YEAR &mdash; SAVE 17%
            </p>
          </div>

          <div className="border-t border-dashed border-zinc-700 pt-6 mb-6">
            <ul className="space-y-3 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goose-green flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/pricing">
            <Button variant="cta" size="lg" className="w-full">
              Start Free Trial
            </Button>
          </Link>
          <p className="font-mono text-[10px] text-zinc-600 mt-3">
            7-DAY FREE TRIAL &middot; CANCEL ANYTIME
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/pricing"
            className="font-mono text-xs tracking-wide text-zinc-500 hover:text-goose-mint transition-colors"
          >
            COMPARE ALL PLANS →
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

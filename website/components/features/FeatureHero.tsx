"use client"

import { motion } from "framer-motion"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { heroStagger, heroItem } from "@/lib/animations"

interface FeatureHeroProps {
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
}

export function FeatureHero({ eyebrow, title, titleAccent, description }: FeatureHeroProps) {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
      <GlowOrb className="top-0 right-[-10%]" variant="green" size="lg" />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center"
      >
        <motion.p
          variants={heroItem}
          className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={heroItem}
          className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[0.9] text-white mb-6"
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span style={{ color: "#C3FCD2" }}>{titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  )
}

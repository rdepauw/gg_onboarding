"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeInUp, viewportOnce } from "@/lib/animations"

interface FeatureCTAProps {
  title?: string
  description?: string
}

export function FeatureCTA({
  title = "Ready to Board?",
  description = "Start practicing smarter with Golf Goose today.",
}: FeatureCTAProps) {
  return (
    <section className="py-14 md:py-20">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-2xl px-6 text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-wide text-white mb-4">
          {title}
        </h2>
        <p className="text-zinc-400 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/download">
            <Button variant="cta" size="lg">Board Now</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">View Pricing</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

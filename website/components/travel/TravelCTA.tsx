"use client"

import { motion } from "framer-motion"
import { Plane } from "lucide-react"
import { TicketDivider } from "@/components/shared/TicketDivider"
import { EmailCapture } from "@/components/shared/EmailCapture"
import { fadeIn, viewportOnce } from "@/lib/animations"

interface TravelCTAProps {
  city: string
  slug: string
  flightCode: string
}

export function TravelCTA({ city, slug, flightCode }: TravelCTAProps) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <TicketDivider className="mb-12" />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-xl text-center"
        >
          {/* Flight code */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-goose-green/30 bg-goose-green/10 px-3 py-1">
              <Plane className="w-3 h-3 text-goose-green -rotate-45" />
              <span className="font-mono text-[10px] tracking-flight uppercase text-goose-green font-semibold">
                {flightCode}
              </span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
            Get the full{" "}
            <span className="text-goose-mint">{city}</span>{" "}
            travel guide
          </h2>
          <p className="text-zinc-400 font-body text-sm md:text-base mb-8 leading-relaxed">
            Itinerary templates, tee time tips, and local secrets delivered to your inbox.
          </p>

          {/* Email capture */}
          <EmailCapture
            source={`travel-${slug}`}
            placeholder="your@email.com"
            buttonText="Send Me the Guide"
            successMessage="Guide incoming! Check your email."
            variant="stacked"
            className="max-w-sm mx-auto"
          />

          {/* Fine print */}
          <p className="mt-4 font-mono text-[9px] tracking-wider text-zinc-600 uppercase">
            Free. No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

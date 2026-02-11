"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { TicketDivider } from "@/components/shared/TicketDivider"
import { fadeInUp, viewportOnce } from "@/lib/animations"

const features = [
  "Unlimited AI chat with Goose",
  "Personalized practice library",
  "Progress tracking & analytics",
  "Find the \"feels\" that actually work",
  "Round podcast recaps",
  "OCR scorecard scanning",
  "Advanced round analysis",
  "Voice-enabled coaching",
]

const faqs = [
  { q: "Is there a free trial?", a: "Yes! Every subscription starts with a 7-day free trial. Cancel anytime before the trial ends and you won't be charged." },
  { q: "Can I cancel anytime?", a: "Absolutely. Cancel your subscription at any time directly from the app. No hidden fees or cancellation penalties." },
  { q: "What's the difference between monthly and annual?", a: "Annual billing saves you 40% compared to monthly. That's $47.88 in savings per year." },
  { q: "Do I need an internet connection?", a: "An internet connection is needed for AI coaching and syncing. Your logged data is available offline." },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <GlowOrb className="top-0 left-1/2 -translate-x-1/2" variant="green" size="xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6">
            Frequent Flyer
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[0.9] text-white mb-4">
            For the Price of a
            <br />
            <span style={{ color: "#C3FCD2" }}>Large Bucket</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto mb-10">
            Everything you need to transform your game, for less than a bucket of range balls.
          </p>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? "text-white" : "text-zinc-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-goose-green" : "bg-zinc-700"}`}
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? "left-8" : "left-1"}`} />
            </button>
            <span className={`text-sm ${annual ? "text-white" : "text-zinc-500"}`}>
              Annual
              <span className="ml-1.5 text-goose-green text-xs font-mono">SAVE 40%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Single pricing card */}
      <section className="pb-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-lg px-6 md:px-8"
        >
          <div className="relative rounded-3xl border border-goose-green/30 bg-gradient-to-br from-goose-green/10 to-zinc-900 shadow-xl shadow-goose-green/5 p-8 md:p-10">
            <div className="absolute top-0 right-0">
              <div className="bg-goose-green text-goose-void font-mono text-[9px] tracking-flight font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                FIRST CLASS
              </div>
            </div>

            <div className="mb-6 text-center">
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-2">Frequent Flyer</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display font-black text-5xl text-white">
                  {annual ? "$72" : "$9.99"}
                </span>
                <span className="text-zinc-500 text-sm">/{annual ? "year" : "month"}</span>
              </div>
              {annual && (
                <p className="text-goose-green text-sm mt-2 font-mono">
                  Just $6/month. Save $47.88/year
                </p>
              )}
              {!annual && (
                <p className="text-zinc-500 text-sm mt-2 font-mono text-[10px] tracking-wide">
                  OR $72/YEAR &mdash; SAVE 40%
                </p>
              )}
            </div>

            <div className="border-t border-dashed border-zinc-700 pt-6 mb-6">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-goose-green flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/waitlist">
              <Button variant="cta" size="lg" className="w-full">
                Start 7-Day Free Trial
              </Button>
            </Link>
            <p className="font-mono text-[10px] text-zinc-600 mt-3 text-center">
              7-DAY FREE TRIAL &middot; CANCEL ANYTIME
            </p>
          </div>
        </motion.div>
      </section>

      <TicketDivider className="max-w-4xl mx-auto px-6" />

      {/* Pricing FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 md:px-8">
          <h2 className="font-display font-bold text-2xl tracking-wide text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-zinc-800 pb-6">
                <h3 className="font-display font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

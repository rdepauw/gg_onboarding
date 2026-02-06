"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/shared/GlowOrb"
import { TicketDivider } from "@/components/shared/TicketDivider"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const plans = [
  {
    name: "Economy",
    price: { monthly: "Free", annual: "Free" },
    badge: null,
    description: "Get started with basic features",
    features: [
      { text: "Basic practice logging", included: true },
      { text: "Round scoring", included: true },
      { text: "Limited library access", included: true },
      { text: "AI Coach (5 messages/day)", included: true },
      { text: "Personalized drills", included: false },
      { text: "Round podcast recaps", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Voice coaching", included: false },
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "First Class",
    price: { monthly: "$9.99", annual: "$99.99" },
    badge: "RECOMMENDED",
    description: "Everything you need to improve",
    features: [
      { text: "Unlimited practice logging", included: true },
      { text: "Round scoring + OCR", included: true },
      { text: "Full library access", included: true },
      { text: "Unlimited AI Coach", included: true },
      { text: "Personalized drills", included: true },
      { text: "Round podcast recaps", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Voice coaching", included: true },
    ],
    cta: "Start Free Trial",
    featured: true,
  },
]

const faqs = [
  { q: "Is there a free trial?", a: "Yes! First Class comes with a 7-day free trial. Cancel anytime before the trial ends and you won't be charged." },
  { q: "Can I cancel anytime?", a: "Absolutely. Cancel your subscription at any time directly from the app. No hidden fees or cancellation penalties." },
  { q: "What's the difference between monthly and annual?", a: "Annual billing saves you ~17% compared to monthly. That's $19.89 in savings per year." },
  { q: "Do I need an internet connection?", a: "An internet connection is needed for AI coaching and syncing. Your logged data is available offline." },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <GlowOrb className="top-0 left-1/2 -translate-x-1/2" variant="green" size="xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6">
            Select Your Class
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[0.9] text-white mb-4">
            For the Price of a
            <br />
            <span style={{ color: "#C3FCD2" }}>Large Bucket</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto mb-10">
            Choose your flight class. Upgrade, downgrade, or cancel anytime.
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
              <span className="ml-1.5 text-goose-green text-xs font-mono">SAVE 17%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={staggerItem}>
              <div className={`relative h-full rounded-3xl border p-8 ${
                plan.featured
                  ? "border-goose-green/30 bg-gradient-to-br from-goose-green/10 to-zinc-900 shadow-xl shadow-goose-green/5"
                  : "border-zinc-800 bg-gradient-to-br from-zinc-900 to-black"
              }`}>
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-goose-green text-goose-void font-mono text-[9px] tracking-flight font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-4xl text-white">
                      {annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== "Free" && (
                      <span className="text-zinc-500 text-sm">/{annual ? "year" : "month"}</span>
                    )}
                  </div>
                  <p className="text-zinc-500 text-sm mt-1">{plan.description}</p>
                </div>

                <div className="border-t border-dashed border-zinc-700 pt-6 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        {f.included ? (
                          <Check className="w-4 h-4 text-goose-green flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-700 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${f.included ? "text-zinc-300" : "text-zinc-600"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/download">
                  <Button
                    variant={plan.featured ? "cta" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
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

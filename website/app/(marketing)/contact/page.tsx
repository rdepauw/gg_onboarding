"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlowOrb } from "@/components/shared/GlowOrb"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative pt-32 pb-24 md:pt-40 overflow-hidden">
      <GlowOrb className="top-0 right-[-10%]" variant="green" size="lg" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6">
            Contact
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Get in <span style={{ color: "#C3FCD2" }}>Touch</span>
          </h1>
          <p className="text-zinc-400">
            Have a question, suggestion, or just want to talk golf? We&apos;d love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl border border-goose-green/30 bg-gradient-to-br from-goose-green/10 to-zinc-900 p-10 text-center">
            <p className="text-3xl mb-4">✈️</p>
            <h2 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h2>
            <p className="text-zinc-400">We&apos;ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-2 block">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-2 block">Subject</label>
              <select className="flex h-11 w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goose-green/50">
                <option value="general">General Question</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-2 block">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Tell us what's on your mind..."
                className="flex w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-white ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goose-green/50 focus-visible:border-goose-green/50 transition-all duration-200 resize-none"
              />
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        )}

        <div className="mt-10 text-center space-y-2">
          <p className="text-sm text-zinc-500">
            You can also reach us at{" "}
            <a href="mailto:hello@golfgoose.ai" className="text-goose-green hover:text-goose-mint transition-colors">
              hello@golfgoose.ai
            </a>
          </p>
          <p className="text-xs text-zinc-600">
            Check our <Link href="/faq" className="text-goose-green hover:text-goose-mint transition-colors">FAQ</Link> for quick answers.
          </p>
        </div>
      </div>
    </section>
  )
}

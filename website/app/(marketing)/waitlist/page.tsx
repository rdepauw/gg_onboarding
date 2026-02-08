import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { EmailCapture } from "@/components/shared/EmailCapture"
import { Check } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: "Join the Waitlist",
  description:
    "Get early access to Golf Goose AI — personalized practice plans, AI coaching, and 248+ drills, feels & games. Be first in line.",
  path: "/waitlist",
})

const benefits = [
  "248+ free drills, feels & games",
  "Early app access before public launch",
  "AI coaching preview",
  "Exclusive member content",
]

export default function WaitlistPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Join the Waitlist"
        title="Get Early Access"
        titleAccent="To Golf Goose"
        description="Be the first to experience AI-powered practice plans, real-time coaching, and a curated library built to make you a better golfer. No spam, just golf."
      />

      {/* Email capture */}
      <section className="relative z-10 -mt-4 px-6 md:px-8">
        <div className="max-w-md mx-auto text-center">
          <EmailCapture
            source="waitlist-page"
            buttonText="Join Waitlist"
            placeholder="Enter your email"
            successMessage="You're on the list! We'll be in touch."
            variant="inline"
          />
          <p className="font-mono text-[10px] text-zinc-600 mt-3">
            NO SPAM &middot; UNSUBSCRIBE ANYTIME
          </p>
        </div>
      </section>

      {/* Boarding pass benefits card */}
      <section className="relative z-10 px-6 md:px-8 pt-16 pb-24">
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black overflow-hidden">
            {/* Card header */}
            <div className="px-8 pt-8 pb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500">
                Boarding Pass
              </p>
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500">
                Flight GG-001
              </p>
            </div>

            {/* Dashed divider */}
            <div className="border-t border-dashed border-zinc-800" />

            {/* Benefits list */}
            <div className="px-8 py-6">
              <p className="font-mono text-[10px] tracking-flight uppercase text-goose-green mb-5">
                Early Access Includes
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-goose-green flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashed divider */}
            <div className="border-t border-dashed border-zinc-800" />

            {/* Card footer */}
            <div className="px-8 py-5 flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-600">
                Seat: Priority
              </p>
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-600">
                Gate: Open
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

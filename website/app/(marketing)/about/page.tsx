import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { TicketDivider } from "@/components/shared/TicketDivider"

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn about the team behind Golf Goose AI. Built for golfers, by golfers.",
  path: "/about",
})

const team = [
  { name: "Team Member 1", role: "Co-Founder & CEO", stat: "Best round: 74", initials: "TM" },
  { name: "Team Member 2", role: "Co-Founder & CTO", stat: "Best round: 82", initials: "TM" },
  { name: "Team Member 3", role: "Head of Product", stat: "Best round: 79", initials: "TM" },
  { name: "Team Member 4", role: "Lead Developer", stat: "Best round: 88", initials: "TM" },
]

export default function AboutPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Our Flight Plan"
        title="Built for Golfers,"
        titleAccent="By Golfers"
        description="We got tired of wasting range time without a plan. So we built the coaching system we wished existed."
      />

      {/* Mission */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500">
                Golf Goose Airways
              </p>
              <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500">
                EST. 2024
              </p>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Our Mission
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Most golfers practice without a plan, play without reviewing, and have no connection between their range time and course performance. We built Golf Goose to change that.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              By connecting personalized practice plans, intelligent round analysis, and an AI coach that actually knows your game, we&apos;re creating the improvement system that every golfer deserves — not just those who can afford a $200/hour swing coach.
            </p>
          </div>
        </div>
      </section>

      <TicketDivider className="max-w-3xl mx-auto px-6" />

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4 text-center">
            Flight Crew
          </p>
          <h2 className="font-display font-bold text-3xl tracking-wide text-white mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 text-center hover:border-goose-green/20 transition-colors"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-sm font-bold text-zinc-500">{member.initials}</span>
                </div>
                <h3 className="font-display font-bold text-sm text-white">{member.name}</h3>
                <p className="text-xs text-zinc-500 mt-1">{member.role}</p>
                <div className="mt-3 pt-3 border-t border-dashed border-zinc-800">
                  <p className="font-mono text-[10px] text-goose-green">{member.stat}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-500 mt-8 italic">
            Team details coming soon — stay tuned!
          </p>
        </div>
      </section>
    </>
  )
}

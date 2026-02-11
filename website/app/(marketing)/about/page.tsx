import type { Metadata } from "next"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { TicketDivider } from "@/components/shared/TicketDivider"

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn about the team behind Golf Goose AI. Built for golfers, by golfers.",
  path: "/about",
})

const team = [
  {
    name: "Ryan DePauw",
    role: "Co-Founder & CEO",
    initials: "RD",
    photo: "/images/team/ryan.jpg",
    swingFault: "Slice",
    favoriteCourse: "Chambers Bay",
    goToFeel: "Stay Closed to the Target",
  },
  {
    name: "Tim Hsu",
    role: "Co-Founder & GTM",
    initials: "TH",
    photo: "/images/team/tim.jpg",
    swingFault: "Hook",
    favoriteCourse: "Pebble Beach",
    goToFeel: "3/4 Swing",
  },
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
              By connecting personalized practice plans, intelligent round analysis, and an AI coach that actually knows your game, we&apos;re creating the improvement system that every golfer deserves. Not just those who can afford a $200/hour swing coach.
            </p>
          </div>
        </div>
      </section>

      <TicketDivider className="max-w-3xl mx-auto px-6" />

      {/* Why Golf Goose */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-flight uppercase text-goose-green">
                Origin Story
              </span>
              <div className="flex-1 border-t border-dashed border-zinc-800" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Why We Call It Golf Goose
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Every golfer needs a co-pilot. Someone in their corner for practice, for rounds, for the mental game. And who is the most famous co-pilot of all time? Goose.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              He&apos;s your practicing, playing, performance co-pilot.
            </p>
            <p className="text-zinc-400 leading-relaxed italic">
              &ldquo;Talk to me, Goose.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <TicketDivider className="max-w-3xl mx-auto px-6" />

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <p className="font-mono text-[11px] tracking-flight uppercase text-zinc-500 mb-4 text-center">
            Flight Crew
          </p>
          <h2 className="font-display font-bold text-3xl tracking-wide text-white mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-goose-mint/20 transition-colors"
              >
                {/* Header: Avatar + Name/Role */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-goose-void border border-goose-mint/30 overflow-hidden flex items-center justify-center">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-mono text-lg font-bold text-goose-mint">{member.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">{member.name}</h3>
                    <p className="text-sm text-zinc-400 mt-0.5">{member.role}</p>
                  </div>
                </div>

                {/* Ticket divider */}
                <div className="border-t border-dashed border-zinc-700 mb-6" />

                {/* Mono stat labels */}
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-1">
                      Swing Fault
                    </p>
                    <p className="font-mono text-sm text-zinc-300">{member.swingFault}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-1">
                      Favorite Course
                    </p>
                    <p className="font-mono text-sm text-zinc-300">{member.favoriteCourse}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-1">
                      Go-To Feel
                    </p>
                    <a href="/library" className="font-mono text-sm text-goose-mint hover:underline">
                      {member.goToFeel}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

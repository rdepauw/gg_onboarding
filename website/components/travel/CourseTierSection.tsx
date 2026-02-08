"use client"

import { motion } from "framer-motion"
import { Trophy, Shield, Gem, Star } from "lucide-react"
import { TicketDivider } from "@/components/shared/TicketDivider"
import type { CourseTier, Course } from "@/data/travel/types"
import { fadeIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface CourseTierSectionProps {
  tiers: CourseTier[]
}

const tierConfig: Record<
  CourseTier["tier"],
  { icon: typeof Trophy; accentColor: string; borderColor: string; bgColor: string; badgeText: string }
> = {
  top_tier: {
    icon: Trophy,
    accentColor: "text-amber-400",
    borderColor: "border-amber-400/20",
    bgColor: "bg-amber-400/5",
    badgeText: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  },
  ole_reliable: {
    icon: Shield,
    accentColor: "text-goose-green",
    borderColor: "border-goose-green/20",
    bgColor: "bg-goose-green/5",
    badgeText: "bg-goose-green/10 text-goose-green border-goose-green/20",
  },
  hidden_gem: {
    icon: Gem,
    accentColor: "text-sky-400",
    borderColor: "border-sky-400/20",
    bgColor: "bg-sky-400/5",
    badgeText: "bg-sky-400/10 text-sky-400 border-sky-400/20",
  },
}

const typeLabels: Record<Course["type"], string> = {
  public: "Public",
  resort: "Resort",
  "semi-private": "Semi-Private",
  private: "Private",
}

export function CourseTierSection({ tiers }: CourseTierSectionProps) {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10"
        >
          <TicketDivider className="mb-8" />
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[11px] tracking-flight uppercase text-goose-green">
              Courses
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            Where to Play
          </h2>
        </motion.div>

        {/* Tier cards */}
        <div className="space-y-8">
          {tiers.map((tier) => {
            const config = tierConfig[tier.tier]
            const Icon = config.icon

            return (
              <motion.div
                key={tier.tier}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={cn(
                  "rounded-xl border bg-zinc-900/50 overflow-hidden",
                  config.borderColor
                )}
              >
                {/* Tier header */}
                <div className={cn("px-5 py-4 border-b", config.borderColor, config.bgColor)}>
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-4 h-4", config.accentColor)} />
                    <h3 className={cn("font-display font-bold text-lg", config.accentColor)}>
                      {tier.label}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1 font-body">{tier.description}</p>
                </div>

                {/* Course list */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {tier.courses.map((course, i) => (
                    <motion.div
                      key={course.name}
                      variants={staggerItem}
                      className={cn(
                        "px-5 py-4",
                        i !== tier.courses.length - 1 && "border-b border-zinc-800/40"
                      )}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                        {/* Course info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-display font-semibold text-white text-sm">
                              {course.name}
                            </h4>
                            <span
                              className={cn(
                                "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase",
                                config.badgeText
                              )}
                            >
                              {typeLabels[course.type]}
                            </span>
                          </div>
                          <p className="text-zinc-500 text-xs mt-1 font-body leading-relaxed">
                            {course.signatureFeature}
                          </p>
                        </div>

                        {/* Price + rating */}
                        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1 shrink-0">
                          <span className="font-mono text-xs font-semibold text-white">
                            {course.greenFee}
                          </span>
                          {course.rating && (
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: course.rating }, (_, i) => (
                                <Star
                                  key={i}
                                  className={cn("w-2.5 h-2.5 fill-current", config.accentColor)}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

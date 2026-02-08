"use client"

import { motion } from "framer-motion"
import { Compass, Mountain, Palette, PartyPopper, Heart, ChefHat } from "lucide-react"
import { TicketDivider } from "@/components/shared/TicketDivider"
import type { NonGolfActivity } from "@/data/travel/types"
import { fadeIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface ActivitySectionProps {
  activities: NonGolfActivity[]
}

const categoryConfig: Record<
  NonGolfActivity["category"],
  { icon: typeof Mountain; label: string; color: string; borderColor: string; bgColor: string }
> = {
  outdoors: {
    icon: Mountain,
    label: "Outdoors",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/10",
  },
  culture: {
    icon: Palette,
    label: "Culture",
    color: "text-violet-400",
    borderColor: "border-violet-400/20",
    bgColor: "bg-violet-400/10",
  },
  nightlife: {
    icon: PartyPopper,
    label: "Nightlife",
    color: "text-pink-400",
    borderColor: "border-pink-400/20",
    bgColor: "bg-pink-400/10",
  },
  wellness: {
    icon: Heart,
    label: "Wellness",
    color: "text-sky-400",
    borderColor: "border-sky-400/20",
    bgColor: "bg-sky-400/10",
  },
  food_tour: {
    icon: ChefHat,
    label: "Food Tour",
    color: "text-amber-400",
    borderColor: "border-amber-400/20",
    bgColor: "bg-amber-400/10",
  },
}

export function ActivitySection({ activities }: ActivitySectionProps) {
  // Group activities by category
  const grouped = activities.reduce<Record<string, NonGolfActivity[]>>((acc, activity) => {
    if (!acc[activity.category]) acc[activity.category] = []
    acc[activity.category].push(activity)
    return acc
  }, {})

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
            <Compass className="w-4 h-4 text-goose-green" />
            <span className="font-mono text-[11px] tracking-flight uppercase text-goose-green">
              Beyond the Fairways
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            What Else to Do
          </h2>
        </motion.div>

        {/* Activities by category */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-6"
        >
          {Object.entries(grouped).map(([category, items]) => {
            const config = categoryConfig[category as NonGolfActivity["category"]]
            const Icon = config.icon

            return (
              <motion.div key={category} variants={staggerItem}>
                {/* Category label */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
                      config.borderColor,
                      config.bgColor
                    )}
                  >
                    <Icon className={cn("w-3 h-3", config.color)} />
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-wider uppercase font-semibold",
                        config.color
                      )}
                    >
                      {config.label}
                    </span>
                  </span>
                </div>

                {/* Activity cards for this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((activity) => (
                    <div
                      key={activity.name}
                      className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700/60"
                    >
                      <h4 className="font-display font-semibold text-white text-sm mb-2">
                        {activity.name}
                      </h4>
                      <p className="text-zinc-400 text-xs font-body leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

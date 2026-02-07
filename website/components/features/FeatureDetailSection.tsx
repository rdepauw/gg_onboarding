"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"

interface FeatureDetail {
  icon: string
  title: string
  description: string
}

interface FeatureDetailSectionProps {
  eyebrow: string
  title: string
  description: string
  details: FeatureDetail[]
  reversed?: boolean
  screenshot?: string
}

export function FeatureDetailSection({
  eyebrow,
  title,
  description,
  details,
  reversed = false,
  screenshot,
}: FeatureDetailSectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className={`mx-auto max-w-6xl px-6 md:px-8 flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}>
        {/* Content */}
        <motion.div
          variants={reversed ? slideInRight : slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex-1 space-y-6"
        >
          <p className="font-mono text-[10px] tracking-flight uppercase text-goose-green">
            {eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-wide text-white">
            {title}
          </h2>
          <p className="text-zinc-400 leading-relaxed">{description}</p>

          <div className="space-y-4 pt-4">
            {details.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{detail.icon}</span>
                <div>
                  <p className="font-display font-semibold text-sm text-white">{detail.title}</p>
                  <p className="text-xs text-zinc-500">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          variants={reversed ? slideInLeft : slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex-1 flex justify-center"
        >
          <GlowOrb className="-top-8 -right-8" variant="green" size="md" />
          {screenshot ? (
            <div className="relative w-64 md:w-72 rounded-[2.5rem] border-2 border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 shadow-2xl shadow-black/50">
              <div className="rounded-[2rem] bg-goose-void overflow-hidden aspect-[9/19]">
                <Image
                  src={screenshot}
                  alt={`${eyebrow} app screen`}
                  width={390}
                  height={844}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-sm rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl">
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-goose-green" />
                  <div className="font-mono text-[9px] text-zinc-600 tracking-wide uppercase">{eyebrow}</div>
                </div>
                {details.map((d, i) => (
                  <div key={i} className="rounded-xl bg-zinc-800/50 border border-zinc-700/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">{d.icon}</span>
                      <span className="text-xs font-semibold text-goose-mint">{d.title}</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

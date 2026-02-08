"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { GlowOrb } from "@/components/shared/GlowOrb"

const exampleQuestions = [
  {
    question: "What feels are working for me?",
    context: "Goose analyzes your logged practice sessions and recent rounds to identify patterns in what swing thoughts and feels are producing your best results.",
  },
  {
    question: "How have I been practicing?",
    context: "Get a breakdown of your recent practice frequency, focus areas, and how your time splits across putting, short game, approach, and off the tee.",
  },
  {
    question: "What should I work on next?",
    context: "Based on your goals, round data, and practice history, Goose recommends the highest-impact drills and feels for your next session.",
  },
]

export function AskGooseSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Dashed top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <div className="border-t border-dashed border-zinc-800" />
      </div>

      <GlowOrb className="-top-12 -left-24" variant="green" size="md" />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="font-mono text-[10px] tracking-flight uppercase text-goose-green mb-4">
            AI Conversations
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-wide text-white mb-4">
            Ask Goose <span className="text-goose-mint">Anything</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Your AI coach is tuned to your practice data, round history, and goals.
            Not generic tips from the internet -- real insights from your game.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Question Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 space-y-4"
          >
            {exampleQuestions.map((item, index) => (
              <motion.div
                key={item.question}
                variants={staggerItem}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-goose-green/30 hover:bg-goose-green/[0.03] transition-all duration-300"
              >
                {/* Question label */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-goose-green/10 border border-goose-green/20">
                    <span className="font-mono text-[9px] text-goose-green font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-display font-semibold text-sm text-white group-hover:text-goose-mint transition-colors">
                    &ldquo;{item.question}&rdquo;
                  </p>
                </div>
                <p className="text-xs text-zinc-500 pl-9 leading-relaxed">
                  {item.context}
                </p>
                {/* Dashed bottom divider */}
                {index < exampleQuestions.length - 1 && (
                  <div className="absolute -bottom-2 left-8 right-8 border-b border-dashed border-zinc-800/60" />
                )}
              </motion.div>
            ))}

            {/* Prompt hint */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-2 pt-2 pl-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-goose-green animate-glow-pulse" />
              <span className="font-mono text-[10px] text-zinc-600 tracking-wide">
                + thousands more questions Goose can answer
              </span>
            </motion.div>
          </motion.div>

          {/* App Screenshot */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex-1 flex justify-center"
          >
            <GlowOrb className="-top-8 -right-8" variant="mint" size="sm" />
            <div className="relative w-64 md:w-72 rounded-[2.5rem] border-2 border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 shadow-2xl shadow-black/50">
              <div className="rounded-[2rem] bg-goose-void overflow-hidden aspect-[9/19]">
                <Image
                  src="/images/app/ai-coach-chat.png"
                  alt="AI Coach chat conversation in the GolfGoose app"
                  width={390}
                  height={844}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5 shadow-lg">
                <span className="font-mono text-[9px] tracking-flight uppercase text-goose-green">
                  Live Chat
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

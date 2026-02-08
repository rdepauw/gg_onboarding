"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 248, suffix: "+", label: "DRILLS, FEELS & GAMES" },
  { value: 5, suffix: "", label: "AI-POWERED FEATURES" },
  { value: 7, suffix: " days", label: "FREE TRIAL", display: "7" },
]

function AnimatedNumber({ value, suffix, display, isDecimal }: {
  value: number
  suffix: string
  display?: string
  isDecimal?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (display) {
      setCount(value)
      return
    }

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const interval = duration / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [inView, value, display])

  const formatted = display
    ? display
    : isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString()

  return (
    <span ref={ref} className="font-mono font-bold text-3xl md:text-4xl text-white tabular-nums">
      {inView ? formatted : "0"}
      <span className="text-goose-green">{suffix}</span>
    </span>
  )
}

export function SocialProofBar() {
  return (
    <section className="relative py-12 border-y border-zinc-800/40">
      {/* Subtle green glow underneath */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(8,226,110,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                display={stat.display}
              />
              <span className="font-mono text-[10px] tracking-flight uppercase text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

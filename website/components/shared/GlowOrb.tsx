"use client"

import { motion } from "framer-motion"
import { glowPulse } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface GlowOrbProps {
  className?: string
  variant?: "green" | "mint"
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
}

export function GlowOrb({ className, variant = "green", size = "lg" }: GlowOrbProps) {
  return (
    <motion.div
      variants={glowPulse}
      initial="hidden"
      animate="visible"
      className={cn(
        "glow-orb",
        variant === "green" ? "glow-orb-green" : "glow-orb-mint",
        sizeMap[size],
        className
      )}
      aria-hidden="true"
    />
  )
}

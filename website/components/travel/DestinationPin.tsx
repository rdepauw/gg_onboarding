"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DestinationPinProps {
  city: string
  slug: string
  /** X position as percentage of map width (0-100) */
  x: number
  /** Y position as percentage of map height (0-100) */
  y: number
}

export function DestinationPin({ city, slug, x, y }: DestinationPinProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const el = document.getElementById(`dest-${slug}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-label={`View ${city} golf destination`}
    >
      {/* Outer pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-goose-green/30"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: 16, height: 16, top: -4, left: -4 }}
      />

      {/* Inner dot */}
      <motion.span
        className="relative block w-2 h-2 rounded-full bg-goose-green shadow-[0_0_8px_rgba(8,226,110,0.6)]"
        whileHover={{ scale: 1.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      />

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap
              px-3 py-1.5 rounded bg-zinc-900/95 border border-zinc-700
              font-mono text-[10px] tracking-wider uppercase text-goose-mint
              pointer-events-none shadow-lg"
          >
            {city}
            {/* Tooltip arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-zinc-700" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

"use client"

import { motion } from "framer-motion"
import { DestinationPin } from "./DestinationPin"
import { DestinationCard } from "./DestinationCard"
import type { GolfDestination } from "@/data/travel/types"
import { fadeIn, viewportOnce } from "@/lib/animations"

interface USMapProps {
  destinations: GolfDestination[]
}

/**
 * Convert lat/lng to approximate percentage positions on the map.
 * Covers roughly:
 *   Longitude: -125 (west) to -66 (east)
 *   Latitude:  49 (north) to 24 (south)
 */
function coordsToPosition(lat: number, lng: number): { x: number; y: number } {
  const westBound = -126
  const eastBound = -65
  const northBound = 50
  const southBound = 24

  const x = ((lng - westBound) / (eastBound - westBound)) * 100
  const y = ((northBound - lat) / (northBound - southBound)) * 100

  return { x: Math.max(2, Math.min(98, x)), y: Math.max(2, Math.min(98, y)) }
}

/** Convert percentage positions to SVG viewBox coordinates */
function toSvg(pct: { x: number; y: number }): { sx: number; sy: number } {
  return { sx: (pct.x / 100) * 960, sy: (pct.y / 100) * 600 }
}

/**
 * Generate a curved arc path between two SVG points.
 * The control point is offset perpendicular to the midpoint.
 */
function arcPath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  const dist = Math.sqrt(dx * dx + dy * dy)
  const offset = dist * 0.2
  // Perpendicular offset (biased upward for visual)
  const cx = mx - (dy / dist) * offset
  const cy = my + (dx / dist) * offset - offset * 0.3
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}

export function USMap({ destinations }: USMapProps) {
  // Pre-compute SVG positions for flight path arcs
  const svgPositions = destinations.map((dest) => {
    const pct = coordsToPosition(dest.coordinates.lat, dest.coordinates.lng)
    return { ...toSvg(pct), slug: dest.slug }
  })

  return (
    <>
      {/* Desktop: Flight route network display */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="hidden md:block relative mx-auto max-w-5xl"
      >
        <div className="relative aspect-[1.7/1] rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/50 to-black/80 overflow-hidden">
          {/* SVG — radar grid + flight paths */}
          <svg
            viewBox="0 0 960 600"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Flight route network showing golf destinations across the United States"
          >
            <defs>
              <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#08E26E" stopOpacity="0.04" />
                <stop offset="70%" stopColor="#08E26E" stopOpacity="0.01" />
                <stop offset="100%" stopColor="#08E26E" stopOpacity="0" />
              </radialGradient>
              <filter id="arcGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Radar background glow */}
            <rect x="0" y="0" width="960" height="600" fill="url(#radarGlow)" />

            {/* Dotted grid */}
            <g opacity="0.05" stroke="#C3FCD2" strokeWidth="0.5" strokeDasharray="2 8">
              {Array.from({ length: 8 }, (_, i) => (
                <line key={`h-${i}`} x1="40" y1={75 + i * 65} x2="920" y2={75 + i * 65} />
              ))}
              {Array.from({ length: 12 }, (_, i) => (
                <line key={`v-${i}`} x1={80 + i * 72} y1="40" x2={80 + i * 72} y2="560" />
              ))}
            </g>

            {/* Concentric radar rings */}
            <g opacity="0.04" stroke="#C3FCD2" strokeWidth="0.5">
              <circle cx="480" cy="300" r="120" fill="none" />
              <circle cx="480" cy="300" r="240" fill="none" />
              <circle cx="480" cy="300" r="360" fill="none" />
            </g>

            {/* Center crosshair */}
            <g opacity="0.06" stroke="#C3FCD2" strokeWidth="0.5">
              <line x1="470" y1="300" x2="490" y2="300" />
              <line x1="480" y1="290" x2="480" y2="310" />
            </g>

            {/* Flight path arcs between destination pairs */}
            <g filter="url(#arcGlow)">
              {svgPositions.map((pos, i) => {
                // Connect to next destination in list (wraps to create network)
                const next = svgPositions[(i + 1) % svgPositions.length]
                return (
                  <path
                    key={`arc-${pos.slug}`}
                    d={arcPath(pos.sx, pos.sy, next.sx, next.sy)}
                    fill="none"
                    stroke="#08E26E"
                    strokeWidth="0.8"
                    strokeDasharray="6 6"
                    opacity="0.15"
                  />
                )
              })}
              {/* Add a few cross-connections for density */}
              {svgPositions.length >= 4 && (
                <>
                  <path
                    d={arcPath(svgPositions[0].sx, svgPositions[0].sy, svgPositions[3].sx, svgPositions[3].sy)}
                    fill="none"
                    stroke="#08E26E"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                    opacity="0.08"
                  />
                  <path
                    d={arcPath(svgPositions[1].sx, svgPositions[1].sy, svgPositions[5 % svgPositions.length].sx, svgPositions[5 % svgPositions.length].sy)}
                    fill="none"
                    stroke="#08E26E"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                    opacity="0.08"
                  />
                </>
              )}
            </g>

            {/* Destination dot markers (SVG layer for glow) */}
            {svgPositions.map((pos) => (
              <circle
                key={`dot-${pos.slug}`}
                cx={pos.sx}
                cy={pos.sy}
                r="3"
                fill="#08E26E"
                opacity="0.15"
                filter="url(#arcGlow)"
              />
            ))}
          </svg>

          {/* Destination pins (HTML overlay for interactivity) */}
          <div className="absolute inset-0">
            {destinations.map((dest) => {
              const pos = coordsToPosition(dest.coordinates.lat, dest.coordinates.lng)
              return (
                <DestinationPin
                  key={dest.slug}
                  city={dest.city}
                  airportCode={dest.airportCode}
                  slug={dest.slug}
                  x={pos.x}
                  y={pos.y}
                />
              )
            })}
          </div>

          {/* Corner label */}
          <div className="absolute top-4 left-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-goose-green/60" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-zinc-600">
              Route Network
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-goose-green animate-glow-pulse" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-500">
              Golf Destination
            </span>
          </div>
          <span className="text-zinc-700">|</span>
          <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-500">
            {destinations.length} cities
          </span>
        </div>
      </motion.div>

      {/* Mobile: Scrollable card list */}
      <div className="md:hidden px-6">
        <div className="space-y-3">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.slug} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}

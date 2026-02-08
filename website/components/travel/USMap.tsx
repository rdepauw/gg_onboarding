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
 * Convert lat/lng to approximate percentage positions on our US map SVG.
 * The SVG viewport covers roughly:
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

export function USMap({ destinations }: USMapProps) {
  return (
    <>
      {/* Desktop: Interactive SVG map */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="hidden md:block relative mx-auto max-w-5xl"
      >
        <div className="relative aspect-[1.7/1]">
          {/* US Map SVG — simplified continental outline */}
          <svg
            viewBox="0 0 960 600"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Map of continental United States showing golf destinations"
          >
            <defs>
              <linearGradient id="mapGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#18181b" stopOpacity="1" />
                <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
              </linearGradient>
              <filter id="mapGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Continental US simplified outline */}
            <path
              d="
                M 130,95 L 145,93 L 155,98 L 165,95 L 175,90 L 190,88
                L 200,92 L 215,90 L 230,85 L 250,82 L 265,80 L 280,78
                L 310,80 L 340,78 L 370,80 L 400,78 L 430,82 L 450,85
                L 480,88 L 510,90 L 540,88 L 560,85 L 580,82 L 600,80
                L 620,78 L 640,80 L 660,85 L 680,88 L 700,90 L 720,95
                L 740,100 L 755,108 L 760,120 L 768,135 L 775,150
                L 780,165 L 788,175 L 795,190 L 800,200 L 808,210
                L 820,218 L 832,228 L 845,235 L 850,250 L 848,265
                L 845,280 L 840,295 L 842,310 L 848,325 L 855,335
                L 860,350 L 862,365 L 858,380 L 850,390 L 842,398
                L 835,405 L 830,415 L 828,430 L 830,445 L 825,455
                L 815,460 L 802,458 L 792,452 L 785,445 L 775,440
                L 760,442 L 745,448 L 730,455 L 718,462 L 705,468
                L 690,470 L 672,468 L 658,465 L 645,470 L 630,475
                L 615,478 L 600,482 L 580,485 L 560,488 L 540,490
                L 520,488 L 502,492 L 488,496 L 475,498 L 462,495
                L 448,490 L 435,488 L 420,492 L 405,498 L 390,502
                L 375,505 L 360,508 L 345,510 L 330,508 L 318,505
                L 305,500 L 292,498 L 278,502 L 265,508 L 252,512
                L 238,510 L 225,505 L 210,500 L 195,498 L 180,502
                L 165,508 L 148,510 L 135,505 L 125,498 L 118,490
                L 112,478 L 108,465 L 105,450 L 100,435 L 95,420
                L 92,405 L 88,390 L 85,375 L 82,360 L 80,342
                L 78,325 L 76,305 L 75,285 L 76,265 L 78,245
                L 80,228 L 82,210 L 85,195 L 88,178 L 92,162
                L 95,148 L 100,135 L 108,122 L 115,112 L 122,102
                L 130,95 Z
              "
              fill="url(#mapGradient)"
              stroke="#3f3f46"
              strokeWidth="1.5"
              className="drop-shadow-lg"
            />

            {/* Subtle grid overlay for texture */}
            <g opacity="0.04" stroke="#C3FCD2" strokeWidth="0.5">
              {Array.from({ length: 12 }, (_, i) => (
                <line key={`h-${i}`} x1="60" y1={80 + i * 40} x2="880" y2={80 + i * 40} />
              ))}
              {Array.from({ length: 18 }, (_, i) => (
                <line key={`v-${i}`} x1={80 + i * 48} y1="60" x2={80 + i * 48} y2="540" />
              ))}
            </g>
          </svg>

          {/* Destination pins overlaid on the map */}
          <div className="absolute inset-0">
            {destinations.map((dest) => {
              const pos = coordsToPosition(dest.coordinates.lat, dest.coordinates.lng)
              return (
                <DestinationPin
                  key={dest.slug}
                  city={dest.city}
                  slug={dest.slug}
                  x={pos.x}
                  y={pos.y}
                />
              )
            })}
          </div>
        </div>

        {/* Map legend */}
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

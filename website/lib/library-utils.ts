export const SKILL_MAP: Record<string, string> = {
  "Off the Tee": "off_the_tee",
  "Approach": "approach",
  "Short Game": "short_game",
  "Putting": "putting",
}

const SKILL_DISPLAY: Record<string, string> = Object.fromEntries(
  Object.entries(SKILL_MAP).map(([display, data]) => [data, display])
)

export function skillToDataFormat(displayName: string): string {
  return SKILL_MAP[displayName] || displayName.toLowerCase().replace(/\s+/g, "_")
}

export function skillToDisplayFormat(dataName: string): string {
  return (
    SKILL_DISPLAY[dataName] ||
    dataName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  )
}

export function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  return match ? match[1] : null
}

// ── Type Color Configuration ──────────────────────────────────────────

export const typeColors = {
  feel: {
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    border: "border-l-emerald-500/50",
    dot: "bg-emerald-400",
  },
  drill: {
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    border: "border-l-blue-500/50",
    dot: "bg-blue-400",
  },
  game: {
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    border: "border-l-purple-500/50",
    dot: "bg-purple-400",
  },
} as const;

export function getTypeColor(type: string) {
  return typeColors[type as keyof typeof typeColors] || typeColors.feel;
}

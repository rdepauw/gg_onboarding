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

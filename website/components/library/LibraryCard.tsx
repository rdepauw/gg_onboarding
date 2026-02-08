import { Play, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { skillToDisplayFormat, getTypeColor } from "@/lib/library-utils"

interface LibraryCardProps {
  title: string
  description: string
  type: string
  skills: string[]
  video?: string | null
  locked?: boolean
  featured?: boolean
  onClick?: () => void
}

export function LibraryCard({ title, description, type, skills, video, locked, featured, onClick }: LibraryCardProps) {
  const colors = getTypeColor(type)

  return (
    <div
      onClick={locked ? undefined : onClick}
      className={cn(
        "relative rounded-2xl border border-l-2 p-5 transition-all duration-200 h-full flex flex-col",
        locked
          ? "border-zinc-800 border-l-zinc-700 bg-zinc-900/50 opacity-60"
          : featured
            ? cn(
                "border-goose-green/20 bg-gradient-to-br from-zinc-900 to-black hover:border-goose-green/40 hover:shadow-lg hover:shadow-goose-green/5",
                colors.border
              )
            : cn(
                "border-zinc-800 bg-gradient-to-br from-zinc-900 to-black hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20",
                colors.border
              ),
        !locked && onClick && "cursor-pointer"
      )}
    >
      {locked && (
        <div className="absolute top-3 right-3 text-zinc-600 text-sm">🔒</div>
      )}

      {featured && !locked && (
        <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[8px] tracking-wide uppercase text-goose-green/70">
          <Star className="w-2.5 h-2.5 fill-goose-green/70" />
          Staff Pick
        </div>
      )}

      {/* Type badge + video link */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={cn(
            "font-mono text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-full border",
            colors.badge
          )}
        >
          {type || "other"}
        </span>
        {video && !locked && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[10px] text-goose-green/70 hover:text-goose-green transition-colors font-mono"
            title="Watch video"
          >
            <Play className="w-3 h-3" />
            VIDEO
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-sm text-white mb-2 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className={cn(
        "text-xs leading-relaxed mb-3 flex-1",
        locked ? "text-zinc-600" : "text-zinc-400"
      )}>
        {locked
          ? description.slice(0, 60) + (description.length > 60 ? "..." : "")
          : description.slice(0, 150) + (description.length > 150 ? "..." : "")
        }
      </p>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[8px] tracking-wide uppercase text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded"
            >
              {skillToDisplayFormat(skill)}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

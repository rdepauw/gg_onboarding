import Link from "next/link"
import { cn } from "@/lib/utils"
import { getTypeColor } from "@/lib/library-utils"
import { ArrowRight } from "lucide-react"

interface ChatItemCardProps {
  title: string
  type: string
  skill_category: string
}

export function ChatItemCard({ title, type, skill_category }: ChatItemCardProps) {
  const colors = getTypeColor(type)

  return (
    <Link
      href="/library"
      className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 transition-all hover:border-zinc-700 hover:bg-zinc-800/80"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "font-mono text-[8px] tracking-wide uppercase px-1.5 py-0.5 rounded-full border shrink-0",
              colors.badge
            )}
          >
            {type}
          </span>
          <span className="font-mono text-[8px] tracking-wide uppercase text-zinc-500 truncate">
            {skill_category.replace(/_/g, " ")}
          </span>
        </div>
        <p className="text-xs font-semibold text-white truncate leading-snug">
          {title}
        </p>
      </div>
      <span className="shrink-0 text-[10px] font-mono text-goose-green/70 group-hover:text-goose-green flex items-center gap-0.5 transition-colors">
        Library
        <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

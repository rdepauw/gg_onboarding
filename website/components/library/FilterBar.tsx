"use client"

import { cn } from "@/lib/utils"
import { skillToDataFormat } from "@/lib/library-utils"

const SKILLS = ["All", "Off the Tee", "Approach", "Short Game", "Putting"] as const
const TYPES = ["All", "Drill", "Feel", "Game"] as const
const SWING_FAULTS = [
  "Slice",
  "Hook",
  "Fat",
  "Thin",
  "Shanks",
  "Chipping Yips",
  "Early Extension",
] as const

interface FilterBarProps {
  activeSkill: string
  activeType: string
  activeFault: string
  onSkillChange: (skill: string) => void
  onTypeChange: (type: string) => void
  onFaultChange: (fault: string) => void
  search: string
  onSearchChange: (search: string) => void
  totalCount: number
  filteredCount: number
  locked?: boolean
}

export function FilterBar({
  activeSkill,
  activeType,
  activeFault,
  onSkillChange,
  onTypeChange,
  onFaultChange,
  search,
  onSearchChange,
  totalCount,
  filteredCount,
  locked = false,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search drills, feels & games..."
        className="w-full h-11 rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goose-green/50 focus-visible:border-goose-green/50 transition-all duration-200"
      />

      {/* Skill filters */}
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <button
            key={skill}
            onClick={() => onSkillChange(skill === "All" ? "" : skillToDataFormat(skill))}
            className={cn(
              "font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border transition-all duration-200",
              (skill === "All" && !activeSkill) || activeSkill === skillToDataFormat(skill)
                ? "bg-goose-green/20 border-goose-green/40 text-goose-green"
                : "border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-400"
            )}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Type filters */}
      <div className="flex flex-wrap gap-2 items-center">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type === "All" ? "" : type.toLowerCase())}
            className={cn(
              "font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border transition-all duration-200",
              (type === "All" && !activeType) || activeType === type.toLowerCase()
                ? "bg-goose-green/20 border-goose-green/40 text-goose-green"
                : "border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-400"
            )}
          >
            {type}
          </button>
        ))}
        <span className="text-zinc-600 text-xs font-mono ml-2">
          {filteredCount} of {totalCount}
        </span>
      </div>

      {/* Swing Fault filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="font-mono text-[9px] tracking-widest uppercase text-zinc-600 mr-1">
          Swing Faults
        </span>
        {SWING_FAULTS.map((fault) => (
          <button
            key={fault}
            onClick={() => {
              if (locked) return
              onFaultChange(activeFault === fault ? "" : fault)
            }}
            className={cn(
              "font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border transition-all duration-200",
              locked
                ? "border-zinc-800 text-zinc-700 cursor-not-allowed opacity-50"
                : activeFault === fault
                  ? "bg-red-500/15 border-red-500/40 text-red-400"
                  : "border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-400"
            )}
          >
            {fault}
          </button>
        ))}
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"

interface TicketDividerProps {
  className?: string
}

export function TicketDivider({ className }: TicketDividerProps) {
  return (
    <div className={cn("relative w-full py-4", className)} aria-hidden="true">
      <div className="flex items-center">
        {/* Left notch */}
        <div className="w-4 h-8 bg-goose-void rounded-r-full -ml-4 border-r border-zinc-800 flex-shrink-0" />
        {/* Dashed line */}
        <div className="flex-1 border-t-2 border-dashed border-zinc-800" />
        {/* Right notch */}
        <div className="w-4 h-8 bg-goose-void rounded-l-full -mr-4 border-l border-zinc-800 flex-shrink-0" />
      </div>
    </div>
  )
}

"use client"

import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  fullBleed?: boolean
}

export function SectionWrapper({ children, className, id, fullBleed }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative py-16 md:py-20", className)}>
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {children}
        </div>
      )}
    </section>
  )
}

import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p"
}

export function GradientText({ children, className, as: Component = "span" }: GradientTextProps) {
  return (
    <Component className={cn("text-gradient-mint", className)}>
      {children}
    </Component>
  )
}

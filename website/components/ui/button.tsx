import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-goose-green text-goose-void font-semibold hover:bg-goose-green/90 shadow-lg shadow-goose-green/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white",
        secondary:
          "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
        ghost:
          "text-zinc-400 hover:bg-zinc-800/50 hover:text-white",
        link:
          "text-goose-mint underline-offset-4 hover:underline",
        cta:
          "bg-goose-green text-goose-void font-bold hover:bg-goose-green/90 shadow-xl shadow-goose-green/25 hover:shadow-goose-green/40",
      },
      size: {
        default: "h-10 px-5 py-2 rounded-xl",
        sm: "h-9 px-4 rounded-lg text-xs",
        lg: "h-12 px-8 rounded-xl text-base",
        xl: "h-14 px-10 rounded-xl text-lg",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

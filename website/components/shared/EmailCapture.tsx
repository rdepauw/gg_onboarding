"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface EmailCaptureProps {
  source: string
  placeholder?: string
  buttonText?: string
  successMessage?: string
  className?: string
  variant?: "inline" | "stacked"
  onSuccess?: () => void
}

export function EmailCapture({
  source,
  placeholder = "your@email.com",
  buttonText = "Get Free Access",
  successMessage = "You're in! Check your email.",
  className,
  variant = "inline",
  onSuccess,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || status === "loading") return

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong.")
        return
      }

      setStatus("success")
      setEmail("")

      // Store in localStorage so we can unlock gated content
      if (typeof window !== "undefined") {
        localStorage.setItem("gg_email_captured", "true")
        localStorage.setItem("gg_email", email.trim())
      }

      onSuccess?.()
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("text-center", className)}
      >
        <p className="flex items-center justify-center gap-2 text-goose-green font-mono text-sm mb-2">
          <span className="text-lg">✈️</span>
          {successMessage}
        </p>
        <a
          href="/download"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-goose-mint transition-colors font-mono"
        >
          Download Golf Goose &rarr;
        </a>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        variant === "inline"
          ? "flex gap-2 items-center"
          : "flex flex-col gap-3",
        className
      )}
    >
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={cn(
          "bg-zinc-900/80 border-zinc-700",
          variant === "inline" ? "flex-1" : "w-full"
        )}
      />
      <Button
        type="submit"
        variant="cta"
        size={variant === "inline" ? "default" : "lg"}
        disabled={status === "loading"}
        className={cn(
          variant === "stacked" && "w-full",
          status === "loading" && "opacity-70"
        )}
      >
        {status === "loading" ? "Sending..." : buttonText}
      </Button>
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-400 text-xs font-mono"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}

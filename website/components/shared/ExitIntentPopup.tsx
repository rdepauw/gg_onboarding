"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { EmailCapture } from "./EmailCapture"

export function ExitIntentPopup() {
  const [show, setShow] = useState(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger when mouse leaves through the top of the viewport
    if (e.clientY > 10) return

    // Don't show if already captured email or dismissed
    if (typeof window !== "undefined") {
      if (localStorage.getItem("gg_email_captured") === "true") return
      if (sessionStorage.getItem("gg_exit_dismissed") === "true") return
    }

    setShow(true)
  }, [])

  useEffect(() => {
    // Only on desktop (pointer devices)
    const mq = window.matchMedia("(pointer: fine)")
    if (!mq.matches) return

    // Delay attaching so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseLeave])

  function dismiss() {
    setShow(false)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("gg_exit_dismissed", "true")
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md rounded-3xl border border-goose-green/20 bg-gradient-to-br from-zinc-900 to-black p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-3xl mb-3">🪿</p>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Wait — Free Drills Before You Go
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Get instant access to 248+ golf drills, feels, and practice games. No card required.
            </p>

            <EmailCapture
              source="exit-intent"
              buttonText="Get Free Access"
              placeholder="Enter your email"
              successMessage="You're in! Head to the Library."
              variant="stacked"
              onSuccess={dismiss}
            />
            <p className="font-mono text-[10px] text-zinc-600 mt-3">
              NO SPAM &middot; UNSUBSCRIBE ANYTIME
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

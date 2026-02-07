"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

export function StickyEmailBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Don't show if already captured or dismissed this session
    if (typeof window !== "undefined") {
      if (localStorage.getItem("gg_email_captured") === "true") return
      if (sessionStorage.getItem("gg_sticky_dismissed") === "true") {
        setDismissed(true)
        return
      }
    }

    // Show after scrolling past 40% of page
    function handleScroll() {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.4)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function dismiss() {
    setDismissed(true)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("gg_sticky_dismissed", "true")
    }
  }

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-4 py-3 flex items-center gap-3">
            <Link
              href="/library"
              className="flex-1 flex items-center gap-2 text-sm font-display font-semibold text-white"
            >
              <span className="text-goose-green">248+</span> Free Drills & Games
              <span className="text-goose-green">&rarr;</span>
            </Link>
            <button
              onClick={dismiss}
              className="text-zinc-500 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

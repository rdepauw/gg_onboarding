"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { skillToDisplayFormat, getYouTubeId } from "@/lib/library-utils"

interface LibraryDetailItem {
  title: string
  description: string
  type: string
  skills: string[]
  tags: string[]
  video: string | null
  source?: string
}

interface LibraryDetailModalProps {
  item: LibraryDetailItem | null
  onClose: () => void
}

const typeBadgeColors: Record<string, string> = {
  drill: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  feel: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  game: "bg-amber-500/20 text-amber-400 border-amber-500/30",
}

export function LibraryDetailModal({ item, onClose }: LibraryDetailModalProps) {
  // Escape key closes modal
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (item) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [item, onClose])

  const videoId = item?.video ? getYouTubeId(item.video) : null

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex justify-end bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-gradient-to-b from-zinc-900 to-black border-l border-zinc-800 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 z-10 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 pt-6">
              {/* Type badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-wide uppercase px-3 py-1 rounded-full border",
                    typeBadgeColors[item.type] || "bg-zinc-800 text-zinc-400 border-zinc-700"
                  )}
                >
                  {item.type || "other"}
                </span>
                {item.source && (
                  <span className="font-mono text-[10px] text-zinc-600">
                    via {item.source}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 leading-tight">
                {item.title}
              </h2>

              {/* Video embed */}
              {videoId && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-zinc-800">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              {/* Video link (if video but no embed fallback) */}
              {item.video && !videoId && (
                <a
                  href={item.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-goose-green/20 bg-goose-green/10 text-goose-green text-sm font-mono hover:bg-goose-green/20 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Watch Video
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-3">
                  Description
                </h3>
                <div className="text-zinc-300 text-sm leading-relaxed space-y-3">
                  {item.description.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Skills */}
              {item.skills.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-3">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] tracking-wide uppercase text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700"
                      >
                        {skillToDisplayFormat(skill)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {item.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-3">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-zinc-500 bg-zinc-800/60 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Watch on YouTube link */}
              {item.video && (
                <a
                  href={item.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-goose-green transition-colors font-mono"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Watch on YouTube
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

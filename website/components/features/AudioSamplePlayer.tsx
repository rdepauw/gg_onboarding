"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, viewportOnce } from "@/lib/animations"

interface AudioSamplePlayerProps {
  title: string
  description: string
  src: string
  artwork?: string
}

export function AudioSamplePlayer({ title, description, src, artwork }: AudioSamplePlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const bar = progressRef.current
    if (!audio || !bar) return

    const rect = bar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audio.currentTime = percent * duration
  }, [duration])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  // Decorative waveform bars
  const waveformBars = [
    0.3, 0.5, 0.7, 0.4, 0.9, 0.6, 0.8, 0.3, 0.7, 0.5,
    0.9, 0.4, 0.6, 0.8, 0.3, 0.7, 0.5, 0.9, 0.6, 0.4,
    0.8, 0.3, 0.7, 0.5, 0.9, 0.6, 0.4, 0.8, 0.5, 0.7,
    0.3, 0.9, 0.6, 0.4, 0.8, 0.5, 0.7, 0.3, 0.6, 0.9,
  ]

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative w-full max-w-lg"
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-5 shadow-2xl shadow-black/60 overflow-hidden">
        {/* Subtle green ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-goose-green/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative flex items-start gap-4">
          {/* Artwork */}
          {artwork && (
            <div className="relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border border-zinc-700/50 shadow-lg">
              <Image
                src={artwork}
                alt={title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
              {/* Vinyl overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
            </div>
          )}

          {/* Info + Controls */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-mono text-[9px] tracking-flight uppercase text-goose-green">
                Now Playing
              </span>
            </div>
            <h4 className="font-display font-bold text-sm text-white truncate">{title}</h4>
            <p className="text-[11px] text-zinc-500 truncate">{description}</p>
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="relative flex-shrink-0 w-12 h-12 rounded-full bg-goose-green flex items-center justify-center shadow-lg shadow-goose-green/30 hover:shadow-goose-green/50 hover:scale-105 transition-all duration-200 group"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="text-goose-void">
                <rect x="1" y="0.5" width="4" height="15" rx="1" fill="currentColor" />
                <rect x="9" y="0.5" width="4" height="15" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="text-goose-void ml-0.5">
                <path d="M1 1.5L13 8L1 14.5V1.5Z" fill="currentColor" />
              </svg>
            )}
            {/* Pulse ring on playing */}
            {isPlaying && (
              <span className="absolute inset-0 rounded-full border-2 border-goose-green animate-ping opacity-20" />
            )}
          </button>
        </div>

        {/* Waveform Visualization */}
        <div className="mt-4 flex items-end justify-center gap-[2px] h-8">
          {waveformBars.map((height, i) => {
            const barProgress = (i / waveformBars.length) * 100
            const isActive = barProgress <= progress
            return (
              <div
                key={i}
                className="w-[3px] rounded-full transition-colors duration-150"
                style={{
                  height: `${height * 100}%`,
                  backgroundColor: isActive
                    ? "rgb(8, 226, 110)"
                    : "rgb(63, 63, 70)",
                  opacity: isActive ? 1 : 0.5,
                }}
              />
            )
          })}
        </div>

        {/* Progress Bar + Time */}
        <div className="mt-3 space-y-2">
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="relative h-1.5 bg-zinc-800 rounded-full cursor-pointer group/progress overflow-hidden"
          >
            <div
              className="absolute inset-y-0 left-0 bg-goose-green rounded-full transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
            {/* Hover expand */}
            <div className="absolute inset-0 opacity-0 group-hover/progress:opacity-100 transition-opacity">
              <div
                className="absolute inset-y-0 left-0 bg-goose-green/80 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Scrub head */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-goose-green shadow-md opacity-0 group-hover/progress:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-500 tabular-nums">
              {formatTime(currentTime)}
            </span>
            <span className="font-mono text-[10px] text-zinc-500 tabular-nums">
              {isLoaded ? formatTime(duration) : "--:--"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

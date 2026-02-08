"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { FilterBar } from "./FilterBar"
import { LibraryCard } from "./LibraryCard"
import { LibraryDetailModal } from "./LibraryDetailModal"
import { EmailCapture } from "@/components/shared/EmailCapture"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

interface LibraryItem {
  id: string
  title: string
  description: string
  type: string
  skills: string[]
  tags: string[]
  video: string | null
  reviewed: boolean
  claude_ready?: boolean
  featured?: boolean
  source?: string
}

interface LibraryGridProps {
  items: LibraryItem[]
}

export function LibraryGrid({ items }: LibraryGridProps) {
  const [search, setSearch] = useState("")
  const [activeSkill, setActiveSkill] = useState("")
  const [activeType, setActiveType] = useState("")
  const [activeFault, setActiveFault] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null)

  // Check localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUnlocked(localStorage.getItem("gg_email_captured") === "true")
    }
  }, [])

  // Staff Picks — always the same 10 featured items, never filtered
  const staffPicks = useMemo(() => items.filter((i) => i.featured), [items])

  // Full library — everything except featured items
  const libraryItems = useMemo(() => items.filter((i) => !i.featured), [items])

  // Apply filters to the full library only
  const filteredLibrary = useMemo(() => {
    return libraryItems.filter((item) => {
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      const matchesSkill = !activeSkill || item.skills.includes(activeSkill)
      const matchesType = !activeType || item.type === activeType
      const matchesFault =
        !activeFault ||
        item.tags.some((t) => t.toLowerCase() === activeFault.toLowerCase())
      return matchesSearch && matchesSkill && matchesType && matchesFault
    })
  }, [libraryItems, search, activeSkill, activeType, activeFault])

  return (
    <div className="space-y-16">
      {/* ── Staff Picks — always visible ──────────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-goose-green text-goose-green" />
            <h2 className="font-display font-bold text-2xl text-white">
              Staff Picks
            </h2>
          </div>
        </div>
        <p className="text-zinc-500 text-sm font-mono mb-6">
          Our favorite feels, drills, and games
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {staffPicks.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <LibraryCard
                title={item.title}
                description={item.description}
                type={item.type}
                skills={item.skills}
                video={item.video}
                featured
                onClick={() => setSelectedItem(item)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800" />

      {/* ── Full Library ──────────────────────────────────────────────── */}
      <div>
        <h2 className="font-display font-bold text-2xl text-white mb-1">
          Full Library
        </h2>
        <p className="text-zinc-500 text-sm font-mono mb-6">
          {items.length}+ drills, feels &amp; games
        </p>

        <FilterBar
          activeSkill={activeSkill}
          activeType={activeType}
          activeFault={activeFault}
          onSkillChange={setActiveSkill}
          onTypeChange={setActiveType}
          onFaultChange={setActiveFault}
          search={search}
          onSearchChange={setSearch}
          totalCount={libraryItems.length}
          filteredCount={unlocked ? filteredLibrary.length : 0}
          locked={!unlocked}
        />

        {/* ── Unlocked: show full filtered library ────────────────────── */}
        {unlocked && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
          >
            {filteredLibrary.map((item) => (
              <motion.div key={item.id} variants={staggerItem}>
                <LibraryCard
                  title={item.title}
                  description={item.description}
                  type={item.type}
                  skills={item.skills}
                  video={item.video}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}

            {filteredLibrary.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="text-zinc-500 text-sm">No items match your filters.</p>
                <button
                  onClick={() => { setSearch(""); setActiveSkill(""); setActiveType(""); setActiveFault("") }}
                  className="text-goose-green text-sm mt-2 hover:text-goose-mint transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ── Locked: teaser cards + email gate ───────────────────────── */}
        {!unlocked && (
          <div className="relative mt-6">
            {/* Teaser — show a few locked cards behind blur */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
              {filteredLibrary.slice(0, 6).map((item) => (
                <LibraryCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                  skills={item.skills}
                  locked
                />
              ))}
            </div>

            {/* Gradient fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-goose-void/80 to-goose-void pointer-events-none" />

            {/* Email capture CTA */}
            <div className="relative z-10 -mt-32 pt-40 pb-8">
              <div className="max-w-lg mx-auto text-center rounded-3xl border border-goose-green/20 bg-gradient-to-br from-goose-green/10 to-zinc-900 p-8">
                <p className="text-3xl mb-3">🔓</p>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Unlock {libraryItems.length}+ More
                </h3>
                <p className="text-zinc-400 text-sm mb-6">
                  Enter your email to get full access to our entire library of drills, feels, and games.
                </p>
                <EmailCapture
                  source="library-gate"
                  buttonText="Unlock Full Library"
                  placeholder="Enter your email"
                  successMessage="Unlocked! Enjoy the full library."
                  variant="stacked"
                  onSuccess={() => setUnlocked(true)}
                />
                <p className="font-mono text-[10px] text-zinc-600 mt-3">
                  FREE ACCESS &middot; NO SPAM
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Detail modal ──────────────────────────────────────────────── */}
      <LibraryDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}

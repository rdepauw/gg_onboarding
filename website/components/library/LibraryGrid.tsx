"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
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
  source?: string
}

interface LibraryGridProps {
  items: LibraryItem[]
}

// Items are "ready" if human-reviewed OR Claude-reviewed as Ready

export function LibraryGrid({ items }: LibraryGridProps) {
  const [search, setSearch] = useState("")
  const [activeSkill, setActiveSkill] = useState("")
  const [activeType, setActiveType] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null)

  // Check localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUnlocked(localStorage.getItem("gg_email_captured") === "true")
    }
  }, [])

  // Split into ready (free) and not-ready (gated)
  const readyItems = useMemo(() => items.filter((i) => i.reviewed || i.claude_ready), [items])
  const gatedItems = useMemo(() => items.filter((i) => !i.reviewed && !i.claude_ready), [items])

  // Apply filters to all items
  const filterItems = (list: LibraryItem[]) =>
    list.filter((item) => {
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      const matchesSkill = !activeSkill || item.skills.includes(activeSkill)
      const matchesType = !activeType || item.type === activeType
      return matchesSearch && matchesSkill && matchesType
    })

  const filteredReady = useMemo(
    () => filterItems(readyItems),
    [readyItems, search, activeSkill, activeType]
  )

  const filteredGated = useMemo(
    () => filterItems(gatedItems),
    [gatedItems, search, activeSkill, activeType]
  )

  return (
    <div className="space-y-8">
      <FilterBar
        activeSkill={activeSkill}
        activeType={activeType}
        onSkillChange={setActiveSkill}
        onTypeChange={setActiveType}
        search={search}
        onSearchChange={setSearch}
        totalCount={items.length}
        filteredCount={filteredReady.length + (unlocked ? filteredGated.length : 0)}
      />

      {/* Ready items — always visible */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredReady.map((item) => (
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
      </motion.div>

      {/* Email gate */}
      {!unlocked && filteredGated.length > 0 && (
        <div className="relative">
          {/* Teaser — show a few locked cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
            {filteredGated.slice(0, 6).map((item) => (
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
                Unlock {gatedItems.length}+ More
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

      {/* Unlocked items */}
      {unlocked && filteredGated.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredGated.map((item) => (
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
        </motion.div>
      )}

      {/* Empty state */}
      {filteredReady.length === 0 && filteredGated.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500 text-sm">No items match your filters.</p>
          <button
            onClick={() => { setSearch(""); setActiveSkill(""); setActiveType("") }}
            className="text-goose-green text-sm mt-2 hover:text-goose-mint transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Detail modal */}
      <LibraryDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}

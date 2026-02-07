"use client"

import { EmailCapture } from "@/components/shared/EmailCapture"

export function BlogEmailCTA() {
  return (
    <div className="rounded-3xl border border-goose-green/20 bg-gradient-to-br from-goose-green/10 to-zinc-900 p-8 text-center">
      <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-3">
        Free Practice Library
      </p>
      <h3 className="font-display font-bold text-xl text-white mb-2">
        248+ Drills, Feels & Games
      </h3>
      <p className="text-sm text-zinc-400 mb-6">
        Liked this article? Get free access to our full library of practice content — the same drills and feels used inside Golf Goose.
      </p>
      <div className="max-w-sm mx-auto">
        <EmailCapture
          source="blog-cta"
          buttonText="Get Free Access"
          placeholder="Enter your email"
          successMessage="You're in! Head to the Library to explore."
          variant="stacked"
        />
      </div>
      <p className="font-mono text-[10px] text-zinc-600 mt-3">
        NO SPAM &middot; UNSUBSCRIBE ANYTIME
      </p>
    </div>
  )
}

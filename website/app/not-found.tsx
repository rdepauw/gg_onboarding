import Link from "next/link"

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-goose-green/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center md:px-8">
        <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-6">
          FLIGHT NOT FOUND
        </p>

        <h1 className="font-display font-black text-7xl tracking-tight text-white mb-2 md:text-9xl">
          404
        </h1>

        <p className="font-mono text-sm text-zinc-500 mb-8">
          GATE: UNKNOWN &nbsp;|&nbsp; DEST: ??? &nbsp;|&nbsp; STATUS: CANCELLED
        </p>

        <p className="text-lg text-zinc-400 mb-10 max-w-md mx-auto">
          Looks like this flight was cancelled. Let&apos;s get you rerouted back to the terminal.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-goose-green px-8 font-display font-bold text-sm text-black transition-all hover:bg-goose-mint hover:shadow-[0_0_30px_rgba(8,226,110,0.3)]"
          >
            Return to Terminal
          </Link>
          <Link
            href="/features"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-8 font-display font-bold text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}

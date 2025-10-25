"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

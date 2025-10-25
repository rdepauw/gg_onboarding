export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">404 - Page Not Found</h2>
        <p className="text-zinc-400 mb-6">This page doesn't exist.</p>
        <a
          href="/"
          className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}

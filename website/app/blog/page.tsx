import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"
import { getAllPosts } from "@/lib/blog"
import { FeatureHero } from "@/components/features/FeatureHero"

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description: "Golf improvement tips, practice strategies, mental game advice, and the latest from Golf Goose AI.",
  path: "/blog",
})

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find((p) => p.featured) || posts[0]
  const otherPosts = posts.filter((p) => p.slug !== featuredPost?.slug)

  return (
    <>
      <FeatureHero
        eyebrow="Blog"
        title="The"
        titleAccent="Clubhouse"
        description="Golf improvement tips, practice strategies, and the latest from Golf Goose AI."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {/* Featured post */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block group mb-12">
              <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-10 hover:border-goose-green/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[9px] tracking-flight text-goose-green uppercase bg-goose-green/10 px-2.5 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="font-mono text-[9px] tracking-flight text-zinc-600 uppercase bg-zinc-800 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl tracking-wide text-white mb-3 group-hover:text-goose-mint transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-zinc-400 mb-4 max-w-2xl">{featuredPost.description}</p>
                <div className="flex items-center gap-4 font-mono text-[10px] tracking-wide text-zinc-600 uppercase">
                  <span>{featuredPost.date}</span>
                  <span>&middot;</span>
                  <span>{featuredPost.readingTime}</span>
                  <span>&middot;</span>
                  <span>{featuredPost.author}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Posts grid */}
          {otherPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-goose-green/20 transition-all duration-300">
                    <span className="font-mono text-[9px] tracking-flight text-goose-green uppercase bg-goose-green/10 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-display font-bold text-lg tracking-wide text-white mt-3 mb-2 group-hover:text-goose-mint transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-3 font-mono text-[10px] tracking-wide text-zinc-600 uppercase">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-500">More articles coming soon. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

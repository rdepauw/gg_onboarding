import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { generatePageMetadata } from "@/lib/metadata"
import { TicketDivider } from "@/components/shared/TicketDivider"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  return (
    <article className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-goose-mint transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] tracking-flight text-goose-green uppercase bg-goose-green/10 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight text-white mb-4">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg mb-6">{post.description}</p>
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-wide text-zinc-600 uppercase pb-6 border-b border-zinc-800">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Content — rendered as HTML-safe markdown */}
        <div className="prose-invert space-y-6 text-zinc-300 leading-relaxed">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display font-bold text-2xl text-white mt-10 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="font-display font-bold text-xl text-white mt-8 mb-3">
                  {paragraph.replace("### ", "")}
                </h3>
              )
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="list-disc pl-6 space-y-1 text-zinc-400">
                  {paragraph.split("\n").map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              )
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote key={i} className="border-l-2 border-goose-green pl-6 text-zinc-400 italic bg-goose-green/5 py-4 pr-4 rounded-r-xl">
                  {paragraph.replace("> ", "")}
                </blockquote>
              )
            }
            return <p key={i}>{paragraph}</p>
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-goose-green/20 bg-gradient-to-br from-goose-green/10 to-zinc-900 p-8 text-center">
          <p className="font-mono text-[10px] tracking-flight uppercase text-zinc-500 mb-3">
            Try It In Golf Goose
          </p>
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Practice Smarter with AI Coaching
          </h3>
          <p className="text-sm text-zinc-400 mb-6">
            Get personalized drills for your swing faults and track your improvement over time.
          </p>
          <Link href="/download">
            <Button variant="cta">Board Now</Button>
          </Link>
        </div>

        <TicketDivider className="my-12" />

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-goose-green/20 transition-all">
                    <h4 className="font-display font-semibold text-sm text-white group-hover:text-goose-mint transition-colors mb-1">
                      {rp.title}
                    </h4>
                    <p className="text-xs text-zinc-500">{rp.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

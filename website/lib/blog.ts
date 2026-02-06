import fs from "fs"
import path from "path"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readingTime: string
  featured: boolean
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "content/blog")

function parseFrontmatter(fileContent: string): { metadata: Record<string, string | string[] | boolean>; content: string } {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  if (!match) return { metadata: {}, content: fileContent }

  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const metadata: Record<string, string | string[] | boolean> = {}

  frontMatterBlock.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":")
    if (key && valueParts.length) {
      let value = valueParts.join(":").trim()
      value = value.replace(/^["']|["']$/g, "")
      if (value.startsWith("[") && value.endsWith("]")) {
        metadata[key.trim()] = value
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
      } else if (value === "true" || value === "false") {
        metadata[key.trim()] = value === "true"
      } else {
        metadata[key.trim()] = value
      }
    }
  })

  return { metadata, content }
}

function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "")
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { metadata, content } = parseFrontmatter(fileContent)

    return {
      slug,
      title: (metadata.title as string) || slug,
      description: (metadata.description as string) || "",
      date: (metadata.date as string) || "",
      author: (metadata.author as string) || "Golf Goose Team",
      category: (metadata.category as string) || "General",
      tags: (metadata.tags as string[]) || [],
      image: (metadata.image as string) || "/images/blog/default.jpg",
      readingTime: estimateReadingTime(content),
      featured: (metadata.featured as boolean) || false,
      content,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug)
}

export function getCategories(): string[] {
  const posts = getAllPosts()
  const categories = [...new Set(posts.map((p) => p.category))]
  return categories.sort()
}

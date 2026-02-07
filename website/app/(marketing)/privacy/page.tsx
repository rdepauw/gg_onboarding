import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import fs from "fs"
import path from "path"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Golf Goose AI privacy policy. Learn how we collect, use, and protect your data.",
  path: "/privacy",
})

function getPrivacyHTML() {
  const filePath = path.join(process.cwd(), "app/(marketing)/privacy/content.html")
  return fs.readFileSync(filePath, "utf-8")
}

export default function PrivacyPage() {
  const privacyHTML = getPrivacyHTML()

  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mb-8">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-4">Legal</p>
        </div>

        <div
          className="legal-content"
          dangerouslySetInnerHTML={{ __html: privacyHTML }}
        />
      </div>
    </section>
  )
}

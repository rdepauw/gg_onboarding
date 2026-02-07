import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import fs from "fs"
import path from "path"

export const metadata: Metadata = generatePageMetadata({
  title: "Terms & Conditions",
  description: "Golf Goose AI terms and conditions of service.",
  path: "/terms",
})

function getTermsHTML() {
  const filePath = path.join(process.cwd(), "app/(marketing)/terms/content.html")
  return fs.readFileSync(filePath, "utf-8")
}

export default function TermsPage() {
  const termsHTML = getTermsHTML()

  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mb-8">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-4">Legal</p>
        </div>

        <div
          className="legal-content"
          dangerouslySetInnerHTML={{ __html: termsHTML }}
        />
      </div>
    </section>
  )
}

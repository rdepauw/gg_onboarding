import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants"
import { TicketDivider } from "@/components/shared/TicketDivider"

const footerSections = [
  { title: "Product", links: FOOTER_LINKS.product },
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Support", links: FOOTER_LINKS.support },
  { title: "Legal", links: FOOTER_LINKS.legal },
]

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/50 bg-goose-void">
      <TicketDivider className="max-w-6xl mx-auto px-6 md:px-8" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 pb-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-xs font-medium tracking-flight uppercase text-zinc-500 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-goose-mint transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800/50">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/golf-goose-logo-transparent.png"
              alt="Golf Goose"
              width={24}
              height={24}
            />
            <span className="font-mono text-xs text-zinc-500 tracking-wide">
              GOLF GOOSE AIRWAYS &mdash; FLIGHT {SITE_CONFIG.flightCode}
            </span>
          </div>

          <p className="font-mono text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Golf Goose AI. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {Object.entries(SITE_CONFIG.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-goose-mint transition-colors text-xs font-mono uppercase tracking-wide"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

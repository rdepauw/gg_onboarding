import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Golf Goose AI privacy policy. Learn how we collect, use, and protect your data.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mb-12">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-4">Legal</p>
          <h1 className="font-display font-black text-4xl tracking-tight text-white mb-2">Privacy Policy</h1>
          <p className="font-mono text-xs text-zinc-500">Last updated: February 2026</p>
        </div>

        <div className="prose-invert space-y-8 text-zinc-400 text-sm leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">1. Introduction</h2>
            <p>Golf Goose AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account information (name, email, password)</li>
              <li>Golf profile data (handicap, goals, swing faults, club selections)</li>
              <li>Round data (scores, course information, scorecards)</li>
              <li>Practice session data (duration, drills completed, notes)</li>
              <li>AI conversation history with Goose</li>
              <li>Voice recordings (when voice coaching is enabled)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your experience (practice plans, AI coaching, drill recommendations)</li>
              <li>Process transactions and manage subscriptions</li>
              <li>Analyze usage patterns to improve our product</li>
              <li>Communicate with you about updates and features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data to third parties. We may share data with service providers who assist in operating our platform (hosting, analytics, payment processing) under strict data protection agreements.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures including encryption in transit and at rest, secure authentication, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@golfgoose.ai" className="text-goose-green hover:text-goose-mint transition-colors">privacy@golfgoose.ai</a>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

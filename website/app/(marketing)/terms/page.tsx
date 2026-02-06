import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Terms & Conditions",
  description: "Golf Goose AI terms and conditions of service.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mb-12">
          <p className="font-mono text-[11px] tracking-flight uppercase text-goose-green mb-4">Legal</p>
          <h1 className="font-display font-black text-4xl tracking-tight text-white mb-2">Terms &amp; Conditions</h1>
          <p className="font-mono text-xs text-zinc-500">Last updated: February 2026</p>
        </div>

        <div className="prose-invert space-y-8 text-zinc-400 text-sm leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Golf Goose AI (&ldquo;the Service&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you may not use the Service.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">2. Description of Service</h2>
            <p>Golf Goose AI provides an AI-powered golf improvement platform including personalized practice plans, round analysis, AI coaching conversations, and progress tracking. The Service is available via mobile application and web.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">3. Account Registration</h2>
            <p>You must create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate, current, and complete information.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">4. Subscriptions & Payments</h2>
            <p className="mb-3">Premium features require a paid subscription. By subscribing, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pay all fees associated with your chosen plan</li>
              <li>Automatic renewal unless cancelled before the renewal date</li>
              <li>Manage subscriptions through your device&apos;s app store</li>
            </ul>
            <p className="mt-3">Free trials convert to paid subscriptions automatically. Cancel before the trial ends to avoid charges.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">5. AI-Generated Content</h2>
            <p>Golf Goose provides AI-generated coaching advice, practice plans, and analysis. This content is for informational purposes only and should not replace professional medical or golf instruction advice. We are not liable for any injury or outcome resulting from following AI-generated advice.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">6. User Content</h2>
            <p>You retain ownership of content you create (notes, custom drills, etc.). By using the Service, you grant us a license to use this content to provide and improve our services.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">7. Prohibited Uses</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to reverse engineer or extract source code</li>
              <li>Interfere with the Service&apos;s security or integrity</li>
              <li>Resell or redistribute access to the Service</li>
              <li>Use automated systems to access the Service without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">8. Limitation of Liability</h2>
            <p>The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of material changes. Continued use after changes constitutes acceptance of modified terms.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-white mb-3">10. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@golfgoose.ai" className="text-goose-green hover:text-goose-mint transition-colors">legal@golfgoose.ai</a>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { FeatureHero } from "@/components/features/FeatureHero"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = generatePageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Golf Goose AI — features, pricing, technical details, and more.",
  path: "/faq",
})

const faqCategories = [
  {
    category: "General",
    questions: [
      { q: "What is Golf Goose?", a: "Golf Goose is an AI-powered golf improvement app that connects your practice, rounds, and coaching into one seamless system. Think of it as a personal golf coach in your pocket." },
      { q: "Who is Golf Goose for?", a: "Any golfer looking to improve — from beginners trying to break 100 to single-digit handicaps chasing scratch. If you practice and play, Golf Goose will help you do both smarter." },
      { q: "What makes Golf Goose different from other golf apps?", a: "Most golf apps do one thing — track scores, or provide drills, or offer coaching. Golf Goose connects all three. Your practice informs your coaching, your rounds inform your practice, and your AI coach ties it all together." },
    ],
  },
  {
    category: "Features",
    questions: [
      { q: "What is Goose the AI Coach?", a: "Goose is your AI-powered golf co-pilot. You can chat with Goose via voice or text for pre-round pump ups, post-round recaps, swing advice, and even podcast-style round replays." },
      { q: "How does the swing fault diagnosis work?", a: "During onboarding, you select your common misses (slice, hook, fat shots, etc.). Our AI uses this to generate personalized drills, mental feels, and practice games tailored to your specific faults." },
      { q: "Can I scan my scorecard?", a: "Yes! Take a photo of your paper scorecard and our OCR technology reads it automatically. You can make quick edits if needed." },
    ],
  },
  {
    category: "Pricing",
    questions: [
      { q: "How much does Golf Goose cost?", a: "Golf Goose has a free tier with basic features. First Class (premium) is $9.99/month or $99.99/year, which saves you ~17%. That's less than a bucket of range balls." },
      { q: "Is there a free trial?", a: "Yes! First Class comes with a 7-day free trial. You can explore all premium features before committing." },
      { q: "Can I cancel my subscription?", a: "Absolutely. Cancel anytime from within the app. No hidden fees, no penalties, no questions asked." },
    ],
  },
  {
    category: "Technical",
    questions: [
      { q: "What devices does Golf Goose work on?", a: "Golf Goose is available on iOS. A web experience is coming soon." },
      { q: "Does it work offline?", a: "Your logged data is available offline. AI coaching features and syncing require an internet connection." },
      { q: "Is my data secure?", a: "Yes. We use industry-standard encryption and never share your personal data with third parties. See our Privacy Policy for full details." },
    ],
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.questions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <FeatureHero
        eyebrow="FAQ"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Everything you need to know about Golf Goose. Can't find your answer? Contact us."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display font-bold text-xl tracking-wide text-white mb-6 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-flight text-goose-green uppercase">{cat.category}</span>
                <div className="flex-1 border-t border-dashed border-zinc-800" />
              </h2>
              <div className="space-y-6">
                {cat.questions.map((faq) => (
                  <div key={faq.q} className="border-b border-zinc-800/50 pb-6">
                    <h3 className="font-display font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

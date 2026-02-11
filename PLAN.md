# GolfGoose Website Update Plan

## Tier 1 — Immediate Changes

### 1. Navigation Restructure
**Files:** `lib/constants.ts`, `components/layout/Navbar.tsx`

Current flat nav: Features (dropdown) | Pricing | Library | Blog | The Lounge | About | Board Now

**New structure:**
- **Product** (dropdown): Features sub-items (AI Coach, Practice Plans, Round Analysis, Progress Tracking, Library), Pricing
- **Content** (dropdown): Free Library (`/library`), The Lounge (`/travel`), Blog (`/blog`)
- **About** (top-level link)
- **Board Now** (CTA button → `/waitlist`)

The Navbar needs a second dropdown state (currently only handles `featuresOpen`). Will refactor to support multiple dropdown groups.

Mobile menu should mirror these groupings with section headers.

### 2. Footer Restructure
**Files:** `lib/constants.ts`, `components/layout/Footer.tsx`

Current sections: Product | Company | Support | Legal

**New structure:**
- **Product**: AI Coach, Practice Plans, Round Analysis, Progress Tracking, Library Feature, Pricing
- **Content**: Free Library, The Lounge, Blog
- **Company**: About, Waitlist (remove Download for now)
- **Support**: FAQ, Contact
- **Legal**: Privacy Policy, Terms & Conditions

Move Free Library out of Product into Content. Remove Download link (save for post-launch).

### 3. Fix Social Links
**File:** `lib/constants.ts`

```
instagram: "https://instagram.com/golfgooseai"    → "https://www.instagram.com/golfgoose.ai/"
tiktok: "https://tiktok.com/@golfgooseai"         → "https://www.tiktok.com/@golfgoose.ai"
```

### 4. Board Now → Waitlist
**Files:** `components/layout/Navbar.tsx`

Change all "Board Now" CTA links from `/download` to `/waitlist`. Download page stays but is unlinked until post-launch.

### 5. Home Page Simplification (9 sections → 5-6)
**File:** `app/page.tsx` + landing components

Current: Hero → SocialProof → HowItWorks → FeatureShowcase → FeaturesGrid → Testimonials → EmailCapture → PricingTeaser → FinalCTA

**New structure:**
1. **Hero** — Keep, but update:
   - New subheadline: "The only app that connects your practice, rounds, and AI coach into one seamless improvement system."
   - Remove goose logo below PRE-BOARDING badge (Tim's note)
   - Change "248 FREE DRILLS" to "250+ FREE DRILLS" in the waitlist text
   - Remove em dash from current subheadline
2. **Feature Showcase** — Keep but restructure to 2 showcases:
   - **Post-Round Podcast** (make it the lead/most prominent — Ryan's top request). "Your Round, Replayed" section.
   - **Talk to Me, Goose** — AI coach showcase. Keep "Talk to me, Goose!" as the headline.
   - Remove: Pre-Round Pump Up section (Ryan: "needs to be replaced"), "What's Your Miss?" showcase (Ryan: "needs different image/demo walkthrough" — defer to Tier 2)
3. **Testimonials** — Condense from 6 to 3 testimonials (Ryan: "too much right now")
4. **Pricing Teaser** — Keep, show $9.99/mo prominently (Tim wants it on main page)
5. **Final CTA** — Keep, "Board Now" → waitlist

**Remove entirely:** SocialProofBar, HowItWorks, FeaturesGrid, EmailCaptureSection (redundant with hero email capture)

### 6. About Page — Update Roles
**File:** `app/(marketing)/about/page.tsx`

- Ryan DePauw: "Co-Founder & CEO" → **"Co-Founder, Product"**
- Tim Hsu: "Co-Founder & CTO" → **"Co-Founder, GTM"**

### 7. FAQ — Remove Internet Question
**File:** `app/(marketing)/faq/page.tsx`

Remove: "Does it work offline?" / "Do I need an internet connection?" question from Technical category.

Also audit pricing FAQ — currently says "$99.99/year" but `SITE_CONFIG.pricing.annual` is `72.0`. Should be consistent. Annual price = $72/year.

### 8. Content Cleanup — Em Dashes
**Files:** Multiple landing/feature components

Audit and reduce em dashes (` — `) that feel AI-generated. Replace with periods, commas, or restructured sentences. Target: FeatureShowcase descriptions, hero subheadline, about page, testimonials.

### 9. Contact Form Destination
**File:** `app/api/waitlist/route.ts` or contact page

Clarify: Where should the contact form submit to? Currently the waitlist endpoint exists but the contact form's backend destination needs to be confirmed. **OPEN QUESTION for Ryan: Where should contact submissions go? Email address? Supabase table?**

---

## Tier 2 — Follow-up Changes

### 10. Travel Page — City Abbreviations
**Files:** `data/travel/destinations.ts`, travel components

Replace full city names with actual airport/city abbreviations where shown in the departure board and map (e.g., "Scottsdale" → "PHX/SCO", etc.).

### 11. Travel Page — Real US Map
**Files:** `components/travel/USMap.tsx`

Replace the current SVG map (described as "sloppy") with a proper US map. Options:
- Use a GeoJSON-based map with react-simple-maps
- Use a polished SVG map asset
- Use a Mapbox/Google Maps static image with custom pins

### 12. About Page — Founder Story Rewrite
**File:** `app/(marketing)/about/page.tsx`

Tim's feedback: "I love websites that explain the name, and the why behind it. Picture of the founders and why they built this."

- Add a narrative section: "Why Golf Goose?" — the origin story, why the name, what problem they experienced
- Add founder photos (placeholder until real photos with goose are taken — Tim: "posing next to a goose")
- Make it personal and human, not corporate
- Keep the boarding pass card format for team stats

### 13. Library Color Coding — Consistent Everywhere
**Files:** Library components, chat, home page references

Feels, Drills, Games should be color-coded consistently everywhere they appear (not just on the library page). Colors from `library-utils.ts`:
- Feels = emerald
- Drills = blue
- Games = purple

Apply to: homepage mentions, feature pages, chat widget cards, any place type names appear.

### 14. "What's Your Miss?" — New Image/Demo
**File:** `components/landing/FeatureShowcase.tsx` (if restored)

Ryan's note: "What's your miss needs a different image. Could give the demo walkthrough." This may be a new screenshot or a GIF/video walkthrough of the practice plan flow.

**OPEN QUESTION: Do you have a demo walkthrough recording or specific screenshot you want to use here?**

---

## Tier 3 — Future Additions

### 15. Stories / Use Cases Page
Tim: "Where people can talk about their different use cases."

New page at `/stories` or `/community`:
- User stories organized by use case (weekend warrior, competitive amateur, senior golfer, etc.)
- Can start with fictional/representative stories, swap for real ones as users come in
- Each story: photo, handicap journey, how they use Golf Goose, favorite feature

### 16. The Lounge Expansion
Tim: "Planned golf trips, PGA top 100 trips, avg price per guy, how many courses in the area."

Expand travel/Lounge content:
- Add trip planning framing (not just destination guides)
- Price-per-person estimates
- Course density data
- Could become social media content pipeline

### 17. Pre-Round Podcast Replacement
Ryan: "The pre-round podcast needs to be replaced."

**OPEN QUESTION: What should replace the Pre-Round Pump Up feature section? Options:**
- A different feature to showcase (e.g., scorecard OCR, practice tracking)
- A demo/walkthrough video section
- Remove and let Post-Round Podcast + Talk to Goose carry the home page

### 18. Font Weight/Rendering Tweaks
Tim noticed fonts felt "low resolution." Keep Syne/Outfit/JetBrains but:
- Audit font-weight usage (some thin weights may render poorly on certain displays)
- Consider bumping minimum body weight from 300 to 400
- Check font-smoothing CSS properties
- Test on different displays

---

## Open Questions (Need Answers Before Implementation)

1. **Contact form destination** — Where should contact form submissions go?
2. **Pre-round pump up replacement** — What replaces this on the home page and in FeatureShowcase?
3. **"What's Your Miss?" image** — Do you have a demo walkthrough to use, or should we skip this showcase for now?
4. **248+ vs 250+** — Ryan asked: is a specific number better or round up to 250+? (Plan currently uses 250+.)
5. **Pricing page as nav item** — Ryan asked "Does pricing need to be a category?" Current plan keeps it under Product dropdown. Should it be removed from nav entirely and only live on the home page pricing teaser?

# Golf Goose Onboarding Flow - Handoff Doc

## 🎯 Overview
This is a fully functional onboarding flow mockup for Golf Goose built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 📁 Project Structure

```
.
├── app/
│   ├── page.tsx              # Main page rendering the flow
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles & Tailwind
│   ├── error.tsx            # Error boundary
│   └── not-found.tsx        # 404 page
├── components/
│   ├── GolfGooseNowBoardingFlow.tsx  # Main onboarding component
│   └── ui/                   # shadcn/ui components (Button, Card, Input)
├── lib/
│   └── utils.ts             # Utility functions (cn, clsx, tailwind-merge)
└── public/
    ├── images/               # Logo assets
    └── videos/               # Product demo videos
```

## 🎬 Onboarding Flow (12 Steps)

### Current Flow:
1. **Slide 1**: Boarding Pass Intro
2. **Slide 2**: Product Demo Video
3. **Slide 3**: Swing Faults Selection (what resonates with you)
4. **Slide 4**: Personalized Practice Plan (drills, feels, games based on selections)
5. **Slide 5**: Account Creation (email/password + social auth)
6. **Slide 6**: Skill Level Setup (handicap, GHIN)
7. **Slide 7**: Goals Selection
8. **Slide 8**: AI Coach Setup (meet Goose)
9. **Slide 9**: Flight Plan Customization (auto-progresses)
10. **Slide 10**: Final Takeoff
11. **Slide 11**: Dashboard (main app interface)
12. **Slide 12**: Deferred Onboarding - Club Selection (accessed via "Complete Profile" button)

### Key Features
- ✅ **Boarding Pass Design**: Airline-themed UI throughout
- ✅ **Personalized Onboarding**: Drill recommendations based on swing fault selections
- ✅ **Deferred Onboarding**: Clubs can be selected later via dashboard
- ✅ **Video Integration**: Auto-play, silent product demo
- ✅ **Brand Colors**: `#C3FCD2` (green) accent color
- ✅ **Animations**: Framer Motion for smooth transitions

## 🎨 Design System

### Colors
- Primary Green: `#C3FCD2`
- Background: `from-zinc-950 to-black`
- Cards: `from-zinc-900 to-black`

### Typography
- Headers: Bold, uppercase tracking
- Body: `text-zinc-300` or `text-zinc-400`

## 🔧 Technical Notes

### State Management
- All state is managed with React hooks
- No external state management library
- `totalSlides = 12` for navigation controls

### Navigation
- Debug controls (Prev/Next buttons) in top-right
- Each slide has internal navigation
- Dashboard accessed via "Ready for Takeoff" button (slide 10 → 11)

### Components Used
- **shadcn/ui**: Button, Card, Input (compatible with Tailwind)
- **Framer Motion**: For slide animations
- **Tailwind CSS**: For all styling

## 📝 Important Details

1. **Logo**: Place `golf-goose-logo.png` in `/public/images/`
2. **Product Demo Video**: Place `product-demo.mp4` in `/public/videos/`
3. **Club Selection**: Moved to deferred onboarding (slide 12)
4. **Dashboard**: Full dashboard experience at slide 11 with "Complete Profile" CTA

## 🔄 Next Steps for Integration

1. **Connect to backend**: Update API calls in account creation (slide 5)
2. **Add validation**: Form validation for email/password
3. **Integrate RevenueCat**: Connect to actual payment processing
4. **Video assets**: Replace placeholder with actual product demo video
5. **Logo**: Replace with actual Golf Goose logo

## 🐛 Known Issues
- None currently

## 📧 Questions?
Feel free to reach out if you need clarification on any part of the flow.

---
Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion

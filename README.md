# CampusPE - AI Powered Campus Assistant & Discovery

> **Pixel-accurate, fully responsive frontend replication of the CampusPE Landing Page from Figma, built with pure JavaScript, Next.js, Tailwind CSS, and Radix UI / shadcn design patterns following WCAG 2.2 Level A & AA accessibility standards.**

---

## 🌟 Live Demo & Repository
- **GitHub Repository**: [campuspe-aipowered-assistant-discovery](https://github.com/ayushraj4105/campuspe-aipowered-assistant-discovery)
- **Live URL**: Ready for one-click deployment on [Vercel](https://vercel.com)

---

## 🚀 Tech Stack & Industry Standard Design

As confirmed by Wappalyzer analysis and strict client requirements:
- **Framework**: **Next.js 14** (App Router) + **React 18**
- **Language**: **Pure JavaScript (ES6+ / JSX)** — strict zero-TypeScript client requirement
- **Styling**: **Tailwind CSS v3** with customized tokens, subtle glow gradients, and keyframes
- **UI Primitives**: **Radix UI** accessible headless components (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tabs`, `@radix-ui/react-slot`)
- **Icons & Assets**: Pixel-sharp custom SVG asset system (`public/assets/updated_icns_img/`) paired with **Lucide React**
- **Typography**: Google Fonts API via `next/font/google`:
  - **Plus Jakarta Sans** (Headings, display metrics)
  - **Inter** (Body text, UI labels)
  - **Roboto** (App interface headings)
  - **Lora** (Role selection card headings)
  - **Caveat** (Handwritten annotations and arrows)
- **Deployment Platform**: **Vercel**

---

## 📱 Responsive & Pixel-Perfect Design Strategy

- **Outside-In Layout Structure**: Built with semantic `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Floating Sticky Header**: Glassmorphic pill navigation (`backdrop-blur-xl bg-white/80`) inspired by `ecc.tools`.
- **Zero Horizontal Scroll**: Strict `max-width: 100vw; overflow-x: hidden;` enforcement across all viewports.
- **Audited Breakpoints**:
  - **Mobile Mini (375px / iPhone 13 mini)**: Optimized stacked cards, single-phone touch slider, accessible 44px touch targets.
  - **Tablet (768px - 1024px)**: 2-column adaptive grids, collapsible mobile drawer.
  - **Desktop (1240px - 1440px)**: 5-phone visual arc, floating badge micro-interactions, full multi-column footer.

---

## ♿ WCAG 2.2 Level A & AA Compliance

Organized around the **4 W3C Pillars**:

1. **Perceivable**:
   - High contrast ratios exceeding 4.5:1 for body text and 3:1 for graphical elements.
   - All images feature meaningful, descriptive `alt` text; decorative icons utilize `aria-hidden="true"`.
   - Responsive reflow up to 200% text zoom without clipping.
2. **Operable**:
   - **WCAG 2.4.1**: Visible "Skip to main content" link for keyboard users.
   - **WCAG 2.2.2**: Pause / resume control for the partner logos marquee.
   - **WCAG 2.5.8**: Minimum 24×24px (and 44×44px touch) target sizing for all buttons and interactive elements.
   - **WCAG 2.4.7**: High-visibility focus rings (`focus-visible:ring-2 focus-visible:ring-primary`).
   - Full keyboard accessibility with focus trapping and `ESC` key dismissals via Radix UI dialogs.
3. **Understandable**:
   - Clear input labels, error states, and predictable tab transitions.
   - **WCAG 3.3.8**: Accessible authentication without cognitive puzzle traps.
4. **Robust**:
   - Strict semantic HTML tags and WAI-ARIA states (`role="tablist"`, `role="tab"`, `role="progressbar"`, `aria-live="polite"`).

---

## ⚡ Interactive Features & Recent Enhancements

1. **Hero Section Branding & Micro-Interactions**:
   - **AI-Powered Campus Assistant**: Replaced default bot icon with the official custom vector robot (`SVGRepo_iconCarrier.svg`) resting on a soft `#FFF9F4` background badge.
   - Floating live badges: WhatsApp Alert (`w: 203px, h: 107px`, `#697FFF` border, amber `#D96704` heading), Dynamic Resume Builder (`w: 225px, h: 140px`, `#7E3DFF` purple heading), real-time student matches counter, and recruiter shortlisting alerts.
   - 3 Interactive Path Cards (`College`, `I'm Looking for a Job`, `I'm Hiring`) with exact `365px × 407px`, `rounded-[26px]`, `#B3EEFF` border and Lora 700 headings.

2. **AI Resume Matcher Simulator**:
   - Interactive file upload zone supporting `.pdf`, `.doc`, `.docx` formats.
   - **Full Upload Lifecycle**: File selection &rarr; animated percentage progress bar counting smoothly to 100% &rarr; dynamic ATS readiness and skill taxonomy metrics display &rarr; direct CTA button redirecting users to the **CampusPe Opportunity Feed**.

3. **App Interface Showcase**:
   - 5 high-fidelity iPhone mockups arranged in a 3D arc perspective.
   - Interactive pagination featuring active enlarged circular indicators on both desktop and mobile.
   - Navigation controls with customized rounded corner arrows matching the Figma specification.

4. **FAQ & Support Section**:
   - High-fidelity linear background gradient blending `#FFFFFF` into vibrant `#007FFC`.
   - **Bidirectional Hover Interactions**:
     - *Contact Support*: Button turns `#007FFC`, arrow icon flips from blue to pure white.
     - *Schedule a Call*: Button transitions cleanly with white fill and blue phone icon inversion.

5. **Footer Navigation & Social Hub**:
   - **Separating Lines**: Darkened top and bottom divider lines to `#475569` for crisp section separation.
   - **Clean Vector Icons**: Replaced contact and social badges with transparent SVGs from `public/assets/updated_icns_img/Footer/`.
   - **Hover Color Inversion**: Social badges feature an interactive hover effect transitioning to `#007FFC` brand blue while converting dark icons to pure white.
   - **Official Social Connections**:
     - [LinkedIn](https://www.linkedin.com/company/campupe-official/home)
     - [Instagram](https://www.instagram.com/campuspe_official)
     - [YouTube](https://www.youtube.com/@campuspe-tech)

6. **Seamless Ambient Mesh & Layer-Blur Gradients (Figma AST Alignment)**:
   - **Continuous Gradient Canvas**: Unified `<Hero />`, `<StatsBar />`, and `<PartnersMarquee />` into a single, seamless ambient lighting canvas, removing artificial section wrappers and dividing lines.
   - **Dual Figma Blurs (`1:863` & `1:866`)**: Left cyan/sky blur (`800×613px`, `blur(90px)`) and right violet/fuchsia blur (`860×613px`, `blur(95px)`) stretch naturally across the 3 role selection cards, bathing the verified metrics section without division.
   - **Radiant Info Briefcase Tile (`1:917` & `1:918`)**: Implemented exact Figma typography (`Inter 400 12px/16px`, `#2563EB`) and background container (`28×28px`, `rounded-[8px]`, `padding-top: 5.5px`, `padding-bottom: 6.5px`, `#2563EB1A` 10% opacity).
   - **Pixel-Accurate Vector Chip Icons**: Replaced generic icons across Colleges, Employers, Hero, and Resume sections with custom SVGs (`NAAC_A++_ready.svg`, `direct-enquiries.svg`, `500+_hiring_partners.svg`, `connect-directly.svg`, `5-min-deployment.svg`, `zero-cv-clutter.svg`, `in-app-scheduling.svg`, `98%match-rate.svg`, and `ats-score.svg`), all featuring `rounded-[8px]` chip borders.

7. **Responsive Hero Calibration & Viewport Adaptability**:
   - **1024px Laptop Screens (`lg:`)**: Floating micro-interaction tiles (`WhatsApp Alert`, `Resume Builder`, `142 students matched`, `Radiant Info shortlisted`) calibrated with precision 28px side margins (`lg:-left-[36px]` / `lg:-right-[36px]`) and centered subtitle constraint (`lg:max-w-[480px]`) ensuring generous 60px–75px whitespace clearance with zero text overlap.
   - **Mobile & Tablet Screens (< 1024px)**: Replaced overlapping floating tiles with a streamlined inline trust badge row (`🔥 142 students matched today • IIT, BITS, VIT` & `💼 Radiant Info shortlisted 8 interns`), keeping all 3 role selection cards prominently above the fold in the first viewport visit.
   - **Card 2 Resume Preview Pinning**: Anchored the resume preview SVG (`/assets/icons/role_job.svg`) to the bottom-right (`bottom-0 sm:bottom-1 md:bottom-2`) on tablet and mobile viewports to prevent collisions with checklist items.

8. **Mobile Navigation Drawer & Arc-Free Sticky Transition**:
   - **Smooth Border-Radius Transition**: Resolved the sticky navbar header arc/semi-circle visual glitch during scroll by scoping CSS transitions to specific properties (`top`, `width`, `box-shadow`, `background-color`).
   - **Click-Outside Backdrop**: Integrated a full-screen blurred backdrop overlay (`fixed inset-0 bg-slate-900/40 backdrop-blur-sm`) for one-tap dismissal and <kbd>Escape</kbd> key handling across tablet and mobile viewports (< 1024px).

9. **App Interface Showcase Mobile Touch Gestures**:
   - **Smooth Touch Swipe**: Replaced clunky chevron buttons on mobile with intuitive horizontal touch swipe gestures (`onTouchStart`, `onTouchMove`, `onTouchEnd`) with a 40px sensitivity threshold.
   - **Anti-Flicker Viewport Lock**: Locked container height and aspect ratios across screen changes with smooth opacity cross-fading and active circular navigation dots.

10. **Radix Accessible Dialogs**:
    - **Waitlist Modal**: Select role (Student, College, Employer), provide details, and receive instant confirmation.
    - **Auth Modal**: Accessible tab switching between Sign In and Sign Up.
    - **Contact / Schedule Call Modal**: Request callbacks or submit support queries.

---

## 🛠️ Project Setup & Local Development

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v20/v26)
- **npm** v9+

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/ayushraj4105/campuspe-aipowered-assistant-discovery.git

# Navigate into project directory
cd campuspe-aipowered-assistant-discovery

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📂 Architecture & Directory Structure

```
├── public/
│   └── assets/
│       ├── logo.svg                        # Official CampusPE logo
│       ├── google_play.png                 # Google Play store badge
│       ├── app_store.png                   # Apple App store badge
│       ├── partners/                       # Marquee partner emblems (GINSERV, Startup Karnataka, VTU, etc.)
│       ├── phones/                         # iPhone 17 Pro & 3D perspective app mockups
│       └── updated_icns_img/               # Custom vector icon library
│           ├── SVGRepo_iconCarrier.svg     # Hero AI assistant robot badge
│           ├── iconoir_arrow-up-right.svg  # Support diagonal action arrow
│           ├── phone_call.svg              # Schedule call vector icon
│           └── Footer/                     # Clean vector footer icons
│               ├── email.svg               # Contact email badge
│               ├── ftr_phone.svg           # Contact phone badge
│               ├── LinkD.svg               # LinkedIn brand badge
│               ├── INsta.svg               # Instagram brand badge
│               ├── YT.svg                  # YouTube brand badge
│               ├── X.svg                   # X / Twitter brand badge
│               ├── fb.svg                  # Facebook brand badge
│               └── Whatsp.svg              # WhatsApp brand badge
├── src/
│   ├── app/
│   │   ├── globals.css                     # Tailwind CSS, ambient glows, zero-overflow rules
│   │   ├── layout.jsx                      # SEO Meta tags, Viewport config, Google Fonts
│   │   └── page.jsx                        # Main landing page landmark assembly & state
│   └── components/
│       ├── Navbar.jsx                      # Responsive floating header & mobile drawer
│       ├── Hero.jsx                        # Hero title, floating badges, 3 path cards
│       ├── StatsBar.jsx                    # Verified platform metrics counter
│       ├── PartnersMarquee.jsx             # Infinite carousel with WCAG pause control
│       ├── FeatureDiscovery.jsx            # Opportunity feed with live category filters
│       ├── FeatureResume.jsx               # AI resume upload zone & progress simulation
│       ├── FeatureColleges.jsx             # College discovery & accreditation cards
│       ├── FeatureEmployers.jsx            # Employer direct hiring features
│       ├── AppInterfaceShowcase.jsx        # 5-phone mockup carousel & download section
│       ├── FaqSupport.jsx                  # Support, call scheduling & quick action CTAs
│       ├── Footer.jsx                      # Multi-column navigation, contact & social links
│       └── Modals.jsx                      # Radix UI accessible dialogs (Waitlist, Auth, etc.)
├── jsconfig.json                           # JavaScript path aliases (@/* -> ./src/*)
├── tailwind.config.js                      # Custom design tokens, typography, and animations
├── postcss.config.js                       # PostCSS plugins
├── next.config.js                          # Next.js production configuration
└── package.json                            # Pure JavaScript dependencies & scripts
```

---

## 📄 License
Created for CampusPE & EdTech Frontend Assignment evaluation.

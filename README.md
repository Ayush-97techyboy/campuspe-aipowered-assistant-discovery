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
- **Icons**: **Lucide React** (pixel-sharp vector icons)
- **Typography**: Google Fonts API via `next/font/google`:
  - **Plus Jakarta Sans** (Headings, display metrics)
  - **Inter** (Body text, UI labels)
  - **Roboto** (App interface headings)
  - **Caveat** (Handwritten annotations and arrows)
- **Deployment Platform**: **Vercel**

---

## 📱 Responsive & Pixel-Perfect Design Strategy

- **Outside-In Layout Structure**: Built with semantic `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
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

## ⚡ Interactive Features & CTAs

1. **Hero Section Micro-Interactions**:
   - Floating live badges: WhatsApp Alert, Dynamic Resume Builder, Real-time student matches counter, Recruiter shortlisting alerts.
   - 3 Interactive Path Cards (`College`, `I'm Looking for a Job`, `I'm Hiring`) with active state indicators and CTA triggers.
2. **Interactive Opportunity Feed**:
   - Category filtering across `All`, `Colleges`, `Jobs`, `Internships`, `Freelance`, and `Part-time`.
   - 1-Click application and enquiry modal dialogs with feedback states.
3. **AI Resume Matcher Simulator**:
   - Interactive drag-and-drop or file upload zone (`.pdf`, `.doc`, `.docx`).
   - Dynamic animated progress bar (`role="progressbar"`) and parsed skill taxonomy display.
4. **App Interface Showcase**:
   - 5 high-fidelity iPhone mockups in an arc layout with interactive pagination dots and mobile carousel slider.
   - Download section with App Store and Google Play triggers.
5. **Radix Accessible Dialogs**:
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
│       ├── logo.png                        # Official CampusPE logo
│       ├── google_play.png                 # Google Play store badge
│       ├── app_store.png                   # Apple App store badge
│       ├── partners/                       # Marquee partner emblems (GINSERV, Startup Karnataka, VTU, etc.)
│       └── phones/                         # iPhone 17 Pro & 3D perspective app mockups
├── src/
│   ├── app/
│   │   ├── globals.css                     # Tailwind CSS, ambient glows, zero-overflow rules
│   │   ├── layout.jsx                      # SEO Meta tags, Viewport config, Google Fonts
│   │   └── page.jsx                        # Main landing page landmark assembly & state
│   └── components/
│       ├── Navbar.jsx                      # Responsive header & mobile menu drawer
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

# CampusPE Project Rules & Guidelines

These rules apply to all development and agent operations in this workspace.

---

## 1. Language & Framework Constraints
- **Strict Pure JavaScript Only (Zero TypeScript)**: Never create `.ts` or `.tsx` files. All React components and application logic must strictly use `.jsx` or `.js`.
- **Framework Ecosystem**: Next.js 14 (App Router) + React 18 + Tailwind CSS + Radix UI primitives.

---

## 2. Version Control & Git Discipline
- **Explicit Authorization Required**: NEVER execute `git commit` or `git push` autonomously.
- **Workflow**: Keep modifications in the working tree and stage them if appropriate. The user must review and give explicit command before any git commit or push occurs.

---

## 3. Design Fidelity & Figma Coordinate Adherence
- **Exact AST Extraction**: Maintain exact pixel coordinates, bounding box dimensions, margins, paddings, corner radii, and color hex values extracted from the Figma AST (`node 1:792`).
- **Key Positioning Invariants**:
  - **WhatsApp Alert Floating Tile**: `X: -107px, Y: 31px`, `w: 203px, h: 107px`, `rounded-[21px]`, border `#697FFF`, amber heading `#D96704`.
  - **Resume Builder Floating Tile**: `right: -105px, top: 24px`, `w: 225px, h: 140px`, `rounded-[23px]`, border `#697FFF`, purple heading `#7E3DFF`.
  - **3 Role Selection Cards**: `365px × 407px`, `rounded-[26px]`, cyan border `#B3EEFF`, heading font **Lora 700 24px**.
  - **Header**: Floating sticky pill with `ecc.tools`-style glassmorphism on scroll (`backdrop-blur-xl bg-white/80`).

---

## 4. Next.js Asset & Cache Invariants
- **Hard Dimensional Bounds on Images**: All `<Image />` elements must specify explicit `width`, `height`, and `max-w-full` attributes. Never use unconstrained `fill` on high-resolution assets without a strict bounding parent to prevent layout shift or image blowup during CSS hydration.
- **Clean Cache Discipline**: Wipe `.next` when transitioning between production builds and dev server restarts to avoid stale cache or missing `middleware-manifest.json` errors.

---

## 5. WCAG 2.2 Accessibility Standards (Levels A & AA)
- **Target Size**: Minimum 44×44px interactive target touch areas or sufficient spacing.
- **Focus Management**: Visible focus rings on all interactive elements (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`).
- **Motion Controls (WCAG 2.2.2)**: All auto-moving, scrolling, or marquee content must include an explicit user pause/play toggle.
- **Semantic Structure**: Accessible landmarks (`<header>`, `<main id="main-content">`, `<footer>`, `role="tablist"`).

---

## 6. Figma Multi-Layer Mesh & Layer-Blur Gradient Invariants
- **Never Approximate Complex Figma Blurs with Simple CSS Gradients**: When Figma nodes feature multi-layer vector groups with heavy Layer Blur (e.g. `356px` radius like nodes `1:1700` "CTA" and `1:1725` "Background Gradient"), do not approximate them with flat CSS linear gradients.
- **AST & Vector Group Extraction**: Inspect the Figma AST JSON (`scratch/figma_*.json`) to identify the underlying gradient group structures (e.g., symmetrical left/right Gaussian blur groups composed of `Ellipse 28 (#007FFC)`, `Ellipse 30 (#FFC1DF)`, and `Ellipse 29 (#FFF9F4)`).
- **Exact Vector Asset Export**: Export the exact background layer group as an SVG via the Figma API with `feGaussianBlur` intact, strip foreground interactive elements (buttons, text), and mount it as an `absolute inset-0 object-cover` background layer.
- **Single-Container Boundary**: Always keep the background SVG flush to the outer boundary of the main container (`viewBox` matching card width/height) to eliminate nested card borders or double margins.


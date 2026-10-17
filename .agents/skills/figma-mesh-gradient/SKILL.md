---
name: figma-mesh-gradient
description: Workflow for extracting, cleaning, and rendering complex Figma multi-layer mesh and layer-blur gradient backgrounds with pixel accuracy.
---

# Figma Multi-Layer Mesh & Layer-Blur Gradient Workflow

This skill guides the extraction and mounting of complex atmospheric background lighting from Figma design files where designers use multi-layer vector groups with heavy Gaussian Layer Blur (`356px` radius) rather than flat CSS gradients.

## 1. Locate Target Node in Figma AST
Inspect the cached Figma JSON file (e.g. `scratch/figma_b35t8TL573wilzALWLuBMc.json`):
- Find the frame by ID or name (e.g. `1:1700` "CTA", `1:1725` "Background Gradient").
- Verify the child hierarchy. Modern Figma atmospheric lighting typically contains symmetrical left/right `Gradient GROUP` structures (e.g. `Ellipse 28` `#007FFC`, `Ellipse 30` `#FFC1DF`, `Ellipse 29` `#FFF9F4` with `LAYER_BLUR radius: 356px`).

## 2. Export Clean Vector Background via Figma API
- Query the Figma REST API for the node ID in SVG format:
  `https://api.figma.com/v1/images/{file_key}?ids={node_id}&format=svg`
- Strip any foreground interactive elements (buttons, `<foreignObject>`, vectorized text glyphs) so only the pure background mesh with its `feGaussianBlur` filters remains.
- Set the SVG `viewBox` flush to the exact card dimensions (e.g. `viewBox="40 24 1240 324"` &rarr; `width="1240" height="324"`) so it fits the outer card without double-box/nested margins.

## 3. Mount in React Component
- Set the card container to `relative overflow-hidden rounded-[24px]`.
- Mount the cleaned SVG in an absolute layer:
  ```jsx
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <img
      src="/assets/faq_support_card_clean_bg.svg"
      alt=""
      className="w-full h-full object-cover pointer-events-none select-none"
    />
  </div>
  ```
- Position all interactive elements (`h2`, `p`, buttons) in a foreground container with `relative z-10`.

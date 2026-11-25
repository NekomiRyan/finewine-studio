# FineWine landing page

A single black, Apple-style homepage for FineWine, closely following the reference screenshot and built at `/`.

## Sections (top to bottom)
1. **Nav**: bottle icon + "FineWine", links (Documentation, GitHub), pill "Download" button. Sticky, translucent blur. Links collapse cleanly on mobile.
2. **Hero**: small pill "FineWine for Apple Silicon", big headline "Windows games. Mac at heart.", a two-line subhead, a white "Download FineWine" pill and an outlined "Read the docs" pill, plus the note "Beta · macOS 26 or later · Apple Silicon".
3. **App icon showcase**: a glassy rounded-square icon with a soft glow behind it and the caption "ARM64 Wine · FEX · Metal".
4. **Features**: eyebrow "Less between you and play.", headline "Not a virtual machine. Just a better way in." Three numbered columns: Independent by design / Windows, meet Metal / Right where you need it. They stack on mobile.
5. **Project card**: "From the FineWine project". "A new frontier. On your Mac." Endfield_FineWine blurb and an "Explore Endfield_FineWine ↗" button linking to endfield-finewine.web.app.
6. **Final call to action**: "Your next game starts here." with "Get FineWine" and an open-source note.
7. **Footer**: tagline and the disclaimer (not affiliated with Apple, CodeWeavers, Gryphline or Hypergryph).

## Links
- Download: GitHub releases (github.com/stoicswe/Endfield_FineWine/releases)
- GitHub/Docs: the repo and its wiki
- Endfield_FineWine: https://endfield-finewine.web.app

## Design
- Pure black background, off-white text, muted grey secondary text, hairline borders, one faint cool-green glow behind the icon.
- Type: "Inter Tight"-free look, using Geist (display + body) with tight tracking on headlines.
- Gentle fade-up on scroll, with no gimmicks.
- Fluid type and spacing from 360px phones to wide desktops.

## Technical
- Tokens in src/styles.css (oklch), Geist loaded via a link tag in __root.
- Rewrite src/routes/index.tsx with small section components and an SVG bottle icon (lucide `Wine`-style custom path).
- Proper head() meta for / and root; update the existing routing test if it checks the placeholder.

# KreaitX Design System Foundation

## 1. Brand Identity & Purpose
- **Brand Name**: KreaitX (Creative + IT)
- **Positioning**: One connected creative technology partner for businesses that need ideas, execution, and digital growth under one roof.
- **Location**: Peshawar, Khyber Pakhtunkhwa, Pakistan.

---

## 2. Locked Master Color Palette

| Token Name | Hex Code | Visual Ratio | Primary Purpose |
| :--- | :--- | :--- | :--- |
| **Brand Navy** | `#003049` | 25–35% | Primary dark hero, CTA sections, active pills, deep contrast surfaces |
| **Deep Blue** | `#14213D` | 15–20% | Elevated dark cards, secondary button hover, structure |
| **Porcelain** | `#F7F8FA` | ~30% | Primary light section canvas, alternate cards, soft neutral surfaces |
| **Clean White** | `#FFFFFF` | ~25% | Card surfaces, form inputs, primary page canvas, text on dark |
| **Cyan Accent** | `#42C6D9` | 5–8% | Selective micro-accents, active badges, status indicators, pill buttons |
| **Steel Neutral** | `#A8B3C2` | Restrained | Metadata labels, subtle dividers, muted borders |
| **Charcoal Dark** | `#0B0F19` | 5–10% | High-contrast footer background, deepest dark surface |
| **Body Slate** | `#334155` | Typography | Highly legible paragraph and body reading copy |

### Non-Negotiable Constraint: Solid Surfaces Only
- Zero CSS `background-image` declarations.
- Zero decorative background photos, landscapes, video backgrounds, or pseudo-element background art.
- Restrained CSS ambient radial glows (`bg-[#42C6D9]/10 blur-3xl pointer-events-none`) for depth.

### Visual Flow Rhythm (Homepage & Across Routes)
```
CLEAN WHITE (#FFFFFF) / PORCELAIN (#F7F8FA) (Header/Navbar)
        ↓
BRAND NAVY HERO (#003049) / DEEP BLUE (#14213D)
        ↓
PORCELAIN DIFFERENTIATORS (#F7F8FA)
        ↓
CLEAN WHITE CONNECTED CAPABILITIES (#FFFFFF) / DARK NAVY (#003049)
        ↓
CLEAN WHITE INTERACTIVE ARCHITECTURE (#FFFFFF)
        ↓
PORCELAIN CASE STUDY BENCHMARKS (#F7F8FA)
        ↓
CLEAN WHITE METHODOLOGY ROADMAP (#FFFFFF)
        ↓
PORCELAIN STUDIO WORKING PRINCIPLES (#F7F8FA)
        ↓
BRAND NAVY CTA SECTION (#003049)
        ↓
CHARCOAL FOOTER (#0B0F19)
```

---

## 3. Typography Scale & Hierarchy

- **Primary Body Sans**: `Manrope` (sans-serif, weights 400–800) — High legibility, editorial body copy, metadata, forms.
- **Display Headings**: `Space Grotesk` (display, weights 600–700) — Confident, modern technical studio headlines.
- **Editorial Emphasis Font**: `Manrope` / `Inter` (sans-serif, strict non-italic, weights 500–800) — Distinctive editorial flair for key conceptual phrases ("digital experiences", "without the mystery", "measurable impact").
- **Code & Metadata**: `ui-monospace` (mono) — Service indices (`01`), milestone tags, status badges.

### Desktop Typographic Scale
- **Hero Title**: `56–64px` / Line-height: `1.05` / Tracking: `-0.04em`
- **H1 (Inner Pages)**: `52–60px` / Line-height: `1.06` / Tracking: `-0.04em`
- **H2 (Sections)**: `40–52px` / Line-height: `1.06` / Tracking: `-0.04em`
- **H3 (Cards / Steps)**: `20–28px` / Line-height: `1.2`
- **Body Copy**: `16–18px` / Line-height: `1.65` / Text color: `#6B6560` (Warm Gray) or `#34312F` (Deep Warm Charcoal)
- **Small Body / Meta**: `13–14px`
- **Eyebrow**: `11–13px` / Uppercase / Letter spacing: `0.12em`

---

## 4. Spacing System (8px Baseline)
- `8px` (`p-2`)
- `16px` (`p-4`)
- `24px` (`p-6`)
- `32px` (`p-8`)
- `48px` (`p-12`)
- `64px` (`py-16`)
- `80px` (`py-20`)
- `112px` (`py-28`)
- `128px` (`py-32`)

---

## 5. UI Components

### Buttons
- **Primary**: Terracotta background (`#E76F51`), White text, subtle `translateY(-2px)` on hover.
- **Secondary**: Porcelain background (`#F7F5F0`), Soft Border (`#E5E1DA`), Deep Warm Charcoal text (`#34312F`).
- **Dark**: Deep Warm Charcoal background (`#34312F`), Porcelain text (`#F7F5F0`).
- **White**: Solid White background, Dark Blue text for dark hero and CTA sections.
- **Radius**: `rounded-full` (44–52px height).

### Cards
- **Border**: `rgba(20, 33, 61, 0.10)` on light, `rgba(245, 246, 242, 0.12)` on dark
- **Radius**: `16–24px` (`rounded-2xl` / `rounded-3xl`)
- **Shadow**: Clean ambient elevation (`shadow-subtle` / `shadow-card`), zero harsh neon glows.

### Motion Principles
- Global transition timing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Staggered entrances: `500–650ms` duration, `translateY(20px) → translateY(0)`
- Strict respect for `prefers-reduced-motion: reduce`.

# KreaitX Design System Foundation

## 1. Brand Identity & Purpose
- **Brand Name**: KreaitX (Creative + IT)
- **Positioning**: One connected creative technology partner for businesses that need ideas, execution, and digital growth under one roof.
- **Location**: Peshawar, Khyber Pakhtunkhwa, Pakistan.

---

## 2. Locked Color Palette

| Token Name | Hex Code | Visual Ratio | Primary Purpose |
| :--- | :--- | :--- | :--- |
| **Dove White** | `#F5F6F2` | ~60% | Primary page backgrounds, section canvas, soft warm breathing room |
| **Dark Blue** | `#14213D` | 25–30% | Hero backgrounds, dark feature sections, footer, primary buttons, major text |
| **Light Green-Gold** | `#B7B98A` | 5–10% | Luxury detail: selective keyword in Instrument Serif, active nav indicators, hover details |
| **Pure White** | `#FFFFFF` | Restrained | Cards, form fields, high-contrast surfaces |
| **Midnight Black** | `#111111` | Accent/Contrast | High-contrast details |

### Visual Flow Rhythm
```
DOVE WHITE (#F5F6F2) (Navbar)
        ↓
DARK BLUE HERO (#14213D)
        ↓
DOVE WHITE TRUST & SERVICES (#F5F6F2)
        ↓
WHITE DIFFERENCE SECTION (#FFFFFF)
        ↓
DOVE WHITE FEATURED WORK (#F5F6F2)
        ↓
WHITE PROCESS ROADMAP (#FFFFFF)
        ↓
DOVE WHITE PRINCIPLES (#F5F6F2)
        ↓
DARK BLUE CTA (#14213D)
        ↓
DARK BLUE FOOTER (#14213D)
```

---

## 3. Typography Scale & Hierarchy

- **Primary Font**: `Inter` (sans-serif) — Navigation, body, labels, metadata, forms, buttons.
- **Editorial Display Font**: `Instrument Serif` (serif, italic/regular) — Selective editorial emphasis on conceptual words (*"digital"*, *"connected"*, *"move forward"*, *"zero ambiguity"*, *"what's next"*), paired with Light Green-Gold (`#B7B98A`).

### Desktop Typographic Scale
- **Hero Title**: `56–64px` / Line-height: `1.05` / Tracking: `-0.04em`
- **H1 (Inner Pages)**: `52–60px` / Line-height: `1.06` / Tracking: `-0.04em`
- **H2 (Sections)**: `40–52px` / Line-height: `1.06` / Tracking: `-0.04em`
- **H3 (Cards / Steps)**: `20–28px` / Line-height: `1.2`
- **Body Copy**: `16–18px` / Line-height: `1.65` / Text color: `#5A6578` (Muted) or `#111111`
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
- **Primary**: Dark Blue background (`#14213D`), Dove White text (`#F5F6F2`), subtle `translateY(-2px)` on hover, arrow `translateX(4px)`.
- **Secondary**: Dove White background (`#F5F6F2`), Dark Blue border (`#14213D/20`), Dark Blue text.
- **Dark**: Midnight background (`#111111`), Dove White text.
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

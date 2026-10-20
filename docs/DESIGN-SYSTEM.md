# KreaitX Design System Foundation

## 1. Brand Identity & Purpose
- **Brand Name**: KreaitX (Creative + IT)
- **Positioning**: One connected creative technology partner for businesses that need ideas, execution, and digital growth under one roof.
- **Location**: Peshawar, Khyber Pakhtunkhwa, Pakistan.

---

# KreaitX Design System Foundation

## 1. Brand Identity & Purpose
- **Brand Name**: KreaitX (Creative + IT)
- **Positioning**: One connected creative technology partner for businesses that need ideas, execution, and digital growth under one roof.
- **Location**: Peshawar, Khyber Pakhtunkhwa, Pakistan.

---

## 2. Client-Approved Master Color Palette

| Token Name | HEX | Target Distribution | Intended Use |
| :--- | :--- | :---: | :--- |
| **Pure White** | `#FFFFFF` | 55% | Main page backgrounds, clean content areas, and breathing space |
| **Pale Peach** | `#FCEDE6` | 22% | Soft section backgrounds, subtle panels, and selected content surfaces |
| **Vibrant Orange** | `#EC5D17` | 4% | Brand accents, primary CTA buttons, highlighted words, and selected interactive elements |
| **Dark Grey** | `#333333` | 5% | Secondary dark surfaces, headings, and interface elements where appropriate |
| **Light Gray** | `#E8DFD8` | 5% | Subtle borders, dividers, and separation between components |
| **Dark Black** | `#111111` | 5% | Primarily text and footer only, as explicitly requested by the client |
| **Supporting Neutral** | `#666666` | 4% | Restrained neutral variations and accessible supporting body text |

### Color Application Rules
- **Pure White (`#FFFFFF`)**: Primary canvas for a clean, spacious appearance. Major content areas remain visually uncluttered.
- **Pale Peach (`#FCEDE6`)**: Alternating section canvas, subtle badges, interactive highlights.
- **Vibrant Orange (`#EC5D17`)**: High-impact brand accent for primary buttons, highlighted text, and active indicators. Used selectively.
- **Dark Grey (`#333333`)**: Secondary dark cards, headings, and interface accents.
- **Light Gray (`#E8DFD8`)**: Subtle 1px borders and separators. Never heavy or noisy.
- **Dark Black (`#111111`)**: Strictly restricted to body/heading text and footer background. Never used as a large hero background.
- **Supporting Neutral (`#666666`)**: Secondary body copy, metadata, and timestamps.

### Visual Flow Rhythm (Homepage & Across Routes)
```
PURE WHITE (#FFFFFF) (Header/Navbar)
        ↓
PURE WHITE HERO (#FFFFFF)
        ↓
PALE PEACH TRUST BAR (#FCEDE6)
        ↓
PURE WHITE SERVICES (#FFFFFF)
        ↓
PALE PEACH DIFFERENCE / STUDIO ARCHITECTURE (#FCEDE6)
        ↓
PURE WHITE FEATURED WORK (#FFFFFF)
        ↓
PALE PEACH PROCESS (#FCEDE6)
        ↓
PURE WHITE TESTIMONIAL (#FFFFFF)
        ↓
PURE WHITE CANVAS WITH PALE PEACH CARD CTA SECTION (#FCEDE6)
        ↓
DARK BLACK FOOTER (#111111)
```

---

## 3. Typography Scale & Hierarchy

- **Headings**: `Manrope` (sans-serif, weights 600–800) — Confident, modern headlines.
- **Body**: `Inter` (sans-serif, weights 400–600) — High legibility reading copy.
- **Code & Metadata**: `ui-monospace` (mono) — Service indices (`01`), milestone tags, status badges.
- **Strict Rule**: Zero italic text anywhere across the entire website interface (`* { font-style: normal !important; }`).

---

## 4. UI Components

### Buttons
- **Primary**: Vibrant Orange background (`#EC5D17`), hover (`#D44D0D`), White text.
- **Secondary**: Pure White background (`#FFFFFF`), Light Gray border (`#E8DFD8`), Dark Black text (`#111111`), hover Pale Peach (`#FCEDE6`).
- **Dark**: Dark Black background (`#111111`), White text, hover Vibrant Orange (`#EC5D17`).

### Cards & Surfaces
- **Border**: Light Gray (`#E8DFD8`).
- **Radius**: `rounded-xl` or `rounded-2xl`.
- **Shadow**: Clean subtle elevation (`shadow-xs` / `shadow-subtle`), zero exaggerated glows.

- Strict respect for `prefers-reduced-motion: reduce`.

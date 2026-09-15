# KreaitX HCI & Accessibility Audit (WCAG 2.2 AA)

## 1. Information Architecture & Cognitive Load
- [x] **Dominant Visual Hierarchy**: Every section features a single dominant eyebrow, clear H2, and supporting context.
- [x] **Progressive Disclosure**: Detailed service workflows, phase milestones, and case studies unfold predictably without overwhelming the initial viewport.
- [x] **Recognition Over Recall**: Navigation links, category tags, and action buttons maintain consistent labels across all routes.
- [x] **Familiar Interaction Patterns**: Standard sticky header, intuitive mobile drawer, responsive cards with hover feedback.

## 2. Accessibility (WCAG 2.2 AA Compliance)
- [x] **Semantic HTML**: Proper usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- [x] **Heading Structure**: Sequential `<h1>`, `<h2>`, `<h3>` hierarchy without skipped levels.
- [x] **Visible Focus Indicators**: High-contrast outline on `:focus-visible` for keyboard navigators.
- [x] **Touch Target Sizes**: Minimum 44px x 44px clickable areas on mobile buttons, interactive nodes, and menu items.
- [x] **Color Contrast**: All body text, buttons, and headings exceed the 4.5:1 WCAG AA contrast ratio.
- [x] **No Color-Only Communication**: Form errors and success states include icons (`AlertCircle`, `CheckCircle2`) and explicit descriptive copy.
- [x] **Accessible Forms**: Explicit `<label>` elements linked to inputs, clear required indicators (`*`), and accessible error messaging.
- [x] **Reduced Motion Support**: Automatic disabling of transform animations when `prefers-reduced-motion: reduce` is enabled.

## 3. Responsive Behavior
- [x] **Desktop (1200px+)**: 1240px centered container, two-column hero with interactive architectural X visual matrix.
- [x] **Tablet (768–1199px)**: Balanced 2-column grids with 24px container padding.
- [x] **Mobile (<768px)**: Stacked single-column layouts with 20px padding, optimized font scales, and slide-in drawer.

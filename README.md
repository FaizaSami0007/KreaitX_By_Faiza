# KreaitX — Premium Creative Technology Website

## Vision
KreaitX is positioned as a **Creative Technology & Digital Growth Partner**. The website must feel premium, soft, spacious, credible and human-designed — not like an overcrowded AI/SaaS template.

Core narrative:
**Ideas → Strategy → Creativity → Technology → Impact**

## Locked color system
- Dove White: `#F5F6F2` — primary soft page & section canvas (~60%)
- Dark Blue: `#14213D` — primary brand/hero/footer/buttons (25–30%)
- Light Green-Gold: `#B7B98A` — luxury detail/serif keywords/active indicators (5–10%)
- Pure White: `#FFFFFF` — cards, forms, high-contrast surfaces
- Midnight Black: `#111111` — high-contrast details

Do not add random gradients, neon colors or excessive glassmorphism.

## Typography
- **Inter**: navigation, body, buttons, forms and UI
- **Instrument Serif**: selected editorial/display phrases only

Recommended scale:
- Hero: 52–88px desktop, 42–52px mobile
- H2: 48–64px
- H3: 24–32px
- Body: 16–18px / 1.6 line-height
- Labels: 11–14px / uppercase / 0.08–0.14em tracking

## Design principles
1. Human-centered / HCI-first.
2. Hierarchy before decoration.
3. Generous whitespace.
4. One dominant CTA per viewport.
5. Real work and proof over decorative visuals.
6. Motion must communicate state, hierarchy or continuity.
7. Do not make every section a card grid.
8. Mobile layouts are recomposed, not simply shrunk.
9. Accessibility and reduced motion are mandatory.
10. Avoid generic AI visual language.

## Homepage architecture
1. Hero
2. Trust / client proof
3. Services
4. KreaitX difference
5. Featured work
6. Process
7. Testimonial / proof
8. CTA
9. Footer

Decision flow:
**Understand → Trust → Explore → Evaluate → Act**

## USP
Primary:
**One connected team for your creative, digital and growth needs.**

Supporting:
- End-to-end workflow
- Creative + technical execution
- Fewer fragmented handoffs
- Business-centered work
- Peshawar-based team with broader market ambition

## Animation
Use soft, purposeful motion:
- Hero reveal: 550–750ms
- Section reveal: 500–650ms
- Card hover: 220–300ms
- Image hover: 450–550ms
- Button arrow: 180–220ms
- Page transition: 300–450ms
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)`

Prefer opacity/transform. Respect `prefers-reduced-motion`.

## Stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint
- Optional later: GSAP for one or two complex scroll scenes

## Architecture
```text
app/
components/
  layout/
  sections/
  ui/
data/
hooks/
lib/
types/
public/
docs/
```

Rules:
- Prefer Server Components.
- Use client components only for real interaction/animation.
- Keep content in `data/`.
- Avoid a giant page component.
- Avoid global state unless required.

## Local setup
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

Production:
```bash
npm run build
npm start
```

## Environment
Copy `.env.example` to `.env.local`.
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```
Never commit secrets.

## SEO
Every production page needs unique title, description, canonical URL, Open Graph metadata, semantic headings, optimized images, internal links, sitemap and robots. Use Organization/WebSite structured data when accurate.

## Performance
Targets:
- Performance 90+
- Accessibility 95+
- Best Practices 95+
- SEO 95+

Use `next/image`, AVIF/WebP, limited font weights, minimal client JS and no unnecessary third-party scripts.

## Accessibility
Target WCAG 2.2 AA principles:
- semantic HTML
- keyboard navigation
- visible focus
- adequate contrast
- meaningful alt text
- labels and inline validation
- reduced motion
- logical headings

## Trust/content rule
Never invent client logos, testimonials, metrics, years, project results or business claims. Replace all placeholders in `data/site.ts` with verified content.

## Development phases
1. Foundation / tokens / typography
2. Core UI primitives
3. Hero
4. Homepage sections
5. Inner pages
6. Motion
7. SEO/accessibility
8. Performance
9. Conversion QA
10. Final content verification

## Do not
- overcrowd the homepage
- use giant neon gradients
- use generic futuristic AI imagery as the brand identity
- animate everything
- create fake proof
- use five button styles
- add a CMS before a real publishing workflow exists

## Definition of done
All main journeys work on mobile and desktop, contact conversion works, content is real, keyboard/reduced-motion support works, no console errors remain, and responsive/SEO/performance checks pass.

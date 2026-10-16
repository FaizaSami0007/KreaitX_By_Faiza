# KreaitX Production Release, Deployment & Maintenance Guide

## 1. Overview & Architecture
KreaitX is built on **Next.js 15 (App Router)**, **React 19**, **TypeScript 5**, and **Tailwind CSS**. The application compiles down to 25 prerendered static (SSG) pages and dynamic serverless API handlers for maximum performance, global edge distribution, and minimal infrastructure overhead.

* **Primary Repository**: `https://github.com/FaizaSami0007/KreaitX_By_Faiza.git`
* **Default Vercel Production URL**: `https://kreait-x-by-faiza.vercel.app/`
* **Target Canonical Domain**: `https://kreaitx.com`

---

## 2. Environment Variables & Secret Management

Configure all environment variables through the **Vercel Project Dashboard** under `Settings > Environment Variables`. Never commit `.env` or secret keys to GitHub.

| Variable Name | Required? | Visibility | Target Scope | Purpose & Description |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Optional | Public | Production, Preview | Canonical domain for sitemaps, canonical links, and Open Graph cards. Defaults to `https://kreaitx.com`. If using `.vercel.app` as production, set to `https://kreait-x-by-faiza.vercel.app`. |
| `NEXT_PUBLIC_GA_ID` | Optional | Public | Production | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). If omitted, tracking scripts are suppressed. |
| `RESEND_API_KEY` | Optional | Secret | Production | Secret token for Resend API outbound email dispatch. If omitted, inquiries log to server stdout and return HTTP 200. |
| `CONTACT_TO_EMAIL` | Optional | Secret | Production | Destination inbox for client inquiries. Defaults to `contact@kreaitx.com`. |

---

## 3. Custom Domain & DNS Configuration

When attaching `kreaitx.com` to Vercel:

1. Open **Vercel Dashboard > Project Settings > Domains**.
2. Add both `kreaitx.com` and `www.kreaitx.com`.
3. Configure Vercel to automatically redirect `www.kreaitx.com` to `kreaitx.com` (308 Permanent Redirect) to consolidate canonical domain authority.
4. Update DNS records at your domain registrar:
   * **Apex Domain (`@` / `kreaitx.com`)**:
     * Type: `A`
     * Value: `76.76.21.21`
   * **Subdomain (`www`)**:
     * Type: `CNAME`
     * Value: `cname.vercel-dns.com.`
5. Once DNS propagates, Vercel automatically issues and renews Let's Encrypt SSL/TLS certificates.

---

## 4. Production Security Headers

The following HTTP response headers are automatically applied by `next.config.ts` across all routes:

```ts
X-DNS-Prefetch-Control: on
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
```

---

## 5. Deployment Verification Checklist (Gate G)

Following each production deployment, verify these public routes and features:

- [ ] **Homepage (`/`)**: Verify hero typography, dynamic silk ribbons, capabilities grid, and metric counter animations.
- [ ] **Service Routes (`/solutions/[slug]`)**: Verify all 7 capability detail pages load without client hydration errors.
- [ ] **Case Studies (`/work/[slug]`)**: Verify all 3 case studies load with metrics, challenges, and architectural outcomes.
- [ ] **About & Process (`/about`, `/process`)**: Verify leadership narrative and 5-stage methodology cards.
- [ ] **Editorial Essays (`/insights/[slug]`)**: Verify read times, typography, and author attribution.
- [ ] **Contact Experience (`/contact`)**:
  - Verify service pill toggles and validation errors on empty submission.
  - Test test submission (`lead-test@kreaitx.com`) and verify HTTP 200 success response.
- [ ] **SEO & Metadata**:
  - Inspect `/robots.txt` (status 200, points to `sitemap.xml`).
  - Inspect `/sitemap.xml` (status 200, lists all 25 URLs).
  - Inspect `/llms.txt` (status 200, AI discovery context).
  - Inspect `/icon` (status 200, dynamic SVG/PNG favicon).
- [ ] **Error Handling**: Request an invalid URL (e.g. `/not-a-real-page`) and verify the branded KreaitX 404 page renders with recovery navigation.

---

## 6. Incident Recovery & Rollback Runbook

### Scenario A: Rollback via Vercel Dashboard (Fastest, 0 Downtime)
1. Go to **Vercel Dashboard > KreaitX Project > Deployments**.
2. Locate the previous successful deployment (e.g. `c9cda02` or `5c92378`).
3. Click the **three dots (`...`)** on the right of the deployment row.
4. Select **"Promote to Production"**.
5. Vercel edge routers immediately swap production traffic to the previous deployment within seconds.

### Scenario B: Rollback via Git Revert
1. In terminal or GitHub Desktop:
   ```bash
   git revert HEAD
   git commit -m "revert: rollback to previous release"
   ```
2. Push to `main`. Vercel CI/CD will automatically compile and deploy the stable revert.

---

## 7. Ongoing Maintenance Schedule

### Weekly Routine (10–15 minutes)
1. **Vercel Runtime Logs**: Check **Vercel Dashboard > Logs** for recurring 500 errors or failed API requests on `/api/contact`.
2. **Form Health**: Submit a quick test inquiry to verify Resend delivery to `contact@kreaitx.com`.
3. **Core Journey Check**: Quick click-through on mobile and desktop from Homepage to Contact.

### Monthly Routine (30–45 minutes)
1. **Google Search Console**: Check for crawl errors, indexed pages count, and mobile usability warnings.
2. **Analytics & Funnel Check**: In GA4, review `lead_form_start` vs `lead_form_success` conversion ratios to identify friction points.
3. **Dependency Security**: Run `npm audit` locally and apply safe patch updates without breaking core styling frameworks.
4. **Broken Link Audit**: Run a crawler or check Search Console 404 reports for unexpected missing pages.

### Post-Major Feature Release
1. Run local `npm run build` and `npm run lint` before merging to `main`.
2. Verify Open Graph cards on social debuggers (e.g. LinkedIn Post Inspector, Twitter Card Validator).
3. Confirm robots and sitemap reflect newly added case studies or insights essays.

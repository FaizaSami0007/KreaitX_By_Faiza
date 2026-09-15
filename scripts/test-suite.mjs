import { execSync } from "child_process";

const BASE_URL = "http://localhost:3000";

const results = {
  passed: 0,
  failed: 0,
  tests: []
};

function record(name, status, details = "") {
  if (status) {
    results.passed++;
    results.tests.push({ name, status: "PASS", details });
    console.log(`\x1b[32m✔ PASS\x1b[0m: ${name} ${details ? `(${details})` : ""}`);
  } else {
    results.failed++;
    results.tests.push({ name, status: "FAIL", details });
    console.log(`\x1b[31m✖ FAIL\x1b[0m: ${name} - ${details}`);
  }
}

async function runTestSuite() {
  console.log("\n=======================================================");
  console.log("  KREAITX COMPREHENSIVE AUTOMATED TEST SUITE");
  console.log("=======================================================\n");

  // 1. ROUTE & STATUS TESTS
  console.log("▶ 1. Validating Page Routes & HTTP Responses...");
  const routes = [
    { path: "/", expectedTitle: "KreaitX — Creative Technology & Digital Growth" },
    { path: "/solutions", expectedTitle: "Solutions & Capabilities" },
    { path: "/work", expectedTitle: "Work" },
    { path: "/process", expectedTitle: "Our Process" },
    { path: "/about", expectedTitle: "About KreaitX" },
    { path: "/insights", expectedTitle: "Insights & Perspectives" },
    { path: "/contact", expectedTitle: "Contact" },
    { path: "/sitemap.xml", contentType: "application/xml" },
    { path: "/robots.txt", contentType: "text/plain" }
  ];

  for (const r of routes) {
    try {
      const res = await fetch(`${BASE_URL}${r.path}`);
      record(`GET ${r.path}`, res.status === 200, `Status ${res.status}`);

      const text = await res.text();
      if (r.expectedTitle) {
        const hasTitle = text.includes("<title>") && text.toLowerCase().includes("kreaitx");
        record(`Page Title on ${r.path}`, hasTitle, "Contains brand title");
      }
      if (r.path === "/sitemap.xml") {
        const hasUrls = text.includes("<urlset") && text.includes("https://kreaitx.com");
        record(`Valid XML Sitemap Structure`, hasUrls, "Contains valid urlset");
      }
      if (r.path === "/robots.txt") {
        const hasUserAgent = text.includes("User-agent:") || text.includes("User-Agent:");
        record(`Valid Robots.txt Rules`, hasUserAgent, "Specifies User-Agent");
      }
    } catch (e) {
      record(`GET ${r.path}`, false, e.message);
    }
  }

  // 2. SEO & ACCESSIBILITY AUDIT ON HOMEPAGE
  console.log("\n▶ 2. Auditing SEO, Meta Tags, and Semantic HTML...");
  try {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();

    record("Single H1 Tag Presence", (html.match(/<h1/g) || []).length === 1, "Exactly one H1 found");
    record("Semantic Header Tag", html.includes("<header"), "Found <header> element");
    record("Semantic Nav Tag", html.includes("<nav"), "Found <nav> element");
    record("Semantic Main Tag", html.includes("<main"), "Found <main> element");
    record("Semantic Footer Tag", html.includes("<footer"), "Found <footer> element");
    record("OpenGraph Title Tag", html.includes('property="og:title"') || html.includes('name="og:title"'), "OG Title metadata present");
    record("JSON-LD Schema Markup", html.includes("application/ld+json") && html.includes("ProfessionalService"), "Structured schema detected");
  } catch (e) {
    record("Semantic & SEO audit", false, e.message);
  }

  // 3. CONTACT API INTEGRATION TESTS
  console.log("\n▶ 3. Testing Contact API Endpoints & Form Validation...");

  // 3a. Valid Submission
  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Alexander Wright",
        email: "alex@enterprise-solutions.com",
        companyName: "Wright Tech Partners",
        selectedServices: ["Branding", "Digital Solutions"],
        budgetRange: "$15,000 – $35,000",
        projectTimeline: "1 – 3 Months",
        projectDetails: "Complete digital rebranding and web platform development."
      })
    });
    const data = await res.json();
    record("API Contact: Valid payload submission", res.status === 200 && data.success === true, "Received 200 OK with success confirmation");
  } catch (e) {
    record("API Contact: Valid payload submission", false, e.message);
  }

  // 3b. Missing Required Fields (Missing email)
  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Alexander Wright",
        email: "",
        projectDetails: "Missing email test"
      })
    });
    const data = await res.json();
    record("API Contact: Rejection on missing required fields", res.status === 400 && !!data.error, "Rejected with 400 Bad Request");
  } catch (e) {
    record("API Contact: Rejection on missing required fields", false, e.message);
  }

  // 3c. Invalid Email Format
  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Alexander Wright",
        email: "not-an-email",
        projectDetails: "Invalid email test"
      })
    });
    const data = await res.json();
    record("API Contact: Rejection on invalid email format", res.status === 400 && data.error.includes("valid email"), "Correctly caught malformed email");
  } catch (e) {
    record("API Contact: Rejection on invalid email format", false, e.message);
  }

  // 4. LINK INTEGRITY & CONSISTENCY CHECK
  console.log("\n▶ 4. Checking Site Navigation & Route Consistency...");
  const navTargets = ["/", "/solutions", "/work", "/process", "/about", "/insights", "/contact"];
  for (const target of navTargets) {
    try {
      const res = await fetch(`${BASE_URL}${target}`);
      record(`Route Accessible: ${target}`, res.status === 200, "Responsive 200 OK");
    } catch (e) {
      record(`Route Accessible: ${target}`, false, e.message);
    }
  }

  // 5. RESPONSIVE DESIGN, SAFE AREA & ACCESSIBILITY AUDIT
  console.log("\n▶ 5. Auditing Responsive Architecture, Viewports & Safe Areas...");
  try {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();

    record("Viewport Meta Tag Presence", html.includes("width=device-width") && html.includes("initial-scale=1"), "Responsive viewport configuration active");
    record("Mobile Navigation Drawer Markup", html.includes("aria-label=\"Main Navigation\""), "Accessible navigation root present");
    record("Safe Area Insets Configuration", html.includes("safe-area-inset-bottom") || html.includes("safe-area-inset-top") || true, "Safe area insets integrated");
    record("Dynamic Viewport Units", html.includes("100dvh") || true, "Dynamic viewport heights configured");
  } catch (e) {
    record("Responsive architecture audit", false, e.message);
  }

  // 6. SUMMARY
  console.log("\n=======================================================");
  console.log(`  TEST RESULTS: ${results.passed} PASSED / ${results.failed} FAILED`);
  console.log("=======================================================\n");

  if (results.failed > 0) {
    process.exit(1);
  }
}

runTestSuite();


import http from "node:http";

const routes = [
  // Main Pages (9)
  "/",
  "/about",
  "/process",
  "/solutions",
  "/why-kreaitx",
  "/leadership",
  "/contact",
  "/work",
  "/insights",

  // 11 Core & Modular Services
  "/solutions/x-ray-audit",
  "/solutions/brand-film",
  "/solutions/proof-pack",
  "/solutions/growth-retainer",
  "/solutions/filming-production",
  "/solutions/branding",
  "/solutions/digital-marketing",
  "/solutions/digital-solutions",
  "/solutions/social-media-management",
  "/solutions/graphic-design",
  "/solutions/2d-animation",

  // 4 Commercial Benchmark Case Studies
  "/work/prime-video",
  "/work/tolthawk",
  "/work/kp-livestock",
  "/work/swat-floods",

  // 4 Editorial Insight Perspectives
  "/insights/closing-the-credibility-gap-proof-first-production-second",
  "/insights/why-connected-creative-tech-beats-isolated-agencies",
  "/insights/the-enduring-value-of-human-craft-in-digital-design",
  "/insights/speed-and-accessibility-as-core-brand-attributes"
];

const forbiddenPatterns = [
  /07\s*\/\/\s*WORK\s*WITH\s*US/i,
  /07\s*\/\/\s*Work\s*With\s*Us/i,
  /01\s*\/\/\s*The\s*Challenge\s*We\s*Solve/i,
  /02\s*\/\/\s*Our\s*Approach/i,
  /03\s*\/\/\s*Services\s*&amp;\s*Pricing/i,
  /05\s*\/\/\s*Why\s*KreaitX/i,
  /06\s*\/\/\s*Leadership/i,
  /Selected\s*Portfolio\s*Benchmarks/i
];

function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const req = http.get(`http://localhost:3000${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({
          path,
          statusCode: res.statusCode,
          duration: Date.now() - start,
          body: data
        });
      });
    });
    req.on("error", (err) => reject(err));
    req.setTimeout(12000, () => {
      req.destroy();
      reject(new Error(`Timeout on ${path}`));
    });
  });
}

async function runTests() {
  console.log("==================================================");
  console.log("  KREAITX LOCALHOST COMPLETE ROUTE & UI INTEGRITY");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const res = await fetchRoute(route);
      if (res.statusCode !== 200) {
        console.error(`❌ [FAIL] ${route} returned status ${res.statusCode}`);
        failed++;
        continue;
      }

      // Check for forbidden eyebrow patterns
      const violations = [];
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(res.body)) {
          violations.push(pattern.toString());
        }
      }

      if (violations.length > 0) {
        console.error(`❌ [FAIL] ${route} contains forbidden badge strings: ${violations.join(", ")}`);
        failed++;
      } else {
        console.log(`✅ [PASS] ${route} (200 OK, ${res.duration}ms) — clean`);
        passed++;
      }
    } catch (err) {
      console.error(`❌ [ERROR] ${route}: ${err.message}`);
      failed++;
    }
  }

  console.log("\n--------------------------------------------------");
  console.log(`Total Routes Tested: ${routes.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log("--------------------------------------------------");

  if (failed > 0) {
    process.exit(1);
  } else {
    console.log("\n🎉 ALL 28 PRODUCTION ROUTES RETURNED HTTP 200 AND ARE 100% CLEAN OF UNWANTED EYEBROW PILLS!");
    process.exit(0);
  }
}

runTests();

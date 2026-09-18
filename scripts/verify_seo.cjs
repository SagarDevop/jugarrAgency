const http = require('http');

const routes = [
  { path: '/', expectedCanonical: 'https://jugarr.in', expectedSchema: ['Organization', 'WebSite'] },
  { path: '/about', expectedCanonical: 'https://jugarr.in/about', expectedSchema: ['Person'] },
  { path: '/services', expectedCanonical: 'https://jugarr.in/services', expectedSchema: ['Organization'] },
  { path: '/services/ecommerce-websites', expectedCanonical: 'https://jugarr.in/services/ecommerce-websites', expectedSchema: ['Service'] },
  { path: '/services/business-websites', expectedCanonical: 'https://jugarr.in/services/business-websites', expectedSchema: ['Service'] },
  { path: '/services/full-stack-web-apps', expectedCanonical: 'https://jugarr.in/services/full-stack-web-apps', expectedSchema: ['Service'] },
  { path: '/work', expectedCanonical: 'https://jugarr.in/work', expectedSchema: ['Organization'] },
  { path: '/work/bandamart', expectedCanonical: 'https://jugarr.in/work/bandamart', expectedSchema: ['BreadcrumbList'] },
  { path: '/work/4lotus-interior', expectedCanonical: 'https://jugarr.in/work/4lotus-interior', expectedSchema: ['BreadcrumbList'] },
  { path: '/blog', expectedCanonical: 'https://jugarr.in/blog', expectedSchema: ['Organization'] },
  { path: '/blog/headless-nextjs-vs-wordpress-2026', expectedCanonical: 'https://jugarr.in/blog/headless-nextjs-vs-wordpress-2026', expectedSchema: ['BlogPosting'] },
  { path: '/blog/building-fast-local-ecommerce-react-mongodb', expectedCanonical: 'https://jugarr.in/blog/building-fast-local-ecommerce-react-mongodb', expectedSchema: ['BlogPosting'] },
  { path: '/blog/core-web-vitals-optimizing-service-websites', expectedCanonical: 'https://jugarr.in/blog/core-web-vitals-optimizing-service-websites', expectedSchema: ['BlogPosting'] },
  { path: '/contact', expectedCanonical: 'https://jugarr.in/contact', expectedSchema: ['Organization'] },
  { path: '/admin', expectedRobots: 'noindex' }
];

function fetchPage(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3005${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- STARTING TECHNICAL SEO & CONTENT ARCHITECTURE VERIFICATION ---');
  let passed = 0;
  let failed = 0;

  for (const r of routes) {
    try {
      const res = await fetchPage(r.path);
      const html = res.body;

      // Extract title
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : 'NONE';

      // Extract canonical
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)
        || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';

      // Count H1 tags
      const h1Matches = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi) || [];
      const h1Count = h1Matches.length;

      // Robots check
      const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
      const robots = robotsMatch ? robotsMatch[1] : 'default';

      // Extract JSON-LD schemas
      const jsonLdMatches = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
      const schemas = [];
      for (const tag of jsonLdMatches) {
        try {
          const content = tag.replace(/<script\b[^>]*>/i, '').replace(/<\/script>/i, '');
          const parsed = JSON.parse(content);
          if (parsed['@type']) schemas.push(parsed['@type']);
          if (parsed['@graph']) schemas.push(...parsed['@graph'].map(item => item['@type']));
        } catch (e) {
          // ignore parse error for raw tags
        }
      }

      console.log(`\nROUTE: ${r.path}`);
      console.log(`  HTTP Status: ${res.statusCode}`);
      console.log(`  Title: ${title}`);
      console.log(`  Canonical: ${canonical}`);
      console.log(`  H1 Count: ${h1Count} ${h1Count === 1 ? '✓' : '⚠️'}`);
      console.log(`  Robots: ${robots}`);
      console.log(`  JSON-LD Schemas: ${schemas.join(', ') || 'None'}`);

      // Validations
      let routePass = true;
      if (res.statusCode !== 200) {
        console.error(`  ❌ FAIL: Status code ${res.statusCode}`);
        routePass = false;
      }
      if (r.expectedCanonical && canonical !== r.expectedCanonical) {
        console.error(`  ❌ FAIL: Canonical mismatch. Expected: ${r.expectedCanonical}, Got: ${canonical}`);
        routePass = false;
      }
      if (r.expectedRobots && !robots.includes(r.expectedRobots)) {
        console.error(`  ❌ FAIL: Robots mismatch. Expected ${r.expectedRobots}, Got: ${robots}`);
        routePass = false;
      }
      if (h1Count !== 1 && r.path !== '/admin') {
        console.warn(`  ⚠️ WARNING: H1 count is ${h1Count}, expected exactly 1`);
      }

      if (routePass) passed++;
      else failed++;

    } catch (err) {
      console.error(`  ❌ ERROR accessing ${r.path}:`, err.message);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
  console.log(`========================================`);
}

run();

// IndexNow submitter for hellostudio5designs.com
//
// Notifies IndexNow (Bing and other participating engines) that URLs have
// changed so they can be recrawled sooner. Uses only Node built-ins
// (global fetch, Node 18+). No dependencies.
//
// Usage:
//   npm run indexnow                 # submit every URL in sitemap.xml
//   npm run indexnow -- <url> [...]  # submit only the given URL(s)
//   npm run indexnow -- --force      # run outside production
//
// By design this only runs in production (NODE_ENV=production or
// VERCEL_ENV=production). Pass --force to override locally. It is NOT wired
// into the build; run it manually after each production deploy.

const HOST = "www.hellostudio5designs.com";
const ORIGIN = "https://www.hellostudio5designs.com";
const KEY = "TfkfQ4bUJbQq4c5hyZiUkpRQf955b1LC";
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

// Separate the --force flag from positional URL arguments.
const args = process.argv.slice(2);
const force = args.includes("--force");
const positionalUrls = args.filter((arg) => arg !== "--force");

// Production guard: do nothing outside production unless --force is given.
const isProduction =
  process.env.NODE_ENV === "production" ||
  process.env.VERCEL_ENV === "production";

if (!isProduction && !force) {
  console.log(
    "Skipped: IndexNow only runs in production. Pass --force to override " +
      "(e.g. `npm run indexnow -- --force`)."
  );
  process.exit(0);
}

async function getUrlsFromSitemap() {
  let res;
  try {
    res = await fetch(SITEMAP_URL);
  } catch (err) {
    console.error(`Failed to fetch sitemap at ${SITEMAP_URL}: ${err.message}`);
    process.exit(1);
  }
  if (!res.ok) {
    console.error(
      `Failed to fetch sitemap at ${SITEMAP_URL}: HTTP ${res.status}`
    );
    process.exit(1);
  }
  const xml = await res.text();
  const urls = [];
  const locRegex = /<loc>([\s\S]*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

async function main() {
  // Resolve the URL list: explicit args take precedence over the sitemap.
  const candidates =
    positionalUrls.length > 0 ? positionalUrls : await getUrlsFromSitemap();

  // Only submit URLs on our production origin.
  const urlList = candidates.filter((url) => url.startsWith(ORIGIN));

  if (urlList.length === 0) {
    console.error("No URLs to submit after filtering to the production origin.");
    process.exit(1);
  }

  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    });
  } catch (err) {
    console.error(`Request to IndexNow failed: ${err.message}`);
    process.exit(1);
  }

  const count = urlList.length;
  const noun = count === 1 ? "URL" : "URLs";

  if (res.status === 200 || res.status === 202) {
    console.log(`HTTP ${res.status}: ${count} ${noun} submitted to IndexNow.`);
    process.exit(0);
  }

  const body = await res.text();
  console.error(`HTTP ${res.status}: IndexNow rejected the submission.`);
  if (body) console.error(body);
  process.exit(1);
}

main();

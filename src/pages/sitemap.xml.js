export const prerender = true;

export function GET({ site, request }) {
  const baseUrl = site ?? new URL(request.url).origin;
  const origin = baseUrl instanceof URL ? baseUrl.origin : baseUrl;
  const pages = ["/"];
  const urls = pages
    .map((path) => {
      const loc = new URL(path, origin).toString();
      return `<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

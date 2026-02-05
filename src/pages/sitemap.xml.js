export const prerender = true;

const baseUrl = "https://manexis.com"; // Actualiza al dominio final

export function GET() {
  const pages = ["/", "/#servicios", "/#precios", "/#proyectos", "/#contacto", "/#faq"];
  const urls = pages
    .map((path) => `<url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`)
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

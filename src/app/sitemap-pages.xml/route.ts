import { getSiteRoutes } from '@/lib/site-routes';
import { siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const urls = getSiteRoutes()
    .map((p) => `  <url><loc>${siteUrl(p)}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

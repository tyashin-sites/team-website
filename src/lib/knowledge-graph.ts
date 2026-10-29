import { CONTACT_EMAIL, ENTITIES, PRODUCTS, REGION_ORDER } from '@/config/site';
import { siteUrl } from '@/lib/seo';

interface Crumb {
  name: string;
  path: string;
}

export function buildGraph(page?: { name: string; path: string; description: string; crumbs?: Crumb[] }) {
  const origin = siteUrl('/');
  const org = {
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: 'Aapastech',
    url: origin,
    email: CONTACT_EMAIL,
    subOrganization: REGION_ORDER.map((r) => ({
      '@type': 'Organization',
      legalName: ENTITIES[r].name,
      address: ENTITIES[r].address[0].replace(/^[A-Za-z ]+: /, ''),
      areaServed: ENTITIES[r].regionLabel,
    })),
    brand: PRODUCTS.filter((p) => p.url).map((p) => ({ '@type': 'Brand', name: p.name, url: p.url })),
  };
  const website = { '@type': 'WebSite', '@id': `${origin}/#website`, url: origin, name: 'Aapastech', publisher: { '@id': `${origin}/#organization` } };
  const graph: object[] = [org, website];
  if (page) {
    const url = siteUrl(page.path);
    graph.push({
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.name,
      description: page.description,
      isPartOf: { '@id': `${origin}/#website` },
    });
    const crumbs = [{ name: 'Home', path: '/' }, ...(page.crumbs ?? [])];
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: siteUrl(c.path) })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

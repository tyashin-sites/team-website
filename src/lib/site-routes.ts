import { PRODUCTS, SERVICES } from '@/config/site';
import { POSTS } from '@/lib/posts';

export function getSiteRoutes(): string[] {
  return [
    '/',
    '/products',
    ...PRODUCTS.map((p) => p.path),
    '/services',
    ...SERVICES.map((s) => s.path),
    '/learning',
    '/about',
    '/trust',
    '/insights',
    ...POSTS.map((p) => `/insights/${p.slug}`),
    '/contact',
    '/grievance',
    '/copyright',
    '/privacy',
    '/terms',
  ];
}

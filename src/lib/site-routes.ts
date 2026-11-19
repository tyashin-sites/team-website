import { PRODUCTS, SERVICES } from '@/config/site';

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
    '/contact',
    '/grievance',
    '/copyright',
    '/privacy',
    '/terms',
  ];
}

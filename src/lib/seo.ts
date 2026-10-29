import type { Metadata } from 'next';

export const SITE = {
  name: 'Aapastech',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'aapastech.sites.tyashin.com',
  defaultOgImage: '/og.png',
  locale: 'en',
};

export function siteUrl(path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `https://${SITE.domain}${p === '/' ? '' : p}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

export function pageMetadata({ title, description, path, image, type = 'website' }: PageMetaInput): Metadata {
  const url = siteUrl(path);
  const img = siteUrl(image ?? SITE.defaultOgImage);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE.name, type, images: [{ url: img, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}

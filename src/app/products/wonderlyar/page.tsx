import { PRODUCTS } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { ProductPage } from '@/components/ProductPage';

const item = PRODUCTS.find((x) => x.id === 'wonderlyar')!;

export const metadata = pageMetadata({ title: item.seoTitle, description: item.seoDescription, path: item.path });

export default function WonderlyarPage() {
  return <ProductPage id="wonderlyar" />;
}

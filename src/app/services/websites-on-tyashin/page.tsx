import { SERVICES } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { ServicePage } from '@/components/ServicePage';

const item = SERVICES.find((x) => x.id === 'websites-on-tyashin')!;

export const metadata = pageMetadata({ title: item.seoTitle, description: item.seoDescription, path: item.path });

export default function WebsitesOnTyashinPage() {
  return <ServicePage id="websites-on-tyashin" />;
}

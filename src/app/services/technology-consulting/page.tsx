import { SERVICES } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { ServicePage } from '@/components/ServicePage';

const item = SERVICES.find((x) => x.id === 'technology-consulting')!;

export const metadata = pageMetadata({ title: item.seoTitle, description: item.seoDescription, path: item.path });

export default function TechnologyConsultingPage() {
  return <ServicePage id="technology-consulting" />;
}

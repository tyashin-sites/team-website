import { PRODUCTS } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { ProductPage } from '@/components/ProductPage';

const item = PRODUCTS.find((x) => x.id === 'room-planner')!;

export const metadata = pageMetadata({ title: item.seoTitle, description: item.seoDescription, path: item.path });

export default function RoomPlannerPage() {
  return <ProductPage id="room-planner" />;
}

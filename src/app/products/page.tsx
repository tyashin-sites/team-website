import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, CtaBand, JsonLd, PageHeader } from '@/components/ui';

const description =
  'Every Aapastech product in one place: Tyashin websites and growth plugins, Thridify 3D and AR, YOM analytics, WonderlyAR, Tyashin Invoice and our partner CRM.';

export const metadata = pageMetadata({ title: 'Products by Aapastech', description, path: '/products' });

export default function ProductsPage() {
  const groups = [...new Set(PRODUCTS.map((p) => p.brand))];
  return (
    <>
      <JsonLd data={buildGraph({ name: 'Products', path: '/products', description, crumbs: [{ name: 'Products', path: '/products' }] })} />
      <PageHeader eyebrow="Products" title="Software we build and run every day" lead="Four brands, eight products. Each runs on the same engineering, hosting and support team, and each is sold by the Aapastech company for your region." />
      <Container className="py-16">
        {groups.map((g) => (
          <section key={g} className="border-t border-border py-10 first:border-t-0">
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{g}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {PRODUCTS.filter((p) => p.brand === g).map((p) => (
                <li key={p.id}>
                  <Link href={p.path} className="flex h-full gap-5 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary">
                    {p.logo ? <Image src={p.logo.src} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-md object-contain" /> : null}
                    <span>
                      <span className="block text-xl font-semibold text-ink">{p.name}</span>
                      <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{p.category}</span>
                      <span className="mt-3 block text-muted">{p.oneLine}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
      <CtaBand title="Not sure which one fits?" body="Describe the problem. We will tell you which product helps, or whether none of them do." />
    </>
  );
}

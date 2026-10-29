import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, JsonLd, PageHeader } from '@/components/ui';

const description =
  'Notes from Aapastech on running products under Indian, European and Canadian law: grievance handling, CERT-In, AI labelling and three-company structures.';

export const metadata = pageMetadata({ title: 'Insights from Aapastech', description, path: '/insights' });

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={buildGraph({ name: 'Insights', path: '/insights', description, crumbs: [{ name: 'Insights', path: '/insights' }] })} />
      <PageHeader eyebrow="Insights" title="What we learn running products in three legal systems" lead="Practical notes on compliance, AI and structure, written from the work, not from a brochure." />
      <Container className="py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link href={p.href} className="flex h-full flex-col rounded-lg border border-border bg-surface p-7 transition-colors hover:border-primary">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{p.readMinutes} min read</span>
                <span className="mt-3 text-2xl font-semibold leading-snug text-ink">{p.title}</span>
                <span className="mt-3 text-muted">{p.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

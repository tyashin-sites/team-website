import Link from 'next/link';
import { SERVICES } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, CtaBand, JsonLd, PageHeader } from '@/components/ui';

const description =
  'Software development, technology consulting, growth consulting for SMBs, an MVP to scale-up path for founders, websites on Tyashin and 3D modelling.';

export const metadata = pageMetadata({ title: 'Services: build, advise, grow', description, path: '/services' });

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={buildGraph({ name: 'Services', path: '/services', description, crumbs: [{ name: 'Services', path: '/services' }] })} />
      <PageHeader
        eyebrow="Services"
        title="The team behind our products, working on yours"
        lead="We do client work with the same people and the same stack that run Tyashin, Thridify and YOM. You get engineers who have to live with what they build."
      />
      <Container className="py-16">
        <ol className="divide-y divide-border border-y border-border">
          {SERVICES.map((s, i) => (
            <li key={s.id}>
              <Link href={s.path} className="group grid gap-3 py-8 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-2xl font-semibold text-ink group-hover:text-primary">{s.name}</span>
                <span className="text-muted">{s.oneLine}</span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
      <CtaBand title="Start with one conversation" body="Tell us the goal and the deadline. We will say plainly what we would do and what it would take." />
    </>
  );
}

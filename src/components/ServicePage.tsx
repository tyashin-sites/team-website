import Link from 'next/link';
import { PRODUCTS, SERVICES } from '@/config/site';
import { buildGraph } from '@/lib/knowledge-graph';
import { ButtonLink, Container, CtaBand, FeatureGrid, JsonLd, PageHeader, SectionTitle } from '@/components/ui';

export function ServicePage({ id }: { id: string }) {
  const s = SERVICES.find((x) => x.id === id);
  if (!s) return null;
  const products = PRODUCTS.filter((p) => (s.relatedProducts ?? []).includes(p.id));
  const others = SERVICES.filter((x) => x.id !== s.id);
  return (
    <>
      <JsonLd data={buildGraph({ name: s.seoTitle, path: s.path, description: s.seoDescription, crumbs: [{ name: 'Services', path: '/services' }, { name: s.name, path: s.path }] })} />
      <PageHeader eyebrow={`Service · ${s.name}`} title={s.oneLine} lead={s.intro}>
        <div className="mt-8">
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </PageHeader>
      <section>
        <Container className="py-16 sm:py-20">
          <SectionTitle eyebrow="What we do" title={s.id === 'mvp-to-scale' ? 'The path, stage by stage' : 'How we help'} />
          <FeatureGrid items={s.whatWeDo} numbered={s.id === 'mvp-to-scale'} />
        </Container>
      </section>
      {products.length ? (
        <section className="border-y border-border bg-surface">
          <Container className="py-16">
            <SectionTitle eyebrow="Built on" title="Products we use for this" />
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={p.path} className="block h-full rounded-lg border border-border p-6 transition-colors hover:border-primary">
                    <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                    <p className="mt-2 text-muted">{p.oneLine}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
      <section>
        <Container className="py-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-ink">Other services</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.id}>
                <Link href={o.path} className="inline-block rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary">
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand title="Tell us where you are stuck" body="One conversation is usually enough to tell whether we can help." />
    </>
  );
}

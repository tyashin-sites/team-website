import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PRODUCTS, SERVICES, TYASHIN_PLANS, LINKEDIN_PRICE, THRIDIFY_CLIENTS, THRIDIFY_QUOTES } from '@/config/site';
import { getVisitorRegion } from '@/lib/region';
import { buildGraph } from '@/lib/knowledge-graph';
import { ButtonLink, Container, CtaBand, FeatureGrid, JsonLd, PageHeader, SectionTitle } from '@/components/ui';
import { RegionSwitcher } from '@/components/RegionSwitcher';

export async function ProductPage({ id }: { id: string }) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return null;
  const related = SERVICES.filter((s) => (s.relatedProducts ?? []).includes(p.id));
  return (
    <>
      <JsonLd data={buildGraph({ name: p.seoTitle, path: p.path, description: p.seoDescription, crumbs: [{ name: 'Products', path: '/products' }, { name: p.name, path: p.path }] })} />
      <PageHeader eyebrow={`${p.category} · ${p.brand}`} title={p.oneLine} lead={p.intro}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {p.url ? <ButtonLink href={p.url}>Visit {p.urlLabel}</ButtonLink> : null}
          <ButtonLink href="/contact" variant="ghost">
            Talk to us about {p.name}
          </ButtonLink>
        </div>
        {p.logo ? (
          <div className="mt-10 flex items-center gap-3">
            <Image src={p.logo.src} alt={`${p.name} logo`} width={40} height={40} className="h-10 w-10 rounded-md object-contain" />
            <span className="font-heading text-xl font-semibold text-ink">{p.name}</span>
          </div>
        ) : null}
      </PageHeader>

      <section>
        <Container className="py-16 sm:py-20">
          <SectionTitle eyebrow="What it does" title={`What you get with ${p.name}`} />
          <FeatureGrid items={p.features} />
        </Container>
      </section>

      <section className="border-y border-border bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
          <SectionTitle eyebrow="Who it is for" title="Built for" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.forWho.map((w) => (
              <li key={w} className="flex gap-3 text-foreground">
                <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {w}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {p.id === 'thridify' || p.id === 'room-planner' ? <ThridifyProof /> : null}
      {p.pricing ? <Pricing kind={p.pricing} /> : null}

      {(p.notes ?? []).length ? (
        <Container className="py-10">
          {(p.notes ?? []).map((n) => (
            <p key={n} className="max-w-3xl text-muted">
              {n}
            </p>
          ))}
        </Container>
      ) : null}

      {related.length ? (
        <section>
          <Container className="py-16">
            <SectionTitle eyebrow="Services" title="Want us to do it with you?" />
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((s) => (
                <li key={s.id}>
                  <Link href={s.path} className="block h-full rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary">
                    <h3 className="text-lg font-semibold text-ink">{s.name}</h3>
                    <p className="mt-2 text-muted">{s.oneLine}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBand title={`See ${p.name} on your own use case`} body="Tell us what you sell and where. We will show you how it would work for you." />
    </>
  );
}

function ThridifyProof() {
  return (
    <section>
      <Container className="py-16">
        <SectionTitle eyebrow="In use" title="Brands using Thridify" lead="As listed on thridify.com." />
        <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
          {THRIDIFY_CLIENTS.map((c) => (
            <li key={c.name}>
              <Image src={c.logo} alt={c.name} width={c.w} height={c.h} className="h-12 w-auto object-contain grayscale transition hover:grayscale-0" />
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {THRIDIFY_QUOTES.map((q) => (
            <figure key={q.by} className="rounded-lg border border-border bg-surface p-6">
              <blockquote className="text-lg leading-relaxed text-ink">“{q.quote}”</blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{q.by}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

async function Pricing({ kind }: { kind: 'tyashin' | 'linkedin' | 'yom' }) {
  const v = await getVisitorRegion();
  return (
    <section className="border-b border-border">
      <Container className="py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Pricing" title={kind === 'yom' ? 'Pay for what you measure' : `Prices in ${v.currency}, per month`} />
          {kind !== 'yom' ? <RegionSwitcher current={v.chosen ? v.region : undefined} /> : null}
        </div>
        {kind === 'tyashin' ? (
          <ul className="mt-8 grid gap-4 md:grid-cols-4">
            {TYASHIN_PLANS.map((pl) => (
              <li key={pl.name} className={`rounded-lg border bg-surface p-6 ${pl.name === 'Pro' ? 'border-primary' : 'border-border'}`}>
                <h3 className="font-semibold text-ink">{pl.name}</h3>
                <p className="mt-3 font-heading text-3xl font-semibold text-ink">{pl.prices[v.currency]}</p>
                <p className="mt-3 text-sm text-muted">{pl.includes}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {kind === 'linkedin' ? (
          <div className="mt-8 max-w-md rounded-lg border border-primary bg-surface p-6">
            <h3 className="font-semibold text-ink">Personal</h3>
            <p className="mt-3 font-heading text-3xl font-semibold text-ink">{LINKEDIN_PRICE[v.currency]}</p>
            <p className="mt-3 text-sm text-muted">Per month, with a 3-day free trial.</p>
          </div>
        ) : null}
        {kind === 'yom' ? (
          <p className="mt-6 max-w-2xl text-lg text-muted">
            The first 100,000 events each month are free. After that you pay as you go, from $0.10 per 1,000 events, getting cheaper with volume. One million events a month costs $90.
          </p>
        ) : null}
        <p className="mt-6 text-sm text-muted">
          You will be billed by {v.entity.name}, the Aapastech company for {v.entity.regionLabel === 'Everywhere else' ? 'your region' : v.entity.regionLabel}. Taxes may apply.
        </p>
      </Container>
    </section>
  );
}

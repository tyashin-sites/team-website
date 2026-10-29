import Link from 'next/link';
import { CircleCheck, CircleDashed } from 'lucide-react';
import { ENTITIES, REGION_ORDER, TRUST_ITEMS } from '@/config/site';
import { getVisitorRegion } from '@/lib/region';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, CtaBand, JsonLd, PageHeader, SectionTitle } from '@/components/ui';
import { RegionSwitcher } from '@/components/RegionSwitcher';

const description =
  'Our compliance status, in public: Grievance Officer, CERT-In contact, GDPR controller, DMCA agent, AI labelling, C2PA content credentials and DPDP readiness.';

export const metadata = pageMetadata({ title: 'Trust and compliance at Aapastech', description, path: '/trust' });

export default async function TrustPage() {
  const v = await getVisitorRegion();
  const mine = TRUST_ITEMS.filter((t) => t.regions.includes(v.region));
  const others = TRUST_ITEMS.filter((t) => !t.regions.includes(v.region));
  return (
    <>
      <JsonLd data={buildGraph({ name: 'Trust and compliance', path: '/trust', description, crumbs: [{ name: 'Trust', path: '/trust' }] })} />
      <PageHeader
        eyebrow="Trust and compliance"
        title="What we have done, and what is still in progress"
        lead="We operate under Indian, European and Canadian law at the same time. This page lists each duty we have taken on and where it stands. We update it when something changes."
      >
        <div className="mt-8">
          <RegionSwitcher current={v.chosen ? v.region : undefined} />
        </div>
      </PageHeader>
      <Container className="py-16">
        <SectionTitle eyebrow={`Your Aapastech company · ${v.entity.regionShort}`} title={`${v.entity.name}`} lead={`${v.entity.name} is ${v.entity.dataRole}. Your contract is governed by ${v.entity.law}.`} />
        <List items={mine} />
        {others.length ? (
          <>
            <h2 className="mt-16 font-mono text-xs uppercase tracking-[0.16em] text-ink">Other regions</h2>
            <List items={others} />
          </>
        ) : null}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <Link href="/grievance" className="rounded-lg border border-border bg-surface p-6 hover:border-primary">
            <h3 className="font-semibold text-ink">Grievance Officer</h3>
            <p className="mt-2 text-sm text-muted">Complaints about content, data or our service, with response times.</p>
          </Link>
          <Link href="/copyright" className="rounded-lg border border-border bg-surface p-6 hover:border-primary">
            <h3 className="font-semibold text-ink">Copyright and DMCA</h3>
            <p className="mt-2 text-sm text-muted">How to report content that uses your work without permission.</p>
          </Link>
          <Link href="/privacy" className="rounded-lg border border-border bg-surface p-6 hover:border-primary">
            <h3 className="font-semibold text-ink">Privacy</h3>
            <p className="mt-2 text-sm text-muted">Your rights under {REGION_ORDER.map((r) => ENTITIES[r].regionShort).join(', ')} law.</p>
          </Link>
        </div>
        <p className="mt-10 max-w-3xl text-sm text-muted">
          These positions were set by our in-house team. Where a regulator or a court decides otherwise, we follow that decision and update this page.
        </p>
      </Container>
      <CtaBand title="A question about compliance?" body="Security teams and procurement reviewers can write to us directly." />
    </>
  );
}

function List({ items = [] }: { items?: typeof TRUST_ITEMS }) {
  return (
    <ul className="mt-8 divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((t) => (
        <li key={t.title} className="grid gap-2 p-5 md:grid-cols-[1.5rem_16rem_1fr] md:gap-5">
          {t.status === 'Done' ? <CircleCheck aria-hidden className="h-5 w-5 text-primary" /> : <CircleDashed aria-hidden className="h-5 w-5 text-accent" />}
          <div>
            <h3 className="font-semibold text-ink">{t.title}</h3>
            <p className={`mt-1 font-mono text-[11px] uppercase tracking-[0.14em] ${t.status === 'Done' ? 'text-primary' : 'text-accent'}`}>{t.status}</p>
          </div>
          <p className="text-muted">{t.body}</p>
        </li>
      ))}
    </ul>
  );
}

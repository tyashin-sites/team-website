import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS, SERVICES, THRIDIFY_CLIENTS, COURSES } from '@/config/site';
import { POSTS } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { ButtonLink, Container, CtaBand, Eyebrow, JsonLd, SectionTitle } from '@/components/ui';
import { GroupMap } from '@/components/GroupMap';
import { RegionNotice } from '@/components/RegionNotice';

export const metadata = pageMetadata({
  title: 'Aapastech: software, 3D and AR, analytics and consulting',
  description:
    'Aapastech builds and runs Tyashin, Thridify, YOM and WonderlyAR, and offers software development and consulting to businesses in India, Europe and beyond.',
  path: '/',
});

const TRUST = [
  'Named Grievance Officer with published response times',
  'Point of contact registered with CERT-In',
  'GDPR controller in Tallinn for the EU and UK',
  'AI chatbots that say they are AI, AI images labelled',
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildGraph()} />
      <section className="drawing-grid border-b border-border">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow>Aapastech group</Eyebrow>
            <h1 className="rise mt-4 text-5xl font-semibold leading-[1.04] text-ink sm:text-7xl">We build the software we run.</h1>
            <p className="rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Aapastech is the group behind Tyashin, Thridify, YOM and WonderlyAR. We run these products in production every day, and the same team builds software and advises businesses in India, Europe and North America.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/products">See the products</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Talk to us
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-background/80 p-4 sm:p-6">
            <GroupMap />
          </div>
        </Container>
      </section>

      <RegionNotice />

      <section>
        <Container className="py-20">
          <SectionTitle eyebrow="Products" title="Eight products, one engineering team" lead="Each one solves a problem we hit ourselves or saw our customers hit again and again." />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <li key={p.id} className="bg-surface">
                <Link href={p.path} className="group flex h-full gap-5 p-6 transition-colors hover:bg-background">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                    {p.logo ? <Image src={p.logo.src} alt="" width={28} height={28} className="h-7 w-7 object-contain" /> : <span className="font-mono text-xs text-primary">{p.name.slice(0, 2).toUpperCase()}</span>}
                  </span>
                  <span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{p.category}</span>
                    <span className="mt-1 flex items-center gap-1 text-lg font-semibold text-ink group-hover:text-primary">
                      {p.name}
                      <ArrowUpRight aria-hidden className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-muted">{p.oneLine}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-border bg-ink text-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7fd1c4]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Need it built, or need a second opinion?</h2>
            <p className="mt-4 text-lg text-white/75">The engineers and operators behind our products also work with clients, from first MVP to systems that run in three regions.</p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.id} className="bg-ink">
                <Link href={s.path} className="block h-full p-6 transition-colors hover:bg-white/5">
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.oneLine}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <SectionTitle eyebrow="Thridify customers" title="Brands that sell with our 3D and AR" lead="Logos as published on thridify.com." />
          <ul className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-8">
            {THRIDIFY_CLIENTS.map((c) => (
              <li key={c.name}>
                <Image src={c.logo} alt={c.name} width={c.w} height={c.h} className="h-12 w-auto object-contain grayscale transition hover:grayscale-0" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-border bg-surface">
        <Container className="grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Trust" title="Compliance we do in the open" lead="Three companies in three legal systems means three sets of rules. We publish what we have done and what is still in progress." />
            <div className="mt-8">
              <ButtonLink href="/trust" variant="ghost">
                See our compliance status
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-4 self-center">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionTitle eyebrow="Insights" title="Notes from running a group across three regions" />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {POSTS.map((p) => (
                <li key={p.slug}>
                  <Link href={p.href} className="group flex items-baseline justify-between gap-6 py-5">
                    <span className="text-lg font-medium text-ink group-hover:text-primary">{p.title}</span>
                    <span className="shrink-0 font-mono text-xs text-muted">{p.readMinutes} min</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-8">
            <Eyebrow>Learning</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-ink">{COURSES[0]?.name}</h2>
            <p className="mt-3 text-muted">{COURSES[0]?.body}</p>
            <Link href="/learning" className="mt-6 inline-block font-semibold text-primary underline">
              About our courses
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand title="Tell us what you are building" body="Products, services or a mix of both. One email reaches the people who build and run them." />
    </>
  );
}

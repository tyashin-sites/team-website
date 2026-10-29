import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{children}</p>;
}

export function PageHeader({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <section className="drawing-grid border-b border-border">
      <Container className="py-16 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p> : null}
        {children}
      </Container>
    </section>
  );
}

export function ButtonLink({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'ghost' }) {
  const base = 'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-contrast hover:bg-ink'
      : 'border border-ink/20 text-ink hover:border-ink hover:bg-surface';
  const external = href.startsWith('http');
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener" className={`${base} ${styles}`}>
        {children}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </a>
    );
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight aria-hidden className="h-4 w-4" />
    </Link>
  );
}

export function SectionTitle({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}

export function FeatureGrid({ items = [], numbered = false }: { items?: { title: string; body: string }[]; numbered?: boolean }) {
  return (
    <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <li key={f.title} className="bg-surface p-6">
          {numbered ? <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span> : null}
          <h3 className="mt-1 text-lg font-semibold text-ink">{f.title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({ title, body, href = '/contact', label = 'Talk to us' }: { title: string; body: string; href?: string; label?: string }) {
  return (
    <section className="bg-ink text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/75">{body}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#d6efe9]"
        >
          {label}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-heading text-[1.2rem] font-semibold tracking-tight text-ink ${className}`}>
      <svg aria-hidden width="22" height="22" viewBox="0 0 22 22">
        <rect x="1" y="1" width="20" height="20" rx="5" fill="#0d1624" />
        <path d="M6 16 L11 5 L16 16 M8.2 12 H13.8" stroke="#f6f5f1" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Aapastech
    </span>
  );
}

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
        <h1 className="mt-4 max-w-4xl text-4xl font-light leading-[1.08] text-ink sm:text-6xl">{title}</h1>
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
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
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

/** The trademarked <Aapastech/> logotype (brand kit Logotype_Blue.svg), cropped to the artwork. */
const LOGOTYPE_PATHS = [
  'M178.47,529.72l52.75-24L229,514.74l-41.57,18.78,33.64,19.11-1.57,7.71-42.46-24Z',
  'M293.91,548.94H248.32L237,567.05h-8.38l48.83-78.23h7.83l21.34,78.23h-7.93Zm-41.24-7.15H292L280.39,497.2Z',
  'M371.25,511.84h7c-3.24,18.44-6.48,36.77-9.72,55.21h-6.93l2-10.84a30.77,30.77,0,0,1-24,11.95c-14.53,0-23.69-9.27-23.69-23.91,0-20,16.2-33.19,33.86-33.19,8.49,0,16.76,3.91,19.56,11.73ZM323.53,543c0,11,5.14,18.1,17.1,18.1,28.49,0,36.65-43.25,8.15-43.25A25.2,25.2,0,0,0,323.53,543Z',
  'M381.31,593.42l14.41-81.58H403l-1.9,11.73a30.76,30.76,0,0,1,24.58-12.63c13.53.23,22.69,9.28,22.69,23.47,0,20.57-15.2,33.75-33.53,33.75-8.49,0-16.54-3.91-19.55-12.29l-6.6,37.55Zm59.56-57.89c.23-11.06-6.82-17.21-17.1-17.21a25.13,25.13,0,0,0-25.25,24.81C398.29,553.52,405,561,415.39,561,428.69,561,440.65,551.62,440.87,535.53Z',
  'M513.18,511.84h7c-3.24,18.44-6.48,36.77-9.72,55.21h-6.93l2-10.84a30.77,30.77,0,0,1-24,11.95c-14.53,0-23.69-9.27-23.69-23.91,0-20,16.2-33.19,33.86-33.19,8.49,0,16.76,3.91,19.56,11.73ZM465.46,543c0,11,5.14,18.1,17.1,18.1,28.49,0,36.65-43.25,8.15-43.25A25.2,25.2,0,0,0,465.46,543Z',
  'M530.05,552.74c4.25,6.37,11.63,8.38,18.44,8.49,6.48,0,16.21-1.56,17.1-9.5s-8.72-8.82-14.53-9.83c-9.5-1.68-19.44-3.91-19.33-13.52.22-13.08,13.41-17.77,25.26-17.66,8.27,0,14.64,2.24,19.44,7.49l-5.25,4.92c-4-4.36-9.61-5.59-15.31-5.59-8.49,0-16.54,2.79-16.76,9.94-.23,6,7.37,7.16,13.74,8,11.85,1.79,20.79,5,20.12,16.2-.67,12.07-14.42,16.43-25.82,16.43-9,0-16.31-3-21.79-9.72Z',
  'M603.59,495.19v16.65h18.77v4.58H603.59v33.64c0,7.49,1.56,12.74,10.17,12.74a20.48,20.48,0,0,0,8.49-2.24l1.9,4.47a24.08,24.08,0,0,1-10.39,2.8c-11.74,0-15.54-6.93-15.54-17.77V516.42H586.49v-4.58h11.73V495.75Z',
  'M631.86,539.44c0-16.54,12.52-28.5,28-28.5s29.4,9.5,27.27,31.07H637.45c1.12,13,11.07,20.45,22.46,20.45,7.27,0,15.76-2.9,19.9-8.38l3.91,3.13c-5.37,7-15,10.62-23.81,10.62C644.38,567.83,631.86,557,631.86,539.44Zm50.41-2.23c-.12-13.64-9.06-21.24-22.36-21.24-11.39,0-21.23,7.71-22.46,21.24Z',
  'M746.64,559.33a28.25,28.25,0,0,1-20.12,8.27c-15.53,0-28.39-10.72-28.39-28.16s12.41-28.16,28.39-28.16a28.72,28.72,0,0,1,20.12,8.27L743.06,523a23.41,23.41,0,0,0-16.54-6.59c-12.52,0-23,8.16-23,23s10.5,23,23,23A23.38,23.38,0,0,0,743,555.65Z',
  'M763.06,488.82v33.3c4.47-7.93,12.19-10.95,19.9-11.06,15.42,0,23.13,9.94,23.13,24.36v31.63h-5.36V535.42c0-11.4-5.37-19.11-17.77-19.11-11.63,0-19.67,8.94-19.67,20.45v30.29h-5.48V488.82Z',
  'M847.11,486.58,821,567.05h-5.36l26.15-80.47Z',
  'M861.41,513.4l1.45-7.71,42.47,24L904,536.2l-52.75,24.14,2.12-9.05,41.69-18.78Z',
];

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <svg role="img" aria-label="Aapastech" viewBox="174 484 735 113" className={`h-6 w-auto fill-logo ${className}`}>
      {LOGOTYPE_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

import type { ReactNode } from 'react';
import { Container, JsonLd } from '@/components/ui';
import { buildGraph } from '@/lib/knowledge-graph';
import { RegionSwitcher } from '@/components/RegionSwitcher';

export function LegalShell({
  title,
  path,
  description,
  updated,
  regionNote,
  current,
  children,
}: {
  title: string;
  path: string;
  description: string;
  updated: string;
  regionNote?: string;
  current?: string;
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildGraph({ name: title, path, description, crumbs: [{ name: title, path }] })} />
      <Container className="py-16">
        <article className="prose-legal mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">Last updated {updated}</p>
          {regionNote ? (
            <div className="mt-6 flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span>{regionNote}</span>
              <RegionSwitcher current={current} />
            </div>
          ) : null}
          {children}
        </article>
      </Container>
    </>
  );
}

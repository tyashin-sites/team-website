import type { Entity } from '@/config/site';
import { CONTACT_EMAIL } from '@/config/site';

export function EntityCard({ e, highlight = false }: { e: Entity; highlight?: boolean }) {
  return (
    <article className={`rounded-lg border bg-surface p-6 ${highlight ? 'border-primary ring-1 ring-primary' : 'border-border'}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
        {e.regionLabel}
        {highlight ? ' · your region' : ''}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{e.name}</h3>
      <ul className="mt-3 space-y-1 text-sm text-muted">
        {e.ids.map((i) => (
          <li key={i}>{i}</li>
        ))}
        {e.address.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary">
          {CONTACT_EMAIL}
        </a>
        {e.phone ? (
          <>
            {' · '}
            <a href={`tel:${e.phone.tel}`} className="font-semibold text-primary">
              {e.phone.display}
            </a>
          </>
        ) : null}
      </p>
    </article>
  );
}

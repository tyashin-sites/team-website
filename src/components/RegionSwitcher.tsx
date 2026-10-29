'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const OPTIONS = [
  { id: 'in', label: 'India' },
  { id: 'eu', label: 'EU and UK' },
  { id: 'row', label: 'Rest of world' },
] as const;

/** Lets a visitor override the country guess. Stored for a year in a first-party cookie. */
export function RegionSwitcher({ current, tone = 'light' }: { current?: string; tone?: 'light' | 'dark' }) {
  const router = useRouter();
  const [value, setValue] = useState(current ?? '');
  useEffect(() => {
    if (current) return;
    const m = document.cookie.match(/(?:^|; )aap_region=(in|eu|row)/);
    if (m) setValue(m[1]);
  }, [current]);
  const dark = tone === 'dark';
  return (
    <label className={`inline-flex items-center gap-2 text-sm ${dark ? 'text-white/80' : 'text-muted'}`}>
      <span>Region</span>
      <select
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          document.cookie = `aap_region=${v}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax; secure`;
          router.refresh();
        }}
        className={`rounded-md border px-2 py-1 text-sm ${dark ? 'border-white/25 bg-ink text-white' : 'border-border bg-surface text-ink'}`}
      >
        {value === '' ? <option value="">Automatic</option> : null}
        {OPTIONS.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

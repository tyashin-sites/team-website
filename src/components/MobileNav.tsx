'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/components/nav';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
        className="rounded-md p-2 text-ink"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-[var(--header-h)] border-b border-border bg-background px-5 pb-6 shadow-sm">
          <ul className="flex flex-col">
            {[...NAV, { href: '/contact', label: 'Talk to us' }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-lg font-medium text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

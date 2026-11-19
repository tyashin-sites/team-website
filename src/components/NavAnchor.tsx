import Link from 'next/link';
import type { ReactNode } from 'react';

/** Paths the Tyashin platform serves itself. They need a full page load, so no client-side <Link>. */
export function isPlatformPath(href: string): boolean {
  return href === '/blog' || href.startsWith('/blog/');
}

export function NavAnchor({ href, className, onClick, children }: { href: string; className?: string; onClick?: () => void; children: ReactNode }) {
  if (isPlatformPath(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

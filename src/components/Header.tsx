import Link from 'next/link';
import { Container, Wordmark } from '@/components/ui';
import { MobileNav } from '@/components/MobileNav';
import { NAV } from '@/components/nav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-full items-center justify-between">
        <Link href="/" aria-label="Aapastech home">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-contrast transition-colors hover:bg-ink sm:inline-flex"
          >
            Talk to us
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

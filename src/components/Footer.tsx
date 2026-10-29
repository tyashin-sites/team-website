import Link from 'next/link';
import { Container, Wordmark } from '@/components/ui';
import { RegionSwitcher } from '@/components/RegionSwitcher';
import { CONTACT_EMAIL, ENTITIES, REGION_ORDER } from '@/config/site';
import { SiteIndex } from '@/components/SiteIndex';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Aapastech home">
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            The group behind Tyashin, Thridify, YOM and WonderlyAR. Software, 3D and consulting for businesses in India, Europe and North America.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block text-sm font-semibold text-primary">
            {CONTACT_EMAIL}
          </a>
          <div className="mt-6">
            <RegionSwitcher />
          </div>
        </div>
        <SiteIndex />
      </Container>
      <div className="border-t border-border">
        <Container className="grid gap-4 py-8 text-xs leading-relaxed text-muted md:grid-cols-3">
          {REGION_ORDER.map((r) => (
            <p key={r}>
              <span className="font-semibold text-foreground">{ENTITIES[r].regionLabel}:</span> {ENTITIES[r].name}, {ENTITIES[r].ids[0]}.
            </p>
          ))}
        </Container>
      </div>
      <p className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Aapastech. Powered by{' '}
        <a href="https://tyashin.com" target="_blank" rel="noopener" className="underline">
          Tyashin
        </a>
      </p>
    </footer>
  );
}

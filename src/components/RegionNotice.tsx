import Link from 'next/link';
import { getVisitorRegion } from '@/lib/region';
import { Container } from '@/components/ui';
import { RegionSwitcher } from '@/components/RegionSwitcher';

/** Tells the visitor which Aapastech company they deal with, based on where they are. */
export async function RegionNotice() {
  const v = await getVisitorRegion();
  const where = v.region === 'row' ? 'outside India, the EU and the UK' : `in ${v.entity.regionLabel === 'European Union and United Kingdom' ? 'the EU or the UK' : v.entity.regionLabel}`;
  return (
    <section aria-label="Your Aapastech company" className="border-b border-border bg-surface">
      <Container className="flex flex-col gap-3 py-5 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-foreground">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary align-middle" aria-hidden />
          For customers {where}, Aapastech is <strong className="font-semibold text-ink">{v.entity.name.replace(/\.$/, '')}</strong>.{' '}
          <Link href="/about" className="text-primary underline">
            Why three companies?
          </Link>
        </p>
        <RegionSwitcher current={v.chosen ? v.region : undefined} />
      </Container>
    </section>
  );
}

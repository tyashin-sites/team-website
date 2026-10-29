import { ENTITIES, OFFICER, REGION_ORDER } from '@/config/site';
import { getVisitorRegion } from '@/lib/region';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, CtaBand, JsonLd, PageHeader, SectionTitle } from '@/components/ui';
import { EntityCard } from '@/components/EntityCard';
import { GroupMap } from '@/components/GroupMap';

const description =
  'Aapastech is one group with three companies: Aapastech Private Limited in India, Aapastech OÜ in Estonia for the EU and UK, and 14818032 Canada Inc. elsewhere.';

export const metadata = pageMetadata({ title: 'About Aapastech: one group, three companies', description, path: '/about' });

export default async function AboutPage() {
  const v = await getVisitorRegion();
  return (
    <>
      <JsonLd data={buildGraph({ name: 'About Aapastech', path: '/about', description, crumbs: [{ name: 'About', path: '/about' }] })} />
      <PageHeader
        eyebrow="About"
        title="One group, three companies, the same team"
        lead="Aapastech builds software for businesses that sell, teach and measure online. We started in Delhi in 2022 with Thridify, and the group now runs Tyashin, YOM and WonderlyAR as well."
      />
      <section>
        <Container className="grid gap-12 py-16 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-foreground">
            <p>
              Our customers are in India, Europe and North America, and each of those places has its own rules on contracts, tax and personal data. So we work through three companies. Which one you deal with depends on where you are. For a business, that is the country of its billing address.
            </p>
            <p>
              The three companies share engineering, hosting and support. Each processes personal data for the others under a written intra-group agreement. The products and services are the same wherever you are. What changes is the company that signs your contract, bills you and answers for your data.
            </p>
            <p>
              The group is led by {OFFICER}, Co-Founder and CEO, from the Greater Toronto Area. Engineering and our 3D studio are in Delhi.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <GroupMap />
          </div>
        </Container>
      </section>
      <section className="border-t border-border">
        <Container className="py-16">
          <SectionTitle eyebrow="Our companies" title="Who you deal with" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {REGION_ORDER.map((r) => (
              <EntityCard key={r} e={ENTITIES[r]} highlight={r === v.region} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Work with us" body="Products, client work or a partnership. Write to one address and the right person answers." />
    </>
  );
}

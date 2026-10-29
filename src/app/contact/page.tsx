import { CONTACT_EMAIL, ENTITIES, PRODUCTS, REGION_ORDER, SERVICES } from '@/config/site';
import { getVisitorRegion } from '@/lib/region';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, JsonLd, PageHeader } from '@/components/ui';
import { LeadForm } from '@/components/LeadForm';
import { EntityCard } from '@/components/EntityCard';

const description =
  'Contact Aapastech about Tyashin, Thridify, YOM, WonderlyAR, software development or consulting. One address reaches the team in India, Europe and Canada.';

export const metadata = pageMetadata({ title: 'Contact Aapastech', description, path: '/contact' });

export default async function ContactPage() {
  const v = await getVisitorRegion();
  const apiUrl = process.env.TYASHIN_API_URL ?? '';
  const apiKey = process.env.TYASHIN_API_KEY ?? '';
  const topics = [...PRODUCTS.map((p) => p.name), ...SERVICES.map((s) => s.name), 'GenzPreneur', 'Partnership', 'Something else'];
  return (
    <>
      <JsonLd data={buildGraph({ name: 'Contact', path: '/contact', description, crumbs: [{ name: 'Contact', path: '/contact' }] })} />
      <PageHeader eyebrow="Contact" title="Tell us what you need" lead={`Write to ${CONTACT_EMAIL} or use the form. A person who works on the product or service you ask about will reply.`} />
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <LeadForm apiUrl={apiUrl} apiKey={apiKey} topics={topics} />
        </div>
        <div className="space-y-6">
          <EntityCard e={v.entity} highlight />
          {REGION_ORDER.filter((r) => r !== v.region).map((r) => (
            <EntityCard key={r} e={ENTITIES[r]} />
          ))}
        </div>
      </Container>
    </>
  );
}

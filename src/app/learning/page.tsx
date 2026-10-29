import { COURSES } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { buildGraph } from '@/lib/knowledge-graph';
import { Container, CtaBand, JsonLd, PageHeader } from '@/components/ui';

const description =
  'AI courses from Aapastech, starting with GenzPreneur for young founders. Taught by the people who build and run AI features in our own products.';

export const metadata = pageMetadata({ title: 'Learning: AI courses including GenzPreneur', description, path: '/learning' });

export default function LearningPage() {
  return (
    <>
      <JsonLd data={buildGraph({ name: 'Learning', path: '/learning', description, crumbs: [{ name: 'Learning', path: '/learning' }] })} />
      <PageHeader eyebrow="Learning" title="AI courses from people who ship AI" lead="We use AI in production across our products, with the labelling and disclosure rules that come with it. Our courses teach what we have learned doing that." />
      <Container className="py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {COURSES.map((c) => (
            <li key={c.name} className="rounded-lg border border-border bg-surface p-8">
              <h2 className="text-3xl font-semibold text-ink">{c.name}</h2>
              <p className="mt-3 text-lg text-muted">{c.body}</p>
              <p className="mt-6 text-sm text-muted">Dates, format and fees will be published here. Register your interest through the contact form to hear first.</p>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand title="Want to hear when enrolment opens?" body="Send us a note with GenzPreneur in the message." label="Register interest" />
    </>
  );
}

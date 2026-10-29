import Link from 'next/link';
import { CONTACT_EMAIL } from '@/config/site';
import { getVisitorRegion } from '@/lib/region';
import { pageMetadata } from '@/lib/seo';
import { LegalShell } from '@/components/LegalShell';
import { EntityBlock } from '@/components/EntityBlock';

const description =
  'Terms for using aapastech.com: who runs it, what the information on it means, intellectual property, liability, and which law and courts apply in your region.';

export const metadata = pageMetadata({ title: 'Website terms', description, path: '/terms' });

export default async function TermsPage() {
  const v = await getVisitorRegion();
  return (
    <LegalShell
      title="Website terms"
      path="/terms"
      description={description}
      updated="29 October 2026"
      current={v.chosen ? v.region : undefined}
      regionNote={`For you, these terms are with ${v.entity.name}, governed by ${v.entity.law}.`}
    >
      <p>
        These terms cover your use of aapastech.com. Using a product, such as Tyashin, Thridify, YOM, WonderlyAR or Tyashin for LinkedIn, is covered by that product&apos;s own terms. Client services are covered by the contract we sign with you.
      </p>
      <h2>Who we are</h2>
      <EntityBlock />
      <h2>Information on this site</h2>
      <p>
        We describe our products and services as accurately as we can. Prices shown here are for guidance; the price in the product, or in our quote, is the one that applies. Nothing on this site is legal advice, even where it describes how we comply with the law.
      </p>
      <h2>Our content</h2>
      <p>
        The text, design, diagrams and logos on this site belong to the Aapastech group or to the brands that gave us permission to show them. You may link to any page and quote short passages with credit. Please ask before reusing anything else. To report content that uses your work without permission, see our <Link href="/copyright">copyright page</Link>.
      </p>
      <h2>Using the site</h2>
      <p>Do not try to break, overload or gain unauthorised access to the site, and do not send us anything unlawful through the contact form.</p>
      <h2>Liability</h2>
      <p>
        We provide this site as it is and do not promise it will always be available or free of errors. We are not liable for indirect or consequential loss arising from using it, except in case of fraud. Nothing in these terms limits liability that the law does not allow to be limited, or any rights you have as a consumer.
      </p>
      <h2>Which law applies</h2>
      <p>
        If you are in India, Indian law governs these terms and the courts at Delhi have jurisdiction. If you are in the European Union or the United Kingdom, Estonian law governs them and the Harju County Court in Tallinn has jurisdiction, but you keep any protection that the mandatory law of the country where you live gives consumers. Everywhere else, the laws of the Province of Ontario and the federal laws of Canada that apply there govern them, and the courts of Ontario have jurisdiction.
      </p>
      <h2>Changes and contact</h2>
      <p>
        We may update these terms and will change the date at the top when we do. Questions go to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Complaints go to our <Link href="/grievance">Grievance Officer</Link>.
      </p>
    </LegalShell>
  );
}

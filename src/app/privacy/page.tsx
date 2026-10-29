import Link from 'next/link';
import { CONTACT_EMAIL, OFFICER, PHONES } from '@/config/site';
import { getVisitorRegion } from '@/lib/region';
import { pageMetadata } from '@/lib/seo';
import { LegalShell } from '@/components/LegalShell';
import { EntityBlock } from '@/components/EntityBlock';

const description =
  'How Aapastech handles personal data on aapastech.com: what we collect, why, how long we keep it, and your rights in India, the EU and UK, and Canada.';

export const metadata = pageMetadata({ title: 'Privacy notice', description, path: '/privacy' });

export default async function PrivacyPage() {
  const v = await getVisitorRegion();
  return (
    <LegalShell
      title="Privacy notice"
      path="/privacy"
      description={description}
      updated="29 October 2026"
      current={v.chosen ? v.region : undefined}
      regionNote={`You are reading this as a visitor from ${v.entity.regionLabel === 'Everywhere else' ? 'outside India, the EU and the UK' : v.entity.regionLabel}. Your controller is ${v.entity.name}.`}
    >
      <p>
        This notice covers aapastech.com. Each of our products (Tyashin, Thridify, YOM, WonderlyAR and Tyashin for LinkedIn) has its own privacy policy on its own site, which applies when you use that product.
      </p>
      <h2>Who we are</h2>
      <EntityBlock />
      <h2>What we collect on this site</h2>
      <ul>
        <li>
          <strong>Messages you send us.</strong> When you use the contact form we receive your name, email, and anything else you choose to give: phone, company and your message. The form is run on Tyashin, our own website platform, which stores the message so we can reply to your enquiry.
        </li>
        <li>
          <strong>Visit statistics.</strong> The site is hosted by Tyashin, which records privacy-respecting analytics (pages viewed, referring site, rough location by country, device type) without advertising cookies and without building a profile of you. We use it to see which pages are useful.
        </li>
        <li>
          <strong>Your region choice.</strong> If you pick a region, we store that choice in a cookie named aap_region on your device for one year. We also read the country your connection comes from, as reported by our hosting provider Cloudflare, to show the right company and prices. We do not store that country against you.
        </li>
        <li>
          <strong>Security logs.</strong> Our hosting keeps technical logs, such as IP addresses and request times, to protect the service and to meet Indian cyber security rules.
        </li>
      </ul>
      <p>We do not sell personal data, and we do not use this site&apos;s data for advertising.</p>
      <h2>How long we keep it</h2>
      <p>
        Enquiries are kept while we are talking to you and for up to two years after, unless you become a customer, in which case the product&apos;s policy applies. Security logs are kept for 180 days. Invoices and tax records, where they exist, are kept for 8 years.
      </p>
      <h2>Who else sees it</h2>
      <p>
        Our group companies, and the service providers that host and run our systems, such as Cloudflare and Google Cloud. Some are in other countries. We transfer data under the safeguards the law of your region requires.
      </p>

      {v.region === 'in' ? <IndiaRights /> : null}
      {v.region === 'eu' ? <EuRights /> : null}
      {v.region === 'row' ? <RowRights /> : null}

      <h2>Rights in other regions</h2>
      <p>The sections below apply if you are in a different region from the one shown above.</p>
      {v.region !== 'in' ? <IndiaRights /> : null}
      {v.region !== 'eu' ? <EuRights /> : null}
      {v.region !== 'row' ? <RowRights /> : null}

      <h2>Contact</h2>
      <p>
        Write to {OFFICER} at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. For complaints, see our <Link href="/grievance">Grievance Officer</Link> page.
      </p>
      <h2>Changes</h2>
      <p>If we change this notice in a way that matters, we will update the date at the top and say what changed.</p>
    </LegalShell>
  );
}

function IndiaRights() {
  return (
    <>
      <h3>If you are in India</h3>
      <p>
        Aapastech Private Limited is the data fiduciary. You can ask us for a summary of the personal data we hold about you and what we do with it, ask us to correct, complete, update or delete it, withdraw any consent you gave (as easily as you gave it), and nominate someone to act for you if you die or become unable to act. Email {CONTACT_EMAIL}. We answer within one month, and never later than the law allows. We may ask you to confirm your identity, but only with information we already hold.
      </p>
      <p>
        Transfers out of India follow section 16 of the Digital Personal Data Protection Act, 2023. Complaints go to our Grievance Officer, {OFFICER} ({PHONES.india.display}). Once the relevant provisions apply, you can also complain to the Data Protection Board of India.
      </p>
    </>
  );
}

function EuRights() {
  return (
    <>
      <h3>If you are in the European Union or the United Kingdom</h3>
      <p>
        Aapastech OÜ is the controller. We process enquiries to answer them (steps you asked for before a possible contract, or our legitimate interest in replying), and security logs and visit statistics on the basis of our legitimate interest in running a safe and useful site. You can object to that at any time. You can ask for access, correction, deletion, restriction or a portable copy of your data, by emailing {CONTACT_EMAIL}.
      </p>
      <p>
        You can complain to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon, www.aki.ee), to the authority where you live, or in the United Kingdom to the Information Commissioner&apos;s Office (ico.org.uk). Transfers outside the EU and UK are covered by standard contractual clauses. Our UK representative will be named here once appointed.
      </p>
    </>
  );
}

function RowRights() {
  return (
    <>
      <h3>If you are anywhere else</h3>
      <p>
        14818032 Canada Inc. is the controller. You can ask to see or correct the personal data we hold about you, or withdraw consent, by emailing {CONTACT_EMAIL}. Our Privacy Officer, also the person in charge of the protection of personal information for Quebec, is {OFFICER} ({PHONES.canada.display}). In Canada you can complain to the Office of the Privacy Commissioner of Canada, and in Quebec to the Commission d&apos;accès à l&apos;information.
      </p>
    </>
  );
}

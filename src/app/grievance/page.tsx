import Link from 'next/link';
import { CONTACT_EMAIL, ENTITIES, OFFICER, PHONES } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { LegalShell } from '@/components/LegalShell';

const description =
  'Complain to the Aapastech Grievance Officer about our products, content we host or your personal data. Acknowledged in 24 hours and resolved within 7 days.';

export const metadata = pageMetadata({ title: 'Grievance Officer', description, path: '/grievance' });

export default function GrievancePage() {
  const india = ENTITIES.in;
  return (
    <LegalShell title="Grievance Officer" path="/grievance" description={description} updated="29 October 2026">
      <p>
        Write to us if you have a complaint about any Aapastech product (Tyashin, Thridify, YOM, WonderlyAR or Tyashin for LinkedIn), about content on a page or site we host, or about how we handle your personal data. Complaints from anyone are welcome, whether or not you have an account.
      </p>
      <div className="not-prose mt-6 rounded-lg border border-border bg-surface p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">Grievance Officer</p>
        <p className="mt-2 text-xl font-semibold text-ink">{OFFICER}</p>
        <p className="text-foreground">{india.name}</p>
        <p className="text-muted">8/3, 2nd Floor, Roop Nagar, Delhi 110007, India</p>
        <p className="mt-3">
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary">
            {CONTACT_EMAIL}
          </a>
          {' · '}
          <a href={`tel:${PHONES.india.tel}`} className="font-semibold text-primary">
            {PHONES.india.display}
          </a>
        </p>
      </div>
      <h2>How to complain</h2>
      <p>
        Email us with &quot;Grievance&quot; in the subject line. Tell us your name and how to reach you, the page, site or account the complaint is about, what happened, and what you would like us to do. Attach screenshots or links if you have them. For a request about your personal data, tell us which product you use and the email address you use with us, so we can find your records without asking for more than we need.
      </p>
      <h2>What happens next</h2>
      <ul>
        <li>We acknowledge your complaint within 24 hours and give you a reference number.</li>
        <li>We resolve it within 7 days.</li>
        <li>
          If you ask us to remove content we host that breaks our rules for users, we act within 36 hours. Claims about who owns the content, or about intellectual property, can take up to 7 days because we need to hear from both sides.
        </li>
        <li>If content shows you in a private or sexual way, or pretends to be you, including images changed with AI, report it and we will remove it or block access within 2 hours.</li>
        <li>Requests to see, correct or delete your personal data, or to withdraw consent, are answered within one month. Most take far less.</li>
        <li>Orders and notices from courts and government authorities can be sent to the same address. We act on them within the time the law sets.</li>
      </ul>
      <h2>If you are not satisfied</h2>
      <ul>
        <li>
          Under India&apos;s Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, you can appeal our decision to the Grievance Appellate Committee at gac.gov.in within 30 days of hearing from us.
        </li>
        <li>For personal data, once the relevant parts of the Digital Personal Data Protection Act, 2023 apply, you can complain to the Data Protection Board of India after using this process.</li>
        <li>
          In the European Union you can complain to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon, www.aki.ee) or to the data protection authority where you live. In the United Kingdom you can complain to the Information Commissioner&apos;s Office (ico.org.uk). {OFFICER} is also the privacy contact for Aapastech OÜ.
        </li>
        <li>
          In Canada you can contact the Office of the Privacy Commissioner of Canada, and in Quebec the Commission d&apos;accès à l&apos;information. {OFFICER} is also our Privacy Officer for 14818032 Canada Inc. and the person in charge of the protection of personal information for Quebec ({CONTACT_EMAIL}, {PHONES.canada.display}).
        </li>
      </ul>
      <p>
        Copyright complaints can also follow the steps on our <Link href="/copyright">copyright page</Link>. Ask us at the address above if you need this page in Hindi or another language listed in the Eighth Schedule to the Constitution of India and we will send it within 7 days.
      </p>
    </LegalShell>
  );
}

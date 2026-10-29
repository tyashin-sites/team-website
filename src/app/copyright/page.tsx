import Link from 'next/link';
import { CONTACT_EMAIL, OFFICER } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { LegalShell } from '@/components/LegalShell';

const description =
  'Report content on an Aapastech product or a site we host that uses your copyrighted work. How to send a notice, a DMCA counter-notice, and what we do next.';

export const metadata = pageMetadata({ title: 'Copyright and DMCA notices', description, path: '/copyright' });

export default function CopyrightPage() {
  return (
    <LegalShell title="Copyright and DMCA notices" path="/copyright" description={description} updated="29 October 2026">
      <p>
        Our products host websites, images, 3D models and posts that our customers create. If something there uses your work without permission, tell us and we will look at it. This applies to Tyashin, Thridify, YOM, WonderlyAR and Tyashin for LinkedIn, and to every site hosted on Tyashin.
      </p>
      <h2>Where to send a notice</h2>
      <p>
        Copyright agent: {OFFICER}, <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, with &quot;Copyright notice&quot; in the subject line. Our designated agent registration with the US Copyright Office under the Digital Millennium Copyright Act is in progress. Until it appears in the Copyright Office directory, notices sent to this address are still received and acted on.
      </p>
      <h2>What to include</h2>
      <ul>
        <li>Your name, address, phone number and email, and your signature (typed is fine).</li>
        <li>The work you say is being copied, or a list if there are several.</li>
        <li>The exact URL or location of the material on our service.</li>
        <li>A statement that you believe in good faith the use is not authorised by you, your agent or the law.</li>
        <li>A statement that the information in your notice is accurate and, under penalty of perjury, that you own the right or are authorised to act for the owner.</li>
      </ul>
      <h2>What we do</h2>
      <p>
        We acknowledge notices within 24 hours. Claims about who owns content can take up to 7 days to decide because we hear from both sides. Where a notice is complete, we remove or disable the material and tell the customer who posted it. We close the accounts of customers who infringe repeatedly.
      </p>
      <h2>Counter-notice</h2>
      <p>
        If your material was removed and you believe that was a mistake, send us a counter-notice with your contact details and signature, the material and where it was, a statement under penalty of perjury that you believe in good faith it was removed by mistake, and your consent to the jurisdiction of the appropriate court. We pass it to the person who complained. If they do not start legal action within the time the law allows, we may restore the material.
      </p>
      <h2>Outside the United States</h2>
      <p>
        In India, intellectual property complaints are also handled under the Information Technology Rules through our <Link href="/grievance">Grievance Officer</Link>. In the European Union, the same address handles notices under the Digital Services Act. Please do not send false notices: you may be liable for the harm they cause.
      </p>
    </LegalShell>
  );
}

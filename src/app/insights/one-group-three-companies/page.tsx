import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { PostLayout } from '@/components/PostLayout';

const post = POSTS.find((p) => p.slug === 'one-group-three-companies')!;
export const metadata = pageMetadata({ title: post.title, description: post.description, path: `/insights/${post.slug}`, type: 'article' });

export default function Post() {
  return (
    <PostLayout slug={post.slug}>
      <h2>Why not one company?</h2>
      <p>
        We started in Delhi in 2022, and Aapastech Private Limited was the natural home for the work. Then customers arrived from Europe and North America, and each brought its own expectations: an invoice from a company in their market, a contract under a law their lawyers know, and a data controller they can actually reach.
      </p>
      <p>
        You can sell into the EU from an Indian company. Plenty of firms do. But a German retailer&apos;s procurement team asks harder questions when the controller of its customers&apos; data sits outside the EU, and a Canadian buyer wants to know which courts apply if something goes wrong. Answering those questions one deal at a time slows every deal down.
      </p>
      <h2>How it works</h2>
      <ul>
        <li>India: Aapastech Private Limited, Delhi. Indian law, courts at Delhi. Data fiduciary under Indian law.</li>
        <li>European Union and United Kingdom: Aapastech OÜ, Tallinn. Estonian law, Harju County Court, and GDPR controller.</li>
        <li>Everywhere else: 14818032 Canada Inc., Ontario. Ontario law and the courts of Ontario.</li>
      </ul>
      <p>
        For a business, the company you deal with follows the country of your billing address. Each company bills and collects payment from its own customers. The three share one engineering team, one hosting setup and one support desk, and each processes data for the others under a written intra-group agreement.
      </p>
      <h2>What stays the same</h2>
      <p>
        The products and services. Tyashin, Thridify, YOM and the rest work the same way for a customer in Pune, Porto or Phoenix. Your prices show in your currency and your legal pages name your company, and that is the whole difference.
      </p>
      <h2>What this site does with it</h2>
      <p>
        When you open aapastech.com we read the country your connection comes from and show the company, prices and legal terms for that region. If we guessed wrong, because you use a VPN or you are travelling, pick your region from the switcher in the footer and we will remember it. You can see all three companies on our <Link href="/about">About page</Link>.
      </p>
    </PostLayout>
  );
}

import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { PostLayout } from '@/components/PostLayout';

const post = POSTS.find((p) => p.slug === 'how-our-grievance-officer-works')!;
export const metadata = pageMetadata({ title: post.title, description: post.description, path: `/insights/${post.slug}`, type: 'article' });

export default function Post() {
  return (
    <PostLayout slug={post.slug}>
      <p>
        Tyashin hosts websites and Thridify hosts 3D models and product pages for other businesses. Under India&apos;s Information Technology Rules that makes them intermediaries, and an intermediary has to name a Grievance Officer and answer complaints on a fixed clock. The rules were tightened again in February 2026, so here is how we run it.
      </p>
      <h2>One officer, one inbox</h2>
      <p>
        Every complaint about any of our products goes to the same person and the same address. That covers content on a site we host, how we handle someone&apos;s personal data, or the service itself. Anyone can complain, whether they have an account or not. One inbox means nothing falls between brands.
      </p>
      <h2>The clocks</h2>
      <ul>
        <li>24 hours to acknowledge a complaint and give a reference number.</li>
        <li>7 days to resolve it.</li>
        <li>36 hours to act on a request to remove hosted content that breaks our user rules. Ownership and intellectual property disputes can take up to 7 days, because both sides have to be heard.</li>
        <li>2 hours to remove or block content that shows someone in a private or sexual way, or impersonates them, including images changed with AI.</li>
        <li>One month to answer requests to see, correct or delete personal data.</li>
      </ul>
      <h2>What we changed to meet them</h2>
      <p>
        The 2-hour clock is the hard one. It does not wait for business hours, so takedown cannot depend on one person being awake. We wrote an incident and takedown runbook that says who can disable a hosted page, how evidence is preserved, and how the customer is told. The footers of Tyashin, Thridify and YOM link to the grievance page, which is also published in Hindi.
      </p>
      <h2>If the answer is not good enough</h2>
      <p>
        A complainant who disagrees with our decision can appeal to the Grievance Appellate Committee at gac.gov.in within 30 days. People in the EU, the UK and Canada have their own regulators, listed on our <Link href="/grievance">Grievance Officer page</Link>.
      </p>
    </PostLayout>
  );
}

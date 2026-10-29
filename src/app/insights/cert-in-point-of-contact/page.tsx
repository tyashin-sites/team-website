import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { PostLayout } from '@/components/PostLayout';

const post = POSTS.find((p) => p.slug === 'cert-in-point-of-contact')!;
export const metadata = pageMetadata({ title: post.title, description: post.description, path: `/insights/${post.slug}`, type: 'article' });

export default function Post() {
  return (
    <PostLayout slug={post.slug}>
      <p>
        CERT-In is India&apos;s national computer emergency response team. Its 2022 directions apply to any company that runs systems in India or serves Indian users, and they start with a simple requirement: give CERT-In a named point of contact. We sent ours on 27 October 2026 for Aapastech Private Limited and 14818032 Canada Inc.
      </p>
      <h2>What the directions ask</h2>
      <ul>
        <li>Report certain cyber incidents to CERT-In within 6 hours of noticing them.</li>
        <li>Keep logs of our systems for 180 days, in India, and hand them over when CERT-In asks.</li>
        <li>Sync every system clock to a trusted time source, so logs from different systems line up.</li>
        <li>Answer CERT-In&apos;s requests through the named contact.</li>
      </ul>
      <h2>Where we are</h2>
      <p>
        Our Google Cloud systems already keep logs for 180 days. We have prepared storage for Cloudflare logs and are switching on the remaining log feeds, with 31 December 2026 as our deadline. The incident runbook that covers the 6-hour report is written.
      </p>
      <h2>Why customers should care</h2>
      <p>
        If something goes wrong, a company with a named contact, kept logs and a rehearsed process can find out what happened and fix it. That protects the businesses that run on Tyashin, Thridify and YOM, and their customers. See the current status on our <Link href="/trust">trust page</Link>.
      </p>
    </PostLayout>
  );
}

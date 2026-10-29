import Link from 'next/link';
import type { ReactNode } from 'react';
import { POSTS } from '@/lib/posts';
import { siteUrl } from '@/lib/seo';
import { Container, CtaBand, JsonLd } from '@/components/ui';
import { PostIndex } from '@/components/SiteIndex';

export function PostLayout({ slug, children }: { slug: string; children: ReactNode }) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  const url = siteUrl(`/insights/${slug}`);
  const origin = siteUrl('/');
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Aapastech', url: origin },
      { '@type': 'WebSite', '@id': `${origin}/#website`, url: origin, name: 'Aapastech' },
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        url,
        author: { '@id': `${origin}/#organization` },
        publisher: { '@id': `${origin}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: siteUrl('/insights') },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <JsonLd data={data} />
      <Container className="py-16">
        <article className="prose-legal mx-auto max-w-3xl">
          <Link href="/insights" className="font-mono text-xs uppercase tracking-[0.14em] text-primary no-underline">
            Insights
          </Link>
          <h1 className="mt-4 text-4xl font-light leading-tight text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.readMinutes} min read
          </p>
          <p className="mt-6 text-xl leading-relaxed text-muted">{post.description}</p>
          {children}
        </article>
        <aside className="mx-auto mt-16 max-w-3xl border-t border-border pt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-ink">More insights</h2>
          <PostIndex />
        </aside>
      </Container>
      <CtaBand title="Doing the same work in your company?" body="We help teams set up the same processes. Ask us how." />
    </>
  );
}

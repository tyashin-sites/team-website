/** Pure mapping from the blog data API answer to home page links. No imports, so the tests can load it directly. */
export interface HomePost {
  href: string;
  title: string;
  readMinutes?: number;
}

interface ApiPost {
  slug?: unknown;
  title?: unknown;
  readTime?: unknown;
}

export function mapBlogPosts(data: unknown, limit: number): HomePost[] {
  const d = data as { active?: unknown; posts?: unknown } | null;
  if (!d || d.active !== true || !Array.isArray(d.posts)) return [];
  return (d.posts as ApiPost[])
    .filter((p) => typeof p.slug === 'string' && p.slug && typeof p.title === 'string' && p.title)
    .slice(0, limit)
    .map((p) => ({
      href: `/blog/${encodeURIComponent(p.slug as string)}`,
      title: p.title as string,
      readMinutes: typeof p.readTime === 'number' && p.readTime > 0 ? Math.round(p.readTime) : undefined,
    }));
}

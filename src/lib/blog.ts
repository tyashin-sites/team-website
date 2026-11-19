import { POSTS } from '@/lib/posts';
import { mapBlogPosts, type HomePost } from '@/lib/blog-map';

/**
 * Latest posts from the Tyashin blog (Blog plugin), read from the platform's
 * keyless data API on the project's slug host. The home page shows them; when
 * the blog is empty, slow or down it shows the site's own posts instead, so the
 * section never renders empty.
 */
const BLOG_DATA_HOST = (process.env.TYASHIN_BLOG_ORIGIN || 'https://team-website.sites.tyashin.com').replace(/\/+$/, '');
const REVALIDATE_SECONDS = 300;
const DEADLINE_MS = 2500;

export function fallbackPosts(limit: number): HomePost[] {
  return POSTS.slice(0, limit).map((p) => ({ href: p.href, title: p.title, readMinutes: p.readMinutes }));
}

export async function getHomePosts(limit = 4): Promise<{ posts: HomePost[]; fromBlog: boolean }> {
  const fallback = { posts: fallbackPosts(limit), fromBlog: false };
  try {
    const run = fetch(`${BLOG_DATA_HOST}/_tyashin/blog/posts?limit=${limit}`, {
      headers: { accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS },
    }).then(async (res) => (res.ok ? mapBlogPosts(await res.json(), limit) : []));
    const timeout = new Promise<HomePost[]>((resolve) => setTimeout(() => resolve([]), DEADLINE_MS));
    const posts = await Promise.race([run, timeout]);
    return posts.length > 0 ? { posts, fromBlog: true } : fallback;
  } catch {
    return fallback;
  }
}

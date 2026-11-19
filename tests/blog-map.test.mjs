import test from 'node:test';
import assert from 'node:assert/strict';
import { mapBlogPosts } from '../src/lib/blog-map.ts';

test('maps published posts to /blog links, newest first as given, capped at the limit', () => {
  const data = {
    active: true,
    posts: [1, 2, 3, 4, 5].map((n) => ({ slug: `post-${n}`, title: `Post ${n}`, readTime: 4 })),
  };
  const out = mapBlogPosts(data, 4);
  assert.equal(out.length, 4);
  assert.deepEqual(out[0], { href: '/blog/post-1', title: 'Post 1', readMinutes: 4 });
});

test('returns nothing when the blog is off, empty or the answer is malformed', () => {
  assert.deepEqual(mapBlogPosts({ active: false, posts: [{ slug: 'a', title: 'A' }] }, 4), []);
  assert.deepEqual(mapBlogPosts({ active: true, posts: [] }, 4), []);
  assert.deepEqual(mapBlogPosts(null, 4), []);
  assert.deepEqual(mapBlogPosts({ active: true, posts: 'x' }, 4), []);
});

test('skips posts with no slug or title and drops a missing read time', () => {
  const out = mapBlogPosts({ active: true, posts: [{ slug: '', title: 'x' }, { slug: 'ok', title: 'Ok' }, { title: 'no slug' }] }, 4);
  assert.deepEqual(out, [{ href: '/blog/ok', title: 'Ok', readMinutes: undefined }]);
});

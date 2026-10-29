import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { PostLayout } from '@/components/PostLayout';

const post = POSTS.find((p) => p.slug === 'labelling-ai-images')!;
export const metadata = pageMetadata({ title: post.title, description: post.description, path: `/insights/${post.slug}`, type: 'article' });

export default function Post() {
  return (
    <PostLayout slug={post.slug}>
      <p>
        Several of our products make images with AI. Tyashin for LinkedIn creates post illustrations, Tyashin&apos;s blog tools create article images, and Thridify can render product scenes. Two sets of rules now say those images must be marked as AI-made, and they arrive within a month of each other.
      </p>
      <h2>The two rules</h2>
      <ul>
        <li>
          India&apos;s IT Rules, as amended in February 2026, ask intermediaries that offer AI tools to label synthetic content and attach metadata that identifies it. We are working to a 31 December 2026 deadline.
        </li>
        <li>
          Article 50(2) of the EU AI Act requires providers of AI systems that generate images to mark them in a machine-readable way. That applies from 2 December 2026.
        </li>
      </ul>
      <h2>What we label</h2>
      <p>
        Every AI image our products create carries a visible label where it is shown and machine-readable metadata in the file. Tyashin for LinkedIn has done this since 28 October 2026. Tyashin and Thridify follow before the deadlines above. We only use image models that mark their own output.
      </p>
      <h2>Why we keep C2PA credentials intact</h2>
      <p>
        Models from OpenAI and Google attach C2PA content credentials, a signed record of how the image was made. It is easy to destroy them by accident: resizing or converting an image the wrong way strips them. We are changing our image pipelines so they keep those credentials and add our own metadata alongside, instead of rewriting the file. We are also working toward membership of the Content Authenticity Initiative, the group behind the standard.
      </p>
      <h2>Chatbots too</h2>
      <p>
        Article 50(1) covers conversation as well. The Tyashin chatbot now tells visitors they are talking to an AI before anything else. You can follow the status of each of these on our <Link href="/trust">trust page</Link>.
      </p>
    </PostLayout>
  );
}

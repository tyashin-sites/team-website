export interface Post {
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
}

export const POSTS: Post[] = [
  {
    slug: 'one-group-three-companies',
    href: '/insights/one-group-three-companies',
    title: 'One group, three companies: who you sign with',
    description:
      'Aapastech runs through Aapastech Private Limited in India, Aapastech OÜ in the EU and UK, and 14818032 Canada Inc. elsewhere. Here is why and what it means for you.',
    date: '2026-10-29',
    readMinutes: 4,
  },
  {
    slug: 'how-our-grievance-officer-works',
    href: '/insights/how-our-grievance-officer-works',
    title: 'How our Grievance Officer handles a complaint',
    description:
      'Acknowledged in 24 hours, resolved in 7 days, harmful content down in 36 hours or 2. The clocks behind our grievance process under India’s IT Rules.',
    date: '2026-10-29',
    readMinutes: 4,
  },
  {
    slug: 'labelling-ai-images',
    href: '/insights/labelling-ai-images',
    title: 'How we label AI images across our products',
    description:
      'India’s 2026 IT Rules and Article 50 of the EU AI Act both ask for AI images to be marked. What we label, how we keep C2PA credentials, and our deadlines.',
    date: '2026-10-29',
    readMinutes: 5,
  },
  {
    slug: 'cert-in-point-of-contact',
    href: '/insights/cert-in-point-of-contact',
    title: 'What being registered with CERT-In means for our customers',
    description:
      'We gave CERT-In a point of contact on 27 October 2026. What that commits us to: incident reports within 6 hours, 180-day logs and synced clocks.',
    date: '2026-10-29',
    readMinutes: 4,
  },
];

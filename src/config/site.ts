/**
 * The ONE place for Aapastech facts. Every fact here comes from the owner,
 * the group legal pack (PUBLISH-KIT K1/K2) or a live Aapastech product site.
 * Source notes live in docs/FACTS-SOURCES.md. Copy describes; it never adds facts.
 */

export type RegionId = 'in' | 'eu' | 'row';

export const CONTACT_EMAIL = 'contact@aapastech.com';

export const PHONES = {
  india: { display: '+91 96677 47082', tel: '+919667747082' },
  canada: { display: '+1 437 800 0190', tel: '+14378000190' },
} as const;

export const OFFICER = 'Shikha Gupta';

export interface Entity {
  region: RegionId;
  regionLabel: string;
  regionShort: string;
  name: string;
  ids: string[];
  address: string[];
  phone?: { display: string; tel: string };
  dataRole: string;
  law: string;
  courts: string;
  regulator: string;
  officerTitle: string;
}

export const ENTITIES: Record<RegionId, Entity> = {
  in: {
    region: 'in',
    regionLabel: 'India',
    regionShort: 'India',
    name: 'Aapastech Private Limited',
    ids: ['CIN U72900DL2022PTC395508', 'GSTIN 06AAVCA6693D1ZK'],
    address: [
      'Registered office: 8/3, 2nd Floor, Roop Nagar, Delhi 110007, India',
      'Principal place of business: 1st Floor, 145, Sector 44, Gurugram, Haryana 122003, India',
    ],
    phone: PHONES.india,
    dataRole: 'the data fiduciary for your personal data under Indian law',
    law: 'Indian law',
    courts: 'the courts at Delhi',
    regulator:
      'If our answer does not settle it, you can appeal to the Grievance Appellate Committee at gac.gov.in within 30 days.',
    officerTitle: 'Grievance Officer',
  },
  eu: {
    region: 'eu',
    regionLabel: 'European Union and United Kingdom',
    regionShort: 'EU and UK',
    name: 'Aapastech OÜ',
    ids: ['Registry code 16453146', 'VAT EE102489493'],
    address: ['Tornimäe tn 3 // 5 // 7, 10145 Tallinn, Estonia'],
    dataRole: 'the controller of your personal data under the GDPR and the UK GDPR',
    law: 'Estonian law',
    courts: 'the Harju County Court in Tallinn, and you keep any protection the mandatory consumer law of your country gives you',
    regulator:
      'You can also complain to the Estonian Data Protection Inspectorate (aki.ee), to the data protection authority where you live, or in the UK to the ICO.',
    officerTitle: 'Privacy contact',
  },
  row: {
    region: 'row',
    regionLabel: 'Everywhere else',
    regionShort: 'Rest of world',
    name: '14818032 Canada Inc.',
    ids: ['CBCA corporation 1481803-2'],
    address: ['Burlington, Ontario, Canada'],
    phone: PHONES.canada,
    dataRole: 'the controller of your personal data',
    law: 'the laws of the Province of Ontario and the federal laws of Canada that apply there',
    courts: 'the courts of Ontario',
    regulator:
      'You can also complain to the Office of the Privacy Commissioner of Canada, or in Quebec to the Commission d’accès à l’information.',
    officerTitle: 'Privacy Officer',
  },
};

export const REGION_ORDER: RegionId[] = ['in', 'eu', 'row'];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export interface Feature {
  title: string;
  body: string;
}

export interface Product {
  id: string;
  path: string;
  brand: string;
  name: string;
  logo?: { src: string; w: number; h: number };
  url?: string;
  urlLabel?: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  oneLine: string;
  intro: string;
  forWho: string[];
  features: Feature[];
  notes?: string[];
  /** 'tyashin' and 'linkedin' show prices in the visitor's currency. */
  pricing?: 'tyashin' | 'linkedin' | 'yom';
}

export const PRODUCTS: Product[] = [
  {
    id: 'tyashin',
    path: '/products/tyashin',
    brand: 'Tyashin',
    name: 'Tyashin',
    logo: { src: '/brands/tyashin.svg', w: 32, h: 32 },
    url: 'https://tyashin.com',
    urlLabel: 'tyashin.com',
    category: 'Websites and commerce',
    seoTitle: 'Tyashin: websites, commerce and growth plugins',
    seoDescription:
      'Tyashin runs real Next.js websites on Cloudflare with commerce, CRM, an AI chatbot, SEO and local payments. See plans in your currency.',
    oneLine: 'Real websites on the edge, with the store, CRM, chatbot and SEO already wired in.',
    intro:
      'Tyashin is where a business site lives after launch. Each site is real Next.js code in a repository the customer owns, served as its own Cloudflare Worker. Commerce, leads, chat, search and payments plug into the same account, so the data sits in one place.',
    forWho: [
      'D2C brands selling across borders',
      'Businesses in India that need UPI, COD and local tax',
      'Clinics, law firms and EU retailers with privacy duties',
      'Agencies delivering client sites',
      'Founders turning a Lovable, Bolt or React prototype into a business',
    ],
    features: [
      { title: 'Sites built with you', body: 'Our team builds the site with you on Tyashin, or ports the one you have. You get real code, not a template.' },
      { title: 'Edge hosting', body: 'Server-rendered on Cloudflare Workers, with custom domains and SSL.' },
      { title: 'Commerce', body: 'Variants, coupons, shipping zones, regional tax, returns, reviews and cash on delivery.' },
      { title: 'Built-in CRM', body: 'A seven-stage pipeline fed by your forms, store and chatbot.' },
      { title: 'AI chatbot', body: 'Answers from your own content and catalogue, can check orders and stock, and tells visitors it is an AI.' },
      { title: 'SEO Co-Pilot and AI answer tracking', body: 'Schema, sitemaps, llms.txt and audits, plus a check on whether ChatGPT, Gemini and Claude recommend you.' },
      { title: 'Blog and Editorial Desk', body: 'A full blog with drafts researched from real, cited sources.' },
      { title: 'Payments', body: 'Razorpay in India, Stripe everywhere else.' },
      { title: 'Privacy by default', body: 'A consent centre, export and erasure tools, and an audit log you cannot quietly edit.' },
    ],
    pricing: 'tyashin',
  },
  {
    id: 'tyashin-for-linkedin',
    path: '/products/tyashin-for-linkedin',
    brand: 'Tyashin',
    name: 'Tyashin for LinkedIn',
    logo: { src: '/brands/tyashin-linkedin.svg', w: 32, h: 32 },
    url: 'https://linkedin.tyashin.com',
    urlLabel: 'linkedin.tyashin.com',
    category: 'Personal brand',
    seoTitle: 'Tyashin for LinkedIn: posts written in your voice',
    seoDescription:
      'Tyashin for LinkedIn learns how you write, drafts posts grounded in research, picks the hour and publishes. Approve each post or let it run.',
    oneLine: 'LinkedIn posts in your own voice, timed and published for you.',
    intro:
      'Most people know they should post on LinkedIn and then do not. Tyashin for LinkedIn learns your voice from what you have already written, drafts posts grounded in real research, and publishes at the hour your audience reads. You can approve each post first or let it run.',
    forWho: ['Founders building in public', 'Consultants and freelancers', 'Executives and B2B sales teams', 'Coaches and educators'],
    features: [
      { title: 'Learns your voice', body: 'It studies how you write and keeps a knowledge bank, brand kit and tone guide for you.' },
      { title: 'AI Studio', body: 'Chat to shape a post, across 17 content themes and 6 copywriting frameworks.' },
      { title: 'Timing engine', body: 'Schedules each post for the hour it is most likely to be read.' },
      { title: 'Approval gate', body: 'Review every post before it goes out, or switch to full auto-post.' },
      { title: 'Labelled AI images', body: 'Images it generates carry the AI labels the EU AI Act asks for.' },
    ],
    pricing: 'linkedin',
  },
  {
    id: 'tyashin-invoice',
    path: '/products/tyashin-invoice',
    brand: 'Tyashin',
    name: 'Tyashin Invoice',
    url: 'https://invoice.tyashin.com',
    urlLabel: 'invoice.tyashin.com',
    category: 'Invoicing',
    seoTitle: 'Tyashin Invoice: sign-ready invoices for contractors',
    seoDescription:
      'Tyashin Invoice helps IT contractors and consultants raise invoices in any currency, sign them on a phone and send a PDF with GST or VAT.',
    oneLine: 'Invoice fast, sign on your phone, get paid.',
    intro:
      'Contractors lose hours to invoices that should take a minute. Tyashin Invoice lets IT contractors and consultants raise an invoice in their client’s currency, add GST or VAT, sign it on a phone and send the PDF.',
    forWho: ['IT contractors', 'Independent consultants'],
    features: [
      { title: 'Any currency', body: 'Bill each client in the currency you agreed.' },
      { title: 'Sign on your phone', body: 'Drag your signature onto the invoice from a phone.' },
      { title: 'GST and VAT', body: 'Tax lines are part of the invoice, not an afterthought.' },
      { title: 'No per-invoice fees', body: 'There is a free plan, and no charge per invoice.' },
    ],
  },
  {
    id: 'thridify',
    path: '/products/thridify',
    brand: 'Thridify',
    name: 'Thridify',
    logo: { src: '/brands/thridify.png', w: 600, h: 600 },
    url: 'https://thridify.com',
    urlLabel: 'thridify.com',
    category: '3D and AR commerce',
    seoTitle: 'Thridify: 3D configurators and AR for product brands',
    seoDescription:
      'Thridify gives brands whose products vary by size, finish or material a 3D viewer, a configurator with live pricing, app-free AR and 3D modelling.',
    oneLine: '3D and AR for brands whose products vary by size, finish or material.',
    intro:
      'A sofa in nine fabrics, a kitchen in forty finishes, a door in any size. Photographing every version is slow and expensive, and quoting it by hand is slower. Thridify builds one accurate 3D model per product and uses it everywhere: a 360° viewer, a configurator that reprices as the buyer changes it, AR in the buyer’s own room, and stills for every finish.',
    forWho: [
      'Furniture and home decor',
      'Modular kitchens and wardrobes',
      'Doors and windows',
      'Prefab and modular structures',
      'Industrial machinery',
      'Laminates and surfaces',
      'Luxury sanitaryware and bath',
      'Electronics and audio',
      'Luggage and bags',
    ],
    features: [
      { title: '3D 360° viewer', body: 'Real-time 3D with hotspots, compressed to load on mobile data.' },
      { title: '3D configurator', body: 'Finish, size and modules change live, with the price, an instant quote and a production-ready bill of materials.' },
      { title: 'App-free AR', body: 'AR Quick Look on iPhone and Scene Viewer on Android, at true scale, from the same model.' },
      { title: 'Visualisation', body: 'Photoreal stills, lifestyle scenes and video in every finish without a reshoot.' },
      { title: 'Material library', body: 'Wood, leather, metal and marble, with bulk texture tools and a public library brands can contribute to.' },
      { title: 'Integrations', body: 'Shopify, WooCommerce and WordPress, plus embeds for Wix, BigCommerce, Magento and more, a JS SDK and an API.' },
      { title: 'Analytics', body: 'See which finishes and sizes buyers actually explore.' },
    ],
    notes: ['Thridify plans are shown inside the product after sign-up.'],
  },
  {
    id: 'room-planner',
    path: '/products/room-planner',
    brand: 'Thridify',
    name: 'Thridify Room Planner',
    logo: { src: '/brands/thridify.png', w: 600, h: 600 },
    url: 'https://thridify.com/room-visualizer',
    urlLabel: 'thridify.com/room-visualizer',
    category: '3D and AR commerce',
    seoTitle: 'Thridify Room Planner and Shop the Look',
    seoDescription:
      'Shoppers plan a whole room from your configurable catalogue at true scale, walk through it and view it in AR. Publish styled rooms as shoppable looks.',
    oneLine: 'Let shoppers plan a whole room from your catalogue, then see it in AR.',
    intro:
      'People buy a room, not a chair. The Room Planner lets shoppers place your configurable products at true scale, change finishes, walk through the space and open it in AR. With Shop the Look, your own team styles rooms and publishes them as looks shoppers can change and buy from.',
    forWho: ['Furniture and home decor brands', 'Kitchen, wardrobe and bath brands', 'Retailers with a configurable catalogue'],
    features: [
      { title: 'True-scale rooms', body: 'Every product keeps its real dimensions and its configured finish.' },
      { title: 'Walls and floors', body: 'Shoppers try wall and floor finishes alongside the furniture.' },
      { title: 'View in AR', body: 'The whole room opens in AR on the shopper’s phone.' },
      { title: 'Shop the Look', body: 'Rooms styled by your team, published on a page themed to your brand.' },
    ],
  },
  {
    id: 'yom',
    path: '/products/yom',
    brand: 'YOM',
    name: 'YOM, Your Own Metrics',
    logo: { src: '/brands/yom.svg', w: 24, h: 24 },
    url: 'https://yom.aapastech.com',
    urlLabel: 'yom.aapastech.com',
    category: 'First-party analytics',
    seoTitle: 'YOM: first-party analytics with exact conversions',
    seoDescription:
      'YOM counts purchases, leads and sign-ups exactly, reconciles them with your orders and enforces consent at the edge. First 100,000 events a month free.',
    oneLine: 'The measurement layer you can prove.',
    intro:
      'Ad dashboards and analytics tools rarely agree with your order system. YOM is first-party analytics that counts conversions exactly, deduplicates them by event id and reconciles them with your orders. Consent is enforced at the edge, so data a visitor did not agree to share never leaves.',
    forWho: ['E-commerce and D2C brands', 'Agencies running many client sites', 'Platforms that resell analytics', 'Regulated businesses'],
    features: [
      { title: 'Exact conversions', body: 'Purchase, refund, lead, form and sign-up events, deduplicated and reconciled by API or CSV.' },
      { title: 'Consent at the edge', body: 'DNT and GPC honoured, PII scrubbed, nothing sent to ad platforms without marketing consent.' },
      { title: 'Many clients, one account', body: 'Sub-tenants with scoped keys, usage per client for re-billing, and white-label portals.' },
      { title: 'Data out', body: 'Signed webhooks, Meta CAPI and GA4 Measurement Protocol behind consent, and hourly warehouse exports.' },
      { title: 'Ready for AI assistants', body: 'An MCP server with read-only tools, and a channel for traffic from AI assistants.' },
    ],
    pricing: 'yom',
  },
  {
    id: 'wonderlyar',
    path: '/products/wonderlyar',
    brand: 'WonderlyAR',
    name: 'WonderlyAR',
    logo: { src: '/brands/wonderlyar.svg', w: 64, h: 64 },
    url: 'https://wonderlyar.com',
    urlLabel: 'wonderlyar.com',
    category: 'AR in education',
    seoTitle: 'WonderlyAR: AR books for children aged 2 to 6',
    seoDescription:
      'WonderlyAR turns picture books into AR experiences for children aged 2 to 6. Scan a page in a phone browser and the characters appear in the room.',
    oneLine: 'Picture books that come alive in the room. No app needed.',
    intro:
      'WonderlyAR is augmented reality for early childhood. A child or teacher scans a page of an AR-enabled book in a phone browser, and 3D characters and worlds appear in the room. It works on iPhone and Android without installing an app.',
    forWho: ['Preschools', 'Parents', 'Educators and children’s authors'],
    features: [
      { title: 'For preschools', body: 'Curriculum-aligned AR books, teacher onboarding, an engagement dashboard and parent sharing.' },
      { title: 'For educators and creators', body: 'No-code AR creation, your own branding, distribution and per-scan royalties.' },
      { title: 'Browser-based', body: 'Nothing to install. Scan the page and the experience starts.' },
    ],
  },
  {
    id: 'partner-crm',
    path: '/products/partner-crm',
    brand: 'Aapastech',
    name: 'Partner CRM and workflow automation',
    category: 'CRM and automation',
    seoTitle: 'Partner CRM and workflow automation by Aapastech',
    seoDescription:
      'A CRM for companies that sell through partners: onboarding, pricing rules, quotes, approvals, e-signature, payments and renewals in one workflow.',
    oneLine: 'Partner onboarding, quotes, approvals, signing and renewals in one workflow.',
    intro:
      'We built this to run Thridify’s own partner channel, and it now runs as its own product with Thridify as a customer. It covers the whole path from a new partner to a renewed contract: onboarding, a pricing engine that enforces your discount rules, approvals, client proposals, signing, payment and renewals.',
    forWho: ['Companies that sell through resellers or partners', 'Teams quoting configurable or tiered offers', 'Businesses selling across countries with different contracting entities'],
    features: [
      { title: 'Partner portal', body: 'Role-aware access, onboarding, lead routing, enablement and a production board.' },
      { title: 'Pricing and quote engine', body: 'Deterministic pricing with policy checks, versioned quotes that cannot change after sending, and discount approvals.' },
      { title: 'Client portal', body: 'No account needed: proposal, signature, payment, intake, review and go-live from signed links, in English and French.' },
      { title: 'Signing on a phone', body: 'Scan a QR code to sign on a phone.' },
      { title: 'Money', body: 'An append-only ledger with clawback, referral commissions, finance exports and Stripe webhooks.' },
      { title: 'Geography first', body: 'Each deal is routed by country and mapped to the right contracting entity.' },
    ],
    notes: ['This product is being moved onto an Aapastech web address. Today it runs at partners.thridify.com for Thridify. Talk to us for access.'],
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface Service {
  id: string;
  path: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  oneLine: string;
  intro: string;
  whatWeDo: Feature[];
  relatedProducts?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'software-development',
    path: '/services/software-development',
    name: 'Software development',
    seoTitle: 'Software development by Aapastech',
    seoDescription:
      'Web apps, APIs, integrations and internal tools built by the team that runs Tyashin, Thridify and YOM in production on Cloudflare and Google Cloud.',
    oneLine: 'Web apps, APIs and integrations, built by the team that runs our own products.',
    intro:
      'We write the software behind Tyashin, Thridify, YOM and WonderlyAR, and we run it ourselves. That same team builds for clients: web applications, APIs, commerce integrations, 3D and AR features, and the internal tools that keep a business moving.',
    whatWeDo: [
      { title: 'Web applications', body: 'Next.js and React front ends, server-rendered where search matters.' },
      { title: 'APIs and back ends', body: 'Services on Cloudflare Workers and Google Cloud, with the data model designed for the business.' },
      { title: 'Integrations', body: 'Shopify, WooCommerce, BigCommerce, Stripe, Razorpay, CRMs and analytics, connected properly.' },
      { title: '3D and AR', body: 'Product viewers, configurators and WebAR built on the Thridify engine.' },
      { title: 'AI features', body: 'Assistants, content tools and MCP servers, with the disclosure and labelling rules built in.' },
    ],
    relatedProducts: ['tyashin', 'thridify', 'yom'],
  },
  {
    id: 'technology-consulting',
    path: '/services/technology-consulting',
    name: 'Technology consulting',
    seoTitle: 'Technology consulting for growing companies',
    seoDescription:
      'Architecture, cloud cost, security and AI adoption advice from people who run their own products in production across India, Europe and Canada.',
    oneLine: 'Architecture, cost, security and AI choices, from people who run production systems.',
    intro:
      'Advice is cheap when the adviser never has to run the result. We do. We help teams choose an architecture, cut cloud cost, prepare for security reviews and adopt AI without creating a compliance problem in three countries.',
    whatWeDo: [
      { title: 'Architecture reviews', body: 'Where your system will break as you grow, and what to change first.' },
      { title: 'Cloud and AI cost', body: 'We measure where the money goes before recommending anything.' },
      { title: 'Security and compliance readiness', body: 'VAPT follow-up, CERT-In logging, GDPR and DPDP groundwork.' },
      { title: 'AI adoption', body: 'Which tasks to hand to AI, which model to use, and how to label what it produces.' },
    ],
    relatedProducts: ['yom'],
  },
  {
    id: 'smb-growth-consulting',
    path: '/services/smb-growth-consulting',
    name: 'Business development consulting for SMBs',
    seoTitle: 'Business development consulting for small businesses',
    seoDescription:
      'Help for small and mid-sized businesses to find customers online: positioning, a site that converts, search and AI visibility, LinkedIn and partner channels.',
    oneLine: 'Find customers online without hiring a full marketing team.',
    intro:
      'Most small businesses do not need a bigger marketing budget. They need a clear offer, a site that turns visits into enquiries, and one or two channels worked properly. We help you pick them and set them up on tools you will keep using.',
    whatWeDo: [
      { title: 'Positioning', body: 'Who you sell to, what you say to them, and what you stop saying.' },
      { title: 'A site that converts', body: 'Built on Tyashin, with leads going into a CRM you actually open.' },
      { title: 'Search and AI visibility', body: 'Show up on Google and in ChatGPT, Gemini and Claude answers.' },
      { title: 'LinkedIn and partners', body: 'A founder voice on LinkedIn and, where it fits, a partner channel.' },
    ],
    relatedProducts: ['tyashin', 'tyashin-for-linkedin', 'partner-crm'],
  },
  {
    id: 'mvp-to-scale',
    path: '/services/mvp-to-scale',
    name: 'MVP to scale-up for founders',
    seoTitle: 'From MVP to scale-up: a path for founders',
    seoDescription:
      'For founders with an idea or a prototype: build the MVP, launch it on real infrastructure, measure what works, then scale the product and the team.',
    oneLine: 'From an idea or a prototype to a product that can carry a business.',
    intro:
      'A prototype from Lovable or Bolt proves an idea. It does not survive real customers, payments, search engines or a security review. We take founders from idea or prototype to a launched product, then help them grow it, in stages they can pay for one at a time.',
    whatWeDo: [
      { title: '1. Shape', body: 'Cut the idea down to the one thing a first customer will pay for.' },
      { title: '2. Build the MVP', body: 'Real code on real infrastructure, so you do not rebuild it later.' },
      { title: '3. Launch', body: 'Payments, legal pages, analytics and a site that search engines can read.' },
      { title: '4. Measure', body: 'First-party numbers with YOM, so decisions rest on what users did.' },
      { title: '5. Scale', body: 'Harden the system, add the team, and open new markets and entities.' },
    ],
    relatedProducts: ['tyashin', 'yom'],
  },
  {
    id: 'websites-on-tyashin',
    path: '/services/websites-on-tyashin',
    name: 'Websites built on Tyashin',
    seoTitle: 'Done-for-you websites on Tyashin',
    seoDescription:
      'Our team builds your website on Tyashin: real code, edge hosting, commerce, leads, chatbot and SEO, with a prototype port if you already have one.',
    oneLine: 'We build your site on Tyashin, and you own the code.',
    intro:
      'Tell us about the business and we build the site on Tyashin, or port the prototype you already have. You get a fast, server-rendered site with the store, lead inbox, chatbot and SEO switched on, in a repository you own.',
    whatWeDo: [
      { title: 'New sites', body: 'Designed for your brand, not picked from a template.' },
      { title: 'Prototype ports', body: 'Lovable, Bolt or React apps moved to an indexable, server-rendered site.' },
      { title: 'Stores', body: 'Catalogue, checkout, shipping, tax and payments in your markets.' },
      { title: 'After launch', body: 'Blog, SEO Co-Pilot and chatbot keep working once we hand over.' },
    ],
    relatedProducts: ['tyashin'],
  },
  {
    id: '3d-modelling',
    path: '/services/3d-modelling',
    name: '3D modelling',
    seoTitle: '3D product modelling service by Thridify',
    seoDescription:
      'Send photos, dimensions or CAD. Our studio models each product and delivers glTF, GLB and USDZ files, or publishes them straight into a Thridify viewer.',
    oneLine: 'Send photos, dimensions or CAD. Get accurate 3D models back.',
    intro:
      'Our 3D studio models your catalogue product by product from photos, dimensions or CAD files. Each model is built once and used everywhere: the web viewer, the configurator, AR and rendered stills.',
    whatWeDo: [
      { title: 'From what you have', body: 'Photos, dimension sheets or CAD.' },
      { title: 'Standard files', body: 'glTF and GLB with Draco compression, plus USDZ for iPhone AR.' },
      { title: 'Ready to publish', body: 'Delivered as files or set up in a Thridify viewer.' },
    ],
    relatedProducts: ['thridify', 'room-planner'],
  },
];

/* ------------------------------------------------------------------ */
/* Learning                                                            */
/* ------------------------------------------------------------------ */

export const COURSES = [
  {
    name: 'GenzPreneur',
    body: 'An AI course for young founders, taught by the people who build and run Aapastech’s products.',
  },
];

/* ------------------------------------------------------------------ */
/* Public proof (Thridify, as published on thridify.com)               */
/* ------------------------------------------------------------------ */

export const THRIDIFY_CLIENTS = [
  { name: 'Nasher Miles', logo: '/brands/clients/nasher-miles.webp', w: 80, h: 80 },
  { name: 'Guntier', logo: '/brands/clients/guntier.webp', w: 80, h: 80 },
  { name: 'Sunbaby', logo: '/brands/clients/sunbaby.webp', w: 80, h: 80 },
  { name: 'Vortex Splash', logo: '/brands/clients/vortex-splash.webp', w: 77, h: 80 },
  { name: 'Woodlark Veneer', logo: '/brands/clients/woodlark.webp', w: 96, h: 100 },
  { name: 'Airolam', logo: '/brands/clients/airolam.webp', w: 298, h: 100 },
];

export const THRIDIFY_QUOTES = [
  { quote: 'Our sales cycle has reduced from months to days and sometimes to hours with Thridify.', by: 'Guntier' },
  {
    quote:
      "Can't imagine my customers placing orders if they weren't trying my products in AR. Our sales rep do 50% of the job, and Thridify, the remaining 50%",
    by: 'Vortex Splash',
  },
];

/* ------------------------------------------------------------------ */
/* Pricing (live Tyashin and product pricing, per month)               */
/* ------------------------------------------------------------------ */

export type Currency = 'INR' | 'EUR' | 'GBP' | 'CAD' | 'USD';

export const TYASHIN_PLANS: { name: string; prices: Record<Currency, string>; includes: string }[] = [
  { name: 'Free', prices: { INR: 'Free', EUR: 'Free', GBP: 'Free', CAD: 'Free', USD: 'Free' }, includes: '1 member, 100 MB, 1 AI generation' },
  { name: 'Starter', prices: { INR: '₹1,499', EUR: '€18', GBP: '£16', CAD: 'C$27', USD: '$19' }, includes: 'Custom domain, 1 GB, 5 AI generations' },
  { name: 'Pro', prices: { INR: '₹3,999', EUR: '€47', GBP: '£40', CAD: 'C$68', USD: '$49' }, includes: '3 members, 5 GB, 10 AI generations, CRM and e-commerce' },
  { name: 'Business', prices: { INR: '₹7,999', EUR: '€95', GBP: '£82', CAD: 'C$138', USD: '$99' }, includes: '5 members, 25 GB, 25 AI generations, all plugins, priority support' },
];

export const LINKEDIN_PRICE: Record<Currency, string> = {
  INR: '₹14,999',
  EUR: '€145',
  GBP: 'US$145',
  CAD: 'C$225',
  USD: '$145',
};

export const TRUST_ITEMS: { title: string; status: 'Done' | 'In progress'; body: string; regions: RegionId[] }[] = [
  { title: 'Grievance Officer', status: 'Done', body: 'Named officer for India under the IT Rules and SPDI Rules, with published response times.', regions: ['in', 'eu', 'row'] },
  { title: 'CERT-In point of contact', status: 'Done', body: 'Point of contact submitted to CERT-In on 27 October 2026 for Aapastech Private Limited and 14818032 Canada Inc.', regions: ['in', 'eu', 'row'] },
  { title: 'CERT-In 180-day logs', status: 'In progress', body: 'Google Cloud logs already kept for 180 days. Cloudflare log retention is being switched on, due by 31 December 2026.', regions: ['in', 'eu', 'row'] },
  { title: 'AI chatbot disclosure', status: 'Done', body: 'The Tyashin chatbot tells visitors they are talking to an AI, as Article 50(1) of the EU AI Act requires.', regions: ['in', 'eu', 'row'] },
  { title: 'AI image labelling', status: 'In progress', body: 'Tyashin for LinkedIn labels its AI images today. Tyashin and Thridify follow before 2 December 2026 (EU) and 31 December 2026 (India).', regions: ['in', 'eu', 'row'] },
  { title: 'Content provenance (C2PA)', status: 'In progress', body: 'We keep the C2PA content credentials that image models attach, never strip them, and are working toward membership of the Content Authenticity Initiative.', regions: ['in', 'eu', 'row'] },
  { title: 'DMCA designated agent', status: 'In progress', body: 'Registration of our designated agent with the US Copyright Office is under way. Copyright notices already reach us at the address on our copyright page.', regions: ['row'] },
  { title: 'GDPR controller in the EU', status: 'Done', body: 'Aapastech OÜ in Tallinn is the controller for people in the EU and the UK, with privacy notices live on every product.', regions: ['eu'] },
  { title: 'UK representative (Article 27)', status: 'In progress', body: 'Our UK GDPR representative is being appointed and will be named here.', regions: ['eu'] },
  { title: 'DPDP Act readiness', status: 'In progress', body: 'Notices, consent records and Hindi versions of our policies are being prepared ahead of the Act’s core duties.', regions: ['in'] },
  { title: 'Canadian privacy officer', status: 'Done', body: 'A named Privacy Officer for PIPEDA and Quebec.', regions: ['row'] },
  { title: 'Security disclosure', status: 'Done', body: 'Responsible disclosure pages are live on thridify.com and yom.aapastech.com.', regions: ['in', 'eu', 'row'] },
];

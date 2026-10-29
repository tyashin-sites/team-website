import Link from 'next/link';

/* Literal links to every page, so crawlers and the Tyashin link checker see them.
   Keep in step with src/config/site.ts and src/lib/posts.ts. */
const L = 'text-sm text-muted transition-colors hover:text-primary';
const H = 'font-mono text-xs uppercase tracking-[0.16em] text-ink';

export function SiteIndex() {
  return (
    <>
      <div>
        <h2 className={H}>Products</h2>
        <ul className="mt-4 space-y-2">
          <li><Link href="/products/tyashin" className={L}>Tyashin</Link></li>
          <li><Link href="/products/tyashin-for-linkedin" className={L}>Tyashin for LinkedIn</Link></li>
          <li><Link href="/products/tyashin-invoice" className={L}>Tyashin Invoice</Link></li>
          <li><Link href="/products/thridify" className={L}>Thridify</Link></li>
          <li><Link href="/products/room-planner" className={L}>Thridify Room Planner</Link></li>
          <li><Link href="/products/yom" className={L}>YOM, Your Own Metrics</Link></li>
          <li><Link href="/products/wonderlyar" className={L}>WonderlyAR</Link></li>
          <li><Link href="/products/partner-crm" className={L}>Partner CRM and workflow automation</Link></li>
        </ul>
      </div>
      <div>
        <h2 className={H}>Services</h2>
        <ul className="mt-4 space-y-2">
          <li><Link href="/services/software-development" className={L}>Software development</Link></li>
          <li><Link href="/services/technology-consulting" className={L}>Technology consulting</Link></li>
          <li><Link href="/services/smb-growth-consulting" className={L}>Business development consulting for SMBs</Link></li>
          <li><Link href="/services/mvp-to-scale" className={L}>MVP to scale-up for founders</Link></li>
          <li><Link href="/services/websites-on-tyashin" className={L}>Websites built on Tyashin</Link></li>
          <li><Link href="/services/3d-modelling" className={L}>3D modelling</Link></li>
        </ul>
      </div>
      <div className="grid gap-10">
        <div>
          <h2 className={H}>Company</h2>
          <ul className="mt-4 space-y-2">
          <li><Link href="/about" className={L}>About</Link></li>
          <li><Link href="/learning" className={L}>Learning</Link></li>
          <li><Link href="/insights" className={L}>Insights</Link></li>
          <li><Link href="/trust" className={L}>Trust and compliance</Link></li>
          <li><Link href="/contact" className={L}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className={H}>Legal</h2>
          <ul className="mt-4 space-y-2">
          <li><Link href="/privacy" className={L}>Privacy</Link></li>
          <li><Link href="/terms" className={L}>Terms</Link></li>
          <li><Link href="/grievance" className={L}>Grievance Officer</Link></li>
          <li><Link href="/copyright" className={L}>Copyright and DMCA</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export function PostIndex() {
  return (
    <ul className="mt-4 space-y-2">
          <li><Link href="/insights/one-group-three-companies" className={L}>One group, three companies: who you sign with</Link></li>
          <li><Link href="/insights/how-our-grievance-officer-works" className={L}>How our Grievance Officer handles a complaint</Link></li>
          <li><Link href="/insights/labelling-ai-images" className={L}>How we label AI images across our products</Link></li>
          <li><Link href="/insights/cert-in-point-of-contact" className={L}>What being registered with CERT-In means for our customers</Link></li>
    </ul>
  );
}

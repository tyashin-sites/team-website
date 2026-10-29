import Link from 'next/link';
import { Container } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="drawing-grid">
      <Container className="py-28">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-ink">This page is not on the drawing.</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">The link may be old, or the address mistyped. These will get you back on track.</p>
        <div className="mt-8 flex flex-wrap gap-4 text-primary">
          <Link href="/" className="font-semibold underline">Home</Link>
          <Link href="/products" className="font-semibold underline">Products</Link>
          <Link href="/services" className="font-semibold underline">Services</Link>
          <Link href="/contact" className="font-semibold underline">Contact</Link>
        </div>
      </Container>
    </section>
  );
}

'use client';

import Link from 'next/link';

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28">
      <h1 className="text-4xl font-semibold text-ink">Something went wrong on our side.</h1>
      <p className="mt-4 text-lg text-muted">Please try again. If it keeps happening, email contact@aapastech.com.</p>
      <div className="mt-8 flex gap-4">
        <button type="button" onClick={reset} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast">
          Try again
        </button>
        <Link href="/" className="self-center font-semibold text-primary underline">
          Go home
        </Link>
      </div>
    </section>
  );
}

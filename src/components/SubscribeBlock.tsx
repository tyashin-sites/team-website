'use client';

import { useState, type FormEvent } from 'react';

/**
 * Newsletter subscribe block. Posts to the Tyashin blog subscribe endpoint on
 * this origin, so it shares the blog's subscriber list and its double opt-in:
 * nothing is sent until the visitor opens the link in the confirmation email.
 */
export const SUBSCRIBE_PROMISE = 'One email a week with our research. No product pitches.';
const ENDPOINT = '/_tyashin/blog/subscribe';

type State = { kind: 'idle' | 'sending' | 'ok' | 'error'; message?: string };

export function SubscribeBlock({ source, variant = 'section' }: { source: 'home' | 'footer'; variant?: 'section' | 'compact' }) {
  const [state, setState] = useState<State>({ kind: 'idle' });
  const id = `subscribe-${source}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState({ kind: 'sending' });
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ email: String(fd.get('email') || ''), website: String(fd.get('website') || ''), source }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (res.ok && data?.success) {
        form.reset();
        setState({ kind: 'ok', message: data.message || 'Check your inbox for a link to confirm.' });
      } else {
        setState({ kind: 'error', message: data?.message || 'That did not work. Please try again.' });
      }
    } catch {
      setState({ kind: 'error', message: 'That did not work. Please try again.' });
    }
  }

  const compact = variant === 'compact';
  return (
    <div className={compact ? '' : 'rounded-lg border border-border bg-surface p-8'}>
      <h2 id={`${id}-h`} className={compact ? 'font-mono text-xs uppercase tracking-[0.16em] text-ink' : 'text-2xl font-semibold text-ink'}>
        {compact ? 'Newsletter' : 'Get our research by email'}
      </h2>
      <p className={compact ? 'mt-4 text-sm text-muted' : 'mt-3 text-muted'}>{SUBSCRIBE_PROMISE}</p>
      <form onSubmit={onSubmit} method="post" action={ENDPOINT} aria-labelledby={`${id}-h`} className="mt-4">
        <input type="hidden" name="source" value={source} />
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={state.kind === 'sending'}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast transition-colors hover:bg-ink disabled:opacity-60"
          >
            {state.kind === 'sending' ? 'Sending...' : 'Subscribe'}
          </button>
        </div>
        <p role="status" aria-live="polite" className={`mt-3 text-sm ${state.kind === 'error' ? 'text-red-700' : 'text-foreground'}`}>
          {state.message || ''}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          We send a confirmation link first. Every email has an unsubscribe link. See our{' '}
          <a href="/privacy#newsletter" className="underline">
            privacy notice
          </a>
          .
        </p>
      </form>
    </div>
  );
}

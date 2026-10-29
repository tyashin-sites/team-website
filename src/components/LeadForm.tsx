'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';

type State = 'idle' | 'sending' | 'sent' | 'limit' | 'error';

export function LeadForm({ apiUrl, apiKey, topics = [] }: { apiUrl: string; apiKey: string; topics?: string[] }) {
  const renderedAt = useRef<number>(0);
  const [state, setState] = useState<State>('idle');
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);
  const disabled = !apiUrl || !apiKey;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (disabled) return;
    const f = new FormData(e.currentTarget);
    setState('sending');
    try {
      const topic = String(f.get('topic') ?? '');
      const res = await fetch(`${apiUrl.replace(/\/$/, '')}/api/v1/contact/public/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _apiKey: apiKey,
          name: String(f.get('name') ?? ''),
          email: String(f.get('email') ?? ''),
          phone: String(f.get('phone') ?? ''),
          company: String(f.get('company') ?? ''),
          subject: topic ? `Enquiry: ${topic}` : 'Enquiry',
          message: String(f.get('message') ?? ''),
          pageUrl: location.href,
          source: 'contact-form',
          company_website: String(f.get('company_website') ?? ''),
          renderedAt: renderedAt.current,
        }),
      });
      if (res.status === 429) return setState('limit');
      if (!res.ok) return setState('error');
      setState('sent');
      e.currentTarget?.reset();
    } catch {
      setState('error');
    }
  }

  const field = 'mt-1 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-foreground focus:border-primary focus:outline-none';
  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      {disabled ? (
        <p className="rounded-md bg-background p-3 text-sm text-muted">The form opens once the site is live. Email contact@aapastech.com in the meantime.</p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium text-ink">
          Work email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium text-ink">
          Phone <span className="font-normal text-muted">(optional)</span>
          <input name="phone" maxLength={30} autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-medium text-ink">
          Company <span className="font-normal text-muted">(optional)</span>
          <input name="company" maxLength={200} autoComplete="organization" className={field} />
        </label>
      </div>
      {topics.length ? (
        <label className="text-sm font-medium text-ink">
          What is it about?
          <select name="topic" className={field} defaultValue="">
            <option value="">Choose one</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <label className="text-sm font-medium text-ink">
        Message
        <textarea name="message" rows={5} maxLength={5000} className={field} />
      </label>
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={disabled || state === 'sending'}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast transition-colors hover:bg-ink disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p aria-live="polite" className="text-sm">
          {state === 'sent' ? <span className="text-primary">Thanks. We have your message and will reply by email.</span> : null}
          {state === 'limit' ? <span className="text-accent">We could not take the message right now. Please email contact@aapastech.com.</span> : null}
          {state === 'error' ? <span className="text-accent">Something went wrong. Please try again, or email contact@aapastech.com.</span> : null}
        </p>
      </div>
      <p className="text-xs text-muted">
        We use what you send only to reply. It is stored for us by Tyashin, our own platform. See the privacy notice for details.
      </p>
    </form>
  );
}

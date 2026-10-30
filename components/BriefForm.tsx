"use client";

import { useState, type FormEvent } from "react";

const field =
  "peer w-full border-0 border-b border-[#cfcfcf] bg-transparent px-0 pb-3 pt-2 text-[16px] outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-ink";
const labelCls = "label block";

/**
 * Brief Us form: Name / Phone / Email / Company + optional "What's at stake?".
 * TODO: connect to a destination (email or Google Sheet). For now it only
 * validates and shows the thank-you message — nothing is sent anywhere yet.
 */
export default function BriefForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget)); → send it here once the destination is set
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-t border-ink pt-8" role="status">
        <p className="label">Brief received</p>
        <p className="mt-4 text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.25] tracking-[-0.02em]">
          Thanks. We&apos;ll add the salt.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7]">You&apos;ll hear from us within 2 days. Guaranteed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelCls}>Name</label>
        <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={labelCls}>Phone</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+91" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
      </div>
      <div>
        <label htmlFor="company" className={labelCls}>Company</label>
        <input id="company" name="company" required autoComplete="organization" placeholder="Company name" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="stake" className={labelCls}>
          What&apos;s at stake? <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea id="stake" name="stake" rows={3} placeholder="A line or two about the problem" className={`${field} resize-none`} />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-3 bg-ink px-7 font-mono text-[12px] uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-85"
        >
          Submit brief
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
        <p className="font-mono text-[12px] leading-[1.6]">Response time: 2 days. Guaranteed.</p>
      </div>
    </form>
  );
}

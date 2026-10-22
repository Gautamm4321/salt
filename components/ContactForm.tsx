"use client";

import { useState } from "react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
];

/**
 * Brief form. NOTE: it isn't wired to a backend yet — connect it to an
 * API route / email service before going live.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[28px] border border-black/15 bg-[#f3ebdd]/70 p-10 backdrop-blur-md">
        <p className="font-[family-name:var(--font-syne)] text-3xl font-bold uppercase">Brief received.</p>
        <p className="mt-3 text-lg">We&apos;ll add the SALT and get back to you within 2 days. Guaranteed.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[28px] border border-black/15 bg-[#f3ebdd]/60 p-7 backdrop-blur-md md:p-10"
    >
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.name} className="group block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">{f.label}</span>
            <input
              required={f.name !== "company"}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              className="mt-1 mb-5 w-full border-b border-black/30 bg-transparent py-2.5 text-lg text-black outline-none transition-colors placeholder:text-black/40 focus:border-black"
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="group mt-4 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#e8dcc8] transition-transform duration-300 hover:scale-[1.03]"
      >
        Submit
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}

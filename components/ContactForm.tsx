"use client";

import { useState } from "react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", required: true },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", required: false },
];

/**
 * Brief form (styled for the black closing section).
 * NOTE: not connected to a backend yet — wire it to an API route / email service before launch.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="border-t border-white/20 pt-10">
        <p className="font-[family-name:var(--font-serif)] text-3xl font-bold">Brief received.</p>
        <p className="mt-3 text-white/60">We’ll add the SALT and get back to you within 2 days. Guaranteed.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      aria-label="Brief SALT"
    >
      <div className="grid gap-x-10 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.name} className="block">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              {f.label}
              {f.required ? "" : " (optional)"}
            </span>
            <input
              name={f.name}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              className="mt-2 mb-8 w-full border-b border-white/25 bg-transparent py-2 text-lg text-white outline-none focus:border-salt"
            />
          </label>
        ))}
      </div>
      <button type="submit" className="bg-white px-9 py-4 text-[12px] uppercase tracking-[0.3em] text-black hover:bg-salt hover:text-white">
        Submit brief →
      </button>
    </form>
  );
}

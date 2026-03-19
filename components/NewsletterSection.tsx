"use client";

import { FormEvent, useState } from "react";

type NewsletterSectionProps = {
  compact?: boolean;
};

export function NewsletterSection({ compact = false }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        setError(data.error ?? "Unable to subscribe right now.");
        return;
      }

      setSuccess("Subscribed successfully.");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (compact) {
    return (
      <section
        id="newsletter"
        className="rounded-[1.8rem] border border-black/8 bg-white/88 p-5 shadow-[0_18px_50px_rgba(17,17,17,0.08)] backdrop-blur md:p-6"
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Newsletter</p>
        <h2 className="max-w-xl text-2xl font-black leading-tight md:text-3xl">Get the weekly AI brief before the market catches up.</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-black/68 md:text-base">
          Practical AI strategy, technical implementation notes, and operator-level signals for teams building real advantage.
        </p>
        <form className="mt-5 flex max-w-2xl flex-col gap-3 sm:flex-row" aria-label="Newsletter subscription form" onSubmit={onSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your business email"
            className="h-12 flex-1 rounded-full border border-black/10 bg-bg px-5 text-sm outline-none transition focus:border-accent md:text-base"
          />
          <button
            className="h-12 rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {success ? <p className="mt-3 text-sm text-green-700">{success}</p> : null}
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </section>
    );
  }

  return (
    <section id="newsletter" className="rounded-3xl bg-white px-6 py-14 text-center shadow-card md:px-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Newsletter</p>
      <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
        Weekly AI intelligence brief for serious operators.
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-black/70">
        Actionable frameworks, implementation patterns, and market signals designed for executives and technical leaders.
      </p>
      <form className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row" aria-label="Newsletter subscription form" onSubmit={onSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your business email"
          className="h-14 flex-1 rounded-full border border-black/10 bg-bg px-6 text-base outline-none transition focus:border-accent"
        />
        <button
          className="h-14 rounded-full bg-black px-8 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </form>
      {success ? <p className="mt-4 text-sm text-green-700">{success}</p> : null}
      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
    </section>
  );
}

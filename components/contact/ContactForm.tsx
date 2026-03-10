"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok) {
        setError(data.error ?? "Unable to submit form.");
        return;
      }

      setSuccess("Message sent successfully. We will get back to you shortly.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5 rounded-3xl border border-black/10 bg-white p-8 shadow-soft" aria-label="Contact form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-bg px-4 outline-none transition focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-bg px-4 outline-none transition focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-black/10 bg-bg p-4 outline-none transition focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
      {success ? <p className="text-sm text-green-700">{success}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}

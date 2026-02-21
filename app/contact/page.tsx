import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with AIUPSKILLED for enterprise or team learning inquiries."
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <h1 className="mb-8 text-4xl font-black tracking-tight md:text-6xl">Contact</h1>
      <form className="space-y-5 rounded-3xl border border-black/10 bg-white p-8 shadow-soft" aria-label="Contact form">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
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
            rows={6}
            className="w-full rounded-xl border border-black/10 bg-bg p-4 outline-none transition focus:border-accent"
          />
        </div>
        <button type="submit" className="rounded-full bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-accent">
          Submit
        </button>
      </form>
    </section>
  );
}

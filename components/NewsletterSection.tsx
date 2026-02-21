export function NewsletterSection() {
  return (
    <section id="newsletter" className="rounded-3xl bg-white px-6 py-14 text-center shadow-card md:px-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Newsletter</p>
      <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
        Weekly AI intelligence brief for serious operators.
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-black/70">
        Actionable frameworks, implementation patterns, and market signals designed for executives and technical leaders.
      </p>
      <form className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row" aria-label="Newsletter subscription form">
        <input
          type="email"
          required
          placeholder="Enter your business email"
          className="h-14 flex-1 rounded-full border border-black/10 bg-bg px-6 text-base outline-none transition focus:border-accent"
        />
        <button className="h-14 rounded-full bg-black px-8 text-sm font-semibold text-white transition hover:bg-accent" type="submit">
          Subscribe Now
        </button>
      </form>
    </section>
  );
}

type Props = {
  company: string;
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ company, quote, name, role }: Props) {
  return (
    <article className="rounded-xl2 border border-black/5 bg-white p-7 shadow-soft">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{company}</p>
      <blockquote className="mb-5 text-lg leading-relaxed text-black/85">“{quote}”</blockquote>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-black/60">{role}</p>
    </article>
  );
}

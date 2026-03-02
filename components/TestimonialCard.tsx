import Image from "next/image";

type Props = {
  company: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};

export function TestimonialCard({ company, quote, name, role, image }: Props) {
  return (
    <article className="rounded-[1.7rem] border border-black/8 bg-white p-6 shadow-[0_16px_40px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(17,17,17,0.09)]">
      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/8 bg-bg">
          <Image src={image} alt={name} fill sizes="56px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{company}</p>
          <p className="font-semibold text-black">{name}</p>
          <p className="text-sm text-black/60">{role}</p>
        </div>
      </div>
      <blockquote className="text-lg leading-relaxed text-black/85">“{quote}”</blockquote>
    </article>
  );
}

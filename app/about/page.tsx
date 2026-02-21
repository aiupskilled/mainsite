import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the founders behind AIUPSKILLED and the mission driving premium AI education."
};

const founders = [
  {
    name: "Arpit Anand",
    image: "/images/founder-arpit.svg",
    bio: "Arpit is a product-minded AI operator focused on turning advanced capabilities into measurable business systems.",
    mission:
      "Help leadership teams move from AI experimentation to disciplined execution with strategic clarity and operating cadence.",
    vision:
      "Build the global standard for practical AI mastery across enterprise and technical domains."
  },
  {
    name: "Prakash Raja",
    image: "/images/founder-prakash.svg",
    bio: "Prakash is a systems-focused technology strategist specializing in architecture, reliability, and organizational AI adoption.",
    mission:
      "Equip technical teams with repeatable engineering patterns that reduce risk and accelerate time-to-value.",
    vision:
      "Create high-trust AI organizations that deliver resilient products and compounding advantage."
  }
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <h1 className="mb-10 text-4xl font-black tracking-tight md:text-6xl">About AIUPSKILLED</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {founders.map((founder) => (
          <article key={founder.name} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-soft">
            <div className="relative h-72 w-full">
              <Image src={founder.image} alt={founder.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="space-y-4 p-7">
              <h2 className="text-3xl font-bold">{founder.name}</h2>
              <p className="text-black/75">{founder.bio}</p>
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Mission</h3>
                <p className="text-black/75">{founder.mission}</p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Vision</h3>
                <p className="text-black/75">{founder.vision}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

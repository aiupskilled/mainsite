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
    role: "Co-Founder · Strategy & Positioning",
    bio: "Arpit is a product-minded AI operator focused on turning advanced capabilities into measurable business systems. He works at the intersection of market positioning, executive clarity, and practical AI adoption.",
    mission:
      "Help leadership teams move from AI experimentation to disciplined execution with strategic clarity and operating cadence.",
    vision:
      "Build the global standard for practical AI mastery across enterprise and technical domains."
  },
  {
    name: "Prakash Raja",
    image: "/images/founder-prakash.svg",
    role: "Co-Founder · Systems & Execution",
    bio: "Prakash is a systems-focused technology strategist specializing in architecture, reliability, and organizational AI adoption. He brings technical rigor to how AI products are designed, evaluated, and shipped.",
    mission:
      "Equip technical teams with repeatable engineering patterns that reduce risk and accelerate time-to-value.",
    vision:
      "Create high-trust AI organizations that deliver resilient products and compounding advantage."
  }
];

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(255,107,107,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#faf9f6_72%)]">
        <div className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-22">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent backdrop-blur">
              About AIUPSKILLED
            </p>
            <h1 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">The founders behind AIUPSKILLED.</h1>
            <p className="mt-6 max-w-2xl text-lg text-black/70 md:text-xl">
              Two complementary operators building a premium AI learning platform for executives and technical teams.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 xl:grid-cols-2">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className={`overflow-hidden rounded-[2.2rem] border border-black/8 p-3 shadow-[0_24px_80px_rgba(17,17,17,0.07)] ${index === 0 ? "bg-white" : "bg-[#fffaf8]"}`}
            >
              <div className="grid gap-8 rounded-[1.8rem] border border-black/5 bg-white p-6 md:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-black/8 bg-bg p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                    <Image src={founder.image} alt={founder.name} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 30vw" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{founder.role}</p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{founder.name}</h2>
                  </div>
                  <p className="text-base leading-7 text-black/72">{founder.bio}</p>
                  <div className="grid gap-3">
                    <div className="rounded-[1.2rem] border border-black/8 bg-bg px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Mission</p>
                      <p className="mt-2 text-sm leading-6 text-black/72">{founder.mission}</p>
                    </div>
                    <div className="rounded-[1.2rem] border border-black/8 bg-bg px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Vision</p>
                      <p className="mt-2 text-sm leading-6 text-black/72">{founder.vision}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Foundations Course - ₹99",
  description:
    "Learn AI Introduction, ML basics, AI roadmap, LLMs, and essential AI tools in a practical beginner-friendly ₹99 course.",
  alternates: {
    canonical: "/ai-course-99"
  },
  openGraph: {
    title: "AI Foundations Course - ₹99 | AIUPSKILLED",
    description:
      "Learn AI Introduction, ML basics, AI roadmap, LLMs, and essential AI tools in a practical beginner-friendly ₹99 course.",
    url: `${siteConfig.url}/ai-course-99`
  },
  twitter: {
    title: "AI Foundations Course - ₹99 | AIUPSKILLED",
    description:
      "Learn AI Introduction, ML basics, AI roadmap, LLMs, and essential AI tools in a practical beginner-friendly ₹99 course."
  }
};

const modules = [
  "AI Introduction",
  "Machine Learning Introduction",
  "AI Roadmap",
  "LLMs Fundamentals",
  "Essential AI Tools and Workflows"
];

const outcomes = [
  "Understand the AI landscape and where to start",
  "Build a practical learning roadmap for next 90 days",
  "Use LLMs and tools for daily productivity",
  "Avoid beginner mistakes while adopting AI"
];

export default function AiCourse99Page() {
  return (
    <div className="pb-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "AI Foundations Course",
          description:
            "Beginner-friendly AI course covering AI intro, ML basics, AI roadmap, LLMs, and practical AI tools.",
          provider: {
            "@type": "Organization",
            name: "AIUPSKILLED"
          },
          url: `${siteConfig.url}/ai-course-99`,
          offers: {
            "@type": "Offer",
            price: "99",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock"
          }
        }}
      />

      <section className="border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,107,107,0.1),transparent_30%),linear-gradient(180deg,#ffffff_0%,#faf9f6_72%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              New Launch
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">AI Foundations Course</h1>
            <p className="mt-4 max-w-2xl text-lg text-black/70">
              A complete beginner-to-practical foundation for professionals who want to start AI the right way.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">₹99 only</span>
              <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70">
                5 Core Modules
              </span>
              <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70">
                Self-paced
              </span>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white transition hover:bg-accent"
              >
                Buy Now
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-3 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
            <div className="aspect-video overflow-hidden rounded-[1.2rem] bg-black">
              <iframe
                src="https://player.vimeo.com/video/1172099904?fl=ip&fe=ec"
                title="AI Foundations Course Intro"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border border-black/10 bg-white p-6">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">Course Curriculum</h2>
            <div className="mt-5 space-y-3">
              {modules.map((module, index) => (
                <div key={module} className="flex items-center gap-3 border border-black/8 bg-bg px-4 py-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-black/80">{module}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-black/10 bg-white p-6">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">What You Get</h2>
            <ul className="mt-5 space-y-3">
              {outcomes.map((item) => (
                <li key={item} className="border border-black/8 bg-bg px-4 py-3 text-sm text-black/78">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 border border-black/10 bg-[#fff9f7] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Ideal For</p>
              <p className="mt-2 text-sm text-black/75">
                Students, professionals, founders, and anyone starting AI from scratch with a practical roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Buy Now - ₹99
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}

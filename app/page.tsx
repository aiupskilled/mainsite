import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CourseListingCard } from "@/components/courses/CourseListingCard";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Courses for Executives and Tech Teams",
  description:
    "Master practical AI strategy, tools, and implementation with premium courses for executives and technical professionals.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AI Courses for Executives and Tech Teams | AIUPSKILLED",
    description:
      "Master practical AI strategy, tools, and implementation with premium courses for executives and technical professionals.",
    url: siteConfig.url
  },
  twitter: {
    title: "AI Courses for Executives and Tech Teams | AIUPSKILLED",
    description:
      "Master practical AI strategy, tools, and implementation with premium courses for executives and technical professionals."
  }
};

const testimonials = [
  {
    company: "PhonePe",
    quote:
      "The executive track helped us align leadership on where AI should create measurable business leverage instead of scattered pilots.",
    name: "Aarav Mehta",
    role: "VP Product, Bengaluru",
    image: "/images/testimonial-aarav.svg"
  },
  {
    company: "Swiggy",
    quote:
      "The frameworks were crisp, practical, and immediately usable for cross-functional rollout planning across product and operations.",
    name: "Isha Narayanan",
    role: "Strategy Lead, Chennai",
    image: "/images/testimonial-isha.svg"
  },
  {
    company: "Zaggle",
    quote:
      "AIUPSKILLED treats technical execution with seriousness. The builder track maps directly to how modern teams should ship AI products.",
    name: "Rohan Kulkarni",
    role: "Engineering Manager, Pune",
    image: "/images/testimonial-rohan.svg"
  },
  {
    company: "Flipkart",
    quote:
      "The material gave our team a stronger internal language for governance, capability planning, and implementation sequencing.",
    name: "Meera Srinivasan",
    role: "Program Director, Hyderabad",
    image: "/images/testimonial-meera.svg"
  },
  {
    company: "OLA",
    quote:
      "High trust, high clarity, and no fluff. It helped us connect executive intent with engineering realities much faster.",
    name: "Karan Bhatia",
    role: "Principal Solutions Lead, Gurugram",
    image: "/images/testimonial-karan.svg"
  },
  {
    company: "Amazon",
    quote:
      "One of the rare programs that balances strategic context with practical implementation depth for serious teams in India.",
    name: "Ananya Rao",
    role: "AI Platform Architect, Mumbai",
    image: "/images/testimonial-ananya.svg"
  }
];

const faqs = [
  {
    question: "How quickly can we implement AI outcomes after enrolling?",
    answer:
      "Most teams launch their first AI initiative within 2-4 weeks using the implementation templates, governance checklists, and sprint roadmap provided in the programs."
  },
  {
    question: "Do these courses cover both strategy and execution?",
    answer:
      "Yes. AI FOR EXECUTIVES focuses on business strategy and governance, while AI FOR TECH PEOPLE goes deep on architecture, evaluation, deployment, and operations."
  },
  {
    question: "Is this relevant for non-AI-native organizations?",
    answer:
      "Absolutely. The curriculum is designed to help organizations at early, mid, and advanced maturity levels adopt AI with minimal operational disruption."
  },
  {
    question: "Will we receive practical frameworks and templates?",
    answer:
      "Each course includes reusable implementation assets: initiative scorecards, rollout plans, evaluation rubrics, and KPI frameworks for tracking business impact."
  },
  {
    question: "How technical is AI FOR EXECUTIVES?",
    answer:
      "The executive track is intentionally non-code and decision-focused. It equips leadership to manage AI programs confidently without requiring engineering depth."
  },
  {
    question: "Can technical teams enroll as a group?",
    answer:
      "Yes. Team enrollment is ideal for aligning product, engineering, and platform stakeholders on architecture standards and deployment quality."
  }
];

const stats = [
  { label: "Learning Hours", value: "10,000+" },
  { label: "Learners Upskilled", value: "1000+" },
  { label: "Enterprise Teams", value: "320+" },
  { label: "Avg. Course Rating", value: "4.9/5" }
];

const trustedLogos = [
  { name: "OpenAI", src: "/images/logos/openai.svg", href: "https://openai.com" },
  { name: "Microsoft", src: "/images/logos/microsoft.svg", href: "https://www.microsoft.com" },
  { name: "Meta", src: "/images/logos/meta.svg", href: "https://about.meta.com" },
  { name: "Amazon", src: "/images/logos/amazon.svg", href: "https://www.amazon.com" },
  { name: "NVIDIA", src: "/images/logos/nvidia.svg", href: "https://www.nvidia.com" }
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              name: "AIUPSKILLED",
              url: siteConfig.url,
              description: "Executive and technical AI upskilling programs",
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.instagram,
                siteConfig.social.twitter,
                siteConfig.social.youtube
              ]
            },
            {
              "@type": "WebSite",
              name: "AIUPSKILLED",
              url: siteConfig.url
            }
          ]
        }}
      />
      <JsonLd data={faqSchema} />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="ai-grid absolute inset-0 opacity-50" />
          <div className="ai-orb ai-orb-1" />
          <div className="ai-orb ai-orb-2" />
          <div className="ai-orb ai-orb-3" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:px-8 md:pt-20">
          <div className="fade-in-up space-y-6">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            For Executives & Tech Professionals
          </p>
            <h1 className="text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">Master AI Skills to Transform Your Career</h1>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55 md:text-base">
              AI Tools + Automation - Learn Faster, Work Smarter
            </p>
            <p className="max-w-2xl text-lg text-black/70 md:text-xl">
              Learn practical AI with real workflows, implementation frameworks, and production-ready skills designed for professionals who want measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-accent"
              >
                Start Learning Free
              </Link>
              <Link
                href="/courses"
                className="inline-flex rounded-full border border-black/15 bg-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:border-accent hover:text-accent"
              >
                Explore Courses
              </Link>
            </div>
          </div>
          <div className="fade-in-up relative overflow-hidden rounded-3xl border border-black/5 bg-white p-2 shadow-card">
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                src="https://player.vimeo.com/video/1172099904?fl=ip&fe=ec"
                title="AI Up Skilled intro"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <NewsletterSection compact />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8" id="courses">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold md:text-5xl">Explore Courses</h2>
          <Link href="/courses" className="text-sm font-semibold text-accent">
            View All
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {courses.map((course) => (
            <CourseListingCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Trusted by Teams</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Testimonials.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_16px_50px_rgba(17,17,17,0.06)] md:p-8">
          <div className="mb-6 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Social Proof</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Trusted by professionals and teams scaling AI capability.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-[1.25rem] border border-black/8 bg-bg px-5 py-5">
                <p className="text-3xl font-black tracking-tight md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-black/65">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">FAQ</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_16px_50px_rgba(17,17,17,0.06)] md:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Trusted Network</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight md:text-4xl">Employees from leading AI and tech companies trust AIUPSKILLED.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {trustedLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-16 items-center justify-center rounded-[1rem] border border-black/10 bg-bg px-4 transition hover:border-accent/40 hover:bg-white"
                aria-label={`Visit ${logo.name}`}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={130}
                  height={34}
                  className="h-7 w-auto object-contain opacity-80"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <NewsletterSection />
      </section>
    </>
  );
}

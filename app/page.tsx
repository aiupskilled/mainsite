import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { courses } from "@/lib/courses";

const testimonials = [
  {
    company: "OpenAI",
    quote:
      "The strategic clarity from AIUPSKILLED is exceptional. Our cross-functional teams now execute with shared language and measurable milestones.",
    name: "Elena Brooks",
    role: "Director, Applied Strategy"
  },
  {
    company: "Anthropic",
    quote:
      "A premium program built for real operators. It helped senior leaders bridge governance, capability building, and product velocity.",
    name: "Marcus Lee",
    role: "Head of Enterprise Programs"
  },
  {
    company: "Google DeepMind",
    quote:
      "Precision over hype. The frameworks are practical and adapted for large-scale technical environments.",
    name: "Sonia Patel",
    role: "AI Transformation Lead"
  },
  {
    company: "Meta AI",
    quote:
      "Our internal adoption playbook improved significantly after this training. It turned intent into reliable operating rhythm.",
    name: "Daniel Romero",
    role: "Program Manager, AI"
  },
  {
    company: "Microsoft AI",
    quote:
      "High-trust, high-rigor content. It aligns leadership strategy with engineering realities in a rare way.",
    name: "Nora Elliott",
    role: "Principal, Strategic Enablement"
  },
  {
    company: "NVIDIA AI",
    quote:
      "This is exactly the standard we expect for premium executive AI education: practical depth with sharp business alignment.",
    name: "Victor Chen",
    role: "Senior Solutions Architect"
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

const instagramMocks = [
  "Executive AI strategy sprint was exactly what our board needed.",
  "Finally, a technical AI course that treats evals and reliability seriously.",
  "The quality feels world-class. Premium, practical, and direct.",
  "Our AI roadmap is now tied to revenue and cost targets.",
  "Best AI learning investment our team made this quarter.",
  "Clear frameworks, fast implementation, strong outcomes."
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "AIUPSKILLED",
          url: "https://aiupskilled.com",
          description: "Executive and technical AI upskilling programs",
          sameAs: [
            "https://www.linkedin.com",
            "https://www.instagram.com",
            "https://x.com",
            "https://www.youtube.com"
          ]
        }}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:px-8 md:pt-20">
        <div className="fade-in-up space-y-6">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            For Executives & Tech Professionals
          </p>
          <h1 className="text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">UPSKILL TO AI DOMINANCE</h1>
          <p className="max-w-xl text-lg text-black/70">
            Built for high-performance leaders and technical teams who need real AI leverage. Learn to architect strategy, deploy production systems, and create defensible advantage.
          </p>
          <Link
            href="/courses"
            className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-accent"
          >
            Explore Courses
          </Link>
        </div>
        <div className="fade-in-up relative overflow-hidden rounded-3xl border border-black/5 bg-white p-2 shadow-card">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="AIUPSKILLED intro"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8" id="courses">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold md:text-5xl">Explore Courses</h2>
          <Link href="/courses" className="text-sm font-semibold text-accent">
            View All
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">Trusted by Teams Across the AI Frontier</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.company} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">FAQ</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">Instagram Reviews</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {instagramMocks.map((review, index) => (
            <article key={review} className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">@aiupskilled {index + 1}</p>
              <p className="text-black/80">{review}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <NewsletterSection />
      </section>
    </>
  );
}

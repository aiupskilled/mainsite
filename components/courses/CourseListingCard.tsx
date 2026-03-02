import Link from "next/link";
import type { Course } from "@/lib/courses";

type Props = {
  course: Course;
};

function CourseIcon({ type }: { type: Course["icon"] }) {
  if (type === "executive") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CourseListingCard({ course }: Props) {
  const isExecutive = course.slug === "ai-for-executives";
  const ctaGradient = `bg-gradient-to-r ${course.accentFrom} ${course.accentTo}`;
  const tintedPanel = isExecutive ? "from-sky-50 via-white to-white" : "from-rose-50 via-white to-white";
  const accentBorder = isExecutive ? "border-sky-200/70" : "border-rose-200/70";
  const accentText = isExecutive ? "text-sky-700" : "text-rose-600";
  const softBorder = isExecutive ? "border-sky-100" : "border-rose-100";
  const chipBorder = isExecutive ? "border-sky-200" : "border-rose-200";
  const chipBg = isExecutive ? "bg-sky-50" : "bg-rose-50";
  const iconBg = isExecutive ? "bg-sky-100 text-sky-700" : "bg-rose-100 text-rose-600";
  const rail = isExecutive ? `bg-gradient-to-b ${course.accentFrom} ${course.accentTo}` : `bg-gradient-to-b ${course.accentFrom} ${course.accentTo}`;
  const builtFor = isExecutive ? "Leaders" : "Engineers";
  const focusLabel = isExecutive ? "Outcome Focus" : "Build Focus";
  const focusText = isExecutive ? "Strategy, rollout, governance" : "Architecture, evals, latency";
  const summary = isExecutive
    ? "Built for decision-makers who need a clear AI operating model, sharp prioritization, and adoption systems that scale across teams."
    : "Deep technical systems thinking for product, platform, and applied AI teams shipping production-grade features.";
  const ctaLabel = isExecutive ? "View Executive Track" : "View Builder Track";

  return (
    <article className={`group relative overflow-hidden rounded-[2rem] border border-black/8 p-3 shadow-[0_24px_70px_rgba(17,17,17,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,17,17,0.1)] ${isExecutive ? "bg-white" : "bg-[#fffaf9]"}`}>
      <div className={`absolute left-0 top-10 h-[calc(100%-5rem)] w-1 rounded-r-full ${rail}`} />
      <div className={`grid gap-6 rounded-[1.7rem] border ${accentBorder} bg-gradient-to-br ${tintedPanel} p-6 md:p-7`}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full border ${chipBorder} bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${accentText}`}>
              <CourseIcon type={course.icon} />
              {course.badge}
            </span>
            <span className={`rounded-full border ${chipBorder} ${chipBg} px-3 py-1 text-xs font-medium ${accentText}`}>{course.level}</span>
          </div>

          <div>
            <h2 className="max-w-lg text-3xl font-black tracking-[-0.03em] md:text-5xl">{course.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-black/70">{course.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className={`rounded-[1.2rem] border ${softBorder} bg-white px-4 py-4`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Duration</p>
              <p className="mt-2 text-base font-semibold">{course.duration}</p>
            </div>
            <div className={`rounded-[1.2rem] border ${softBorder} bg-white px-4 py-4`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Modules</p>
              <p className="mt-2 text-base font-semibold">{course.modulesCount}</p>
            </div>
            <div className={`rounded-[1.2rem] border border-transparent ${chipBg} px-4 py-4`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Built For</p>
              <p className="mt-2 text-base font-semibold">{builtFor}</p>
            </div>
          </div>

          <div className="rounded-[1.45rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
            <div className="flex items-center gap-3">
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${iconBg}`}>
                <CourseIcon type={course.icon} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">{focusLabel}</p>
                <p className="mt-1 text-sm font-semibold text-black">{focusText}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-black/65">{summary}</p>
          </div>

          <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <Link href={`/courses/${course.slug}`} className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-lg ${ctaGradient}`}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

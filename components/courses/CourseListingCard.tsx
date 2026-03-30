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

  if (type === "foundation") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path d="M4 12L12 4L20 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 12V19H17V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
  const isFoundation = course.slug === "ai-foundation-course";
  const ctaGradient = `bg-gradient-to-r ${course.accentFrom} ${course.accentTo}`;
  const tintedPanel = isExecutive ? "from-sky-50 via-white to-white" : isFoundation ? "from-indigo-50 via-white to-white" : "from-rose-50 via-white to-white";
  const accentBorder = isExecutive ? "border-sky-200/70" : isFoundation ? "border-indigo-200/70" : "border-rose-200/70";
  const accentText = isExecutive ? "text-sky-700" : isFoundation ? "text-indigo-700" : "text-rose-600";
  const softBorder = isExecutive ? "border-sky-100" : isFoundation ? "border-indigo-100" : "border-rose-100";
  const chipBorder = isExecutive ? "border-sky-200" : isFoundation ? "border-indigo-200" : "border-rose-200";
  const chipBg = isExecutive ? "bg-sky-50" : isFoundation ? "bg-indigo-50" : "bg-rose-50";
  const rail = `bg-gradient-to-b ${course.accentFrom} ${course.accentTo}`;
  const builtFor = isExecutive ? "Leaders" : isFoundation ? "Beginners" : "Engineers";
  const ctaLabel = isExecutive ? "View Executive Track" : isFoundation ? "View Foundation Course" : "View Builder Track";

  return (
    <article className={`group relative overflow-hidden rounded-xl border border-black/8 p-2 shadow-[0_18px_50px_rgba(17,17,17,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(17,17,17,0.08)] ${isExecutive ? "bg-white" : isFoundation ? "bg-[#f9f9ff]" : "bg-[#fffaf9]"}`}>
      <div className={`absolute left-0 top-10 h-[calc(100%-5rem)] w-1 rounded-r-full ${rail}`} />
      <div className={`grid gap-4 rounded-lg border ${accentBorder} bg-gradient-to-br ${tintedPanel} p-5 md:p-5`}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full border ${chipBorder} bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${accentText}`}>
              <CourseIcon type={course.icon} />
              {course.badge}
            </span>
            <span className={`rounded-full border ${chipBorder} ${chipBg} px-3 py-1 text-xs font-medium ${accentText}`}>{course.level}</span>
          </div>

          <div>
            <h2 className="max-w-lg text-2xl font-black tracking-[-0.03em] md:text-4xl">{course.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-black/70 md:text-base">{course.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className={`rounded-md border ${softBorder} bg-white px-4 py-3`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Duration</p>
              <p className="mt-1 text-base font-semibold">{course.duration}</p>
            </div>
            <div className={`rounded-md border ${softBorder} bg-white px-4 py-3`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Modules</p>
              <p className="mt-1 text-base font-semibold">{course.modulesCount}</p>
            </div>
            <div className={`rounded-md border border-transparent ${chipBg} px-4 py-3`}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Built For</p>
              <p className="mt-1 text-base font-semibold">{builtFor}</p>
            </div>
          </div>

          <div className="flex pt-1">
            <Link href={`/courses/${course.slug}`} className={`inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-lg ${ctaGradient}`}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

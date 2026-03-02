import type { Metadata } from "next";
import { CourseListingCard } from "@/components/courses/CourseListingCard";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Premium AI courses for executives and technical professionals.",
  openGraph: {
    title: "AIUPSKILLED Courses",
    description: "AI FOR EXECUTIVES and AI FOR TECH PEOPLE"
  }
};

export default function CoursesPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,107,107,0.16),transparent_28%),linear-gradient(180deg,#ffffff_0%,#faf9f6_72%)]">
        <div className="absolute inset-0 opacity-80 [background-size:200%_200%] animate-gradient-shift" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60 backdrop-blur">
              Premium Learning Tracks
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-black md:text-7xl">
              Choose the AI path that matches how you operate.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-black/70 md:text-xl">
              One track is built for leadership teams driving transformation. The other is engineered for technical teams shipping AI systems at production quality.
            </p>
          </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-sky-100 bg-white/75 p-5 backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">Executive Track</p>
                <p className="mt-2 text-sm leading-6 text-black/65">Strategy, governance, adoption, ROI mapping.</p>
              </div>
              <div className="rounded-[1.5rem] border border-rose-100 bg-white/75 p-5 backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-600">Builder Track</p>
                <p className="mt-2 text-sm leading-6 text-black/65">Architecture, evals, latency, reliability, deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 xl:grid-cols-2">
          {courses.map((course) => (
            <CourseListingCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

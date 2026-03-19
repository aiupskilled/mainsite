import type { Metadata } from "next";
import { CoursesFilterLayout } from "@/components/courses/CoursesFilterLayout";
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
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <h1 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">Courses</h1>
        <CoursesFilterLayout courses={courses} />
      </section>
    </div>
  );
}

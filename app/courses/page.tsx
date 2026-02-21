import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
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
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <h1 className="mb-10 text-4xl font-black tracking-tight md:text-6xl">Courses</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} cta="View Details" />
        ))}
      </div>
    </section>
  );
}

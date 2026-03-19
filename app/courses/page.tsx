import type { Metadata } from "next";
import { CoursesFilterLayout } from "@/components/courses/CoursesFilterLayout";
import { JsonLd } from "@/components/JsonLd";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  description: "Premium AI courses for executives and technical professionals focused on real implementation.",
  alternates: {
    canonical: "/courses"
  },
  openGraph: {
    title: "AIUPSKILLED Courses",
    description: "AI FOR EXECUTIVES and AI FOR TECH PEOPLE",
    url: `${siteConfig.url}/courses`
  },
  twitter: {
    title: "AIUPSKILLED Courses",
    description: "AI FOR EXECUTIVES and AI FOR TECH PEOPLE"
  }
};

export default function CoursesPage() {
  const coursesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AIUPSKILLED Courses",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/courses/${course.slug}`,
      name: course.title
    }))
  };

  return (
    <div className="pb-24">
      <JsonLd data={coursesListSchema} />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <h1 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">Courses</h1>
        <CoursesFilterLayout courses={courses} />
      </section>
    </div>
  );
}

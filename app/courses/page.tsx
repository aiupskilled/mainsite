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
  const coursesForPage = [...courses].sort((a, b) => {
    if (a.slug === "ai-foundation-course") return -1;
    if (b.slug === "ai-foundation-course") return 1;
    return 0;
  });

  const coursesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AIUPSKILLED Courses",
    itemListElement: coursesForPage.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/courses/${course.slug}`,
      name: course.title
    }))
  };

  return (
    <div className="pb-24">
      <JsonLd data={coursesListSchema} />
      <section className="mx-auto max-w-7xl px-5 pt-4 md:px-8 md:pt-6">
        <CoursesFilterLayout courses={coursesForPage} />
      </section>
    </div>
  );
}

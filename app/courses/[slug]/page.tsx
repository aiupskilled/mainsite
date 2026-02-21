import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { courses, getCourseBySlug } from "@/lib/courses";

type Params = { slug: string };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [{ url: course.image, width: 1200, height: 630, alt: course.title }]
    }
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: {
            "@type": "Organization",
            name: "AIUPSKILLED"
          }
        }}
      />
      <div className="mb-10 overflow-hidden rounded-3xl border border-black/5 bg-white p-3 shadow-card">
        <div className="aspect-video overflow-hidden rounded-2xl">
          <iframe
            src={course.videoUrl}
            title={course.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <article className="space-y-8">
          <div>
            <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">{course.title}</h1>
            <p className="text-lg text-black/75">{course.overview}</p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold">Curriculum</h2>
            <ul className="space-y-2 text-black/75">
              {course.curriculum.map((item) => (
                <li key={item} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold">What You’ll Learn</h2>
            <ul className="space-y-2 text-black/75">
              {course.outcomes.map((item) => (
                <li key={item} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold">Target Audience</h2>
            <ul className="space-y-2 text-black/75">
              {course.audience.map((item) => (
                <li key={item} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-black/10 bg-white p-8 shadow-soft lg:sticky lg:top-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Pricing</p>
          <p className="mb-5 text-5xl font-black">{course.price}</p>
          <p className="mb-6 text-black/70">One-time enrollment with full access to all course modules and implementation templates.</p>
          <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-accent">
            Enroll Now
          </button>
        </aside>
      </div>
    </section>
  );
}

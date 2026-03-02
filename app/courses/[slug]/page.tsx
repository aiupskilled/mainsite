import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/accordion";
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

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    "M12 4L19 8V16L12 20L5 16V8L12 4Z",
    "M6 12H18M12 6V18",
    "M7 17L17 7",
    "M8 8H16V16H8Z"
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path d={paths[index % paths.length]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function CourseDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const otherCourse = courses.find((item) => item.slug !== course.slug);
  const gradient = `bg-gradient-to-r ${course.accentFrom} ${course.accentTo}`;
  const gradientText = `bg-gradient-to-r ${course.accentFrom} ${course.accentTo} bg-clip-text text-transparent`;

  return (
    <div className="pb-20">
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

      <section className="relative overflow-hidden border-b border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#faf9f6_70%)]">
        <div className={`absolute -left-24 top-12 h-72 w-72 rounded-full blur-3xl opacity-25 ${course.accentSoft}`} />
        <div className={`absolute -right-20 top-28 h-80 w-80 rounded-full blur-3xl opacity-25 ${course.accentSoft}`} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60 backdrop-blur">
                {course.badge}
              </span>
              <span className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${course.accentSoft} ${course.accentBorder}`}>
                {course.level}
              </span>
            </div>
            <div>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-7xl">{course.title}</h1>
              <p className="mt-4 max-w-2xl text-lg text-black/70 md:text-xl">{course.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 rounded-[1.5rem] border border-black/10 bg-white/75 p-4 backdrop-blur md:w-fit md:px-5">
              <div className={`grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white ${gradient}`}>
                {course.instructor.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-black">{course.instructor.name}</p>
                <p className="text-sm text-black/60">{course.instructor.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#enroll" className={`inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-white shadow-lg ${gradient}`}>
                Enroll Now
              </Link>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-5 text-sm text-black/60">
                {course.duration} · {course.modulesCount} modules
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-3 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-black p-1.5">
              <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-black">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/50">What You’ll Learn</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Capability upgrades with direct business impact.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {course.learnHighlights.map((item, index) => (
            <article key={item.title} className="rounded-[1.75rem] border border-black/10 bg-white/75 p-6 shadow-[0_18px_45px_rgba(17,17,17,0.06)] backdrop-blur">
              <div className={`mb-5 inline-flex rounded-2xl p-3 text-white ${gradient}`}>
                <FeatureIcon index={index} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/50">Curriculum</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Structured modules built for momentum.</h2>
            <p className="mt-4 max-w-xl text-black/70">Every module is designed to compress decision-making time and produce implementation-ready output, not passive learning.</p>
          </div>
          <Accordion items={course.curriculum.map((item, index) => ({ title: `Module ${index + 1}`, content: item }))} />
        </div>
      </section>

      {otherCourse ? (
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/50">Course Comparison</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Pick the operating model that matches your role.</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[course, otherCourse].map((item) => {
              const isActive = item.slug === course.slug;
              const itemGradient = `bg-gradient-to-r ${item.accentFrom} ${item.accentTo}`;
              return (
                <article
                  key={item.slug}
                  className={`rounded-[2rem] border bg-white p-7 shadow-[0_18px_45px_rgba(17,17,17,0.06)] ${isActive ? `${item.accentBorder} ring-2 ring-black/5` : "border-black/10"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm text-black/60">{item.subtitle}</p>
                    </div>
                    {isActive ? <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${itemGradient}`}>Recommended</span> : null}
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-black/70">
                    <div className="flex items-center justify-between rounded-2xl bg-bg px-4 py-3"><span>Audience</span><span className="font-semibold text-black">{item.audience[0]}</span></div>
                    <div className="flex items-center justify-between rounded-2xl bg-bg px-4 py-3"><span>Duration</span><span className="font-semibold text-black">{item.duration}</span></div>
                    <div className="flex items-center justify-between rounded-2xl bg-bg px-4 py-3"><span>Depth</span><span className="font-semibold text-black">{item.level}</span></div>
                    <div className="flex items-center justify-between rounded-2xl bg-bg px-4 py-3"><span>Price</span><span className="font-semibold text-black">{item.price}</span></div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/50">Testimonials</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Trusted by operators who care about quality.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {course.testimonials.map((item) => (
            <article key={item.name} className="rounded-[1.6rem] border border-black/10 bg-white p-6 shadow-[0_16px_35px_rgba(17,17,17,0.05)] transition duration-300 hover:scale-[1.01]">
              <p className="text-lg leading-8 text-black/80">“{item.quote}”</p>
              <p className="mt-5 font-semibold">{item.name}</p>
              <p className="text-sm text-black/60">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="enroll" className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className={`overflow-hidden rounded-[2.25rem] ${gradient} p-[1px] shadow-[0_24px_90px_rgba(17,17,17,0.12)]`}>
          <div className="rounded-[2.2rem] bg-[linear-gradient(145deg,rgba(17,17,17,0.9),rgba(17,17,17,0.72))] px-7 py-10 text-white md:px-12 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">Enrollment</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Move from interest to implementation.</h2>
                <p className="mt-4 text-white/70">Join {course.title} to get the frameworks, systems, and execution clarity required to lead or ship AI with confidence.</p>
              </div>
              <div className="shrink-0">
                <p className={`text-5xl font-black ${gradientText}`}>{course.price}</p>
                <Link href="#" className={`mt-4 inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-white ${gradient}`}>
                  Secure Your Seat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

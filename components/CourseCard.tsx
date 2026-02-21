import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

type Props = {
  course: Course;
  cta?: string;
};

export function CourseCard({ course, cta = "View Course" }: Props) {
  return (
    <article className="group overflow-hidden rounded-xl2 border border-black/5 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-4 p-7">
        <h3 className="text-2xl font-bold tracking-tight">{course.title}</h3>
        <p className="text-[15px] text-black/75">{course.description}</p>
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex rounded-full border border-black px-5 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent hover:text-white"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}

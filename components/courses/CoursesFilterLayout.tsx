"use client";

import { useMemo, useState } from "react";
import { CourseListingCard } from "@/components/courses/CourseListingCard";
import type { Course } from "@/lib/courses";

type Props = {
  courses: Course[];
};

type SortKey = "recommended" | "duration-asc" | "duration-desc" | "title-asc";

function parseDurationWeeks(duration: string): number {
  const match = duration.match(/(\d+)/);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(match[1]);
}

export function CoursesFilterLayout({ courses }: Props) {
  const [search, setSearch] = useState("");
  const [aiOnly, setAiOnly] = useState(false);
  const [level, setLevel] = useState<"All" | "Beginner" | "Advanced">("All");
  const [sort, setSort] = useState<SortKey>("recommended");

  const filteredCourses = useMemo(() => {
    let data = [...courses];

    if (aiOnly) {
      data = data.filter((course) => course.tags.includes("AI"));
    }

    if (level !== "All") {
      data = data.filter((course) => course.level === level);
    }

    const query = search.trim().toLowerCase();
    if (query.length > 0) {
      data = data.filter((course) => {
        return `${course.title} ${course.description} ${course.badge}`.toLowerCase().includes(query);
      });
    }

    if (sort === "duration-asc") {
      data.sort((a, b) => parseDurationWeeks(a.duration) - parseDurationWeeks(b.duration));
    } else if (sort === "duration-desc") {
      data.sort((a, b) => parseDurationWeeks(b.duration) - parseDurationWeeks(a.duration));
    } else if (sort === "title-asc") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [courses, aiOnly, level, search, sort]);

  function clearAll() {
    setSearch("");
    setAiOnly(false);
    setLevel("All");
    setSort("recommended");
  }

  return (
    <div>
      <section className="mb-8 border border-black/10 bg-white p-5 shadow-[0_12px_35px_rgba(17,17,17,0.05)] md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-black/55">Filters</h2>
          <button type="button" onClick={clearAll} className="text-xs font-semibold text-accent transition hover:opacity-80">
            Clear All
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.45fr_0.9fr_1fr_1fr] xl:items-end">
          <div>
            <label htmlFor="course-search" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50">
              Search
            </label>
            <input
              id="course-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses"
              className="h-10 w-full border border-black/10 bg-bg px-3 text-sm outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50">Category</p>
            <button
              type="button"
              onClick={() => setAiOnly((prev) => !prev)}
              className={`flex h-10 w-full items-center justify-between border px-3 text-sm transition ${
                aiOnly ? "border-accent bg-accent/10 text-black" : "border-black/10 bg-white text-black/75 hover:border-black/20"
              }`}
            >
              <span>AI</span>
              <span className="bg-black/5 px-2 py-0.5 text-xs font-semibold">{courses.filter((c) => c.tags.includes("AI")).length}</span>
            </button>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50">Level</p>
            <div className="grid h-10 grid-cols-3 gap-2">
              {(["All", "Beginner", "Advanced"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLevel(option)}
                  className={`border px-2 text-xs font-semibold transition ${
                    level === option ? "border-accent bg-accent/10 text-black" : "border-black/10 bg-white text-black/70"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="sort" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-10 w-full border border-black/10 bg-bg px-3 text-sm outline-none transition focus:border-accent"
            >
              <option value="recommended">Recommended</option>
              <option value="duration-asc">Duration: Short to Long</option>
              <option value="duration-desc">Duration: Long to Short</option>
              <option value="title-asc">Title: A to Z</option>
            </select>
          </div>
        </div>
      </section>

      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-black/60">Showing {filteredCourses.length} course{filteredCourses.length === 1 ? "" : "s"}</p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid gap-10 xl:grid-cols-2">
          {filteredCourses.map((course) => (
            <CourseListingCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="border border-black/10 bg-white px-6 py-10 text-center">
          <p className="text-lg font-semibold">No courses match your filters.</p>
          <button type="button" onClick={clearAll} className="mt-3 text-sm font-semibold text-accent">
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}

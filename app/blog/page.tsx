import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI strategy, implementation, and operating-system thinking for serious teams."
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(255,107,107,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#faf9f6_72%)]">
        <div className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-22">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent backdrop-blur">
              Journal
            </p>
            <h1 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">AI thinking for leaders and builders who ship with intent.</h1>
            <p className="mt-6 max-w-2xl text-lg text-black/70 md:text-xl">
              Strategy notes, implementation patterns, and practical operating frameworks from the AIUPSKILLED point of view.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block overflow-hidden rounded-[2rem] border border-black/8 p-3 shadow-[0_20px_60px_rgba(17,17,17,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,17,17,0.1)] ${index % 2 === 0 ? "bg-white" : "bg-[#fffaf8]"}`}
            >
              <article className="overflow-hidden rounded-[1.7rem] border border-black/5 bg-white">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4 p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span className="h-1 w-1 rounded-full bg-black/25" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">{post.title}</h2>
                  <p className="text-black/68">{post.description}</p>
                  <span className="inline-flex text-sm font-semibold text-accent">Read Article</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

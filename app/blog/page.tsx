import type { Metadata } from "next";
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
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-black tracking-[-0.03em] md:text-4xl">Blog</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block overflow-hidden border border-black/8 p-3 shadow-[0_20px_60px_rgba(17,17,17,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,17,17,0.1)] ${index % 2 === 0 ? "bg-white" : "bg-[#fffaf8]"}`}
            >
              <article className="overflow-hidden border border-black/5 bg-white">
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

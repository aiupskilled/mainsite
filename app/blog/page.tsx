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
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <h1 className="mb-10 text-4xl font-black tracking-tight md:text-6xl">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-soft">
            <div className="relative h-64 w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="space-y-4 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 className="text-2xl font-bold leading-tight">{post.title}</h2>
              <p className="text-black/70">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex text-sm font-semibold text-accent">
                Read Article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

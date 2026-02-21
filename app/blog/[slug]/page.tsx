import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }]
    }
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: post.image,
          author: {
            "@type": "Person",
            name: post.author
          },
          datePublished: post.date
        }}
      />
      <div className="mb-8 overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-soft">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
        </div>
      </div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="mb-3 text-4xl font-black leading-tight md:text-6xl">{post.title}</h1>
      <p className="mb-8 text-black/70">By {post.author}</p>
      <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

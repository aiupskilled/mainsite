import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const blogDir = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  author: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

export function getAllPostsMeta(): BlogPostMeta[] {
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const fullPath = path.join(blogDir, file);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(raw);
      const slug = file.replace(/\.md$/, "");

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image,
        author: data.author
      } as BlogPostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = (await remark().use(remarkHtml).process(content)).toString();

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    image: data.image,
    author: data.author,
    contentHtml
  };
}

import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

type ToolLink = {
  name: string;
  website: string;
  logo: string;
};

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "Learn essential AI tools for 10X productivity with practical tutorials, use-cases, and workflows across writing, automation, video, coding, and research.",
  alternates: {
    canonical: "/ai-tools"
  },
  openGraph: {
    title: "AI Tools for Productivity | AIUPSKILLED",
    description:
      "Learn essential AI tools for 10X productivity with practical tutorials and workflow-first implementation.",
    url: `${siteConfig.url}/ai-tools`
  },
  twitter: {
    title: "AI Tools for Productivity | AIUPSKILLED",
    description:
      "Learn essential AI tools for 10X productivity with practical tutorials and workflow-first implementation."
  }
};

const toolCategories: Array<{
  title: string;
  tools: ToolLink[];
}> = [
  {
    title: "AI Writing",
    tools: [
      { name: "ChatGPT", website: "https://chatgpt.com", logo: "/images/ai-tools/openai.svg" },
      { name: "Claude", website: "https://claude.ai", logo: "/images/ai-tools/claude.svg" },
      { name: "Perplexity", website: "https://www.perplexity.ai", logo: "/images/ai-tools/perplexity.svg" }
    ]
  },
  {
    title: "Automation",
    tools: [
      { name: "Zapier", website: "https://zapier.com", logo: "/images/ai-tools/zapier.svg" },
      { name: "Make", website: "https://www.make.com", logo: "/images/ai-tools/make.webp" },
      { name: "n8n", website: "https://n8n.io", logo: "/images/ai-tools/n8n.ico" }
    ]
  },
  {
    title: "Video Creation",
    tools: [
      { name: "Runway", website: "https://runwayml.com", logo: "/images/ai-tools/runway.png" },
      { name: "Descript", website: "https://www.descript.com", logo: "/images/ai-tools/descript.svg" },
      { name: "CapCut", website: "https://www.capcut.com", logo: "/images/ai-tools/capcut.svg" }
    ]
  },
  {
    title: "Coding",
    tools: [
      { name: "GitHub Copilot", website: "https://github.com/features/copilot", logo: "/images/ai-tools/github.svg" },
      { name: "Cursor", website: "https://www.cursor.com", logo: "/images/ai-tools/cursor.png" },
      { name: "Codeium", website: "https://codeium.com", logo: "/images/ai-tools/codeium.png" }
    ]
  },
  {
    title: "Research",
    tools: [
      { name: "Perplexity", website: "https://www.perplexity.ai", logo: "/images/ai-tools/perplexity.svg" },
      { name: "Elicit", website: "https://elicit.com", logo: "/images/ai-tools/elicit.png" },
      { name: "Scite", website: "https://scite.ai", logo: "/images/ai-tools/scite.svg" }
    ]
  }
];

export default function AiToolsPage() {
  return (
    <div className="pb-20">
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">Tool Categories</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Curated by real workflow impact</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {toolCategories.map((category, index) => (
            <article
              key={category.title}
              className={`rounded-[1.6rem] border border-black/8 p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)] ${index % 2 === 0 ? "bg-white" : "bg-[#fffaf8]"}`}
            >
              <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {category.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-20 items-center justify-center rounded-xl border border-black/10 bg-bg px-3 transition hover:border-accent hover:bg-white"
                    aria-label={`Visit ${tool.name}`}
                  >
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      width={148}
                      height={44}
                      unoptimized
                      className="h-11 w-auto object-contain"
                    />
                    <span className="sr-only">{tool.name}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

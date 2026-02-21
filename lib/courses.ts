export type Course = {
  slug: "ai-for-executives" | "ai-for-tech-people";
  title: string;
  description: string;
  image: string;
  overview: string;
  curriculum: string[];
  outcomes: string[];
  audience: string[];
  price: string;
  videoUrl: string;
};

export const courses: Course[] = [
  {
    slug: "ai-for-executives",
    title: "AI FOR EXECUTIVES",
    description:
      "A strategic, boardroom-ready AI program to help leaders deploy measurable transformation across business units.",
    image: "/images/course-executives.svg",
    overview:
      "Designed for founders, CXOs, and senior operators who need a practical AI execution framework. Build the operating model, governance plan, and initiative roadmap to drive ROI in under 90 days.",
    curriculum: [
      "Executive AI strategy and portfolio prioritization",
      "Risk, compliance, and responsible AI governance",
      "Capability design: teams, vendors, and workflow architecture",
      "KPI systems for AI initiative tracking and capital allocation",
      "90-day AI implementation sprint blueprint"
    ],
    outcomes: [
      "A company-specific AI opportunity map",
      "Decision frameworks for build vs buy vs partner",
      "A practical change-management and training rollout plan"
    ],
    audience: [
      "Founders and C-suite leaders",
      "Business unit heads",
      "Transformation and strategy teams"
    ],
    price: "$2,500",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE"
  },
  {
    slug: "ai-for-tech-people",
    title: "AI FOR TECH PEOPLE",
    description:
      "A systems-first course for engineers and product teams to build secure, production-grade AI products fast.",
    image: "/images/course-tech.svg",
    overview:
      "For software engineers, product managers, and technical architects. Learn to design scalable AI applications, evaluate model quality, and ship reliable user-facing features with robust observability.",
    curriculum: [
      "Modern LLM application architecture",
      "Prompt engineering, evals, and test harness design",
      "RAG pipelines, vector stores, and retrieval quality",
      "Latency, cost optimization, and caching strategies",
      "Security patterns and deployment runbooks"
    ],
    outcomes: [
      "A deployable AI feature blueprint",
      "Evaluation pipeline for quality and regressions",
      "Operational playbook for production monitoring"
    ],
    audience: [
      "Software engineers",
      "Technical product managers",
      "Solution architects and data platform teams"
    ],
    price: "$1,800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

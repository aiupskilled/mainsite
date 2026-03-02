export type CourseFeature = {
  title: string;
  description: string;
};

export type CourseTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Course = {
  slug: "ai-for-executives" | "ai-for-tech-people";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  overview: string;
  curriculum: string[];
  outcomes: string[];
  audience: string[];
  price: string;
  videoUrl: string;
  duration: string;
  modulesCount: number;
  badge: string;
  level: "Beginner" | "Advanced";
  accentFrom: string;
  accentTo: string;
  accentSoft: string;
  accentBorder: string;
  icon: "executive" | "technical";
  alignment: "left" | "right";
  instructor: {
    name: string;
    role: string;
    initials: string;
  };
  learnHighlights: CourseFeature[];
  testimonials: CourseTestimonial[];
};

export const courses: Course[] = [
  {
    slug: "ai-for-executives",
    title: "AI FOR EXECUTIVES",
    subtitle: "Strategic AI operating systems for leaders who need market advantage, not theory.",
    description:
      "A boardroom-grade AI program for founders, CXOs, and transformation leaders driving measurable organizational change.",
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
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    duration: "6 weeks",
    modulesCount: 5,
    badge: "Leadership Track",
    level: "Beginner",
    accentFrom: "from-sky-500",
    accentTo: "to-blue-700",
    accentSoft: "bg-sky-50",
    accentBorder: "border-sky-200",
    icon: "executive",
    alignment: "left",
    instructor: {
      name: "Arpit Anand",
      role: "AI Strategy Instructor",
      initials: "AA"
    },
    learnHighlights: [
      {
        title: "Opportunity Mapping",
        description: "Prioritize AI bets by ROI, feasibility, and organizational readiness."
      },
      {
        title: "Governance Design",
        description: "Set policy, legal guardrails, and operating accountability without slowing execution."
      },
      {
        title: "Executive Decision Frameworks",
        description: "Choose build, buy, or partner paths with sharper capital allocation logic."
      },
      {
        title: "Rollout Systems",
        description: "Launch internal AI adoption plans with change management and measurable KPIs."
      }
    ],
    testimonials: [
      {
        quote: "It gave our leadership team a concrete AI operating model instead of generic strategy slides.",
        name: "Elena Brooks",
        role: "VP Strategy"
      },
      {
        quote: "The strongest executive AI curriculum we have seen for practical deployment readiness.",
        name: "Daniel Hsu",
        role: "Chief Transformation Officer"
      }
    ]
  },
  {
    slug: "ai-for-tech-people",
    title: "AI FOR TECH PEOPLE",
    subtitle: "Production-grade AI engineering for teams shipping real systems under real constraints.",
    description:
      "A systems-first course for engineers and product teams building secure, scalable, user-facing AI products.",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8 weeks",
    modulesCount: 5,
    badge: "Builder Track",
    level: "Advanced",
    accentFrom: "from-rose-400",
    accentTo: "to-orange-500",
    accentSoft: "bg-rose-50",
    accentBorder: "border-rose-200",
    icon: "technical",
    alignment: "right",
    instructor: {
      name: "Prakash Raja",
      role: "AI Systems Instructor",
      initials: "PR"
    },
    learnHighlights: [
      {
        title: "LLM Architecture",
        description: "Design scalable app layers for prompts, context retrieval, and orchestration."
      },
      {
        title: "Evals and Regression",
        description: "Build test harnesses that catch quality drift before users do."
      },
      {
        title: "Latency and Cost",
        description: "Tune runtime performance with caching, routing, and retrieval optimization."
      },
      {
        title: "Reliability and Security",
        description: "Ship with safer outputs, observability, and deployment guardrails."
      }
    ],
    testimonials: [
      {
        quote: "Clear engineering rigor. The content maps directly to how modern AI product teams should operate.",
        name: "Sonia Patel",
        role: "Principal Engineer"
      },
      {
        quote: "Finally a technical course that treats evals, latency, and reliability as first-class concerns.",
        name: "Victor Chen",
        role: "AI Platform Lead"
      }
    ]
  }
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

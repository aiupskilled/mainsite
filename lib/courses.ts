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
  slug: "ai-for-executives" | "ai-for-tech-people" | "ai-foundation-course";
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
  icon: "executive" | "technical" | "foundation";
  alignment: "left" | "right";
  instructor: {
    name: string;
    role: string;
    initials: string;
  };
  learnHighlights: CourseFeature[];
  testimonials: CourseTestimonial[];
  tags: ("AI" | "Software Engineering" | "Full Advanced")[];
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
    price: "₹499",
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
    ],
    tags: ["AI"]
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
    price: "₹499",
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
    ],
    tags: ["AI", "Software Engineering", "Full Advanced"]
  },
  {
    slug: "ai-foundation-course",
    title: "AI FOUNDATION COURSE",
    subtitle: "A practical beginner foundation to start AI with clarity, structure, and real tool usage.",
    description:
      "Start from zero and build confidence in AI, ML basics, LLMs, and essential tools with a simple implementation roadmap.",
    image: "/images/course-tech.svg",
    overview:
      "This course is designed for beginners who want a practical entry into AI. You will understand the core concepts, learn where ML fits, build a clear roadmap, and start using modern AI tools in everyday workflows.",
    curriculum: [
      "Module 1: Foundations - Video 0: Introduction, Video 1: What is AI, Generative AI, LLMs, and how they differ, Video 2: What AI can and cannot do, Video 3: Common myths about AI",
      "Module 2: Practical Usage - Video 4: How to write better prompts, Video 5: Top 5 AI tools",
      "Module 3: Applied Learning - Video 6 & 7: Notebook LM",
      "Module 4: Build an app with AI - Video: Build an app with AI"
    ],
    outcomes: [
      "Clear understanding of AI vs ML vs LLMs",
      "Actionable AI learning roadmap for next 90 days",
      "Hands-on confidence with practical AI tools"
    ],
    audience: [
      "Beginners starting AI",
      "Students and early professionals",
      "Working professionals looking to upskill quickly"
    ],
    price: "Rs 159",
    videoUrl: "https://player.vimeo.com/video/1172099904?fl=ip&fe=ec",
    duration: "1 week",
    modulesCount: 4,
    badge: "Foundation Track",
    level: "Beginner",
    accentFrom: "from-indigo-500",
    accentTo: "to-fuchsia-500",
    accentSoft: "bg-indigo-50",
    accentBorder: "border-indigo-200",
    icon: "foundation",
    alignment: "left",
    instructor: {
      name: "AIUPSKILLED Team",
      role: "Foundation Instructors",
      initials: "AF"
    },
    learnHighlights: [
      {
        title: "AI Basics Simplified",
        description: "Understand the core building blocks without jargon."
      },
      {
        title: "ML Context",
        description: "Learn where machine learning fits into the AI landscape."
      },
      {
        title: "LLM Essentials",
        description: "Use modern LLMs effectively for real tasks."
      },
      {
        title: "Tool Workflow",
        description: "Apply AI tools to improve day-to-day productivity."
      }
    ],
    testimonials: [],
    tags: ["AI"]
  }
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

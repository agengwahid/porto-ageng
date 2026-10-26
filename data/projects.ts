export interface Project {
  title: string;
  codename: string;
  rank: string;
  rankBadge: string;
  period: string;
  role: string;
  description: string;
  image: string;
  tech: string[];
  featured?: boolean;
  highlights: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "DermaScan: Skin Disease Detection Platform",
    codename: "HEALTHCARE_ML_API",
    rank: "Capstone Project",
    rankBadge: "CAPSTONE · CLOUD",
    period: "2024 · Bangkit Academy Capstone",
    role: "Backend & Cloud Engineer",
    featured: true,
    description:
      "Engineered secure, high-throughput RESTful APIs using Node.js to power a machine-learning-assisted skin disease detection mobile application. Connected image inference endpoints with Google Cloud Platform infrastructure for automated predictions and data storage.",
    highlights: [
      "Engineered RESTful API endpoints bridging client image uploads with Python ML inference",
      "Provisioned containerized backend services on Google Cloud Platform infrastructure",
      "Structured secure Firestore document streams with schema validation and auth boundaries",
    ],
    image: "/projects/dermascan.svg",
    tech: ["Node.js", "Express.js", "Google Cloud", "RESTful API", "Machine Learning"],
    link: "https://github.com/agengwahid",
  },
  {
    title: "Student Grade Management System",
    codename: "ACADEMIC_PORTAL",
    rank: "Production System",
    rankBadge: "PRODUCTION · ENTERPRISE",
    period: "2026 · SMK Negeri 1 Lebong",
    role: "Fullstack Web Developer",
    featured: true,
    description:
      "Architected and deployed a centralized academic grading and student record system for SMK Negeri 1 Lebong. Replaced error-prone manual spreadsheets with role-based access control, indexed relational schemas, and an administrative telemetry dashboard.",
    highlights: [
      "Role-based authentication (Super Admin, Teacher, Academic Staff) with strict permission gates",
      "Normalized relational schema in MySQL with indexed queries for sub-second report generation",
      "Telemetry dashboard for real-time grade verification, academic audits, and report generation",
    ],
    image: "/projects/grades.svg",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://github.com/agengwahid",
  },
  {
    title: "Kost Panjie Resident & Property Portal",
    codename: "PROPERTY_PORTAL",
    rank: "Client Web Application",
    rankBadge: "CLIENT PROJECT",
    period: "2024 · Client Project",
    role: "Fullstack Web Developer",
    description:
      "Engineered an automated property and resident management application for Kost Panjie. Centralized resident contracts, room occupancy states, and monthly accounting logs into an intuitive web interface.",
    highlights: [
      "Real-time room occupancy states and automated payment record logging",
      "Normalized database schema preventing billing discrepancies and duplicate entries",
      "Mobile-responsive administrative interface for quick property oversight",
    ],
    image: "/projects/kost.svg",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    link: "https://github.com/agengwahid",
  },
  {
    title: "Personal Developer Portfolio & Interactive Showcase",
    codename: "PORTFOLIO_SYSTEM",
    rank: "Personal Project",
    rankBadge: "PERSONAL PROJECT",
    period: "2025 · Personal Platform",
    role: "Frontend & Web Architect",
    description:
      "Constructed a high-performance developer portfolio showcasing engineering achievements (GPA 3.91, GCP certification) with interactive dashboard telemetry. Built with Next.js App Router, React, and strict accessibility standards.",
    highlights: [
      "Built with Next.js App Router and React for instant zero-latency view transitions",
      "Designed with an accessible, high-contrast dark theme and clean visual hierarchy",
      "Modular component hierarchy with full keyboard support, interactive scroll telemetry, and modal preview",
    ],
    image: "/projects/portfolio.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/agengwahid/porto-ageng",
  },
];

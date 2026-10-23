export interface Project {
  title: string;
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
    period: "2024 · Bangkit Academy Capstone",
    role: "Backend & Cloud Engineer",
    featured: true,
    description:
      "Engineered secure RESTful APIs using Node.js to power a machine-learning-assisted skin disease detection mobile client. Connected image inference endpoints with Google Cloud Platform infrastructure for automated predictions and data storage.",
    highlights: [
      "Designed RESTful endpoints connecting mobile clients to ML model inference",
      "Deployed backend services on Google Cloud Platform infrastructure",
      "Structured secure payload processing and Firestore database records",
    ],
    image: "/projects/dermascan.svg",
    tech: ["Node.js", "Express.js", "Google Cloud", "RESTful API", "Machine Learning"],
    link: "https://github.com/agengwahid",
  },
  {
    title: "Student Grade Management System",
    period: "2026 · SMK Negeri 1 Lebong",
    role: "Fullstack Developer",
    featured: true,
    description:
      "Designed and implemented an academic grading and record management portal for SMK Negeri 1 Lebong. Replaced manual spreadsheet workflows with role-based authentication, student record indexing, and an administrative monitoring dashboard.",
    highlights: [
      "Role-based authentication (Admin, Teacher, Staff) with permission boundaries",
      "Relational schema in MySQL with indexed queries for fast grade report generation",
      "Responsive administrative dashboard for academic monitoring and export",
    ],
    image: "/projects/grades.svg",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://github.com/agengwahid",
  },
  {
    title: "Kost Panjie Resident & Property Portal",
    period: "2024 · Client Project",
    role: "Fullstack Web Developer",
    description:
      "Built a web-based property and resident management system for Kost Panjie. Streamlined resident record-keeping, room availability status, and administrative logs into a unified web application.",
    highlights: [
      "Real-time room occupancy and payment record status tracking",
      "Normalized relational database structure for property inventory",
      "Mobile-friendly interface for property administrators",
    ],
    image: "/projects/kost.svg",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    link: "https://github.com/agengwahid",
  },
  {
    title: "Engineer Portfolio & Technical Showcase",
    period: "2025 · Personal Platform",
    role: "Frontend Engineer",
    description:
      "Constructed a high-performance personal portfolio built with Next.js, React, and Tailwind CSS. Emphasizes clean engineering aesthetics, strict WCAG accessibility standards, and zero AI slop patterns.",
    highlights: [
      "Built with Next.js App Router and React for instant page navigation",
      "Designed with an accessible, high-contrast dark color architecture",
      "Modular component hierarchy with verified keyboard and modal support",
    ],
    image: "/projects/portfolio.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/agengwahid/porto-ageng",
  },
];


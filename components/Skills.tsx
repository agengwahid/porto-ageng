interface SkillGroup {
  domain: string;
  code: string;
  description: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    domain: "Backend & API Architecture",
    code: "BACKEND_SERVICES",
    description: "Developing robust server-side applications, RESTful endpoints, and business logic.",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "RESTful API", "MVC Pattern"],
  },
  {
    domain: "Cloud & Infrastructure",
    code: "CLOUD_DEVOPS",
    description: "Cloud computing and service provisioning on Google Cloud Platform.",
    items: ["Google Cloud Platform", "Compute Engine", "Cloud Run", "Cloud Storage", "Linux CLI"],
  },
  {
    domain: "Database & Data Modeling",
    code: "DATA_STORAGE",
    description: "Schema normalization, indexing, and persistent database management.",
    items: ["MySQL", "Relational Modeling", "NoSQL (Firestore)", "Query Optimization", "Data Integrity"],
  },
  {
    domain: "Engineering Workflow & Tools",
    code: "DEV_WORKFLOW",
    description: "Version control, API contract testing, and collaboration standards.",
    items: ["Git & GitHub", "Postman", "Markdown Documentation", "Agile / Scrum Practices"],
  },
  {
    domain: "Professional & Academic Mentorship",
    code: "LEADERSHIP_CORE",
    description: "Technical instruction, analytical problem-solving, and cross-functional teamwork.",
    items: [
      "Computer Lab Teaching Assistance",
      "Technical Mentorship",
      "Analytical Problem Solving",
      "Team Collaboration",
      "Time Management",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 border-b border-[#1e2638]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            <span>04</span>
            <span>/</span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Tools, Technologies & Engineering Practices
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of backend stacks, cloud infrastructure, and databases I leverage in production and academic environments.
          </p>
        </div>

        {/* DOMAIN CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className={`rounded-xl bg-[#0f141f] border border-[#1e2638] hover:border-[#2b374e] transition duration-200 p-6 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-3">
                  <span className="text-sky-400">{group.code}</span>
                  <span>DOMAIN 0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.domain}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2638] flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-[#151c2c] border border-[#232c3f] text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


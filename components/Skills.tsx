const technical = [
  "PHP",
  "Laravel",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "NoSQL",
  "Google Cloud Platform",
  "RESTful API",
  "Git & GitHub",
];

const soft = ["Problem Solving", "Communication", "Teamwork", "Time Management"];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 font-medium mb-3">SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I Work With</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technical.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-700/30 text-gray-300 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

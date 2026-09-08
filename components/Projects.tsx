import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="mb-16">
          <p className="text-cyan-400 font-medium mb-3">MY PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-52 bg-[#0B1120]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="text-cyan-400 text-sm font-medium mt-2">
                  {project.role}
                </p>

                <p className="text-gray-400 leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

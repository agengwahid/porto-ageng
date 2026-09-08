export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="mb-16">
          <p className="text-cyan-400 font-medium mb-3">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold">Get To Know Me</h2>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT */}
          <div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Bachelor of Informatics graduate from Ahmad Dahlan University
              with a GPA of 3.91/4.00, completed in 3.5 years. Passionate
              about backend development, cloud computing, and web
              application development.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mt-6">
              Experienced as a Teaching Assistant and a graduate of the MSIB
              Bangkit Academy (Cloud Computing) program. A collaborative and
              analytical individual with strong problem-solving skills,
              eager to contribute to developing scalable and reliable
              software solutions.
            </p>

            {/* EDUCATION */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <p className="font-medium text-white">
                    Ahmad Dahlan University (UAD)
                  </p>
                  <p className="text-gray-400 text-sm">
                    Bachelor of Informatics · GPA 3.91/4.00 · 2022 – 2026
                  </p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="font-medium text-white">
                    SMA Negeri 1 Lebong
                  </p>
                  <p className="text-gray-400 text-sm">
                    Science Major · 2019 – 2022
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
                <h3 className="text-3xl font-bold text-cyan-400">3.91</h3>
                <p className="text-gray-400 mt-2">GPA / 4.00</p>
              </div>

              <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
                <h3 className="text-3xl font-bold text-cyan-400">17+</h3>
                <p className="text-gray-400 mt-2">Certificates Earned</p>
              </div>

              <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
                <h3 className="text-3xl font-bold text-cyan-400">4+</h3>
                <p className="text-gray-400 mt-2">Projects Completed</p>
              </div>

              <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
                <h3 className="text-3xl font-bold text-cyan-400">2</h3>
                <p className="text-gray-400 mt-2">Years as Teaching Asst.</p>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <p className="font-medium text-white">
                    Teaching Assistant — Informatics Laboratory, UAD
                  </p>
                  <p className="text-gray-500 text-sm">2023 – 2025</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Assisted lab sessions for Introduction to Programming,
                    Programming Algorithms, Informatics Logic, and Operating
                    Systems.
                  </p>
                </div>

                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="font-medium text-white">
                    Staff of Science and Technology Department — HMIF
                  </p>
                  <p className="text-gray-500 text-sm">2023 – 2024</p>
                </div>

                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="font-medium text-white">
                    Steering Committee, Informatics Week — UAD
                  </p>
                  <p className="text-gray-500 text-sm">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

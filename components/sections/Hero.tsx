import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-400 mb-4 font-medium tracking-wide">
            HELLO, I&apos;M
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Muhammad Ageng Zayem Wahid
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300 font-semibold">
            Backend & Cloud Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
            Informatics graduate (GPA 3.91/4.00) from Ahmad Dahlan
            University, passionate about backend development, cloud
            computing, and building scalable, reliable web applications.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-10 text-gray-400">
            <a
              href="https://github.com/agengwahid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ageng14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:agngwahid123@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
            <Image
              src="/images/profile.jpg"
              alt="Ageng Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#09101d]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 font-medium mb-3">GET IN TOUCH</p>
        <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Work Together</h2>

        <p className="text-gray-400 leading-relaxed mt-6 max-w-2xl mx-auto">
          I&apos;m open to backend, cloud, and web development opportunities.
          Feel free to reach out — I usually reply within a day.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="mailto:agngwahid123@gmail.com"
            className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
          >
            Email Me
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14 text-left">
          <a
            href="mailto:agngwahid123@gmail.com"
            className="bg-[#111827] p-5 rounded-2xl border border-gray-800 hover:border-cyan-400 transition"
          >
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-white mt-1 break-all">agngwahid123@gmail.com</p>
          </a>

          <a
            href="tel:+6282178040716"
            className="bg-[#111827] p-5 rounded-2xl border border-gray-800 hover:border-cyan-400 transition"
          >
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="text-white mt-1">+62 821-7804-0716</p>
          </a>

          <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
            <p className="text-gray-500 text-sm">Location</p>
            <p className="text-white mt-1">Yogyakarta, Indonesia</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10 text-gray-400">
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
        </div>
      </div>
    </section>
  );
}

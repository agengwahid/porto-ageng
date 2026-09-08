import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0B1120] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

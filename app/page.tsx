import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollKunai from "@/components/ScrollKunai";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col selection:bg-orange-500/30 selection:text-orange-200 relative">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Certificates />
        <Contact />
      </main>
      <ScrollKunai />
      <Footer />
    </div>
  );
}


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollKunai from "@/components/ScrollKunai";
import KuramaBackground from "@/components/KuramaBackground";
import SideNinjaScrollRails from "@/components/SideNinjaScrollRails";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-hidden">
      {/* Dynamic Animated Ambient Background */}
      <KuramaBackground />

      {/* Side Telemetry Scroll Rails */}
      <SideNinjaScrollRails />

      <Navbar />
      <main id="main-content" className="flex-1 relative z-10">
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


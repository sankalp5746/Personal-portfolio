import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import PersonalProjects from "@/components/PersonalProjects";
import Contact from "@/components/Contact";
import RetroGame from "@/components/RetroGame";

export default function Home() {
  return (
    <main className="relative selection:bg-phosphor-green selection:text-black">
      {/* CRT Overlay Effects */}
      <div className="crt-overlay mix-blend-overlay" />
      <div className="crt-vignette mix-blend-multiply" />
      <div className="noise-overlay" />
      <div className="scan-sweep" />
      <div className="grid-bg" />

      {/* Components mapped in exact layout order */}
      <NavBar />
      <div className="relative z-10">
        <Hero />
        <RetroGame />
        <Projects />
        <Skills />
        <PersonalProjects />
        <Contact />
      </div>

      <footer className="relative border-t border-phosphor-green border-opacity-10 py-6 sm:py-8" aria-label="Site footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[10px] text-terminal-muted">
            <span className="text-phosphor-green opacity-60">© </span>
            {new Date().getFullYear()} SANKALP BENDALE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/sankalp5746" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-terminal-muted hover:text-phosphor-green transition-colors">GH</a>
            <a href="https://www.linkedin.com/in/sankalp-bendale-03a646233" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-terminal-muted hover:text-phosphor-green transition-colors">IN</a>
            <a href="https://x.com/SankalpBen92720" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-terminal-muted hover:text-phosphor-green transition-colors">X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

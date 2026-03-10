import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-16 pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden" aria-label="Hero section">
      {/* Corner Borders */}
      <div className="absolute top-20 left-4 sm:left-6 lg:left-16 w-8 sm:w-12 h-8 sm:h-12 border-t border-l border-phosphor-green opacity-20" aria-hidden="true" />
      <div className="absolute top-20 right-4 sm:right-6 lg:right-16 w-8 sm:w-12 h-8 sm:h-12 border-t border-r border-phosphor-green opacity-20" aria-hidden="true" />
      <div className="absolute bottom-12 left-4 sm:left-6 lg:left-16 w-8 sm:w-12 h-8 sm:h-12 border-b border-l border-phosphor-green opacity-20" aria-hidden="true" />
      <div className="absolute bottom-12 right-4 sm:right-6 lg:right-16 w-8 sm:w-12 h-8 sm:h-12 border-b border-r border-phosphor-green opacity-20" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto w-full">
        {/* Reserved space for any typed text or spacer */}
        <div className="font-mono text-xs mb-8 sm:mb-10 space-y-1 min-h-[100px] sm:min-h-[140px]" />
        
        <div className="transition-all duration-700 opacity-100 animate-fade-up">
          <h1 className="font-mono font-bold leading-[0.85] tracking-tighter mb-6">
            <span className="block text-terminal-muted text-base sm:text-lg md:text-xl font-normal mb-3 sm:mb-4 glow-green-sm" style={{ color: "rgba(0,255,65,0.5)" }}>
              {"> "}Hello, world. I'm
            </span>
            <span className="block text-[clamp(2.8rem,10vw,8rem)] text-terminal-primary hover:animate-glitch transition-all" style={{ textShadow: "0 0 60px rgba(0,255,65,0.08)" }}>
              SANKALP
            </span>
            <span className="block text-[clamp(1.1rem,4vw,3.2rem)] mt-2" style={{ color: "#00FF41" }}>
              <span className="glow-green" />
              <span className="cursor-blink text-phosphor-green ml-1">_</span>
            </span>
          </h1>
          
          <p className="font-mono text-xs sm:text-sm md:text-base text-terminal-secondary max-w-xl mt-6 sm:mt-8 mb-8 sm:mb-12 leading-relaxed">
            <span className="text-phosphor-green opacity-60">{"// "}</span>
            CSE graduate & Jr Software Developer at Meril Life Sciences. Building web apps, Java solutions, and ML models from Vapi, Gujarat.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a className="btn-terminal text-center min-h-[44px] flex items-center justify-center hover:animate-flicker" href="#projects">
              {"./view_projects"}
            </a>
            <a target="_blank" rel="noopener noreferrer" className="btn-terminal text-center min-h-[44px] flex items-center justify-center hover:animate-glitch-2" style={{ borderColor: "rgba(0, 212, 255, 0.4)", color: "#00D4FF" }} href="https://github.com/sankalp5746">
              <span style={{ textShadow: "0 0 8px rgba(0,212,255,0.6)" }}>{"github://sankalp5746"}</span>
            </a>
            <a href="mailto:sankalpbendale2002@gmail.com" className="btn-terminal text-center min-h-[44px] flex items-center justify-center hover:animate-flicker border-dashed" style={{ borderColor: "rgba(255,165,0,0.4)", color: "#FFA500" }}>
              {"./hire_me"}
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 border-t border-phosphor-green border-opacity-10 pt-6 sm:pt-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xl sm:text-2xl font-bold text-phosphor-green glow-green-sm">1+ yr</span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-terminal-muted">Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xl sm:text-2xl font-bold text-phosphor-green glow-green-sm">7+</span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-terminal-muted">Projects Built</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xl sm:text-2xl font-bold text-phosphor-green glow-green-sm">10+</span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-terminal-muted">Tech Skills</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xl sm:text-2xl font-bold text-phosphor-green glow-green-sm">Vapi, GJ</span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-terminal-muted">Location</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 float-anim" aria-hidden="true">
        <span className="font-mono text-[9px] tracking-widest uppercase text-terminal-secondary">scroll_down</span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-phosphor-green to-transparent" />
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-phosphor-green text-sm opacity-60">{"// section_02"}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-phosphor-green to-transparent opacity-20" />
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-terminal-primary tracking-tight">
            my<span className="text-phosphor-green glow-green">.</span>projects
          </h2>
          <p className="font-mono text-xs sm:text-sm text-terminal-secondary mt-4 max-w-lg">
            <span className="text-phosphor-green opacity-50">{"> "}</span>
            Client work delivered + personal projects built for learning and impact.
          </p>
        </div>
        
        <div className="flex gap-2 mb-8 sm:mb-10">
          <button className="font-mono text-xs px-4 py-2.5 min-h-[44px] transition-all text-phosphor-green border border-[#00ff41]/40 bg-[#00ff41]/10">
            {"./client_work (5)"}
          </button>
          <button className="font-mono text-xs px-4 py-2.5 min-h-[44px] transition-all text-terminal-muted border border-terminal-muted/20 hover:text-crt-blue hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10">
            {"./personal (3)"}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Essence UAE */}
          <a href="https://essenceuae.com/" target="_blank" rel="noopener noreferrer" className="glass-terminal rounded-sm p-5 sm:p-6 group block glow-box-green-hover" style={{ animationDelay: "0ms" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00FF41", boxShadow: "0 0 6px #00FF41" }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#00FF41" }}>live</span>
              </div>
              <svg className="w-4 h-4 text-terminal-muted group-hover:text-phosphor-green transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h3 className="font-mono text-base sm:text-lg font-bold text-terminal-primary group-hover:text-phosphor-green transition-colors mb-2">Essence UAE</h3>
            <p className="font-mono text-xs text-terminal-secondary leading-relaxed mb-4">Tax accounting and consultancy agency website with a fully dynamic frontend and custom admin panel.</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-terminal-muted flex flex-wrap gap-2">
                <span className="tech-badge text-[9px] py-0.5 px-1.5 border-none bg-phosphor-green/5">PHP</span>
                <span className="tech-badge text-[9px] py-0.5 px-1.5 border-none bg-phosphor-green/5">Full Stack</span>
              </span>
            </div>
          </a>

          {/* Megh Automation */}
          <a href="https://www.meghautomation.com/" target="_blank" rel="noopener noreferrer" className="glass-terminal rounded-sm p-5 sm:p-6 group block glow-box-green-hover" style={{ animationDelay: "0ms" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00FF41", boxShadow: "0 0 6px #00FF41" }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#00FF41" }}>live</span>
              </div>
              <svg className="w-4 h-4 text-terminal-muted group-hover:text-phosphor-green transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h3 className="font-mono text-base sm:text-lg font-bold text-terminal-primary group-hover:text-phosphor-green transition-colors mb-2">Megh Automation Vapi</h3>
            <p className="font-mono text-xs text-terminal-secondary leading-relaxed mb-4">Industrial automation company website with product catalog, service pages, and contact integration.</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-terminal-muted">Web Design & Development</span>
            </div>
          </a>
          
          {/* Sten Mech */}
          <a href="https://stenmech.com/" target="_blank" rel="noopener noreferrer" className="glass-terminal rounded-sm p-5 sm:p-6 group block glow-box-green-hover" style={{ animationDelay: "80ms" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00FF41", boxShadow: "0 0 6px #00FF41" }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#00FF41" }}>live</span>
              </div>
              <svg className="w-4 h-4 text-terminal-muted group-hover:text-phosphor-green transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h3 className="font-mono text-base sm:text-lg font-bold text-terminal-primary group-hover:text-phosphor-green transition-colors mb-2">Sten Mech</h3>
            <p className="font-mono text-xs text-terminal-secondary leading-relaxed mb-4">Engineering solutions company website with responsive design and modern UI/UX.</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-terminal-muted">Web Design & Development</span>
            </div>
          </a>

          {/* Summer House Hotel */}
          <a href="https://summerhousedaman.com/" target="_blank" rel="noopener noreferrer" className="glass-terminal rounded-sm p-5 sm:p-6 group block glow-box-green-hover" style={{ animationDelay: "160ms" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00FF41", boxShadow: "0 0 6px #00FF41" }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#00FF41" }}>live</span>
              </div>
              <svg className="w-4 h-4 text-terminal-muted group-hover:text-phosphor-green transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h3 className="font-mono text-base sm:text-lg font-bold text-terminal-primary group-hover:text-phosphor-green transition-colors mb-2">Summer House Hotel</h3>
            <p className="font-mono text-xs text-terminal-secondary leading-relaxed mb-4">Hotel booking and hospitality website with room showcase, amenities, and booking flow.</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-terminal-muted">Web Design & Development</span>
            </div>
          </a>

          {/* Creative Traders */}
          <a href="https://www.creativetraders.in/" target="_blank" rel="noopener noreferrer" className="glass-terminal rounded-sm p-5 sm:p-6 group block glow-box-green-hover" style={{ animationDelay: "240ms" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00FF41", boxShadow: "0 0 6px #00FF41" }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#00FF41" }}>live</span>
              </div>
              <svg className="w-4 h-4 text-terminal-muted group-hover:text-phosphor-green transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h3 className="font-mono text-base sm:text-lg font-bold text-terminal-primary group-hover:text-phosphor-green transition-colors mb-2">Creative Traders</h3>
            <p className="font-mono text-xs text-terminal-secondary leading-relaxed mb-4">Trading company website with product listings, company profile, and inquiry system.</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-terminal-muted">Web Design & Development</span>
            </div>
          </a>
        </div>

        {/* Work Experience */}
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted">work_experience.log</span>
            <div className="flex-1 hr-terminal" />
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="glass-terminal p-4 sm:p-6 rounded-sm border-l-2" style={{ borderColor: "#00FF41" }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-mono text-sm sm:text-base font-bold text-terminal-primary">Jr Software Developer</h3>
                  <span className="font-mono text-xs" style={{ color: "#00FF41" }}>Meril Life Sciences</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-sm" style={{ background: "rgba(0,255,65,0.15)", border: "1px solid rgba(0,255,65,0.3)", color: "#00FF41" }}>CURRENT</span>
                  <span className="font-mono text-[10px] text-terminal-muted">May 2025 – Current</span>
                </div>
              </div>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Continuously collaborating with teams to design, develop many applications and web solutions.</p>
            </div>
            
            <div className="glass-terminal p-4 sm:p-6 rounded-sm border-l-2" style={{ borderColor: "#00D4FF" }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-mono text-sm sm:text-base font-bold text-terminal-primary">Full Stack Web Developer</h3>
                  <span className="font-mono text-xs" style={{ color: "#00D4FF" }}>Softweb Vapi</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[10px] text-terminal-muted">Sep 2024 – Jan 2025</span>
                </div>
              </div>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Designed, developed, and maintained responsive web applications tailored to client needs.</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted">education.log</span>
            <div className="flex-1 hr-terminal" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="glass-terminal p-4 sm:p-5 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-mono text-xs sm:text-sm font-bold text-terminal-primary">Bachelor's Degree — Computer Science</h3>
                <span className="font-mono text-xs" style={{ color: "#00FF41" }}>SPPU / Logimieer Nashik</span>
              </div>
              <span className="font-mono text-[10px] text-terminal-muted flex-shrink-0">2021 – 2024</span>
            </div>
            <div className="glass-terminal p-4 sm:p-5 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-mono text-xs sm:text-sm font-bold text-terminal-primary">Higher Secondary</h3>
                <span className="font-mono text-xs" style={{ color: "#00D4FF" }}>GSEB / Upasana Lions Eng Med Vapi</span>
              </div>
              <span className="font-mono text-[10px] text-terminal-muted flex-shrink-0">2019 – 2020</span>
            </div>
            <div className="glass-terminal p-4 sm:p-5 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-mono text-xs sm:text-sm font-bold text-terminal-primary">Senior Secondary</h3>
                <span className="font-mono text-xs" style={{ color: "#FFA500" }}>GSEB / Upasana Lions Eng Med Vapi</span>
              </div>
              <span className="font-mono text-[10px] text-terminal-muted flex-shrink-0">2017 – 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

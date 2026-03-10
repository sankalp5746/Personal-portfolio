export default function Skills() {
  return (
    <section id="stats" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16" aria-label="Skills and services">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-crt-blue text-sm opacity-60">{"// section_03"}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-crt-blue to-transparent opacity-20" />
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-terminal-primary tracking-tight">
            skills<span className="text-crt-blue glow-blue">.</span>tech<span className="text-crt-blue glow-blue">&amp;</span>services
          </h2>
        </div>
        
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted">skill_proficiency.sh</span>
            <div className="flex-1 hr-terminal" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            {/* HTML/CSS */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">HTML5 / CSS3</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#00FF41" }}>95%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "95%", background: "linear-gradient(90deg, #00FF4180, #00FF41)", boxShadow: "0 0 8px #00FF4140" }} />
              </div>
            </div>
            
            {/* JavaScript */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">JavaScript</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#F1E05A" }}>90%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "90%", background: "linear-gradient(90deg, #F1E05A80, #F1E05A)", boxShadow: "0 0 8px #F1E05A40" }} />
              </div>
            </div>

            {/* Java */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">Java</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#B07219" }}>90%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "90%", background: "linear-gradient(90deg, #B0721980, #B07219)", boxShadow: "0 0 8px #B0721940" }} />
              </div>
            </div>

            {/* Python */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">Python</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#3572A5" }}>90%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "90%", background: "linear-gradient(90deg, #3572A580, #3572A5)", boxShadow: "0 0 8px #3572A540" }} />
              </div>
            </div>

            {/* PHP */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">PHP</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#4F5D95" }}>89%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "89%", background: "linear-gradient(90deg, #4F5D9580, #4F5D95)", boxShadow: "0 0 8px #4F5D9540" }} />
              </div>
            </div>

            {/* MySQL */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">MySQL</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#00D4FF" }}>85%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "85%", background: "linear-gradient(90deg, #00D4FF80, #00D4FF)", boxShadow: "0 0 8px #00D4FF40" }} />
              </div>
            </div>

            {/* C / C++ */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">C / C++</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#F34B7D" }}>85%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "85%", background: "linear-gradient(90deg, #F34B7D80, #F34B7D)", boxShadow: "0 0 8px #F34B7D40" }} />
              </div>
            </div>

            {/* WordPress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">WordPress</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#21759B" }}>90%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "90%", background: "linear-gradient(90deg, #21759B80, #21759B)", boxShadow: "0 0 8px #21759B40" }} />
              </div>
            </div>

            {/* CSS3 */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">CSS3</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#563D7C" }}>93%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "93%", background: "linear-gradient(90deg, #563D7C80, #563D7C)", boxShadow: "0 0 8px #563D7C40" }} />
              </div>
            </div>

            {/* jQuery */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-xs text-terminal-secondary">jQuery</span>
                <span className="font-mono text-xs font-bold" style={{ color: "#0769AD" }}>75%</span>
              </div>
              <div className="h-2 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-sm transition-all duration-1000 ease-out" style={{ width: "75%", background: "linear-gradient(90deg, #0769AD80, #0769AD)", boxShadow: "0 0 8px #0769AD40" }} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted">services.json</span>
            <div className="flex-1 hr-terminal" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass-terminal p-4 sm:p-5 rounded-sm glow-box-green-hover">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="font-mono text-sm font-bold text-terminal-primary mb-2">Web Design</h3>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Creating visually appealing and user-friendly website layouts focused on aesthetics and usability.</p>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm glow-box-green-hover">
              <div className="text-2xl mb-3">🏷️</div>
              <h3 className="font-mono text-sm font-bold text-terminal-primary mb-2">Branding</h3>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Building unique brand identity with logo design and consistent brand messaging.</p>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm glow-box-green-hover">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-mono text-sm font-bold text-terminal-primary mb-2">Analytics</h3>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Using data insights to measure and improve website performance and user engagement.</p>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm glow-box-green-hover">
              <div className="text-2xl mb-3">💻</div>
              <h3 className="font-mono text-sm font-bold text-terminal-primary mb-2">Web Development</h3>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Developing robust and scalable websites with latest technologies across all devices.</p>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm glow-box-green-hover">
              <div className="text-2xl mb-3">☕</div>
              <h3 className="font-mono text-sm font-bold text-terminal-primary mb-2">Java Developer</h3>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Building robust enterprise-level applications using Java with secure, high-performance solutions.</p>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm glow-box-green-hover">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-mono text-sm font-bold text-terminal-primary mb-2">Python &amp; ML</h3>
              <p className="font-mono text-xs text-terminal-secondary leading-relaxed">Data analysis, automation, and machine learning solutions for data-driven decisions.</p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted">tech_stack.json</span>
            <div className="flex-1 hr-terminal" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-terminal p-4 sm:p-5 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-widest text-phosphor-green opacity-60 mb-3 sm:mb-4">Languages</div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Java</span><span className="tech-badge">Python</span><span className="tech-badge">JavaScript</span><span className="tech-badge">PHP</span><span className="tech-badge">C/C++</span><span className="tech-badge">SQL</span>
              </div>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-widest text-phosphor-green opacity-60 mb-3 sm:mb-4">Frontend</div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">HTML5</span><span className="tech-badge">CSS3</span><span className="tech-badge">React</span><span className="tech-badge">jQuery</span><span className="tech-badge">Bootstrap</span><span className="tech-badge">WordPress</span>
              </div>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-widest text-phosphor-green opacity-60 mb-3 sm:mb-4">Backend</div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">PHP</span><span className="tech-badge">Node.js</span><span className="tech-badge">Java Spring</span><span className="tech-badge">REST APIs</span><span className="tech-badge">MySQL</span>
              </div>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-widest text-phosphor-green opacity-60 mb-3 sm:mb-4">ML &amp; Data</div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Python</span><span className="tech-badge">Machine Learning</span><span className="tech-badge">Data Analysis</span><span className="tech-badge">Scikit-learn</span><span className="tech-badge">Pandas</span>
              </div>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-widest text-phosphor-green opacity-60 mb-3 sm:mb-4">Tools</div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Git</span><span className="tech-badge">GitHub</span><span className="tech-badge">NetBeans</span><span className="tech-badge">VS Code</span><span className="tech-badge">Postman</span>
              </div>
            </div>
            
            <div className="glass-terminal p-4 sm:p-5 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-widest text-phosphor-green opacity-60 mb-3 sm:mb-4">Services</div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Web Design</span><span className="tech-badge">Branding</span><span className="tech-badge">Analytics</span><span className="tech-badge">Web Development</span><span className="tech-badge">Java Apps</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

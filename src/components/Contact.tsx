"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16" aria-label="Contact form">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-crt-blue text-sm opacity-60">{"// section_05"}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-crt-blue to-transparent opacity-20" />
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-terminal-primary tracking-tight">
            hire<span className="text-crt-blue glow-blue">.</span>me
          </h2>
          <p className="font-mono text-xs sm:text-sm text-terminal-secondary mt-4 max-w-lg">
            <span className="text-crt-blue opacity-50">{"> "}</span>
            Let's collaborate to turn your vision into a fully functional and visually appealing digital product. Contact me today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">
          
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="glass-terminal rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-phosphor-green border-opacity-10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-phosphor-green opacity-60" />
                <span className="font-mono text-[10px] text-terminal-muted ml-2">contact_info.sh</span>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 font-mono text-xs">
                <div>
                  <span className="text-phosphor-green opacity-60">$ </span><span className="text-terminal-secondary">whoami</span>
                  <div className="mt-1 pl-4 text-terminal-primary">Sankalp Bendale — Jr Software Developer</div>
                </div>
                <div>
                  <span className="text-phosphor-green opacity-60">$ </span><span className="text-terminal-secondary">cat location.txt</span>
                  <div className="mt-1 pl-4 text-terminal-primary">Vapi, Gujarat, India 🇮🇳</div>
                </div>
                <div>
                  <span className="text-phosphor-green opacity-60">$ </span><span className="text-terminal-secondary">cat phone.txt</span>
                  <div className="mt-1 pl-4">
                    <a href="tel:+917202974138" className="text-terminal-primary hover:text-phosphor-green transition-colors">+91 72029 74138</a>
                  </div>
                </div>
                <div>
                  <span className="text-phosphor-green opacity-60">$ </span><span className="text-terminal-secondary">cat availability.txt</span>
                  <div className="mt-1 pl-4 text-phosphor-green glow-green-sm">Open to opportunities</div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-phosphor-green opacity-60">$ </span>
                  <span className="cursor-blink w-2 h-4 bg-phosphor-green inline-block" />
                </div>
              </div>
            </div>
            
            <div className="glass-terminal rounded-sm p-4 sm:p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted mb-3 sm:mb-4">./social_links</div>
              <div className="space-y-2 sm:space-y-3">
                <a href="https://github.com/sankalp5746" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group min-h-[44px]">
                  <span className="font-mono text-[10px] text-terminal-muted w-14 sm:w-16 flex-shrink-0">github</span>
                  <span className="font-mono text-xs text-terminal-secondary group-hover:text-phosphor-green transition-colors break-all">sankalp5746</span>
                </a>
                <a href="https://www.linkedin.com/in/sankalp-bendale-03a646233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group min-h-[44px]">
                  <span className="font-mono text-[10px] text-terminal-muted w-14 sm:w-16 flex-shrink-0">linkedin</span>
                  <span className="font-mono text-xs text-terminal-secondary group-hover:text-phosphor-green transition-colors break-all">sankalp-bendale</span>
                </a>
                <a href="https://x.com/SankalpBen92720" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group min-h-[44px]">
                  <span className="font-mono text-[10px] text-terminal-muted w-14 sm:w-16 flex-shrink-0">twitter</span>
                  <span className="font-mono text-xs text-terminal-secondary group-hover:text-phosphor-green transition-colors break-all">@SankalpBen92720</span>
                </a>
                <a href="mailto:sankalpbendale2002@gmail.com" rel="noopener noreferrer" className="flex items-center gap-3 group min-h-[44px]">
                  <span className="font-mono text-[10px] text-terminal-muted w-14 sm:w-16 flex-shrink-0">email</span>
                  <span className="font-mono text-xs text-terminal-secondary group-hover:text-phosphor-green transition-colors break-all">sankalpbendale2002@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-terminal rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-crt-blue border-opacity-10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-phosphor-green opacity-60" />
                <span className="font-mono text-[10px] text-terminal-muted ml-2">new_message.sh</span>
              </div>
              
              {status === "success" ? (
                <div className="p-4 sm:p-6 text-phosphor-green font-mono glow-green-sm">
                  <p>{"[SUCCESS] payload delivered successfully."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                  <input type="hidden" name="access_key" value="4fd2c554-cbfd-4d2a-a382-47b52cd72dd3" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted block mb-1.5">--firstname</label>
                      <input type="text" placeholder="Your firstname" required className="terminal-input w-full min-h-[44px]" name="Name" />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted block mb-1.5">--lastname</label>
                      <input type="text" placeholder="Your lastname" required className="terminal-input w-full min-h-[44px]" name="Lastname" />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted block mb-1.5">--email</label>
                    <input type="email" placeholder="your@email.com" required className="terminal-input w-full min-h-[44px]" name="Email" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted block mb-1.5">--subject</label>
                    <input type="text" placeholder="Subject of your message" required className="terminal-input w-full min-h-[44px]" name="Subject" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-terminal-muted block mb-1.5">--message</label>
                    <textarea name="Message" placeholder="> Hey Sankalp,&#10;> I'd like to discuss a project..." required rows={5} className="terminal-input resize-none w-full" />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <span className="font-mono text-[9px] text-terminal-muted">{status === "error" ? "[ERROR] Transmission failed!" : ""}</span>
                    <button type="submit" disabled={status === "submitting"} className="btn-terminal flex items-center gap-2 min-h-[44px] w-full sm:w-auto justify-center">
                      {status === "submitting" ? "./transmitting..." : "./send_message.sh"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

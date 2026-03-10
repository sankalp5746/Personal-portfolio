import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: "transparent", backdropFilter: "none", borderBottom: "1px solid transparent" }}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-3 sm:py-4 flex items-center justify-between" aria-label="Main navigation">
        <Link className="flex items-center gap-2 sm:gap-3 group" aria-label="DevFolio home" href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex-shrink-0 bg-gray-200" style={{ backgroundImage: "url('/assets/images/app_logo.png')", backgroundSize: 'cover' }}></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-sm sm:text-base font-bold text-terminal-primary hover:animate-glitch group-hover:text-phosphor-green transition-colors">
              sankalp<span className="text-phosphor-green glow-green-sm">@devfolio</span>
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] text-terminal-muted tracking-widest hidden sm:block">
              Jr Software Developer
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a className="font-mono text-sm text-terminal-secondary hover:text-phosphor-green transition-colors hover:glow-green-sm" href="#hero">{"./about"}</a>
          <a className="font-mono text-sm text-terminal-secondary hover:text-phosphor-green transition-colors hover:glow-green-sm" href="#projects">{"./projects"}</a>
          <a className="font-mono text-sm text-terminal-secondary hover:text-phosphor-green transition-colors hover:glow-green-sm" href="#stats">{"./skills"}</a>
          <a className="font-mono text-sm text-terminal-secondary hover:text-phosphor-green transition-colors hover:glow-green-sm" href="#blog">{"./work"}</a>
          <a className="font-mono text-sm text-terminal-secondary hover:text-phosphor-green transition-colors hover:glow-green-sm" href="#contact">{"./contact"}</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:sankalpbendale2002@gmail.com" className="btn-terminal text-xs py-2 px-4 min-h-[36px] flex items-center hover:animate-flicker border-dashed">
            Hire Me
          </a>
        </div>
        
        <button className="md:hidden font-mono text-terminal-secondary hover:text-phosphor-green transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Open menu" aria-expanded="false">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}

export default function GithubStats() {
  const username = "sankalp5746";

  return (
    <div className="section mt-8">
      <h2 className="section-title">GitHub Telemetry</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-[var(--term-dim)] p-2 bg-black/50">
          <p className="mb-2 opacity-70 {`// USER_STARS & COMMITS`}" />
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&bg_color=000000&title_color=33ff00&icon_color=ff3333&text_color=ffffff&border_color=1a8000`}
            alt="GitHub Stats" 
            className="w-full h-auto filter sepia-[.5] hue-rotate-[90deg] brightness-110 contrast-125"
          />
        </div>
        
        <div className="border border-[var(--term-dim)] p-2 bg-black/50">
          <p className="mb-2 opacity-70 {`// TOP_LANGUAGES`}" />
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&bg_color=000000&title_color=33ff00&text_color=ffffff&border_color=1a8000`}
            alt="Top Languages" 
            className="w-full h-auto filter sepia-[.5] hue-rotate-[90deg] brightness-110 contrast-125"
          />
        </div>
      </div>
    </div>
  );
}

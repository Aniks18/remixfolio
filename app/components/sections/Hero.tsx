import { useEffect, useRef } from "react";

type HeroProps = {
  data: {
    name: string;
    title: string;
    tagline: string;
    image: string;
  };
};

export default function Hero({ data }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a simple parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.parallax');
        
        elements.forEach((el) => {
          const speedX = Number((el as HTMLElement).dataset.speedX || 0);
          const speedY = Number((el as HTMLElement).dataset.speedY || 0);
          
          (el as HTMLElement).style.transform = `translate(${x * speedX}px, ${y * speedY}px)`;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 z-0 scanlines opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl parallax" data-speed-x="0.01" data-speed-y="0.01"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl parallax" data-speed-x="-0.01" data-speed-y="-0.01"></div>
      
      {/* Tech decorations */}
      <div className="absolute top-20 left-10 font-mono text-primary/20 parallax" data-speed-x="0.03" data-speed-y="0.01">
        &lt;html&gt;
      </div>
      <div className="absolute bottom-20 right-10 font-mono text-primary/20 parallax" data-speed-x="-0.03" data-speed-y="-0.01">
        &lt;/body&gt;
      </div>
      <div className="absolute top-40 right-20 font-mono text-accent/20 parallax" data-speed-x="-0.02" data-speed-y="0.02">
        const dev = true;
      </div>
      <div className="absolute bottom-40 left-20 font-mono text-accent/20 parallax" data-speed-x="0.02" data-speed-y="-0.02">
      {`while(alive) { code() }`}
      </div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-primary font-mono mb-2">
              <span className="inline-block animate-pulse mr-1">▶</span> Hello World!
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              I'm <span className="text-primary relative">
                {data.name}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-text-secondary">{data.title}</h2>
            <p className="text-text-secondary max-w-lg mb-8 leading-relaxed">{data.tagline}</p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="game-button">
                Start Conversation
              </a>
              <a href="#projects" className="border-2 border-primary px-6 py-3 rounded-md transition-all duration-300 hover:bg-primary/10 text-primary hover:text-white">
                Explore Projects
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <span className="text-text-secondary">Connect:</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aniket-kumar-58a10b292/"
                  target="_blank" 
                  rel="noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/niks_lnn18?igsh=MXM2MWNlYnJmdGR0Zg==" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className="hidden lg:block relative" 
            data-aos="fade-left" 
            data-aos-delay="300"
          >
            <div className="relative">
              <div className="relative z-10 pixel-border overflow-hidden rounded-lg w-72 h-72 mx-auto">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
                <div className="w-24 h-24 rounded-lg bg-primary/20 backdrop-blur-md -rotate-12 animate-float"></div>
              </div>
              <div className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4">
                <div className="w-32 h-32 rounded-lg bg-accent/20 backdrop-blur-md rotate-12 animate-float" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
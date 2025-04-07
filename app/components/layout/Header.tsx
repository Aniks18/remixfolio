import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-mono text-2xl font-bold">
          <span className="text-primary">function</span>
          <span className="text-white">(</span>
          <span className="text-accent">Aniket</span>
          <span className="text-white">)</span>
          <span className="text-primary"> {isScrolled ? "{...}" : "{ }"}</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-secondary hover:text-primary relative overflow-hidden group py-1"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="game-button text-sm py-2"
          >
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 bg-primary"></span>
            Resume.exe
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text-secondary hover:text-primary transition-colors py-2 border-b border-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary font-mono">&gt;</span> {item}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="game-button text-sm py-2 mt-4 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume.exe
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
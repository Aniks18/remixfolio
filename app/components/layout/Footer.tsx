import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="font-mono text-2xl font-bold">
              <span className="text-primary">function</span>
              <span className="text-white">(</span>
              <span className="text-accent">Aniket</span>
              <span className="text-white">)</span>
              <span className="text-primary"> { }</span>
            </Link>
            <p className="mt-4 text-text-secondary">
              B.Tech CSE Student & Tech Enthusiast passionate about building innovative solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <span className="text-primary font-mono">/</span> {item}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/aniket-kumar-58a10b292/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/niks_lnn18?igsh=MXM2MWNlYnJmdGR0Zg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            
            <div className="mt-4">
              <p className="text-text-secondary">
                <a href="mailto:ak7525@srmist.edu.in" className="hover:text-primary transition-colors">
                  ak7525@srmist.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-6 text-center text-text-secondary text-sm">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Aniket Kumar 
            <span className="h-3 w-0.5 bg-primary/30 inline-block"></span> 
            All Rights Reserved
          </p>
          <p className="mt-2 font-mono text-xs opacity-70">&lt;/&gt; with <span className="text-red-500">♥</span> using Remix</p>
        </div>
      </div>
    </footer>
  );
}
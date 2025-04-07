type AboutProps = {
    data: {
      bio: string;
      university: string;
      semester: string;
      interests: string[];
    };
  };
  
  export default function About({ data }: AboutProps) {
    return (
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
            <div className="lg:col-span-2" data-aos="fade-right" data-aos-delay="200">
              <div className="tech-card h-full">
                <div className="flex items-center mb-4">
                  <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <div className="ml-4 font-mono text-sm text-text-secondary">~/about/bio.txt</div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-6">
                  {data.bio}
                </p>
                
                <div className="font-mono text-sm text-primary mt-4">
                  <span className="text-white">$ </span>
                  <span className="typing-animation">
                    cat education.txt
                  </span>
                  <div className="mt-2 text-text-secondary">
                    <p>University: {data.university}</p>
                    <p>Current Semester: {data.semester}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-delay="300">
              <div className="tech-card h-full">
                <div className="flex items-center mb-4">
                  <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <div className="ml-4 font-mono text-sm text-text-secondary">~/about/interests.json</div>
                </div>
                
                <h3 className="font-mono text-lg mb-4">Areas of Interest</h3>
                
                <ul className="space-y-3">
                  {data.interests.map((interest, index) => (
                    <li 
                      key={index}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-text-secondary">{interest}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="game-button w-full flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
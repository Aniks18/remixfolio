type Experience = {
    id: number;
    position: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    technologies: string[];
    icon: string;
  };
  
  type ExperienceProps = {
    data: Experience[];
  };
  
  export default function Experience({ data }: ExperienceProps) {
    return (
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-background/90 relative">
        <div className="container mx-auto">
          <h2 className="section-title" data-aos="fade-up">Experience</h2>
          
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px"></div>
            
            {data.map((exp, index) => (
              <div 
                key={exp.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute top-0 left-0 md:left-auto w-5 h-5 rounded-full border-2 border-primary bg-background z-10
                    md:right-0 md:translate-x-1/2"
                  style={{
                    [index % 2 === 0 ? 'md:right' : 'md:left']: '-6.5px',
                  }}
                />
                
                <div className="tech-card relative">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 mr-3">
                      <img src={exp.icon} alt={exp.company} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{exp.position}</h3>
                      <p className="text-text-secondary text-sm">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-primary/70 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    {exp.location}
                    <span className="mx-2">•</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {exp.duration}
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, dIndex) => (
                      <li key={dIndex} className="flex">
                        <span className="text-primary mr-2">›</span>
                        <span className="text-text-secondary">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="text-xs bg-background/60 py-1 px-2 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
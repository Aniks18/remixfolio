type Subject = {
    name: string;
    grade?: string;
  };
  
  type Education = {
    id: number;
    institution: string;
    degree: string;
    duration: string;
    location: string;
    cgpa?: string;
    subjects: Subject[];
    logo: string;
  };
  
  type EducationProps = {
    data: Education[];
  };
  
  export default function Education({ data }: EducationProps) {
    return (
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="section-title" data-aos="fade-up">Education</h2>
          
          <div className="mt-12 space-y-8">
            {data.map((edu, index) => (
              <div 
                key={edu.id}
                className="tech-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/5 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-background/70 p-4 flex items-center justify-center shadow-lg">
                      <img 
                        src={edu.logo} 
                        alt={edu.institution} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-4/5">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <h4 className="text-lg text-primary mb-2">{edu.institution}</h4>
                    
                    <div className="flex flex-wrap text-sm text-text-secondary mb-4">
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {edu.duration}
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {edu.location}
                      </div>
                      {edu.cgpa && (
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          CGPA: {edu.cgpa}
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-medium mb-2">Key Subjects</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, sIdx) => (
                          <div 
                            key={sIdx}
                            className="bg-background/60 rounded-lg px-3 py-1.5 text-sm"
                          >
                            {subject.name}
                            {subject.grade && (
                              <span className="ml-1 text-primary font-mono">({subject.grade})</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
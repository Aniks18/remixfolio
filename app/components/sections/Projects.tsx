import { useState } from "react";
import { Link } from "@remix-run/react";

type Technology = {
  name: string;
  icon: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  github: string;
  demo?: string;
  featured: boolean;
};

type ProjectsProps = {
  data: Project[];
};

export default function Projects({ data }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? data 
    : data.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="bg-background/80 backdrop-blur-sm p-1 rounded-full border border-primary/30">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'all' ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'featured' ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'
              }`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="tech-card group overflow-hidden"
            >
              <div className="relative overflow-hidden h-48 -mx-4 -mt-4 mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold py-1 px-2 rounded">
                    Featured
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-text-secondary mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center bg-background/60 backdrop-blur-sm text-xs px-2 py-1 rounded"
                  >
                    {tech.icon && (
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-4 h-4 mr-1"
                      />
                    )}
                    {tech.name}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 border border-primary rounded text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-primary rounded text-white hover:bg-primary/80 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="game-button inline-flex items-center"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
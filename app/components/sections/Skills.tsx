type Skill = {
    name: string;
    level: number;
    icon: string;
  };
  
  type SkillCategory = {
    name: string;
    skills: Skill[];
  };
  
  type SkillsProps = {
    data: {
      programming: SkillCategory;
      frameworks: SkillCategory;
      databases: SkillCategory;
      others: SkillCategory;
    };
  };
  
  export default function Skills({ data }: SkillsProps) {
    return (
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-background/90 relative">
        <div className="container mx-auto">
          <h2 className="section-title" data-aos="fade-up">Tech Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {Object.entries(data).map(([category, { name, skills }], categoryIndex) => (
              <div 
                key={category}
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
                className="tech-card"
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-primary mr-3"></div>
                  <h3 className="text-xl font-bold">{name}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="group"
                    >
                      <div className="flex items-center mb-2">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-5 h-5 mr-2 filter grayscale group-hover:grayscale-0 transition-all"
                        />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transform origin-left transition-transform duration-1000"
                          style={{ 
                            width: `${skill.level}%`,
                            transform: 'scaleX(0)',
                            animation: `scaleIn 1s ease-out ${index * 0.1 + 0.5}s forwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16" data-aos="zoom-in" data-aos-delay="300">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-6 text-center">Tech Stack</h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[...data.programming.skills, ...data.frameworks.skills, ...data.databases.skills].map((skill, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 bg-background rounded-full flex items-center border border-primary/20 hover:border-primary/50 transition-colors group"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
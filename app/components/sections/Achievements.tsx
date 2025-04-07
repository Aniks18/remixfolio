type Achievement = {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    link?: string;
  };
  
  type AchievementsProps = {
    data: Achievement[];
  };
  
  export default function Achievements({ data }: AchievementsProps) {
    return (
      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="section-title" data-aos="fade-up">Achievements</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((achievement, index) => (
              <div 
                key={achievement.id}
                className="tech-card overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <div className="h-40 w-full relative overflow-hidden rounded-lg">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="text-sm text-primary font-mono mb-2">{achievement.date}</div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-text-secondary mb-4">{achievement.description}</p>
                    
                    {achievement.link && (
                      <a 
                        href={achievement.link}
                        className="inline-flex items-center text-primary hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                        <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
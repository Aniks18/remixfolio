import { useState } from "react";
import { Form } from "@remix-run/react";

type ContactProps = {
  data: {
    email: string;
    socials: {
      name: string;
      url: string;
      icon: string;
    }[];
  };
};

export default function Contact({ data }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-background/90 relative">
      <div className="container mx-auto">
        <h2 className="section-title" data-aos="fade-up">Contact Me</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="tech-card h-full">
              <h3 className="text-xl font-bold mb-6">Let's Talk</h3>
              <p className="text-text-secondary mb-8">
                Have a project in mind or just want to connect? Feel free to reach out and I'll get back to you as soon as possible.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-primary hover:underline"
                  >
                    {data.email}
                  </a>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  {data.socials.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center hover:border-primary transition-colors"
                      aria-label={social.name}
                    >
                      <img src={social.icon} alt={social.name} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pixel-border bg-background/30 p-4 relative">
                <div className="absolute -top-3 left-4 bg-background px-2 font-mono text-xs text-primary">
                  ./message.sh
                </div>
                <div className="font-mono text-sm">
                  <div><span className="text-primary">$</span> Contact me for</div>
                  <ul className="mt-2 space-y-1 text-text-secondary">
                    <li>
                      <span className="text-primary">›</span> Website development
                    </li>
                    <li>
                      <span className="text-primary">›</span> App development
                    </li>
                    <li>
                      <span className="text-primary">›</span> UI/UX design
                    </li>
                    <li>
                      <span className="text-primary">›</span> Freelance opportunities
                    </li>
                    <li>
                      <span className="text-primary">›</span> Collaboration on projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-delay="200">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-6">Send Message</h3>
              
              <Form method="post" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="game-button w-full"
                >
                  Send Message
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import Hero from "~/components/sections/Hero";
import About from "~/components/sections/About";
import Skills from "~/components/sections/Skills";
import Projects from "~/components/sections/Projects";
import Experience from "~/components/sections/Experience";
import Achievements from "~/components/sections/Achievements";
import Certifications from "~/components/sections/Certifications";
import Education from "~/components/sections/Education";
import Contact from "~/components/sections/Contact";

// Import JSON data
import heroData from "~/data/hero.json";
import aboutData from "~/data/about.json";
import skillsData from "~/data/skills.json";
import projectsData from "~/data/projects.json";
import experienceData from "~/data/experience.json";
import achievementsData from "~/data/achievements.json";
import certificationsData from "~/data/certifications.json";
import educationData from "~/data/education.json";
import contactData from "~/data/contact.json";

export const loader = async () => {
  return json({
    hero: heroData,
    about: aboutData,
    skills: skillsData,
    projects: projectsData,
    experience: experienceData,
    achievements: achievementsData,
    certifications: certificationsData,
    education: educationData,
    contact: contactData,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Experience data={data.experience} />
        <Achievements data={data.achievements} />
        <Certifications data={data.certifications} />
        <Education data={data.education} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
}
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Section id="home" className="pt-0">
          <Hero />
        </Section>
        
        <Section id="about" title="About Me">
          <About />
        </Section>
        
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        
        <Section id="projects" title="Featured Projects">
          <Projects />
        </Section>
        
        <Section id="experience" title="Professional Experience">
          <Experience />
        </Section>
        
        <Section id="education" title="Education">
          <Education />
        </Section>
        
        <Section id="certifications" title="Certifications">
          <Certifications />
        </Section>
        
        <Section id="achievements" title="Achievements">
          <Achievements />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

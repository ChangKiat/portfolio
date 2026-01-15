
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import AIPersona from './components/AIPersona';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] bg-indigo-500/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Interests />
        <Contact />
      </main>

      <footer className="py-12 text-center text-slate-500 border-t border-slate-900 mt-20">
        <p>© {new Date().getFullYear()} Alex. Built with React & Gemini AI.</p>
      </footer>

      {/* Persistent AI Assistant */}
      <AIPersona />
    </div>
  );
};

export default App;

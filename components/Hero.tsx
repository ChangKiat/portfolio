
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
      <div className="animate-float mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500">
          <img 
            src="https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/profile.jpg"
            alt="Chang Kiat" 
            className="w-full h-full rounded-full object-cover border-4 border-slate-950"
          />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Hello, I'm <span className="gradient-text">Chang Kiat</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
        A Senior Software Engineer dedicated to delivering robust, innovative solutions,
         with 5 years of hands-on experience across full product development cycles and strong expertise in Java, HTML, CSS, and MySQL.
      </p>
      
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="glass hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 gradient-text inline-block">My Journey</h2>
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
           With over 7 years of experience in software development, I’ve worked across full product lifecycles building and modernizing enterprise systems that solve real operational problems.
          </p>
          <p>
            My focus is on clean, maintainable backend solutions using Java, databases, and cloud technologies, while continuously improving system design and scalability.
          </p>
          <p>
            Lately, I’ve been exploring frontend modernization and automation to create more flexible, future-ready applications.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="glass rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <pre className="text-sm font-mono text-blue-400 overflow-x-auto">
            <code>{`const changkiat = {
  role: "Senior Software Engineer",
  skills: ["Java", "React", "SQL"],
  passion: "Trying New Thing",
  motto: "Talk is Cheap, Show me the code",
  status: "Exploring the edge of AI"
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;

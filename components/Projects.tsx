
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Echo AI',
    description: 'Real-time multi-lingual voice transcription and translation using advanced neural models.',
    tags: ['Next.js', 'AI', 'WebSockets'],
    imageUrl: 'https://picsum.photos/seed/echo/600/400',
  },
  {
    id: '2',
    title: 'Nexus System',
    description: 'A performance-first design system powering over 50 enterprise dashboard applications.',
    tags: ['TypeScript', 'Design System', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/nexus/600/400',
  },
  {
    id: '3',
    title: 'Lumina Visualization',
    description: 'High-frequency trading dashboard with real-time 3D data plotting using Three.js.',
    tags: ['React', 'Three.js', 'Data Viz'],
    imageUrl: 'https://picsum.photos/seed/lumina/600/400',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Work</h2>
          <p className="text-slate-400 max-w-md">A selection of projects where engineering meets artistry.</p>
        </div>
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">View All Archive →</a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-blue-600/30 text-blue-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex gap-4">
                <button className="text-sm font-medium hover:underline">Case Study</button>
                <button className="text-sm font-medium hover:underline">GitHub</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
